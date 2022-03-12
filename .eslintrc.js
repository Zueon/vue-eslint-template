module.exports = {
  // 사전에 정의된 전역 변수 설정
  env: {
    browser: true,
    node: true,
  },
  // 사용 가능한 규칙 세트
  extends: [
    'eslint:recommended',
    'plugin:prettier-vue/recommended',
    'plugin:vue/vue3-strongly-recommended', // Lv2
  ],
  settings: {
    'prettier-vue': {
      // Settings for how to process Vue SFC Blocks
      SFCBlocks: {
        template: false,
        script: true,
        style: true,
      },
      fileInfoOptions: {
        ignorePath: '.testignore',
      },
    },
  },
  parserOptions: {
    sourceType: 'module',
  },
  // 추가적인 코드 규칙을 설정
  rules: {
    'no-unused-vars': 'warn',
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'never',
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      },
    ],
    'vue/html-closing-bracket-newline': [
      'error',
      {
        singleline: 'never',
        multiline: 'never',
      },
    ],
    'vue/multi-word-component-names': 'off',
    'prettier-vue/prettier': [
      'error',
      {
        arrowParens: 'avoid',
        bracketSpacing: true,
        endOfLine: 'auto',
        printWidth: 80,
        semi: true,
        singleQuote: true,
        tabWidth: 2,
        trailingComma: 'all',
        useTabs: false,
      },
    ],
  },
};
