## Improvements from the Original Webpage

- **Problem:** When zooming out the screen, the car path width increased but the car’s position was not recalculated correctly, preventing it from moving forward unless the page was manually refreshed.
- 
  **Solution:** Attached a `resize` event listener to the `window` object and dynamically recalculated layout dimensions using it, ensuring accurate position updates and uninterrupted car movement without requiring a refresh.

- **Problem:** Opening and closing DevTools (Inspect/Console) changed viewport dimensions, causing layout inconsistencies.
-   
  **Solution:** Implemented responsive layout control using `min-h-screen`, proper width handling, and dynamic `innerWidth` calculations to maintain layout stability during viewport changes.

- **Problem:** When zooming out or viewing on different screen sizes, content visibility was not properly synchronized with the car’s movement, and the static fade distribution caused sections to appear at incorrect positions.
- 
  **Solution:** Implemented dynamic visibility logic by recalculating section positions based on the car’s updated movement and dividing the layout into four segments using `screenWidth / 4`, ensuring each section becomes fully visible only when the car reaches its corresponding point across all screen sizes and zoom levels.

- Used **GSAP (GreenSock Animation Platform)** for smooth opacity transitions, improving animation fluidity and performance.
