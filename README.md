
# Waypoint – Community Resource Directory

## 1. Project Overview

Waypoint is a responsive community resource directory designed to help local residents discover community support services in one place.

The website aims to make it easier for people to find information about education, health, employment, housing and youth support services without having to search through multiple sources.

This project is being developed as part of the Ishvexa Hub Web Development Internship (2026).

## 2. Project Objectives

The main objectives of Waypoint are to:

- Make community support services easier to discover.
- Organise resources into clear categories.
- Allow users to search and filter available resources.
- Present useful information about each resource.
- Provide a simple and accessible browsing experience across different screen sizes.

## 3. Intended Users

The website is intended for:

- Local residents looking for community support.
- Young people seeking educational and employment opportunities.
- Newcomers looking for information about local services.
- Individuals looking for health, housing and youth support resources.

## 4. Website Pages

The project consists of three connected pages.

### Home (index.html)
The homepage introduces Waypoint and provides:

- An introduction to the directory.
- A search section.
- Browse by category section.
- Featured community resources.
- An overview of how the directory works.
- Navigation to the other website pages.

### Resources (resource.html)
The Resources page allows users to:

- Browse available community resources.
- Search resources using keywords.
- Filter resources by category.
- View additional information through resource profile pop-ups.

### About (about.html)
The About page explains:

- What Waypoint is.
- The purpose of the project.
- The community needs it aims to address.
- The categories of support covered by the directory.

## 5. Main Features

The website includes the following features:

- Three connected website pages.
- Consistent navigation across all pages.
- Active-page navigation indicator.
- Responsive layouts for mobile, tablet and desktop.
- Mobile navigation menu.
- Search and category filtering.
- Interactive resource cards.
- Resource profile pop-ups with a Close button.
- Shared styling and reusable CSS design tokens.
- Keyboard focus indicators.
- Reduced-motion support.

## 6. Design System

Waypoint uses a shared design system to maintain consistency throughout the website.

### Colour palette

| Colour | Hex code | Purpose |
|---|---|---|
| Teal 700 | #0F766E | Primary buttons and accents |
| Teal 900 | #0B4F49 | Dark teal text and selected elements |
| Teal 100 | #D9F0EC | Light teal backgrounds |
| Ink | #1F2937 | Main text and headings |
| Slate | #4B5563 | Secondary text |
| Gray 500 | #6B7280 | Strong borders |
| Gray 400 | #9CA3AF | Borders and dividers |
| Gray 100 | #F1F3F5 | Section backgrounds |
| White | #FFFFFF | Main page and card backgrounds |

### Typography

- Typeface: Inter
- Regular: 400
- Semibold: 600
- Bold: 700

### Design tokens

Shared CSS variables are used for:

- Colours
- Typography
- Spacing
- Border radii
- Shadows
- Focus styles
- Transitions

These tokens help maintain a consistent visual identity across all three pages.

## 7. Responsive Design

The website uses flexible layouts and CSS media queries to adapt to different screen sizes.

The following representative widths are used for testing:

| Screen size | Width | Target |
|---|---:|---|
| Mobile | 360px | Small mobile devices |
| Tablet | 768px | Tablet devices |
| Desktop | 1440px | Desktop screens |

The responsive design aims to maintain readable text, usable navigation, appropriately sized cards and prevent horizontal overflow.

## 8. Accessibility Considerations

Accessibility has been considered throughout the development process.

The website includes:

- Semantic HTML elements.
- Descriptive page titles.
- Labelled form controls.
- Visible keyboard focus styles.
- Accessible navigation labels.
- Mobile menu expanded-state information.
- Keyboard-accessible interactive elements.
- Reduced-motion preferences.

Accessibility and keyboard behaviour are checked during testing and refinements.

## 9. Technologies Used

The project uses:

- HTML5 – Website structure and semantic content.
- CSS3 – Styling, responsive layouts and design tokens.
- JavaScript – Search, filtering, navigation interactions and resource profile pop-ups.
- Visual Studio Code – Code editor.
- Google Chrome – Browser testing.
- Git and GitHub – Version control and project repository.
- Live Server – Local development and browser preview.

## 10. Project Structure

The current project structure is organised as follows:

community-resource-directory/
│
├── index.html
├── resource.html
├── about.html
│
├── styles.css
├── script.js
│
├── README.md
│
└── screenshots/
    ├── waypoint-mobile-360.png
    ├── waypoint-tablet-768.png
    └── waypoint-desktop-1440.png

Note: The screenshots folder is used to store responsive testing evidence. Add it to the project when the screenshots are ready.

## 11. How to Run the Project

Waypoint is a static website and does not require a backend server or database.

To run the project locally:

1. Download or clone the project repository.
2. Open the project folder in Visual Studio Code.
3. Open the index.html file.
4. Right-click inside the editor.
5. Select Open with Live Server.
6. The website will open in your default browser.

The website can then be accessed through the local development server.

## 12. Testing and Quality Checks

The website is checked at the following screen widths:

- 360px – Mobile
- 768px – Tablet
- 1440px – Desktop

Testing also covers:

- Navigation between all three pages.
- Active-page indicators.
- Mobile menu interactions.
- Keyboard navigation.
- Search and category filtering.
- Resource profile pop-ups.
- Visible focus indicators.
- Readability and text contrast.
- Horizontal overflow.

Testing results, identified issues and revisions are documented separately in the project's testing records.

## 13. Data and Disclaimer

All resource names, service descriptions, locations and contact details used in this project are fictional examples created for demonstration purposes.

Waypoint is an educational project prototype and does not provide actual community services.

The information displayed should not be treated as verified information about real organisations.

## 14. Project Status

### Week 1 – Project Planning and Initial Development
- Selected the Community Resource Directory project.
- Identified the intended users and their needs.
- Planned the three website pages.
- Created the initial sitemap and wireframes.
- Developed the first semantic HTML homepage.
- Established the initial project structure.

### Week 2 – Responsive Page Development
- Developing the Home, Resources and About pages.
- Connecting the pages through consistent navigation.
- Establishing shared CSS design tokens.
- Implementing responsive layouts.
- Refining the mobile navigation.
- Testing different screen sizes and keyboard interactions.
- Recording issues and documenting improvements.

### Upcoming Development

The next stages of development will focus on:

- Completing and refining the search and filtering workflow.
- Improving resource data handling.
- Testing different data states.
- Conducting further accessibility and usability checks.
- Gathering feedback and refining the website.

## 15. Acknowledgements and AI Assistance

This project was developed as part of the Ishvexa Hub Web Development Internship.

AI tools, including ChatGPT and Claude AI, were used as development assistants to support design exploration, code suggestions, debugging and documentation.

The project requirements, design decisions, implementation review and testing are carried out by the intern.

All AI-assisted code is reviewed and adapted as part of the learning and development process.
