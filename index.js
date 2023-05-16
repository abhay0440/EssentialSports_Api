const express = require('express')
const cors = require('cors');
const axios = require('axios');

const app = express()
const PORT = 4000

app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT} `)
})

app.use(cors());

app.get('/rss', async (req, res) => {
  try {
    console.log("//////////////")
    const response = await axios.get('https://www.essentiallysports.com/feed/');
    res.send(response.data);
  } catch (error) {
    console.log(error,"====");
    res.status(500).send('Error fetching RSS feed');
  }
});


app.get('/about', (req, res) => {
  res.send('This is my about route..... ')
})

// Export the Express API
module.exports = app