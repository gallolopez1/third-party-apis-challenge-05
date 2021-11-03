function updateTimeSlotItem() {
    // assign classes (past /present /future)
    $('.hour').each(function() {
        var hours = $(this).text().trim();
        var timeObject = moment(hours, 'LT');
        console.log(timeObject);
    });
    // read relevant local storage data (about the relevant hour slot)

};

function handleSave(event) {

    var hour = $(event.target).closest('.time-block').attr('id');
    hour - 8
    var value = $(event.target).siblings('.description').val().trim();
    localStorage.setItem(hour, value);

};

function main() {

    updateTimeSlotItem();

    // add click event to timeSlots
    $('.saveBtn').on('click', handleSave);

    // declare date at the header
    var time = moment().format('dddd, LL');

    // display date in header
    $('#currentDay').text(time);
};

// start 
$(main);