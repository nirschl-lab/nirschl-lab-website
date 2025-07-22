# Nirschl Lab Website

A professional website for the Nirschl Lab at University of Wisconsin-Madison, specializing in computational neuropathology.

## Quick Start

1. **Install Node.js** (version 16 or higher)
2. **Clone and setup:**
```bash
git clone <repository-url>
cd nirschl-lab-website
npm install
```

3. **Start the website:**
```bash
npm start
```
The site will open at [http://localhost:3000](http://localhost:3000)

4. **Build for production:**
```bash
npm run build
```

## File Structure

```
src/
├── components/
│   ├── Header.js          # Navigation menu
│   ├── Hero.js            # Main banner section
│   ├── About.js           # Lab description
│   ├── Research.js        # Research areas
│   ├── Publications.js    # Paper list
│   ├── Team.js            # Lab members
│   ├── Contact.js         # Contact form and info
│   └── Footer.js          # Footer links
├── App.js                 # Main website structure
├── App.css                # All styling and colors
└── index.css              # Global styles

public/
└── assets/
    ├── jeff_headshoot.jpg     # Profile photo
    └── nirschl-lab-banner.jpg # Hero background (optional)
```

## How to Update Content

### 📝 **Change Lab Description**
**File:** `src/components/About.js`
**Look for:** `<p>` tags with lab description text

### 🔬 **Update Research Areas**
**File:** `src/components/Research.js`
**Look for:** `researchAreas` array
**Edit:** `title` and `description` fields

### 📚 **Add/Edit Publications**
**File:** `src/components/Publications.js`
**Look for:** `publications` array
**Add new papers:** Copy existing format and update details

### 👥 **Update Team Information**
**File:** `src/components/Team.js`
**Edit:** Dr. Nirschl's bio in the `<p>` tags
**Add members:** Copy the team member structure

### 📧 **Change Contact Information**
**File:** `src/components/Contact.js`
**Look for:** Address, email, phone in the contact info section

### 🎨 **Update Images**
- **Profile photo:** Replace `public/assets/jeff_headshoot.jpg`
- **Banner image:** Add `public/assets/nirschl-lab-banner.jpg`
- **Image requirements:** JPG/PNG, under 2MB

### 🔗 **Update Links**
**LinkedIn/Google Scholar:** In `src/components/Team.js`, find the `<motion.a>` tags
**Email addresses:** Search for `jjnirschl@wisc.edu` in files to update

## Contact Form Setup (Optional)

The contact form is ready but needs a service to send emails:

1. **Go to:** [https://formspree.io](https://formspree.io)
2. **Create account** and new form
3. **Set recipient:** jjnirschl@wisc.edu
4. **Get form ID** and replace `YOUR_FORM_ID` in `src/components/Contact.js`

## Colors and Styling

The site uses UW Madison official colors. To change colors, edit `src/index.css`:

```css
:root {
  --uw-red: #c5050c;      /* Main red color */
  --uw-blue: #0479a8;     /* Secondary blue */
  --uw-cream: #f7f3e7;    /* Background color */
}
```

## Troubleshooting

**Site won't start:** Delete `node_modules` folder and run `npm install` again
**Images not showing:** Check file names match exactly (case-sensitive)
**Contact form not working:** Follow the Formspree setup above