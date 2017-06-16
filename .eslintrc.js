module.exports = {
  "parser": "babel-eslint",  
  "extends": "eslint:recommended",
  "parserOptions": {
    "sourceType": "module",
    "ecmaVersion": 7,
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "env": {
    "browser": true,
    "node": true,
    "es6": true
  },
  "plugins": [
    "import",
    "react"
  ],
  "rules": {
    "no-unused-vars": "off",
    "no-console": "off",
    // 行尾必须加分号
    "semi": "off",
    // 文件末尾必须留空行
    "eol-last": "off"
  }
};