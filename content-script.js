
// https://chuckconway.com/changing-a-react-input-value-from-vanilla-javascript/#:~:text=React%20overrides%20the%20native%20Javascript%20onChange%20behavior.%20Triggering,value%20can%20clearly%20be%20seen%20on%20the%20screen.
function setNativeValue(element, value) {
  let lastValue = element.value;
  element.value = value;
  let event = new Event("input", { target: element, bubbles: true });
  // React 15
  event.simulated = true;
  // React 16
  let tracker = element._valueTracker;
  if (tracker) {
      tracker.setValue(lastValue);
  }
  element.dispatchEvent(event);
}

function tryGetValueFromStorage(id, default_value) {
  try {
    var value = localStorage.getItem(id);
    if (value == null) {
      return default_value;
    } else {
      return value;
    }
  } catch (e) {
    return default_value;
  }
}

function addCheckbox(id, text, tooltip, default_checked, parentDiv) {
  var checkboxContainer = document.createElement("div");
  checkboxContainer.className = "checkbox-container";
  parentDiv.appendChild(checkboxContainer);

  var checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = id;
  checkbox.title = tooltip;
  checkbox.style = "width: 5%";
  checkboxContainer.appendChild(checkbox);

  var label = document.createElement("label");
  label.htmlFor = id;
  label.title = tooltip;
  label.innerHTML = text;
  checkboxContainer.appendChild(label);

  // Load the checked state from storage
  checkbox.checked = tryGetValueFromStorage(id, default_checked);

  // Add an on-change listener to the checkbox
  checkbox.addEventListener("change", function () {
    // Save the checked state to storage
    localStorage.setItem(id, checkbox.checked);
  });

  return checkbox;
}

function addDataListWithFavoriteButton(existingInput, id, parentDiv, prepend) {
  // Adds a DataList select datalist text box of favorite items
  // and adds a clickable star icon to indicate if the current item is a favourite
  if( existingInput === null ) {
    var datalistContainer = document.createElement("div");
    datalistContainer.style = "align-items: flex-end; justify-content: flex-end; flex-wrap: wrap; row-gap: 20px;";
    if (prepend) {
      parentDiv.insertBefore(datalistContainer, existingInput);
    } else {
      parentDiv.appendChild(datalistContainer);
    }
  
    // Add the input text box
    var input = document.createElement("input");
    input.id = id;
    input.type = "text";
    input.style = "width: 95%;";
    input.spellcheck = true;
    input.autocomplete = "off";
    datalistContainer.appendChild(input);
  }
  else
  {
    var datalistContainer = existingInput.parentNode;
    var input = existingInput;
  }

  // Connect it to the datalist
  input.setAttribute("list", id + "-datalist");
  
  // Load the previous current text from storage
  var selected_value = tryGetValueFromStorage(id, "");  
  input.value = selected_value;

  // DataList select datalist text box
  var datalist = document.createElement("datalist");
  datalist.id = id + "-datalist";
  datalistContainer.appendChild(datalist);

  // Load the list of favorite items from storage indexed by id+"-favorites"
  var default_value = "{}";
  var favorites_json = tryGetValueFromStorage(id+"-favorites", default_value);
  var favorites = JSON.parse(favorites_json);
  for (var i = 0; i < favorites.length; i++) {
    var option = document.createElement("option");
    option.value = favorites[i];
    option.text = "";
    datalist.appendChild(option);
  }

  // Add a clickable star icon to indicate if the current item is a favourite
  // star.png for starred items
  // nostar.png for unstarred items
  var star = document.createElement("img");
  star.id = id + "-star";
  star.src = chrome.runtime.getURL("nostar.png");
  star.style = "width: 20px; height: 20px; margin-left: 3px; margin-right: 0px; cursor: pointer;";
  star.style.verticalAlign = "middle";
  datalistContainer.appendChild(star);
  updateStarStatus(input, star, datalist);

  // Add an on-click listener to the star
  star.addEventListener("click", function () {
    // Toggle the star
    if (star.src == chrome.runtime.getURL("nostar.png")) {
      star.src = chrome.runtime.getURL("star.png");
    } else {
      star.src = chrome.runtime.getURL("nostar.png");
    }

    // Update the datalist list
    var is_starred = star.src == chrome.runtime.getURL("star.png");
    var value = input.value;
    updateDataList(id, datalist, value, is_starred);
  });

  // Add an on-keypress listener to the datalist
  input.addEventListener("input", function () {
    // Save the selected value to storage
    localStorage.setItem(id, input.value);

    // Update the star status
    var is_starred = isValueInDataList(datalist, input.value);
    if (is_starred) {
      star.src = chrome.runtime.getURL("star.png");
    }
    else {
      star.src = chrome.runtime.getURL("nostar.png");
    }
  });

  return input;
}

function updateStarStatus(input, star, datalist) {
  // Updates the star status
  var is_starred = isValueInDataList(datalist, input.value);
  if (is_starred) {
    star.src = chrome.runtime.getURL("star.png");
  }
  else {
    star.src = chrome.runtime.getURL("nostar.png");
  }
}

function isValueInDataList(datalist, value) {
  // Checks if the value is in the datalist list
  for (var i = 0; i < datalist.options.length; i++) {
    if (datalist.options[i].value === value) {
      return true;
    }
  }
  return false;
}

function updateDataList(id, datalist, value, is_starred) {
  // Updates the datalist list and updates the storage as well
  if (is_starred) {
    // Add the value to the datalist list if it is not already there
    if (!isValueInDataList(datalist, value)) {
      var option = document.createElement("option");
      option.value = value;
      option.text = "";
      datalist.appendChild(option);
    }
  }
  else {
    // Remove the value from the datalist list if it is there
    for (var i = 0; i < datalist.options.length; i++) {
      if (datalist.options[i].value === value) {
        datalist.options[i].remove();
        break;
      }
    }
  }

  // Save the datalist list to storage indexed by id+"-favorites"
  var value_array = [];
  for (var i = 0; i < datalist.options.length; i++) {
    value_array.push(datalist.options[i].value);
  }
  localStorage.setItem(id + "-favorites", JSON.stringify(value_array));
}

// global style array
var styles = [];
function getRandomStyle() {
  // Returns a random style from the array of styles
  var index = Math.floor(Math.random() * styles.length);
  return styles[index];
}


// Note. Image count override:
// https://novelai.net/_next/static/chunks/pages/_app-368e72d440b19b04.js
//              te = function(e, t, n) {
//                  var i = 4;
//                  return e * t > 524288 && (i = 1), n ? Math.min(i, n) : i
//              },
function addInjects(referenceGroupDiv, containerDiv, input) {
  // Load the styles from the file styles.txt
  var xhr = new XMLHttpRequest();
  xhr.open("GET", chrome.runtime.getURL("styles.txt"), false);
  xhr.send();
  var styles_text = xhr.responseText;

  // Split the styles into a global array
  styles = styles_text.split("\n");
  console.log("Loaded " + styles.length + " styles.");

  // Add a new div in the same class and style as referenceDiv
  var extensionDiv = document.createElement("div");
  extensionDiv.className = referenceGroupDiv.className;
  extensionDiv.style = referenceGroupDiv.style;

  // Add a paragraph title to the new div
  var title = document.createElement("p");
  title.innerHTML = "Enhanced Settings Extension";
  extensionDiv.appendChild(title);

  // Checkbox: Larger images when clicked on
  //addCheckbox("ext-larger-images", "Larger images when clicked on", "Increases the size of the images when clicked on.", true, extensionDiv);

  // Checkbox: Dropdown of favourite prompts
  var chk = addCheckbox("ext-favourite-prompts", "Favorites dropdown list", "Adds a dropdown list of favourited prompts and styles.", true, extensionDiv);
  chk.disabled = true;

  // Checkbox: Enable styles box
  var chk = addCheckbox("ext-styles-box", "Style input box", "Adds a second input box dedicated to styles. This is concatonated to your prompt at the end.", true, extensionDiv);
  chk.disabled = true;

  
  // Slider: Variation strength
  // TODO: IMPLEMENT THIS FEATURE

  // Slider: Variation noise
  // TODO: IMPLEMENT THIS FEATURE

  // Checkbox: Allow up to 10 images at a time
  var chk = addCheckbox("ext-more-images", "Allow up to 10 images at a time (10 small or 6 normal)", "Increases the max number of images generated to 10. You can generate up to 10 Small images, or up to 6 Normal images at a time.", true, extensionDiv);
  chk.disabled = true;

  // Add datalist list of favorite prompts
  var prompt = addDataListWithFavoriteButton(null, "ext-favorite-prompts-list", input.parentNode, true);
  prompt.placeholder = "Enter your prompt here.";
  prompt.style = "width: calc(100% - 30px); border-radius: 3px 0px 0px 3px;";
  prompt.parentNode.parentNode.style = "align-items: flex-end; justify-content: flex-end; flex-wrap: wrap; row-gap: 20px;"
  prompt.parentNode.parentNode.parentNode.parentNode.style = "flex: 50 1 0%; align-self: stretch;"

  // Add datalist for styles
  var style = addDataListWithFavoriteButton(null, "ext-favorite-styles-list", input.parentNode.parentNode, false);
  style.placeholder = "Enter a style here. This is appended to the end of the prompt.";
  style.style = "width: calc(100% - 50px); border-radius: 3px 0px 0px 3px;";

  // Move the "Generate" button to below the prompts for longer prompt boxes
  var generateSpan = "";
  for (const span of document.querySelectorAll('span')) {
    if (span.textContent == "Generate") {
      generateSpan = span;
    }
  }
  style.parentNode.appendChild(generateSpan.parentElement)

  // Add a text change handler for both inputs to merge their prompts together
  function updateRealPrompt() {
    var input = document.getElementById("prompt-input-0");
    value = "";
    if (style.value == "") {
      value = prompt.value;
    }
    else {
      value = prompt.value + "," + style.value;
    }

    // Update the website's local storage key 'imagegen-prompt' to the new value, and the text value
    localStorage.setItem("imagegen-prompt", "[\"" + value + "\"]");
    setNativeValue(input, value);
  }
  prompt.addEventListener("input", updateRealPrompt);
  style.addEventListener("input", updateRealPrompt);
  
  // Hide the original input box
  input.style = "display: none;";

  // Add a clickable icon (refresh.png) next to the style input to randomize the style
  var randomizeStyle = document.createElement("img");
  randomizeStyle.src = chrome.runtime.getURL("refresh.png");
  randomizeStyle.style = "width: 20px; height: 20px; margin: 0px; cursor: pointer;";
  randomizeStyle.onclick = function() {
    style.value = getRandomStyle();
    updateRealPrompt();
  };
  style.parentNode.insertBefore(randomizeStyle, style.nextSibling.nextSibling);
  randomizeStyle.title = "Random style from a set of 10K+ styles generated by https://huggingface.co/spaces/daspartho/prompt-extend.";


  // Add the complete div at the start of the container div
  containerDiv.insertBefore(extensionDiv, containerDiv.firstChild);

  // Sync prompt
  updateRealPrompt();
}

// Wait until a div with Settings textContent is found on the page
// Function:
// 1. Find the parent div of the one with text value of "Settings"
// 2. Add a button to the page
// 3. Add an on-click listener to the button
// 4. When the button is clicked, send a message to the background script
function waitForSettings() {
  // Find the parent div of the one with text value of "Settings"
  var referenceSettingsGroup = "";
  for (const div of document.querySelectorAll('div')) {
    if (div.textContent == "Image Resolution") {
      referenceSettingsGroup = div.parentElement.parentElement;
    }
  }

  // Find the promt input (id=prompt-input-0)
  var input = document.getElementById("prompt-input-0");

  if (referenceSettingsGroup != "" && input != null) {
    console.log("Found reference divs.")

    // Run the main content injects
    addInjects(referenceSettingsGroup, referenceSettingsGroup.parentElement, input);
  } else {
    console.log("No reference div, retrying find.")
    setTimeout(waitForSettings, 250);
  }
}

waitForSettings();