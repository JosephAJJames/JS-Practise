const sumOfElems = (arr) => {
  total = 0;
  arr.forEach((elem) => {
    total += elem;
  })
  console.log(total);
}

sumOfElems([1, 2, 3, 4]);
sumOfElems([5, 4, 9, 12]);

const findMax = (arr) => {
  max = 0;
  arr.forEach((elem, index) => {
    if (index === 0) {
      max = elem;
    }
    
    if (elem > max) {
      max = elem;
    }
  })
  console.log(max);
}

findMax([8, 2, 3, 5]);
findMax([4, 2, 7, 5]);

const filterEven = (arr) => {
  newArr = [];
  arr.forEach((elem) => {
    if (elem % 2 === 0) {
      newArr.push(elem);
    }
  })
  console.log(newArr);
  return newArr;
}

filterEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
filterEven([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);

const calcAvg = (arr) => {
  total = 0;
  for (x = 0; x < arr.length; x++) {
    total += arr[x];
  }
  avg = total / arr.length;
  console.log(avg);
}

calcAvg([1, 2, 3, 4, 5, 6]);
calcAvg([2, 4, 6, 8, 10, 12]);

const arrRev = (arr) => {
  newArr = [];
  arr.forEach((elem) => {
    newArr.unshift(elem);
  })
  console.log(newArr);
  return newArr;
}

arrRev([1, 2, 3, 4, 5, 6, 7]);
arrRev([8, 9, 10, 11, 12, 13]);

const elmApr = (arr, target) => {
  frq =  0;
  arr.forEach((elem) => {
    if (elem === target) {
      frq++;
    }
  })
  console.log(frq);
  return frq;
}

elmApr([1, 3, 4, 4, 4, 6, 6, 2, 3], 4);
elmApr([99, 33, 44, 56, 76, 76, 3], 76);

const rmvDup = (arr) => {
  uniqueArr = [];
  arr.forEach((elem) => {
    if (!uniqueArr.includes(elem)) {
      uniqueArr.push(elem);
    }
  })
  console.log(uniqueArr);
  return uniqueArr;
}

rmvDup([1, 3, 4, 4, 4, 6, 6, 2, 3]);
rmvDup([99, 33, 44, 56, 76, 76, 3]);

const findIndex = (arr, target) => {
  val = arr.indexOf(target);
  if (val !== -1) {
    console.log(val);
    return val;
  }
  console.log(-1);
  return -1;
}

findIndex([1, 2, 3, 4, 5, 6], 5);
findIndex([2, 3, 4, 5, 6, 7, 8], 1);

const bublSort = (arr) => {
  newArr = arr;
  for (x = 0; x < newArr.length; x++) {
    for (y = 0; y < newArr.length - 1; y++) {
      if (newArr[y] > newArr[y + 1]) {
        temp = newArr[y];
        newArr[y] = newArr[y + 1];
        newArr[y + 1] = temp;
      }
    }
  }
  console.log(newArr);
  return newArr;
}


bublSort([3, 5, 6, 1, 2, 8]);
bublSort([4, 1, 7, 8, 5, 3]);