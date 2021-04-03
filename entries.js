const entryForm = "<div class='entry-form'>\
entry form\
</div>";


const athlete = "<div class='athlete-entries'>\
new athlete\
<div id = 'add-entries'></div>\
    <button type='button' class='btn btn-secondary' onclick='addEntry()'>Add another entry</button>\
</div>";


function addEntry() {
    document.getElementById('add-entries').innerHTML+=entryForm;
}

function addAthlete() {
    document.getElementById('add-athlete').innerHTML+=athlete;
}

function submit() {
    console.log('entries submitted')
}
