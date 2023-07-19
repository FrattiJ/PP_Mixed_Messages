// Poem generator

// noun syn noun
// verb adverb adjective
// syn verb noun

// Word Bank
let noun = ['tree', "earth", "water", "air", "fire", "love", "time", "space", "people", "flower" ]; //need 10 nouns
let adjective = ["feirce", "kind", "hot", "cold", "fast", "slow", "strong", "weak", "large", "small" ]; //need 10 adjectives
let adverb = ["feircely", "kindly", "hotly", "coldly", "quickly", "slowly", "strongly", "weakly", "selfishly", "generously" ]; //need 10 adverbs
let verb = ["said", "went", "got", "made", "knew", "thought", "took", "saw", "found", "gave"]; //need 10 verbs
let synWord = ["the", "and", "or", "of", "with", "in", "at", "some", "all", "is" ];

// First Sentence
let firstSentenceArr = [];
firstSentenceArr.push((noun[Math.floor(Math.random()*noun.length)]), (synWord[Math.floor(Math.random()*synWord.length)]), (noun[Math.floor(Math.random()*noun.length)]));

//Second Sentence
let secondSentenceArr = [];
secondSentenceArr.push((verb[Math.floor(Math.random()*verb.length)]), (adverb[Math.floor(Math.random()*adverb.length)]), (adjective[Math.floor(Math.random()*adjective.length)]));

// Third Sentence
let thirdSentenceArr = [];
thirdSentenceArr.push((synWord[Math.floor(Math.random()*synWord.length)]), (verb[Math.floor(Math.random()*verb.length)]), (synWord[Math.floor(Math.random()*synWord.length)]), (noun[Math.floor(Math.random()*noun.length)]));

//Poem Function
function randomPoem() {
    let line1 = firstSentenceArr.join(" ");
    let line2 = secondSentenceArr.join(" ");
    let line3 = thirdSentenceArr.join(" ");
    let poem = line1 + ", " + line2 + ", " + line3;
    return poem;
}



//Run to see Poem
console.log(randomPoem());