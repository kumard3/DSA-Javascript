function addUpto(n: number) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}

addUpto(1000000000);

