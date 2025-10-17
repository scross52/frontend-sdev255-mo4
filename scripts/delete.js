addEventListener("DOMContentLoaded", async () => {
  document.querySelector("#deleteBtn").addEventListener("click", deletesong)
  getAllSongs()
})

async function getAllSongs() {
  const response = await fetch("https://backend-bagv.onrender.com/api/songs")
  if(response.ok) {
    const songs = await response.json()
    let html = ""
    for (let song of songs){
      html += `<option value="${song._id}">${song.title}</option>`
    }
    document.querySelector("#songDropDown").innerHTML = html
  }
}

async function deletesong() {
  //get the song id
  const songID = document.querySelector("#songDropDown option:checked").value
  const response = await fetch("https://backend-bagv.onrender.com/api/songs/" + songID, {
    method: "DELETE"
  })
  if(response.ok) {
    alert("Song Deleted")
    getAllSongs()
  } else {
    document.querySelector("#error").innerHTML = "Cannot delete song"
  }
}