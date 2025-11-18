# Shaik Murad Portfolio Website

A modern, SEO-optimized portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. Features integrated analytics, contact forms, and smooth animations.

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Analytics**: Google Analytics & Microsoft Clarity
- **Email**: Brevo (SendinBlue) integration ready
- **Deployment**: Vercel

## 📋 Features

- ✅ SEO optimized with comprehensive metadata
- ✅ Fully responsive design
- ✅ Google Analytics integration
- ✅ Microsoft Clarity integration
- ✅ Contact form with Brevo email integration
- ✅ Book/Framework request forms
- ✅ Smooth scroll navigation
- ✅ Performance optimized
- ✅ Accessibility features
- ✅ Social media integration

## 🛠️ Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository or extract the project folder
2. Navigate to the project directory:
   ```bash
   cd shaik-murad-portfolio
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🔧 Configuration

### 1. Analytics Setup

#### Google Analytics
1. Get your GA4 Measurement ID from Google Analytics
2. Open `app/layout.tsx`
3. Replace `GA_MEASUREMENT_ID` with your actual ID (appears twice in the file)

#### Microsoft Clarity
1. Get your Clarity Project ID from [clarity.microsoft.com](https://clarity.microsoft.com)
2. Open `app/layout.tsx`
3. Replace `CLARITY_PROJECT_ID` with your actual ID

### 2. Brevo (Email) Integration

#### Setup Brevo Account
1. Sign up at [brevo.com](https://www.brevo.com)
2. Create an API key from your account settings
3. Create a `.env.local` file in the project root:
   ```bash
   BREVO_API_KEY=your_brevo_api_key_here
   ```

#### Enable Email Sending
1. Open `app/api/contact/route.ts`
2. Uncomment the Brevo API integration code (lines with `/*` and `*/`)
3. Open `app/api/book-request/route.ts`
4. Uncomment the Brevo API integration code

### 3. Environment Variables

Create a `.env.local` file:

```env
# Brevo API
BREVO_API_KEY=your_brevo_api_key

# Optional: Add these if needed
NEXT_PUBLIC_GA_ID=your_ga_measurement_id
NEXT_PUBLIC_CLARITY_ID=your_clarity_project_id
```

## 📦 Building for Production

```bash
npm run build
```

This creates an optimized production build in the `.next` folder.

To test the production build locally:
```bash
npm run start
```

## 🚀 Deploying to Vercel

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "Add New Project"
4. Import your repository
5. Configure environment variables:
   - Add `BREVO_API_KEY`
   - Add any other environment variables
6. Click "Deploy"

### Option 2: Deploy via Vercel CLI

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Deploy:
   ```bash
   vercel
   ```

4. For production deployment:
   ```bash
   vercel --prod
   ```

## 🌐 Domain Setup (shaikmurad.com)

### Connecting Your Domain to Vercel

1. Go to your Vercel project dashboard
2. Click on "Settings" → "Domains"
3. Add your domain: `shaikmurad.com`
4. Add www subdomain: `www.shaikmurad.com`
5. Vercel will provide DNS configuration instructions

### Update DNS Records

Go to your domain registrar (where you bought shaikmurad.com) and update DNS:

**For Apex Domain (shaikmurad.com):**
- Type: `A`
- Name: `@`
- Value: `76.76.21.21`

**For WWW Subdomain:**
- Type: `CNAME`
- Name: `www`
- Value: `cname.vercel-dns.com`

**Important**: DNS changes can take 24-48 hours to propagate.

### Migrating from Canva

1. First, deploy your new site to Vercel
2. Test it using the Vercel preview URL
3. Once satisfied, update DNS records as shown above
4. Your new site will replace the Canva site automatically

## 📁 Project Structure

```
shaik-murad-portfolio/
├── app/
│   ├── api/
│   │   ├── contact/          # Contact form API
│   │   └── book-request/     # Book request API
│   ├── components/           # React components
│   │   ├── Navigation.tsx
│   │   ├── Hero.tsx
│   │   ├── WorkShowcase.tsx
│   │   ├── EnablingBusinesses.tsx
│   │   ├── Experience.tsx
│   │   ├── BooksFrameworks.tsx
│   │   ├── Accolades.tsx
│   │   ├── Testimonials.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ClientsSection.tsx
│   │   ├── FeaturedReads.tsx
│   │   ├── ContactFooter.tsx
│   │   ├── ContactModal.tsx
│   │   └── BookRequestModal.tsx
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout with SEO
│   └── page.tsx              # Home page
├── public/                   # Static assets
├── .env.local               # Environment variables (create this)
├── next.config.js           # Next.js configuration
├── tailwind.config.js       # Tailwind configuration
├── package.json
└── README.md
```

## 🎨 Customization

### Adding Images

1. Add your images to the `public/images/` folder
2. Reference them in components like: `/images/your-image.jpg`

### Updating Content

All content is in the component files under `app/components/`. Edit these files to update:
- Text content
- Links
- Project details
- Testimonials
- Blog links

### Changing Colors

Update colors in `app/globals.css`:
```css
:root {
  --purple-primary: #5b3a8f;  /* Main purple */
  --red-accent: #e74c3c;       /* CTA buttons */
}
```

## 🔍 SEO Checklist

- ✅ Meta titles and descriptions configured
- ✅ Open Graph tags for social sharing
- ✅ Structured data ready
- ✅ Sitemap auto-generated by Next.js
- ✅ robots.txt configured
- ☐ Add Google Search Console verification code in `app/layout.tsx`
- ☐ Submit sitemap to Google Search Console after deployment

## 📱 Testing

### Local Testing
```bash
npm run dev
```

### Production Build Testing
```bash
npm run build
npm run start
```

### Check for Issues
```bash
npm run lint
```

## 🐛 Troubleshooting

### Forms not sending emails?
- Check that `BREVO_API_KEY` is set in `.env.local`
- Verify you uncommented the API code in route files
- Check Brevo dashboard for API usage

### Analytics not tracking?
- Replace placeholder IDs in `app/layout.tsx`
- Check browser console for errors
- Verify IDs are correct

### Build errors?
- Delete `.next` folder and `node_modules`
- Run `npm install` again
- Run `npm run build`

## 📞 Support

For issues or questions about deployment:
- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
- Brevo Docs: https://developers.brevo.com/

## 📄 License

This project is private and proprietary to Shaik Murad.

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
