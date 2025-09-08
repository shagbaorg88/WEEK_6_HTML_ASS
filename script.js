// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('change', function() {
    document.body.classList.toggle('dark-mode', this.checked);
    
    // Save user preference in localStorage
    localStorage.setItem('darkMode', this.checked);
});

// Check for saved dark mode preference
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
    darkModeToggle.checked = true;
}

// Font Size Controls
const decreaseFont = document.getElementById('decreaseFont');
const increaseFont = document.getElementById('increaseFont');
const mainArticle = document.querySelector('.main-article');

let fontSize = 1; // Default font size multiplier

decreaseFont.addEventListener('click', function() {
    if (fontSize > 0.8) {
        fontSize -= 0.1;
        mainArticle.style.fontSize = fontSize + 'rem';
        
        // Save font size preference
        localStorage.setItem('fontSize', fontSize);
    }
});

increaseFont.addEventListener('click', function() {
    if (fontSize < 1.5) {
        fontSize += 0.1;
        mainArticle.style.fontSize = fontSize + 'rem';
        
        // Save font size preference
        localStorage.setItem('fontSize', fontSize);
    }
});

// Check for saved font size preference
if (localStorage.getItem('fontSize')) {
    fontSize = parseFloat(localStorage.getItem('fontSize'));
    mainArticle.style.fontSize = fontSize + 'rem';
}

// Interactive Map
const regions = document.querySelectorAll('.region');
const regionInfo = document.getElementById('regionInfo');

regions.forEach(region => {
    region.addEventListener('click', function() {
        const info = this.getAttribute('data-info');
        regionInfo.textContent = info;
        regionInfo.style.display = 'block';
        
        // Position the info box near the clicked region
        const rect = this.getBoundingClientRect();
        regionInfo.style.top = (rect.top + window.scrollY - 100) + 'px';
        regionInfo.style.left = (rect.left + window.scrollX) + 'px';
    });
});

// Close region info when clicking elsewhere
document.addEventListener('click', function(e) {
    if (!e.target.closest('.region') && e.target !== regionInfo) {
        regionInfo.style.display = 'none';
    }
});

// Form Validation
const commentForm = document.getElementById('commentForm');
const nameError = document.getElementById('nameError');
const cultureError = document.getElementById('cultureError');
const commentError = document.getElementById('commentError');

commentForm.addEventListener('submit', function(e) {
    e.preventDefault();
    let isValid = true;
    
    // Validate name
    if (document.getElementById('name').value.trim() === '') {
        nameError.style.display = 'block';
        isValid = false;
    } else {
        nameError.style.display = 'none';
    }
    
    // Validate culture
    if (document.getElementById('culture').value === '') {
        cultureError.style.display = 'block';
        isValid = false;
    } else {
        cultureError.style.display = 'none';
    }
    
    // Validate comment
    if (document.getElementById('comment').value.trim() === '') {
        commentError.style.display = 'block';
        isValid = false;
    } else {
        commentError.style.display = 'none';
    }
    
    if (isValid) {
        alert('Thank you for sharing your perspective! Your response has been recorded.');
        commentForm.reset();
    }
});

// Additional interactive feature: Highlight sections on hover
const religionSections = document.querySelectorAll('.religion-section');
religionSections.forEach(section => {
    section.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
        this.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.1)';
        this.style.transition = 'transform 0.3s, box-shadow 0.3s';
    });
    
    section.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = 'none';
    });
});