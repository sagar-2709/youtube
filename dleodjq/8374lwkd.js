function findSecondLargest(arr) {
    if (arr.length < 2) {
        return "Array should have at least two elements";
    }

    let largest = arr[0];
    let secondLargest = arr[1];

    if (secondLargest > largest) {
        [largest, secondLargest] = [secondLargest, largest];
    }

    for (let i = 2; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        } else if (arr[i] > secondLargest && arr[i] !== largest) {
            secondLargest = arr[i];
        }
    }

    if (secondLargest === undefined) {
        return "There is no second largest element in the array";
    } else {
        return secondLargest;
    }
}

// Example usage:
const arr = [12, 34, 10, 6, 40];
const result = findSecondLargest(arr);
console.log("The second largest number is:", result);
