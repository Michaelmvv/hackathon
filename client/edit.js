
Template.registerHelper("CurrentData", function(){
return Times.findOne({sID:CurrentEdit});
});


Template.edit.events({
  "click #Update": function(e){
    e.preventDefault();
    var id = document.getElementById('sIDEdit').value;
    var name = document.getElementById('nameEdit').value;

    var monday = {
      power: document.getElementById('MondayCheckEdit').value,
      start: document.getElementById('mondayStartEdit').value,
      end: document.getElementById('mondayEndEdit').value,
    }
    var Tuesday = {
      power: document.getElementById('TuesdayCheckEdit').value,
      start: document.getElementById('TuesdayStartEdit').value,
      end: document.getElementById('TuesdayEndEdit').value,
    }
    var Wednesday = {
      power: document.getElementById('WednesdayCheckEdit').value,
      start: document.getElementById('WednesdayStartEdit').value,
      end: document.getElementById('WednesdayEndEdit').value,
    }
    var Thursday = {
      power: document.getElementById('ThursdayCheckEdit').value,
      start: document.getElementById('ThursdayStartEdit').value,
      end: document.getElementById('ThursdayEndEdit').value,
    }
    var Friday = {
      power: document.getElementById('FridayCheckEdit').value,
      start: document.getElementById('FridayStartEdit').value,
      end: document.getElementById('FridayEndEdit').value,
    }
    var Saturday = {
      power: document.getElementById('SaturdayCheckEdit').value,
      start: document.getElementById('SaturdayStartEdit').value,
      end: document.getElementById('SaturdayEndEdit').value,
    }
    var Sunday = {
      power: document.getElementById('SundayCheckEdit').value,
      start: document.getElementById('SundayStartEdit').value,
      end: document.getElementById('SundayEndEdit').value,
    }

    // if (Times.findOne({sID: id}) === undefined) {
    //   times.insert({
    //     sID: id,
    //     user:Meteor.userId(),
    //     name: name,
    //     Monday:monday,
    //     Tuesday:Tuesday,
    //     Wednesday:Wednesday,
    //     Thursday:Thursday,
    //     Friday:Friday,
    //     Saturday:Saturday,
    //     Sunday:Sunday
    //   });
    // }else {
    //   alert("That data id exists. YOU CANT USE IT!");
    // }
    // console.log(times.findOne({sID: id}));
}
});
