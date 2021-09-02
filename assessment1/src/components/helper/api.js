const headers = {
    "Accept": "application/json",
    "Content-Type": "application/json"
}
const pullData = (url, init, callback) => fetch(url, init)
    .then(res => res.json())
    .then(data => callback(data))
    .catch(err => callback({error: err}))

export const post = (url, payload, callback) => {
    const init = {
        method: 'POST',
        headers,
        body: JSON.stringify(payload)
    }
    pullData(url, init, callback)
}

export const get = (url, callback) => {
    const init = {
        method: 'GET',
        headers,
    }
    pullData(url, init, callback)
}
