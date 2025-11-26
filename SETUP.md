# Portfolio Setup Guide

This guide will help you configure your portfolio with your personal information and social media links.

## Environment Variables Setup

Your sensitive data is now stored in environment variables for better security and easier configuration.

### Step 1: Configure Environment Variables

The file `.env.local` has been created with your current information. Update it with your actual details:

```bash
# Contact Information
NEXT_PUBLIC_CONTACT_EMAIL=davidmensah0605@gmail.com  # Your email
NEXT_PUBLIC_CONTACT_PHONE=+44 000 000 000             # Your phone number
NEXT_PUBLIC_CONTACT_ADDRESS=Code Corner, Tech Town 13579  # Your address

# Social Media Links (ADD YOUR ACTUAL URLs)
NEXT_PUBLIC_SOCIAL_GITHUB=https://github.com/yourusername
NEXT_PUBLIC_SOCIAL_LINKEDIN=https://linkedin.com/in/yourusername
NEXT_PUBLIC_SOCIAL_YOUTUBE=https://youtube.com/@yourusername
NEXT_PUBLIC_SOCIAL_TWITTER=https://twitter.com/yourusername

# Form Submission (optional)
# NEXT_PUBLIC_FORM_ENDPOINT=your-form-endpoint-url
```

### Step 2: Add Your Social Media URLs

Edit `.env.local` and replace the empty social media values with your actual profile URLs:

```bash
NEXT_PUBLIC_SOCIAL_GITHUB=https://github.com/YOUR_USERNAME
NEXT_PUBLIC_SOCIAL_LINKEDIN=https://linkedin.com/in/YOUR_USERNAME
NEXT_PUBLIC_SOCIAL_YOUTUBE=https://youtube.com/@YOUR_CHANNEL
NEXT_PUBLIC_SOCIAL_TWITTER=https://twitter.com/YOUR_HANDLE
```

**Note**: Social media icons will automatically hide if you leave any URL empty!

### Step 3: Set Up Contact Form (Optional)

Your contact form now has full validation and submission handling. To enable email delivery, you have several options:

#### Option A: Use Web3Forms (Recommended - Free)

1. Sign up at [web3forms.com](https://web3forms.com/)
2. Get your access key
3. Add to `.env.local`:
```bash
NEXT_PUBLIC_FORM_ENDPOINT=https://api.web3forms.com/submit
```
4. Update the form submission code in `app/contact/page.jsx` to include your access key

#### Option B: Use Formspree

1. Sign up at [formspree.io](https://formspree.io/)
2. Create a new form
3. Add the endpoint to `.env.local`:
```bash
NEXT_PUBLIC_FORM_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
```

#### Option C: Create Your Own API Route

Create `app/api/contact/route.js` and implement your email sending logic using services like:
- SendGrid
- Nodemailer
- Resend
- AWS SES

## What Changed?

### Phase 1 Changes (Performance & SEO)
✅ Removed build artifacts (.next/, .vercel/, .DS_Store)
✅ Added "use client" directive to Stairs.jsx
✅ Updated metadata for better SEO
✅ Added meaningful alt text to all images
✅ Extracted navigation links to shared constants

### Phase 2 Changes (Security & Functionality)
✅ Moved sensitive data to environment variables
✅ Updated Social component to use env vars and hide empty links
✅ Updated Contact page to use env vars
✅ Added full form validation with error messages
✅ Implemented form submission handler
✅ Added success/error feedback messages
✅ Added security attributes (target="_blank", rel="noopener noreferrer")

## Security Improvements

### Before:
- Email address hardcoded and exposed in source code
- Social links were empty and clickable (bad UX)
- Contact form had no validation or submission
- No environment variable protection

### After:
- All sensitive data in `.env.local` (not committed to git)
- Social links auto-hide when not configured
- Full form validation with real-time error feedback
- Form submission ready for backend integration
- Proper security attributes on external links

## File Structure

```
/Users/davidmensah/Downloads/luke-portfolio/
├── .env.local              # Your actual environment variables (NOT in git)
├── .env.local.example      # Template for others to copy
├── lib/
│   ├── constants.js        # Shared navigation links
│   └── utils.js            # Utilities
├── components/
│   ├── Social.jsx          # Now uses environment variables
│   └── ...
├── app/
│   ├── contact/
│   │   └── page.jsx        # Form with validation & submission
│   └── layout.jsx          # Updated metadata
└── SETUP.md                # This file
```

## Running the Project

1. **Development**:
```bash
npm run dev
```

2. **Build** (test production):
```bash
npm run build
npm start
```

3. **Deploy to Vercel**:
```bash
vercel --prod
```

**Important**: After updating `.env.local`, you need to restart the development server or rebuild for changes to take effect.

## Environment Variables on Vercel

When deploying to Vercel, you need to add your environment variables:

1. Go to your Vercel project dashboard
2. Navigate to Settings → Environment Variables
3. Add each variable from your `.env.local` file
4. Redeploy your project

## Testing the Form

With no endpoint configured, the form will:
- ✅ Validate all fields
- ✅ Show error messages for invalid input
- ✅ Log form data to console
- ✅ Show success message (simulated)
- ❌ NOT actually send emails

To actually send emails, configure `NEXT_PUBLIC_FORM_ENDPOINT` as described above.

## Troubleshooting

### Social icons not showing?
- Make sure you've added URLs to `.env.local`
- Restart the dev server after editing `.env.local`
- Check that URLs are complete (include https://)

### Environment variables not working?
- Make sure the file is named exactly `.env.local`
- Restart your dev server (`npm run dev`)
- For Vercel, add them in the dashboard

### Form not submitting?
- Check browser console for errors
- If using an endpoint, verify the URL is correct
- Make sure `NEXT_PUBLIC_FORM_ENDPOINT` is set in `.env.local`

## Next Steps

1. Update your social media URLs in `.env.local`
2. Choose a form submission service and configure it
3. Update personal information (resume, projects, services)
4. Replace placeholder images with your own
5. Test the contact form
6. Deploy to Vercel

## Support

For issues or questions:
- Check Next.js documentation: https://nextjs.org/docs
- Check environment variables guide: https://nextjs.org/docs/app/building-your-application/configuring/environment-variables
- Review the code comments in the files
