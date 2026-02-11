import sharp from 'sharp';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const inputPath = join('src', 'assets', 'images', 'IMG_1943.png');
const outputPath = join('src', 'assets', 'images', 'IMG_1943.webp');

// Get original file size
const originalStats = fs.statSync(inputPath);
const originalSizeMB = (originalStats.size / (1024 * 1024)).toFixed(2);

console.log(`Original file size: ${originalSizeMB} MB`);

sharp(inputPath)
  .webp({ 
    quality: 85,        // Good quality balance
    effort: 6           // Compression effort (0-6, higher = smaller file)
  })
  .toFile(outputPath)
  .then(info => {
    // Get new file size
    const newStats = fs.statSync(outputPath);
    const newSizeMB = (newStats.size / (1024 * 1024)).toFixed(2);
    const savings = (((originalStats.size - newStats.size) / originalStats.size) * 100).toFixed(1);
    
    console.log('\nConversion complete!');
    console.log(`Output: ${outputPath}`);
    console.log(`Original size: ${originalSizeMB} MB`);
    console.log(`New size: ${newSizeMB} MB`);
    console.log(`Reduction: ${savings}%`);
    console.log(`Dimensions: ${info.width}x${info.height}`);
  })
  .catch(err => {
    console.error('Error converting image:', err);
  });