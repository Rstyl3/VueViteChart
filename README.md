# Vue 3 + Typescript + Vite + Chart.js

Example Chart component using Chart.js using only cdn/script tag

## How to Deploy GitPages with vite

Follow instructions here: https://www.youtube.com/watch?v=yo2bMGnIKE8


Commands:

Build project:
``` node
 npm run build 
```

Override ignoring of dist folder:
``` node
git add dist -f
```

Commit changes and run command:
``` node
git subtree push --prefix dist origin gh-pages
```