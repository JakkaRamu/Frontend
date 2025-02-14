# React Accordion

This is a simple **Accordion** component built using **React**. The component allows users to display content in a collapsible/expandable section. The project features two modes of interaction: **single selection** (where only one accordion item can be expanded at a time) and **multiple selection** (where users can select multiple accordion items to expand simultaneously).

## Features

- **Single Selection Mode**: Only one accordion item can be expanded at a time.
- **Multiple Selection Mode**: Multiple accordion items can be expanded at once.
- **Toggle Button**: A button to switch between single selection and multiple selection modes.
- **Dynamic Data Rendering**: The accordion dynamically renders content from an external data file.

## Installation

To use this project locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/YOUR_USERNAME/Frontend.git
    cd Frontend/ReactJS-mini-projects/Accordian
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the development server:
    ```bash
    npm start
    ```

This will open the project in your default browser. The application should be running at `http://localhost:3000`.

## File Structure

- `src/`
  - `Data.js`: Contains the data to populate the accordion questions and answers.
  - `Accordian.js`: The main accordion component with logic for single and multiple selection.
  - `App.js`: Root component where the `Accordian` component is used.

## Usage

1. **Toggle Between Modes**: 
   - Press the "Enable Multiple Selection" button to toggle between single selection and multiple selection modes.
   
2. **Accordion Interaction**: 
   - Click on an accordion item title to expand or collapse the content. In single selection mode, only one item can be expanded at a time. In multiple selection mode, you can expand multiple items simultaneously.

## Example of Data Structure

The data used in the accordion is structured as follows:

```js
const data = [
  {
    id: 1,
    question: "What is React?",
    answer: "React is a JavaScript library for building user interfaces."
  },
  {
    id: 2,
    question: "What is JSX?",
    answer: "JSX stands for JavaScript XML. It is a syntax extension for JavaScript that looks similar to XML or HTML."
  },
  // Add more items here...
];
