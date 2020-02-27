function renderUser(user) {
  let name = user.nickname || user.name
  name = name.split(/[\.\+]/)
  name.forEach((part, idx, arr) => {
    arr[idx] = part.charAt(0).toUpperCase() + part.slice(1)
  })
  name = name.join(' ')

  document.getElementById('name').innerHTML = name
  document.getElementById('picture').src = user.picture
  document.getElementById('payload').innerHTML = JSON.stringify(user, null, '  ')
  document.getElementById('login-header').classList.add('hidden')
  document.getElementById('login').classList.add('hidden')
  document.getElementById('demourl').classList.add('hidden')
  document.getElementById('logout').classList.remove('hidden')
  document.getElementById('userinfo').classList.remove('hidden')

  // Promote the form fill comp entry
  document.getElementById('screenshot').insertAdjacentHTML('afterend', "<h2>Want a second entry to the competition?</h2><p><a href=\"https://forms.gle/45xUPCzBeRKxLuSe9\" target=\"auth0-competition-formfill\">Fill in this survey</a>, and that's exactly what you'll get!</p>")
}
