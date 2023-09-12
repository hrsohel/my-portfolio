// import fs from "fs";
// import { join } from "path";
// import cloudinary from "./cloudinary";

// export async function uploadImage(image) {
//   let fileName;
//   let cloudinaryURL;
//   if (image) {
//     const blob = image.slice(0);
//     const name = image.name.split(".")[0];
//     const ext = image.name.split(".")[1];
//     fileName = `${name}${Math.random()}.${ext}`;
//     const arrayBuffer = await blob.arrayBuffer();
//     const imageForClodinary = `./tempImages/${fileName}`;
//     fs.writeFileSync(`./tempImages/${fileName}`, Buffer.from(arrayBuffer));
//     cloudinary.uploader.upload(imageForClodinary).then((result) => {
//       cloudinaryURL = result.url;
//       console.log(cloudinaryURL);
//     });
//   }
//   return cloudinaryURL;
// }

import fs from "fs";
import { join } from "path";
import cloudinary from "./cloudinary";

export function uploadImage(image) {
  return new Promise(async (resolve, reject) => {
    let fileName;
    let cloudinaryURL;
    if (image) {
      try {
        const blob = image.slice(0);
        const name = image.name.split(".")[0];
        const ext = image.name.split(".")[1];
        fileName = `${name}${Math.random()}.${ext}`;
        const arrayBuffer = await blob.arrayBuffer();
        cloudinary.uploader
          .upload_stream(
            {
              folder: "tempImages", // Optional: You can specify a folder in Cloudinary to organize your uploads.
            },
            (error, result) => {
              if (error) {
                reject(error); // Reject the promise if there's an error
              } else {
                resolve({
                  public_id: result.public_id,
                  url: result.url,
                }); // Resolve the promise with the URL
              }
            }
          )
          .end(Buffer.from(arrayBuffer));
      } catch (error) {
        reject(error); // Reject the promise if any error occurs
      }
    } else {
      resolve(null); // Resolve with null if there is no image
    }
  });
}
