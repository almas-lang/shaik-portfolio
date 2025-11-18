# Quick Start Guide

Follow these simple steps to get your website running:

## 1. Open the Project in VS Code

1. Open VS Code
2. File → Open Folder
3. Select the `shaik-murad-portfolio` folder
4. Click "Open"

## 2. Install Dependencies

Open the integrated terminal in VS Code (Terminal → New Terminal) and run:

```bash
npm install
```

Wait for all packages to install (this may take a few minutes).

## 3. Run the Development Server

```bash
npm run dev
```

Open your browser and go to: http://localhost:3000

You should see your website running!

## 4. Making Changes

Edit any component file in the `app/components/` folder to update content. The website will automatically reload.

## 5. Next Steps

### Add Your Images
1. Create a folder: `public/images/`
2. Add your images there
3. Update image references in components

### Configure Analytics (Optional for now)
- Edit `app/layout.tsx`
- Replace `GA_MEASUREMENT_ID` with your Google Analytics ID
- Replace `CLARITY_PROJECT_ID` with your Microsoft Clarity ID

### Setup Contact Forms (Can do later)
- Sign up at brevo.com
- Get API key
- Create `.env.local` file with: `BREVO_API_KEY=your_key`
- Uncomment code in `app/api/contact/route.ts` and `app/api/book-request/route.ts`

## 6. Deploy to Vercel

### Push to GitHub First

1. Create a new repository on GitHub
2. In VS Code terminal:
   ```bash
   git remote add origin https://github.com/your-username/your-repo-name.git
   git branch -M main
   git push -u origin main
   ```

### Deploy on Vercel

1. Go to vercel.com and sign in with GitHub
2. Click "Add New Project"
3. Select your repository
4. Click "Deploy"

That's it! Your site will be live in minutes.

### Connect Your Domain

1. In Vercel dashboard → Settings → Domains
2. Add `shaikmurad.com`
3. Follow Vercel's DNS instructions
4. Update your domain's DNS records with your registrar

## Need Help?

Check the main README.md file for detailed instructions!

## Common Commands

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Run production build locally
npm run lint         # Check for code issues
```
