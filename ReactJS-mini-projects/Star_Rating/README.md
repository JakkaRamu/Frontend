# Star Rating Component

This is a simple **Star Rating** component built using **React**. The component allows users to rate something by clicking on stars. It supports hover effects to provide a better user experience.

---

## Features

- **Interactive Stars**: Users can click on stars to set a rating.
- **Hover Effect**: Stars highlight when hovered over, providing visual feedback.
- **Customizable Number of Stars**: The number of stars can be customized via the `numStars` prop.
- **Dynamic Styling**: Stars change color based on the current rating or hover state.

---

## Installation

To run this project locally, follow these steps:

1. Clone the repository:

   git clone https://github.com/JakkaRamu/Star-Rating.git
   cd Star-Rating

2.Install dependencies:

  npm install

3.Start the development server:

  npm start

## Folder Structure:

src/
├── components/
│   └── StarRating.js
├── App.js
├── index.js
└── styles.css

## Dependencies

React: JavaScript library for building user interfaces.

react-icons: Provides the star icon used in the component.


## Key Components

  StarRating Component:

  Manages the state for the current rating and hover state.

  Renders a customizable number of stars using the FaStar icon from react-icons/fa.

  Updates the rating and hover state based on user interaction.

  
## Props
numStars: Number of stars to display (default is 5).


## Functions
handleOnClick(getCurId):

Updates the rating when a star is clicked.

handleMouseEnter(getCurId):

Updates the hover state when the mouse enters a star.

handleMouseLeave():

Resets the hover state to the current rating when the mouse leaves the stars.
