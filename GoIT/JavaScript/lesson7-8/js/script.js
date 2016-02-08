$(function() {

// Tabs

var $tabButtons = $('.tab');
var $tabContent = $('.tab-content');

function switchTab(e) {
  var index = $(this).index();

  $tabButtons.removeClass('color');
  $tabButtons.eq(index).addClass('color');
  $tabContent.hide(500);
  $tabContent.eq(index).show(2000);
}

$tabButtons.on('click', switchTab);
$tabContent.first().show();

// Tooltips

$('.input1').hover(
  function() {
    $('.span1').addClass('show');
  },
  function() {
    $('.span1').removeClass('show');
  }
);

$('.input2').hover(
  function() {
    $('.span2').addClass('show');
  },
  function() {
    $('.span2').removeClass('show');
  }
);

});
