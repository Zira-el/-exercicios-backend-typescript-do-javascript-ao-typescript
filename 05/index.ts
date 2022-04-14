const arrayOfNumbers: number[] = [1, 98, -76, 0, 12, 19, 5, 60, 44]

const filterEven = ((numbers: number[]): number[] => {
    const filteredNumbers = numbers.filter(num => !(num % 2))
    return filteredNumbers
});

console.log(filterEven(arrayOfNumbers))