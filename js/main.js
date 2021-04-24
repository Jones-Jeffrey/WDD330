
window.onload = function () {
	let list = document.getElementById('linkList');

    const links = [
        {
        label: 'Week 1 Code',
		url: '/WDD330/week1/story_editor.html'
        }
    ]
        for (var i = links.length - 1; i >= 0; i--) {
            let li = document.createElement('li');
            let a = document.createElement('a');
            a.textContent = links[i].label;
            a.setAttribute('href', links[i].url);
            li.append(a);
            list.append(li);
            
        }
}

