# NovelAI Extender
Chrome and Edge browser extension that extends NovelAI capabilities.

## Image generation enhancements
Adds a few capabilities to NovelAI image generation:

<img src="/media/image_gen.png" width="70%" height="70%">

1. Allows generation of up to 10 images at a time (10 small, 6 normal, 4 large)
1. Adds a separate style prompt input box for controlling the style of your images.
1. Button to generate a random style option. This is sampled randomly from 10K+ prompt extenders output by https://huggingface.co/spaces/daspartho/prompt-extend
1. Bookmarking of your favorite prompts and styles so that you can come back to them.
1. Adds an image size preset of "Extra Small" that is about 40% cheaper than Small images to generate.

Note, this mod causes a couple official capabilities to no longer work:
* The similar token recommender does not work with this new UI.
* The prompt bar showing the progress toward the max token limit is no longer visible.

Future work plans:
* Images when clicked on use up your whole screen allowing you to have a closer look at the result.
* Image Variation controls to set the Strength, Steps, and Scale parameters of the variation to apply.
* Improved bookmark dropdown list user experience.

## Text generation enhancements
None currently.

Future work plans:
* Fix bias sets to be universal between Euterpe and Krake by rescaling them to have equal impact across models. Currently Krake biases are 20x more impactful than Euterpe biases, requiring painful manual tuning between the models.

# Installation

Important: When NAI updates their service, it will break the increased number of images feature and additional size preset option. You can either come back here for an update of the extension, or you can run the ./tools/patcher.py script and reload the extension - which will automatically update the extension for you.

Installation steps (Chrome):
1. Download the repository and extract it to a folder. Click Code -> Download ZIP.
1. In Chrome, click the settings button in the top right corner -> More tools -> Extensions.
1. Enable Developer Mode.
1. Click "Load unpacked" and select the extracted folder.

If this worked correctly, you should now see an extension added named "NovelAI Extender". It should now be working! If you visit the image generation page you should see the user interface changes.

