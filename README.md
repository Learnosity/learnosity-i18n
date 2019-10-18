# learnosity-i18n
Learnosity internationalization language bundles.

Please refer to this [knowledgebase article](https://help.learnosity.com/hc/en-us/articles/360000758697-Internationalizing-and-Localizing-the-Assessment-Experience) for more info.

## Translations

If you would like to translate our APIs into another language, please make a pull request by adding `languages/<language>/<api>.json`.

For example:

```bash
├── languages
│   ├── arabic
│   │   ├── assess-api_ar-EG.json
├── README.md
```

**Language Codes:**
We suffix language codes to the end of each filename to support dialects within each top level language.

**Supported Language List:**
<table> <tbody> <tr> <th width="175">Language</th> <th width="175">Code</th> <th width="175">Assess API</th> <th width="175">Author API</th> <th width="175">Question Editor API</th> <th width="175">Questions API</th> </tr><tr> <td width="175">Arabic (Egyptian)</td><td width="175">ar-EG</td><td width="175">Y</td><td width="175">Y</td><td width="175">Y</td><td width="175">Y</td></tr><tr> <td width="175">English (United Kingdom)</td><td width="175">en-GB</td><td width="175">Y</td><td width="175">N</td><td width="175">N</td><td width="175">Y</td></tr><tr> <td width="175">Spanish</td><td width="175">es</td><td width="175">Y</td><td width="175">N</td><td width="175">N</td><td width="175">Y</td></tr></tbody></table>

The first argument is a valid ISO Language Code. These codes are the lower-case two-letter codes as defined by ISO-639. When picking your language code, please use the correct code from the 639-1 column [here](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes)

The second argument to both constructors is a valid ISO Country Code. These codes are the upper-case two-letter codes as defined by ISO-3166. When picking your country code, please use the correct code from the Alpha-2 code column [here](https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes)

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## TODO
Add support for:
* English (Great Britain)
* Filipino
* French
* Russian
* Portuguese
* Korean
