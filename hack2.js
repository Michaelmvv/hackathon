Router.onBeforeAction(function () {

  if (!Meteor.userId()) {
    this.render('login');
  } else {
    this.next();
  }
});
Router.route("/", function(){
  this.render("main");
});
Router.route("cal", function(){
  this.render("cal");
});
Router.map(function () {
  this.route('get/:ID', {
    path: '/get/:ID',
    where: 'server',
    action: function () {
      var json = times.findOne({sID: this.params.ID});
      this.response.setHeader('Content-Type', 'application/json');
      this.response.end(JSON.stringify(json));
    }
  });
});
Meteor.publish("times", function(){
  return times.find();
});
