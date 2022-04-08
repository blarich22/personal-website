# 2/24 8-9am: learned about workspaces, readline...
# 9-930: tried to print without spaces, not work
# 10:15-45am: can read and retrieve val from file
# 11-1130am: cannot write yet
#12-1230 - sketched ideas to retrive multi-char num
#2-230: can do above; sketched ideas to generate answers for all
#2/25 7-7:40am: generateAnswers now works as intended orginally 

##Note: Credit to  https://www.mukilteoschools.org/cms/lib/WA01819447/Centricity/Domain/2486/Grade%207%20Advanced%20Math%20Review%20Packet.pdf

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
     answer = str(answer)
     return str(answer)

def generateAnswers():
     arr = []
     print(numArr)
     for x in range(0,len(numArr)-1,2):
          arr.append(findPercentOf(x)) 
     return arr
     

#read file

f = open("list_of_problems.txt", "r")
text = f.read()
# print(text)

#solve problems
#step 1: collect all numbers
findNum(text)
answers = generateAnswers()

     


#write into the same file

#step 0.5: create answer choices 
string = "test"
#step 1: close first file, reopen, write

f.close()
f = open("list_of_problems.txt", "a")
f.write("\n"+str(answers))
f.close()


#test to see if worked
f = open("list_of_problems.txt", "r")
print(f.read())
