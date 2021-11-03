function updateTimeSlotItem() {
    // assign classes (past /present /future)
    $('.hour').each(function() {
        var hours = $(this).text().trim();
        var timeObject = moment(hours, 'LT');
        var duration = Math.floor(moment.duration(moment().diff(timeObject)).asHours());
        if (duration > 0) {
            $(this).next('.description').addClass('past');
        } else if (duration === 0) {
            $(this).next('.description').addClass('present');
        } else {
            $(this).next('.description').addClass('future');
        }
    });
    // read relevant local storage data (about the relevant hour slot)
    $('.time-block').each(function() {
        var timeId = $(this).attr('id');
        $(this).children('.description').text(localStorage.getItem(timeId));
    });

};

function handleSave(event) {

    var hour = $(event.target).closest('.time-block').attr('id');
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