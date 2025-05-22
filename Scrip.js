<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Dynamic Content and Styling</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            background-color: #f0f4f8;
            color: #333;
        }
        header, footer {
            background-color: #1e90ff;
            color: white;
            padding: 10px 20px;
            text-align: center;
            border-radius: 8px;
        }
        section {
            margin-top: 20px;
            padding: 15px;
            background-color: white;
            box-shadow: 0 0 8px rgba(0,0,0,0.1);
            border-radius: 8px;
        }
        p.text-bold {
            font-weight: bold;
        }
        button {
            margin-top: 15px;
            padding: 10px 15px;
            font-size: 16px;
            cursor: pointer;
            border: none;
            background-color: #1e90ff;
            color: white;
            border-radius: 6px;
            transition: background-color 0.3s ease;
        }
        button:hover {
            background-color: #005bb5;
        }
        #dynamic-container {
            margin-top: 20px;
            padding: 10px;
            background-color: #eaf2fe;
            border-radius: 6px;
            min-height: 40px;
        }
    </style>
</head>
<body>
    <header>
        <h1>Welcome to My Dynamic Page</h1>
    </header>

    <section>
        <p id="dynamic-text">This text will change dynamically.</p>
        <button id="toggle-button">Add Element</button>
        <div id="dynamic-container"></div>
    </section>

    <footer>
        <p>&copy; 2025 Dynamic Page Example</p>
    </footer>

    <script>
        // Change text content dynamically after page load
        const dynamicText = document.getElementById('dynamic-text');
        dynamicText.textContent = 'Here is some dynamically updated text!';

        // Modify CSS styles dynamically
        dynamicText.style.color = '#ff4500'; // OrangeRed color
        dynamicText.style.fontSize = '18px';
        dynamicText.classList.add('text-bold');

        // Add or remove an element when button is clicked
        const toggleButton = document.getElementById('toggle-button');
        const container = document.getElementById('dynamic-container');

        let elementAdded = false;

        toggleButton.addEventListener('click', () => {
            if (!elementAdded) {
                // Create a new paragraph element and add it
                const newElement = document.createElement('p');
                newElement.textContent = 'This element was added dynamically!';
                newElement.style.color = '#007700';
                newElement.style.fontWeight = '600';
                newElement.id = 'added-element';
                container.appendChild(newElement);
                toggleButton.textContent = 'Remove Element';
                elementAdded = true;
            } else {
                // Remove the element
                const addedElement = document.getElementById('added-element');
                if (addedElement) {
                    container.removeChild(addedElement);
                }
                toggleButton.textContent = 'Add Element';
                elementAdded = false;
            }
        });
    </script>
</body>
</html>

