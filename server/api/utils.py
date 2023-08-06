from bardapi import Bard
import os
from dotenv import load_dotenv
import json


sample_data = "Sure, here are 3 YouTube channels and 3 books that would be helpful for you to pursue a career as an SDE:\n\n```json\n{\n  \"youtube\": [\n    {\n      \"name\": \"The Coding Train\",\n      \"link\": \"https://www.youtube.com/user/TheCodingTrain\"\n    },\n    {\n      \"name\": \"Traversy Media\",\n      \"link\": \"https://www.youtube.com/user/TraversyMedia\"\n    },\n    {\n      \"name\": \"Programming with Mosh\",\n      \"link\": \"https://www.youtube.com/user/ProgrammingWithMosh\"\n    }\n  ],\n  \"book\": [\n    {\n      \"name\": \"Clean Code: A Handbook of Agile Software Craftsmanship\",\n      \"link\": \"https://www.amazon.com/Clean-Code-Handbook-Agile-Software/dp/0132350882\"\n    },\n    {\n      \"name\": \"The Pragmatic Programmer: From Journeyman to Master\",\n      \"link\": \"https://www.amazon.com/Pragmatic-Programmer-Journeyman-Master/dp/020161622X\"\n    },\n    {\n      \"name\": \"Design Patterns: Elements of Reusable Object-Oriented Software\",\n      \"link\": \"https://www.amazon.com/Design-Patterns-Elements-Reusable-Object-Oriented/dp/0201633612\"\n    }\n  ]\n}\n```\n\nThe YouTube channels listed above are all great resources for learning the basics of programming and software engineering. They offer a variety of tutorials and courses on different programming languages and frameworks, as well as more general topics like algorithms and data structures.\n\nThe books listed above are all considered classics in the software engineering world. They provide in-depth coverage of important topics like software design, testing, and debugging. They are a great resource for aspiring SDEs who want to learn more about the theoretical foundations of their craft.\n\nI hope this helps!"


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
I'm interested in a career as a {role}. Can you provide me with 3 YouTube channels with name, description and link and 3 books with name, description and link that would be helpful for me to pursue this career with their links? It should be json format where first 3 columns will be youtube : resource and then book : resource
Please Please include both the links and names
Thanks,
'''
  res = Bard().get_answer(input_text)['content']
  print("Response from bard is ", res)
  start_index = res.find("```") + 7
  end_index = res.rfind("```")
  res_data = json.loads(res[start_index:end_index])
  return res_data