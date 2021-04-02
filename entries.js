const entryForm = "<div class='entry-form'>hello</div>";

var entries = [];

function addEntry() {
    var entryDiv = document.getElementById('add-entries');
    var text = document.createTextNode(entryForm);
    entryDiv.appendChild(text);
    
}
