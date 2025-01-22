// parent element
const body = document.querySelector('body');

// footer element
const footer = document.createElement('footer');

// date objects
const today = new Date();
const thisYear = today.getFullYear();

// copyright variable
const copyright = document.createElement('p');
copyright.innerHTML = `&copy; Cedric Eady ${thisYear}`;

// append the footer
footer.appendChild(copyright);
body.appendChild(footer);

// skills array
const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'Python',
    'Git',
];

// skills section
const skillsSection = document.querySelector('#skills');
const skillsList = document.createElement('ul');

// loop through the skills array
for (let i = 0; i < skills.length; i++) {
    const skill = document.createElement('li');
    skill.innerHTML = skills[i];
    skillsList.appendChild(skill);
}

// append to skills section
skillsSection.appendChild(skillsList);
