var fs = require('fs');
var obj = JSON.parse(fs.readFileSync('journal.json', 'utf8'));

var transaction = {
    "seq": 3,
    "description": "Transaction description 3",
    "value": 54,
    "accrualDate": "2017-05-23T18:25:43.511Z",
    "statementDate": "2017-05-24T12:00:00.000Z"
};

obj.push(transaction);

for (var element in obj) {
    process.stdout.write('Element: ' + element + '\n');
    for (var key in obj[element]) {
        process.stdout.write('\tKey: ' + key + '\n');
        process.stdout.write('\tValue: ' + obj[element][key] + '\n\n');
    }
}

process.stdout.write(JSON.stringify(obj));