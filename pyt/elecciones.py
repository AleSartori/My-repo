n= int(input("cuantos votos? "))
v= {}
for i in range(n):
  votado= input("voto= ")

  if votado in v:
    v[votado]+=1
  else:
    v [votado]= v.get (votado,1)
    
ganador= max(v, key=v.get)
print("gano=", ganador)