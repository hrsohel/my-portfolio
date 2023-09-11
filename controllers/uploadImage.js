import fs from "fs";

export async function uploadImage(image) {
  let fileName;
  if (image) {
    const blob = image.slice(0);
    const name = image.name.split(".")[0];
    const ext = image.name.split(".")[1];
    fileName = `${name}${Math.random()}.${ext}`;
    const arrayBuffer = await blob.arrayBuffer();
    fs.writeFile(
      `public/uploads/${fileName}`,
      Buffer.from(arrayBuffer),
      (err) => {
        if (err) console.log(err.message);
        else console.log("Image uploaded");
      }
    );
  }

  return fileName;
}
