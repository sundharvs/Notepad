# Notepad
Notepad is a simple and minimalist notepad webapp that utilizes HTML5 contenteditable and localstorage to provide a quick way to take notes.

Isn't it tiring to open up Google Docs or Word just to write down a few sentences? Notepad aims to solve this problem with a fast and simple webapp that doesn't have a sign-in and emphasizes **speed** and **simplicity** in its UI. 

For example, the code for saving is only two lines.
``` javascript
localStorage.clear();
localStorage.setItem("saved", content);
```

This project uses [Bootstrap](https://getbootstrap.com/) and [Open Sans on Google Fonts](https://www.google.com/fonts)
