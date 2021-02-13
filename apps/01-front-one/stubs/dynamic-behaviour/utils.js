const randomTrueThreshold = 80/100;
exports.randomTrue = () => Math.random() < randomTrueThreshold;

const idSize = 1000000000;
exports.randomId = () => Math.floor(Math.random() * idSize);

