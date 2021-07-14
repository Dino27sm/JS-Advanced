function lockedProfile() {
    let buttonElements = document.querySelectorAll('#main .profile button');
    for (let i = 0; i < buttonElements.length; i++) {
        buttonElements[i].addEventListener('click', function(){
            let radioButtonName = `user${i + 1}Locked`;
            let hiddenPartName = `user${i + 1}HiddenFields`;

            let radioButton = document.querySelector(`input[name=${radioButtonName}]:checked`);
            let hiddenPart = document.getElementById(`${hiddenPartName}`);
            if(radioButton.value === 'unlock'){
                if(buttonElements[i].textContent === 'Show more'){
                    hiddenPart.style.display = 'block';
                    buttonElements[i].textContent = 'Hide it';
                }
                else if(buttonElements[i].textContent === 'Hide it'){
                    hiddenPart.style.display = 'none';
                    buttonElements[i].textContent = 'Show more';
                }
            }
        });
    }
}