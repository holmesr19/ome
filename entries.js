const entryForm = "<div class='entry-form'>entry form</div>";
const child = "<div class='child-entries'>new child</div>";

function addEntry() {
    document.getElementById('add-entries').innerHTML+=entryForm;
}

function addChild() {
    document.getElementById('add-child').innerHTML+=child;
}

function submit() {
    console.log('entries submitted')
}
