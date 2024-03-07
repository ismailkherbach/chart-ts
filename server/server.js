const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();

const PORT = 3001;
const API_BASE_URL = "https://api.stlouisfed.org/fred";
const API_KEY = "fb743621191436a63718a676c7c2b9be";

app.use(express.json());
app.use(cors());

app.get("/series", async (req, res) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/series/observations`, {
      params: {
        series_id: "GNPCA",
        api_key: API_KEY,
        file_type: "json",
      },
    });
    res.send(response.data);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:3001`);
});
