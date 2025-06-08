# Roofing Company Website

## Overview
This is a Vue.js website for a roofing company, designed to showcase services, provide a contact form, and display an image gallery. The website is structured to be user-friendly and informative, allowing potential customers to learn about the company and get in touch easily.

## Features
- **Home Page**: An introduction to the roofing company with key highlights.
- **About Us Section**: Information about the company's history, mission, and values.
- **Services Section**: Detailed descriptions of the roofing services offered.
- **Gallery**: An image gallery showcasing completed roofing projects.
- **Contact Form**: A form for users to reach out for inquiries or quotes.

## Project Structure
```
roofing-company-website
├── public
│   ├── favicon.ico
│   └── index.html
├── src
│   ├── assets
│   │   ├── css
│   │   │   └── main.css
│   │   └── js
│   │       └── helpers.js
│   ├── components
│   │   ├── AboutSection.vue
│   │   ├── ContactForm.vue
│   │   ├── Footer.vue
│   │   ├── Gallery.vue
│   │   ├── Header.vue
│   │   └── ServicesSection.vue
│   ├── router
│   │   └── index.js
│   ├── views
│   │   ├── AboutView.vue
│   │   ├── ContactView.vue
│   │   ├── GalleryView.vue
│   │   ├── HomeView.vue
│   │   └── ServicesView.vue
│   ├── App.vue
│   └── main.js
├── .gitignore
├── package.json
├── vue.config.js
└── README.md
```

## Installation
1. Clone the repository:
   ```
   git clone https://github.com/yourusername/roofing-company-website.git
   ```
2. Navigate to the project directory:
   ```
   cd roofing-company-website
   ```
3. Install dependencies:
   ```
   npm install
   ```

## Running the Project
To run the project locally, use:
```
npm run serve
```
This will start a local development server. Open your browser and navigate to `http://localhost:8080` to view the website.

## Deployment
To deploy the website on GitHub Pages, follow these steps:
1. Build the project:
   ```
   npm run build
   ```
2. Deploy the `dist` folder to GitHub Pages.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgments
- Vue.js for the framework.
- GitHub Pages for hosting the website.