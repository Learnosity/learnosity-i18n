# learnosity-i18n
Learnosity internationalization language bundles.

Please refer to this [knowledgebase article](https://help.learnosity.com/hc/en-us/articles/360000758697-Internationalizing-and-Localizing-the-Assessment-Experience) for more info.

## Translations

If you would like to translate our APIs into another language, please make a pull request by adding `languages/<language>/<api>.json`.

For example:

```bash
├── languages
│   ├── en-GB
│   │   ├── assess-api.json
├── README.md
```

**Language Codes:**
We use language codes to support dialects within each top level language. English (United States) is the default language used in our APIs.

**Supported Language List:**
<table>
    <thead>
        <tr>
            <th width="320">Language</th>
            <th width="130">Code</th>
            <th width="130">Assess API</th>
            <th width="130">Author API</th>
            <th width="130">Question Editor API</th>
            <th width="130">Questions API</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Arabic (Egyptian)</td>
            <td>ar-EG</td>
            <td>Y</td>
            <td>Y</td>
            <td>Y</td>
            <td>Y</td>
        </tr>
        <tr>
            <td>English (United Kingdom)</td>
            <td>en-GB</td>
            <td>Y</td>
            <td>N</td>
            <td>N</td>
            <td>Y</td>
        </tr>
        <tr>
            <td>English (United States) - Default</td>
            <td>en-US</td>
            <td>Y</td>
            <td>Y</td>
            <td>Y</td>
            <td>Y</td>
        </tr>
        <tr>
            <td>French</td>
            <td>fr</td>
            <td>Y</td>
            <td>N</td>
            <td>N</td>
            <td>Y</td>
        </tr>
        <tr>
            <td>German</td>
            <td>de-DE</td>
            <td>Y</td>
            <td>N</td>
            <td>N</td>
            <td>Y</td>
        </tr>
        <tr>
            <td>Spanish</td>
            <td>es</td>
            <td>Y</td>
            <td>N</td>
            <td>N</td>
            <td>Y</td>
        </tr>
        <tr>
            <td>Tagalog</td>
            <td>tl</td>
            <td>Y</td>
            <td>N</td>
            <td>N</td>
            <td>N</td>
        </tr>

    </tbody>
</table>

For the Code column, the first lower-case two-letter codes is a valid ISO Language Code. These codes are defined by ISO-639. When picking your language code, please use the correct code from the 639-1 column [here](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes). The upper-case two-letter codes is a valid ISO Country Code. These codes are defined by ISO-3166. When picking your country code, please use the correct code from the Alpha-2 code column [here](https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes).

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## TODO
Add support for:
* Filipino
* Russian
* Portuguese
* Korean
