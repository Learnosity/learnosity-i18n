const fs = require('fs');
const args = process.argv.slice(2);

/*
Usage:
node sort.js {arguments}
`arguments` is one or more file paths, separated by spaces.

The script updates each file by sorting the labels by their keys.

Example:
node sort.js languages/de-DE/assess-api.json languages/de-DE/questions-api.json
*/
args.forEach((arg) => {
    const text = fs.readFileSync(arg);
    const parsedJson = JSON.parse(text);
    const sortedKeys = Object.keys(parsedJson).sort();
    let result = {};
    
    sortedKeys.forEach((key) => {
        result[key] = parsedJson[key];
    });          
    
    result = JSON.stringify(result, null,'    ');
    fs.writeFileSync(arg, result); 
});
