    // --- 3D Luminous Card Hover Effect ---
    document.addEventListener("DOMContentLoaded", () => {
      const cards = document.querySelectorAll(".volunteer-card");

      cards.forEach((card) => {
        // Mouse move event to update CSS variables for rotation and glow
        card.addEventListener("mousemove", (e) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;

          // Calculate rotation values (e.g., max 8 degrees)
          const rotateX = ((y - centerY) / centerY) * -8;
          const rotateY = ((x - centerX) / centerX) * 8;

          // Update CSS Custom Properties on the card element
          card.style.setProperty("--mouseX", `${x}px`);
          card.style.setProperty("--mouseY", `${y}px`);
          card.style.setProperty("--rotateX", `${rotateX}deg`);
          card.style.setProperty("--rotateY", `${rotateY}deg`);
        });

        // Mouse leave event to reset the card's transformation and glow
        card.addEventListener("mouseleave", () => {
          // Use a timeout to allow the transition to complete smoothly
          setTimeout(() => {
            card.style.setProperty("--rotateX", "0deg");
            card.style.setProperty("--rotateY", "0deg");
          }, 100);
        });
      });
    });