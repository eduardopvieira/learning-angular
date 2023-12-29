import requests
from bs4 import BeautifulSoup
import pandas as pd


def get_titles():
    url = 'https://webscraper.io/test-sites/e-commerce/allinone/computers/laptops'
    response = requests.get(url)
    html = response.text
    soup = BeautifulSoup(html,'html.parser')
    titles = soup.find_all('a', class_='title')
    return titles

def get_specs():
    url = 'https://webscraper.io/test-sites/e-commerce/allinone/computers/laptops'
    response = requests.get(url)
    html = response.text
    soup = BeautifulSoup(html,'html.parser')
    specs = soup.find_all('p', class_='description card-text')
    return specs


def get_prices():
    url = 'https://webscraper.io/test-sites/e-commerce/allinone/computers/laptops'
    response = requests.get(url)
    html = response.text
    soup = BeautifulSoup(html,'html.parser')
    prices = soup.find_all('h4', class_=['price'])
    return prices


master_list = []

titles = get_titles()
specs = get_specs()
prices = get_prices()

for i in range(len(titles)):
    data_dict = {}
    data_dict['Titulo'] = titles[i].text.strip()
    data_dict['Specs'] = specs[i].text.strip()
    data_dict['Preco'] = prices[i].text.strip()
    master_list.append(data_dict)
print (master_list)

df = pd.DataFrame(master_list)
df.to_csv('laptop_prices.csv')

