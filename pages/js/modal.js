const modal = document.querySelector("#myModal");
const span = document.querySelectorAll(".close")[0];

span.onclick = function () {
  modal.style.display = "none";
  document.body.style.overflow = 'visible';
};

window.onclick = function (event) {
  if (event.target == modal) {
    document.body.style.overflow = 'visible';
    modal.style.display = "none";
  }
};

function drawModal(data) {
  let image = document.querySelector('#modal__pet');
  let name = document.querySelector('#modal__pet__name');
  let type = document.querySelector('#pet__type');
  let breed = document.querySelector('#pet__breed');
  let description = document.querySelector('#pet__description');
  let age = document.querySelector('#modal__age');
  let inoculations = document.querySelector('#modal__inoculations');
  let diseases = document.querySelector('#modal__diseases');
  let parasites = document.querySelector('#modal__parasites');

  name.innerHTML = data.name;
  type.innerHTML = data.type;
  breed.innerHTML = data.breed;
  image.src = data.img;
  description.innerHTML = data.description;
  age.innerHTML = data.age;
  inoculations = data.inoculations;
  diseases = data.diseases;
  parasites = data.parasites;
}