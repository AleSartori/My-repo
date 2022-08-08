def is_leap(year):
  leap = False
  if year % 4== 0 :
    return True
  if not year % 100==0:
    return False
  elif year % 400 ==0 :
    return True

year = int(input("Escriba un año: "))
print(is_leap(year))

"""leap= False
year= int(input())
 if year / 4 == 0:
    return True"""

