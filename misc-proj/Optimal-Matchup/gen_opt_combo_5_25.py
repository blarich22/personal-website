
#11-1130: installed numpy via anaconda; help with import file
#12-1230pm: erorrs in the ispresent function, review! modified!
#1-125pm: spend time debugging -> issue - didnt save first!

#5/17 6:25pm recursively found combo of object
#     7:00-8pm generated combo of elts (see combo func)
#     8-9pm tried to create data table
#     9 - 10pm created a lookup table function and tested
#    10:30pm created some data
#   2-230pm combined and modified example datasets
#    2-230pm added more modifications
#    3:30-3:55pm ran some tests, looks ok!
#    immunities in dataset not accounted for
#5/18 1pm added function for accounting for others statistics

#5/25 10:30: added command line functionality
#   3:30pm: working on a way to parse table data
from importlib import import_module
# import ..word_matcher_version_1_0512
# import_module('word_matcher_version_1_0512', '..word_matcher_version_1_0512')

numItem = "" #set using default
itemAttr = [] #input

# FOR TESTING PURPOSES

numItem = 4

#HELPER FUNCTIONS

# is elt found in the arr
# mode 'partial', can it be found partially in array i.e. 'partial' -> 'partially' TRUE
# mode 'whole', it must be the same elt searched i.e. 'partial' -> 'partial' TRUE
def isPresent(elt, arr, mode = "whole"):
    try:
        eltIndex = arr.index(elt)
        if (mode == "whole"): 
            if (len(arr[eltIndex]) == len(elt)): #are they the same word
                return True
    except:
        return False


#only appends UNIQUE elements. Returns True is worked, else False
def appendUnique(elt, arr):
    if isPresent(elt, arr):
        return arr
    else: 
        arr.append(elt) #can you do pass by value?
        return arr

# how many times does a string apppear in an array, partially
def nonuniqueOccurences(strArr, arr):
    for x in range(len(strArr)):
        count = 0
        for y in range(len(arr)):
            if arr[y].find(strArr[x]) != -1:
                count+=1
        if (count > 1):
            return True
    return False



typeArr = ["Water", "Fire", "Grass",
            "Electric", "Dragon", "Flying",
            "Fighting", "Bug", "Poison",
            "Rock", "Steel", "Ice", "Ground",
            "Ghost", "Dark", "Psychic", "Normal"]

#TO DO, SHOULD I REMOVE TYPE ARRAY HERE? 
# is mode is include_non pairs, then single element won't appear in combo          
def createTypes(mode = "include_nonpairs"):


    completeTypeArr = []
    for i in range(len(typeArr)):
        for j in range(len(typeArr)):
            if (typeArr[i] == typeArr[j]): #avoid water/water, i.e
                if (mode == "include_nonpairs"):
                    completeTypeArr.append(typeArr[j])
                elif (mode == "include_pairs"):
                    continue
            elif False == (isPresent(typeArr[j] + '/' + typeArr[i] , completeTypeArr)):
                newType = typeArr[i] + "/" + typeArr[j]
                completeTypeArr.append(newType)
    return completeTypeArr



dataTable = [
    ["Water", ["Water Fire Ice"]],
    ["Fire", ["Fire Grass Bug Ice Steel"]],
    ["Grass", ["Grass Electric Ground"]],
    ["Electric", ["Electric Steel"]],
    ["Dragon", ["Water Fire Grass Electric"]],
    ["Flying", ["Ground Grass Bug Fighting"]],
    ["Fighting", ["Steel Bug Dark Rock"]],
    ["Bug", ["Grass"]],
    ["Poison", ["Poison Grass Fighting Bug"]],
    ["Rock", ["Flying Bug Fire"]],
    ["Ice", ["Ice"]], 
    ["Steel", ["Steel Rock Ice Fire Poison"]],
    ["Ground", ["Ground Electric Rock"]],
    ["Ghost", ["Normal Fighting"]],
    ["Dark", ["Psychic Ghost"]], 
    ["Psychic", ["Fighting Poison"]],
    ["Normal", ["Ghost"]]
]


# parse csv file
def parseCSV(table):
    arr = table.split("\n")
    print(arr)
    for x in arr:
        x = x.split(",", 1)

# f = open("demofile.txt", "r")
# fileContents = f.read()
# # print(fileContents)
# parseCSV(fileContents)

dataTable2 = [
    ["Water", ["Fire Ground Rock"]],
    ["Fire", ["Grass Bug Ice Steel"]],
    ["Grass", ["Water Ground Rock"]],
    ["Electric", ["Flying Water"]],
    ["Dragon", ["Dragon"]],
    ["Flying", ["Grass Bug Fighting"]],
    ["Fighting", ["Normal Steel Ice Rock Dark"]],
    ["Bug", ["Grass Psychic Dark"]],
    ["Poison", ["Grass"]],
    ["Rock", ["Flying Fire Ice Bug"]],
    ["Ice", ["Dragon Flying Grass"]], 
    ["Steel", ["Rock Ice"]],
    ["Ground", ["Electric Rock Fire Poison"]],
    ["Ghost", ["Ghost Psychic"]],
    ["Dark", ["Psychic Ghost"]], 
    ["Psychic", ["Fighting Poison"]],
    ["Normal", ["None"]]
]

allowedTypes = ["Water", "Water/Ground", "Water/Poison", "Water/Ice", "Water/Grass", "Water/Flying",
"Water/Dark",
"Fire", "Fire/Fighting", "Fire/Ground", "Grass", "Grass/Flying", "Grass/Fighting",
"Grass/Poison", "Grass/Dark", "Electric/Steel", "Electric", "Dragon/Ground", "Dragon/Flying", 
"Flying/Normal", "Flying/Steel", "Fighting", "Fighting/Psychic",
"Bug/Fighting", "Bug/Rock", "Rock/Grass", "Steel/Psychic", "Steel/Rock", "Ground/Psychic",
"Dark", "Ghost", "Psychic/Flying", "Psychic"]

# 0.2103416765066789 Grass
# 0.03744896953085093 Electric
# 0.03146690127167853 Electric/Flying
# 0.03060709371461438 Dragon
# 0.17223555366209414 Fighting
# 0.02284662827884666 Bug/Grass
# 0.022855671673072352 Bug/Poison
# 0.019339161530523438 Poison
# 0.03302839400798181 Rock
# 0.04558281753124014 Ice
# 0.04406188304782785 Ground/Dark
# 0.026264483211660722 Dark/Fighting
# 0.08641867522073836 Dark
# 0.045934139694795914 Psychic/Flying
# 0.14548354928899368 Psychic
# 0.03871888131393787 Normal/Flying
# 0.5994756415313298 Normal
#project specific function

# print("Water/Fire".split('/')

# remove duplicates
def removeDuplicates(x):
  return list(dict.fromkeys(x))



# combines the values of two objects in a key=value tables
# eliminates duplicate values
# #delimiter - split array values
# i.e. x = I/Ski table = [[n1, [v1,v2....]] delimiter = " "
def getSimilarities(x, table, delimiter = " "):
    retArr = []
  
    x = x.split(delimiter)
            
    for y in x:
        value = getValues(y, table)
        values = value.split() #convert back into array
        retArr+= values
        
    retArr = removeDuplicates(retArr)
    return retArr

# 
# REMOVEs certain elements if found in another table 
# with the characteristic as value
# characteristic: I/Ski t
def getCombined(characteristic, arr, table):

    
    for x in range(len(arr)):
        values = getValues(arr[x], table)
        # print(values)
        values = values.split(" ")
        for y in values:
            # print(y)
            if characteristic.find(y) != -1:
                # print(characteristic, y)
                arr[x] = "" #remove element
    return arr
#get Values from attbles
#input [[item, arr],[], ....]
def getValues(characteristic, table):
    for x in table:
        if x[0] == characteristic:
            return x[1][0]

    return ""

# print(getValues("Fire", dataTable))
# v = getSimilarities("Water/Fire", dataTable, "/")
# print(v)
# testOutput = getCombined("Water/Fire", v, dataTable2)
# print(testOutput)
# print(len(testOutput) - testOutput.count(""))

dataArr = []
dataArr2 = []


#Return an array average of unique similarities from table2 and 
# of similarties from table 1 adjusted with table 2 
def getData(arr):
    count = 0
    count2 = 0
    retArr = []
    retArr2 = []
    for x in arr:
        v = getSimilarities(x, dataTable, "/")
        testOutput = getCombined(x, v, dataTable2)
        retArr = testOutput + retArr
        
        y = getSimilarities(x, dataTable2, "/")
        retArr2 = y + retArr2
       
    retArr = removeDuplicates(retArr)
    count += (len(retArr)-retArr.count(""))

    retArr2 = removeDuplicates(retArr2)
    count2 += (len(retArr2)-retArr2.count(""))
    # print(count)

    # return [count, count2]
    return count2

# print(getData(["Water/Grass", "Electric/Ice", "Ghost/Normal"]))


#find all combinations with backtracking of getData, 
#restricting num of items

def genCombo(arr, helperArr, startInd):
   
    if (len(helperArr) == 6) :

        # print(helperArr)
        # uniqueVal = getSimilarities(helperArr, dataTable)
        # print(uniqueVal)
        count = getData(helperArr)
        # copy = [count, helperArr].copy()
        if count > 17:
            print(count, helperArr)
        # dataArr.append(count)
        # dataArr2.append(helperArr)

        return

    for x in range(startInd, len(arr)):

        helperArr.append(arr[x])

        #HEURISITIC ONE: ALL UNIQUE ITEMS! (i.e item1/item2, item3/item4...)
        # (BUT NOT item1/item2, item2/item4...
        if nonuniqueOccurences(typeArr, helperArr):
            helperArr.remove(arr[x])
            continue

        #HEURISTIC TWO: EXCLUDE SOME ITEMS
        # if isPresent(arr[x], allowedTypes) == False:
        #     helperArr.remove(arr[x])
        #     continue
        
       

        startInd+=1 #avoid duplicate elts ("[item1, item1]")
        genCombo(arr, helperArr, startInd)

        helperArr.remove(arr[x])



#1, 2 ,3 ......100
#must be equal length, *make function to create "" values
def inOrder(arr):
        for y in range(len(arr[0])):
            for x in range(len(arr[0])-1):
                if arr[0][x] > arr[0][x+1]:
                    for w in arr:
                        temp = w[x+1]
                        w[x+1] = w[x]
                        w[x] = temp

        return arr


# itemArr = input()
# itemArr = itemArr.split(" ")

itemArr = createTypes("include_pairs")
genCombo(itemArr, [], 0)
# print(inOrder([dataArr, dataArr2]))
# print(nonuniqueOccurences(typeArr, ["Water", "Water"]))

# print(isPresent("hi", ["hig"], "partial"))

#                      COMMON

# 16 ['Water/Fighting', 'Flying/Ground', 'Ice/Ghost']

# 16 ['Flying/Normal', 'Fighting/Dark', 'Ice/Ground'] 

# 16 ['Flying/Fighting', 'Ice/Ghost', 'Ground/Normal']


# #                      Rare
# 16 ['Electric/Dark', 'Dragon/Flying', 'Fighting/Ground']

# 16 ['Fire/Grass', 'Fighting/Ice', 'Ground/Ghost']

# 16 ['Electric/Ice', 'Flying/Dark', 'Fighting/Ground']