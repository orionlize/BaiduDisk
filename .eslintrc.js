module.exports = {
  "env": {
    "browser": true,
    "es2021": true,
  },
  "globals": {
    "window": true,
    "chrome": true,
    "getDlinkShare": true,
  },
  "extends": [
    "plugin:react/recommended",
    "google",
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true,
    },
    "ecmaVersion": 12,
    "sourceType": "module",
  },
  "plugins": [
    "react",
    "@typescript-eslint",
  ],
  "rules": {
    "require-jsdoc": ["error", {
      "require": {
        "FunctionDeclaration": false,
        "MethodDefinition": false,
        "ClassDeclaration": false,
        "ArrowFunctionExpression": false,
        "FunctionExpression": false,
      },
    }],
    "quotes": [1, "single"], // 引号类型 `` "" ''
    "quote-props": [2, "always"], // 对象字面量中的属性名是否强制双引号
  },
};
