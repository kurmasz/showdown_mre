# Bug Demo

1. Launch a local server (e.g., `python -m http.server`)
2. Visit `page_with_bug.html`
3. Note the error in the console.
(This page uses the current version of `showdown.js`)

# Sample use with proposed mod

1. Launch a local server (e.g., `python -m http.server`)
2. Visit `desired_behavior.html`

This page uses a modified version of `showdown.js` that sets `root` to `var root = this || globalThis;`

With this change, I can dynamically load `showdown` from a module using `import` 