import React, { useEffect, useRef } from 'react';

const ParticleBackground = ({ onMouseStateChange }) => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const isPausedRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Configuration
    const config = {
      particleCount: 450, // Reduced from 12000 for performance
      colorCount: 6, // Increased to 6 for the new cyan particle
      repelForce: 3, // Reduced from 9 to prevent ejection
      forceFactor: 8,
      frictionFactor: 0.7,
      mouseForce: 60,
      mouseRadius: 200,
      particleSize: 6
    };
    
    // Mouse position
    let mouse = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
      isActive: false
    };
    
    // Particles array
    let particles = [];
    
    // Attraction matrix
    let attractionMatrix = [];
    
    // Radius matrix - defines interaction radius between different particle types
    let radiusMatrix = [];
    
    // Collision radius matrix - defines collision radius between different particle types
    let collisionRadiusMatrix = [];
    
    // Color palette - converted from JSON RGB values
    const colorPalette = [
      '#69fb18', // RGB(0.411, 0.983, 0.096) - bright green
     
      '#f0968d',  // RGB(0.681, 0.510, 0.605) - purple

      '#20e0b2', // RGB(0.127, 0.876, 0.699) - teal
      '#4249ca', // RGB(0.260, 0.284, 0.792) - blue
      '#a80f0f', // RGB(0.653, 0.182, 0.188) - dark red 
      '#00ffff'   // RGB(0.000, 1.000, 1.000) - cyan
    ];
    
    // Check if simulation section is visible
    function isSimulationVisible() {
      const simulationSection = document.querySelector('section:has(canvas)') || document.querySelector('.relative.h-\\[60vh\\]');
      if (!simulationSection) return true; // If no simulation section found, keep running
      
      const rect = simulationSection.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Check if simulation section is at least partially visible
      return rect.bottom > 0 && rect.top < windowHeight;
    }
    
    // Pause/resume animation based on scroll position
    function checkScrollAndPause() {
      const shouldBeVisible = isSimulationVisible();
      
      if (shouldBeVisible && isPausedRef.current) {
        // Resume animation
        isPausedRef.current = false;
        animate();
      } else if (!shouldBeVisible && !isPausedRef.current) {
        // Pause animation
        isPausedRef.current = true;
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
          animationRef.current = null;
        }
      }
    }
    
    // Generate attraction matrix from JSON forces
    function generateAttractionMatrix() {
      // Convert JSON force strengths to attraction matrix (normalized to reasonable values)
      // Each row represents how that species interacts with all other species
      const predefinedMatrix = [

        // Green, Red, Teal, Blue, Purple, Cyan
        // Species 0 (Green) interactions
        [ 0.50,  0.00, -0.80,  0.80,  0.00,  0.00], // Green: self-attraction, repulsion from blue, attraction to teal
        
        // Species 1 (Red) interactions - exactly like green
        [ 0.00,  0.50,  0.00,  0.00, 0.80,  -0.80], // Red: self-attraction, repulsion from purple, attraction to cyan
        
        // Species 2 (Teal) interactions
        [ 0.70,  0.00,  0.80,  0.40,  0.00,  0.00], // Teal: attraction to green and blue, self-attraction
        
        // Species 3 (Blue) interactions
        [ 0.90,  0.00, -0.90, -0.60,  0.00,  0.00], // Blue: attraction to green, repulsion from teal, self-repulsion
        
        // Species 4 (Purple) interactions - exactly like blue
        [ 0.00,  0.90,  0.00,  0.00, -0.60, -0.90], // Purple: attraction to red, repulsion from cyan, self-repulsion
        
        // Species 5 (Cyan) interactions - exactly like teal
        [ 0.00,  0.70,  0.00,  0.00,  0.40,  0.80]  // Cyan: exactly like teal but with red/purple instead of green/blue
      ];
      
      attractionMatrix = predefinedMatrix;
    }
    
    // Generate radius matrix from JSON radius values
    function generateRadiusMatrix() {
      // Scale factor to adjust interaction radius size
      const radiusScale = 5; // Increase for larger interaction areas, decrease for smaller
      
      // Convert JSON radius values (scaled for canvas)
      const radiusMatrix = [
        // Green, Red, Teal, Blue, Purple, Cyan
        [19.1 * radiusScale, 0 * radiusScale, 16.0 * radiusScale, 21.6 * radiusScale,  0 * radiusScale, 0 * radiusScale], // Species 0 radii (green)
        [0 * radiusScale, 19.1 * radiusScale, 0 * radiusScale,  0 * radiusScale,  21.6 * radiusScale, 16.0 * radiusScale], // Species 1 radii (red)

        [20.1 * radiusScale, 0 * radiusScale, 14.9 * radiusScale, 30.6 * radiusScale, 0 * radiusScale, 0 * radiusScale], // Species 2 radii (teal)
        // Species 2 radii (teal)
        [29.8 * radiusScale, 0 * radiusScale, 28.8 * radiusScale,  3.9 * radiusScale, 0 * radiusScale, 0* radiusScale], // Species 3 radii (blue)
        [0 * radiusScale, 29.8 * radiusScale, 0 * radiusScale,  0 * radiusScale, 3.9 * radiusScale, 28.8 * radiusScale], // Species 4 radii (purple)

        [0 * radiusScale, 20.1 * radiusScale, 0 * radiusScale, 0 * radiusScale, 30.6 * radiusScale, 14.9 * radiusScale]  // Species 5 radii (cyan)
      ];
      
      return radiusMatrix;
    }
    
    // Generate collision radius matrix from JSON collision radius values
    function generateCollisionRadiusMatrix() {
      // Scale factor to adjust collision radius size
      const collisionScale = 5; // Reduced from 2.5 to prevent ejection
      
      // Convert JSON collision radius values (scaled for canvas)
      const collisionRadiusMatrix = [
        [ 8.0 * collisionScale,  5.2 * collisionScale,  2.6 * collisionScale,  9.6 * collisionScale,  3.6 * collisionScale,  8.0 * collisionScale], // Species 0 collision radii
        [ 5.6 * collisionScale,  8.0 * collisionScale,  6.8 * collisionScale,  2.1 * collisionScale,  9.6 * collisionScale,  2.6 * collisionScale], // Species 1 collision radii

        [ 8.1 * collisionScale,  0.5 * collisionScale,  5.4 * collisionScale,  4.2 * collisionScale,  4.3 * collisionScale,  8.1 * collisionScale], // Species 2 collision radii

        [ 1.0 * collisionScale,  1.2 * collisionScale,  3.8 * collisionScale,  1.1 * collisionScale,  8.8 * collisionScale,  1.0 * collisionScale], // Species 3 collision radii
        [ 3.8 * collisionScale,  1.0 * collisionScale,  8.6 * collisionScale,  3.6 * collisionScale,  1.1 * collisionScale,  3.8 * collisionScale], // Species 4 collision radii

        [ 8.1 * collisionScale,  8.1 * collisionScale,  5.4 * collisionScale,  4.2 * collisionScale,  4.2 * collisionScale,  5.4 * collisionScale]  // Species 5 collision radii (same as teal)
      ];
      
      return collisionRadiusMatrix;
    }
    
    // Particle class
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = 0;
        this.vy = 0;
        this.colorIndex = Math.floor(Math.random() * config.colorCount);
        this.color = colorPalette[this.colorIndex];
        
        // Define which colors should cycle and which should be solid
        this.shouldCycle = this.colorIndex === 1 || this.colorIndex === 0; // Red (1) and Green (0) cycle
        this.isSolid = this.colorIndex === 2 || this.colorIndex === 5; // Teal (2) and Cyan (5) are solid
        
        if (this.shouldCycle) {
          // Red cycles with Purple (4), Green cycles with Blue (3)
          this.targetColor = this.colorIndex === 1 ? colorPalette[4] : colorPalette[3];
          this.colorTime = Math.random() * Math.PI * 2; // Random start time for variety
        }
        
        this.size = config.particleSize * (0.8 + Math.random() * 0.4);
        this.opacity = 0.8 + Math.random() * 0.2;
      }
      
      // Color interpolation helper
      interpolateColor(color1, color2, t) {
        // Convert hex to RGB
        const r1 = parseInt(color1.slice(1, 3), 16);
        const g1 = parseInt(color1.slice(3, 5), 16);
        const b1 = parseInt(color1.slice(5, 7), 16);
        
        const r2 = parseInt(color2.slice(1, 3), 16);
        const g2 = parseInt(color2.slice(3, 5), 16);
        const b2 = parseInt(color2.slice(5, 7), 16);
        
        // Interpolate
        const r = Math.round(r1 + (r2 - r1) * t);
        const g = Math.round(g1 + (g2 - g1) * t);
        const b = Math.round(b1 + (b2 - b1) * t);
        
        // Convert back to hex
        return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
      }
      
      update() {
        this.vx *= config.frictionFactor;
        this.vy *= config.frictionFactor;
        
        this.x += this.vx;
        this.y += this.vy;
        
        // Update color cycling
        if (this.shouldCycle) {
          this.colorTime += 0.01;
          const t = (Math.sin(this.colorTime) + 1) / 2; // Smooth oscillation between 0 and 1
          this.currentColor = this.interpolateColor(this.color, this.targetColor, t);
        }
        
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;
      }
      
      applyForces(particles) {
        for (let other of particles) {
          if (this === other) continue;
          
          let dx = other.x - this.x;
          let dy = other.y - this.y;
          
          if (dx > canvas.width / 2) dx -= canvas.width;
          if (dx < -canvas.width / 2) dx += canvas.width;
          if (dy > canvas.height / 2) dy -= canvas.height;
          if (dy < -canvas.height / 2) dy += canvas.height;
          
          const distSq = dx * dx + dy * dy;
          const dist = Math.sqrt(distSq);
          
          // Get radius and collision radius for this particle type combination
          const interactionRadius = radiusMatrix[this.colorIndex][other.colorIndex];
          const collisionRadius = collisionRadiusMatrix[this.colorIndex][other.colorIndex];
          
          if (dist > 0 && dist < interactionRadius) {
            const attraction = attractionMatrix[this.colorIndex][other.colorIndex] * config.forceFactor;
            let force = attraction / dist;
            
            // Apply collision force if particles are too close
            if (dist < collisionRadius) {
              force = -config.repelForce / dist;
            }
            
            this.vx += dx / dist * force;
            this.vy += dy / dist * force;
          }
        }
      }
      
      applyMouseForce() {
        if (!mouse.isActive) return;
        
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        
        if (dx > canvas.width / 2) dx -= canvas.width;
        if (dx < -canvas.width / 2) dx += canvas.width;
        if (dy > canvas.height / 2) dy -= canvas.height;
        if (dy < -canvas.height / 2) dy += canvas.height;
        
        const distSq = dx * dx + dy * dy;
        const dist = Math.sqrt(distSq);
        
        if (dist > 0 && dist < config.mouseRadius) {
          let force = config.mouseForce / dist;
          this.vx += dx / dist * force;
          this.vy += dy / dist * force;
        }
      }
      
      draw() {
        // Draw the solid core only (no glow)
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        
        // Use interpolated color for cycling particles, original color for solid particles
        const drawColor = this.shouldCycle ? this.currentColor : this.color;
        ctx.fillStyle = drawColor + Math.floor(this.opacity * 255).toString(16).padStart(2, '0');
        ctx.fill();
      }
    }
    
    // Initialize particles
    function initParticles() {
      particles = [];
      for (let i = 0; i < config.particleCount; i++) {
        particles.push(new Particle());
      }
    }
    
    // Animation loop
    function animate() {
      // Don't animate if paused
      if (isPausedRef.current) return;
      
      // Clear canvas and draw gradient background
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw the animated gradient background
      ctx.fillStyle = '#001717'; //#305436 with 20% opacity (33 in hex = 20%) //black
      
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Add slight trail effect
      ctx.fillStyle = 'rgba(255, 255, 255, 0.02)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Update gradient time
      // gradientTime += 16; // Approximately 60fps
      
      for (let particle of particles) {
        particle.applyForces(particles);
        particle.applyMouseForce();
        particle.update();
        particle.draw();
      }
      
      animationRef.current = requestAnimationFrame(animate);
    }
    
    // Resize canvas
    function resizeCanvas() {
      const isMobile = window.innerWidth < 768; // md breakpoint
      const containerWidth = window.innerWidth;
      
      // Find the simulation section to get its actual height
      const simulationSection = document.querySelector('section:has(canvas)') || document.querySelector('.relative.h-\\[60vh\\]');
      const containerHeight = simulationSection ? simulationSection.offsetHeight : window.innerHeight * 0.6;
      
      let width, height;
      
      if (isMobile) {
        // On mobile, make canvas full width and height of simulation section
        width = containerWidth;
        height = containerHeight;
      } else {
        // On desktop, use full screen width and height of simulation section
        width = containerWidth;
        height = containerHeight;
      }
      
      canvas.width = width;
      canvas.height = height;
      
      // Position canvas
      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';
      
      if (isMobile) {
        // On mobile, position to cover the simulation section
        canvas.style.top = '0px';
        canvas.style.bottom = 'auto';
        canvas.style.left = '0px';
        canvas.style.right = 'auto';
      } else {
        // On desktop, position to cover full section
        canvas.style.top = '0px';
        canvas.style.right = '0px';
        canvas.style.left = '0px';
        canvas.style.bottom = 'auto';
      }
    }
    
    // Event handlers
    const handleMouseMove = (e) => {
      // Get canvas position and bounds
      const canvasRect = canvas.getBoundingClientRect();
      
      // Check if mouse is within canvas bounds
      if (e.clientX >= canvasRect.left && e.clientX <= canvasRect.right &&
          e.clientY >= canvasRect.top && e.clientY <= canvasRect.bottom) {
        // Convert screen coordinates to canvas coordinates
        mouse.x = e.clientX - canvasRect.left;
        mouse.y = e.clientY - canvasRect.top;
        mouse.isActive = true;
        
        // Notify parent component that mouse is over simulation
        if (onMouseStateChange) {
          onMouseStateChange(true);
        }
      } else {
        mouse.isActive = false;
        
        // Notify parent component that mouse is not over simulation
        if (onMouseStateChange) {
          onMouseStateChange(false);
        }
      }
    };
    
    const handleMouseLeave = () => {
      mouse.isActive = false;
      
      // Notify parent component that mouse left simulation
      if (onMouseStateChange) {
        onMouseStateChange(false);
      }
    };
    
    const handleResize = () => {
      resizeCanvas();
      initParticles();
    };
    
    const handleScroll = () => {
      checkScrollAndPause();
    };
    
    // Initialize
    resizeCanvas();
    generateAttractionMatrix();
    radiusMatrix = generateRadiusMatrix();
    collisionRadiusMatrix = generateCollisionRadiusMatrix();
    initParticles();
    animate();
    
    // Add event listeners
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute pointer-events-none"
      style={{ zIndex: -1 }}
    />
  );
};

export default ParticleBackground; 