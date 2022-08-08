from setuptools import sic

x= input("palabra= ")
x= x.upper()
vidas= int(input("cuantas vidas?"))
cont= 0
while vidas >= 0 and x!= "":
  letra= input()
  letra= letra.upper()
  cont+= 1
  if letra in x:
    x= x.replace(letra, "")
  else:
    vidas-=1

if vidas < 0:
  print("perdió")
else:
  print("Ganó! Y usaste",cont, "intentos!")