const buttonContainer = document.querySelector('.buttonContainer');
const submit = document.querySelector('#buttonSubmit');

const messageContainer = document.querySelector('.messageContainer');
const ok = document.querySelector("#ok");
submit.addEventListener("click", () => {
  buttonContainer.style.display = "none";
  messageContainer.style.display = "block";
});

ok.addEventListener("click", () => {
  buttonContainer.style.display = 'block';
  messageContainer.style.display = 'none';
})
