/* eslint-disable no-undef */
'use strict';
//my first try which doesn't work 
// $(function (){
//   $('shopping-list').addItem(event => {
//     event.preventDefault();
//     $('.js-results').empty();
//     const string = parseInt( $(this).find('input [name="shopping-list-entry"]').val());
//     const results=[''];
//     $('.js-results').append(results);
//   });
// }


// );

$('#js-shopping-list-form').submit(event => {
  //('shopping-list-entry')
  const addItem= $('#shopping-list-entry').val();
  $('#shopping-list-entry').val('');

  
  //   $(document).ready(function(){
  //       $('#shopping-list-entry').click(function(){
  //           $('ul').append('<li><li>')
  //       }
  //   }
  //console.log ('hello world');
  event.preventDefault();

  $('.shopping-list').append(
    `<li>
      <span class="shopping-item">${listItem}</span>
      <div class="shopping-item-controls">
        <button class="shopping-item-toggle">
          <span class="button-label">check</span>
        </button>
        <button class="shopping-item-delete">
          <span class="button-label">delete</span>
        </button>
      </div>
    </li>`);
});

$('.shopping-list').on('click', '.shopping-item-delete', function(event) {
  $(this).closest('li').remove();
});

$('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
  $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
});



