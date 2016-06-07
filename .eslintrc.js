module.exports = {
  root: true,
  extends: 'airbnb-base',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    'import/no-unresolved': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,

    'no-extra-semi': 2,
    'no-new': 1,
    'prefer-const': 1,
    'comma-dangle': 0,
    'space-before-function-paren': [2, "always"]
  }
}
