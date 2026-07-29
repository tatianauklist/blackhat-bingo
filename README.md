# BlackHat Bingo

'Ever since I was young, I've dreamt about spending my August in a Business Hall'. 

If this sentence resonates with you, then this project is for you. BlackHat bingo is a conference bingo card to help make your BlackHat (or any other corporate security conference), a bit more bearable. Each board is built around the common sights, sounds and cliches that surround a corporate cybersecurity conference.

## What it does

- Generates a **25-square bingo board** pulled from a bank of 40+ (and growing) vendor/AI/corporate cliches
- Each board is **seeded by name + date** to make sure the same person gets the same board all day, but a new board automatically the next conference day with no button required
- Click squares to mark them, with win directions for rows, columns and diagnols
- (Planned) A shared leaderboard so wins show up across everyone's devices, not just your own or in a group chat

## How the board generation works

No accounts needed, no backend database for the board itself. The "randomness" is actually **deterministic**, seeded from your name.

1. **Hashing** : your name gets converted into a numeric "fingerprint" via a simple string-hash function (same 31-multiplier trick used in Java's ```String.hashCode``` )
2. **Date-Locking**: the current date (calculated in PT regardless of your device's timezone), gets folded into the same hash so the fingerprint changes once per day, not once per name
3. **Seeded PRNG**: that fingerprint feeds into ```mulberry32```, a small pseudo random number generator, producing a reproducible stream of 'random-looking' numbers
4. **Fisher-Yates Shuffle**: the phrase bank gets shuffled using that seeded stream instead of ```Math.random()```, then the first 25 phrases become your board

Same name, same day -> same board, every reload. Same name, next day -> a new board, automatically. Different names never collide into the same board (in practice).

## Tech Stack
- React (Vite)
- Vanilla CSS
- No backend for board generation. Fully client side
- Shared storage (planned) for leaderboard feature

## Running locally

```
npm install
npm run dev
```
## Future Plans

- **Shared Leaderboard**: polling shared storage on an interval so wins from other players show up live without anyone needing to refresh or send a screenshot to a groupchat
- **Multiplayer feel**: seeing who else has bingo'd through a simple activity feed
- **Public Login (maybe)**: currently identity is just "type your name" (no password); real auth might take its place in the future
- **More Phrases**: the content bank will likely grow and rotate for future conferences
- **Deploy**: hosting this as an actual shareable page rather than a local dev build