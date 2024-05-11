let button; 
let yourName; 
let friendName;

function calculateFriendship() {
    yourName = document.querySelector("#your-name").value;
    friendName = document.querySelector("#friend-name").value;
    
  if (yourName == "Sarad" && friendName == "Aman") {
        document.querySelector("#result-msg").innerText = "We are best friend you don't need to check it😏";
    } else if (yourName == "Anshu" && friendName == "Aman") {
        document.querySelector("#result-msg").innerText = "We are best friend you don't need to check it😏";
    } else if (yourName == "Prathna" && friendName == "Aman") {
        document.querySelector("#result-msg").innerText = "You are some special for Aman❤️";
    } else if (yourName !== "" && friendName !== "") {
        let percentage = Math.floor(Math.random() * 101);
        document.querySelector("#result-msg").innerText = yourName + " and " + friendName + "'s chance of friendship is ";
        document.querySelector("#result-percentage").innerText = percentage.toString() + "%";
    } else {
        alert("Please enter both your first name and your friend's first name.");
    }
}

window.onload = function() {
    button = document.querySelector("#calculate");
    button.addEventListener("click", calculateFriendship);
};
