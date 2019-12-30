import random

# change the strings here to suit your ruleset
rules = { 1: "Waterfall",
            2: "You",
            3: "Me",
            4: "Floor",
            5: "Guys",
            6: "Chicks",
            7: "Heaven",
            8: "Mate",
            9: "Rhyme",
            10: "Categories",
            11: "Never Have I Ever",
            12: "Quizmaster",
            13: "King"
            }
suit = list(range(1, 14))
deck = suit + suit + suit + suit

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
    print(rules.get(card))
