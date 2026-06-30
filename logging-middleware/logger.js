const axios = require("axios");

async function Log(stack, level, packageName, message) {
    const response = await axios.post(
        "http://4.224.186.213/evaluation-service/logs",
        {
            stack,
            level,
            package: packageName,
            message
        },
        {
            headers: {
                Authorization: "Bearer YOUR_ACCESS_TOKEN",
                "Content-Type": "application/json"
            }
        }
    );

    return response.data;
}

module.exports = Log;