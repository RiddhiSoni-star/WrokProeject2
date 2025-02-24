let alarm = document.querySelector("button");

 

function triggerConfetti() {
    confetti({
        particleCount: 100,  // Number of confetti pieces
        spread: 70,          // Spread angle of confetti
        origin: { x: 0.5, y: 0.5 }  // Position of origin (center of screen)
    });
}
confetti({
particleCount: 200,
spread: 90,
origin: { x: 0.5, y: 0.5 },
colors: ['#ff0000', '#00ff00', '#0000ff'],  // Custom colors
gravity: 0.5  // Controls how fast the confetti falls
});
 
