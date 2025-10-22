# HNG Frontend Stage 1 - Multi-Page Application

A responsive, accessible multi-page web application built with vanilla HTML, CSS, and JavaScript for the HNG Frontend Stage 1 task. This project builds upon Stage 0 by adding Contact Us and About Me pages with form validation and enhanced navigation.

## 🚀 Live Demo

**Live URL:** [https://hng-frontend-stage-zero.vercel.app/](https://hng-frontend-stage-zero.vercel.app/)

## 📋 Stage 1 Task Requirements

This project fulfills all requirements for the HNG Frontend Stage 1 task:

### ✅ Contact Us Page Requirements

**Required Fields (with data-testid attributes):**

- **Full Name** — `data-testid="test-contact-name"`
- **Email** — `data-testid="test-contact-email"`
- **Subject** — `data-testid="test-contact-subject"`
- **Message** — `data-testid="test-contact-message"`
- **Submit Button** — `data-testid="test-contact-submit"`
- **Error Messages** — `data-testid="test-contact-error-<field>"`
- **Success Message** — `data-testid="test-contact-success"`

**Validation Rules:**

- ✅ All fields are required
- ✅ Email must be valid (name@example.com format)
- ✅ Message must be at least 10 characters
- ✅ Real-time validation with immediate feedback
- ✅ Success message shows after valid submission

**Accessibility Features:**

- ✅ All inputs have proper `<label>` elements linked with `for` attributes
- ✅ Error messages are tied to inputs with `aria-describedby`
- ✅ Full keyboard navigation support
- ✅ ARIA roles and live regions for screen readers

### ✅ About Me Page Requirements

**Required Sections (with data-testid attributes):**

- **Main Container** — `data-testid="test-about-page"`
- **Bio Section** — `data-testid="test-about-bio"`
- **Goals Section** — `data-testid="test-about-goals"`
- **Confidence Areas** — `data-testid="test-about-confidence"`
- **Future Note** — `data-testid="test-about-future-note"`
- **Extra Thoughts** — `data-testid="test-about-extra"`

**Semantic Structure:**

- ✅ Wrapped with `<main data-testid="test-about-page">`
- ✅ Uses `<section>` for each content area
- ✅ Proper headings (`<h2>`, `<h3>`) for clarity
- ✅ Semantic HTML throughout

### ✅ General Requirements

**Semantic HTML:**

- ✅ Proper use of `<main>`, `<section>`, `<nav>`, `<article>`
- ✅ Semantic form elements with proper labels
- ✅ Accessible navigation structure

**Accessibility:**

- ✅ Labels, alt text, and ARIA associations
- ✅ Keyboard navigation throughout
- ✅ Screen reader compatibility
- ✅ Focus management and visual indicators

**Responsive Design:**

- ✅ Mobile-first approach
- ✅ Professional mobile navigation with hamburger menu
- ✅ Responsive layouts for mobile, tablet, and desktop
- ✅ Touch-friendly interface elements

**Code Quality:**

- ✅ Modular, readable, and consistent code
- ✅ Clean separation of concerns
- ✅ Proper error handling and validation

## 🛠️ Technologies Used

- **HTML5**: Semantic markup with accessibility features
- **CSS3**: Modern styling with Flexbox, Grid, and animations
- **Vanilla JavaScript**: Form validation and mobile navigation
- **SVG Icons**: Professional social media icons
- **Progressive Enhancement**: Works without JavaScript

## 📁 Project Structure

```
hng-frontEnd-stage-zero/
├── index.html          # Home page (Stage 0 profile card)
├── about.html          # About Me page (Stage 1)
├── contact.html        # Contact Us page (Stage 1)
├── style.css           # All CSS styles
├── script.js           # Core JavaScript functionality
├── contact.js          # Contact form validation
├── package.json        # Project configuration
└── README.md           # Project documentation
```

## 🚀 Local Setup Instructions

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (recommended for form testing)

### Option 1: Simple File Opening

1. Clone or download this repository
2. Open `index.html` directly in your web browser
3. Navigate between pages using the navigation menu

### Option 2: Local Web Server (Recommended)

1. Clone the repository:

   ```bash
   git clone https://github.com/vincentonyenze/hng-frontend-stage-zero
   cd hng-frontend-stage-zero
   ```

2. Start a local server:

   **Using Python:**

   ```bash
   # Python 3
   python -m http.server 8000

   # Python 2
   python -m SimpleHTTPServer 8000
   ```

   **Using Node.js:**

   ```bash
   npx serve .
   ```

   **Using VS Code Live Server:**

   - Install the "Live Server" extension
   - Right-click on `index.html` and select "Open with Live Server"

3. Open your browser and navigate to `http://localhost:8000`

## 🧪 Testing

### Contact Form Testing

**Test the form validation:**

1. Try submitting empty form → Should show validation errors
2. Enter invalid email → Should show email format error
3. Enter message less than 10 characters → Should show length error
4. Fill all fields correctly → Should show success message

**Test accessibility:**

1. Navigate using Tab key → Should move through all form elements
2. Use screen reader → Should announce labels and errors properly
3. Test on mobile → Should work with touch and keyboard

### About Page Testing

**Verify all sections are present:**

- Bio section with personal information
- Goals section with program objectives
- Confidence areas with areas for improvement
- Future note with personal reflection
- Extra thoughts with additional insights

### Mobile Navigation Testing

**Test mobile menu:**

1. Resize browser to mobile width
2. Click hamburger menu → Should open navigation
3. Click menu items → Should navigate and close menu
4. Click outside menu → Should close menu
5. Press Escape key → Should close menu

## 🎨 Design Features

### Home Page (Stage 0)

- **Clean & Professional**: Modern card-based design
- **Real-time Updates**: Live timestamp display
- **Social Integration**: Professional social media links
- **Responsive Layout**: Adapts to all screen sizes

### Contact Page (Stage 1)

- **Form Validation**: Real-time validation with helpful error messages
- **User Feedback**: Loading states and success confirmation
- **Accessibility**: Full keyboard navigation and screen reader support
- **Professional Design**: Clean, modern form styling

### About Page (Stage 1)

- **Content-Rich**: Comprehensive personal and professional information
- **Well-Structured**: Clear sections with proper headings
- **Readable**: Good typography and spacing
- **Engaging**: Personal reflections and insights

### Navigation

- **Desktop**: Horizontal navigation bar with brand logo
- **Mobile**: Professional hamburger menu with smooth animations
- **Accessibility**: Full keyboard navigation and ARIA support

## 📱 Responsive Breakpoints

- **Desktop**: 768px and above - Full horizontal layout
- **Tablet**: 480px - 767px - Adapted layout with mobile navigation
- **Mobile**: Below 480px - Compact layout with hamburger menu

## 🔧 Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Key Features

### Form Validation

- Real-time validation with immediate feedback
- Custom validation rules for each field
- Accessible error messages with ARIA attributes
- Loading states and success confirmation

### Mobile Navigation

- Professional hamburger menu design
- Smooth CSS animations and transitions
- Touch-friendly interface
- Proper focus management

### Accessibility

- WCAG 2.1 AA compliant
- Screen reader compatibility
- Keyboard navigation support
- High contrast and focus indicators

### Performance

- Lightweight vanilla JavaScript
- Optimized CSS with efficient selectors
- No external dependencies
- Fast loading and smooth interactions

## 🧪 Automated Testing

All elements include `data-testid` attributes for automated testing:

### Contact Form Test IDs

- `test-contact-name` - Full name input
- `test-contact-email` - Email input
- `test-contact-subject` - Subject input
- `test-contact-message` - Message textarea
- `test-contact-submit` - Submit button
- `test-contact-error-<field>` - Error messages
- `test-contact-success` - Success message

### About Page Test IDs

- `test-about-page` - Main container
- `test-about-bio` - Bio section
- `test-about-goals` - Goals section
- `test-about-confidence` - Confidence areas
- `test-about-future-note` - Future note
- `test-about-extra` - Extra thoughts

## 👨‍💻 Author

**Vincent Onyenze**

- GitHub: [@vincentonyenze](https://github.com/vincentonyenze)
- LinkedIn: [vincentonyenze](https://linkedin.com/in/vincentonyenze)
- Portfolio: [vincentonyenze.vercel.app](https://vincentonyenze.vercel.app/)
- Twitter: [@onyenzevincent](https://x.com/onyenzevincent)

## 📄 License

This project is created for educational purposes as part of the HNG Frontend Stage 1 task.

## 🎯 Stage 1 Completion Checklist

- ✅ Contact Us page with form validation
- ✅ About Me page with all required sections
- ✅ Professional mobile navigation
- ✅ All required data-testid attributes
- ✅ Semantic HTML throughout
- ✅ Full accessibility compliance
- ✅ Responsive design for all devices
- ✅ Form validation with real-time feedback
- ✅ Success message after valid submission
- ✅ Keyboard navigation support
- ✅ Clean, modular, and maintainable code
