Template.registerHelper("currentLocationsIteration", function() {
  result = [];
  //finds all locations by current user id
  Times.find().forEach(function(i) {
    result.push({
      _id: i._id,
      sID: i.sID,
      name: i.name

    });
  });
  return result;
});
Template.CalSelector.events({
  "click .table-row": function() {
    var id = this.dataid;
    var s = Times.findOne(id);
    console.log(s);
  }
});
