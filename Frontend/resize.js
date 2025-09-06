import sharp from "sharp";

const inputPath = "public/Micro/logo.png"; // tumhara original 1024x1024 logo

const sizes = [32, 192, 512];

sizes.forEach(size => {
  sharp(inputPath)
    .resize(size, size)
    .toFile(`public/Micro/logo-${size}.png`)
    .then(() => console.log(`✅ Created logo-${size}.png`))
    .catch(err => console.error(err));
});
