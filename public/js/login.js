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

  $('#join-btn').click(() => {
    window.location.replace('/users/join');
  });

  $('#cancel').click(() => {
    $('input').val('');
  });

  $('#join-ok').click(() => {
    const id = $('#user').val();
    const pwd = $('#pwd').val();
    const confirm = $('#confirm').val();
    const email = $('#email').val();

    const idRegex = /[^\w._-]/g;
    const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g;

    if (id.length < 4 || idRegex.test(id)) {
      alert('Invalid ID');
      $('$user').val('');
      return;
    }

    if (pwd.length < 4) {
      alert('The length of PASSWORD must be bigger then 4.');
      $('$pwd').val('');
      return;
    }

    if (pwd !== confirm) {
      alert('CONFIRM is not same as PASSWORD.');
      $('$confirm').val('');
      return;
    }

    if (!emailRegex.test(email)) {
      alert('Invalid EMAIL');
      $('$email').val('');
      return;
    }

    $('#join-form').submit();
  });

  $('#main').click(() => {
    window.location.replace('/users');
  });

  $('#search-btn').click(() => {
    const keyword = $('#search-text').val();
    window.location.href=`/music/search/${keyword}`;
  });
});

function submit(form, div) {
  alert('oops');
  console.log(div);
  div.innerHTML += 'This video will be download as mp3 file.';
  // form.submit();
}
