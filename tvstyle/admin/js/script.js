$(document).ready(function(){
  
  var table = $('#myTable');
  var roleUnique = [];

  table.DataTable( {
    "searching":   false,
    "lengthChange": false,
    "info":     false,
    "pagingType": "numbers",
    "dom": 'rtp'
  } );

  var roleArray = $("#myTable").dataTable().fnGetData();

  for (var i = 0; i < roleArray.length; i++) {
    var role = roleArray[i][2];

    if ($.inArray(role, roleUnique) == -1) {
      $('#testSelect').append('<li role="presentation"><a role="menuitem" tabindex="-1" href="#">' + role + '</a></li>');
      roleUnique.push(role);
    }
  }

});
