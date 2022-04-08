# 2/24 8-9am: learned about workspaces, readline...
# 9-930: tried to print without spaces, not work
# 10:15-45am: can read and retrieve val from file
# 11-1130am: cannot write yet
#12-1230 - sketched ideas to retrive multi-char num
#1230 - 1255 - worked on above

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
          


#read file
f = open("list_of_problems.txt", "r")
text = f.read()
# print(text)

#solve problems
#step 1: collect all numbers
findNum(text)
#step 2: perform an operation
answer = (numArr[1] * numArr[2]) / 100
answer = str(answer)
print(numArr)


#add HTML elements

def addHTML(text):
     for x in text:
          inQuestion = False
          if x.isspace():
               inQuestion = True
               #append fake html
               
          if inQuestion:
               x = "fakeHTML" + x

#write into the same file
#step 1: close first file, reopen, write
# f.close()
# f = open("list_of_problems.txt", "a")
# f.write("\n"+answer)
# f.close()


# #test to see if worked
# f = open("list_of_problems.txt", "r")
# print(f.read())
