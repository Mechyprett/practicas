var today = new Date();
var year = today.getFullYear();
var est = new Date('Apr 16, 1996 15:45:55');

var diffence =( diffence / 31556900000);

var elMsg = document.getElementById('message');
elMsg.textContent = Math.floor(diffence) + ' Year of online travel advice';