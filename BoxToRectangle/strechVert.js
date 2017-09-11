var iframe = document.getElementById('embeded-video');
var innerDoc = iframe.contentDocument || iframe.contentWindow.document;

innerDoc.getElementsByTagName('style')[0].innerHTML="video { -webkit-transform: scaleY(1.5); -moz-transform: scaleY(1.5);}";