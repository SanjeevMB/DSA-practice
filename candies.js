var kidsWithCandies = function (candies, extraCandies) {

    let largestNum = -Infinity;

    for (let i = 0; i < candies.length; i++) {

        if (candies[i] > largestNum) {

            largestNum = candies[i];

        }

    }

    let booleanArray = [];

    for (let j = 0; j < candies.length; j++) {

        if (candies[j] + extraCandies >= largestNum) {

            booleanArray.push(true);

        } else {

            booleanArray.push(false);

        }

    }

    return booleanArray;

}

let kidsWithCandiesResult = kidsWithCandies([2, 3, 5, 1, 3], 3);

console.log(kidsWithCandiesResult);