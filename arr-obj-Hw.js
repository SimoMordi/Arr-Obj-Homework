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

let isMexicoFound;
if (countries.includes("Mexico") ) {
    isMexicoFound = ("Mexico is found");
} else {
    isMexicoFound = ("Mexico is not found");
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

//9.

const data = [10, 20, 30, 40, 50];
const doubleData = () => {
    return data.map(num => num * 2)
}
let doubleDataArray = doubleData(data)
console.log(doubleDataArray);

//10.

const values = [34, 12, 78, 53, 90];
const maxValue = Math.max(...values);
console.log(maxValue);


///////////OOBJECTS

let movie = {
    name: "Titanic",
    releaseYear: 1997,
    director: "James Cameron",
    actors: ["Leonardo Dicaprio", "Kate Winslet", "Billy Zane", "Kathy Bates"],
    starActor: {
        name: "Leonardo Dicaprio",
        age: 5,
        born: 1889,
        linkToAwards: "https://en.wikipedia.org/wiki/List_of_awards_and_nominations_received_by_Leonardo_DiCaprio",
        headshotLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Leonardo_DiCaprio_2014.jpg/220px-Leonardo_DiCaprio_2014.jpg"
    },
    budgetInMillions: 200
};

//1.
movie.starActor.age = 48;
console.log(movie.starActor.age);
//2.
movie.starActor.born = 1989;
console.log(movie.starActor.born);
//3.
movie.starActor.isPopular = true;
console.log(movie.starActor.isPopular);
//4.
movie.isGoodMovie = undefined;
console.log(movie.isGoodMovie);
//5.

let cohortFour = {
    classSize: 5,
    instructor: {
        name: "Fred",
        age: 40,
        completedCohortIds: [3, 77, 45, 23],
        email: "fred@fred.com",
        assistant: {
            name: "Brad",
            age: 38,
            email: "Brad@brad.com"
        }
    },
    classGrades: [99, 100, 89, 88, 95]
};

//1.

let checkClassSize;
if (cohortFour.classSize > 10) {
    checkClassSize = "classSize is Greater than 10"
} else {
    checkClassSize = "classSize is Less than 10"    
}
console.log(checkClassSize);

//2.

let completedCohort;
if (cohortFour.instructor.completedCohortIds.length > 2) {
    completedCohort = true
} else {
    completedCohort = false
}
console.log(completedCohort);

//3.

const changeAssistant = () => {
    cohortFour.instructor.assistant.name = "Sam"
    cohortFour.instructor.assistant.age = "23"
    cohortFour.instructor.assistant.email = "sam@gmail.com"
}
changeAssistant()
console.log(cohortFour.instructor.assistant);

//4.

let isCompletedCohort;
if (cohortFour.instructor.completedCohortIds.includes(55)){
    isCompletedCohort = true
} else {
    isCompletedCohort = false
}

console.log(cohortFour.instructor.completedCohortIds);
console.log(isCompletedCohort);

//5.

let sumGrades;

const calculateAverageGrade = () => {
    sumGrades = cohortFour.classGrades.reduce((Total, Grade) => Total + Grade, 0 )
    averageGrade = sumGrades / cohortFour.classGrades.length 
}
calculateAverageGrade()
console.log(sumGrades);
console.log(averageGrade)

    

