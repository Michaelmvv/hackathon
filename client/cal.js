
Template.cal.helpers({
});

Template.cal.events({
  "click #Update": function(e){
    e.preventDefault();
    var id = document.getElementById('sID').value;
    var monday = {
      power: document.getElementById('MondayCheck').value,
      start: document.getElementById('mondayStart').value,
      end: document.getElementById('mondayEnd').value,
    }
    var Tuesday = {
      power: document.getElementById('TuesdayCheck').value,
      start: document.getElementById('TuesdayStart').value,
      end: document.getElementById('TuesdayEnd').value,
    }
    var Wednesday = {
      power: document.getElementById('WednesdayCheck').value,
      start: document.getElementById('WednesdayStart').value,
      end: document.getElementById('WednesdayEnd').value,
    }
    var Thursday = {
      power: document.getElementById('ThursdayCheck').value,
      start: document.getElementById('ThursdayStart').value,
      end: document.getElementById('ThursdayEnd').value,
    }
    var Friday = {
      power: document.getElementById('FridayCheck').value,
      start: document.getElementById('FridayStart').value,
      end: document.getElementById('FridayEnd').value,
    }
    var Saturday = {
      power: document.getElementById('SaturdayCheck').value,
      start: document.getElementById('SaturdayStart').value,
      end: document.getElementById('SaturdayEnd').value,
    }
    var Sunday = {
      power: document.getElementById('SundayCheck').value,
      start: document.getElementById('SundayStart').value,
      end: document.getElementById('SundayEnd').value,
    }

    if (times.findOne({sID: id}) != undefined) {

    }else {
      times.insert({
        sID: id,
        user:Meteor.userId(),
        Monday:monday,
        Tuesday:Tuesday,
        Wednesday:Wednesday,
        Thursday:Thursday,
        Friday:Friday,
        Saturday:Saturday,
        Sunday:Sunday
      });
    }
    console.log(times.findOne({sID: id}));
}
});