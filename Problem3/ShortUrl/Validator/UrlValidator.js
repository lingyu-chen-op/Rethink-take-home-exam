/**
 * Customized URL Validator
 */

const { URL, parse } = require('url');

const stringIsAValidUrl = (s, protocols) => {
    try {
        new URL(s);
        const parsed = parse(s);
        return protocols
            ? parsed.protocol
                ? protocols.map(x => `${x.toLowerCase()}:`).includes(parsed.protocol)
                : false
            : true;
    } catch (err) {
        return false;
    }
};

let test = [];
test.push(stringIsAValidUrl('abc://www.example.com:777/a/b?c=d&e=f#g', ['http', 'https'])); // false
test.push(stringIsAValidUrl('abc://www.example.com:777/a/b?c=d&e=f#g')); // true
test.push(stringIsAValidUrl('www.google.com', ['http', 'https'])); // false
test.push(stringIsAValidUrl('https://www.google.com', ['http', 'https'])); // true
test.push(stringIsAValidUrl('https://www.linkedin.com/in/lingyu-chen-8877a8170/')); // true
test.push(stringIsAValidUrl('https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FThe_Child_(Star_Wars)&psig=AOvVaw1MsFjJGATABSaxuDOhu2JD&ust=1604691101110000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPC1lamS7OwCFQAAAAAdAAAAABAF')); // true

console.log(test)

module.exports = stringIsAValidUrl;