// Typing animation
const phrases = [
    {text: "Network Engineer.", deleteUntil: 5},
    {text: "I'm a AI Enthusiast.", deleteUntil: 0},
    {text: "and also a Geek.", deleteUntil: 0}
];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 100;
const deletingSpeed = 50;
const pauseBetweenPhrases = 1000;

function typeText() {
    const typingElement = document.getElementById('typing-text');
    if (!typingElement) return;  // Exit if element doesn't exist

    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
        typingElement.textContent = currentPhrase.text.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingElement.textContent = currentPhrase.text.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentPhrase.text.length) {
        isDeleting = true;
        setTimeout(typeText, pauseBetweenPhrases);
    } else if (isDeleting && charIndex === currentPhrase.deleteUntil) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(typeText, typingSpeed);
    } else {
        setTimeout(typeText, isDeleting ? deletingSpeed : typingSpeed);
    }
}

// Hamburger menu
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// Project management
// Project management
const projects = [
  {
    "name": "CONFIGURING MY OWN HOME SERVER",
    "description": "NULL",
    "url": "https://drive.google.com/drive/folders/15cKAEq6_Mb_b7sO-bf26SguCp4saxLc8?usp=drive_link",
    "isnew": true
  },
  {
    "name": "BASIC DATACOM SIMULATION FOR ROUTER & SWITCH",
    "description": "NULL",
    "url": "https://drive.google.com/drive/folders/1-3IKt8alxLHquHUp7q304o2K58-X8Cbr",
    "isnew": true
  },
  {
    "name": "LEVERAGE TASKS WITH AI",
    "description": "NULL",
    "url": "https://drive.google.com/drive/folders/1GdOpu-EyyUGgBQ_H1LkgWEzYgVCVOkrU",
    "isnew": true
  },
  {
    "name": "AUTOMATE TASKS WITH PYTHON",
    "description": "NULL",
    "url": "https://github.com/engkufizz/AutomateTools",
    "isnew": true
  },
  {
    "name": "TRAIN GPT WITH LARGE TEXT DATA",
    "description": "NULL",
    "url": "https://drive.google.com/drive/folders/1-zV-gpjkN4yG9W8fFlP_KzHku0MAPxb8",
    "isnew": true
  },
  {
    "name": "MY SECOND BRAIN WITH AI",
    "description": "NULL",
    "url": "https://drive.google.com/drive/folders/1-3xS_8uHGA-v4xbg3UnEKxSQFok_2T4J",
    "isnew": true
  },
  {
    "name": "MY OWN GPT @ minGPT (OFFLINE)",
    "description": "NULL",
    "url": "https://drive.google.com/drive/folders/107bkkkt9UaOzhuZevulDu7BQxfU__k7n",
    "isnew": true
  },
  {
    "name": "TALK TO THE PRIVATE DOCUMENTS LOCALLY",
    "description": "NULL",
    "url": "https://drive.google.com/drive/folders/1135e1n7sbZS8oJ1AsHWgUb5U2ypqNzwa",
    "isnew": true
  },
  {
    "name": "FINE-TUNING LLM USING QLoRA (CUSTOM DATASET)",
    "description": "NULL",
    "url": "https://huggingface.co/engkufizz/falcon-7b-qlora-datacom",
    "isnew": true
  },
  {
    "name": "FINE-TUNING LLAMA 2 WITH CUSTOM DATASET",
    "description": "NULL",
    "url": "https://huggingface.co/engkufizz/llama-2-7b-datacom",
    "isnew": true
  },
  {
    "name": "CREATE a CUSTOM DATASET for SPECIFIC CASES",
    "description": "NULL",
    "url": "https://huggingface.co/datasets/engkufizz/router-switch-instruct",
    "isnew": true
  },
  {
    "name": "QUANTIZE the LLAMA to GGML",
    "description": "NULL",
    "url": "https://huggingface.co/engkufizz/llama-2-7b-datacom-ggml",
    "isnew": true
  },
  {
    "name": "ROBOT CAR BY USING ARDUINO",
    "description": "NULL",
    "url": "https://drive.google.com/drive/folders/1emkEggUszYciDVEjO2xBUvxArXo7kuNw",
    "isnew": false
  },
  {
    "name": "TICK TAC TOCK GAME USING ANDROID STUDIO",
    "description": "NULL",
    "url": "https://drive.google.com/drive/folders/10rL6u61ejn85A1U0S2SAXiuuV9eLF8YW",
    "isnew": false
  },
  {
    "name": "RASPBERRY PI & MINI KEYBOARD CONTROLLER",
    "description": "NULL",
    "url": "https://drive.google.com/drive/folders/1tfIRv6TED6S5_xXM2nNGd1MJIfA-mgKP",
    "isnew": false
  },
  {
    "name": "IOT - SMART HOME USING ESP8266",
    "description": "NULL",
    "url": "https://drive.google.com/drive/folders/11dOFFnNeyuhi5WIDgt__BWzfKAO84KV8",
    "isnew": false
  },
  {
    "name": "PYTHON SOCKET SERVER USING CLOUD",
    "description": "NULL",
    "url": "https://drive.google.com/drive/folders/1eUwO9OJ7Va7w2F4U8-JSAjeplRmaDqTb",
    "isnew": false
  },
  {
    "name": "LEARN SQL COMMANDS",
    "description": "NULL",
    "url": "https://drive.google.com/drive/folders/112dum1ImQLO0ueCSazzF2ajiBa5JDbhn",
    "isnew": false
  },
  {
    "name": "EXCEL USING FORMULA, VLOOKUP AND PIVOT TABLE",
    "description": "NULL",
    "url": "https://drive.google.com/drive/folders/1-v1FvdDOe1LZGcBlBMs8CRF5CwqbN7pr",
    "isnew": false
  },
  {
    "name": "LEARN TO SETUP SERVER USING OPENSSH",
    "description": "NULL",
    "url": "https://drive.google.com/drive/folders/1-nEKJ4YDRYgsRJr55LL7GPiWVp9UmMmv",
    "isnew": false
  },
  {
    "name": "VOICE RECOGNITION USING PYTHON",
    "description": "NULL",
    "url": "https://drive.google.com/drive/folders/1Y7jAoA4uc_nNya6UE7OLkZHtJQLYxmwa",
    "isnew": false
  },
  {
    "name": "FACE RECOGNITION USING OPENCV",
    "description": "NULL",
    "url": "https://drive.google.com/drive/folders/11J_z5UdVVu9R4eZDPRHyAu2pPS_N0LER",
    "isnew": false
  },
  {
    "name": "CREATE A WEBSITE USING CLOUD",
    "description": "NULL",
    "url": "https://drive.google.com/drive/folders/1IBG4bUWh0C3VjQS-rGWWdX8hNW9MeV80",
    "isnew": false
  },
  {
    "name": "CYBER SECURITY MATERIALS",
    "description": "NULL",
    "url": "https://drive.google.com/drive/folders/1javrGyLZLAUuB1VmVLdVwmMLeRW83Rrf",
    "isnew": false
  }
];

function renderProjects(filteredProjects) {
    const projectsContainer = document.querySelector('.projects');
    if (!projectsContainer) return;  // Exit if element doesn't exist

    projectsContainer.innerHTML = '';
    for (let project of filteredProjects) {
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('project');
        projectDiv.innerHTML = `
            <h3>${project.name}${project.isnew ? ' <span class="new-tag">NEW</span>' : ''}</h3>
            <p>${project.description}</p>
            <a href='${project.url}' target='_blank'>View Project</a>
        `;
        projectsContainer.appendChild(projectDiv);
    }
}

// Sort projects
let sortAsc = true;

function sortProjects() {
    if (sortAsc) {
        projects.sort((a, b) => a.name.localeCompare(b.name));
        document.getElementById('sort-btn').innerHTML = `<i class='fas fa-sort-alpha-down'></i>`;
    } else {
        projects.sort((a, b) => b.name.localeCompare(a.name));
        document.getElementById('sort-btn').innerHTML = `<i class='fas fa-sort-alpha-up'></i>`;
    }
    sortAsc = !sortAsc;
    renderProjects(projects);
}

// Search projects
function searchProjects(e) {
    const searchTerm = e.target.value.toLowerCase();
    const filteredProjects = projects.filter(project => project.name.toLowerCase().includes(searchTerm));
    renderProjects(filteredProjects);
}

function showSearchBox() {
    const searchBox = document.getElementById('search-box');
    if (searchBox) {
        searchBox.classList.add('show');
        searchBox.focus();
    }
}

function hideSearchBox() {
    const searchBox = document.getElementById('search-box');
    if (searchBox && !searchBox.value) {
        searchBox.classList.remove('show');
    }
}

// Loading animation
function initLoaderHome() {
    const loadingScreen = document.querySelector('.loading-screen');
    if (!loadingScreen) return;  // Exit if element doesn't exist

    var tl = gsap.timeline();

    tl.set(".loading-screen", { top: "0" });

    const firstGreeting = document.querySelector('.home-active-first');
    const greetings = document.querySelectorAll('.home-active:not(.home-active-first):not(.home-active-last)');
    const lastGreeting = document.querySelector('.home-active-last');

    gsap.set([firstGreeting, ...greetings, lastGreeting], { opacity: 0 });

    tl.to(firstGreeting, {
        opacity: 1,
        duration: 0.1
    }).to(firstGreeting, {
        opacity: 1,
        duration: 1
    }).to(firstGreeting, {
        opacity: 0,
        duration: 0.1
    });

    greetings.forEach((greeting, index) => {
        tl.to(greeting, {
            opacity: 1,
            duration: 0.1,
            onComplete: function() {
                if (index > 0) {
                    gsap.to(greetings[index - 1], { opacity: 0, duration: 0.5 });
                }
            }
        }).to(greeting, {
            opacity: 0,
            duration: 0.1,
            delay: 0.1
        });
    });

    tl.to(lastGreeting, {
        opacity: 1,
        duration: 0.1
    }).to(lastGreeting, {
        opacity: 1,
        duration: 1
    });

    tl.to(".loading-screen", {
        duration: 0.2,
        top: "-100%",
        ease: "Power4.easeInOut",
        delay: 0.1
    });
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    typeText();
    initLoaderHome();
    renderProjects(projects);

    const sortBtn = document.getElementById('sort-btn');
    const searchBtn = document.getElementById('search-btn');
    const searchBox = document.getElementById('search-box');
    const hamburgerIcon = document.querySelector('.hamburger-icon');

    if (sortBtn) sortBtn.addEventListener('click', sortProjects);
    if (searchBtn) searchBtn.addEventListener('click', showSearchBox);
    if (searchBox) {
        searchBox.addEventListener('input', searchProjects);
        searchBox.addEventListener('blur', hideSearchBox);
    }
    if (hamburgerIcon) hamburgerIcon.addEventListener('click', toggleMenu);

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const menu = document.querySelector(".menu-links");
        const hamburgerIcon = document.querySelector(".hamburger-icon");
        if (menu && hamburgerIcon && menu.classList.contains('open') && !menu.contains(event.target) && !hamburgerIcon.contains(event.target)) {
            toggleMenu();
        }
    });

    // Handle layout changes
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    handleLayoutChange(mediaQuery); // Call listener function at run time
    mediaQuery.addListener(handleLayoutChange); // Attach listener function on state changes

    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            const menu = document.querySelector(".menu-links");
            const icon = document.querySelector(".hamburger-icon");
            if (menu && icon) {
                menu.classList.remove("open");
                icon.classList.remove("open");
            }
        }
    });
});

// Function to handle layout changes
function handleLayoutChange(e) {
    const desktopNav = document.getElementById('desktop-nav');
    const hamburgerNav = document.getElementById('hamburger-nav');
    
    if (e.matches) {
        // Mobile layout
        if (desktopNav) desktopNav.style.display = 'none';
        if (hamburgerNav) hamburgerNav.style.display = 'flex';
    } else {
        // Desktop layout
        if (desktopNav) desktopNav.style.display = 'flex';
        if (hamburgerNav) hamburgerNav.style.display = 'none';
        // Ensure menu is closed when switching to desktop
        const menu = document.querySelector(".menu-links");
        const icon = document.querySelector(".hamburger-icon");
        if (menu && icon) {
            menu.classList.remove("open");
            icon.classList.remove("open");
        }
    }
}
