const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello from Notification Service!');
});

app.listen(3000, () => {
    console.log('Notification Service running on port 3000');
});