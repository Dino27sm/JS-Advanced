function sortArrayByTwoCriteria(inpArr){
    inpArr.sort((a, b) => (a.length - b.length) !== 0 ? (a.length - b.length) : a.localeCompare(b));

    inpArr.forEach(x => console.log(x));
}

sortArrayByTwoCriteria(['Isacc', 
'Theodor', 
'Jack', 
'Harrison', 
'George']
);
