const faker = require('faker');

function generateContent() {
    return {
        'randomOne': {uuid: faker.random.uuid()},
    };
}


module.exports = generateContent
