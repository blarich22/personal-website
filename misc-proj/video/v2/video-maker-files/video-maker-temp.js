
// title : "AP CS: <br> Practice <br> 5/28",
// elements = {
        
//         title : 'Math Olympiad: <br> Practice Problem <br> Proof 5/27',
//         bgrdColor : "lightblue",
//         heightArr : [275,350,450],
//         leftPosition : 20,
    //  imageSrc : "video images/math-olympiad/math-olympiad-ussr.png",
//         textArr : ['Check here for the answer', 
//         'Simplify the expression: n(n-1)(n+1)', 
//         'Reorder: (n-1)n(n+1); <br> the expression is <br> made up of consecutive numbers',
//         'The number three will divide <br>at least a number <br> in a consecutive list of three',
//         'i.e. 15,16,17.....1,2,3......40,41,42',
//         'This is a property usuable when one <br> has consecutive numbers'],
//         rightBord : 380,
//         leftBord : 20,
//         textSpeed : 1
//     }

    // image1 = document.createElement("img")
    // image1.style.src = "video images/math-olympiad/math-olympiad-ussr.png"

function generateVideo(arr) { 


  
  
     // console.log(utterThis.voice, main.innerHTML)


        title = document.getElementById("title")
        title.style.textAlign = "left"
        title.innerHTML = arr.title
    
        // title.innerHTML = 'Math Olympiad: <br> Practice Problem <br> Proof 5/27'

        background = document.getElementById("background")
        background.style.background = arr.bgrdColor
        background.style.width = 580
        background.style.height = 580


        main = document.getElementById("main")
        main.style.opacity = 0
        

        // main.style.display = "block"
        main.style.whiteSpace = "nowrap"
        main.style.position = "absolute"
        main.style.fontSize = 25
        main.style.top = (arr.heightArr)[0]
        main.style.background = "lightgray"
        // main.style.left = 20
        main.style.left = arr.leftPosition

    //     if (arr.image1.sequenceArr.length > 0) {
    //     img = document.getElementById("img1")
    
    //     img.style.textAlign = "center"
    // //  img.style.left = 290
    //     // img.style.top = 100
    //     img.style.position = "absolute"
    //     img.style.width = arr.imageWidth

    //     //NO LONGER USED!!!!!NOTE
    //     img.src = arr.image1.sequenceArr[0]
        
    //     img.style.display = "inline"
    //     // img.style.marginTop = 
    //     }

        if (arr.image2.sequenceArr.length > 0) {
        img2 = document.getElementById("img2") 

        img2.style.textAlign = "center"
        //  img.style.left = 290
            // img.style.top = 100
            img2.style.position = "absolute"
            img2.style.width = arr.imageWidth
    
            //NO LONGER USED!!!!!NOTE
            // img2.src = arr.image2.sequenceArr[0]
            
            img2.style.display = "inline"
            // img.style.marginTop = 

        }

        // img.style.marginBottom = 0
        // img.style.borderBottom = 0
        // img.style.paddingBottom = 0
    
        reverse = false //direction of the text
        // posLeft = 0
        posLeft = arr.leftPosition
        textNumber = 0
        imgNumber = 0
        // textArr = ['Check here for the answer', 
        // 'Simplify the expression: n(n-1)(n+1)', 
        // 'Reorder: (n-1)n(n+1); <br> the expression is <br> made up of consecutive numbers',
        // 'The number three will divide <br>at least a number <br> in a consecutive list of three',
        // 'i.e. 15,16,17.....1,2,3......40,41,42',
        // 'This is a property usuable when one <br> has consecutive numbers']

            // textArr = ['Check here for the answer', 
            // 'Temp == true IF: <br> testVal == val', 
            // 'is this an answer choice?',
            // 'testVal == val IF:<br>  testVal == a[element]',
            // 'For loops move in order; <br> IF: testVal == a[element], <br> temp == true <br> return (end code)',
            // 'which choice corresponds <br> to that code? -- choice A']
    
        main.innerHTML = arr.textArr[0][0] //set text
        // , '"text1, "text2", "text3", "text4"]"',
        // '"text1, "text2", "text3", "text4"]"','"text1, "text2", "text3", "text4"]"',
        // '"text1, "text2", "text3", "text4"]"']

        //create voice
        //  synth = window.speechSynthesis;
        //  console.log(synth.getVoices())
        // // synth.Rate = -2
        // function test() {
        //     const utterThis = new SpeechSynthesisUtterance(main.innerHTML);
        //     utterThis.voice = synth.getVoices()[4];
        //     synth.speak(utterThis);
            
        // }

        // test()
        // posLeft = 0

        
        let synth = window.speechSynthesis;
var voices = [];

function changeText(txt) {
     
    textNumber = (textNumber+1) % arr.textArr.length
    txt.style.top = arr.heightArr[genRand(3)]
    txt.innerHTML = arr.textArr[0][textNumber] //set text++
    opacity = 0
}


function populateVoiceList() {
    voices = synth.getVoices();
  }
  
  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }
  
        function displayText() {
                elapsedPic = elapsed = (performance.now()-t0)

                if (elapsedPic > arr.image[0].sequenceArr[imgNumber][0]) {
                    console.log("test")
                    imgNumber = (imgNumber+1) % arr.image[0].sequenceArr.length
                    elapsedPic = 0
                }

                if (elapsed > arr.textArr[1][textNumber]) {
                    
                    textNumber = (textNumber+1) % arr.textArr[0].length

                    
                    main.style.top = arr.heightArr[genRand(3)]
                    main.innerHTML = arr.textArr[0][textNumber] //set text++
                    opacity = 0

                    // changeText(main)

                    // img.src = arr.image1.sequenceArr[textNumber]
                    img2.src = arr.image2.sequenceArr[textNumber]


                    // background.style.background = lightBlueShades[genRand(5)]
                    // const utterThis = new SpeechSynthesisUtterance(main.innerHTML);
                    // utterThis.voice = synth.getVoices()[4];
                    // synth.speak(utterThis);
                    
                    t0 = performance.now()
                                        
                    mainReplaced = main.innerHTML.replace(/<br>/g, "").replace(/&/g, "") //remove some characters from main
                    const utterThis = new SpeechSynthesisUtterance(mainReplaced);
                    utterThis.rate = 0.7
                    utterThis.lang = "en-US"
                    utterThis.voice = voices[4];
                    // console.log(voices[4], utterThis)

                    synth.speak(utterThis);
                    utterThis.addEventListener('end',function() {console.log("test")})
                }

                // if (arr.insertImage[0] == textNumber) {
                //   createImage = document.createElement("img")
                //    img.src = arr.insertImage[1]
                //    document.html.append(createImage)
                // }
                // animate(main)
                // animate(img)
                fadein(main)
                // console.log(textNumber)
            }

            // return num between 0 and num 
            function genRand(num) {
                num = Math.random()*num
                return Math.ceil(num)
            }

            

            function animate(element) {

                

                rightPos = (window.innerWidth - element.style.left.replace("px",""))
                leftPos = element.style.left.replace("px","")
                //   if (rightPos < 380) { //380 max width
                //     // console.log(rightPos)
                //     reverse = true
                //   } else if (leftPos <= 20)  {
                //     reverse = false
                // }

                if (rightPos < arr.rightBord) { //380 max width
                     
                    reverse = true
                } else if (leftPos <= arr.leftBord)  {
                    reverse = false
                }
                
                // console.log(rightPos,arr,)
                
            
                // rightPos = rightPos 
                // console.log(rightPos)
                // console.log(element.style.width.replace("px",""))
                // if (reverse == true) { //380 max width
                //     posLeft-=1
                //     element.style.left = 20 +  posLeft
                    
                // } else {
                    
                //     posLeft+=1
                //     element.style.left = 20 + posLeft
                //     // element.style.top = 20 + posLeft
                
                // }

                if (reverse == true) { //380 max width
                    // posLeft-=1
                    posLeft-=arr.textSpeed
                    element.style.left = 20 +  posLeft

                    
                    
                } else {

                    // console.log(element.style.left)
                    
                    // posLeft+=1
                    posLeft+=arr.textSpeed
                    element.style.left = 20 + posLeft
                    // element.style.top = 20 + posLeft
                
                }



            }
            
            // displayTetextNumbert("test")
            
            // function switchTetextNumbert(arr) {
        t0 = performance.now()
        currAnimation = setInterval(displayText, 50)
        // posAnimation = setInterval(animate(main), 500)
        // }

        // switchText(["a", "b", "cf"])



        function generateBlueShades() {


            x = 161 + Math.random() * 40
            y = 201 + Math.random() * 20
            z = 201 + Math.random() * 40
        
        }
    lightBlueShades = ['rgb(148, 228, 255)',
    'rgb(151, 227, 252)',
    'rgb(153, 226, 250)',
    'rgb(156, 224, 247)',
    'rgb(159, 223, 244)']
    // ,
    // 'rgb(161, 222, 242),
    // 'rgb(164, 220, 239),
    // 'rgb(167, 219, 236),
    // 'rgb(169, 218, 234),
    // 'rgb(172, 216, 231),
    // 'rgb(173, 216, 230),
    // 'rgb(175, 215, 228),
    // rgb(177, 213, 226),
    // rgb(180, 212, 223),
    // rgb(183, 211, 220),
    // rgb(185, 209, 218),
    // rgb(191, 207, 212),
    // rgb(193, 205, 209),
    // rgb(196, 204, 207),
    // rgb(199, 203, 204),
    // rgb(201, 201, 201),
}

// generateVideo(elements)



{/* 
     5/25 12:33: made time rotator 
     5/25 4; worked on animating text 

    5/26:12:25 can animate text
    1-1;00pm text does not wrap
    4L25pm texts moves back and forth
    5/27: 125 - added sample text
    155 uploaded demo
    5/28 125 began to add object, to hold variable elements 
    5/29 4:43am - began to create template format  */}


    opacity = 0
    function fadein(elt) {
      
    if (elt.style.opacity < 100)
    opacity += 0.04
     elt.style.opacity =opacity
    }