"http://reqres.in/api/users/2"

var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://reqres.in/api/users/2');
xhr.onload = function() {
    if (xhr.status === 200) {
        console.log('User\'s name is ' + xhr.responseText);
    }
    else {
        console.log('Request failed.  Returned status of ' + xhr.status);
    }
};
xhr.send();

var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://reqres.in/api/users/23');
xhr.onload = function() {
    if (xhr.status === 200) {
        console.log('User\'s name is ' + xhr.responseText);
    }
    else {
        console.log('Request failed.  Returned status of ' + xhr.status);
    }
};
xhr.send();