answerKey = {0: 60, 1: 55, 2: 40, 3: 18};

//  allQuestions = document.querySelectorAll("div")
// allQuestionsArr = Array.from(allQuestions)
// allQuestionsArr.forEach(elt => addEventListener("click", checkAns()))
 

//make func to uncheck
//  document.getElementById('submit').onclick = function() {
//     var radio = document.querySelector('input[type=radio][name=language]:checked');
//     radio.checked = false;
// }
function p(something) {
    console.log(something);
}


function handleClick() {

var elementSelected = event.target

//If you clicked on an answer choice.......
if (elementSelected.tagName == 'INPUT') {
    deselectOther(elementSelected)
    getAns(elementSelected)
}
    
}




//deselect other choices
// function deselectOther(choices, yourChoice) { //not in use any more
function deselectOther(yourChoice) {
    
    var choices = yourChoice.parentNode.querySelectorAll("input") //get all q
    choices = Array.from(choices)
 
    for (x in choices) 
        if (choices[x] != yourChoice)  //check if not already presseed
            choices[x].checked = false;
}

function getAns(choice) {

    var whichQuest = choice.parentNode.id;
    whichQuest = String(whichQuest) 
//p(choice.value)
//p(answerKey[whichQuest])
    if (choice.value == answerKey[whichQuest]) { //is it correct ans?
    
        congratsMessage(choice.parentNode)
        showNewQuestion(choice)
        upgradeAbility();
    } else {
        tryAgainMessage()
    }
            
}

questionsShown = []

function showNewQuestion(choice) {
  //  choice.value = "";
    choice.parentNode.style.display = "none"
    // if (questionsShown.length == allQsArr.length) {
    //     showQuestion
    // }
    showQuestion()
}

//generate random question number
function randomizeNum() {
    var randNum = allQsArr.length * Math.random()
    var randNum = parseInt(randNum);
    p(randNum)
    //p(questionsShown)
    if (questionsShown.find(elt => elt == randNum) == undefined) {
        questionsShown.push(randNum) //don't use
        return randNum;
        //p(questionsShown)
    } 
    
     else if (questionsShown.length == allQsArr.length) {
         
         return -1; 
     } 
    
    return randomizeNum()
    
}

//4/7 12-1230pm - randnum output doesnt match with randnum checked.

function showQuestion() { 
    var randNum = randomizeNum(); 
    if (randNum == -1) {
        message.innerHTML = "all done"
        allQs.style.display = "none"
        return
    }
    allQsArr[randNum].style.display = "block"
    
}

function congratsMessage(element) {
    message.innerHTML = "correct, you recieved an upgrade!!!"
}

function tryAgainMessage(element) {
    message.innerHTML = "try again!"
}

function upgradeAbility() {
          // s = objects.protagonist
           //console.log(s)


           //allQsArr[randNumAsInt].style.display = "block"
 }

        // nned to go to github and 