function keyboardMap(digits) {
  var map = ['', '', 'abc', 'def', 'ghi', 'jkl',
  'mno', 'pqrs', 'tuv', 'wxyz'];
  var result = []
  for (var i = 0 ; i < digits.length; i++) {
      // result = result 组合map[digits[i]]
      result = _compose(result, map[digits[i]])
  }

  function _compose(arr, word) {
      if (arr.length === 0) return word
      if (word.length === 0) return arr
      var r = []
      for (let i = 0 ; i < arr.length; i++) {
          for (let j = 0 ; j < word.length; j++) {
              r.push(arr[i] + word[j])
          }
      }
      return r
  }
  return result
}

console.log(keyboardMap('2345678'))
