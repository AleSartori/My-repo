#this file is to separate words in syllables

def merge_the_tools(string, k):
    n= len(string)
    lst= []
    newLst= []
    for x in range(0, n, k):
        lst.append(string[x : x+k])
    for i in lst:
        for l in i:
            if l not in newLst:
                newLst.append(l)
        print("".join(newLst))
        newLst = []

string, k = input("string "), int(input("num"))
merge_the_tools(string, k)


