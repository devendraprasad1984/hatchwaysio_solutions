export const deepCopy = (data) => JSON.parse(JSON.stringify(data))
export const getAverage = data => {
    let len = data.length
    if (len === undefined) return 0
    if (len === 0) return 0
    return data.reduce((a, b) => (parseInt(a) + parseInt(b)), 0) / len
}
export const padBy10 = val => val.padStart(10, '-')
