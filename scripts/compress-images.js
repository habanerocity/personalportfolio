const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = 'public/static';
const outputDir = 'public/static/optimized';

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

(async () => {
  console.log('🖼️ Starting image compression with Sharp...');
  
  try {
    const inputFiles = fs.readdirSync(inputDir).filter(file => 
      file.match(/\.(jpg|jpeg|png|webp)$/i)
    );

    const sizes = [320, 640, 1024, 1920];
    let processedCount = 0;
    
    for (const file of inputFiles) {
      const inputPath = path.join(inputDir, file);
      const name = path.parse(file).name;
      const ext = path.parse(file).ext;
      
      try {
        const metadata = await sharp(inputPath).metadata();
        console.log(`📋 Processing: ${file} (${metadata.width}x${metadata.height})`);
        
        // Create optimized version of original size
        const optimizedPath = path.join(outputDir, `${name}-optimized.webp`);
        await sharp(inputPath)
          .webp({ quality: 85, effort: 6 })
          .toFile(optimizedPath);
        
        console.log(`✅ Created optimized: ${name}-optimized.webp`);
        
        // Create responsive sizes if original is large enough
        for (const size of sizes) {
          if (metadata.width && metadata.width > size) {
            const responsivePath = path.join(outputDir, `${name}-${size}w.webp`);
            await sharp(inputPath)
              .resize(size, null, { 
                withoutEnlargement: true,
                fit: 'inside'
              })
              .webp({ quality: 80, effort: 6 })
              .toFile(responsivePath);
            
            console.log(`📐 Created: ${name}-${size}w.webp`);
          }
        }
        
        processedCount++;
      } catch (fileError) {
        console.error(`❌ Error processing ${file}:`, fileError.message);
      }
    }
    
    console.log(`🎉 Image optimization complete! Processed ${processedCount} files`);
    console.log(`📁 Optimized images saved to: ${outputDir}`);
    
  } catch (error) {
    console.error('❌ Error during compression:', error);
  }
})();
