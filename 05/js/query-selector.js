//QuerySelector() only returns the first match
var el = document.querySelector('li.hot');
el.className = 'cool';

//querySelectorAll return a nodeList
//The second matching element (the third list item) is selected and changed
var els = document.querySelectorAll('li.hot');
els[1].className = 'cool';
