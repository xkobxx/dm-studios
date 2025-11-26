# 📧 Contact Form Setup Guide - Web3Forms

This guide will help you set up your contact form to actually send emails using Web3Forms (100% free, no credit card required).

---

## ✅ What You'll Need
- 5 minutes of your time
- Your email address
- Internet connection

---

## 🚀 Step-by-Step Setup

### **Step 1: Create Your Web3Forms Account**

1. **Open your browser** and go to:
   ```
   https://web3forms.com
   ```

2. **Click the blue button** that says **"Create Your Access Key"**

3. **Enter your email:**
   ```
   youremail@email.com
   ```

4. **Click "Get Started"**

5. **Check your email inbox** for a message from Web3Forms
   - Subject: "Verify your email address"
   - It should arrive within 1 minute

6. **Click the verification link** in the email
   - This will open a new page with your dashboard

7. **Copy your Access Key**
   - You'll see something like: `a1b2c3d4-e5f6-7890-abcd-ef1234567890`
   - Click the "Copy" button or select it and copy manually

---

### **Step 2: Add Your Access Key to the Project**

1. **Open your project folder** in VS Code:
   ```
   /location-of-your-project/project-folder/
   ```

2. **Find and open the file:** `.env.local`
   - It's in the root folder of your project
   - If you can't see it, enable "Show Hidden Files" (Cmd+Shift+. on Mac)

3. **Find this line:**
   ```bash
   # NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your-access-key-here
   ```

4. **Replace it with** (remove the # and paste YOUR access key):
   ```bash
   NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=a1b2c3d4-e5f6-7890-abcd-ef1234567890
   ```
   ⚠️ **Replace `a1b2c3d4-e5f6-7890-abcd-ef1234567890` with YOUR actual key!**

5. **Save the file** (Cmd+S or Ctrl+S)

---

### **Step 3: Restart Your Development Server**

**IMPORTANT:** Environment variables only load when the server starts!

1. **Stop your current dev server:**
   - Press `Ctrl+C` in the terminal where `npm run dev` is running

2. **Start it again:**
   ```bash
   npm run dev
   ```

3. **Wait for the message:**
   ```
   ✓ Ready in X seconds
   ```

---

### **Step 4: Test Your Form**

1. **Open your browser** and go to:
   ```
   http://localhost:3000/contact
   ```

2. **Fill out the form with test data:**
   - **First Name:** Test
   - **Last Name:** User
   - **Email:** your-test-email@gmail.com (use a real email you can check)
   - **Phone:** +44 123 456 7890
   - **Service:** Select any service
   - **Message:** This is a test message from my portfolio contact form.

3. **Click "Send message"**

4. **You should see:**
   - Button changes to "Sending..."
   - Green success message appears: "Thank you! Your message has been sent successfully."
   - Form clears automatically

5. **Check your email inbox** (youremail@email.com)
   - You should receive an email with the form data
   - Subject: "New Contact Form Submission from Test User"
   - Check spam folder if you don't see it within 2 minutes

---

## ✅ Verification Checklist

- [ ] Created Web3Forms account
- [ ] Verified email address
- [ ] Copied access key
- [ ] Added key to `.env.local`
- [ ] Restarted dev server
- [ ] Tested form submission
- [ ] Received email in inbox

---

## 🎯 What Happens When Someone Submits the Form?

1. **User fills out the contact form** on your website
2. **Form validates** all fields (name, email, phone, service, message)
3. **Data is sent to Web3Forms** API
4. **Web3Forms sends you an email** to: youremail@email.com
5. **User sees success message**
6. **You receive email** with all the form details

---

## 📧 What the Email Looks Like

**Subject:** New Contact Form Submission from [Name]

**Body:**
```
Name: John Doe
Email: john@example.com
Phone: +44 123 456 7890
Service: Web Development
Message: Hi, I'd like to discuss a project...
```

---

## 🔧 Troubleshooting

### **Form shows success but no email received?**

**Check these:**

1. **Is the access key correct?**
   - Open `.env.local`
   - Verify the key matches what's in your Web3Forms dashboard
   - No extra spaces or quotes

2. **Did you restart the dev server?**
   - Stop with Ctrl+C
   - Run `npm run dev` again

3. **Check spam/junk folder**
   - Sometimes emails go to spam initially

4. **Check Web3Forms dashboard**
   - Go to https://web3forms.com
   - Log in with your email
   - Check "Submissions" to see if it was received

5. **Browser console errors?**
   - Open DevTools (F12)
   - Go to Console tab
   - Look for red error messages
   - Send me a screenshot if you see errors

---

### **Form shows "error" message?**

**Try this:**

1. **Check internet connection**
   - Form needs internet to send data

2. **Check browser console:**
   ```bash
   # Press F12 in browser
   # Look at Console tab
   # Look for errors
   ```

3. **Verify environment variable loaded:**
   - Open browser console
   - Type: `process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`
   - It should show your access key (not undefined)

4. **Clear cache and reload:**
   - Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)

---

### **Warning in console about missing access key?**

```
⚠️ Web3Forms access key not configured
```

**This means:**
- Environment variable not set correctly
- You need to add it to `.env.local`
- Or you forgot to restart the dev server

**Fix:**
1. Add key to `.env.local`
2. Restart server
3. Refresh browser

---

## 🌐 Deploying to Vercel

When you deploy to production, you need to add the environment variable to Vercel:

1. **Go to your Vercel dashboard:**
   ```
   https://vercel.com/dashboard
   ```

2. **Select your project:** luke-portfolio

3. **Go to Settings → Environment Variables**

4. **Add new variable:**
   - **Name:** `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`
   - **Value:** [paste your access key]
   - **Environment:** Select all (Production, Preview, Development)

5. **Click "Save"**

6. **Redeploy your project:**
   ```bash
   vercel --prod
   ```

---

## 📊 Web3Forms Free Plan Limits

- ✅ **250 submissions per month** - Free
- ✅ **No credit card required**
- ✅ **Unlimited forms**
- ✅ **Email notifications**
- ✅ **Spam filtering included**
- ✅ **File uploads** (if needed later)

**Need more?** Upgrade to paid plan ($9/month for 1000 submissions)

---

## 🎨 Customizing Email Notifications

**Want to customize what you receive in emails?**

1. **Go to Web3Forms dashboard**
2. **Click on your form**
3. **Go to "Settings"**
4. **Customize:**
   - Email subject line
   - Reply-to address
   - Email format
   - Auto-responder to users

---

## 🔒 Security Features Included

- ✅ **reCAPTCHA** (can enable in dashboard)
- ✅ **Spam filtering** (automatic)
- ✅ **Rate limiting** (prevents abuse)
- ✅ **Email verification**
- ✅ **HTTPS encryption**

---

## 💡 Tips

1. **Test before going live:**
   - Always test with a real email you can check
   - Test all form fields
   - Test error validation

2. **Monitor submissions:**
   - Check Web3Forms dashboard regularly
   - You can see all submissions there

3. **Set up auto-responder:**
   - Send automatic "thank you" emails to form submitters
   - Configure in Web3Forms dashboard

4. **Enable reCAPTCHA:**
   - Prevents spam submissions
   - Can enable in Web3Forms dashboard settings

---

## 📞 Need Help?

If you encounter issues:

1. **Web3Forms Documentation:**
   - https://docs.web3forms.com

2. **Web3Forms Support:**
   - support@web3forms.com

3. **Check form submission logs:**
   - Web3Forms dashboard → Submissions

---

## 🎉 You're Done!

Your contact form is now fully functional and will send you emails at:
**youremail@email.com**

When visitors fill out your contact form, you'll receive an email with:
- Their name
- Their email
- Their phone number
- Service they're interested in
- Their message

You can then reply directly to their email!

---

## 📝 Quick Reference

**Your Settings:**
```bash
Email: youremail@email.com
Access Key: [in .env.local]
Endpoint: https://api.web3forms.com/submit
Monthly Limit: 250 submissions (free)
```

**File to edit:**
```
/your-project-location/.env.local
```

**Line to update:**
```bash
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your-access-key-here
```

**Restart command:**
```bash
# Stop server: Ctrl+C
# Start server:
npm run dev
```

**Test URL:**
```
http://localhost:3000/contact
```

---

Good luck! 🚀
