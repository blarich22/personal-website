import random

def randomNum():
     num = random.randrange(0,100)
     arr = getFirstTwoDig(num)
     sum = sumStrings(arr)
     less = isLessThanEleven(sum)
     if less != False:
          return num
     return randomNum()


def getFirstTwoDig(num):
     arr = []
     for x in str(num):
          arr.append(x)
          if x == 2: break
     
     return arr

def isLessThanEleven(num):
     # print(num)
     if (int(num) < 11) or (int(num) % 10 == 0):
          return True
     return False

def randomNumGreat9():
    num = randomNum()
    if (num > 10):
        return num
    return randomNumGreat9()




def sumStrings(arr):
     num = ""
     for x in arr:
          # print(x)
          num+=x
     return num

# generate random numbers based on input; retur string
def generateChoices(ans):
     choices = [ans]
    
     for i in range(3):
        choice = createChoice(ans, choices)
        choices.append(choice)
     random.shuffle(choices)
     stringifyArr(choices)
     for i in range(4):
         choices[i] = truncateDec(choices[i])
     return choices

def createChoice(ans, arr):
     randNum = ans + random.randrange(-10,10)
    
     if (randNum >= 0) and (findNum(randNum, arr) == False):
          return randNum
     return createChoice(ans, arr)


def findNum(num, arr):
    for i in range(len(arr)):
        if int(num) == int(arr[i]):
            return num
    return False


def stringifyArr(arr):
     for i in range(len(arr)):
          arr[i] = str(arr[i])
     return arr

##truncate to one decimal place
def truncateDec(num):
     arr = num.split(".")
     num = arr[0] + "." + arr[1][0]
     return num
# print(createChoice(0, []))
# print(truncateDec("72.2"))

