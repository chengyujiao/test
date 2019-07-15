var box = document.getElementById('box');
var newP = document.createElement('p');
newP.innerHTML = ('我是p');
newP.style.color = 'red'
box.appendChild(newP);

var newA = document.createElement('a');
newA.innerHTML = ('我是a')
box.insertBefore(newA, newP)

var clone = newP.cloneNode(true);
document.body.appendChild(clone);
document.body.removeChild(clone)

box.myIndex = 11;

function queryParameter(str) {
    var link = document.createElement('a');
    link.href = str;
    var hash = link.hash.substring(1),
        search = link.search.substring(1);
    var obj = {};
    hash ? obj.hash = hash : null;
    search = search.split('&');
    for (let i = 0; i < search.length; i++) {
        var item = search[i].split('=');
        obj[item[0]] = item[1];
    }

    return obj;
}

console.log(queryParameter('https://www.iconfont.cn/webfont?spm=a313x.7781069.1998910419.12&puhui=1#!/webfont/index'));