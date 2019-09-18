const Nexmo = require('nexmo');
const express = require('express');
const bodyParser = require('body-parser')

const app = express();
const port = process.env.PORT || 1337;
const nexmo = new Nexmo({
    apiKey: 'a69784fe',
    apiSecret: 'PQziCzEXzuAWRg4n',
});
app.use(bodyParser.urlencoded());

app.listen(port, () => console.log(`Server is running on ${port}`));

app.get('/', (req, res) => {
    res.sendfile('./index.html');
});

app.post('/send', (req, res) => {
    if (req.body) {
        const from = req.body.from;
        const to = req.body.to;
        const text = req.body.text;
        nexmo.message.sendSms(from, to, text);
    }
    res.redirect('/');
});
