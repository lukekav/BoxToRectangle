document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('strechHor');
        checkPageButton.addEventListener('click', function() {
        chrome.tabs.executeScript(null, {file: 'strechHor.js'})
    });
    var checkPageButton = document.getElementById('strechVert');
        checkPageButton.addEventListener('click', function() {
        chrome.tabs.executeScript(null, {file: 'strechVert.js'})
    });
    var checkPageButton = document.getElementById('restore');
        checkPageButton.addEventListener('click', function() {
        chrome.tabs.executeScript(null, {file: 'restore.js'})
    });
    var checkPageButton = document.getElementById('rate');
        checkPageButton.addEventListener('click', function() {
        chrome.tabs.executeScript(null, {file: 'rate.js'})
    });
});