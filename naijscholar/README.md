# NaijaScholar 🎓🇳🇬

**Find scholarships available to Nigerian students — local and international.**

A free, fast, easy-to-use scholarship finder built by a Nigerian student, for Nigerian students.

---

## Pages

| Page | File | Description |
|------|------|-------------|
| Home | `index.html` | Search & filter scholarships |
| About | `about.html` | Story behind NaijaScholar |
| Submit | `submit.html` | Let users add new scholarships |

## File Structure

```
naijscholar/
├── index.html          ← Main scholarship finder
├── about.html          ← About page
├── submit.html         ← Submit a scholarship form
├── css/
│   └── style.css       ← All styles
├── js/
│   ├── data.js         ← Scholarship data (add more here!)
│   └── app.js          ← Search, filter, countdown logic
└── README.md
```

---

## How to Deploy on GitHub Pages (Free Hosting)

### Step 1 — Create a GitHub account
Go to https://github.com and sign up (free).

### Step 2 — Create a new repository
- Click the **+** button → **New repository**
- Name it: `naijscholar` (or anything you like)
- Set it to **Public**
- Click **Create repository**

### Step 3 — Upload your files
- Click **uploading an existing file**
- Drag and drop ALL your project files and folders
- Click **Commit changes**

### Step 4 — Enable GitHub Pages
- Go to your repository **Settings**
- Scroll to **Pages** in the left sidebar
- Under **Source**, select **Deploy from a branch**
- Choose **main** branch, **/ (root)** folder
- Click **Save**

### Step 5 — Your site is live!
After 1-2 minutes, your site will be live at:
```
https://YOUR-GITHUB-USERNAME.github.io/naijscholar/
```

---

## How to Add More Scholarships

Open `js/data.js` and add a new object to the array:

```javascript
{
  id: 13,                              // unique number
  title: "Scholarship Name",
  org: "Organization Name",
  country: "Nigeria",                  // Nigeria, USA, UK, Canada, Global
  level: "undergraduate",             // undergraduate or postgraduate
  field: "STEM",                      // STEM, Medicine, Business, Law, Arts, Any
  funding: "Full",                    // Full or Partial
  amount: "₦500,000/yr",
  deadline: "Dec 1, 2026",
  urgent: false,                      // true = shows red warning
  link: "https://example.com/apply",
  description: "Brief description of the scholarship."
}
```

---

## Future Features to Build
- [ ] Email deadline reminders
- [ ] Save/bookmark scholarships (localStorage)
- [ ] User accounts and profiles
- [ ] Scholarship success stories
- [ ] Mobile app version

---

## MIT Application Tip
This project demonstrates:
- **Invention** — built a solution to a real problem
- **Community impact** — helping Nigerian students
- **Technical skills** — HTML, CSS, JavaScript
- **Entrepreneurial thinking** — scalable platform

---

Built with 💚 by a Nigerian student who wants to invent, create, and help.
