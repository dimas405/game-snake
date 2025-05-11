// Game configuration with retro arcade settings
const config = {
    gridSize: 20, // Size of each cell in pixels
    initialSpeed: 150, // Initial speed of the snake (ms)
    speedIncrease: 2, // How much to increase speed per food item
    maxSpeed: 50, // Maximum speed (minimum ms delay)
    colors: {
        snakeHead: '#39ff14', // Neon green for snake head
        snakeBody1: '#32cd32', // Lighter green for even segments
        snakeBody2: '#228b22', // Darker green for odd segments
        food: '#ff00ff',      // Neon magenta for food
        grid: 'rgba(57, 255, 20, 0.3)', // Semi-transparent green for grid
        background: '#000000', // Black background
        text: '#ffffff'       // White text
    },
    sounds: {
        eat: new Audio('data:audio/wav;base64,UklGRiQDAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQADAABBvYE+P73BPsG7wT7Fvr0+vr/EPsm+wT7Dvs0+w77FPr0yyD7YPMU+yT/LPtIyuT7JPsA+wD7MPsU8wT7Fvs0+xb3BPs0+wD7FPsA+yT7EPtE+yz7Fvs0+yT6yPsG+zT7Jvr0+wj7APsm+vT7Bvr0+wb69Pr++xT7JvuE+yTzEPsW+zT7MPsA+xb7NPsk+wD7BPMk+1T7APsm+zT7RPsg+xT7APsm+4T7FPsA+yT7EPtU+wj7FPsk+0T7FvsU+xT7MPsk+wD7Fvs0+zD7APsF3wT7Jvs0+vj7EPsW+wT7JvsU+vj7APsE+wj7EPsA+xT7EPsU+yz7NPsU+3j7APsE8yT7Jvs0+wzLMPsE+wT7JvuE+wT7APsE+xT7NPsA+xD7FPsA+yT7EPsG+zT7Jvs0+xT7FvsU+yD7FPsA+xT7JvsU+wTrJPsU+wD7Bvs0+yT7MvsU+xb7NPse+vT7CvuE+vj7APsm+vT7Bvr0+vr/EPsm+vT7Cvs0+wzLIPs0+xT7Fvs0+yT6yPsG+zT7Jvr0+xL7EPsU+zz7BPsA+yb7NPtU+wD7JPs0+0T7IPsU+wD7JvuE+2XvBPsU+zD7NPsU+xT7APsm+zT7Jvs0+xb7FPsW+xT7Evs0+wT7FPsQ+xT7FPtE+yD7Dvs0+yb7NPsW+zT7Evs0+wDzFPsm+zT7VPsA+xT7JvtE+yD7FPsA+yb7hPsV7wT7JPsw+zT7FPsU+wD7Jvs0+yb7NPsW+xT7FvsU+xL7NPsE+xT7EPsU+xT7RPsg+w77NPsm+zT7Fvs0+xL7NvsA8xT7Jvs0+1T7APsU+yb7RPsg+xT7APsm+4T7Fe8E+yT7MPtU+xj7APsU+yb7RPsg+xT7APsm+4T7Fe8E+yT7IPsU+wD7JvuE+xXvBPsk+zD7VPsY+wD7F'),
        gameOver: new Audio('data:audio/wav;base64,UklGRhwMAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQAMAABN/v//Tf///03///9N////Tf///03///9NAAEATP///0z///9MTQUBRwALA0QL/wFL+f8ASPn//0j8//9I////R////0f///9G////Rv///0X///9F////Rf///0X///9F////RgAAAEYAAABHAAAARwAAAEcAAABIAAAASAAAAEgAAABJAAAASQAAAEoAAABLAgAATQYAAE8LAABRDwABUxUBAVcbAQFbIgEBYCoCAWQ0AgFpPwIBcEsCAXhXAwF+YwMBhW8EAY1+BAGViwUBnZcFAaaiBgGwrQYBurnGAc3FA/4Y0bgA+NTEAPzWxQD+18YA/9jGAP/YxgD/2MYA/tjGAP7YxgD+2MYA/tjGAP7YxgD+18YA/tfGAP7XxgD+18YA/tfGAP7XxgD+18YA/tfGAP7YxgAA2ccAAdnIAALZyQAG2csACdrNAA3bzwASIHQAGch8ACMgUAAtIDIANeAIAD5g5gBFIKcATmBwAFWgOQBbIO4AYCDEAGPgqABmYIwAZuBwAGZgVQBk4DoAYeAgAF1gBgBZIHgAVGBhAE9ASwBJYDUAQqAgAD1gCwA3IOh/MWDRfyxAun8nYKR/ImCPfx5ge38aYGl/FmBXfxJgRn8OYDb/C2Am/whgF/8FYAX/AWD1/v5f5f77X9b++V/H/vdf9f70X+X+8l/W/vBfx/7uX7n+7F+q/upfnP7oX47+5l+A/uRfc/7iX13i4F9O/t5fQP7cXzL+2l8j/theJf7WXxf+1F8K/tJf/f3QX/X9zl/o/cxf2/3KX87+yF/C/sZftf7EX6n+wl+d/sBfkf6+X4X+vF95/rpfc/64X2f+tl9S/rRfRP6yXzn+sF8t/q5fIv6sXxb+ql8K/qhf/v2mX/L9pF/m/aJf2v2gX8/9nl/E/Zxfuf2aX67+mF+j/pZfmP6UX43+kl+D/pBfef6OX3D+jF9m/opfXf6IX1T+hl9L/oRfQv6CXzr+gF8x/n5fKP58Xx/+el8X/nhfD/52Xz8APF8uAEpfHQBYXwwAZl77/3Ne6/+AXtr/jF7K/5he6QCkXtgAsF7IALxeuADIXqgA1F6YAN9eiADrXngA9l5oAQFfWAEMX0gBF18/ASJfLwEsXwv/NV/7/j9f6/5IX9v+UV/L/lpfu/5jX6v+bF+b/nVfi/5+X3v+hl9r/o9fW/6XX0v+nl87/qZfK/6uXxv+tV8L/r1f+/3EX+v9zF/b/dNfy/3aX7v94l+r/epfm/3xX4v9+V97/QBgS/0HYDv9D2Er/RdgG/0fYOv8J2Cr/C9gm/w3YIv8P2B7/ENga/xKYFv8U2BL/FdgO/xXYCv8W2Ab/F9gEvxfYAL8X1/+/F9f+vxfX/b8X1/y/F9f7vxfX+r8X1/m/F9f5PxfX+L8X1/g/F9f3/xfX958X1/e/F9f3fxfX9z8X1/c/F9f3PxfX9z8X1/c/F9f3PxfX9z8X1/c/F9f3PxfX9z8X1/c/F9f3PxfX958X1/ffF9f3/xfX+B8X1/g/F9f4fxfX+L8X1/j/F9f5PxfX+X8X1/m/F9f5/xfX+j8X1/p/F9f6/xfX+z8X1/t/F9f7vxfX/D8X1/x/F9f8vxfX/P8X1/0/F9f9fxfX/b8X1/3/F9f+PxfX/n8X1/6/F9f+/xfX/z8Xl/9/F4=')
    },
    effects: {
        snakeGlow: true,      // Add glow effect to snake
        gridScanline: true,   // Add scanline effect to grid
        pixelatedFood: true,  // Use pixelated food design
        glitchEffects: true   // Enable random glitch effects
    },
    isMuted: false
};

// Game state
let canvas, ctx;
let snake, food, score, highScore, gameLoop, gameState;
let lastRenderTime = 0;
let touchStartX = 0;
let touchStartY = 0;

// Initialize game when the page loads
document.addEventListener('DOMContentLoaded', init);

function init() {
    // Set up canvas
    canvas = document.getElementById('gameCanvas');
    ctx = canvas.getContext('2d');
    
    // Initialize high score from localStorage if available
    highScore = parseInt(localStorage.getItem('snakeHighScore')) || 0;
    document.getElementById('highScore').textContent = highScore;
    
    // Set up event listeners
    setupEventListeners();
    
    // Set initial game state
    gameState = 'start';
    
    // Initialize the game
    resetGame();
    
    // Show start screen
    toggleOverlay('startScreen', true);
    
    // Initial canvas sizing
    resizeCanvas();
}

function setupEventListeners() {
    // Keyboard controls
    document.addEventListener('keydown', handleKeyPress);
    
    // Touch controls for swipe
    canvas.addEventListener('touchstart', handleTouchStart);
    canvas.addEventListener('touchmove', handleTouchMove);
    
    // Button controls
    document.getElementById('startBtn').addEventListener('click', startGame);
    document.getElementById('resumeBtn').addEventListener('click', resumeGame);
    document.getElementById('restartBtn').addEventListener('click', startGame);
    document.getElementById('pauseBtn').addEventListener('click', pauseGame);
    document.getElementById('muteBtn').addEventListener('click', toggleMute);
    
    // Mobile direction buttons
    document.getElementById('upBtn').addEventListener('click', () => changeDirection('up'));
    document.getElementById('leftBtn').addEventListener('click', () => changeDirection('left'));
    document.getElementById('downBtn').addEventListener('click', () => changeDirection('down'));
    document.getElementById('rightBtn').addEventListener('click', () => changeDirection('right'));
    
    // Handle window resize
    window.addEventListener('resize', resizeCanvas);
}

function resizeCanvas() {
    // Get the container dimensions
    const container = document.querySelector('.game-board-container');
    const containerWidth = container.clientWidth;
    
    // Set canvas size to fit container while maintaining aspect ratio
    canvas.width = containerWidth - 20; // Accounting for padding
    canvas.height = containerWidth - 20;
    
    // Redraw the game if it's active
    if (gameState === 'playing') {
        drawGame();
    } else if (gameState === 'paused' || gameState === 'gameover') {
        drawGame();
    }
}

function resetGame() {
    // Initialize snake in the middle of the canvas
    const gridWidth = Math.floor(canvas.width / config.gridSize);
    const gridHeight = Math.floor(canvas.height / config.gridSize);
    
    snake = {
        body: [
            {x: Math.floor(gridWidth / 2), y: Math.floor(gridHeight / 2)},
            {x: Math.floor(gridWidth / 2) - 1, y: Math.floor(gridHeight / 2)},
            {x: Math.floor(gridWidth / 2) - 2, y: Math.floor(gridHeight / 2)}
        ],
        direction: 'right',
        nextDirection: 'right',
        speed: config.initialSpeed
    };
    
    // Generate initial food
    generateFood();
    
    // Reset score
    score = 0;
    document.getElementById('score').textContent = score;
    document.getElementById('finalScore').textContent = score;
}

function startGame() {
    // Hide all overlays
    toggleOverlay('startScreen', false);
    toggleOverlay('gameOverScreen', false);
    
    // Reset the game
    resetGame();
    
    // Set game state to playing
    gameState = 'playing';
    
    // Start the game loop
    if (gameLoop) clearInterval(gameLoop);
    gameLoop = setInterval(updateGame, snake.speed);
}

function pauseGame() {
    if (gameState === 'playing') {
        gameState = 'paused';
        clearInterval(gameLoop);
        toggleOverlay('pauseScreen', true);
    }
}

function resumeGame() {
    if (gameState === 'paused') {
        gameState = 'playing';
        toggleOverlay('pauseScreen', false);
        gameLoop = setInterval(updateGame, snake.speed);
    }
}

function gameOver() {
    gameState = 'gameover';
    clearInterval(gameLoop);

    // Update high score if needed
    if (score > highScore) {
        highScore = score;
        localStorage.setItem('snakeHighScore', highScore);
        document.getElementById('highScore').textContent = highScore;

        // Custom toast with close button and styled font/color
        const toast = document.createElement('div');
        toast.style.position = 'fixed';
        toast.style.bottom = '20px';
        toast.style.left = '50%';
        toast.style.transform = 'translateX(-50%)';
        toast.style.backgroundColor = '#111';
        toast.style.border = '2px solid #ffcc00';
        toast.style.padding = '14px 24px';
        toast.style.borderRadius = '10px';
        toast.style.zIndex = '9999';
        toast.style.boxShadow = '0 0 12px #ffcc00aa';
        toast.style.display = 'flex';
        toast.style.alignItems = 'center';

        // Text content with custom color & font
        const toastText = document.createElement('span');
        toastText.textContent = 'NEW HIGH SCORE!';
        toastText.style.color = '#ffcc00';
        toastText.style.fontFamily = '"Press Start 2P", monospace';
        toastText.style.fontSize = '14px';
        toastText.style.letterSpacing = '1px';

        // Close button
        const closeBtn = document.createElement('button');
        closeBtn.textContent = '×';
        closeBtn.style.marginLeft = '16px';
        closeBtn.style.background = 'transparent';
        closeBtn.style.border = 'none';
        closeBtn.style.color = '#ffcc00';
        closeBtn.style.fontSize = '18px';
        closeBtn.style.cursor = 'pointer';

        closeBtn.addEventListener('click', () => {
            toast.remove();
        });

        toast.appendChild(toastText);
        toast.appendChild(closeBtn);
        document.body.appendChild(toast);

        // Flashing effect for high score
        const highScoreElement = document.getElementById('highScore');
        let flashCount = 0;
        const flashColors = ['#ff00ff', '#39ff14', '#00ffff'];
        const flashInterval = setInterval(() => {
            highScoreElement.style.color = flashColors[flashCount % flashColors.length];
            flashCount++;
            if (flashCount > 10) {
                clearInterval(flashInterval);
                highScoreElement.style.color = '';
            }
        }, 200);
    }

    // Play game over sound
    playSound('gameOver');

    // Glitch effect
    const glitchCanvas = () => {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
        for (let i = 0; i < 10; i++) {
            const x = Math.random() * canvas.width;
            const y = Math.random() * canvas.height;
            const width = Math.random() * 100 + 50;
            const height = 2;
            ctx.fillRect(x, y, width, height);
        }
    };

    let glitchCount = 0;
    const glitchEffect = setInterval(() => {
        glitchCanvas();
        glitchCount++;
        if (glitchCount > 5) {
            clearInterval(glitchEffect);
            toggleOverlay('gameOverScreen', true);
        }
    }, 100);
}

function updateGame() {
    moveSnake();
    checkCollision();
    checkFoodCollision();
    drawGame();
}

function moveSnake() {
    // Update direction from the queued next direction
    snake.direction = snake.nextDirection;
    
    // Create new head position based on current direction
    const head = {x: snake.body[0].x, y: snake.body[0].y};
    
    switch (snake.direction) {
        case 'up':
            head.y -= 1;
            break;
        case 'down':
            head.y += 1;
            break;
        case 'left':
            head.x -= 1;
            break;
        case 'right':
            head.x += 1;
            break;
    }
    
    // Add new head to the beginning of snake body
    snake.body.unshift(head);
    
    // Remove tail unless the snake ate food
    if (head.x !== food.x || head.y !== food.y) {
        snake.body.pop();
    } else {
        eatFood();
    }
}

function checkCollision() {
    const head = snake.body[0];
    const gridWidth = Math.floor(canvas.width / config.gridSize);
    const gridHeight = Math.floor(canvas.height / config.gridSize);
    
    // Check wall collision
    if (head.x < 0 || head.x >= gridWidth || head.y < 0 || head.y >= gridHeight) {
        gameOver();
        return;
    }
    
    // Check self collision (starting from the 4th segment)
    for (let i = 4; i < snake.body.length; i++) {
        if (head.x === snake.body[i].x && head.y === snake.body[i].y) {
            gameOver();
            return;
        }
    }
}

function checkFoodCollision() {
    const head = snake.body[0];
    
    if (head.x === food.x && head.y === food.y) {
        eatFood();
    }
}

function eatFood() {
    // Increase score
    score += 10;
    document.getElementById('score').textContent = score;
    document.getElementById('finalScore').textContent = score;
    
    // Play eat sound
    playSound('eat');
    
    // Generate new food
    generateFood();
    
    // Increase speed if not at max
    if (snake.speed > config.maxSpeed) {
        snake.speed -= config.speedIncrease;
        clearInterval(gameLoop);
        gameLoop = setInterval(updateGame, snake.speed);
    }
    
    // Add visual feedback
    document.querySelector('.score-panel').classList.add('pulse');
    setTimeout(() => {
        document.querySelector('.score-panel').classList.remove('pulse');
    }, 500);
}

function generateFood() {
    const gridWidth = Math.floor(canvas.width / config.gridSize);
    const gridHeight = Math.floor(canvas.height / config.gridSize);
    
    // Generate random position
    let newFoodPosition;
    let positionValid = false;
    
    while (!positionValid) {
        newFoodPosition = {
            x: Math.floor(Math.random() * gridWidth),
            y: Math.floor(Math.random() * gridHeight)
        };
        
        // Check if the position overlaps with the snake
        positionValid = true;
        for (const segment of snake.body) {
            if (newFoodPosition.x === segment.x && newFoodPosition.y === segment.y) {
                positionValid = false;
                break;
            }
        }
    }
    
    food = newFoodPosition;
}

function drawGame() {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw grid (optional)
    drawGrid();
    
    // Draw food
    drawFood();
    
    // Draw snake
    drawSnake();
}

function drawGrid() {
    // Create a retro grid pattern with neon green lines
    ctx.strokeStyle = config.colors.grid;
    ctx.lineWidth = 1;
    
    const gridWidth = Math.floor(canvas.width / config.gridSize);
    const gridHeight = Math.floor(canvas.height / config.gridSize);
    
    // Add scanline effect based on configuration
    if (config.effects.gridScanline) {
        // Create horizontal scanline effect that moves down the screen
        const scanLineY = (Date.now() / 50) % canvas.height;
        ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
        ctx.fillRect(0, scanLineY, canvas.width, 2);
        
        // Sometimes add a secondary "glitch" scanline
        if (Math.random() < 0.1) {
            const glitchY = Math.random() * canvas.height;
            ctx.fillStyle = 'rgba(57, 255, 20, 0.2)';
            ctx.fillRect(0, glitchY, canvas.width, 1);
        }
    }
    
    // Draw vertical grid lines with retro effect
    for (let x = 0; x <= gridWidth; x++) {
        ctx.beginPath();
        ctx.setLineDash([1, 1]); // Create dotted line for retro effect
        ctx.moveTo(x * config.gridSize, 0);
        ctx.lineTo(x * config.gridSize, canvas.height);
        ctx.stroke();
    }
    
    // Draw horizontal grid lines with retro effect
    for (let y = 0; y <= gridHeight; y++) {
        ctx.beginPath();
        ctx.setLineDash([1, 1]); // Create dotted line for retro effect
        ctx.moveTo(0, y * config.gridSize);
        ctx.lineTo(canvas.width, y * config.gridSize);
        ctx.stroke();
    }
    
    // Reset line dash to prevent affecting other drawings
    ctx.setLineDash([]);
    
    // Add some random "scan noise" dots for retro CRT effect
    if (config.effects.glitchEffects && Math.random() < 0.3) {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.15)';
        
        // Create random static noise dots
        for (let i = 0; i < 8; i++) {
            const noiseX = Math.floor(Math.random() * gridWidth) * config.gridSize;
            const noiseY = Math.floor(Math.random() * gridHeight) * config.gridSize;
            
            // Vary the size of the noise pixels
            const noiseSize = Math.random() < 0.3 ? 
                            config.gridSize : config.gridSize / 2;
            
            ctx.fillRect(noiseX, noiseY, noiseSize, noiseSize);
        }
        
        // Occasionally add horizontal interference lines
        if (Math.random() < 0.05) {
            const interferenceY = Math.floor(Math.random() * gridHeight) * config.gridSize;
            ctx.fillRect(0, interferenceY, canvas.width, 1);
        }
    }
}

function drawFood() {
    const centerX = (food.x + 0.5) * config.gridSize;
    const centerY = (food.y + 0.5) * config.gridSize;
    
    if (config.effects.pixelatedFood) {
        // Apply glow effect to food
        ctx.shadowColor = config.colors.food;
        ctx.shadowBlur = 10 + Math.sin(Date.now() / 200) * 5; // Pulsing glow effect
        
        // Draw food as a pixelated shape for retro look
        ctx.fillStyle = config.colors.food;
        
        // Use a square with pixel-art feel
        const foodSize = config.gridSize * 0.8;
        const x = food.x * config.gridSize + (config.gridSize - foodSize) / 2;
        const y = food.y * config.gridSize + (config.gridSize - foodSize) / 2;
        
        // Draw main food block (could be apple, cherry, or power pellet in retro games)
        ctx.fillRect(x, y, foodSize, foodSize);
        
        // Reset shadow
        ctx.shadowBlur = 0;
        
        // Add pixel details for retro feel - lighter color for highlights
        ctx.fillStyle = '#ff66ff';
        ctx.fillRect(x + foodSize * 0.6, y + foodSize * 0.2, foodSize * 0.2, foodSize * 0.2);
        
        // Make the food "blink" in retro style - classic arcade effect
        if (Math.floor(Date.now() / 250) % 2 === 0) {
            ctx.fillStyle = '#ffffff';
            ctx.fillRect(x + foodSize * 0.2, y + foodSize * 0.2, foodSize * 0.2, foodSize * 0.2);
        }
        
        // Add occasional random "glitch" to food for retro effect
        if (config.effects.glitchEffects && Math.random() < 0.05) {
            ctx.fillStyle = '#ffffff';
            const glitchOffset = Math.floor(Math.random() * 3) - 1;
            ctx.fillRect(
                x + glitchOffset, 
                y, 
                foodSize, 
                foodSize
            );
            
            // Reset after a very brief moment for flickering effect
            setTimeout(() => {
                if (gameState === 'playing') drawGame();
            }, 50);
        }
    } else {
        // Fallback to simple circle if pixelatedFood is disabled
        const radius = config.gridSize * 0.4;
        
        ctx.fillStyle = config.colors.food;
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.fill();
    }
}

function drawSnake() {
    // Draw each segment of the snake using retro pixelated style
    snake.body.forEach((segment, index) => {
        const x = segment.x * config.gridSize;
        const y = segment.y * config.gridSize;
        
        // Different color for head
        if (index === 0) {
            // Apply neon glow effect to snake head
            if (config.effects.snakeGlow) {
                ctx.shadowColor = config.colors.snakeHead;
                ctx.shadowBlur = 10;
            }
            
            // Draw snake head - bright neon green for retro look
            ctx.fillStyle = config.colors.snakeHead;
            ctx.fillRect(x, y, config.gridSize, config.gridSize);
            
            // Reset shadow for other elements
            ctx.shadowBlur = 0;
            
            // Draw pixel eyes based on direction - retro style
            ctx.fillStyle = '#000000'; // Black eyes
            const eyeSize = config.gridSize * 0.25;
            const eyeOffset = config.gridSize * 0.2;
            
            if (snake.direction === 'right') {
                // Right-facing snake head
                ctx.fillRect(x + config.gridSize - eyeOffset - eyeSize, y + eyeOffset, eyeSize, eyeSize);
                ctx.fillRect(x + config.gridSize - eyeOffset - eyeSize, y + config.gridSize - eyeOffset - eyeSize, eyeSize, eyeSize);
            } else if (snake.direction === 'left') {
                // Left-facing snake head
                ctx.fillRect(x + eyeOffset, y + eyeOffset, eyeSize, eyeSize);
                ctx.fillRect(x + eyeOffset, y + config.gridSize - eyeOffset - eyeSize, eyeSize, eyeSize);
            } else if (snake.direction === 'up') {
                // Up-facing snake head
                ctx.fillRect(x + eyeOffset, y + eyeOffset, eyeSize, eyeSize);
                ctx.fillRect(x + config.gridSize - eyeOffset - eyeSize, y + eyeOffset, eyeSize, eyeSize);
            } else if (snake.direction === 'down') {
                // Down-facing snake head
                ctx.fillRect(x + eyeOffset, y + config.gridSize - eyeOffset - eyeSize, eyeSize, eyeSize);
                ctx.fillRect(x + config.gridSize - eyeOffset - eyeSize, y + config.gridSize - eyeOffset - eyeSize, eyeSize, eyeSize);
            }
            
            // Add retro pixel mouth
            ctx.fillStyle = '#000000';
            if (snake.direction === 'right') {
                ctx.fillRect(x + config.gridSize - eyeOffset, y + config.gridSize / 2 - eyeSize / 2, eyeSize, eyeSize);
            } else if (snake.direction === 'left') {
                ctx.fillRect(x + eyeOffset - eyeSize, y + config.gridSize / 2 - eyeSize / 2, eyeSize, eyeSize);
            } else if (snake.direction === 'up') {
                ctx.fillRect(x + config.gridSize / 2 - eyeSize / 2, y + eyeOffset - eyeSize, eyeSize, eyeSize);
            } else if (snake.direction === 'down') {
                ctx.fillRect(x + config.gridSize / 2 - eyeSize / 2, y + config.gridSize - eyeOffset, eyeSize, eyeSize);
            }
        } else {
            // Body segments with pixel-art style - different brightness based on position
            // Create retro pattern with two alternating shades of green
            const isEvenSegment = index % 2 === 0;
            
            // Use alternating brighter and darker greens for body segments - from config
            ctx.fillStyle = isEvenSegment ? config.colors.snakeBody1 : config.colors.snakeBody2;
            
            // Draw square segments without rounded corners for pixel art look
            ctx.fillRect(x, y, config.gridSize, config.gridSize);
            
            // Add a pixel detail to create retro pattern
            if (isEvenSegment) {
                ctx.fillStyle = config.colors.snakeHead; // Highlight color
                ctx.fillRect(x + config.gridSize * 0.25, y + config.gridSize * 0.25, 
                             config.gridSize * 0.5, config.gridSize * 0.5);
            }
            
            // Randomly add glitch effect to some segments for retro feel
            if (config.effects.glitchEffects && Math.random() < 0.005) {
                ctx.fillStyle = '#ffffff';
                const glitchX = x + Math.random() * config.gridSize / 2;
                const glitchY = y + Math.random() * config.gridSize / 2;
                const glitchSize = config.gridSize * 0.1;
                ctx.fillRect(glitchX, glitchY, glitchSize, glitchSize);
            }
        }
    });
}

function handleKeyPress(e) {
    e.preventDefault();
    
    if (gameState === 'playing') {
        switch (e.key) {
            case 'ArrowUp':
                changeDirection('up');
                break;
            case 'ArrowDown':
                changeDirection('down');
                break;
            case 'ArrowLeft':
                changeDirection('left');
                break;
            case 'ArrowRight':
                changeDirection('right');
                break;
            case ' ':
            case 'Escape':
                pauseGame();
                break;
        }
    } else if (gameState === 'paused' && (e.key === ' ' || e.key === 'Escape')) {
        resumeGame();
    } else if (gameState === 'start' && e.key === ' ') {
        startGame();
    } else if (gameState === 'gameover' && e.key === ' ') {
        startGame();
    }
}

function handleTouchStart(e) {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
}

function handleTouchMove(e) {
    if (gameState !== 'playing') return;
    
    e.preventDefault();
    
    const touchEndX = e.touches[0].clientX;
    const touchEndY = e.touches[0].clientY;
    
    const diffX = touchEndX - touchStartX;
    const diffY = touchEndY - touchStartY;
    
    // Only process if the swipe is long enough
    if (Math.abs(diffX) > 20 || Math.abs(diffY) > 20) {
        // Determine which axis had the longer motion
        if (Math.abs(diffX) > Math.abs(diffY)) {
            // Horizontal swipe
            if (diffX > 0) {
                changeDirection('right');
            } else {
                changeDirection('left');
            }
        } else {
            // Vertical swipe
            if (diffY > 0) {
                changeDirection('down');
            } else {
                changeDirection('up');
            }
        }
        
        // Reset touch start position
        touchStartX = touchEndX;
        touchStartY = touchEndY;
    }
}

function changeDirection(newDirection) {
    // Prevent 180-degree turns
    if (
        (newDirection === 'up' && snake.direction !== 'down') ||
        (newDirection === 'down' && snake.direction !== 'up') ||
        (newDirection === 'left' && snake.direction !== 'right') ||
        (newDirection === 'right' && snake.direction !== 'left')
    ) {
        snake.nextDirection = newDirection;
    }
}

function toggleOverlay(overlayId, show) {
    const overlays = document.querySelectorAll('.game-overlay');
    overlays.forEach(overlay => {
        overlay.classList.remove('active');
    });
    
    if (show) {
        document.getElementById(overlayId).classList.add('active');
    }
}

function toggleMute() {
    config.isMuted = !config.isMuted;
    const soundIcon = document.getElementById('soundIcon');
    
    if (config.isMuted) {
        soundIcon.classList.remove('fa-volume-up');
        soundIcon.classList.add('fa-volume-mute');
    } else {
        soundIcon.classList.remove('fa-volume-mute');
        soundIcon.classList.add('fa-volume-up');
    }
}

function playSound(soundName) {
    if (!config.isMuted && config.sounds[soundName]) {
        config.sounds[soundName].currentTime = 0;
        config.sounds[soundName].play().catch(e => {
            // Handle autoplay restrictions
            console.log('Sound play failed:', e);
        });
    }
}

function showToast(message, duration = 2000) {
    // Create toast if it doesn't exist
    let toast = document.querySelector('.game-toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.className = 'game-toast';
        document.querySelector('.game-board-container').appendChild(toast);
    }
    
    // Set message and show with retro styling
    toast.textContent = message.toUpperCase(); // Convert to uppercase for retro feel
    toast.style.animation = 'textPulse 0.3s infinite alternate'; // Add pulsing animation
    toast.classList.add('show');
    
    // Create pixelated "glitch" effect randomly during display
    const glitchInterval = setInterval(() => {
        if (Math.random() < 0.3) {
            toast.style.left = `${50 + (Math.random() * 4 - 2)}%`;
            setTimeout(() => {
                toast.style.left = '50%';
            }, 50);
        }
    }, 300);
    
    // Hide after duration with retro effect
    setTimeout(() => {
        clearInterval(glitchInterval);
        toast.style.animation = 'none';
        
        // Final glitch before hiding
        let glitchCount = 0;
        const finalGlitch = setInterval(() => {
            toast.style.opacity = toast.style.opacity === '0' ? '1' : '0';
            glitchCount++;
            if (glitchCount > 5) {
                clearInterval(finalGlitch);
                toast.classList.remove('show');
            }
        }, 100);
    }, duration);
}
