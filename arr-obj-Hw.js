//1.

const fruits = ["apple", "banana", "orange", "grape"];
fruits[2] = "kiwi";
console.log(fruits);

//2.

const numbers = [2, 4, 6, 8, 10];

    numbers.push(12);
    numbers.shift();

console.log(numbers);

//3.

const firstNames = ["John", "Emma", "Michael"];
const lastNames = ["Doe", "Smith", "Johnson"];
const fullNames = [];
for (let i = 0; i < firstNames.length; i++) {
    fullNames.push(firstNames[i] + ' ' + lastNames[i])
};

console.log(fullNames);

//4.

const ages = [25, 30, 18, 42, 15];
let sum = 0;
for (let i = 0; i < ages.length; i++) {
    sum += ages[i]
};

console.log(sum);

//5.

const scores = [85, 92, 78, 95, 88];
const filterHighScore = () => {
    return scores.filter(score => score >= 90)
};
const highScores = filterHighScore(scores);

console.log(highScores);

//6.

const countries = ["USA", "Canada", "Mexico", "France", "Germany"];
const checkForMexico = () => {
    countries.indexOf("Mexico")
};
let isMexicoFound;
if (countries !== -1) {
    isMexicoFound = ("Mexico is found in " + (countries));
} else {
    isMexicoFound = ("Mexico is not found in the array.");
};

console.log(isMexicoFound);


//7.

const numbers2 = [3, 7, 1, 9, 4];
const squareNumbers = () => {
    return numbers2.map(num => num * num)
};
let squareArray = squareNumbers(numbers2)

console.log(squareArray);

//8.

const grades = [87, 95, 76, 88, 92];
const sortGrades = () => {
    return grades.sort((a, b) => a - b)
}
let AscendingGrades = sortGrades(grades)

console.log(AscendingGrades);