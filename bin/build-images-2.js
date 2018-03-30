const gm = require("gm");
const process = require("process");
const imagemin = require("imagemin");
const imageminPngquant = require("imagemin-pngquant");

// we require projectId to be provided
const projectId = process.argv[2];
if (typeof projectId !== "string") {
    console.error("No projectId provided!");
    process.exit(1);
}

const doImage = (pathIn, pathOut) => {
    gm(pathIn)
        .background("#ffffff")
        .flatten()
        .toBuffer("gif", (e1, buffer) => {
            if (!e1) {
                console.log("done 1");

                gm(buffer)
                    .resize(640, 640)
                    .type("Optimize")
                    .interlace("Line")
                    .colors(64)
                    .colorspace("RGB")
                    .dither(true)
                    .minify()
                    .write(pathOut, (e2) => {
                        if (!e2) {
                            console.log("done 2");

                            imagemin([pathOut], "./src/images/magicxer/", {
                                plugins: [imageminPngquant({quality: "60-80"})]
                            }).then((files) => {
                                console.log(files);
                                // => [{data: <Buffer 89 50 4e …>, path: 'build/images/foo.jpg'}, …]
                            });
                        }
                    });
            }
        });
};

doImage(
    "./src/images/magicxer/magicxer-screenshot.png",
    "./src/images/magicxer/magicxer-screenshot.min.png"
);
doImage(
    "./src/images/magicxer/portrait-2014-mirror-selfie.jpg",
    "./src/images/magicxer/portrait-2014-mirror-selfie.min.png"
);
