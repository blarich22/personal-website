answerKey = {0 : 3.6, 1 : 9.0, 2 : 3.0, 3 : 1.8, 4 : 0.9, 5 : 0.0, 6 : 5.6, 7 : 1.2, 8 : 4.9, 9 : 3.6,};

//  allQuestions = document.querySelectorAll("div")
// allQuestionsArr = Array.from(allQuestions)
// allQuestionsArr.forEach(elt => addEventListener("click", checkAns()))
 

//make func to uncheck
//  document.getElementById('submit').onclick = function() {
//     var radio = document.querySelector('input[type=radio][name=language]:checked');
//     radio.checked = false;
// }
function print(something) {
    console.log(something);
}


function handleClick() {

var elementSelected = event.target
var parent = elementSelected.parentNode
var grandparent = parent.parentNode

//If you clicked on an answer choice.......
if (elementSelected.tagName == 'INPUT') {
    
    deselectOther()
}

if (grandparent.id == "quiz") {
    if (false == isSelected()) { return }
    //false = isSelected() //is upgraded selected?
    getAns(elementSelected)
}
}


function isSelected() {
 //if not upgrade selected, then return false
 
 var array = abilities.querySelectorAll("input") //get all abilities choices
if (isChecked(array) == false) {
 //deselect

 console.log("test")
 event.target.checked = false
 message.innerHTML ="please select an upgrade first!!!"
 setTimeout(() => { message.innerHTML =""}, 3000);
   return false
} 

return true
}


//create function to stop prevent moving on

//deselect other choices
// function deselectOther(choices, yourChoice) { //not in use any more
function deselectOther() {
    yourChoice = event.target
    var choices = yourChoice.parentNode.querySelectorAll("input") //get all q
    choices = Array.from(choices)
 
    for (x in choices) 
        if (choices[x] != yourChoice)  //check if not already presseed
            choices[x].checked = false;
}

function isChecked(arr) {
    console.log(arr)
    for (x in arr) {
     //   console.log(x.checked)
        if (arr[x].checked == true) {
            
            return true
        }
    }

    return false
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
    var randNum = quizArr.length * Math.random()
    var randNum = parseInt(randNum);
    //p(randNum)
    //p(questionsShown)
    if (questionsShown.find(elt => elt == randNum) == undefined) {
        questionsShown.push(randNum) //don't use
        return randNum;
        //p(questionsShown)
    } 
    
     else if (questionsShown.length == quizArr.length) {
         
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
    
    // console.log(quizArr)
    
    quizArr[randNum].style.display = "block"
    
}

function congratsMessage(element) {
    message.innerHTML = "correct, you recieved an upgrade!!!"
    setTimeout(() => { message.innerHTML =""}, 3000);
   return false
 
}

function tryAgainMessage(element) {
    message.innerHTML = "try again!"
}

function upgradeAbility() {
    abilityArr = abilities.querySelectorAll("input") //get all abilities choices
    if (abilityArr[0].checked == true) {
        upgradeJump()
    } else if (abilityArr[1].checked == true) {
        console.log("update swim function coming soon...")
    } else if (abilityArr[2].checked == true) {
        upgradeStr()
    } else {
        console.log("click on an upgrade")
    }
    
          // s = objects.protagonist
           //console.log(s)


           //allQsArr[randNumAsInt].style.display = "block"
 }

        // nned to go to github and 