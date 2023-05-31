const express = require('express');
const dotEnv = require('dotenv')
const dbConnexion = require('./config/dbConnexion');
// Load environment
dotEnv.config({ path: "./config/.env"})

// Constant
const PORT = process.env.PORT || 8001

// datbase initialization
dbConnexion()

// Express 
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/tasks', require('./routers/taskRouter'));

app.listen(PORT, () => {
  console.log("listening on port: http://localhost:" + PORT);
});