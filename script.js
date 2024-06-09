document.getElementById('designation').textContent = "Aspring Software Engineer";

const designations = ["Aspiring Software Engineer", "Aspiring Data Analyst", "Aspiring Developer", "Aspiring Machinelearning Engineer"];
let currentIndex = 0;

function changeDesignation() {
    document.getElementById('designation').textContent = designations[currentIndex];
    document.getElementById('designation').style.color = getRandomColor();
    currentIndex = (currentIndex + 1) % designations.length;
}



// Change designation every second (1000 milliseconds)
setInterval(changeDesignation, 1000);
function getRandomColor() {
    // Generate random values for red, green, and blue components
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    // Construct a CSS color string using the random values
    const color = `rgb(${r}, ${g}, ${b})`;

    return color;
}
const h3Element = document.getElementById('designation1');

// Define a function to update the color to a random color
function updateColor() {
    h3Element.style.color = getRandomColor();
}

// Call updateColor every 1000 milliseconds (1 second)
setInterval(updateColor, 1000);



    document.getElementById('download-resume').addEventListener('click', function() {
    window.open('https://drive.google.com/uc?export=download&id=1V92Y8mtEI812CfIrXwa38cs9OkT84dho', '_blank');
});

