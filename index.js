function timesTable(num, limit) {
    let result = []
    for (let i = 1; i <= num; i++) {
        for (let j = 1; j <= limit; j++) {
            result.push(i * j)
        }
    }
    return result
}

console.log(timesTable(12, 12))
