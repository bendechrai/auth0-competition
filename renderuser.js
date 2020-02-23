function renderUser(user) {
  document.getElementById('picture').src    = user.picture
  user = anonify(user);
  document.getElementById('name').innerHTML = user.nickname || user.name
  document.getElementById('payload').innerHTML = JSON.stringify(user, null, '  ')
  document.getElementById('login').classList.add('hidden')
  document.getElementById('logout').classList.remove('hidden')
  document.getElementById('userinfo').classList.remove('hidden')
}

function anonify(user) {
  user.name = user.name.replace(/@.*/, '@example.com')
  user.picture = user.picture.replace(/\/avatar.*/, '/avatar/XXXXXXXXXXXXXXXXXXXXXXX')
  user.email = user.email.replace(/@.*/, '@example.com')
  return user
}
