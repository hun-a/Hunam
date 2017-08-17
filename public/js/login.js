$(document).ready(() => {
  $('#login').click(() => {
    const id = $('#user').val();
    const pwd = $('#pwd').val();

    const regex = /[^\w._-]/g;
    if (regex.test(id)) {
      alert('Invalid ID');
      $('$user').focus();
      return;
    }

    if (id.length < 4 || pwd.length < 4) {
      alert('The length of ID or PASSWORD must be bigger than 4.')
      return;
    }

    alert(id + pwd);

    $('#login-form').submit();
  });

  $('#join').click(() => {
    window.location.replace('/join');
  });

  $('#cancel').click(() => {
    $('input').val('');
  });
});
