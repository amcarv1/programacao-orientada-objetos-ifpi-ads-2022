function ehPrimo(x: number): boolean {

    for (let divisor = 2; divisor < x; divisor++) {
        if (x % divisor == 0) {
            return false;
        }
    }

    return true;
}

console.log(ehPrimo(2));
console.log(ehPrimo(4));
