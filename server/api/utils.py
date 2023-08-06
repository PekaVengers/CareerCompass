from bardapi import Bard
import os
from dotenv import load_dotenv
import json


sample_data = "Sure, here are 3 YouTube channels and 3 books that would be helpful for you to pursue a career as an SDE:\n\n```json\n{\n  \"youtube\": [\n    {\n      \"name\": \"The Coding Train\",\n      \"link\": \"https://www.youtube.com/user/TheCodingTrain\"\n    },\n    {\n      \"name\": \"Traversy Media\",\n      \"link\": \"https://www.youtube.com/user/TraversyMedia\"\n    },\n    {\n      \"name\": \"Programming with Mosh\",\n      \"link\": \"https://www.youtube.com/user/ProgrammingWithMosh\"\n    }\n  ],\n  \"book\": [\n    {\n      \"name\": \"Clean Code: A Handbook of Agile Software Craftsmanship\",\n      \"link\": \"https://www.amazon.com/Clean-Code-Handbook-Agile-Software/dp/0132350882\"\n    },\n    {\n      \"name\": \"The Pragmatic Programmer: From Journeyman to Master\",\n      \"link\": \"https://www.amazon.com/Pragmatic-Programmer-Journeyman-Master/dp/020161622X\"\n    },\n    {\n      \"name\": \"Design Patterns: Elements of Reusable Object-Oriented Software\",\n      \"link\": \"https://www.amazon.com/Design-Patterns-Elements-Reusable-Object-Oriented/dp/0201633612\"\n    }\n  ]\n}\n```\n\nThe YouTube channels listed above are all great resources for learning the basics of programming and software engineering. They offer a variety of tutorials and courses on different programming languages and frameworks, as well as more general topics like algorithms and data structures.\n\nThe books listed above are all considered classics in the software engineering world. They provide in-depth coverage of important topics like software design, testing, and debugging. They are a great resource for aspiring SDEs who want to learn more about the theoretical foundations of their craft.\n\nI hope this helps!"


test_data = {
  "youtube": [
    {
      "name": "Coding with Mosh",
      "description": "Mosh Hamedani is a software engineer and instructor with over 1 million subscribers on YouTube. His channel offers a variety of tutorials on programming languages, including Python, Java, C++, and JavaScript. Mosh's videos are clear and concise, and he does a great job of explaining complex concepts.",
      "link": "https://www.youtube.com/user/CodingWithMoshi"
    },
    {
      "name": "The Net Ninja",
      "description": "The Net Ninja is a YouTube channel created by Adil Rashid. Adil is a software engineer with over 2 million subscribers on YouTube. His channel offers a variety of tutorials on web development, including HTML, CSS, JavaScript, and React. Adil's videos are well-produced and easy to follow.",
      "link": "https://www.youtube.com/channel/UC8butISFwyqUi2l3zF9kR5Q"
    },
    {
      "name": "FreeCodeCamp.org",
      "description": "FreeCodeCamp.org is a non-profit organization that offers free coding tutorials and certifications. Their YouTube channel offers a variety of tutorials on web development, including HTML, CSS, JavaScript, and React. FreeCodeCamp's videos are high-quality and well-organized.",
      "link": "https://www.youtube.com/user/FreeCodeCamp"
    }
  ],
  "books": [
    {
      "name": "Clean Code: A Handbook of Agile Software Craftsmanship",
      "description": "Clean Code is a book by Robert C. Martin that provides guidance on how to write code that is clear, concise, and easy to maintain. Martin's book is a must-read for any software engineer who wants to write better code.",
      "link": "https://www.amazon.com/Clean-Code-Handbook-Agile-Software/dp/0132350882"
    },
    {
      "name": "The Pragmatic Programmer: From Journeyman to Master",
      "description": "The Pragmatic Programmer is a book by Andrew Hunt and David Thomas that provides advice on how to become a better software engineer. Hunt and Thomas's book is full of practical advice that can be applied to any software development project.",
      "link": "https://www.amazon.com/Pragmatic-Programmer-Journeyman-Master/dp/020161622X"
    },
    {
      "name": "Design Patterns: Elements of Reusable Object-Oriented Software",
      "description": "Design Patterns is a book by Erich Gamma, Richard Helm, Ralph Johnson, and John Vlissides that describes 23 patterns that can be used to solve common software design problems. Design Patterns is a must-read for any software engineer who wants to write better code.",
      "link": "https://www.amazon.com/Design-Patterns-Elements-Reusable-Object-Oriented/dp/0201633612"
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
  # res = Bard().get_answer(input_text)['content']
  # print("Response from bard is ", res)
  # start_index = res.find("```") + 7
  # end_index = res.rfind("```")
  # res_data = json.loads(res[start_index:end_index])
  # return res_data
  return test_data