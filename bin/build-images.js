/*
 * node script for building a nice responsive images from the source directory
 *
 * NOTE: this can fail when doing stuff over multiple images, see:
 * https://github.com/aheckmann/gm/issues/502
 * https://github.com/aheckmann/gm/issues/488
 */

/*
 * dependencies
 */
const gm = require("gm");
const fs = require("fs");
const path = require("path");
const process = require("process");
const imagemin = require("imagemin");
const imageminPngquant = require("imagemin-pngquant");

/*
 * config
 */
const allowedExtensions = [".jpg", ".jpeg", ".png", ".gif"];
const thumbSuffix = ".thumb";
const totalTimeLogLabel = "Done";

/*
 * command line arguments read and check
 */
const imagesPath = process.argv[2];
if (typeof imagesPath !== "string") {
    console.error("No imagesPath provided!");
    process.exit(1);
}

/*
 * helper functions
 */

const isImageWeAreLookingFor = (file) => {
    const parsedPath = path.parse(file);
    return (
        allowedExtensions.indexOf(parsedPath.ext) !== -1 &&
        parsedPath.name.indexOf(thumbSuffix) === -1
    );
};

const getImagesFromDir = (dir) => {
    const files = [];
    fs.readdirSync(dir).forEach((file) => {
        if (isImageWeAreLookingFor(file)) {
            files.push(dir + file);
        }
    });
    return files;
};

const doImage = (file, counter) => {
    const parsedPath = path.parse(file);
    const pathOut = path.format({
        dir: parsedPath.dir,
        name: parsedPath.name,
        ext: thumbSuffix + ".png"
    });
    const pathOut2x = path.format({
        dir: parsedPath.dir,
        name: parsedPath.name,
        ext: thumbSuffix + "@2x.png"
    });

    // first step is flattening the image (we have some transparent pngs)
    gm(file)
        .background("#ffffff")
        .flatten()
        .toBuffer("png", (err, buffer) => {
            // using flattened buffer to produce thumbnail
            gm(buffer)
                .resize(480, 480)
                .colorspace("YIQ")
                .colors(64)
                .dither(true)
                .write(pathOut, () => {
                    imagemin([pathOut], parsedPath.dir, {
                        plugins: [imageminPngquant({quality: "60-80"})]
                    });
                });

            // using flattened buffer to produce "retina" (@2x) thumbnail
            gm(buffer)
                .resize(920, 920)
                .colorspace("YIQ")
                .colors(64)
                .dither(true)
                .write(pathOut2x, () => {
                    imagemin([pathOut2x], parsedPath.dir, {
                        plugins: [imageminPngquant({quality: "40-60"})]
                    }).then(() => {
                        counter.done++;
                        // logging done files plus total time
                        console.log(
                            "\u2713",
                            parsedPath.base,
                            `${counter.done}/${counter.total}`
                        );
                        if (counter.done === counter.total) {
                            console.timeEnd(totalTimeLogLabel);
                        }
                    });
                });
        });
};

/*
 * running
 */
const init = () => {
    console.time(totalTimeLogLabel);
    console.log("Loading files…");
    const images = getImagesFromDir(imagesPath);
    const counter = {
        done: 0,
        total: images.length
    };
    for (const image of images) {
        doImage(image, counter);
    }
};
init();
