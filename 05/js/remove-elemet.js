var removeEl = document.getElementsByTagName('li')[3];  //The element to remove

var containerEl = removeEl.parentNode;      //It's containing element

containerEl.removeChild(removeEl);  //Removing the element
