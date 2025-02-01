document.addEventListener('DOMContentLoaded', function() {
    const menubutton = document.querySelector("#menubutton");
    const menu = document.querySelector("#menu");

    menubutton.addEventListener("click", function() {
        menu.classList.toggle("navhide");
    });
    document.querySelectorAll(".gallery img").forEach(img => {
        img.addEventListener("click", viewHandler);
    });    

   
    function handleResize() {
        const menu = document.querySelector("#menu");
        if (window.innerWidth > 1000){
            menu.classList.remove("navhide");
        } else if (!menu.classList.contains("navhide")) {
            menu.classList.add("navhide");
            }
        }  
        handleResize();
        window.addEventListener("resize", handleResize); 
    

    function viewHandler(event) {
        const clickedImage = event.target;
        const imagePath = clickedImage.src;
        const splitPath = imagePath.split("-");
        const fullImagePath = splitPath[0] + "-full.jpeg";
        const altText = clickedImage.alt;

        document.body.insertAdjacentHTML(
            "afterbegin",
            viewerTemplate(fullImagePath, altText)
        );
        const closeButton = document.querySelector(".close-viewer");
        closeButton.addEventListener("click", closeViewer);
    }
        // create a variable to hold the element that was clicked on from event.target
    
        // get the src attribute from that element and 'split' it on the "-"
    
        // construct the new image file name by adding "-full.jpeg" to the first part of the array from the previous step
    
        // insert the viewerTemplate into the top of the body element
        // (element.insertAdjacentHTML("afterbegin", htmltoinsert))
    
        // add a listener to the close button (X) that calls a function called closeViewer when clicked
    function closeViewer() {
        const viewer = document.querySelector(".viewer");
        viewer.remove();
    }
    function viewerTemplate(pic, alt) {
        return `<div class="viewer">
            <button class="close-viewer">X</button>
            <img src="${pic}" alt="${alt}">
        </div>`;
    }
    
});