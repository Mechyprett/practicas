 var msg = '<h2>browser</h2><p>width: ' + window.innerWidth + '</p>';
msg += '<p>height: ' + window.innerHeight + '</p>';
msg += '<h2>history</h2><p>item: ' + window.history.length +'</p>';
msg += '<p>height: ' + window.screen.height + '</p>';
msg += '<p>height: ' + window.screen.height + '</p>';

var el = document.getElementById('info');
el.innerHTML = msg;
alert('Current page: ' + window.location);

