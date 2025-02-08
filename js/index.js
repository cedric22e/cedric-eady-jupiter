// footer
    // footer DOM elements
const body = document.querySelector('body');
const footer = document.createElement('footer');
    // adding the date
const today = new Date(); // date object
const thisYear = today.getFullYear();
    // copyright notice
const copyright = document.createElement('p'); 
copyright.innerHTML = `&copy; Cedric Eady ${thisYear}`; 
    // append all elements to the page
footer.appendChild(copyright);
body.appendChild(footer); 

// skills element
    //skills array
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

// contact form
    // form element
const messageForm = document.querySelector('form[name="leave_message"]');
messageForm.addEventListener('submit', function(event) {
    event.preventDefault(); // prevent submission
    // form data
    let name = event.target.usersName.value;
    let email = event.target.usersEmail.value;
    let message = event.target.usersMessage.value;
    // log of form data
    console.log('Name:', userName);
    console.log('Email:', userEmail);
    console.log('Message:', userMessage);
    // message section
    let messageSection = document.querySelector('#messages');
    let messageList = messageSection.querySelector('ul');
    let newMessage = messageSection.createElement('li');
    newMessage.innerHTML = `<a href="mailto:${email}">${name}</a> <span>${message}</span>`;
    // button to remove message
    const removeButton = document.createElement('button');
    removeButton.innerText = 'remove';
    removeButton.setAttribute('type', 'button');
    // click event
    removeButton.addEventListener('click', function() {
        let entry = removeButton.parentNode;
        entry.remove();
    });
    // append remove button the page
    newMessage.appendChild(removeButton);
    // append new message to the page
    messageList.appendChild(newMessage);

    event.target.reset(); // clear the form
});

 
