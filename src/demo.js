import Quill from "quill";
import VideoUploader from "./quill.videoUploader.js";

Quill.debug("warn");
Quill.register("modules/VideoUploader", VideoUploader);

const fullToolbarOptions = [
    [{ header: [1, 2, 3, false] }],
    ["bold", "italic"],
    ["clean"],
    ["video"],
];
var quill = new Quill("#editor", {
    theme: "snow",
    modules: {
        toolbar: {
            container: fullToolbarOptions,
        },
        VideoUploader: {
            upload: (file) => {
                const fileReader = new FileReader();
                return new Promise((resolve, reject) => {
                    fileReader.addEventListener(
                        "load",
                        () => {
                            let base64ImageSrc = fileReader.result;
                            setTimeout(() => {
                                resolve(base64ImageSrc);
                                //reject('Issue uploading file');
                            }, 1500);
                        },
                        false
                    );

                    if (file) {
                        fileReader.readAsDataURL(file);
                    } else {
                        reject("No file selected");
                    }
                });
            },
        },
    },
});

quill.on("text-change", function(delta, oldDelta, source) {
    if (source == "api") {
        console.log("An API call triggered this change.");
    } else if (source == "user") {
        console.log("A user action triggered this change.");
    }
    console.log(oldDelta, delta);
});

quill.on("selection-change", function(range, oldRange, source) {
    if (range) {
        if (range.length == 0) {
            console.log("User cursor is on", range.index);
        } else {
            var text = quill.getText(range.index, range.length);
            console.log("User has highlighted", text);
        }
    } else {
        console.log("Cursor not in the editor");
    }
});