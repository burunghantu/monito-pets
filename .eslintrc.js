module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
    'vue/setup-compiler-macros': true
  },
  extends: [
    '@nuxtjs/eslint-config',
    '@nuxtjs',
    '@nuxtjs/eslint-config-typescript',
    'plugin:vue/base',
    'plugin:vue/vue3-essential',
    'plugin:vue/vue3-strongly-recommended',
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    'standard',
    './.nuxt/.eslint.globals.json',
    'prettier',
  ],
  parser: 'vue-eslint-parser',
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'vue',
    'prettier'
  ],
  rules: {
    'vue/no-v-html': 0,
    'vue/no-unused-components': 'error',
    // 'vue/no-undef': 0,
    'vue/multi-word-component-names': 0,
    '@typescript-eslint/no-unused-vars': [
      'off'
    ]
  }
}
