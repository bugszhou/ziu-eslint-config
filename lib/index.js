// http://eslint.org/docs/user-guide/configuring
module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
  },
  rules: {
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-console': 'off',
    // enforce 2 space indent
    'indent': ["error", 2, {"SwitchCase": 1}],
  },
  globals: {
    App: true,
    Page: true,
    Component: true,
    getApp: true,
    getDate: true,
    getCurrentPages: true,
    requirePlugin: true,
    wx: true,
    my: true,
    swan: true,
    tt: true,
  }
};
