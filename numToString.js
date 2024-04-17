function numToString( intValue ) {
  // write code here
  if (!intValue) return '0'
  const mapText = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  if (intValue < 36) return mapText[intValue];
  let result = '';
  let rest = intValue;
  while (rest >= 36) {
    const remain = rest % 36;
    result = mapText[remain] + result;
    rest = Math.floor(rest / 36);
  }
  return mapText[rest] + result;
}

console.log(numToString(1988))
