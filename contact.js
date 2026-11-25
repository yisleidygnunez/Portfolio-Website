/* Contact Form Functionality */

document.getElementById("contactForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("contactName").value;
        const email = document.getElementById("contactEmail").value;
        const message = document.getElementById("contactMessage").value;

        const subject = encodeURIComponent(
            "Portfolio Contact from " + name
        );

        const body = encodeURIComponent(
            "Name: " + name +
            "\nEmail: " + email +
            "\n\nMessage:\n" + message
        );

        window.location.href =
            "mailto:yisleidy.gnunez@gmail.com" +
            "?subject=" + subject +
            "&body=" + body;
    });