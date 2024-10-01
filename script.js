 // JavaScript code to dynamically generate the boxes and text

        // Select the main div element
        const mainDiv = document.getElementById('main-div');

        // Create an array to store the initial text
        const initialText = ['First', 'Second', 'Third', 'Fourth'];

        // Loop to create 4 boxes
        for (let i = 0; i < 4; i++) {
            // Create a new div element for each box
            const box = document.createElement('div');
            
            // Add the class 'box' to each div
            box.classList.add('box');
            
            // Set the initial text for each box
            box.innerHTML = initialText[i];
            
            // Append the box to the main div
            mainDiv.appendChild(box);
        }

        // Function to update the text of all boxes dynamically
        function updateBoxText() {
            const boxes = document.querySelectorAll('.box');
            
            // Loop through each box and update the text dynamically
            boxes.forEach((box, index) => {
                box.innerHTML = `Box No. ${index + 1}`;
            });
        }

        // Automatically call the function to update the text
        updateBoxText();
