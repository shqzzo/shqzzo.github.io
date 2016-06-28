$(document).ready(function(){
  $('#myTable').DataTable( {
    "searching":   false,
    "lengthChange": false,
    "info":     false,
    "pagingType": "numbers",
    "dom": 'rtp'
    // "sDom": '<"row view-filter"<"col-sm-12"<"pull-left"l><"pull-right"f><"clearfix">>>t<"row view-pager"<"col-sm-12"<"text-center"ip>>>'
  } );
});