# Deployment Checklist

Use this checklist to ensure everything is ready before and after deployment.

## Pre-Deployment Checklist

### ✅ Content & Images
- [ ] Add all images to `public/images/` folder
- [ ] Verify all text content is accurate
- [ ] Check all external links are working
- [ ] Test all social media links

### ✅ Configuration
- [ ] Replace `GA_MEASUREMENT_ID` in `app/layout.tsx` (or do after deployment)
- [ ] Replace `CLARITY_PROJECT_ID` in `app/layout.tsx` (or do after deployment)
- [ ] Update Google Search Console verification code in `app/layout.tsx` (optional)
- [ ] Create `.env.local` with Brevo API key (or do after deployment)

### ✅ Testing
- [ ] Run `npm run dev` and test locally
- [ ] Check responsiveness on mobile/tablet/desktop
- [ ] Test all navigation links
- [ ] Test contact form (will log to console until Brevo is configured)
- [ ] Test book request forms
- [ ] Check for any console errors

### ✅ Build
- [ ] Run `npm run build` successfully
- [ ] No TypeScript errors
- [ ] No build warnings

### ✅ Git & GitHub
- [ ] Create GitHub repository
- [ ] Commit all changes: `git add .` and `git commit -m "Initial commit"`
- [ ] Push to GitHub: `git push -u origin main`

## Deployment Steps

### 1. Deploy to Vercel
- [ ] Go to [vercel.com](https://vercel.com)
- [ ] Sign in with GitHub
- [ ] Click "Add New Project"
- [ ] Import your repository
- [ ] Configure environment variables (if ready):
  - [ ] Add `BREVO_API_KEY`
- [ ] Click "Deploy"
- [ ] Wait for deployment to complete

### 2. Verify Deployment
- [ ] Visit the Vercel preview URL
- [ ] Test all pages and sections
- [ ] Test on mobile device
- [ ] Check all links work
- [ ] Verify forms display correctly

### 3. Domain Setup
- [ ] Go to Vercel project → Settings → Domains
- [ ] Add domain: `shaikmurad.com`
- [ ] Add domain: `www.shaikmurad.com`
- [ ] Note the DNS configuration instructions

### 4. Update DNS Records
Go to your domain registrar and update:

**A Record (Apex Domain):**
- [ ] Type: A
- [ ] Name: @
- [ ] Value: 76.76.21.21
- [ ] TTL: Auto or 3600

**CNAME Record (WWW):**
- [ ] Type: CNAME
- [ ] Name: www
- [ ] Value: cname.vercel-dns.com
- [ ] TTL: Auto or 3600

- [ ] Save DNS changes
- [ ] Wait for DNS propagation (24-48 hours)

## Post-Deployment Checklist

### ✅ Domain Verification
- [ ] Visit shaikmurad.com (after DNS propagation)
- [ ] Visit www.shaikmurad.com
- [ ] Verify SSL certificate is active (https://)
- [ ] Check site loads correctly

### ✅ Analytics Setup
- [ ] Verify Google Analytics is tracking (check Real-Time reports)
- [ ] Verify Microsoft Clarity is recording sessions
- [ ] Test event tracking (form submissions, link clicks)

### ✅ SEO Configuration
- [ ] Submit sitemap to Google Search Console
  - URL: `https://shaikmurad.com/sitemap.xml`
- [ ] Verify site ownership in Google Search Console
- [ ] Check Open Graph tags (share on social media)
- [ ] Test with Google's Rich Results Test
- [ ] Verify mobile-friendliness

### ✅ Email Integration (Brevo)
- [ ] Sign up for Brevo account
- [ ] Get API key from Brevo dashboard
- [ ] Add `BREVO_API_KEY` to Vercel environment variables
- [ ] Uncomment API code in:
  - [ ] `app/api/contact/route.ts`
  - [ ] `app/api/book-request/route.ts`
- [ ] Redeploy from Vercel dashboard
- [ ] Test contact form submission
- [ ] Test book request form
- [ ] Verify emails are received

### ✅ Performance Checks
- [ ] Run [PageSpeed Insights](https://pagespeed.web.dev/)
- [ ] Check Core Web Vitals
- [ ] Test loading speed
- [ ] Verify images are optimized

### ✅ Final Testing
- [ ] Test all navigation
- [ ] Test all external links
- [ ] Test on different browsers (Chrome, Safari, Firefox)
- [ ] Test on mobile devices
- [ ] Test tablet view
- [ ] Check contact form
- [ ] Check book request forms

## Ongoing Maintenance

### Weekly
- [ ] Check analytics for traffic
- [ ] Review contact form submissions
- [ ] Check for any errors in Vercel logs

### Monthly
- [ ] Update dependencies: `npm update`
- [ ] Review and update content
- [ ] Check for broken links
- [ ] Review analytics insights

### As Needed
- [ ] Add new projects to Work Showcase
- [ ] Add new blog posts to Featured Reads
- [ ] Update testimonials
- [ ] Update client list

## Troubleshooting

### Site Not Loading?
- Check DNS settings
- Wait 24-48 hours for DNS propagation
- Verify Vercel deployment succeeded
- Check Vercel logs for errors

### Forms Not Working?
- Verify Brevo API key is set
- Check API code is uncommented
- Review Vercel function logs
- Test with browser console open

### Analytics Not Tracking?
- Verify IDs are correct
- Check browser ad-blockers are disabled
- Wait 24 hours for data to appear
- Check Real-Time reports in GA

### Images Not Showing?
- Verify images are in `public/images/`
- Check file names match exactly
- Ensure images are not too large
- Check browser console for errors

## Support Resources

- **Vercel Docs**: https://vercel.com/docs
- **Next.js Docs**: https://nextjs.org/docs
- **Brevo Support**: https://help.brevo.com/
- **Google Analytics**: https://support.google.com/analytics
- **Microsoft Clarity**: https://learn.microsoft.com/en-us/clarity/

## Deployment Complete! 🎉

Once all checkboxes are marked, your website is fully deployed and operational!

**Live URL**: https://shaikmurad.com

---

Last Updated: November 14, 2025
