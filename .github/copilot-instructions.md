## Repository context

- This is a minimal Node.js backend project. The only visible manifest is `package.json` which lists `main: index.js` and includes `nodemon` in `dependencies`.
- There is no `src/` directory or `index.js` file present in the repository root at the time of inspection. If you need to modify runtime behavior, first search for `index.js`, `server.js`, or a `src/` folder.

## Purpose of these instructions

Give concise, repository-specific guidance so an AI coding agent can be immediately productive: where to look, what conventions to follow, and safe defaults for edits.

## Quick start (developer workflows)

- Install dependencies: run `npm install` in the repo root.
- Run (dev): this project uses `nodemon` as a dependency. If an `index.js` or `server.js` exists, use `npx nodemon index.js` (or `npx nodemon server.js`). If no entry exists, create `index.js` only after confirming intended service shape with the user.
- Tests: there are no tests configured. Do not add or assume test frameworks without updating `package.json` and asking the maintainer.

## Project-specific conventions and notes

- Entrypoint: `package.json` lists `main: index.js`. Prefer that location for the program entry unless other files (e.g., `src/index.js`) exist.
- Dependency placement: `nodemon` currently appears under `dependencies` (not `devDependencies`). Avoid moving dependencies between sections without confirming CI/production expectations.
- Keep changes minimal and explicit: this repo is sparse — create new files and folders only when necessary and list them in your commit message.

## Integration points and external dependencies

- The only declared runtime dependency is `nodemon`. There are no visible integrations (databases, cloud infra, or third-party APIs) to reference. Before adding integrations, search the repo for environment variable usage or config files.

## Files and patterns an agent should check (ordered)

1. `package.json` — scripts, dependencies, and `main` (already present).
2. Root files: `index.js`, `server.js`, `app.js` — common entry names; create or modify only after confirming.
3. `src/`, `lib/`, `controllers/`, `routes/` — typical server layout (may not exist yet).
4. `.env`, `config/`, or `config.js` — configuration and secrets (none found during scan).

## Example tasks and how to perform them safely

- Add a simple Express server: create `index.js` that requires `express`, listens on an env-configured port, and export the app (so tests can import it later). Add `express` to `dependencies` and update `package.json` scripts (e.g., `start` and `dev`). Document the change in the commit message.
- Add a `dev` script rather than changing `dependencies`: prefer adding `"dev": "nodemon index.js"` to `scripts` so `nodemon` remains where maintainers left it.

## Merge guidance (if previous `.github/copilot-instructions.md` existed)

- If you find an existing instructions file, merge content that documents repository-specific commands and workflows (e.g., custom scripts or CI behaviors). Preserve examples and any project rationale.

## What the agent must not assume

- No tests, CI config, or deployment setup are present; do not add CI or change production dependency layout without explicit confirmation.
- Do not remove or relocate `nodemon` automatically — maintainers may rely on the current layout.

## Where to ask for human clarification

- If you need to add a major framework (Express, TypeORM, etc.), change dependency scopes, or modify the runtime entrypoint, ask the repository owner before committing.

---
If anything here looks off or you want me to include examples (e.g., a starter `index.js` and `package.json` scripts) I can add them next — tell me whether to create a minimal Express starter or to probe for hidden files first.
