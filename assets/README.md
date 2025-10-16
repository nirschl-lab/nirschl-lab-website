# Assets Folder

This folder contains images and other assets for the Nirschl Lab website.

## Adding the Banner Image

To use your custom computational neuropathology banner image:

1. **Save your banner image** as `nirschl-lab-banner.jpg` in this folder
2. **Recommended specifications:**
   - Format: JPG or PNG
   - Resolution: 1920x1080 or higher
   - Aspect ratio: 16:9 or similar
   - File size: Under 2MB for optimal loading

3. **Image requirements:**
   - The image should work well with a red color overlay
   - High contrast elements will show through better
   - The image will be used as a background, so text readability is important

## Current Banner

The website is configured to use `/assets/nirschl-lab-banner.jpg` as the hero section background. If this file is not found, the website will fall back to a procedurally generated SVG pattern.

## Adding Team Photos

Team member photos should be placed in this folder and referenced in the `src/components/Team.js` file. Recommended specifications:

- Format: JPG or PNG
- Resolution: 300x300 pixels (square)
- File size: Under 500KB each

## File Structure

```
public/assets/
├── README.md
├── nirschl-lab-banner.jpg (your banner image)
├── team-photos/
│   ├── jeff-nirschl.jpg
│   └── (other team member photos)
└── (other assets)
```

## Usage Notes

- All files in the `public` folder are served statically
- Reference assets in components using `/assets/filename.ext`
- Optimize images for web to ensure fast loading times
- Consider using WebP format for better compression (if browser support allows) 