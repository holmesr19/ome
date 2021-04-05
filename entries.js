const entryForm = "<div class='entry-form'>\
entry form\
</div>";

let athleteId = 0;

const athlete = `<div class='athlete-entries'>\
new athlete\
<div id = 'add-entries-${athlete-id}'></div>\
    <button type='button' class='btn btn-secondary' onclick='addEntry('add-entries-${athlete-id}')'>Add another entry</button>\
</div>`;




function addEntry(athleteEntries) {
    document.getElementById(athleteEntries).innerHTML+=entryForm;
}

function addAthlete() {
    document.getElementById('add-athlete').innerHTML+=athlete;
    athleteId += 1;
}

function submit() {
    console.log('entries submitted')
}
