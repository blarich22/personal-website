# 2/24 8-9am: learned about workspaces, readline...
# 9-930: tried to print without spaces, not work
# 10:15-45am: can read and retrieve val from file
# 11-1130am: cannot write yet
#12-1230 - sketched ideas to retrive multi-char num
#2-230: can do above; sketched ideas to generate answers for all


numArr = [] #array of numbers



#look for all numbers
def findNum(text):
     num = ""
     for x in text:
        if x.isnumeric():
          num+=str(x)
        elif num != "":
          num = int(num)
          numArr.append(num)
          num = ""

#EDGE CASES if end of file is numeric**

def findPercentOf(index):
     #step 2: perform an operation 
     answer = (numArr[index] * numArr[index+1]) / 100
     print(index)
     answer = str(answer)
     return str(answer)

def generateAnswers():
     arr = []
     print(numArr)
     for x in range(len(numArr)):
          if x != len(numArr)-1: #skip last number
               arr.append(findPercentOf(2*x)) #skip two steps
     print(arr)
     

#read file

f = open("list_of_problems.txt", "r")
text = f.read()
# print(text)

#solve problems
#step 1: collect all numbers
findNum(text)
answer = generateAnswers()
answer = "5"
     


#write into the same file
#step 1: close first file, reopen, write

f.close()
f = open("list_of_problems.txt", "a")
f.write("\n"+answer)
f.close()


#test to see if worked
f = open("list_of_problems.txt", "r")
print(f.read())
