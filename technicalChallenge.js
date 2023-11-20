const divisibleNumberThreeAndFive = (number) => {
    if (number < 1 || typeof (number) != 'number')
        return 'Only whole numbers'

    const divisibleNumber = Array.from({ length: number }, (_, index) => index)
        .filter((num) => num % 3 === 0 || num % 5 === 0);

    const sum = divisibleNumber.reduce((acc, num) => acc + num, 0);

    return sum;
}

const number = 10

const resultNumber = divisibleNumberThreeAndFive(number)

console.log(resultNumber)