const box10 = document.createElement('div');
box10.id = 'box1';
const saveb0 = document.createElement('div');
saveb0.id = 'saveb';
saveb0.textContent = "Save";
const text10 = document.createElement('div');
text10.id = 'text1';
text10.contenteditable = 'true';
const textarea10 = document.createElement('div');
textarea10.id = 'textarea1';
const playb0 = document.createElement('div');
playb0.id = 'playb';
playb0.textContent = "Play";

document.body.appendChild(box10);
box10.appendChild(saveb0);
box10.appendChild(text10);
box10.appendChild(textarea10);
box10.appendChild(playb0);



var tBox1 = document.getElementById("text1");
var tBox2 = document.getElementById("textarea1");
var bt1 = document.getElementById("saveb");
var bt2 = document.getElementById("playb");


window.onload = function () {
    var anchors = document.getElementsByTagName("a");
    for (var i = 0; i < anchors.length; i++) {
        var anchor = anchors[i];
        var id = anchor.id;
        if (id && id.length > 0) {
            anchor.onclick = function () {
                RealClickHandler(this.id);
                return false;
            };
        }
    }
};

function RealClickHandler(id) {
    var urlLink = tBox1.innerHTML = "https://www.memesoundboard.com/sounds/" + id + ".mp3";
}

bt1.onclick = function () {
    tBox2.append(innerHTML = tBox1.innerHTML + " ");
};

bt2.onclick = function () {
    window.open(tBox1.innerHTML);
};


/*(function () {
    var meta = document.createElement("meta");
    meta.charset='UTF-8';

    var script = document.createElement("script");
    script.type = 'text/javscript';
    script.src = 'https://app.box.com/s/xkiq50f0imgs8xscqh61i0vqv0oe9msr';

    var link = document.createElement("link");
    link.rel = 'StyleSheet';
    link.type = 'text/css';
    link.href = 'https://app.box.com/s/3gjmur8hn4g4fqbiuqzxkcuna6zvuowj';

    document.getElementsByTagName("head")[0].appendChild(meta);
    document.getElementsByTagName("body")[0].appendChild(script);
    document.getElementsByTagName("head")[0].appendChild(link);
})();*/
alert("test");
