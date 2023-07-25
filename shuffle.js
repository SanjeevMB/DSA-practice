var shuffle = function(nums, n) {

    let shuffleArray = [];

    for (let i = 0; i < n; i++) {

        shuffleArray.push(nums[i],nums[n + i]);

    }

    return shuffleArray;
    
}

let shuffleResult = shuffle([1,2,3,4,4,3,2,1], 4);

console.log(shuffleResult);