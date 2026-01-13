import copy
a = [12,34,5,6,[7,8]]
b = copy.deepcopy(a)
b[4][1] = 56

print(a)
print(b)

#shallow copy changes in both references

#but deepcopy only change in one reference not in both