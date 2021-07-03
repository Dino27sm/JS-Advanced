function oddPositions(inputArr){
    let resultArr = inputArr.filter((x, i) => i % 2 !== 0)
                            .map(x => x * 2)
                            .reverse();
    console.log(resultArr.join(' '));
}

oddPositions([10, 15, 20, 25]);
