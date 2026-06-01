import random
import ast

# change the strings here to suit your ruleset
with open("rules.txt", "r") as data:
    rules = ast.literal_eval(data.read())
# rules = { 1: "Waterfall",
#             2: "You",
#             3: "Me",
#             4: "Floor",
#             5: "Guys",
#             6: "Chicks",
#             7: "Heaven",
#             8: "Mate",
#             9: "Rhyme",
#             10: "Categories",
#             11: "Never Have I Ever",
#             12: "Quizmaster",
#             13: "King"
#             }
suit = list(range(1, 14))
deck = suit + suit + suit + suit
print("Welcome to Kings!\nSo you want to play but have no cards.\nNever Fear! Simply Press Enter to draw a card from a randomly shuffled deck.\nThe card number will be shown and the rule displayed next to it.\nTo customise the rules to your own liking simply change the rules in the rules.txt file.")
random.shuffle(deck)
kingsCount = 0
while(len(deck) > 0):
    input("Press Enter to draw...")
    card = deck.pop()
    if(card == 13):
        kingsCount += 1
        if(kingsCount == 4):
            print("KINGS CUP!!!")
            break
    print("" + str(card) + " : " + rules.get(card))
