// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('.nav-list');

menuToggle.addEventListener('click', function() {
    navList.classList.toggle('menu-open');
});

// JavaScript for Morse code translator
        const morseToEnglish = {
            ".-": "A", "-...": "B", "-.-.": "C", "-..": "D", ".": "E",
            "..-.": "F", "--.": "G", "....": "H", "..": "I", ".---": "J",
            "-.-": "K", ".-..": "L", "--": "M", "-.": "N", "---": "O",
            ".--.": "P", "--.-": "Q", ".-.": "R", "...": "S", "-": "T",
            "..-": "U", "...-": "V", ".--": "W", "-..-": "X", "-.--": "Y",
            "--..": "Z", ".----": "1", "..---": "2", "...--": "3", "....-": "4",
            ".....": "5", "-....": "6", "--...": "7", "---..": "8", "----.": "9",
            "-----": "0", "--..--": ",", ".-.-.-": ".", "..--..": "?", "-..-.": "/"
        };

        const morseCodeForm = document.getElementById('morse-code-form');
        const translationResult = document.getElementById('translation-result');
        const translatedText = document.getElementById('translated-text');

        morseCodeForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const morseInput = document.getElementById('morse-input').value.trim().toUpperCase();
            const translated = translateMorseToEnglish(morseInput);
            displayTranslation(translated);
        });

        function translateMorseToEnglish(morseCode) {
            return morseCode.split(' ').map(code => morseToEnglish[code] || ' ').join('');
        }

        function displayTranslation(text) {
            translationResult.style.display = 'block';
            translationResult.style.animation = 'fadeIn 0.5s ease';
            translatedText.textContent = text;
        }

function submitForm(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form values
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let feedback = document.getElementById('feedback').value;

    // Simple validation
    if (name.trim() === '' || email.trim() === '' || feedback.trim() === '') {
        alert('Please fill in all fields');
        return;
    }

    // Simulate sending data to server (you can replace this with actual AJAX call)
    setTimeout(() => {
        // Clear form fields
        document.getElementById('feedbackForm').reset();
        // Show success message
        document.getElementById('successMessage').classList.remove('hidden');
        // Hide success message after 3 seconds
        setTimeout(() => {
            document.getElementById('successMessage').classList.add('hidden');
        }, 3000);
    }, 1000);
}

