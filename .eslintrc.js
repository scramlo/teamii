module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
    '@vue/standard',
    '@vue/typescript/recommended',
    'plugin:cypress/recommended'
  ],
  globals: {
    COMMITHASH: true,
    defineProps: "readonly",
    defineEmits: "readonly",
    defineExpose: "readonly",
    withDefaults: "readonly"
  },
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'func-call-spacing': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'import/first': 'off',
    semi: 'off',
    '@typescript-eslint/semi': ['error', 'always'],
    'comma-dangle': ['error', 'always-multiline'],
    indent: 'off',
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    'import/no-absolute-path': 'off',
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': ['error'],
    'vue/custom-event-name-casing': 'off', // because we use compiled templates anyway this does not affect us
    'vue/attribute-hyphenation': 'off', // because we use compiled templates anyway this does not affect us
    'vue/multiline-html-element-content-newline': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/html-self-closing': 'off',
    'vue/attribute-hyphenation': 'off',
    'vue/valid-v-model': 'off',
    'vue/no-unregistered-components': ['error', {
      "ignorePatterns": ['RouterView', 'RouterLink']
    }],
    'vue/v-on-event-hyphenation': ['error', 'never'],
    'vue/no-unused-properties': ['error', {
      groups: [
        'props',
        'data',
        'computed',
        'methods',
        'setup',
      ],
    }],
  },
  overrides: [
    {
      files: ['*.spec.js'],
      env: {
        jest: true,
      },
    },
  ],
};
