task one to initialize project structure and run the commands for

#### TASK 2

A. Scaffold the Vite + React project
`npm create vite@latest . -- --template vite `
B. Install Tailwind CSS
`npm install tailwindcss @tailwindcss/vite`
also add in the vite.confin.js file this code
`import tailwindcss from '@tailwindcss/vite' tailwindcss(),`
C. Clean the default template
src/App.css
src/assets/react.svg
public/vite.svg
D. Add a minimal global stylesheet
E. Add a .env.example (client)
VITE_API_URL=http://localhost:5000/api/v1
F. Verify everything works
□ npm run dev starts a dev server, visit the URL, see your heading
□ Change the heading text → page updates without manual refresh (HMR working)
□ npm run build succeeds and produces client/dist/
□ npm run preview serves the built app correctly
□ git status — dist/ and node_modules/ are NOT listed (proves .gitignore works)
and then removed the useless things and installed tailwind with npm

#### TASK 3

npm run dev inside server/ starts the server on port 5000
server is started,
□ GET http://localhost:5000/health returns { "success": true, "message": "Server is running" }
□ Changing a string in app.js triggers nodemon to restart the server automatically
yes it do
□ git status shows server/.env is NOT tracked
□ git status shows server/.env.example IS tracked
app.js
package-lock.json
server.js
src/
i do not know why the .env.example is not showing here but it is present in github i think maybe due to the --force command prevously did not remember,

□ server/src/ contains all eight subfolders, each tracked by Git (via .gitkeep)
i did it but i think it is ok if for now the folders are empty by the way i did it.
□ Running curl http://localhost:5000/api/v1 returns a 404 (this proves Express is handling routes — 404 is the correct response for an undefined route, not a crash)
yes it did
