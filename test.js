[
  'naqs',
  'ʔasíl̓',
  'kaʔłís',
  'mus',
  'yus',
  'l̓kʷut',
  'k̓ram',
  'k̓ʷul̓m',
  'l̓kalát',
  'aban',
  'rajab',
  'mesa',
  'smasq̓t',
  'mercedonius'
].forEach(month => {
  let hash = require('crypto').createHash('md5').update(month).digest("hex")
  console.log(hash)
})
