/** @type {import('stylelint').Config} */
export default {
  extends: ['stylelint-config-standard-scss'],
  plugins: ['stylelint-scss'],
  rules: {
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
    'scss/dollar-variable-pattern': '^([a-z0-9]+(-[a-z0-9]+)*)$',
    'scss/selector-no-redundant-nesting-selector': true,
    'selector-class-pattern': [
      '^([a-z][a-z0-9]*)(-[a-z0-9]+)*(__[a-z0-9]+(-[a-z0-9]+)*)?(--[a-z0-9]+(-[a-z0-9]+)*)?$',
      {
        message: 'Classnames must follow the BEM methodology',
        url: 'https://en.bem.info/methodology/quick-start/#:~:text=BEM%20(Block%2C%20Element%2C%20Modifier,code%20without%20copying%20and%20pasting.'
      }
    ]
  }
};