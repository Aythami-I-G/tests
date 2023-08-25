var añadir = document.getElementById('google-link')
añadir.setAttribute('href' ,'http://www.google.com')

var elemBtn = document.getElementById('add-item-button')
elemBtn.removeAttribute('id')
elemBtn.setAttribute('type','submit')
console.log(elemBtn)

var container = document.getElementsByClassName('container')[0]
console.log(container)

var subtitle = document.createElement('h2')
subtitle.innerText = 'ehmmmmmmmm...'
//container.insertBefore(subtitle, añadir);
container.appendChild(subtitle)
console.log(subtitle)


//añadir.remove() // Elimina al hijo del padre
          /* var parent = document.querySelector('.container')
          parent.insertBefore(subtitle, añadir) */

