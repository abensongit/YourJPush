const OFF = 'off';
const ERROR = 'error';
const WARNING = 'warn';

module.exports = {
  'extends': [
    'airbnb'
  ],
  'parser': 'babel-eslint',
  'env': {
    'es6': true,
    'browser': true,
    'commonjs': true,
    'mocha': true,
    'jest': true,
    'node': true
  },
  'plugins': [
    'react',
    'react-native',
    'flowtype',
    'import'
  ],
  'rules': {
    // 规则
    'semi': ERROR,
    'indent': [OFF, 2],
    'eqeqeq': ERROR,
    'quotes': [ERROR, 'single', {allowTemplateLiterals: true}],
    'comma-dangle': OFF,
    'no-alert': OFF,
    'no-console': OFF,
    'no-multi-spaces': ERROR,
    'no-undef': OFF,
    'no-unused-vars': [ERROR, {vars: 'local', args: 'none'}],
    'no-mixed-operators': OFF,
    'no-plusplus': OFF,
    'no-param-reassign': OFF,
    'class-methods-use-this': OFF,
    'radix': OFF,
    'max-len': OFF,
    'no-unused-expressions': OFF,

    // ES6
    'constructor-super': ERROR,
    'arrow-spacing': ERROR,
    'no-const-assign': ERROR,
    'no-var': ERROR,
    'prefer-const': ERROR,
    'prefer-spread': ERROR,
    'prefer-template': ERROR,
    'no-dupe-class-members': ERROR,
    'no-this-before-super': ERROR,
    'require-yield': OFF,
    'no-useless-escape': OFF,
    'no-use-before-define': OFF,
    'no-useless-concat': OFF,

    // Modules
    'import/no-commonjs': OFF,
    'import/first': ERROR,
    'import/no-duplicates': ERROR,
    'import/extensions': ERROR,
    'import/newline-after-import': ERROR,
    'import/named': ERROR,
    'import/prefer-default-export': OFF,
    'import/no-extraneous-dependencies': OFF,

    // React
    'react/sort-comp': OFF,
    'react/prop-types': OFF,
    'react/jsx-filename-extension': OFF,
    'react/prefer-stateless-function': OFF,
    'react/require-default-props': OFF,
    'react/jsx-uses-react': ERROR,
    'react/jsx-key': ERROR,
    'react/no-deprecated': ERROR,
    'react/jsx-max-props-per-line': [ERROR, {maximum: 4}],
    'react/jsx-uses-vars': ERROR,
    'react-native/no-unused-styles': ERROR,
    'react-native/split-platform-components': ERROR,
    'react/destructuring-assignment': OFF,

    // Flowtype
    'flowtype/define-flow-type': WARNING,
    'flowtype/no-weak-types': OFF
  },
  'globals': {
    'fetch': true,
    'console': true,
    'requestAnimationFrame': true,
    'expect': true
  }
};
