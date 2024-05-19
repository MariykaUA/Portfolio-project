
/* JAVASCRIPT:
- add transition between sections
cv, works, lets connect
*/

/* scroll to section "MY WORKS"*/
    const scrollLink = document.querySelector('.scroll');

    scrollLink.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default link behavior

        document.querySelector('.my-works').scrollIntoView({ behavior: 'smooth' });
    });

/* open CV PDF in new tab */
document.addEventListener('DOMContentLoaded', function() {
    const cvLink = document.querySelector('a[name="CV"]');

    if (cvLink) {
        cvLink.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default anchor behavior
            const pdfURL = "https://www.linkedin.com/posts/mariiahoienko1999_powercoders-cv-activity-7193263451425644544-WQlh?utm_source=share&utm_medium=member_desktop";
            window.open(pdfURL, "_blank");
        });
    }
});


/* go to "HOME"*/
    document.querySelector("a[name='home']").addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default behavior of the link
        window.location.href = "index.html"; 
    });

/* go to "About me"*/
document.querySelector("a[name='aboutme']").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default behavior of the link
    window.location.href = "about.html"; 
});


/* open Behance link in new tab */
    const behanceLink = document.querySelector(".seeMore");

    // Add an event listener to the Behance link
    behanceLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor behavior
        const behanceURL = "https://www.behance.net/6ad6275e";
        window.open(behanceURL, "_blank");
    });

/*underline effects*/
    const paragraph = document.querySelector('p');

    const textToUnderline = 'web design';
    const newTextToUnderline = 'UX/UI design';

    paragraph.innerHTML = paragraph.innerHTML.replace(new RegExp(textToUnderline, 'g'), `<span class="sketchy-underline">${textToUnderline}</span>`)
                                            .replace(new RegExp(newTextToUnderline, 'g'), `<span class="sketchy-underline">${newTextToUnderline}</span>`);

/*contact form*/
document.addEventListener('DOMContentLoaded', function() {
    const contactButtons = document.querySelectorAll('.contact-button');

    const contactFormContainer = document.querySelector('.contact-form-container');
    const backButton = document.querySelector('.back-button');
    const contactForm = document.querySelector('.contact-form');

    function showContactForm() {
        contactFormContainer.style.display = 'block';
    }

    function hideContactForm() {
        contactFormContainer.style.display = 'none';
    }

    function handleFormSubmission(event) {
        event.preventDefault(); // Prevent the default form submission behavior
        const formData = new FormData(contactForm);
        const formDataObject = {};
        formData.forEach((value, key) => {
            formDataObject[key] = value;
        });
        console.log(formDataObject);
        hideContactForm();
    }

    // Event listener for each contact button
    contactButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (contactFormContainer.style.display === 'none' || contactFormContainer.style.display === '') {
                showContactForm();
            } else {
                hideContactForm();
            }
        });
    });

    // Event listener for the back button
    backButton.addEventListener('click', function() {
        hideContactForm();
    });

    // Event listener for the form submission
    contactForm.addEventListener('submit', handleFormSubmission);

    // Contact form input effects
    const inputs = document.querySelectorAll('input[type="text"], input[type="email"], textarea');

    inputs.forEach(input => {
        input.addEventListener('change', function() {
            if (this.value.trim() !== '') {
                this.classList.add('completed');
                this.classList.remove('empty-field');
            } else {
                this.classList.remove('completed');
                this.classList.add('empty-field');
            }
            if (this.type === 'email') {
                const isValid = isValidEmail(this.value.trim());
                if (!isValid) {
                    this.classList.add('invalid');
                } else {
                    this.classList.remove('invalid');
                }
            }
        });
    });

    // Function to validate email format
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email) && email.includes('@');
    }
});

