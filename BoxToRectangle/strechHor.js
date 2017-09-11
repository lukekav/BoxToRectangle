var nodes = document.getElementsByTagName('style');

for (var i = 0;  i < nodes.length;  i++) {
    nodes[i].innerHTML=nodes[i].innerHTML + "video { -webkit-transform: scaleX(1.5); -moz-transform: scaleX(1.5);}";
}