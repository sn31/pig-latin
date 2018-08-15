# Pig Latin Translator - Skye Nguyen

##### By Skye Nguyen, Meria Thomas and Hyewon Cho

### Description

The Pig Latin translator takes in a sentence, apply one of the rules below and return the translated sentence. 

#### How Pig Latin Works

* For words beginning with a vowel, add "way" to the end.

* For words beginning with one or more consonants, move all of the first consecutive consonants to the end, and add "ay".

* If the first consonants include "qu", move the "u" along with the "q". Don't forget about words like "squeal" where "qu" doesn't come first!

* For words beginning with "y", treat "y" as a consonant.


| Specifications|  Input      | Expected Output   
| ------------- |-------------|-------------:|
| The program does nothing to non-alphabetical characters, since they do not contain consonants or vowels. | word123| blank
| The program adds "way" to single-letter words beginning with a vowel. | alter| alterway
| The program move the first consecutive consonants to the back of the word and add "ay" for words beginning with consonants.| school| oolschay
| The program treats "qu" as a consonant if they are at the beginning of the word. | queen| eenquay
| The program treats y as a consonant if the word starts with y. | yes| esyay


## Setup/Installation Requirements

1. Clone this repository by using Terminal command:
```
    $ git clone https://github.com/sn31/pig-latin
```
2. Change into the work directory using Terminal command:
```
    $ cd pig-latin
```
3. Open the project in your preferred text editor.

4. To run the webpage, open it in a any browser.

## Known Bugs

None known in this version.

## Support and contact details

Please contact me at skye@dames.es for more information and/or feedback.

## Technologies Used

* Visual Studio Code
* HTML
* CSS
* Bootstrap v4.0.0
* JQuery v3.3.1
* Git
* GitHub

## Link to GitHub Pages

sn31.github.io/pig-latin

### License: MIT.

#### Copyright (c) 2018 Skye Nguyen


