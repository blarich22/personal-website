
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

#5/13 7:0-7:37am - created a debug function, rmved brackets
    #8-825 - able to parse out unneed characters ("', "); need to add mode


#5/14 4:30-5pm - remade createCombinations -> gen word combinations
      #5-515pm - added delimiter to generateDataFile!


#SEARCH FOR A PHRASE IN A FILE; CREATE A NEW FILE WITH THOSE WORDS
#IN CURR DIR

#Input1: file to be read
#Input2: Terms / Phrase to be researched ; I,love,{ice, cream} ;
#Note: "" - stands for any general phrase 
#Input3: file containing every instance of the phrase used

#Example for INPUT 2:
#INPUT: I,{love, have}, ice, ""
#If no query found: []
#Possible If Found: [["I love ice cream"], ["I have ice candy"].....etc]


#output: (IF IN FILE) [[I love ice], [I love cream], [I love cream]]


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
            
        elif ((x == " " or x == '\n' or x == "," or x=="'") and wasFirstLetterRead == True):
            wordArray.append(found)       
            found = ""
            index = 0
            wasFirstLetterL = wasFirstLetterRead = False

        if (wasFirstLetterL):
            found += x
            # index += 1
    return wordArray

# # is elt found in the arr
# def isPresent(elt, arr):
   
#     try:
#         i = arr.index(elt) 
#         print(arr, elt)
#         return len(arr) == len(elt) #are they the same word
#     except:
#         return False

#takes query and checks if it can be found in text
#i.e. query=[["river", "flows"], text = ["river flows inside"] returns the text

def getMatches(query, text): 
    numMatches = 0 #number of CONSECUTIVE matches
    matchedArr = []
    helperArr = []
    for x in range(len(text)):

        numMatches = 0
        helperArr = []
        
        try:
            for y in range(len(query)):
                # print(x, y)
                # print(query[y], text[x+y])
                if (text[x+y] == query[y]) or len(query[y]) == 0:
                    numMatches += 1
                    helperArr.append(text[x+y])
                    # print(helperArr)
            if (numMatches == len(query)):
                matchedArr.append(helperArr)
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


def createTypes():
    typeArr = ["Water", "Fire", "Grass",
            "Electric", "Dragon", "Flying",
            "Fighting", "Bug", "Poison",
            "Rock", "Steel", "Ice", "Ground",
            "Ghost", "Dark", "Psychic", "Normal"]

    completeTypeArr = []
    for i in range(len(typeArr)):
        for j in range(len(typeArr)):
            if (typeArr[i] == typeArr[j]): #avoid water/water, i.e
                completeTypeArr.append(typeArr[j])
            else:
                newType = typeArr[i] + "/" + typeArr[j]
                completeTypeArr.append(newType)
    return completeTypeArr

#create all combinations of wordsTypes
# i.e. INOUT: [I, You, We] INPUT2: "/"
# OUTPUT: ['I', 'You', 'We', 'I/You'....so on]
#TO REMOVE
def createCombinations(arr, sym):
 
    completeTypeArr = []
    for i in range(len(arr)):
        for j in range(len(arr) - i):
            if (arr[i] == arr[j+i]): #avoid water/water, i.e
                completeTypeArr.append(arr[i])
            else:
                pair = arr[i] + sym + arr[j+i]
                completeTypeArr.append(pair)
    return completeTypeArr


#Create a new file with the data
#INPUT: createFile = name of file to create
#INPUT2: Array 
#OUTPUT; query1, query2, query3
       # query4, ....and so on

def generateDataFile(createFile, dataArr, delimiter = ','):
    f = open(createFile, "w")
    for x in range(len(dataArr)):

        datastring = str(dataArr[x]) #convert into string, 
        datastring = datastring.strip('[] ') #remove [] 
        datastring = datastring.replace(",", delimiter) # set delimiter
        x = str(x) #set index as string

        f.write("" + x + ": " + datastring + "\n")
    f.close() 



#11:30-12 managed to split the string
#thought of ways to implement sublists
def parseQuery(query):

    queryArr = query.split(',')
    for i in range(len(queryArr)):
        if (queryArr[i] != ""): 
            #look for if there's an {}, if so, remove them
            firstLett = queryArr[i][0]
            lastLett = queryArr[i][len(queryArr[i])-1]
            containsSublist = (firstLett == '{') and (lastLett == '}')
            # print((queryArr[i][0] == '{'),(queryArr[i][len(queryArr[i])-1] == '}'))
            if (containsSublist == True):
                queryArr[i] = queryArr[i].replace("{","").replace("}","")
                # print(containsSublist, "contains sublist", queryArr[i])

        queryArr[i] = queryArr[i].split()
  
    return queryArr




def convertText(fileRead):
    f = open(fileRead, "r")
    text = f.read()
    return text


def main_function():
    fileRead = input()
    queryTerms = input()
    fileCreate = input()  

    text = convertText(fileRead)
    textArr = textToArr(text)


    queryParsed = parseQuery(queryTerms)
    dataArr = getMatches(queryParsed, textArr)
    # print(dataArr)
    # print("freq", len(dataArr))
    generateDataFile(fileCreate, dataArr)
    return fileCreate


# for debugging
def debug():
    fileRead = 'testReadFile2'
    queryTerms = ["Lv.","","Water"]
    fileCreate = "stats-bw-wtr"  

    text = convertText(fileRead)
    textArr = textToArr(text)


    # queryParsed = parseQuery(queryTerms)
    queryParsed = queryTerms
    dataArr = getMatches(queryParsed, textArr)
    # print(dataArr)
    # print("freq", len(dataArr))
    generateDataFile(fileCreate, dataArr)

def debug2(type):
    fileRead = 'testReadFile2'
    queryTerms = ["Lv.","",type]
    fileCreate = "testFile1"  

    text = convertText(fileRead)
    textArr = textToArr(text)


    # queryParsed = parseQuery(queryTerms)
    queryParsed = queryTerms
    dataArr = getMatches(queryParsed, textArr)
    # print(dataArr)
    # print("freq", len(dataArr))
    generateDataFile(fileCreate, dataArr)
    # print(dataArr)

    return fileCreate


