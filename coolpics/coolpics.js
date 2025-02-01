document.addEventListener('DOMContentLoaded', function() {
    const menubutton = document.querySelector("#menubutton");
    const menu = document.querySelector("#menu");

    menubutton.addEventListener("click", function() {
        menu.classList.toggle("navhide");
    });
});

function handleResize() {
    const menu = document.querySelector("#menu");
    if (window.innerWidth > 1000){
        menu.classList.remove("navhide");
    } else {
        menu.classList.add("navhide");
        }
    }    
    handleResize();
    window.addEventListener("resize", handleResize);

    function viewHandler(event) {
        // create a variable to hold the element that was clicked on from event.target
    
        // get the src attribute from that element and 'split' it on the "-"
    
        // construct the new image file name by adding "-full.jpeg" to the first part of the array from the previous step
    
        // insert the viewerTemplate into the top of the body element
        // (element.insertAdjacentHTML("afterbegin", htmltoinsert))
    
        // add a listener to the close button (X) that calls a function called closeViewer when clicked
    
    }
    function viewerTemplate(pic, alt) {
        return `<div class="viewer">
            <button class="close-viewer">X</button>
            <img src="${pic}" alt="${alt}">
        </div>`;
    }
    