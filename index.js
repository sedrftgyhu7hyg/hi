const pancakeSort = (arr) => {
  const flip = (arr, k) => {
    let i = 0;
    while (i < k / 2) {
      [arr[i], arr[k - i]] = [arr[k - i], arr[i]];
      i++;
    }
  };
  const findMaxIndex = (arr, n) => {
    let maxIndex = 0;
    for (let i = 0; i < n; i++) {
      if (arr[i] > arr[maxIndex]) {
        maxIndex = i;
      }
    }
    return maxIndex;
  };
  let currentSize = arr.length;
  while (currentSize > 1) {
    const maxIndex = findMaxIndex(arr, currentSize);
    if (maxIndex !== currentSize - 1) {
      flip(arr, maxIndex);
      flip(arr, currentSize - 1);
    }
    currentSize--;
  }
  return arr;
};
