// MOBILE-MENU NAVIGATION

const hamburger = document.querySelector('.fa-bars');
const mobileMenu = document.querySelector('.mob-menu');
const closebtn = document.querySelector('#close');
const links = document.querySelectorAll('.links');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.remove('hidden');
});

closebtn.addEventListener('click', () => {
  mobileMenu.classList.add('hidden');
});

for (let i = 0; i < links.length; i += 1) {
  links[i].addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
  });
}

//  DATA FOR THE PORTFOLIO CARDS

const data = [{
  id: 0,
  name: 'Bilal Çinarli',
  image: './images/speaker1.png',
  desc: 'Bilal is Head of Frontend Architecture for adidas and Google Developer Expert on Web Technologies. He focuses on performance, optimization and code scalability.',
  role: 'Frontend Web Developer',
},
{
  id: 1,
  name: 'Christian Liebel',
  image: './images/speaker2.png',
  desc: 'Christian Liebel is a cross-platform development enthusiast thrilled by the opportunities offered by modern web technologies.',
  role: 'cross-platform development enthusiast',
},
{
  id: 2,
  name: 'Joel Lord',
  image: './images/speaker3.png',
  desc: 'Joel Lord is passionate about the web and technology in general. He likes to learn new things, but most of all, he wants to share his discoveries.',
  role: 'Developer advocate with MongoDB',
},
{
  id: 3,
  name: 'Tamar Stern',
  image: 'images/speaker4.png',
  desc: 'She has a decade of software engineering experience in various technologies: Server side, big data, mobile, web technologies, and security.',
  role: 'Full-stack Software Developer',
},
{
  id: 4,
  name: 'Anuradha Kumari',
  image: './images/speaker5.png',
  desc: 'Anuradha is a frontend developer passionate about exploring new technologies and sharing knowledge through tech articles and talks.',
  role: 'Frontend Web Developer',
},
{
  id: 5,
  name: 'Syneva Runyan',
  image: './images/speaker6.png',
  desc: 'Syneva is an engineering manager based out of Atlanta, Georgia. She is passionate about people, processes, and JavaScript-powered projects.',
  role: 'Software engineer at MailChimp',
},
];

//  DYNAMICALLY CREATING THE FEATURED SPEAKERS CARD

const cards = document.querySelector('.speakers');
for (let i = 0; i < data.length; i += 1) {
  const speakerCard = document.createElement('div');
  speakerCard.className = 'speaker-card';
  const sdata = `
  <div>
  <img src="${data[i].image}" alt="speaker">
  </div>
  <div class="about-speakers">
     <h3>${data[i].name}</h3>
     <h4>${data[i].role}</h4>
     <p>${data[i].desc}</p>
  </div>
  </div>
  `;
  speakerCard.innerHTML = sdata;
  cards.appendChild(speakerCard);
}