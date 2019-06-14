// Javascript Foundations Assessments

// 1. Write an anonymous function that takes one argument of type number and decides if that number is evenly divisble by three or not. If it is, print the number and "is divisible by three" or, print the number and "is not divisble by three".

console.log('Is number evenly divisible by 3:')

var divByThree = function (num) {
    if (num % 3 === 0) {
        return `${num} is divisble by 3`
    } else {
        return `${num} isn't divisible by 3`
    }
}

console.log(divByThree(43))
console.log(divByThree(33) + '\n')

// 2. Write an object called helloMe. Include your first_name, last_name and at least two other properties of you. Write a function that returns a description of you.

console.log('Description of me:')

const helloMe = {
    first_name: "Jon",
    last_name: "Simpson",
    hair_color: "Brown",
    eye_color: "Brown",
    getDescription: function() {
        return `My name is ${this.first_name} ${this.last_name}. I have ${this.hair_color} hair & ${this.eye_color} eyes.`
    }
}
console.log(helloMe.getDescription() + '\n')

// 3. Create an array of 5 grocery items. Write a function that returns the first, middle, and last item as a string.

console.log('Grocery List:')
var grocery = ['milk', 'bread', 'eggs', 'cereal', 'chicken']

getGroceries = (array) => {
    return `${array[0]}, ${array[2]}, ${array[4]}`
    }
    
console.log(getGroceries(grocery) + '\n')

// 4. Write a function called alphabetSoup that takes an argument of "str" and return a string with the letters in alphabetical order (ie. learn becomes aelnr). Assume numbers and punctuation symbols will not be included in the parameter.

console.log('Alphabet in alphabetical order:')
alphabetSoup = (str) => {
    return str.split('').sort().join('')
}

console.log(alphabetSoup('alphabet') + '\n')

// 5. Given the arrays below, write a function animalNums that uses a for loop to print one value from each array concatenated together.

console.log('Animals:')
var nums = [9, 5, 88, 2, 5, 42, 57]

var nouns = ["ducks", "elephants", "pangolin", "rhinoceros", "giraffes", "penguins", "llamas"]

animalNums = (arr1,arr2) => {
    newArr =[]
    for(let i=0;i<arr1.length;i++){
        newArr.push(arr1[i] +' '+ arr2[i])
    }
    return newArr.join(", ")
}

console.log(animalNums(nums,nouns) + '\n')

// output should be: "9 ducks", etc

//6. Create an array of 5 numbers. Write a function that loops through the array and returns a new array of the numbers multiplied by 5.

console.log('Multiply nums in array by 5:')

var numbers = [13, 24, 26, 72, 99]

multiplyNums = (arr) => {
    return arr.map(value=>value * 5)
}

console.log(multiplyNums(numbers))
