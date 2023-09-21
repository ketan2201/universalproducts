document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        const subject = `Contact Form Submission from ${name}`;
        const body = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;

        // Replace 'your_email@gmail.com' with your Gmail address
        const recipient = 'universalproducts81@gmail.com';

        const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        // Open the user's default email client with the pre-filled email
        window.location.href = mailtoLink;

         // Reload the page after sending the email
         setTimeout(function() {
            window.location.reload();
        }, 1000); // Reload after 1 second (adjust the delay as needed)
    });
});
