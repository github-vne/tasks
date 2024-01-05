function reduceRight<T, U>(initArr: T[], callback: (acc: U, value: T) => U, initAcc?: U): U {
  const initArrLength = initArr.length;
  if (!initArrLength) return initAcc;

  let res = initAcc !== undefined ? initAcc : (initArr[initArrLength - 1] as unknown as U);
  let lastIndex = initAcc !== undefined ? initArrLength - 1 : initArrLength - 2;

  for (let i = lastIndex; i >= 0; i--) {
    res = callback(res, initArr[i]);
  }

  return res;
}

// Examples

console.log(reduceRight(['a', 'b', 'c'], (acc, value) => acc + value)); // 'cba'
console.log(reduceRight(['a', 'p', 'p', 'l', 'e'], (acc, value) => acc + value)); // 'elppa'
console.log(reduceRight(['e', 's', 'u', 'o', 'h', '_'], (acc, value) => acc + value, 'my')); // 'my_house'
