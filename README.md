# Haiku Checker

#### Practice project, Last Updated 11.12.2020

#### **By Chelsea Becker, Agata Kolodziej, and Joseph Giunta**

## Description

_This application will detect if a poem is a haiku._

## Setup/Installation Requirements
### View Online
1. _Open the webpage at https://cschweig2.github.io/haiku-checker._
2. _Enter your haiku._
3. _The application will return whether or not it is a haiku._

### View locally (on computer)
1. _Open web browser and go to https://github.com/cschweig2/haiku-checker_
2. _After clicking the green "code" button, you can copy the URL for the repository._
3. _Open a terminal window, such as Command Prompt or Git Bash._<br>
  3a. _Type in this command: "git clone", followed by the URL you just copied. The full command should look like this: "git clone https://github.com/cschweig2/haiku-checker.git"._
4. _You may view the website displaying the application by clicking the index.html file or view the code on your favorite text editor, such as Visual Studio Code._

## Known Bugs

1. _List known bugs, if any._

## Test Specs

Describe: Haiku();

Test: "It should correctly create a haiku object."<br>
Expect(haiku).toBe("An ocean voyage.", "As waves break over the bow, ", "the sea welcomes me.");

~~Describe: vowelCount();~~<br>

~~Test: "It will count the number of vowels in line1"~~<br>
~~Expect(haiku.VowelCount).toEqual(7)~~

~~Describe: syllableCount();~~<br>

~~Test: "It will count the number of syllables in line 1"~~<br>
~~Expect(haiku.syllableCount).toEqual(5);~~

Describe: findSyllable();

Test: "It will detect correct syllable count for each line in a haiku."<br>
Expect(haiku.findSyllable()).toEqual(5);

## Support and contact details

_If you run into any issues, you can contact the creator at chelraebecker@gmail.com, or make contributions to the code on GitHub via forking and creating a new branch._

## Technologies Used

_VS Code_ <br />
_HTML_ <br />
_CSS_ <br />
_Bootstrap_ <br />
_JavaScript_ <br />
_JQuery_

## Legal

*This software is licensed under the MIT license.*

Copyright (c) 2020 **Chelsea Becker, Agata Kolodziej, Joseph Giunta**