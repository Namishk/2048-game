# 2048 Game

![Next.js](https://img.shields.io/badge/Next.js-15.2.3-black) ![React](https://img.shields.io/badge/React-19.0.0-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5.8.2-blue) ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.0.15-38bdf8)

---

## 🎮 Features

- **Responsive Design**: Play on any device - desktop, tablet, or mobile
- **Customizable Grid Size**: Choose your preferred grid size for varying difficulty levels
- **High Score Tracking**: Your best score is saved locally and persists across sessions
- **Smooth Animations**: Enjoy fluid tile movements and merges
- **Keyboard Controls**: Use arrow keys for desktop gameplay
- **Touch Controls**: On-screen buttons for mobile and touch devices
- **Game State Management**: Win detection (reaching 2048) and game-over detection

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v20 or higher recommended)
- Yarn package manager (v1.22.22)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Namishk/2048-game.git
cd 2048-game_next
```

2. Install dependencies:

```bash
yarn install
```

3. Start the development server:

```bash
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to play the game.

### Other Available Scripts

```bash
# Build for production
yarn build

# Start production server
yarn start

# Preview production build
yarn preview

# Run linting
yarn lint

# Fix linting issues
yarn lint:fix

# Type checking
yarn typecheck

# Check code formatting
yarn format:check

# Format code
yarn format:write

# Run all checks (lint + typecheck)
yarn check
```

---

## 🎯 How to Play

### Objective

Combine numbered tiles to create a tile with the number **2048** to win!

### Game Rules

1. **Controls**:
    - **Desktop**: Use keyboard arrow keys (↑, ↓, ←, →) to move tiles
    - **Mobile/Touch**: Use the on-screen directional buttons

2. **Mechanics**:
    - When two tiles with the same number touch, they **merge** into one tile with the sum of their values
    - After each move, a new tile (either 2 or 4) appears in a random empty spot
    - All tiles slide as far as possible in the chosen direction

3. **Winning**: Reach the **2048** tile to win the game!

4. **Game Over**: The game ends when the grid is full and no valid moves remain

5. **Strategy Tips**:
    - Keep your highest-value tile in a corner
    - Build tiles in ascending order next to each other
    - Plan several moves ahead
    - Don't make random moves - each move matters!

---

## 🏗️ Project Structure

```
2048-game_next/
├── src/
│   ├── components/
│   │   ├── grid.tsx              # Main grid component for rendering the game board
│   │   └── keyboardIcons.tsx     # Visual keyboard control indicators
│   ├── hooks/
│   │   └── useGame.ts            # Core game logic and state management
│   ├── pages/
│   │   ├── _app.tsx              # Next.js app wrapper
│   │   └── index.tsx             # Main game page
│   ├── styles/
│   │   └── globals.css           # Global styles and Tailwind imports
│   └── env.js                    # Environment variable validation
├── public/                       # Static assets
├── eslint.config.js              # ESLint configuration
├── next.config.js                # Next.js configuration
├── package.json                  # Project dependencies and scripts
├── postcss.config.js             # PostCSS configuration
├── prettier.config.js            # Prettier configuration
├── tsconfig.json                 # TypeScript configuration
└── README.md                     # Project documentation
```

---

## 💻 Technical Implementation

### Core Technologies

- **Next.js 15.2.3**: React framework for production
- **React 19.0.0**: UI library
- **TypeScript 5.8.2**: Type-safe JavaScript
- **Tailwind CSS 4.0.15**: Utility-first CSS framework

### Game Logic (`useGame` Hook)

The game's core logic is implemented in the `useGame` custom React hook:

1. **`initializeGrid()`**
    - Initializes an empty grid of the specified size
    - Populates 2 random cells with initial values (2 or 4)
    - Loads high score from localStorage
    - Resets game state

2. **`getRandomValidCell(grid)`**
    - Finds all empty cells in the grid
    - Returns a random empty cell for spawning new tiles
    - Detects game over when no empty cells remain

3. **`slideAndMergeLine(line, direction)`**
    - Handles the core 2048 mechanics for a single line
    - Slides all non-zero values to the specified direction
    - Merges adjacent tiles with the same value
    - Updates high score and checks for victory (reaching 2048)

4. **Movement Functions**: `moveUp()`, `moveDown()`, `moveLeft()`, `moveRight()`
    - Apply slide and merge logic to all rows/columns
    - Handle grid transposition for vertical movements
    - Spawn new tiles after successful moves
    - Prevent invalid moves (no change in grid state)

### UI Components

1. **`<Grid>` Component**
    - Renders the game grid with proper styling
    - Displays tile values with dynamic colors
    - Handles responsive design

2. **`<KeyboardIcons>` Component**
    - Shows visual keyboard control hints
    - Provides touch-friendly directional buttons

3. **Event Handling**
    - `keydown` event listener for keyboard input (Arrow keys)
    - Touch/click handlers for on-screen controls
    - Prevents actions when game has ended

---

## 🎨 Customization

### Changing Grid Size

The game allows customizable grid sizes. You can modify the grid size through the UI controls in the game.

---

**Enjoy the game! 🎉**
