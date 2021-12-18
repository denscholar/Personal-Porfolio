/* eslint-disable no-unused-vars */
const menuBar = document.querySelector('.menu-bar'); // mobile menu container
const btnClose = document.querySelector('.btn-close'); // button for mobile menu
const btnMenu = document.querySelector('.btn-menu'); // button for the desktop menu
const navLink = document.querySelectorAll('#mobile-menu-bar li .nav-link');
const tog = document.getElementsByClassName('toggle');
const togg = Array.from(tog); // convert the nodelist to an array
const popupMenu = document.createElement('div'); // create an empty element
const errMessage = document.querySelector('small');
const email = document.querySelector('.email');
// const submitBtn = document.querySelector('.btn');
const element = email.parentElement;
const x = element.querySelector('small');
const form = document.querySelector('.form-input');
const [fullName, firstName, lastName, message] = form.elements;
const mediaqueryList = window.matchMedia('(max-width: 768px)');
const formData = document.querySelector('.form-input'); // gets the form element

const screenTest = (e) => {
  if (e.matches) {
    fullName.required = true;
    firstName.required = false;
    lastName.required = false;
  } else {
    fullName.removeAttribute('required');
    firstName.required = true;
    lastName.required = true;
  }
};

screenTest(mediaqueryList);

mediaqueryList.addListener(screenTest);

btnClose.addEventListener('click', () => {
  if (menuBar.style.display === 'flex') {
    menuBar.style.display = 'none';
  }
});

btnMenu.addEventListener('click', () => {
  if (menuBar.style.display === 'none') {
    menuBar.style.display = 'flex';
  } else {
    menuBar.style.display = 'none';
  }
});

navLink.forEach((link) => {
  link.addEventListener('click', () => {
    if (menuBar.style.display === 'flex') {
      menuBar.style.display = 'none';
    }
  });
});

const projects = [
  {
    projectImage: './images/calculator-project.jpg',
    projectName: 'Web Calculator Project',
    technologies: ['javaScript', 'CSS', 'HTML', 'Ruby'],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with",
    links: ['https://www.google.com/', 'https://www.google.com/'],
  },
  {
    projectImage: './images/bank-app.jpg',
    projectName: 'Mobile Banking Application',
    technologies: ['javaScript', 'HTML', 'Ruby on rails', 'CSS'],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with.",
    links: ['https://www.google.com/', 'https://www.google.com/'],
  },
  {
    projectImage: './images/Blood-Bank-Management-System-Android-Project.webp',
    projectName: 'Blood Bank Mgt app',
    technologies: ['javaScript', 'HTML', 'Ruby on rails', 'CSS'],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with.",
    links: ['https://www.google.com//', 'https://www.google.com/'],
  },
  {
    projectImage: './images/calculator-project.jpg',
    projectName: 'Web Calculator Project',
    technologies: ['javaScript', 'Css', 'Html', 'Ruby'],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with.",
    links: ['https://www.google.com/', 'https://www.google.com/'],
  },
  {
    projectImage: './images/bank-app.jpg',
    projectName: 'Mobile Banking Application',
    technologies: ['javaScript', 'HTML', 'Ruby on rails', 'CSS'],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with.",
    links: ['https://www.google.com/', 'https://www.google.com/'],
  },
  {
    projectImage: './images/Blood-Bank-Management-System-Android-Project.webp',
    projectName: 'Blood Bank Mgt app',
    technologies: ['javaScript', 'HTML', 'Ruby on rails', 'CSS'],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with.",
    links: ['https://www.google.com//', 'https://www.google.com/'],
  },
];

function callPop(index) {
  const popUp = `<section class="popup toggle" id="popup-1">
  <div class="content">
      <button type="button" class="btn-close-details">
          <img src="./images/Icon-Cancel.svg" alt="cancel icon" />
        </button>
        <div class="project-image">
          <img src="${projects[index].projectImage}" alt="a guy with a backpack in mountain" />
        </div>
        <h2 class="project-title">${projects[index].projectName}</h2>
        <ul class="proj-language-list">
          <li class="list-items">${projects[index].technologies[0]}</li>
          <li class="list-items">${projects[index].technologies[1]}</li>
          <li class="list-items">${projects[index].technologies[2]}</li>
        </ul>
        <p class="project-description">
          ${projects[index].description}
        </p>
        <div class="card-button-mobile pop-item btn-popup">
          <a href="${projects[index].links[0]}" class="btn-card-details-mobile"
            >See Live <img src="./images/see-live.svg" alt="see live icon">
          </a>
          <a href="${projects[index].links[1]}" class="btn-card-details-mobile"
            >See Source <img src="./images/git-img.svg" alt="see github icon">
          </a>
        </div>
  </div>

</section>`;
  return popUp;
}

// popup logic
// eslint-disable-next-line no-plusplus
for (let i = 0; i < togg.length; i++) {
  togg[i].addEventListener('click', () => {
    popupMenu.innerHTML = callPop(i);
    document.body.appendChild(popupMenu);
    const toggle = document.getElementById('popup-1');
    toggle.classList.toggle('active');
    const cancelIcon = document.querySelector('.btn-close-details');
    cancelIcon.addEventListener('click', () => {
      toggle.classList.toggle('active');
    });
  });
}

// Form Validation
function onSuccess() {
  errMessage.style.visibility = 'hidden';
  errMessage.innerText = '';
  element.classList.add('success');
  element.classList.remove('error');
}

function onError(input) {
  errMessage.style.visibility = 'visible';
  errMessage.innerText = input;
  element.classList.add('error');
  element.classList.remove('success');
}

const regex = new RegExp('[A-Z]');
function formValidate() {
  if (regex.test(email.value)) {
    onError('Please set the email in lower case');
  } else {
    onSuccess();
    form.submit();
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  formValidate();
});

// Local storage
