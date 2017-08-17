$(document).ready(() => {
  $('#join').click(() => {
    window.location.replace('/join');
  });

  $('#cancel').click(() => {
    $('input').val('');
  });
});
