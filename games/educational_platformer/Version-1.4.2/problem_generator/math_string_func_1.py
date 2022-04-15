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


def sumStrings(arr):
     num = ""
     for x in arr:
          # print(x)
          num+=x
     return num

# generate random numbers based on input; retur string
def generateChoices(ans):
     arr = createChoices(ans)
     random.shuffle(arr)
     stringifyArr(arr)
     return arr

def createChoices(ans):
    randNum = random.randrange(-10,10)
    arrRand = []
    if ans > randNum:
        arrRand.append(ans)
    if len(arrRand) == 3:
        return [ans, ans+arrRand[0], ans+arrRand[1], ans+arrRand[2]]
    return createChoices(ans)
    


def stringifyArr(arr):
     for i in range(len(arr)):
          arr[i] = str(arr[i])
     return arr

