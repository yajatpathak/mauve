import express from "express";
import axios from "axios";
import cors from "cors";
import { config } from "dotenv";

config();

const app = express();
app.use(cors());

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: process.env.RAWG_API_KEY,
  },
});

app.get("/:endpoint(*)", async (req, res) => {
  const { endpoint } = req.params;
  const out = await axiosInstance.get(endpoint, { params: req.query });
  res.send(out.data);
});

const PORT = process.env.VITE_REACT_APP_PORT || 8000;
app.listen(PORT);
