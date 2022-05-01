

import httplib2
from bs4 import BeautifulSoup, SoupStrainer


url = 'https://www.formula1.com/en/racing/2022.html'

http = httplib2.Http()

response, content = http.request(url)

links = []

for link in BeautifulSoup(content).find_all('a', href=True):
    links.append(link['href'])

for link in links:
    print(link)



if '/en/racing/2022/Bahrain.html' in links:
    print("Yes")
    BahrainOnCalendar = True

    f = open("Test.txt", "a")
    f.write("BahrainTRUE")
    f.close()
else:
    print("No")
    BahrainOnCalendar = False
    f = open("Test.txt", "a")
    f.write("Test BahrainFALSE test")
    f.close()


if '/en/racing/2022/Saudi_Arabia.html' in links:
    print("Yes")
else:
    print("No")

if '/en/racing/2022/Australia.html' in links:
    print("Yes")
else:
    print("No")

if '/en/racing/2022/EmiliaRomagna.html' in links:
    print("Yes")
else:
    print("No")

if '/en/racing/2022/Miami.html' in links:
    print("Yes")
else:
    print("No")

if '/en/racing/2022/Spain.html' in links:
    print("Yes")
else:
    print("No")
    
if '/en/racing/2022/Monaco.html' in links:
    print("Yes")
else:
    print("No")
    
if '/en/racing/2022/Azerbaijan.html' in links:
    print("Yes")
else:
    print("No")
    
if '/en/racing/2022/Canada.html' in links:
    print("Yes")
else:
    print("No")
    
if '/en/racing/2022/Great_Britain.html' in links:
    print("Yes")
else:
    print("No")
    
if '/en/racing/2022/Austria.html' in links:
    print("Yes")
else:
    print("No")
    
if '/en/racing/2022/France.html' in links:
    print("Yes")
else:
    print("No")
    
if '/en/racing/2022/Hungary.html' in links:
    print("Yes")
else:
    print("No")
    
if '/en/racing/2022/Belgium.html' in links:
    print("Yes")
else:
    print("No")
    
if '/en/racing/2022/Netherlands.html' in links:
    print("Yes")
else:
    print("No")
    
if '/en/racing/2022/Italy.html' in links:
    print("Yes")
else:
    print("No")
    
if '/en/racing/2022/Singapore.html' in links:
    print("Yes")
else:
    print("No")
    
if '/en/racing/2022/Japan.html' in links:
    print("Yes")
else:
    print("No")
    
if '/en/racing/2022/United_States.html' in links:
    print("Yes")
else:
    print("No")

if '/en/racing/2022/Mexico.html' in links:
    print("Yes")
else:
    print("No")

if '/en/racing/2022/Brazil.html' in links:
    print("Yes")
else:
    print("No")

if '/en/racing/2022/United_Arab_Emirates.html' in links:
    print("Yes")
else:
    print("No")

