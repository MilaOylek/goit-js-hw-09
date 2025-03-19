const form = document.querySelector('.feedback-form');
let formData = JSON.parse(localStorage.getItem('feedback-form-state')) || {
  email: '',
  message: '',
};

form.addEventListener('input', (event) => {
  formData[event.target.name] = event.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    return alert('Будь ласка, заповніть всі поля');
  }

  console.log(formData);
  localStorage.removeItem('feedback-form-state');
  formData = { email: '', message: '' };
  form.reset();
});

window.addEventListener('load', () => {
  if (formData) {
    form.elements.email.value = formData.email;
    form.elements.message.value = formData.message;
  }
});