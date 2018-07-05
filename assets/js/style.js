/* Login Content */
function viewPasswd() {
	var x = document.getElementById("login-pass");
	var y = document.getElementById("mata");
   	if (x.type === "password") {
       	x.type = "text";
       	y.innerHTML = "visibility";
   	} else {
       	x.type = "password";
       	y.innerHTML = "visibility_off";
	} 
}

/* Show/Off Modal Login */
$(document).ready(function(){
    $('.modal').modal();
});

/* Dropdown Menu */
$('.dropdown-trigger').dropdown();


/* Menu Admin Hoverable */
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.fixed-action-btn');
  var instances = M.FloatingActionButton.init(elems, {
    direction: 'top'
  });
});

/* DataTables */
$(document).ready( function () {
    $('#tabel-data').DataTable();
} );

//* Select Option */
$(document).ready(function(){
  $('select').formSelect();
});

/* Open Image */
$(document).ready(function(){
  $('.materialboxed').materialbox();
});

/* Side Navigasi */
$(document).ready(function(){
  $('.sidenav').sidenav();
});