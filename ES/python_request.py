import requests
# korean JSON이라는 임의의 JSON데이터를 보내주는 간단한 사이트
# 또는 JSON placeholder라는 사이트도 같은 기능을 한다.
res = requests.get('https://koreanjson.com/posts')
data = res.json()
post_content = data[0].get('content')
print(post_content)
