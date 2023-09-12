import fs from "fs";
import { join } from "path";
import cloudinary from "./cloudinary";

export async function uploadImage(image) {
  let fileName;
  let cloudinaryURL;
  if (image) {
    const blob = image.slice(0);
    const name = image.name.split(".")[0];
    const ext = image.name.split(".")[1];
    fileName = `${name}${Math.random()}.${ext}`;
    const arrayBuffer = await blob.arrayBuffer();
    const imageForClodinary = `./tempImages/${fileName}`;
    fs.writeFileSync(`./tempImages/${fileName}`, Buffer.from(arrayBuffer));
    cloudinary.uploader.upload(imageForClodinary).then((result) => {
      cloudinaryURL = result.url;
      console.log(cloudinaryURL);
    });

    return cloudinaryURL;
  }
}
