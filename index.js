const express = require('express');
const app = express();
const {countries} = require('./countries');
const fakeData = require('./data');

const fields = [
    'name',
    'company',
    'country',
    'vat',
    'zip_code',
    'city',
    'address',
    'state',
];

const getRandomElement = (array) => array[Math.floor(Math.random() * array.length)];

const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile('index.html', {root: __dirname});
});

router.get('/billing_info', (req, res) => {
    const data = fields.reduce((acc, field) => {
        if (field === 'state') {
            const countryObject = countries.find(({country}) => acc.country === country);

            if (countryObject.states) {
                acc[field] = getRandomElement(countryObject.states);
            }
        } else {
            const fake = getRandomElement(fakeData[field]);

            acc[field] = fake;
        }


        return acc;
    }, {});

    res.json({countries, data});
});

router.post('/save', (req, res) => {
    const randomTime = Math.floor(Math.random() * 5) + 1;

    new Promise((resolve) => setTimeout(resolve, randomTime * 1000))
        .then(() => res.json({ok: 1}));
})

app.use(express.static('public'));
app.use(router);

const PORT = 1337;
app.listen(PORT, () => {
    console.log(`Server is up and running on http://127.0.0.1:${PORT}`);
});
