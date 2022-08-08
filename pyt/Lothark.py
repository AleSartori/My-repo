def lothar(x):
  
  cont= 0
  while x != 1:
    if x % 2 == 0:
      x/=2
      print(x)
    else:
      x=x *3 +1
      print(x)
    cont+=1
  print(cont)
x= int (input())
lothar(x)