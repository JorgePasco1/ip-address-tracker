const axios = require('axios');
const express = require('express');
const requestIp = require('request-ip');

const IPIFY_API_BASE_URL = 'https://geo.ipify.org/api/v2/country,city';
process.env.IPIFY_API_KEY;
const IPIFY_API_KEY = process.env.IPIFY_API_KEY;

const router = express.Router();

router.get('/ipInfo', async (req, res) => {
  function concatenateIpParameter(url, ipAddress) {
    if (!ipAddress) return url;
    return `${url}&ipAddress=${ipAddress}`;
  }

  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  try {
    const reqUrl = concatenateIpParameter(`${IPIFY_API_BASE_URL}?apiKey=${IPIFY_API_KEY}`, ip);
    const response = await axios.get(reqUrl);
    console.log(response.data)
    res.status(200).json(response.data);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({
      error: 'Internal server error',
    });
  }
});

module.exports = router;
