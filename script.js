
    document.addEventListener("DOMContentLoaded", function() {
        const typedText = document.querySelector(".typed-text");
        const text = "Hey! I'm Gowtham Seenivasan";
        let index = 0;

        function typeWriter() {
            if (index < text.length) {
                typedText.textContent += text.charAt(index);
                index++;
                setTimeout(typeWriter, 100); // Adjust typing speed here
            }
        }

        typeWriter();
    });




