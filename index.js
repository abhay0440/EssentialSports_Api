// const express = require('express');
// const axios = require('axios');
// const cors = require('cors');

// const app = express();
// const port = 3001; // The port your proxy server will run on

// app.use(cors());

// app.get('/rss', async (req, res) => {
//   try {
//     const response = await axios.get('https://www.essentiallysports.com/feed/');
//     res.send(response.data);
//   } catch (error) {
//     res.status(500).send('Error fetching RSS feed');
//   }
// });

// app.listen(port, () => {
//   console.log(`Proxy server listening on port ${port}`);
// });




// index.js
const express = require('express')

const app = express()
const PORT = 4000

app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT} `)
})

app.get('/', (req, res) => {
  res.send('Hey this is my API running 🥳')
})

app.get('/about', (req, res) => {
  res.send('This is my about route..... ')
})

// Export the Express API
module.exports = app
