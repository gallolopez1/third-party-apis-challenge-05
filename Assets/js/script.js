function updateTimeSlotItem() {
    // assign classes (past /present /future)
    $('.hour').each(function() {
        // select string within class hour
        var hours = $(this).text().trim();
        // convert to hour object using momentjs
        var timeObject = moment(hours, 'LT');
        // convert hours to numeric value, round using math.floor and find the difference between current time using moment()
        var duration = Math.floor(moment.duration(moment().diff(timeObject)).asHours());
        // compare the duration against the current hour to see which class gets applied to it
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
        // select current time to load items by using j query chicldre()
        var timeId = $(this).attr('id');
        $(this).children('.description').text(localStorage.getItem(timeId));
    });

};

function handleSave(event) {

    // save to local storage time value by id and text with class of description
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