
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

# 5/9 6-6:26am -> tried different design to getData()
#     6:30am-6:56am -> can match line phrases with those in the query
#     7-725-> discovered issues - is reading '/n'  
#     8-855an - can input three words in array and find document
#     925-930am - can add wildcards like '[]'
#     930-955am - can generate file
#     11-1125 - need to be able to read query from cmd
#     2-230 


#5/12 skeched disigns for making match array
# 8:30-55 - neeed to test file create and read; 


#SEARCH FOR A PHRASE IN A FILE; CREATE A NEW FILE WITH THOSE WORDS
#IN CURR DIR

#Input: *FILETOBEREAD* ; I,love,[ice, cream] ; *FILE TO BE CREATED
#output: (IF IN FILE) [[I love ice], [I love cream]]


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
        if x.isalnum() == True and wasFirstLetterRead == False:
            wasFirstLetterL = wasFirstLetterRead = True
            
        elif ((x == " " or x == '\n') and wasFirstLetterRead == True):
            wordArray.append(found)       
            found = ""
            index = 0
            wasFirstLetterL = wasFirstLetterRead = False

        if (wasFirstLetterL):
            found += x
            # index += 1
    return wordArray

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
    matchedArr = []
    helperArr = []
    for x in range(len(text)):
        
        try:
            for y in range(len(query)):
                # print(x, y)
                # print(query[y], text[x+y])
                if isPresent(text[x+y], query[y]) or len(query[y]) == 0:
                    numMatches += 1
                    helperArr.append(text[x+y])
                    # print(helperArr)
            if (numMatches == len(query)):
                matchedArr.append(helperArr)
                # print(matchedArr)
            numMatches = 0
            helperArr = []
            # print(matchedArr)
        except:
            # "out of range, and no matches")
            pass
            #MIGHT RAISE ERRORS, CAN I USE PASS?
    return matchedArr
            

# remove unwanted characters from word
# to do, create a "mode" button
def removeErrors(word):
    # newWord = word.strip("\n")
    newWord = word.split(';')


    return newWord


#find all combinations of hybrid types
def createTypes():
    typeArr = ["Water", "Fire", "Grass",
            "Electric", "Dragon", "Flying",
            "Fighting", "Bug", "Poison",
            "Rock", "Steel", "Ice", "Ground",
            "Ghost", "Dark", "Psychic", "Normal"]

    completeTypeArr = []
    for i in range(len(typeArr)):
        for j in range(len(typeArr)):
            if (typeArr[i] == typeArr[j]):
                completeTypeArr.append(typeArr[j])
            else:
                newType = typeArr[i] + "/" + typeArr[j]
                completeTypeArr.append(newType)
    return completeTypeArr
            

# def isPresentArr(arr, arr2):
#     matchArr = []
#     for x in range(len(arr2)):
#         if isPresent(arr[x], arr2) == False:


    

# def getFreq():
#     completeTypeArr = createTypes()
#     for x in completeTypeArr:
#         num = searchArr.count(x + "\n")
#         if (num > 0):
#             print(x, num)






# print(dataArr)


def generateDataFile(createFile):
    f = open(createFile, "w")
    for x in range(len(dataArr)):
        datastring = str(dataArr[x])
        f.write("\n" + datastring)
    f.close() 





#11:30-12 managed to split the string
#thought of ways to implement sublists
def parseQuery(query):

    queryArr = query.split(',')
    for i in range(len(queryArr)):
        if (queryArr[i] != ""):
            containsSublist = ((queryArr[i][0] == '{') and (queryArr[i][len(queryArr[i])-1] == '}'))
            # print((queryArr[i][0] == '{'),(queryArr[i][len(queryArr[i])-1] == '}'))
            if (containsSublist == True):
                queryArr[i] = queryArr[i].replace("{","").replace("}","")
                # print(containsSublist, "contains sublist", queryArr[i])

        queryArr[i] = queryArr[i].split()
  
    return queryArr


fileRead = input()
# fileRead = 'testReadFile2'
queryTerms = input()
fileCreate = input()   
# print("query", removeErrors('["that"] ; ["this"]'))

def convertText(fileRead):
    f = open(fileRead, "r")
    text = f.read()
    return text

text = convertText(fileRead)
textArr = textToArr(text)


queryParsed = parseQuery(queryTerms)
dataArr = getMatches(queryParsed, textArr)
print(dataArr)
print("freq", len(dataArr))
generateDataFile(fileCreate)