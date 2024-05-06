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