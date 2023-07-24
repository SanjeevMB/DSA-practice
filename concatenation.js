/* ===== Array.concat method ===== */

function arrayConcatenation () {

    let array1 = [1, 2, 3, 4, 5, 6];
    let array2 = [7, 8, 9, 10, 11, 12];
    let array3 = [13, 14, 15, 16, 17 , 18];

    let resultArray = array1.concat(array2, array3);
    
    return resultArray;

}

let arrayConcatenationResult = arrayConcatenation();

console.log(arrayConcatenationResult);