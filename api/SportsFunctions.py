import requests
from bs4 import BeautifulSoup
import re


def NewsHeader(collection):
    newsHeader = ""

    for i in range(10):
        text = str(collection[i].find('h2'))
        check = True
        index = 0
        counter = 0
        temp = ""

        while(check):
            if(text[index] == ">"):
                counter += 1
            if(text[index] != ">"):
                temp += text[index]
            if(counter == 2):
                check = False
            index += 1

        check = True

        temp = ""

        while(check):
            if(text[index] == "<"):
                check = False
            if(text[index] != "<"):
                temp += text[index]
            index += 1

        newsHeader += temp + '`'

    return newsHeader


def NewsImage(collection):
    newsImage = ""

    for i in range(10):
        images = str(collection[i].find('div', 'c-entry-box--compact__image'))

        index = 0
        temp = ""
        check = 0

        while(check != 2):
            if(images[index] == "s" and images[index + 1] == "r" and images[index + 2] == "c" and images[index + 3] == "="):
                check += 1
            index += 1

        check = True
        temp = ""

        while(check):
            if(images[index+4] == '"'):
                check = False
            else:
                temp += images[index+4]
            index += 1
        newsImage += temp + '`'

    return newsImage


def NewsLink(collection):
    newsLink = ""

    for i in range(10):
        link = str(collection[i].find('a'))

        check = True
        index = 0
        temp = ""

        while(check):
            if(link[index] == 'h' and link[index+1] == 'r' and link[index+2] == 'e' and link[index+3] == 'f'):
                check = False
            index += 1

        check = True

        while(check):
            if(link[index+5] == '"'):
                check = False
            else:
                temp += link[index+5]
            index += 1

        newsLink += temp + '`'

    return newsLink


def NewsTime(collection):
    newsTime = ""

    for i in range(10):
        check = True
        time = str(collection[i].find('time'))
        index = 0
        temp = ""

        while(check):
            if(time[index] == '>'):
                check = False
            index += 1

        check = True

        while(check):
            if(time[index] == '<'):
                check = False
            else:
                temp += time[index]
            index += 1

        temp1 = temp.replace('\n', '')
        temp2 = temp1.replace('          ', '')
        temp3 = temp2.replace('        ', '')
        temp4 = temp3.replace('  ', ' ')

        newsTime += temp4 + '`'

    return newsTime


pageNBA = requests.get(
    'https://www.sbnation.com/nba-news-basketball')
soupNBA = BeautifulSoup(pageNBA.content, 'html.parser')
collectionNBA = soupNBA.find_all('div', 'c-compact-river__entry')

pageNFL = requests.get(
    'https://www.sbnation.com/nfl-news')
soupNFL = BeautifulSoup(pageNFL.content, 'html.parser')
collectionNFL = soupNFL.find_all('div', 'c-compact-river__entry')

pageNHL = requests.get(
    'https://www.sbnation.com/nhl-news')
soupNHL = BeautifulSoup(pageNHL.content, 'html.parser')
collectionNHL = soupNHL.find_all('div', 'c-compact-river__entry')

pageMLB = requests.get(
    'https://www.sbnation.com/mlb-news')
soupMLB = BeautifulSoup(pageMLB.content, 'html.parser')
collectionMLB = soupMLB.find_all('div', 'c-compact-river__entry')

pageSOCCER = requests.get(
    'https://www.sbnation.com/soccer')
soupSOCCER = BeautifulSoup(pageSOCCER.content, 'html.parser')
collectionSOCCER = soupSOCCER.find_all('div', 'c-compact-river__entry')


newsHeaderNBA = NewsHeader(collectionNBA)
newsImageNBA = NewsImage(collectionNBA)
newsTimeNBA = NewsTime(collectionNBA)
newsLinkNBA = NewsLink(collectionNBA)

newsHeaderNFL = NewsHeader(collectionNFL)
newsImageNFL = NewsImage(collectionNFL)
newsTimeNFL = NewsTime(collectionNFL)
newsLinkNFL = NewsLink(collectionNFL)

newsHeaderNHL = NewsHeader(collectionNHL)
newsImageNHL = NewsImage(collectionNHL)
newsTimeNHL = NewsTime(collectionNHL)
newsLinkNHL = NewsLink(collectionNHL)

newsHeaderMLB = NewsHeader(collectionMLB)
newsImageMLB = NewsImage(collectionMLB)
newsTimeMLB = NewsTime(collectionMLB)
newsLinkMLB = NewsLink(collectionMLB)

newsHeaderSOCCER = NewsHeader(collectionSOCCER)
newsImageSOCCER = NewsImage(collectionSOCCER)
newsTimeSOCCER = NewsTime(collectionSOCCER)
newsLinkSOCCER = NewsLink(collectionSOCCER)


print("NBA______________________")
print(newsHeaderNBA)
print("-------------------------")
print(newsImageNBA)
print("-------------------------")
print(newsTimeNBA)
print("-------------------------")
print(newsLinkNBA)
print("-------------------------")
print("NFL______________________")
print(newsHeaderNFL)
print("-------------------------")
print(newsImageNFL)
print("-------------------------")
print(newsTimeNFL)
print("-------------------------")
print(newsLinkNFL)
print("-------------------------")
print("NHL______________________")
print(newsHeaderNHL)
print("-------------------------")
print(newsImageNHL)
print("-------------------------")
print(newsTimeNHL)
print("-------------------------")
print(newsLinkNHL)
print("-------------------------")
print("MLB______________________")
print(newsHeaderMLB)
print("-------------------------")
print(newsImageMLB)
print("-------------------------")
print(newsTimeMLB)
print("-------------------------")
print(newsLinkMLB)
print("-------------------------")
print("SOCCER___________________")
print(newsHeaderSOCCER)
print("-------------------------")
print(newsImageSOCCER)
print("-------------------------")
print(newsTimeSOCCER)
print("-------------------------")
print(newsLinkSOCCER)
print("-------------------------")
