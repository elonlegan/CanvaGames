export const games = [
  {
    title: 'Arkanoid',
    slug: 'arkanoid',
    img: 'https://i.imgur.com/zclQt4C.png',
    backgroundColor: '#a41717',
    borderColor: '#e42020',
    shadowColor: '#b81e1e',
    rules: ` <h3>Objective:</h3>
    <p>The objective of Arkanoid is to eliminate all the bricks on the screen by bouncing a ball off a paddle.</p>

    <h3>Controls:</h3>
    <p>Use the following controls to play:</p>
    <ul>
        <li>Use the left and right arrow keys to move the paddle horizontally.</li>
        <li>Launch the ball by pressing the space bar.</li>
        <li>Use the paddle to bounce the ball and prevent it from falling below the screen.</li>
        <li>Avoid letting the ball hit the top of the screen without bouncing it.</li>
        <li>Break all the bricks to complete each level.</li>
    </ul>

    <h3>Power-ups:</h3>
    <p>During the game, you may encounter power-ups that can provide various advantages, such as:</p>
    <ul>
        <li>Enlarge the paddle</li>
        <li>Multiple balls</li>
        <li>Lasers to shoot the bricks</li>
        <li>Catch the ball with the paddle</li>
    </ul>

    <h3>Scoring:</h3>
    <p>Earn points for each brick you destroy and bonus points for completing a level quickly. The score increases as you progress through the levels.</p>

    <p>Enjoy playing Arkanoid and demolish those bricks!</p>`,
    available: false,
  },
  {
    title: 'Donkey Kong',
    slug: 'donkey-kong',
    img: 'https://i.imgur.com/1igRXn3.png',
    backgroundColor: '#ffb850',
    borderColor: '#c54e00',
    shadowColor: '#941c00',
    rules: `<h3>Objective:</h3>
    <p>The objective of Donkey Kong is to rescue the damsel in distress, Pauline, from the giant ape, Donkey Kong. Climb up the construction site while avoiding obstacles and enemies to reach Donkey Kong's location.</p>

    <h3>Controls:</h3>
    <p>Use the following controls to play:</p>
    <ul>
        <li>Use the left and right arrow keys to move Mario left or right.</li>
        <li>Use the up arrow key to jump and climb ladders.</li>
        <li>Avoid barrels, fireballs, and other obstacles while climbing.</li>
        <li>Reach Donkey Kong at the top to complete the level and advance to the next one.</li>
    </ul>

    <h3>Scoring:</h3>
    <p>Earn points by collecting items, defeating enemies, and reaching Pauline. The score increases as you progress through the levels.</p>

    <p>Good luck in saving Pauline from Donkey Kong!</p>`,
    available: false,
  },
  {
    title: 'Pong',
    slug: 'pong',
    img: 'https://i.imgur.com/gkShWGs.png',
    backgroundColor: '#000000',
    borderColor: '#f6e01c',
    shadowColor: '#c9b818',
    rules: `<h3>Objective:</h3>
    <p>The objective of Pong is to score points by hitting the ball past your opponent's paddle. The first player to reach a certain number of points wins the game.</p>

    <h3>Controls:</h3>
    <p>Use the following controls to play:</p>
    <ul>
        <li>Player 1: Use the up and down arrow keys to move the paddle up or down.</li>
        <li>Player 2: Use the W and S keys to move the paddle up or down.</li>
        <li>Try to hit the ball with your paddle and send it towards your opponent's side.</li>
        <li>Avoid letting the ball pass your own paddle.</li>
    </ul>

    <h3>Scoring:</h3>
    <p>Earn a point when the opponent fails to return the ball. The first player to reach the predetermined score wins the game.</p>

    <p>Enjoy playing Pong!</p>`,
    available: true,
  },
  {
    title: 'Pacman',
    slug: 'pacman',
    img: 'https://i.imgur.com/oKJqvYf.png',
    backgroundColor: '#edd94f',
    borderColor: '#472c09',
    shadowColor: '#271805',
    rules: `<h3>Objective:</h3>
    <p>The objective of Pac-Man is to navigate the maze, eating all the pellets while avoiding the ghosts. Clear each level by eating all the pellets.</p>

    <h3>Controls:</h3>
    <p>Use the following controls to play:</p>
    <ul>
        <li>Use the arrow keys to move Pac-Man up, down, left, or right.</li>
        <li>Eat all the pellets in the maze to complete each level.</li>
        <li>Avoid the ghosts, as touching them will cause you to lose a life.</li>
        <li>Eat power pellets to temporarily turn the ghosts blue and gain the ability to eat them for extra points.</li>
    </ul>

    <h3>Scoring:</h3>
    <p>Earn points by eating pellets and fruits, as well as by eating vulnerable ghosts. The score increases as you progress through the levels.</p>

    <p>Enjoy playing Pac-Man!</p>`,
    available: false,
  },
  {
    title: 'Frogger',
    slug: 'frogger',
    img: 'https://i.imgur.com/PL8iIMV.png',
    backgroundColor: '#1f3311',
    borderColor: '#7bca40',
    shadowColor: '#6baf30',
    rules: `<h3>Objective:</h3>
    <p>The objective of Frogger is to guide your frog safely across a busy road and a hazardous river to reach its home.</p>

    <h3>Controls:</h3>
    <p>Use the following controls to play:</p>
    <ul>
        <li>Use the arrow keys to move the frog up, down, left, or right.</li>
        <li>Avoid colliding with cars, trucks, and other obstacles on the road.</li>
        <li>Cross the river by jumping on logs and turtles.</li>
        <li>Reach your home to complete each level.</li>
    </ul>

    <h3>Scoring:</h3>
    <p>Earn points by successfully guiding the frog across the road and river. The score increases as you progress through the levels.</p>

    <p>Good luck in safely guiding your frog home!</p>`,
    available: false,
  },
  {
    title: 'Space Invaders',
    slug: 'space-invaders',
    img: 'https://i.imgur.com/LgpzNFn.png',
    backgroundColor: '#0361ff',
    borderColor: '#6ba9ff',
    shadowColor: '#5a8fd9',
    rules: `<h3>Objective:</h3>
    <p>The objective of Space Invaders is to defeat waves of invading aliens and score as many points as possible.</p>

    <h3>Controls:</h3>
    <p>Use the following controls to play:</p>
    <ul>
        <li>Use the left and right arrow keys to move your spaceship horizontally.</li>
        <li>Use the space bar to shoot lasers at the invaders.</li>
        <li>Avoid getting hit by enemy projectiles.</li>
        <li>Defeat all the aliens to complete each level.</li>
    </ul>

    <h3>Scoring:</h3>
    <p>Earn points by shooting down the invading aliens. The score increases as you destroy more enemies.</p>

    <p>Enjoy playing Space Invaders and defend the Earth!</p>`,
    available: false,
  },
  {
    title: 'Tetris',
    slug: 'tetris',
    img: 'https://i.imgur.com/t1RbvC0.png',
    backgroundColor: '#29b8e8',
    borderColor: '#004d96',
    shadowColor: '#003970',
    rules: `<h3>Objective:</h3>
    <p>The objective of Tetris is to manipulate falling blocks called Tetriminos to create complete rows and prevent the stack from reaching the top of the playfield.</p>

    <h3>Controls:</h3>
    <p>Use the following controls to play:</p>
    <ul>
        <li>Use the left and right arrow keys to move the Tetrimino horizontally.</li>
        <li>Use the up arrow key to rotate the Tetrimino.</li>
        <li>Use the down arrow key to make the Tetrimino fall faster.</li>
        <li>Complete rows to clear them and earn points.</li>
        <li>If the stack reaches the top, the game is over.</li>
    </ul>

    <h3>Scoring:</h3>
    <p>Earn points by clearing rows. The score increases as you complete more rows simultaneously.</p>

    <p>Enjoy playing Tetris and stack those blocks!</p>`,
    available: false,
  },
  {
    title: 'Galaga',
    slug: 'galaga',
    img: 'https://i.imgur.com/5V3uRbF.png',
    backgroundColor: '#5c0048',
    borderColor: '#a07099',
    shadowColor: '#835c7e',
    rules: `<h3>Objective:</h3>
    <p>The objective of Galaga is to defeat waves of enemy spacecraft and score as many points as possible.</p>

    <h3>Controls:</h3>
    <p>Use the following controls to play:</p>
    <ul>
        <li>Use the left and right arrow keys to move your spaceship horizontally.</li>
        <li>Use the space bar to shoot lasers at the enemy ships.</li>
        <li>Avoid getting hit by enemy projectiles and collisions with enemy ships.</li>
        <li>Defeat all the enemies to complete each level.</li>
    </ul>

    <h3>Scoring:</h3>
    <p>Earn points by shooting down enemy ships. The score increases as you destroy more enemies.</p>

    <p>Enjoy playing Galaga and defend the galaxy!</p>`,
    available: false,
  },
  {
    title: 'Centipede',
    slug: 'centipede',
    img: 'https://i.imgur.com/101qRBj.png',
    backgroundColor: '#433b70',
    borderColor: '#ff6666',
    shadowColor: '#cd3434',
    rules: `<h3>Objective:</h3>
    <p>The objective of Centipede is to shoot and destroy the centipede and other enemies while avoiding their attacks.</p>

    <h3>Controls:</h3>
    <p>Use the following controls to play:</p>
    <ul>
        <li>Use the arrow keys to move your ship horizontally and vertically.</li>
        <li>Use the space bar to shoot projectiles at the centipede and other enemies.</li>
        <li>Shoot the centipede segments to split it into smaller segments.</li>
        <li>Avoid colliding with the centipede and other enemies.</li>
        <li>Eliminate all the enemies to complete each level.</li>
    </ul>

    <h3>Scoring:</h3>
    <p>Earn points by shooting down the centipede and other enemies. The score increases as you destroy more enemies.</p>

    <p>Enjoy playing Centipede and eliminate the insect invasion!</p>`,
    available: false,
  },
];
