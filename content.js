let parent = document.getElementsByClassName('Zu0yb');

for (i = 0; i < parent.length; i++) {
    if (i%2 == 0) {
        let favicon = document.createElement('img');
        let string = parent[i].innerHTML;
        let domain = string.split('<', 1);
        let linkFavicon = 'http://www.google.com/s2/favicons?domain=' + domain;

        favicon.setAttribute('src', linkFavicon);
        favicon.setAttribute('class', 'added-favicon');
        parent[i].prepend(favicon);
        favicon.style.marginRight = '5px';
    }
}