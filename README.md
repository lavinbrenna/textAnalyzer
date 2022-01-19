//Utility Logic

Description: noInputtedWord(word,text)

Test: "Should return 0 if not word or text"
Code:
const word = "";
const text = "";
noInputtedWord(word, text);
Expected Output: 0


// UI Logic

Describe: boldPassage()

Test: "It should return a non-matching word in a p tag."
Code:
const word = "hello";
const text = "yo";
boldPassage(word, text);
Expected Output: "<p>yo</p>"

Test:"It should return a matching word in a b tag."
Code:
const word = "hello";
const text = "hello";
boldPassage(word, text);
Expected Output: "<p><b>hello</b></p>"

Test: "It should wrap words that match in `b` tags but not words that don't."
Code:
const word = "hello";
const text = "hello there";
boldPassage(word, text);
Expected Output: "<p><b>hello</b> there</p>"

//Business Logic

Description: wordCount()

Test: "Should add spaces to array"
Code:
const text = "This is an array"
wordCount(text)
Expected Output: "This is an array"

Description: numberOfOccurrencesInText

Test: "if word or text is not in passage, then it should return 0."
Code:
numberOfOccurrencesInText()
noInputtedWord(word,text)
Expected Output: 0

Description: commonWords()

Test: should return 3 most common words in array
Code:
const theseWords = "hello HELLO Hello what what there there"
commonWords(text);
Expected Result:
"<h3>Most common words:</h3>
<ul>
<li>hello: 3 </li>
<li>what: 2</li>
<li>there: 2</li>
</ul>"

Description: badWords()

Test: Should remove "bad" words from array
Code:
const text = "Hello, you are a goon"
badWords(text);
Expected Result: "Hello, you are a "
