
Template.cal.helpers({
});

Template.cal.events({
  "click #Update": function(e){
    e.preventDefault();
    var id = document.getElementById('sID').value;
    var name = document.getElementById('name').value;

    var Monday = {
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

    if (Times.findOne({sID: id}) === undefined) {
      Times.insert({
        sID: id,
        user:Meteor.userId(),
        name: name,
        Monday:Monday,
        Tuesday:Tuesday,
        Wednesday:Wednesday,
        Thursday:Thursday,
        Friday:Friday,
        Saturday:Saturday,
        Sunday:Sunday
      });
      Router.go('/');
    }else {
      alert("That data id exists. YOU CANT USE IT!");
    }
    console.log(times.findOne({sID: id}));
}
});
