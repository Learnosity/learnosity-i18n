const fs = require('fs');
const args = process.argv.slice(2);
const { execSync } = require('child_process');

/*
Usage:
node sort.js {arguments}
`arguments` is one or more file paths, separated by spaces.

The script updates each file by sorting the labels by their keys.

If no arguments are passed, all language files will be sorted.

Example:
node sort.js languages/de-DE/assess-api.json languages/de-DE/questions-api.json
node sort.js
*/
let files;

if (args.length) {
    files = args;
} else {
    files = execSync("find ./languages -type f -name '*.json'", {
        encoding: 'utf8'
    }).trim().split(/[\r\n]+/gm);
}

files.forEach((file) => {
    const text = fs.readFileSync(file);
    let result = JSON.parse(text);
    
    result = recursiveSort(result);
    result = JSON.stringify(result, null,'    ');
    fs.writeFileSync(file, result); 
});

function recursiveSort(obj) {
    const sortedKeys = Object.keys(obj).sort();
    let result = {};
    
    sortedKeys.forEach((key) => {
        const val = obj[key];

        // Do not sort arrays, as the order of elements is important.
        // E.g. reordering questions-api.json's characterMapCharacters would
        // cause the special characters to appear in a different order in
        // the product.
        if (val && typeof val === 'object' && !Array.isArray(val)) {
            result[key] = recursiveSort(val);
        } else {
            result[key] = val;
        }
    });

    return result;
}