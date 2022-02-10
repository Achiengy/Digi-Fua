const button = document.getElementById("btn")
button.addEventListener("click", (e)=> {
  e.preventDefault()
  send()
})
function send(){
let messege = document.getElementById("feedback")
details.style.display = 'none';
feedback.textContent = "MESSEGE RECEIVED.";

}