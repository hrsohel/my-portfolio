import { writeFile } from "fs/promises";

export async function uploadImage(image) {
  const promise = new Promise(async (resolve, reject) => {
    if (image) {
      const name = image.name.split(".")[0];
      const ext = image.name.split(".")[1];
      const fileName = `${name}${Math.random()}.${ext}`;
      const bytes = await image.arrayBuffer();
      const buffer = Buffer.from(bytes);
      await writeFile(`./public/uploads/${fileName}`, buffer);
      resolve(fileName);
    }
  });
  return promise;
}
