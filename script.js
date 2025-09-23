//We are going to make an event listener.. it will trigger when the DOM is loaded
addEventListener("DOMContentLoaded", async function () {
  const response = await this.fetch("http://localhost:3000/api/songs")
  const songs = await response.json()

  let html = ""
  for (let song of songs) {
    html +=`<li>${song.title} - ${song.artist}</li>`
  }

  this.document.querySelector("div#addedsong").innerHTML = html
})