from bardapi import Bard
import os
from dotenv import load_dotenv


test_data = {
  "youtube": [
    {
      "youtube": "freeCodeCamp",
      "link": "https://www.youtube.com/channel/UC6GfOVfY6L-q4r9I4QJrqyw"
    },
    {
      "youtube": "The Coding Train",
      "link": "https://www.youtube.com/channel/UCl8zYyaX8EY1oD6uXk89F7g"
    },
    {
      "youtube": "Programming with Mosh",
      "link": "https://www.youtube.com/channel/UCuRfZzXzZ05e2i-8p40s_9Q"
    }
  ],
  "book": [
    {
      "book": "Automate the Boring Stuff with Python",
      "link": "https://www.amazon.com/Automate-Boring-Stuff-Python-Programming/dp/1593275994"
    },
    {
      "book": "Python Crash Course",
      "link": "https://www.amazon.com/Python-Crash-Course-Hands-Project-Based/dp/1593275994"
    },
    {
      "book": "Effective Python",
      "link": "https://www.amazon.com/Effective-Python-Specific-Improve-Your/dp/1593275994"
    }
  ]
}

load_dotenv()

def get_resources(role="Software Engineer"):
  input_text = f'''
Hey Bard,
I'm interested in a career as a {role}. Can you provide me with 3 YouTube channels with name and link and 3 books with name and link that would be helpful for me to pursue this career with their links? It should be json format where first 3 columns will be youtube : resource and then book : resource
Please Please include both the links and names
Thanks,
'''
  res_data = Bard().get_answer(input_text)['content']
  print(res_data)
  return res_data