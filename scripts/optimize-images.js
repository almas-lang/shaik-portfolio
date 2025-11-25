#!/usr/bin/env node

/**
 * Image Optimization Script
 *
 * This script helps convert large PNG/JPEG images to WebP format.
 *
 * To use this script:
 * 1. Install sharp: npm install --save-dev sharp
 * 2. Run: node scripts/optimize-images.js
 *
 * This will convert all large images in /public/images to WebP format
 */

const fs = require('fs');
const path = require('path');

async function optimizeImages() {
  try {
    const sharp = require('sharp');
    const imagesDir = path.join(__dirname, '../public/images');

    // Find all PNG and JPEG files
    const files = getAllImageFiles(imagesDir);

    console.log(`Found ${files.length} images to optimize...`);

    for (const file of files) {
      const ext = path.extname(file).toLowerCase();
      if (['.png', '.jpg', '.jpeg'].includes(ext)) {
        const webpPath = file.replace(/\.(png|jpg|jpeg)$/i, '.webp');

        // Skip if WebP version already exists
        if (fs.existsSync(webpPath)) {
          console.log(`Skipping ${path.basename(file)} - WebP version exists`);
          continue;
        }

        await sharp(file)
          .webp({ quality: 85 })
          .toFile(webpPath);

        console.log(`✓ Converted ${path.basename(file)} to WebP`);
      }
    }

    console.log('\n✓ Image optimization complete!');
  } catch (error) {
    if (error.code === 'MODULE_NOT_FOUND') {
      console.error('\n❌ Error: sharp is not installed');
      console.log('\nTo install sharp, run:');
      console.log('  npm install --save-dev sharp');
      console.log('\nThen run this script again.');
    } else {
      console.error('Error optimizing images:', error);
    }
  }
}

function getAllImageFiles(dir) {
  const files = [];

  function traverse(currentPath) {
    const items = fs.readdirSync(currentPath);

    for (const item of items) {
      const fullPath = path.join(currentPath, item);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        traverse(fullPath);
      } else if (stat.isFile()) {
        const ext = path.extname(item).toLowerCase();
        if (['.png', '.jpg', '.jpeg'].includes(ext)) {
          files.push(fullPath);
        }
      }
    }
  }

  traverse(dir);
  return files;
}

optimizeImages();
