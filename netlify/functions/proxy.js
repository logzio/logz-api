// proxy.js
const fetch = require('node-fetch');

exports.handler = async function (event, context) {
  const { url, method, headers, body } = JSON.parse(event.body);

  try {
    const targetResponse = await fetch(url, {
      method,
      headers,
      body,
    });

    const targetData = await targetResponse.json();

    return {
      statusCode: targetResponse.status,
      body: JSON.stringify(targetData),
      headers: {
        'Access-Control-Allow-Origin': '*', // Replace with your actual origin
        'Content-Type': 'application/json',
      },
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' }),
      headers: {
        'Access-Control-Allow-Origin': '*', // Replace with your actual origin
        'Content-Type': 'application/json',
      },
    };
  }
};

