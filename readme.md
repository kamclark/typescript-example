# FF

## Setup

- `npm init`
- create file structure (src/app.ts, dist/index.html, src/models folder)
- `npm install --save-dev typescript`
- `npm install --save-dev ts-loader`
- `npm install --save-dev webpack webpack-cli`
- `npx tsc --init` initiate .tsconfig file

```json
{
  "compilerOptions": {
    "outDir": "./dist/",
    "noImplicitAny": true,
    "module": "es6",
    "target": "es5", // compile to es5
    "jsx": "react", // supports jsx
    "allowJs": true
  }
}
```

***webpack.config.js***

```js
const path = require('path');

module.exports = {
  entry: './src/app.ts',
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
```

- `npx tsc [filename]` to convert .ts to .js

## Planning

- It's fantasy football...
- You will have a users, teams, players for each team, leagues
- Introduce UML
- What properties will each of these have? (brainstorm, we can use one of those jamboards)

### User

- id (int)
- name (string)
- email (string)
- teams (array of teams)
- joinLeague()
- leaveLeague()
- createTeam()

### Team

- id (int)
- name (string)
- logo (string)
- color scheme (array of strings)
- players (array of players)
- addPlayer()
- dropPlayer()

### League

- id (int)
- name (string)
- email (string)
- logo (string)
- teams (array of teams)
- removeTeam()
- inviteUser()

### players

- id (int)
- firstName (string)
- lastName (string)
- fantasyTeam (team)
- hasTeam (boolean)

#### QB

- position (string)
- yearToDateStats (object)
    - passingYards (int)
    - passingTouchdowns (int)
    - qbRating (dec)
- currentWeekStats (object)
    - passingYards (int)
    - passingTouchdowns (int)
    - qbRating (dec)

#### RB

- position (string)
- yearToDateStats (object)
    - rushingYards (int)
    - rushingTouchdowns (int)
    - fumbles (int)
- currentWeekStats (object)
    - rushingYards (int)
    - rushingTouchdowns (int)
    - fumbles (int)

## Add Players

```ts

const generatePlayers = () => { ... }
```