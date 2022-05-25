#9-926am - thougt of how to remove array elts




#5/13 = 10:35-10:56am - created column extracter
#3-334- began to print list of rankings
#330-4pm created an ordering function

#5/15 3-330pm: printed two stats / fixed is present function from word-matcher
      #3-330pm: testing "order table" function
      #conclusions found! NOT that suprising
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 


from word_matcher_version_1_0512 import *

# import numpy as np
import math
def weightAverage(arr):
    pass

# remove *symbol* from array elements (string values)
def filterArr(symb, arr):
    newArr = []
    for x in range(len(arr)):
        if arr[x].find(symb) == -1:
            newArr.append(arr[x])
            # print(arr)
    return newArr


def getColumn(colNum, dataArr):
    colArr = []
    try:
        for x in range(len(dataArr)):
            colArr.append(dataArr[4 * x + colNum]) #TO FIX
    except:
        pass
    return colArr

# print(getColumn(2, text))

# print(getColumn(0, text))

# -1*x^{frac{1}/{2}\(x-100) function used
# Highest Value: 384 * 1 = 384
# how many trainers pokemon?
def scaleArr(mode, arr):
    retArr = []
    for x in range(len(arr)):
        if mode == "skewed-right": #skew towards values between 20-45 about
            newVal = -1 * math.pow(int(arr[x]),0.5) * (int(arr[x]) - 100) 
            retArr.append(newVal)
        
        elif mode == "test":
            pass

    return retArr

# sum all elts of an array (rounds down )
def sumElts(arr):
    sum = 0
    for x in arr:
        sum += int(x)
    return sum
        
#1, 2 ,3 ......100
#which row to put in order first
def inOrder(arr, arr2):
        for y in range(len(arr)):
            for x in range(len(arr)-1):
                if arr[x] > arr[x+1]:
                    temp = arr[x+1]
                    arr[x+1] = arr[x]
                    arr[x] = temp
                    

                    temp = arr2[x+1]
                    arr2[x+1] = arr2[x]
                    arr2[x] = temp


        return [arr,arr2]

        
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

            
typeArr = createTypes()

helperArr = [] #keep track of types 
rankArr = []
totalElements = 0
for x in range(len(typeArr)):
    data = debug2(typeArr[x])
    if data != []: 
        fileRead = data
        f = open(fileRead, "r")
        text = f.read()
        text = textToArr(text)

        totalElements += len(getColumn(2,text))
        arr = scaleArr("skewed-right",filterArr("-", getColumn(2, text )))

        
        totalWeight = (sumElts(arr) *  len(arr) / 1361) / (394 * 1361) * 100
        if (totalWeight > 0.01):
            
            rankArr.append(totalWeight)
            helperArr.append(typeArr[x])
            print(totalWeight, typeArr[x])
            # rankArr = inOrder(rankArr)

# print(rankArr,helperArr,totalElements)

multiSorted = inOrder([[3,2,1], [1,2,3], [21, 5, 6]])
print(multiSorted)


# make  input function for this
# or redo function to only detect newlines
def getRowLength():
    pass         


# print(filterArr('-', text))

#BEST CASE
#X TRAINER POKEMON & 100LV. TYPE Y -> TYPE Y = 100
#WORST CASE
#0 Trainer Pokemon & XLv. TYPE Y
#CASE 1: X TRAINER POKEMON & 100LV. TYPE Y -> TYPE Y = 100

# 'Psychic/Flying', 'Dark', 'Fire', 'Psychic', 'Fighting', 'Grass', 'Water', 'Normal']
#total 1361
#Best Score
#BEst Lv - 33
#Yield - 394.9 * 1361/1361