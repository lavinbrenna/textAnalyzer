//Utility Logic

function noInputtedWord(word,text){
  return((text.trim().length == 0) || (word.trim().length === 0))
}

//Business Logic


function wordCounter(text){
  if(text.trim().length === 0){
    return 0;
  }
  let wordCount = 0;
  const wordArray = text.split(" ");
  wordArray.forEach(function(element){
    if(!Number(element)){
      wordCount++;
    }
  });
  return wordCount;
}

function numberOfOccurrencesInText(word, text){
  if(noInputtedWord(word,text)){
    return 0;
  }
  const wordArray = text.split(" ");
  let wordCount = 0;
  wordArray.forEach(function(element){
    if(element.toLowerCase().includes(word.toLowerCase())){
      wordCount++;
    }
  });
  return wordCount;
}

function commonWords(text) {
  if(text.trim().length === 0){
    return 0;
  }
  let htmlString = "<ul>";
  const wordArray = text.split(" ");

  for(let i = 0; i < wordArray.length; i++){
    let wordCount = 0;
    console.log(wordArray[i]);
    htmlString = htmlString.concat("<li>" + wordArray[i] + ": " + wordCount + "</li>");
    /*for(let j = 0; j < wordArray.length; j++){
      if(wordArray[i].toLowerCase() === wordArray[j].toLowerCase()){
          wordCount ++;
          console.log(wordArray[j]);
      }
    }*//*);*/
  }
return htmlString + "</ul>";
}

  /*wordArray.forEach(function(element){
    if (element.toLowerCase() === (element.toLowerCase())){
      if (element.toLowerCase().includes(element.toLowerCase())){
        wordCount++;
      htmlString = htmlString.concat("<li>" + element + ": " + wordCount + "</li>");
      }
    }else{
      wordCount = 0;
    }
  });*/
//UI LOGIC

function boldPassage(word,text){
  if(noInputtedWord(word,text)){
    return "";
  }
  let htmlString = "<p>";
  let textArray = text.split(" ");
  textArray.forEach(function(element,index){
    if(element.toLowerCase().includes(word.toLowerCase())){
      htmlString= htmlString.concat("<b>" + element + "</b>");
    }else {
      htmlString = htmlString.concat(element);
    }
    if(index !== (textArray.length - 1)){
      htmlString = htmlString.concat(" ");
    }
  });
  return htmlString + "</p>";
}

$(document).ready(function(){
  $("form#word-counter").submit(function(event){
    event.preventDefault();
    const passage = $("#text-passage").val();
    const word = $("#word").val();
    const wordCount = wordCounter(passage);
    const occurrencesOfWord = numberOfOccurrencesInText(word, passage);
    $("#total-count").html(wordCount);
    $("#selected-count").html(occurrencesOfWord);
    $("#bolded-passage").html(boldPassage(word, passage));
  });
})