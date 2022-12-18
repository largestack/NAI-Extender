
import random
import requests

# Tool used to generate the styles.txt large list of prompt extenders pre-computed
if __name__ == "__main__":
  # Leading prompts
  prompts = [
    "woman, chair",
    "man, walking, black hair",
    "ocean in the sky",
    "spaceship flying through space",
    "nsfw, woman",
    "nsfw, man",
    "peaceful village landscape",
    "girl",
    "boy",
    "beach",
    "man",
    "nsfw",
    "bedroom",
    "woman, kitchen",
    "woman, farm",
    "man, farm",
    "bathing suit",
    "swimming",
    "japanese style, woman",
    "japanese style, man",
    "western style, woman",
    "western style, man",
    "man, anime",
    "girl, anime",
  ]

  # Call hugging face API to generate example extensions
  """
  API: https://daspartho-prompt-extend.hf.space/api/predict
  Input payload example:
    {
      "data": [
        str | None, // represents sample input to preprocess. of 'Type the prompt here' Textbox component
      ]
    }
  Response:
    {
      "data": [
        str | None, // represents text of 'Extended prompt' Textbox component
      ],
      "duration": (float) // number of seconds to run function call
    }
  """

  # Loop through continuously generating extensions
  endpoint = "https://daspartho-prompt-extend.hf.space/api/predict"
  headers = {"Content-Type": "application/fhir+json;charset=utf-8"}
  count = 0
  while(True):
    print(f"Generated {count} prompt extenders")
    count += 1

    try:
      # Call the api
      prompt = random.choice(prompts)
      payload = {
        "data" : [
          prompt
        ],
      }
      r = requests.post(endpoint, headers=headers, json=payload)
      result = r.json()

      # Strip the leading prompt
      result = result.get("data")[0].replace(prompt, "").strip()

      # Strip any leading commas
      while result.startswith(","):
        result = result[1:].strip()
      
      #print(f"Used prompt: {prompt}, generated result: {result}")
      print(result)

      # Append the result to the list of prompts
      with open("prompts2.txt", "ab") as f:
        f.write(f"{result}\n".encode("utf-8"))
    except:
      print("Error generating prompt extender")
