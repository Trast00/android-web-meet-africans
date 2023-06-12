const form = document.getElementById('formDelete');
console.log(form);
let firstSubmit = true;
form.addEventListener('submit', (e) => {
  if (notSubmitted) {
    firstSubmit = false;
    e.preventDefault();
    const name = document.getElementById('name').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message').value;
    message.value = `name: ${name} \n password: ${password}`;
    e.submit()
  }
});
