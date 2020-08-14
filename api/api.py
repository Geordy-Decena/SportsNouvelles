from flask import Flask
import requests
from bs4 import BeautifulSoup
from SportsFunctions import NewsHeader, NewsImage, NewsLink, NewsTime, NewsHeader

app = Flask(__name__)

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


@app.route('/api', methods=['GET'])
def api():
    return {
        'headerNBA': newsHeaderNBA,
        'imageNBA': newsImageNBA,
        'timeNBA': newsTimeNBA,
        'linkNBA': newsLinkNBA,
        'headerNFL': newsHeaderNFL,
        'imageNFL': newsImageNFL,
        'timeNFL': newsTimeNFL,
        'linkNFL': newsLinkNFL,
        'headerNHL': newsHeaderNHL,
        'imageNHL': newsImageNHL,
        'timeNHL': newsTimeNHL,
        'linkNHL': newsLinkNHL,
        'headerMLB': newsHeaderMLB,
        'imageMLB': newsImageMLB,
        'timeMLB': newsTimeMLB,
        'linkMLB': newsLinkMLB,
        'headerSOCCER': newsHeaderSOCCER,
        'imageSOCCER': newsImageSOCCER,
        'timeSOCCER': newsTimeSOCCER,
        'linkSOCCER': newsLinkSOCCER,
    }
