const {countries} = require('./countries');

const name = ['Marie Curie', 'Donald Trump', 'Margaret Thatcher', 'John Doe', 'Ayn Rand', 'Adam Jensen'];
const company = ['Google', 'AppFollow', 'Microsoft', 'Amazon', 'Yandex', 'SCP Foundation'];
const country = countries.map(({country}) => country);
const vat = [''];
const zip_code = ['123456', '42001', 'CO10 0WF', 'NP20 2JB'];
const city = ['Moscow', 'New York City', 'London'];
const address = ['1112 Franklin Avenue', '4957 Yorkie Lane', '922 Grim Avenue', '4088 Freed Drive'];

module.exports = {
    name,
    company,
    country,
    vat,
    zip_code,
    city,
    address,
}
