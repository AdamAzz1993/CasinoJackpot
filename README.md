# CasinoJackpot
a simple slot machine game with a twist

# Design
https://lucid.app/lucidchart/858105b8-302a-4bad-a2e4-cc0200dca7da/edit?viewport_loc=17%2C362%2C1920%2C900%2C0_0&invitationId=inv_4e131528-2f0c-4a01-8f89-3a163a222166

Setup:
1. Created empty monorepo project that is managed by lerna. used lerna to simplify the management of versions concept for multiple package within same repository.
2. The main packages in this repository are @casinojackpot/web and @casinojackpot/server.

Backend:
1. added server package in express over nodejs.
2. implemented the router functionality into the root server.js.
3. built the structure based on best practices examples for nodejs.
4. implemented jest to be the main test provider.
5. covered the service's functionality by unit tests.
6. decided to use express-session for saving the user's session data.
7. endpoints: "/" get initial state, "/roll" perform single roll, "/cashOut" withdraw the credit.
 

