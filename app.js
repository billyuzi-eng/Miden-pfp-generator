const upload = document.getElementById("upload");
const preview = document.getElementById("preview");
const status = document.getElementById("status");

let imageLoaded = false;

upload.addEventListener("change", function () {
  const file = upload.files[0];
  if (file) {
    preview.src = URL.createObjectURL(file);
    imageLoaded = true;
    status.innerText = "Image loaded ✔";
  }
});

function generatePFP() {
  if (!imageLoaded) {
    status.innerText = "Please upload an image first.";
    return;
  }

  status.innerText = "Applying Miden astronaut style 🚀...";
  
  setTimeout(() => {
    status.innerText = "PFP ready! Looks Miden-style ✨";
  }, 1500);
}

function downloadPFP() {
  if (!imageLoaded) {
    status.innerText = "Nothing to download yet.";
    return;
  }

  const link = document.createElement("a");
  link.href = preview.src;
  link.download = "miden-pfp.png";
  link.click();
}
