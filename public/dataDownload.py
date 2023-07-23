products = []


import pprint
import requests
import re

# def download_image(image_url, filename):
#     response = requests.get(image_url)

#     if response.status_code == 200:
#         with open('./public/img/' + filename + '.jpg', 'wb') as f:
#             f.write(response.content)
#         print(f"{filename} 다운로드 완료")
#     else:
#         print(f"{filename} 다운로드 실패: {response.status_code}")


# for p in products:

#     for index, img in enumerate(p['image']):

#         # filename = re.search(r'/([A-Za-z0-9,-]+).(jpg|JPG)$', img).group(1)
#         # download_image(img, filename)

#         p['image'][index] = '/img/' + img + '.jpg'

pprint.pprint(products)