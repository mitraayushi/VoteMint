
ll
const addOptionBtn = document.getElementById('add-option-btn');
if (addOptionBtn) {
    addOptionBtn.addEventListener('click', function () {
        const form = document.getElementById("create-poll-form");
        const newOptionInput = document.createElement("input");
        newOptionInput.type = "text";
        newOptionInput.name = "poll-option";
        newOptionInput.placeholder = "New Option";
        form.insertBefore(newOptionInput, addOptionBtn);
    });
}

const pollForm = document.getElementById('create-poll-form');
if (pollForm) {
    pollForm.addEventListener('submit', function (event) {
        event.preventDefault();
        alert('Poll created successfully!');
    });
}

const voteButtons = document.querySelectorAll('.vote-btn');
voteButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert('Your vote has been recorded! You earned crypto tokens.');
    });
});

var modal = document.getElementById("wallet-popup");
var walletBtn = document.getElementById("connect-wallet-btn");
var closeBtn = document.getElementsByClassName("close")[0];
var submitWalletBtn = document.getElementById("submit-wallet-btn");

walletBtn.onclick = function () {
    modal.style.display = "block";
}


closeBtn.onclick = function () {
    modal.style.display = "none";
}


window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

submitWalletBtn.onclick = function () {
    var walletAddress = document.getElementById("wallet-address").value;
    
    if (walletAddress) {
      
        walletBtn.textContent = "Connected";
        walletBtn.disabled = true;
        modal.style.display = "none"; 
        
        console.log("Wallet Address:", walletAddress);
    } else {
        alert("Please enter a valid wallet address!");
    }
}
