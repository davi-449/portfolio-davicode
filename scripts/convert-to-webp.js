import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.join(__dirname, '../public/mockups');

async function convertImages() {
  try {
    const files = fs.readdirSync(publicDir);
    const pngFiles = files.filter(file => path.extname(file).toLowerCase() === '.png');

    console.log(`Found ${pngFiles.length} PNG files. Converting to WebP...`);

    for (const file of pngFiles) {
      const inputPath = path.join(publicDir, file);
      const outputPath = path.join(publicDir, file.replace(/\.png$/i, '.webp'));

      await sharp(inputPath)
        .webp({ quality: 80 })
        .toFile(outputPath);

      console.log(`✅ Converted ${file} -> ${path.basename(outputPath)}`);
      
      // Opt: Delete the original PNG to save space
      fs.unlinkSync(inputPath);
    }

    console.log('🎉 All files converted successfully!');
  } catch (error) {
    console.error('Error during conversion:', error);
    process.exit(1);
  }
}

convertImages();
