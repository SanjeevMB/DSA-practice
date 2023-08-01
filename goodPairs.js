var numIdenticalPairs = function (nums) {

    let pairCount = 0;

    for (let i = 0; i < nums.length - 1; i++) {

        let firstDigit = nums[i];

        for (let j = i + 1; j < nums.length; j++) {

            if (firstDigit == nums[j]) {

                pairCount++;

            }

        }

    }

    return pairCount;

}

let numIdenticalPairsResult = numIdenticalPairs([1, 1, 1, 1]);

console.log(numIdenticalPairsResult);