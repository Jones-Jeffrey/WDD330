
window.onload = function () {
	let list = document.getElementById('linkList');

    const links = [
        {
            label: 'Week 10',
            url:'week10/'

        },
        {
            label: 'Week 9',
            url:'week9/'

        },
        {
            label: 'Week 8',
            url:'week8/'

        },{
            label: 'Week 7',
            url:'week7/'

        },
        {
            label: 'ToDo App',
            url:'todo/'

        },
        {
            label: 'Week 5',
            url:'week5/'

        },
        {
            label: 'Week 4',
            url:'week4/'

        },
        {
            label: 'Week 3',
            url:'week3/'

        },
        {
            label: 'Week 2',
            url:'week2/'

        },
        {
            label: 'Week 1',
		    url: 'week1/'
        }
        
    ];
        for (var i = links.length - 1; i >= 0; i--) {
            let li = document.createElement('li');
            let a = document.createElement('a');
            a.textContent = links[i].label;
            a.setAttribute('href', links[i].url);
            li.append(a);
            list.append(li);
            
        }
}


