import { writeFile } from "fs/promises";

export async function uploadImage(image) {
  let fileName;
  if (image) {
    const blob = image.slice(0);
    const name = image.name.split(".")[0];
    const ext = image.name.split(".")[1];
    fileName = `${name}${Math.random()}.${ext}`;
    const arrayBuffer = await blob.arrayBuffer();
    await writeFile(`./public/uploads/${fileName}`, Buffer.from(arrayBuffer));
  }

  return fileName;
}
