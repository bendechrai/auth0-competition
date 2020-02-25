function renderUser(user) {
  let name = user.nickname || user.name
  name = (name.charAt(0).toUpperCase() + name.slice(1))
  document.getElementById('name').innerHTML = name
  document.getElementById('picture').src = user.picture
  document.getElementById('payload').innerHTML = JSON.stringify(user, null, '  ')
  document.getElementById('login').classList.add('hidden')
  document.getElementById('logout').classList.remove('hidden')
  document.getElementById('userinfo').classList.remove('hidden')

  // Promote the form fill comp entry
  document.getElementById('screenshot').insertAdjacentHTML('afterend', "<h2>Want a second entry to the competition?</h2><p><a href=\"https://forms.gle/45xUPCzBeRKxLuSe9\" target=\"auth0-competition-formfill\">Fill in this survey</a>, and that's exactly what you'll get!</p>")
}
