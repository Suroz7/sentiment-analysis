import requests

url = "http://127.0.0.1:8000/analyze"

# Sending text in JSON body, NOT as a query parameter
data = {"text": "I love coding!"}

response = requests.post(url, json=data)  # Use `json=data` instead of `params`

print(response.json())

