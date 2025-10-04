//We are going to make an event listener.. it will trigger when the DOM is loaded
addEventListener("DOMContentLoaded", async function () {
  const response = await this.fetch("https://backend-bagv.onrender.com/api/songs")
  const songs = await response.json()

  let html = ""
  for (let song of songs) {
    html +=`<li>${song.title} - ${song.artist}</li>`
  }

  this.document.querySelector("div#addedsong").innerHTML = html
})