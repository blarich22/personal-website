# 2/24 8-9am learned about workspaces, readline...
# 9-930 tried to print without spaces, not work
# 10:15-45 am can read and retrieve val from file
# 11-1130am cannot write yet
#12-1230 - sketched ideas to retrive multi-char num
#1230 - 1255 - worked on above

#4/8 - 3-30pm - generates percentage problems, and solves

#4/15 - 7-7:30am - generates answer choiec text
#8-8:25am - generates problem text
#8:30-9am - tried to create random num list, issues (math_string_func_1)
#2:30-3pm - generates duplicate answer choices....\
#4:416pm - same.....
#11:30am-12pm - generator seems to create non duplicable choices 

#4/16 8-9am - debug choice generator, not functioning 
     #as of 11- seems to work but new issues, long decimals

#4/17 12:30pm - 12:50 - generated math problems file, need to edit
#4/19 8:40-55pm - created answer key
#QUESTIONS
#######GEOMETRY
#SQUARE ROOT
#SQUARE
#PERCENTAGE
#CIRCLE / 
# SQUARE  
#Rhombus/Rect/Tri (8)

######EXAMPLE PERCENt

# <div id="multiple-choice" style="display:none" onclick="handleClick()">

# <div id="0"  >
# <p>60 percent of 100 =</p>
# <input type = "radio" style="display: inline" value="40">40<br>
# <input type = "radio" style="display: inline" value="60">60<br>
# <input type = "radio" style="display: inline" value="80">80<br>
# <input type = "radio" style="display: inline" value="100">100<br>
# </div>

# <div id="1" >
# <p>50 percent of 110 =</p>
# <input type = "radio" style="display: inline" value="45">45<br>
# <input type = "radio" style="display: inline" value="55">55<br>
# <input type = "radio" style="display: inline" value="65">65<br>
# <input type = "radio" style="display: inline" value="75">75<br>
# </div>


import random
from math_string_func_1 import randomNum, generateChoices, randomNumGreat9, stringifyArr

random.seed(None, 2)

answerKey = []


def genPercentProb():
     num1 = randomNum()
     num2 = randomNumGreat9()

     

     prob = genPercentQu(num1, num2) 

     ans = solvePercProb(num1, num2)
     arr = generateChoices(ans)

     string = generateProblem(arr)

     question = prob + string
     return question
# create a random percent question with inputs
def genPercentQu(num1, num2):
     num1 = str(num1)
     num2 = str(num2)
     PercentQu = "<p> " + num1 + " percent of " + num2 +  "= </p></br>\n"
     return PercentQu


def solvePercProb(num1, num2):
     ans = num1 * num2 / 100 
     answerKey.append(ans)
     return ans

def generateProblem(arr): 
     choice1 = "<input type = 'radio' style='display: inline' value='"+ arr[0] +"'>" + arr[0] + "<br>\n"
     choice2 = "<input type = 'radio' style='display: inline' value='"+ arr[1] +"'>" + arr[1] + "<br>\n"
     choice3 = "<input type = 'radio' style='display: inline' value='"+ arr[2] +"'>" + arr[2] + "<br>\n"
     choice4 = "<input type = 'radio' style='display: inline' value='"+ arr[3] +"'>" + arr[3] + "<br>\n"
     return (choice1 + choice2 + choice3 + choice4)

def testGenerateProblem(string):
     print(string)
# op1, op2, op3, op4 = 0





numArr = [] #array of numbers

#look for all numbers
def findNum(text):
    num = ""
    for x in text:
        isNumber = False
        if x.isnumeric():
             isNumber = True
        if isNumber:
             num+=x
        else:
            numArr.append(num)
            num = str(num)
          
prob = ""
for i in range(10):
     heading =  "<div id=" + str(i) + ">\n"
     end = "</div>\n\n"

     
     
     prob += heading + genPercentProb() + end 


arr = stringifyArr(answerKey)

ansStr = ""
for i in range(len(arr)):
     ansStr += "" + str(i) + " : " + arr[i] + ", "

print(ansStr)
# #read file
#f = create("list_of_problems.txt", "r")
# text = f.read()
# # print(text)

# #solve problems
# #step 1: collect all numbers
# findNum(text)
# #step 2: perform an operation
# answer = (numArr[1] * numArr[2]) / 100
# answer = str(answer)
# print(numArr)


# #add HTML elements

# def addHTML(text):
#      for x in text:
#           inQuestion = False
#           if x.isspace():
#                inQuestion = True
#                #append fake html
               
#           if inQuestion:
#                x = "fakeHTML" + x

#write into the same file
#step 1: close first file, reopen, write
# f.close()

import os
if os.path.exists("math_problems_sample.txt"):
  os.remove("math_problems_sample.txt")
else:
  print("The file does not exist")


f = open("math_problems_sample.txt", "x")
f.write("\n"+prob+"\n answer:" + ansStr)
f.close()


# #test to see if worked
# f = open("list_of_problems.txt", "r")
# print(f.read())
