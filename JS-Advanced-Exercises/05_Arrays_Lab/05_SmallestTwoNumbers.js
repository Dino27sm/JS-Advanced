function smallestTwoNum (inputArray){
    inputArray.sort((a, b) => a - b);
    let slicedArr = inputArray.slice(0, 2);

    console.log(slicedArr.join(' '));
}

smallestTwoNum([3, 0, 10, 4, 7, 3]);
