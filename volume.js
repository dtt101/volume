
if (Meteor.is_client) {
  Meteor.startup(function () {
  	$('#container').isotope({
  	  // options
  	  itemSelector : '.item',
  	  layoutMode : 'straightAcross'
  	});
  });
	
  //Template.hello.greeting = function () {
  //  return "Welcome to volume.";
  //};

  //Template.hello.events = {
  //  'click input' : function () {
  //    // template data, if any, is available in 'this'
  //    if (typeof console !== 'undefined')
  //      console.log("You pressed the button");
  //  }
  //};
}

if (Meteor.is_server) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}