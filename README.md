# Hello, friends! <img src="https://raw.githubusercontent.com/MartinHeinz/MartinHeinz/master/wave.gif" width="30px">

---

My name is Daniel Eguia and I am a Frontend Developer and Designer from Málaga, Spain. This repository is a technical challenge done as part of my latest interview process.

This project was created using React, JSX, HTML and CSS. I have also used Photoshop for slider images and Illustrator to create SVG icons.

### The latest Github version is deployed on [https://eguiadaniel-golden-test.netlify.app](https://eguiadaniel-golden-test.netlify.app).

---

## Steps to run the project in your local machine

- Clone this repository to your local machine:

      git clone https://github.com/eguiadaniel/golden-race.git

- Enter the directory:

        cd golden-race

- From your code editor install all dependencies:

        npm install

- Run the code in development mode:
  npm start

- Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

---

## Process and Achievements

I have tried to approach this project so the most important items were reusable components making the app more scalable.

### Cards

- Created a generic Card component that was mapped from CardData.json.
- The component details and quantity vary depending on the object values on the data.
- If the object has a list property it would be rendered, if not it wont.
- Created nested components for the list, item, and Left and Right Icons.
- Depending on the data left or right icon gets rendered or not.
- Data drives which kind of icon is rendered: flag, dog or horse.
- The width value on the JSON is used to render a "half" or "full" card on mobile and tablet devices.

### Flag Icons

- I have created my own SVG files in Illustrator.
- For each React Component created I have included fill color as props that I could later pass per country.
- With an if else statement the specific flag is rendered per country.
- It is flexible enough that one single design can be reused just changing the fill={red} to fill={white}

### Responsiveness

- All the cards are wrapped around a Grid component and the column width they get depending on the width prop and viewport size.
- Slider and CTA font use calc function in CSS to dynamically define the font size.
- For these two elements I have created custome media queries and classes in order to gain more control depending on the viewport and device orientation.

---

Please do not hesitate to contact me if you have any questions. I would love to hear back from you.

Email: eguiadaniel@gmail.com

LinkedIn: [Daniel Eguia](https://www.linkedin.com/in/danieleguia/)
