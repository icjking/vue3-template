module.exports = {
  printWidth: 100, // 超过最大值换行
  semi: true, // 句尾添加分号
  tabWidth: 2, // 缩进字节数
  useTabs: false, // 是否缩进使用tab
  vueIndentScriptAndStyle: false, // 是否缩进Vue文件中的代码<script>和<style>标签
  singleQuote: true, // 使用单引号代替双引号
  trailingComma: 'all', // 在对象或数组最后一个元素后面是否加逗号
  proseWrap: 'preserve', // 文本的换行，"always"：如果散文超过打印宽度，则换行；"never"：将每个散文块展开成一行；"preserve"：什么都不做，让散文保持原样
  htmlWhitespaceSensitivity: 'strict', // 让编辑器知道这是空格敏感模式，strict模式下，内容和上一个标签的 > 连载一起。这样可以对某些div的display被改为inline-block的情况也进行保护。只要coding的时候div或者span没有换行，prettier也不会自动去换行，以免引入空格造成样式问题
  endOfLine: 'auto', // 结尾是 \n \r \n\r auto
};
