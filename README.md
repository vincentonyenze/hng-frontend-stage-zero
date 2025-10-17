# Profile Card - HNG Frontend Stage 0

A responsive, accessible profile card component built with vanilla HTML, CSS, and JavaScript for the HNG Frontend Stage 0 task.

## 🚀 Live Demo

**Live URL:** [https://hng-frontend-stage-zero.vercel.app/](https://hng-frontend-stage-zero.vercel.app/)

## 📋 Task Requirements

This project fulfills all requirements for the HNG Frontend Stage 0 task:

### ✅ Required Elements (with data-testid attributes)

- **Profile card root container** — `data-testid="test-profile-card"`
- **Name** — `data-testid="test-user-name"`
- **Short biography** — `data-testid="test-user-bio"`
- **Current time (in milliseconds)** — `data-testid="test-user-time"`
- **Avatar image** — `data-testid="test-user-avatar"`
- **Social links list** — `data-testid="test-user-social-links"`
  - Individual social links with `data-testid="test-user-social-<network>"`
- **Hobbies list** — `data-testid="test-user-hobbies"`
- **Dislikes list** — `data-testid="test-user-dislikes"`

### ✅ Technical Requirements

- **Semantic HTML**: Uses `<article>`, `<header>`, `<figure>`, `<nav>`, `<section>` elements
- **Accessibility**: Proper ARIA labels, keyboard navigation, focus states
- **Responsive Design**: Works on mobile, tablet, and desktop
- **Modern CSS**: Flexbox and Grid layouts
- **Real-time Updates**: Time display updates every second

## 🛠️ Technologies Used

- **HTML5**: Semantic markup with accessibility features
- **CSS3**: Modern styling with Flexbox and Grid
- **Vanilla JavaScript**: Time display functionality
- **SVG Icons**: Professional social media icons

## 📁 Project Structure

```
hng-frontEnd-stage-zero/
├── index.html          # Main HTML file
├── style.css           # All CSS styles
├── script.js           # JavaScript functionality
└── README.md           # Project documentation
```

## 🚀 Local Setup Instructions

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional but recommended)

### Option 1: Simple File Opening

1. Clone or download this repository
2. Open `index.html` directly in your web browser
3. The profile card should display with all functionality working

### Option 2: Local Web Server (Recommended)

1. Clone the repository:

   ```bash
   git clone https://github.com/vincentonyenze/hng-frontend-stage-zero
   cd hng-frontend-stage-zero
   ```

2. Start a local server using one of these methods:

   **Using Python:**

   ```bash
   # Python 3
   python -m http.server 8000

   # Python 2
   python -m SimpleHTTPServer 8000
   ```

   **Using Node.js (if you have it installed):**

   ```bash
   npx serve .
   ```

   **Using VS Code Live Server extension:**

   - Install the "Live Server" extension
   - Right-click on `index.html` and select "Open with Live Server"

3. Open your browser and navigate to `http://localhost:8000`

## 🧪 Testing

### Automated Testing

All elements include `data-testid` attributes for automated testing:

- `test-profile-card` - Main container
- `test-user-name` - User's name
- `test-user-bio` - Biography paragraph
- `test-user-time` - Current timestamp
- `test-user-avatar` - Profile image
- `test-user-social-links` - Social media container
- `test-user-social-<network>` - Individual social links
- `test-user-hobbies` - Hobbies list
- `test-user-dislikes` - Dislikes list

### Manual Testing Checklist

- [ ] All required elements are present and visible
- [ ] Time display shows current milliseconds and updates
- [ ] Social links open in new tabs with proper security attributes
- [ ] Responsive design works on different screen sizes
- [ ] Keyboard navigation works (Tab key)
- [ ] Focus states are visible
- [ ] All images load properly
- [ ] No console errors

## 🎨 Design Features

- **Clean & Professional**: Simple black and white design
- **Responsive**: Adapts to mobile, tablet, and desktop screens
- **Accessible**: Screen reader friendly with proper ARIA labels
- **Modern Icons**: Professional SVG social media icons
- **Real-time**: Live timestamp updates

## 📱 Responsive Breakpoints

- **Desktop**: 768px and above - Side-by-side layout
- **Tablet**: 480px - 767px - Stacked layout with larger elements
- **Mobile**: Below 480px - Compact layout with smaller elements

## 🔧 Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 📝 Notes

- The time display uses `Date.now()` to show milliseconds since epoch
- All social links include `rel="noopener noreferrer"` for security
- The design follows modern web accessibility guidelines
- No external dependencies or frameworks used

## 👨‍💻 Author

**Vincent Onyenze**

- GitHub: [@vincentonyenze](https://github.com/vincentonyenze)
- LinkedIn: [vincentonyenze](https://linkedin.com/in/vincentonyenze)
- Portfolio: [vincentonyenze.vercel.app](https://vincentonyenze.vercel.app/)

## 📄 License

This project is created for educational purposes as part of the HNG Frontend Stage 0 task.
