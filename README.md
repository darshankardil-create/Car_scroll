
# ---> Assignment <---

Live Webpage: https://darshankardil-create.github.io/Car_scroll/

# Improvements from the Original Webpage



- **Problem:** When zooming out the screen, the car path width increased but the car’s position was not recalculated correctly, preventing it from moving forward unless the page was manually refreshed.  
  **Solution:** Attached a `resize` event listener to the `window` object and dynamically recalculated layout dimensions using `window.innerWidth`, ensuring accurate position updates and uninterrupted car movement without requiring a refresh.

- **Problem:** Opening and closing DevTools (Inspect/Console) changed viewport dimensions, causing layout inconsistencies.  
  **Solution:** Implemented responsive layout control using `min-h-screen`, proper width handling, and dynamic `innerWidth` calculations to maintain layout stability during viewport changes.

- **Problem:** When zooming out or viewing on different screen sizes, content visibility was not properly synchronized with the car’s movement, and the static fade distribution caused sections to appear at incorrect positions.  
  **Solution:** Implemented dynamic visibility logic by recalculating section positions based on the car’s updated movement and dividing the layout into four segments using `screenWidth / 4`, ensuring each section becomes fully visible only when the car reaches its corresponding point across all screen sizes and zoom levels.

- Implemented smooth opacity-based rendering of **"WELCOMEITZFIZZ"** using GSAP, synchronizing text fade transitions with the car’s forward movement for fluid, performance-optimized animations.

- Used **GSAP (GreenSock Animation Platform)** for smooth opacity transitions, improving animation fluidity and overall rendering performance.
