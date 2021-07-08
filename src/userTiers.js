const axios = require('axios');
const fs = require('fs');
const { createAuthToken } = require('@plandid/server-utils');

const { serviceName } = JSON.parse(fs.readFileSync('./config.json'));

let userTiers = {};

async function updateUserTiers() {
    const res = await axios.get(new URL("userTiers", process.env.APPDATA_DRIVER_URL).href, {
        headers: {Authorization: `Basic ${createAuthToken(serviceName, process.env.SERVICE_ID)}`}
    });

    for (const tier of res.data) {
        userTiers[tier.name] = tier;
    }
}

module.exports = {
    userTiers: userTiers,
    updateUserTiers: updateUserTiers
}