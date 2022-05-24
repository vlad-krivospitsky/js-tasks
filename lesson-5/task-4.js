const PRICE = '$120';

function extractCurrencyValue(source) {
  if(typeof source === 'string') {
    let num = source.slice(1);
    console.log(Number(num));
  } else {
      throw new Error ('TypeError')
  }
}
extractCurrencyValue(PRICE); // 120

exports.extractCurrencyValue = extractCurrencyValue;