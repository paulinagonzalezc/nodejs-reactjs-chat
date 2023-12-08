const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(express.json());
app.use(cors({origin: true}));

app.post('/authenticate', async (req, res) => {
  const {username} = req.body;

  try {
    const r = await axios.post(
      'https://api.chatengine.io/users/',
      {
        username: username,
        first_name: username,
        last_name: username,
        secret: username,
        custom_json: JSON.stringify({high_score: 2000}),
      },
      {headers: {'PRIVATE-KEY': '59fc57e4-e1f4-4510-ba74-5e13fb9d4df4'}},
    );
    return res.status(r.status).json(r.data);
  } catch (e) {
    if (e.response) {
      // Check if the response property exists
      return res.status(e.response.status).json(e.response.data);
    }
    return res.status(500).json({message: 'Internal Server Error'});
  }
});

app.listen(3001);
