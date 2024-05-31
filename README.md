# Quill VideoHandler Module

A module for Quill rich text editor to allow images to be uploaded to a server instead of being base64 encoded.
Adds a button to the toolbar for users to click, also handles drag,dropped and pasted images.

## Demo

![Image of Yaktocat](/static/quill-example.gif)

### Install

Install with npm:

```bash
npm install quill-video-uploader --save
```

### Webpack/ES6

```javascript
import Quill from "quill";
import VideoUploader from "quill-video-uploader";

import 'quill-video-uploader/dist/quill.VideoUploader.min.css';

Quill.register("modules/VideoUploader", VideoUploader);

const quill = new Quill(editor, {
  // ...
  modules: {
    // ...
    VideoUploader: {
      upload: (file) => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(
              "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/480px-JavaScript-logo.png"
            );
          }, 3500);
        });
      },
    },
  },
});
```


```javascript
// A link to quill.js
<script src="/dist/quill.js"></script>
<script src="/dist/quill.VideoUploader.min.js"></script>

Quill.register("modules/VideoUploader", VideoUploader);

var quill = new Quill(editor, {
  // ...
  modules: {
    // ...
    VideoUploader: {
      upload: file => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(
              "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/480px-JavaScript-logo.png"
            );
          }, 3500);
        });
      }
    }
  }
});
```
