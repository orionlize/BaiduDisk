const path = require('path');
const fs = require('fs');

const _webpackPath = {
  'background': {
    'background': path.resolve(__dirname, './background/index.ts'),
  },
  'contentScripts': [
    {
      'name': 'insert',
      'js': ['insert'],
      'entry': path.resolve(__dirname, './insert/index.tsx'),
      'run_at': 'document_end',
      'css': ['insert'],
    },
    {
      'name': 'insert_network',
      'js': ['insert_network'],
      'entry': path.resolve(__dirname, './network/index.ts'),
      'css': [],
      'run_at': 'document_start',
    },
    {
      'name': ['network'],
      'js': ['network'],
      'entry': path.resolve(__dirname, './network/xhr.ts'),
      'css': [],
      'run_at': 'document_not_load',
    },
  ],
};

const webpackPath = {
  'background': {
    ..._webpackPath.background,
  },
  'contentScripts': {},
};

_webpackPath.contentScripts.forEach((script) => {
  webpackPath.contentScripts[script.name] = script.entry;
});

module.exports = webpackPath;

/**
 * 重写配置信息
 */
const profilePath = path.resolve(__dirname, '../public/manifest.json');

fs.readFile(profilePath, (err, data) => {
  const profile = JSON.parse(data.toString());

  if (!profile.background) {
    profile.background = {
      'scripts': [],
      'persistent': false,
    };
  } else {
    profile.background.scripts = [];
  }

  // eslint-disable-next-line guard-for-in
  for (const key in _webpackPath.background) {
    profile.background.scripts.push(`./static/js/${key}.js`);
  }

  profile.content_scripts = [];
  _webpackPath.contentScripts.forEach((script) => {
    if (script.run_at !== 'document_not_load') {
      const js = [];
      const css = [];
      script.js.forEach((_js) => {
        js.push(`./static/js/${_js}.js`);
      });
      script.css.forEach((_css) => {
        css.push(`./static/css/${_css}.css`);
      });

      const contentScript = {
        'matches': ['*://pan.baidu.com/s/*'],
        'js': js,
        'run_at': script.run_at,
        'css': css,
      };

      profile.content_scripts.push(contentScript);
    }
  });

  fs.writeFile(profilePath, JSON.stringify(profile, null, 2), () => {});
});

