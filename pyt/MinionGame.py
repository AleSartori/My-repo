def minion_game():
    s = input("palabra ")
    s= s.upper()
    kev= 0
    stu= 0
    vocales = "AEIOU"
    for i in range(len(s)):
        if s[i] in vocales:
            kev+= (len(s)-i)
        else:
            stu += (len(s)-i)
    if kev> stu:
        print("kevin", kev)
    elif stu> kev:
        print("stuart", stu)
    else:
        print ("Draw")

minion_game()