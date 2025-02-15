# Random Color Generator

This is a simple **Random Color Generator** built using **React**. The application allows users to generate random colors in either **HEX** or **RGB** format. Users can switch between HEX and RGB modes and generate random colors with a single click.

---

## Features

- **HEX Color Mode**: Generates random colors in HEX format (e.g., `#1A2B3C`).
- **RGB Color Mode**: Generates random colors in RGB format (e.g., `rgb(255, 0, 128)`).
- **Dynamic Background**: The background color of the application changes to the generated color.
- **Color Format Display**: Displays the generated color in the selected format (HEX or RGB).

---

## Installation

To run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/JakkaRamu/Random-Color-Generator.git
   cd Random-Color-Generator

2.Install dependencies:
npm install

3.Start the development server:
npm start

File Structure
--------------
src/
├── components/
│   └── RandomColor.js
├── App.js
├── index.js
└── styles.css
Key Components
---------------
RandomColor Component:

Manages the state for the color type (hex or rgb) and the current color.

Contains functions to generate random HEX and RGB colors.

Dynamically updates the background color and displays the generated color value.

Functions
----------
randomGenerator(length):

Generates a random number between 0 and length - 1.

handleRandomHexColor():

Generates a random HEX color (e.g., #1A2B3C).

handleRandomRgbColor():

Generates a random RGB color (e.g., rgb(255, 0, 128)).
