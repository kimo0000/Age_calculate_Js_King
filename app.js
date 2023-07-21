const form = document.querySelector('form');
const inputAge = form.querySelector('#date');
const result = document.querySelector('.result');

form.addEventListener('submit', (e) => {
     e.preventDefault();

     console.log(inputAge.value)
     const date = new Date();
     const birthday = new Date(inputAge.value)
     console.log(date.getFullYear());
     console.log(birthday.getFullYear());

     const age = date.getFullYear() - birthday.getFullYear();
     console.log(age);
     
     result.innerHTML = `Your Age Is <span id="age">${age}</span> Year !`;
})