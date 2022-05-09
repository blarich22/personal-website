
# 4/8  finds all a in a file and places in arr
# 4/15 12-12:35 - can locate all words with an L
# 5/7 10-10:25am - func to grab "lv. *alnum* *wildcard* 
#     10:30:10:25pm - how to put text in arr?
#     11:30 - 11:54pm - able to type informations
#5/8 63-730am - generate all comboninations of types
#     10 - working on cleaning functions and generalizing them
    #   12 - DITTO
#     7-725pm - testing to see if elts in array accessed
#     730-755pm - created a new test file
#   8-830 - researched modulo

#read file
from audioop import add
from pickle import FALSE
from xml.etree.ElementPath import find
import math



#print('Enter file name: ')
#fileName = input() 
# f = open('testReadFile.txt', "r")
# text = f.read()

f = open('testReadFile3.txt', "r")
text2 = f.read()

arr = []

#  convert text into an array, each elt is an alnum word
#  "I love the".....-> ["I", "love", "the"]
def textToArr(text):
    wasFirstLetterL = False
    wasFirstLetterRead = False
    wordArray = []
    found = ""
   
    index = 0
    for x in text:
        # print(x)
        
        # firstLetter = word[index]
        # secondLetter = searchWord[1]
        
        if x.isalnum() == True and wasFirstLetterRead == False:
            wasFirstLetterL = wasFirstLetterRead = True
            
        elif ((x == " " or x == '\n') and wasFirstLetterRead == True):
            # if (found == word):
            #####NEW CODE, REMOVE NEW LINES
            # found = removeErrors(found)
            wordArray.append(found)
            
            found = ""
            index = 0
            wasFirstLetterL = wasFirstLetterRead = False

        if (wasFirstLetterL):
            found += x
            # index += 1
    return wordArray


# enter array [*string/lv*, ......]
# find all phrases with all combinations of phrases of given array
# get some statistics: freq, perc, 



# def getData(searchArr, text):
#     arr = []
#     retArr = []
#     isMatching = True

#     for x in range(len(text)):
        
#         fixed = removeErrors(text[x])
#         for y in range(len(searchArr)):
#             wordSubstitutes = searchArr[y]
#             # print("array: ", wordSubstitutes)
#             for z in range(len(wordSubstitutes)):
#                 sub = wordSubstitutes[z]
#                 print(fixed, sub)
#                 if (fixed == sub):
#                     arr.append(sub)
#                     break
#                 else:
#                     isMatching = False
#             #         # MUST NOT ENTER TWO SAME OPT: ["tie","tie"]

#         if isMatching == True:
#             # print(arr)
#             retArr.append(arr)  
           
#         isMatching = True
#         arr.clear()    
                 
#     return retArr

# is elt found in the arr
def isPresent(elt, arr):
   
    try:
        arr.index(elt)
        return True
    except:
        return False


#takes query and checks if it can be found in text
#i.e. query=[["river", "flows"], text = ["river flows inside"] returns the text

def getMatches(query, text): 
    numMatches = 0 #number of CONSECUTIVE matches

    # queryIndex = 0
    # helperArr = [] #store query values here ["this, "that"]
    # infoArr = [] #store query phrases here [["This", "that "], ["hey"]]
    # for x in range(len(text)):
    #     if (numMatches == len(query)):
    #        infoArr.append(helperArr)
    #        numMatches = queryIndex = 0 
    #     if (x == query[queryIndex]):
    #         helperArr.append(query[queryIndex])
    #         numMatches += 1
    #         queryIndex += 1
    #     else:
    #         numMatches = queryIndex = 0

    print(text)
    for x in range(len(text)):
        try:
            for y in range(len(query)):
                print(x, y)
            #     print(query[y], text[x+y])
            #     if isPresent(text[x+y], query[y]):
            #         numMatches += 1
            # if (numMatches == len(query)):
            #     print("success")
            # else: 
            #     numMatches = 0
        except:
            print("out of range, and no matches") 


        
    



        # print(queryIndex, x)
        # if (query[queryIndex] != text[x]):
            

# 5/9 6-6:26am -> tried different design to getData()
#     6:30am-6:56am -> can match line phrases with those in the query
#     7-725-> discovered issues - is reading '/n'  
# idea 1;30-2

#def findMatch(arr, elt):
#      for i in range(len(elt)):
#         if (elt === i):
#             return elt
    


#             # if isMatching == True:
#             #     retArr.append(arr)  
#             #     arr = []  
#             #     isMatching = False
#             #     arr.append(fixed)
# return arr


        
        

# remove unwanted characters from word
# to do, create a "mode" button
def removeErrors(word):
    newWord = word.strip("\n")

    return newWord

# print(arr)


# print(searchArr)

typeArr = ["Water", "Fire", "Grass",
            "Electric", "Dragon", "Flying",
            "Fighting", "Bug", "Poison",
            "Rock", "Steel", "Ice", "Ground",
            "Ghost", "Dark", "Psychic", "Normal"]

#find all combinations of hybrid types
def createTypes():
    completeTypeArr = []
    for i in range(len(typeArr)):
        for j in range(len(typeArr)):
            if (typeArr[i] == typeArr[j]):
                completeTypeArr.append(typeArr[j])
            else:
                newType = typeArr[i] + "/" + typeArr[j]
                completeTypeArr.append(newType)
    return completeTypeArr
            



def getFreq():
    completeTypeArr = createTypes()
    for x in completeTypeArr:
        num = searchArr.count(x + "\n")
        if (num > 0):
            print(x, num)

textArr = textToArr(text2)
#print(textArr)
dataArr = getMatches([["This", "That"], ["battle"]], textArr)
# print(dataArr)
# getFreq()
   
    

















# for x in text:
#     # print(x)
    
    
#     letter = searchWord[index]
#     # secondLetter = searchWord[1]
    
#     if x == letter and wasFirstLetterRead == False:
#         wasFirstLetterRead = True
         
#     elif x == " " and wasFirstLetterRead == True:
#        wordArray.append(found)
#        found = ""
    
#        index = 0
#        wasFirstLetterL = wasFirstLetterRead = False

#     elif 

#     if (wasFirstLetterL):
#         found += x
#         index += 1




# #solve problems
# #step 1: collect all numbers
# findNum(text)
# #step 2: perform an operation
# answer = (numArr[1] * numArr[2]) / 100
# answer = str(answer)
# print(numArr)


# #add HTML elements

# def addHTML(text):
#      for x in text:h
#           inQuestion = False
#           if x.isspace():
#                inQuestion = True
#                #append fake html
               
#           if inQuestion:
#                x = "fakeHTML" + x

# #write into the same file
# #step 1: close first file, reopen, write
# # f.close()
# # f = open("list_of_problems.txt", "a")
# # f.write("\n"+answer)
# # f.close()test