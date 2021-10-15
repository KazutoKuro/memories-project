import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import postRoutes from './routes/posts.js';

const app = express();
dotenv.config();

app.use('/posts', postRoutes);

app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());

// const CONNECTION_URL = 'mongodb+srv://kurosz:asd123@nodetuts.hhvdf.mongodb.net/memories-project';
const PORT = process.env.PORT|| 5000;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`)))
  .catch((err) => console.log(err.message));

  // mongoose.set('useFindAndModify', false);

// database connection
// const dbURI = 'mongodb+srv://kurosz:asd123@nodetuts.hhvdf.mongodb.net/memories-project';
// mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then((result) => app.listen(3000))
//   .catch((err) => console.log(err));