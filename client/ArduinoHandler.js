const config = require("./config")

let axios = require("axios").default
axios = axios ? axios : require("axios")

const request = (data) => {
    return axios.post(`${config.url}/setpin`, {
        method: "POST",
        data,
        headers: {
            "content-type": "Application/json"
        }
    })
}

const setPin = (pin, value) => {
    return request({pin, value})
}

module.exports = { setPin }