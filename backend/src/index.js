const express = require('express')
const cors = require('cors')

const app = express();
app.use(cors())
app.use(express.json());

const TaksRoutes = require('./routes/TaskRoutes');
app.use('/task', TaksRoutes);

app.listen(3333, () => {
    console.log('API Online')
})