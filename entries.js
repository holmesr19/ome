const entryForm = "<div class='entry-form'>\
entry form\
</div>";


const athlete = "<div class='athlete-entries'>\
new athlete\
<div id = 'add-entries-${athlete-id}'></div>\
    <button type='button' class='btn btn-secondary' onclick='addEntry('add-entries-${athlete-id}')'>Add another entry</button>\
</div>";

let athlete-id = 0;


function addEntry(athleteEntries) {
    document.getElementById(athleteEntries).innerHTML+=entryForm;
}

function addAthlete() {
    document.getElementById('add-athlete').innerHTML+=athlete;
}

function submit() {
    console.log('entries submitted')
}
