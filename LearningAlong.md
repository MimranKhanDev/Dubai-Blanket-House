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
