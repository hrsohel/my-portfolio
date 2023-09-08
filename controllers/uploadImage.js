import { writeFile } from "fs/promises";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

export async function uploadImage(image) {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  let fileName;
  if (image) {
    const name = image.name.split(".")[0];
    const ext = image.name.split(".")[1];
    fileName = `${name}${Math.random()}.${ext}`;
    const bytes = await image.arrayBuffer();
    const path = join(__dirname, "..");
    const buffer = Buffer.from(bytes);
    await writeFile(`${path}/public/uploads/${fileName}`, buffer);
  }
  return fileName;
}
