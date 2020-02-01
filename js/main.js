
// avigation
$(window).on('scroll',function(){
        if ($(window).scrollTop()){
          $('nav').addClass('black');
        }
        else 
        {
            $('nav').removeClass('black');
        }
      });



// dashboard
$( function() {
    $( ".toggle-nav" ).click( function() {
      $( 'body' ).toggleClass( "sidebar-animate" );
    });
  });
  
  
  $(document).ready(function(){
  $('.launch-modal').click(function(){
    $('#add-charges').modal({
      backdrop: 'static'
    });
  }); 
});

$('.add-clon').on('click', '.remove', function() {
  $('.remove').closest('.add-clon').find('.element').not(':first').last().remove();
});
$('.add-clon').on('click', '.clone', function() {
  $('.clone').closest('.add-clon').find('.element').first().clone().appendTo('.results');
})

$(".dsy button").addClass("active");
 
 $(document).ready(function(){
  $('button').click(function(){
    $('.dsy  button').removeClass("active");
    $(this).addClass("active");
});
});



 // calendar

 $(document).ready(function () {
         $("#from5").datepicker({
          dateFormate:'dd/mm/yy',
         });
       });
 $(document).ready(function () {
         $("#to6").datepicker({
          dateFormate:'dd/mm/yy',
         });
       });
  $(document).ready(function () {
         $("#from7").datepicker({
          dateFormate:'dd/mm/yy',
         });
       });
 $(document).ready(function () {
         $("#to7").datepicker({
          dateFormate:'dd/mm/yy',
         });
       });
 

 // pophover
 $(function () {
  $('[data-toggle="popover"]').popover();
});


 // tabs
 
  