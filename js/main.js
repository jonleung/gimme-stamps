// firebase.database().ref('2').set({
//   username: name,
//   email: email
// });
var counter;

firebase.database().ref('/counter').once('value').then(function(snapshot) {
  counter = snapshot.val();
  var numLeft = 21 + 1 - counter;
  $(".num-stamps-left").html(numLeft);
  $(".num-stamps-left-minus-one").html(numLeft-1);

});


$("#gimme").on('click', function() {

  var answer = confirm("Would you like to download your stamp now? This will forever use up a stamp.");
  if (answer) {
    var stampFileName = hex_md5(counter+".pdf") + ".pdf";
    var url = "stamps/" + stampFileName;
    window.open(url);

    counter++;
    firebase.database().ref('/counter').set(counter);
  }
});
