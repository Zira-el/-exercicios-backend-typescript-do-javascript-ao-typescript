const numbers: number[] = [0, 122, 4, 6, 7, 8, 44]
const numbers2: number[] = [0, 122, 4, 6, 8, 44]

const testIfNumbersAreEven = ((arrayNumbers: number[]): string => {
    const isEven: boolean = arrayNumbers.every(number => !(number % 2));

    if (isEven) {
        return `array válido.`
    }

    return `array inválido.`
});

console.log(testIfNumbersAreEven(numbers));
console.log(testIfNumbersAreEven(numbers2));