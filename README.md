# learnosity-i18n
This repository contains Learnosity internationalization language bundles originally put together as POC for customers to see how the APIs can be translated. You can see these bundles in action in our [internationalization demo](https://demos.learnosity.com/assessment/activities-i18n.php).

Please refer to this [knowledge base article](https://help.learnosity.com/hc/en-us/articles/360002918818-Translating-the-Learnosity-user-interface-with-label-bundles) for more information about translating the Learnosity user interface.

Each file in this repository corresponds to the RFC-5646 locale code for each language. This contains the language and region separated by a dash, e.g. en-US, de-DE, or ar-EG.

The default language in all Learnosity APIs is en-US.

## Purpose
The purpose of these files is to show how the Learnosity Authoring, Assessment, and Reporting APIs can be translated or adjusted to suit individual needs. These are **not officially supported** by Learnosity but can serve as a solid base for any customer interested to translate the user interface.

## What is a label bundle?
Our label bundles translate user-interface elements, such as buttons, dialogs, and labels. This means that customers will need to translate their question content (eg the question stems), this gives you the flexibility to pick and choose which UI elements to localize. For example, you might typically localize a student's assessment player (assess-api.json, and possibly portions of questions-api.json, depending on what they want to use). But you may only have to add translations for the specific reports you intend to use if any (reports-api.json).

## Disclaimer
These label bundles provided by Learnosity were created to illustrate the capabilities for translation of the Learnosity interface. Note, many of these language bundles are machine-translated, so you will want to verify all of these translations with native speakers before putting them into production. See the table below for information about the translations, some of which were translated by volunteers.

Due to our fast pace of innovation, some new features in the product will not be translated, yet.

## Custom translations
If you would like to translate our APIs into another language, please make a pull request by adding `languages/label_bundles/<language>-<region>/<api>.json`.

For example:

```bash
├── languages
│   ├── en-GB
│   │   ├── label_bundles
│   │   │   ├── assess-api.json
├── README.md
```

## Structure
Each language contains 4 _possible_ folders:

 * author_assets
 * label_bundles
 * qe\_custom\_types
 * qe\_template\_thumbnails

### author_assets
The Author API has an image that contains an English string. This is used when the item list is empty (either no items exist, or the search returned no results). See pt-PT for a sample of how this can be used to replace the default image.

### label_bundles
This is the main folder containing a JSON file for each of the APIs that support translations:

 * assess-api.json
 * author-api.json
 * questioneditor-api.json
 * questions-api.json
 * reports-api.json

#### Sample initialization
##### Assessment
To override labels for the Items API (Learnosity's primary assessment API) you can use the following initialization object, note there are 2 locations to pass translations:

1. the assessment player (*assess-api.json*) in `config.labelBundle`
2. individual question types (*questions-api.json*) in `config.questions_api_init_options.labelBundle`:

```
{
    "activity_id": "[YOUR-ACTIVITY-ID]",
    "name": "[YOUR-ASSESSMENT-NAME]",
    "rendering_type": "assess",
    "type": "submit_practice",
    "session_id": "[YOUR-SESSION-ID]",
    "user_id": "[YOUR-ASSESSMENT-USER]",
    "config": {
        "labelBundle": {
            
        },
        "questions_api_init_options": {
            "labelBundle": {
                
            }
        }
    }
}

```

##### Authoring
To override labels for the Author API (Learnosity's primary authoring API) you can use the following initialization object, note there are 3 locations to pass translations:

1. the authoring wrapper (*author-api.json*) in `config.label_bundle`
2. the question editing layer (*questioneditor-api.json*) in `config.dependencies.question_editor_api.init_options.label_bundle`
3. where question types are rendered in `config.dependencies.questions_api.init_options.labelBundle`

**Note:** that there is a discrepancy between the Assessment and Authoring APIs around the format of the label bundle attribute. Assessment uses `labelBundle` while Authoring uses `label_bundle`. This is due to a later decision in Authoring to standardize using snake_case. 


```
{
    "mode": "item_list",
    "config": {
        "label_bundle": {
            
        },
        "dependencies": {
            "question_editor_api": {
                "init_options": {
                    "group_defaults": true,
                    "question_type_groups": [
                        
                    ],
                    "question_type_templates": {
                        
                    },
                    "label_bundle": {
                    
                    }
                }
            },
            "questions_api": {
                "init_options": {
                    "labelBundle": {
                        
                    }
                }
            }
        }
    },
    "user": {
        "id": "demos-site",
        "firstname": "demos",
        "lastname": "User"
    }
}

```


##### Reporting
To override labels for the Reports API you can use the following initialization object:

```
{
	"reports": [
	
	],
	"label_bundle": {
	
	}
}
```

### qe\_custom\_types
This folder can contain 2 files for Question Editor API custom [groups](https://help.learnosity.com/hc/en-us/articles/360000755178-Customizing-the-Tile-View-With-Author-API) and [templates](https://help.learnosity.com/hc/en-us/articles/360000758097-Customizing-Question-Attributes-and-Templates):

 * question\_type\_groups.json
 * question\_type\_templates.json

Question Type Groups can be used to localize the categories of question types available to authors in the left-hand sidebar.

Question Type Templates define the collection of JSON attributes shown (along with localized default values) to authors when editing a question type.


### qe\_template\_thumbnails
When creating questions, authors can select which question type template they want to use. This UI displays a series of thumbnail images that preview a sample of how the question type will render, allowing authors to make the right decision.

Ideally, these static images would be refreshed with new (translated) content. This is a location you can choose to store these thumbnails.

## Language List
The following table summarizes the language files available to try:

<table>
    <thead>
        <tr>
        		<th colspan="2">&nbsp;</th>
        		<th colspan="2">Authoring</th>
        		<th colspan="2">Assessment</th>
        		<th>Reporting</th>
        </tr>
        <tr>
            <th>Language</th>
            <th width="60">Code</th>
            <th>Author API</th>
            <th>Question Editor API</th>
            <th>Assess API</th>
            <th>Questions API</th>
            <th>Reports API</th>
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
            <td>N</td>
        </tr>
        <tr>
            <td>Chinese (Simplified)</td>
            <td>zh-CN</td>
            <td>Y</td>
            <td>Y</td>
            <td>Y</td>
            <td>Y</td>
            <td>Y</td>
        </tr>
        <tr>
            <td>Dutch (Netherlands)</td>
            <td>nl-NL</td>
            <td>Y</td>
            <td>Y</td>
            <td>Y</td>
            <td>Y</td>
            <td>Y</td>
        </tr>
        <tr>
            <td>English (United Kingdom)</td>
            <td>en-GB</td>
            <td>Y</td>
            <td>Y</td>
            <td>Y</td>
            <td>Y</td>
            <td>N</td>
        </tr>
        <tr>
            <td>English (United States) - <em>Default</em></td>
            <td>en-US</td>
            <td>Y</td>
            <td>Y</td>
            <td>Y</td>
            <td>Y</td>
            <td>Y</td>
        </tr>
        <tr>
            <td>French</td>
            <td>fr-FR</td>
            <td>Y</td>
            <td>Y</td>
            <td>Y</td>
            <td>Y</td>
            <td>Y</td>
        </tr>
        <tr>
            <td>German</td>
            <td>de-DE</td>
            <td>Y</td>
            <td>Y</td>
            <td>Y</td>
            <td>Y</td>
            <td>Y</td>
        </tr>
        <tr>
            <td>Hindi</td>
            <td>hi-IN</td>
            <td>Y</td>
            <td>Y</td>
            <td>Y</td>
            <td>Y</td>
            <td>Y</td>
        </tr>
        <tr>
            <td>Italian</td>
            <td>it-IT</td>
            <td>Y</td>
            <td>Y</td>
            <td>Y</td>
            <td>Y</td>
            <td>Y</td>
        </tr>
        <tr>
            <td>Japanese</td>
            <td>ja-JP</td>
            <td>Y</td>
            <td>Y</td>
            <td>Y</td>
            <td>Y</td>
            <td>Y</td>
        </tr>
        <tr>
            <td>Korean</td>
            <td>ko-KR</td>
            <td>Y</td>
            <td>Y</td>
            <td>Y</td>
            <td>Y</td>
            <td>Y</td>
        </tr>
        <tr>
            <td>Portuguese</td>
            <td>pt-PT</td>
            <td>Y</td>
            <td>Y</td>
            <td>Y</td>
            <td>Y</td>
            <td>Y</td>
        </tr>
        <tr>
            <td>Russian</td>
            <td>ru-RU</td>
            <td>Y</td>
            <td>Y</td>
            <td>Y</td>
            <td>Y (partial)</td>
            <td>N</td>
        </tr>
        <tr>
            <td>Spanish</td>
            <td>es-ES</td>
            <td>Y</td>
            <td>Y</td>
            <td>Y</td>
            <td>Y</td>
            <td>Y</td>
        </tr>
        <tr>
            <td>Swedish</td>
            <td>sv-SE</td>
            <td>Y</td>
            <td>Y</td>
            <td>Y</td>
            <td>Y</td>
            <td>Y</td>
        </tr>
        <tr>
            <td>Tagalog</td>
            <td>tl-PH</td>
            <td>Y</td>
            <td>Y</td>
            <td>Y</td>
            <td>Y</td>
            <td>Y</td>
        </tr>
        <tr>
            <td>Vietnamese</td>
            <td>vi-VN</td>
            <td>Y</td>
            <td>Y</td>
            <td>Y</td>
            <td>Y</td>
            <td>Y</td>
        </tr>
    </tbody>
</table>

For the Code column, the first lower-case two-letter code is a valid ISO Language Code. These codes are defined by ISO-639. When picking your language code, please use the correct code from the 639-1 column [here](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes). The upper-case two-letter code is a valid ISO Country Code. These codes are defined by ISO-3166. When picking your country code, please use the correct code from the Alpha-2 code column [here](https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes).

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
