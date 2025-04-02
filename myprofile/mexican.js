

let currentImageIndex = 0;
let currentTheme = 'light';


document.addEventListener('DOMContentLoaded', () => {
    initializeContent();
    initializeThemeSelector();
});

function initializeThemeSelector() {
    const themeSelector = document.getElementById('theme-selector');
    if (themeSelector) {

        themeSelector.value = currentTheme;
        changeTheme(currentTheme);

        themeSelector.addEventListener('change', (event) => {
            currentTheme = event.target.value;
            changeTheme(currentTheme);
        });
    }
}

function changeTheme(theme) {
    const root = document.documentElement;
    if (theme === 'dark') {
        root.style.setProperty('--primary-color','white');
        root.style.setProperty('--secondary-color', '#51291E');
        root.style.setProperty('--accent1-color', '#555');
        root.style.setProperty('--accent2-color', 'white');
    
} else if (theme === 'light') {
        root.style.setProperty('--primary-color','#51291E');
        root.style.setProperty('--secondary-color','#EDEEC0');
        root.style.setProperty('--accent1-color','#1C448E');
        root.style.setProperty('--accent2-color', 'white');
    }
}
function initializeContent() {
    if (document.getElementById('mexican-js-content') && typeof info !== 'undefined' && info.length > 0) {
        updateContent();
    } else if (document.getElementById('recipe-js-content') && typeof recipe !== 'undefined' && recipe.length > 0) {
        updateContent();
    } else {
        console.error('Info array is undefined or empty.');
    }
}

themeSelector.addEventListener('change', (event) => {
    changeTheme(event.target.value);
});



function mexicanTemplate() {
    const currentInfo = info[currentImageIndex];
    const description = currentInfo.description.join('<br>');
    return `
    <div class="theme-container">
        <select name="themes" id="theme-selector">
                    <option value="light">Light</option>
                    <option value="dark">Dark</option>
        </select>
    </div>
    <main>
        <div class="title">
            <h1>BIENVENIDOS!</h1>
            <p>DELICIOUSNESS JUST A FEW MINUTES AWAY: RECIPES AT THE PALM OF YOUR HAND. EASY TO MAKE AND SUPER YUMMY! </p>
        </div>
        <div class="home-img">
                <img class="main-img" src="${currentInfo.image}" alt="${currentInfo.name}" />
                <button class="left">&larr;</button>
                <button class="right">&rarr;</button>
        </div>
        <div class="home-info">
                <h2>${currentInfo.title}</h2>
                <p>${description}</p>
        </div>
    </main>
    
    `;
};

function recipeTemplate () {
    const currentRecipe = recipe[currentImageIndex];
    const description = currentRecipe.description.join('<br>');
    return `
    <div class="theme-container">
        <select name="themes" id="theme-selector">
                    <option value="light">Light</option>
                    <option value="dark">Dark</option>
        </select>
    </div>
     <main>
            <div class="title">
                <h1>AQUI ESTAN LAS RECETAS! "THESE ARE RECIPES FOR YOU"</h1>
                <p>EACH OF THEM WILL HAVE INSTRUCTION AND INGREDIENTS! MORE RECIPES AND VIDEO TUTORIALS WILL BE ADDED LATER ON!!!! </p>
            </div>
            <div class="home-img">
                <img class="main-img" src="${currentRecipe.image}" alt="${currentRecipe.name}" />
                <button class="left">&larr;</button>
                <button class="right">&rarr;</button>
            </div>
            <div class="home-info2">
                <h2>${currentRecipe.name}</h2>
                <p>${description}</p>
            </div>
        </main> 
    `;
}

function updateContent() {
    const mexicanContent = document.getElementById('mexican-js-content');
    if (mexicanContent) {
        mexicanContent.innerHTML = mexicanTemplate();
    }
    
    const recipeContent = document.getElementById('recipe-js-content');
    if (recipeContent) {
        recipeContent.innerHTML = recipeTemplate();
    }
    initializeThemeSelector();

    attachButtonListeners();
}


function attachButtonListeners() {

    const leftButtons = document.querySelectorAll('.left');
    const rightButtons = document.querySelectorAll('.right');

    leftButtons.forEach(button => {
       const newButton = button.cloneNode(true);
        button.parentNode.replaceChild(newButton, button);

        newButton.addEventListener('click', () => {
            const arrayLength = document.getElementById('mexican-js-content') ? info.length : recipe.length;
            currentImageIndex = (currentImageIndex - 1 + arrayLength) % arrayLength;
            updateContent();
            
        });
    });

    rightButtons.forEach(button => {
        const newButton = button.cloneNode(true);
        button.parentNode.replaceChild(newButton, button);

        newButton.addEventListener('click', () => {
            const arrayLength = document.getElementById('mexican-js-content') ? info.length : recipe.length;
            currentImageIndex = (currentImageIndex + 1) % arrayLength;
            updateContent();
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('mexican-js-content') && typeof info !== 'undefined' && info.length> 0) {
        updateContent();
    } else if (document.getElementById('recipe-js-content') && typeof recipe !== 'undefined' && recipe.length > 0) {
        updateContent();
    } else {
        console.error('Info array is undefined or empty.');
    }
});

