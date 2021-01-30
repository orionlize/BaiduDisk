const path = require('path');
const fs = require('fs');

const _webpackPath = {
  background: {
    background: path.resolve(__dirname, './background/index.ts'),
  },
  contentScripts: [
    {
      name: 'insert',
      path: path.resolve(__dirname, './insert/index.tsx'),
      run_at: 'document_end',
      css: '',
    },
    {
      name: 'insert_network',
      path: path.resolve(__dirname, './network/index.ts'),
      css: '',
      run_at: 'document_start',
    },
    {
      name: 'network',
      path: path.resolve(__dirname, './network/xhr.ts'),
      css: '',
      run_at: 'document_not_load',
    },
  ],
};

const webpackPath = {
  background: {
    ..._webpackPath.background,
  },
  contentScripts: {},
};

_webpackPath.contentScripts.forEach((script) => {
  webpackPath.contentScripts[script.name] = script.path;
});

module.exports = webpackPath;

/**
 * 重写配置信息
 */
const profilePath = path.resolve(__dirname, '../public/manifest.json');

fs.readFileSync(profilePath, (err, data) => {
  const profile = JSON.parse(data.toString());

  if (!profile.background) {
    profile.background = {
      scripts: [],
      persistent: false,
    };
  } else {
    profile.background.scripts = [];
  }

  for (const key in _webpackPath.background) {
    profile.background.scripts.push(`./static/js/${key}.js`);
  }

  profile.content_scripts = [];
  _webpackPath.contentScripts.forEach((script) => {
    if (script.run_at !== 'document_not_load') {
      const contentScript = {
        matches: ['*://pan.baidu.com/s/*'],
        js: [`./static/js/${script.name}.js`],
        run_at: script.run_at,
      };
      if (script.css) {
        contentScript.css = [`./static/css/${script.css}.css`];
      }

      profile.content_scripts.push(contentScript);
    }
  });

  fs.writeFileSync(profilePath, JSON.stringify(profile, null, 2), () => {});
});

