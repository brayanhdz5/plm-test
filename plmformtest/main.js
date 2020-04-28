function processForm(e) {
  if (e.preventDefault) e.preventDefault();

  console.log(e.target.value);
  /* do what you want with the form */

  // You must return false to prevent the default form behavior
  return false;
}

var form = document.getElementById('form');
if (form.attachEvent) {
  form.attachEvent("submit", processForm);
} else {
  form.addEventListener("submit", processForm);
}