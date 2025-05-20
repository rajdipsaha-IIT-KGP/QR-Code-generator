let URL = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
let imgbox = document.querySelector(".imgbox");
let qrimg = document.getElementById("qrimage");
let qrText = document.querySelector("#text-input");

function GenerateQR() {
  qrimg.onload = () => {
    imgbox.classList.add("active"); 
  };
  qrimg.src = URL + encodeURIComponent(qrText.value.trim()); 
}

document.querySelector(".container button").addEventListener('click', () => {
  if (qrText.value.trim() === "") {
    alert("Type something!");
    return;
  }
  imgbox.classList.remove("active"); 
  GenerateQR();
});
