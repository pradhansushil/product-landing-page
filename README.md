# ARCYN

A fictional product landing page for a performance basketball shoe. Originally this was a FreeCodeCamp project, I decided to go further than a standard HTML and CSS landing page by including a color picker so customers can view the shoe in different colors, an animated hero slideshow, and chips for the shoe size. When the pre-order form is submitted, the information gets saved to the browser's local storage.

**Live demo:** https://pradhansushil.github.io/product-landing-page

---

## Table of Contents

- [Features](#features)
- [Site Architecture](#site-architecture)
- [Tech Stack](#tech-stack)
- [Developer Workflow & Standards](#developer-workflow--standards)
- [Challenges & Solutions](#challenges--solutions)
- [Installation](#installation)
- [License](#license)

---

## Features

### Navigation

- **Sticky Header:** Remains visible to the user when they scroll to have a better navigation on the links provided.
- **Smooth Scrolling:** Anchor links are added to enable users to smooth scroll between different parts of the web page.

### Hero

- **Animated Slideshow:** Enables the user to change the shoe image among the 3 available manually with arrow controls.
- **Color Picker:** A group of circles colored differently that allows the user to click and to see the shoe image turn into that color, only to the first picture.
- **Pre-Order CTA:** Takes the user directly to the pre-order section with smooth scrolling enabled.

### Product Overview

- **Description + Specs:** Presents the shoe's key technical features, supporting the Signature Series branding with concrete spec details.
- **Size Guide:** Provides a table to show the user the right grouped size choice based on their actual shoe size.

### Videos

- **Promotional Video:** A similar concept to a commercial showing the shoe, a product of innovation.
- **Pick-up Game Video:** Provides real context and grounds the shoe by showing how it performs on a court with athletes.

### Pre-Order

- **Offer Summary:** Information about the price of the shoe, the features it has (2 year warranty and exclusive color choices), and the pre-order deadline. Also informs the user about shipping details.
- **Size Selector:** A grouped size chip that allows the user to select the ordered size after clicking on one.
- **Color Picker:** Color circles that the user clicks to choose the order of the colors of the shoe, and then the product displays as the selected color.
- **Pre-Order Form:** An "Own The Air Now" button that reveals a form collecting the user's name and email, which is saved to local storage on submission.
- **Order Confirmation:** Turns into an order confirmation message, telling the user to keep an eye out for a payment link that will be sent to their email.

### Footer

- **Footer Navigation:** Contains placeholder links for Contact Us, About Us, and Terms.
- **Brand Identity:** Contains the brand name ARCYN, its slogan, a copyright notice, and a disclaimer clarifying the website is a portfolio project made for educational purposes.
- **Social Media Icons:** Links to Facebook, X (Twitter), Instagram, LinkedIn, and Youtube which all open in new tab.

---

## Site Architecture

The project uses a flat architecture that is designed for a simple static single-page website. The markup and styles all reside at the root level of the site as well as the asset folders; this makes the entry points easy to find. JavaScript code is grouped in a src/ folder and broken down into logical modules that each handle a piece of the interactivity. These include the hero slideshow, the color picker, size selection, pre-order code and global DOM references.

### File Structure

```text
product-landing-page/
├── images/
├── src/
│   ├── colorPicker.js
│   ├── dom-elements.js
│   ├── hero.js
│   ├── preOrder.js
│   └── setSelected.js
├── videos/
├── .gitignore
├── index.html
└── styles.css
```

---

## Tech Stack

- **HTML** — Provides the semantic structure and layout of the product landing page
- **CSS** — Used for mobile-first design to style the page across different viewports
- **JavaScript** — Added some interactivity like the color picker, shoe size chips, and hiding/making form visible in the pre-order section when the user clicks the CTA, Own The Air, which then submits to local storage.
- **Google Fonts** — Used to style the font for the header and body text.
- **Font Awesome** — Used for icons in feature highlights, trust signals, and social media links in the footer.

---

## Developer Workflow & Standards

### My Coding Approach

I used AI as a UX/design consultant and a coding mentor, so I made sure I understood everything I was writing, rather than copying it

### Code Organization & Standards

Semantic HTML with organized CSS mobile-first responsive design and separation of concerns for Javascript. I thought about separating concerns on the HTML and CSS as well but was hesitant since this is a single page project – splitting into multiple files would have made navigation more difficult.

### Version Control

I committed the related changes together and kept the unrelated changes separate.

---

## Challenges & Solutions

### Slideshow out of sync with arrow buttons

**Problem:** The slideshow was out of sync with the arrow buttons. Clicking forward or back would send the user to the wrong slide instead of the next or previous one.

**Debug:** Tracing through the code revealed that `startSlide` was defined outside of `initHero` and received `currentSlide` as a parameter. Because JavaScript passes numbers by value, `startSlide` had its own separate copy of the counter. The auto-advance timer and the arrow buttons were each tracking position independently, so they quickly fell out of step with each other.

**Fix:** Moved `startSlide` inside `initHero` so that it closes over the same `currentSlide` variable the arrow buttons use. Both now read and write the same counter, keeping the slideshow in sync regardless of how the user navigates.

### Cascading hero layout collapse

**Problem:** Fixing the color picker's z-index — it was being painted underneath the `::before` overlay — triggered a chain of layout issues that broke the entire hero section.

**Debug:** Changing the selector from `.slide img` to `.slide > img` left `#main-shoe-img` unsized, causing it to expand to 1608×768px. Adding size constraints to fix that caused slides 2 and 3 to overflow the hero section. Each fix created a new problem. The root cause turned out to be structural — `#main-shoe-img` was nested inside `.color-picker` in the HTML, meaning it wasn't actually a direct child of `.slide`. CSS alone couldn't cleanly resolve a layout problem that lived in the markup.

**Fix:** Moved `#main-shoe-img` out of `.color-picker` and made it a direct child of `.slide`. One HTML change eliminated all the layout conflicts and made every workaround rule unnecessary.

### CSS specificity hiding pre-order text

**Problem:** Setting `color: var(--white)` on `.pre-order .info` had no effect. The text stayed nearly invisible against the dark background.

**Debug:** The rule was targeting a parent element and relying on inheritance to pass the color down to the `<p>` elements inside. But a more specific rule, `section p`, was already directly targeting those same `<p>` elements. Inheritance always loses to direct targeting — it doesn't matter how specific the parent rule is.

**Fix:** Changed the selector from `.pre-order .info` to `.pre-order .info p` to target the `<p>` elements directly. That selector wins the specificity battle and the text color applied correctly.

---

## Installation

No dependencies and no build tools needed. All of it runs in your browser.

1. Clone the repository:
   `git clone https://github.com/pradhansushil/product-landing-page.git`
2. Move in to project directory:
   `cd product-landing-page`
3. Open the file named `index.html` in your browser

---

## License

All rights reserved.

No part of this code may be copied, modified, distributed, or used in any form without the express written permission of the author.
