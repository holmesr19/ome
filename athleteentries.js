const entryForm = "<div class='entry-form'>\
entry form\
</div>";

var athleteId = 0;

var athlete = `<div class='athlete-entries'>\
new athlete\
<div id = 'add-entries-${athleteId}'></div>\
    <button type='button' class='btn btn-secondary' onclick='addEntry("add-entries-`+athleteId+`")'>Add another entry</button>\
</div>`;




function addEntry(athleteEntries) {
    document.getElementById(athleteEntries).innerHTML+=entryForm;
}

function addAthlete() {
    document.getElementById('add-athlete').innerHTML+=athlete;
    athleteId += 1;
    athlete = `<div class='athlete-entries'>\
new athlete\
<div id = 'add-entries-${athleteId}'></div>\
    <button type='button' class='btn btn-secondary' onclick='addEntry("add-entries-`+athleteId+`")'>Add another entry</button>\
</div>`;
}

function submit() {
    console.log('entries submitted')
}
