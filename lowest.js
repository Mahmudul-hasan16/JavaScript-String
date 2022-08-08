function minInArray(numbers) {


    console.log('Array insdie the array', numbers);
    let lowest = numbers[0];



    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];

        // HERE JUST CHANGE THE ARROW OF GREATER AN LOWER 
        if (lowest > element) {
            lowest = element;
        }

    }
    return lowest;



}

const heights = [167, 190, 120, 165, 137];
const lowest = minInArray(heights);
console.log(lowest);