const two_d_Arr = [
    [-1, -1, 0, -9, -2, -2],
    [-2, -1, -6, -8, -2, -5],
    [-1, -1, -1, -2, -3, -4],
    [-1, -9, -2, -4, -4, -5],
    [-7, -3, -3, -2, -9, -9],
    [-1, -3, -1, -2, -4, -5],
]

function hourglassSum(arr) {
    let i = 0;
    let max = 0
    while (i + 2 < arr.length) {
        console.log(`i - ${i}`)
        console.log(arr[i])
        let j = 0
        while (j + 2 < arr[i].length) {
            console.log(`j - ${j}, hourglass is:`)
            let top = arr[i].slice(j, j + 3)
            let middle = arr[i + 1][j + 1]
            let bottom = arr[i + 2].slice(j, j + 3)
            console.log(top)
            console.log([0, middle, 0])
            console.log(bottom)
            let reducer = (accumulator, currentValue) => accumulator + currentValue
            console.log("reduced - ", top.reduce(reducer))
            let topReduced = top.reduce(reducer)
            let bottomReduced = bottom.reduce(reducer)
            let hourglassSum = topReduced + middle + bottomReduced
            i === 0 && j === 0 ? max = hourglassSum : null
            console.log(`hourglassSum - ${hourglassSum}`)
            hourglassSum > max ? (console.log(` ------------ new max - ${hourglassSum}`), max = hourglassSum) : null
            j++
        }
        console.log('\n')
        i++
    }
    return max
}

console.log(hourglassSum(two_d_Arr))