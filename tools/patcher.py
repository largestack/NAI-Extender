



import requests
import json


if __name__ == "__main__":
  # Downloads and patches the latest version of the image file

  # Download the source code at https://novelai.net/image without authentication to
  # find the link to the current image javascript file
  r = requests.get("https://novelai.net/image")
  image_page = r.content.decode("utf-8")
  image_script_url = "https://novelai.net/_next/static/chunks/pages/image-" + image_page.split('<script src="/_next/static/chunks/pages/image-')[-1].split('"')[0]
  print(f"Found current image script url: {image_script_url}")

  # Update the rules.json file to filter to the latest image file
  # An explicit version redirect is used so that if NAI updates
  # then no redirection will occur. NAI will still work, but will
  # not include a couple of these added features.
  with open("./../rules.json", "r") as f:
    rules = json.load(f)
  rules[0]["condition"]["urlFilter"] = image_script_url
  with open("./../rules.json", "w") as f:
    json.dump(rules, f, indent=2)
  print(f"Updated rules.json to filter to {image_script_url}")

  r = requests.get(image_script_url)
  image_script = r.content.decode("utf-8")
  with open("./../image_unpatched.js", "wb") as f:
    f.write(image_script.encode("utf-8"))
    print(f"Downloaded image file to image_unpatched.js")
  
  # Build the new image sizes to add
  new_image_sizes = """
      {name:"Portrait",width:${extra_small_short},height:${extra_small_long},category:"Extra Small"},
      {name:"Landscape",width:${extra_small_long},height:${extra_small_short},category:"Extra Small"},
      {name:"Square",width:${extra_small_square},height:${extra_small_square},category:"Extra Small"},
  """
  from string import Template
  new_image_sizes = Template(new_image_sizes).substitute(
    extra_small_square=str(64*6), # 384
    extra_small_long=str(64*8), # 512
    extra_small_short=str(int(64*5)), # 320
  )

  patches = [
    # Update max image count to 10
    ("{var i=4;return e*t>", "{var i=10;return e*t>"),
    # Add "Extra Small" image size
    (
      '{name:"Square",width:512,height:512,category:"Small"},',
      '{name:"Square",width:512,height:512,category:"Small"},' + new_image_sizes
    )
  ]

  # Apply the patches
  for patch in patches:
    if patch[0] in image_script:
      print(f"Patching {patch[0]} -> {patch[1]}...")
      image_script = image_script.replace(patch[0], patch[1])
    else:
      print(f"ERROR: Patch {patch[0]} not found!")
  
  # Write the patched image file
  with open("./../image_patched.js", "wb") as f:
    f.write(image_script.encode("utf-8"))

  print(f"Done! Patched image file written to image_patched.js")

  # Beautify the patched image javascript file
  # NOTE: You'll need to install js-beautify via `npm install -g js-beautify` first
  print(f"Beautifying patched javascript...")
  import os
  os.system("js-beautify -r ./../image_patched.js") # Beautify the file in place
  print(f"Done! Beautified script overwritten to image_patched.js")
