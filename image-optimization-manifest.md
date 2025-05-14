# Image Optimization Manifest for Portfolio

## Local Images to Optimize

### 1. Profile Image (Home)
- **Original:** /public/profile.jpg
- **Optimized Versions:**
  - /public/profile-384.webp (384x384)
  - /public/profile-768.webp (768x768)
  - /public/profile-384.jpg (fallback)
  - /public/profile-768.jpg (fallback)

### 2. Profile Hiking Image (About)
- **Original:** /public/profile-hiking.jpg
- **Optimized Versions:**
  - /public/profile-hiking-256.webp (256px height, width proportional)
  - /public/profile-hiking-512.webp (512px height, width proportional)
  - /public/profile-hiking-256.jpg (fallback)
  - /public/profile-hiking-512.jpg (fallback)

### 3. Testimonial Images (Projects)
- **Originals:** (Please confirm actual filenames/locations)
  - /public/assets/rabelani.png
  - /public/assets/keamogetsi.png
- **Optimized Versions (for each):**
  - /public/assets/rabelani-64.webp (64x64)
  - /public/assets/rabelani-128.webp (128x128)
  - /public/assets/rabelani-64.png (fallback)
  - /public/assets/rabelani-128.png (fallback)
  - /public/assets/keamogetsi-64.webp (64x64)
  - /public/assets/keamogetsi-128.webp (128x128)
  - /public/assets/keamogetsi-64.png (fallback)
  - /public/assets/keamogetsi-128.png (fallback)

### 4. Icons (if used as images)
- /public/myicon4pro.png
- /public/myicon4pro2.png
  - Consider WebP conversion and size reduction if used in `<img>` tags.

## Unsplash Images (Code Only)
- No local assets to generate. Optimize via `w=` and `q=` parameters in URLs and use `srcSet` in code.

---

**Instructions:**
- Use Squoosh, TinyPNG/JPG, or cwebp to generate the above variants.
- Place all optimized images in the respective directories.
- Confirm testimonial PNGs are present or provide them if missing.

---

## Next Steps
- Refactor code to use these optimized assets with responsive `<picture>` and `<img>` markup.
- Add `loading="lazy"`, `width`, and `height` as per best practices.

---

**Please confirm testimonial image filenames and if any other local images should be included.**
