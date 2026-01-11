# Villa España - Booking Website

A modern, responsive booking website for a luxury villa in Spain.

## Features

- **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **Modern UI** - Clean, elegant design with smooth animations
- **Booking Form** - Complete booking request system with date validation
- **Gallery Section** - Showcase your villa with beautiful image gallery
- **Amenities Display** - Highlight all the features of your villa
- **Contact Information** - Easy ways for guests to reach you
- **Mobile Navigation** - Hamburger menu for mobile devices

## Setup Instructions

### 1. Quick Start
Simply open `index.html` in your web browser to view the website locally.

### 2. Customize Your Content

#### Update Villa Information
Edit `index.html` to customize:
- Villa name and description
- Bedroom count and capacity
- Amenities list
- Contact information
- Pricing

#### Add Your Photos
Replace the placeholder gradients in the gallery section with your actual villa photos:
```html
<div class="gallery-item" style="background: url('images/exterior.jpg') center/cover;">
```

#### Update Contact Details
In the contact section, update:
- Address
- Email addresses
- Phone numbers
- Add Google Maps embed

#### Customize Colors
Edit `styles.css` to change the color scheme:
```css
:root {
    --primary-color: #d4a574;  /* Change this to your preferred color */
    --secondary-color: #2c3e50;
    --accent-color: #e67e22;
}
```

### 3. Connect to Backend (Optional)

The booking form currently shows a success message. To connect to a real booking system:

1. Uncomment the `fetch` code in `script.js`
2. Update the API endpoint to your backend server
3. Set up a backend service to handle booking requests

Example backend technologies:
- Node.js + Express
- Python + Flask/Django
- PHP
- Cloud functions (AWS Lambda, Google Cloud Functions)

### 4. Add Real Map

Replace the map placeholder with Google Maps:

1. Get a Google Maps API key
2. Use the embed code:
```html
<iframe 
    src="https://www.google.com/maps/embed?pb=YOUR_EMBED_CODE"
    width="100%" 
    height="400" 
    style="border:0; border-radius: 15px;" 
    allowfullscreen="" 
    loading="lazy">
</iframe>
```

### 5. Deploy Your Website

#### Option 1: GitHub Pages (Free)
1. Push your code to GitHub
2. Go to Settings > Pages
3. Select main branch
4. Your site will be live at `yourusername.github.io/repository-name`

#### Option 2: Netlify (Free)
1. Create account at netlify.com
2. Drag and drop your folder
3. Get instant deployment

#### Option 3: Traditional Hosting
1. Purchase domain and hosting (GoDaddy, Bluehost, etc.)
2. Upload files via FTP
3. Point domain to your hosting

## File Structure

```
padel-checkin/
├── index.html          # Main HTML file
├── styles.css          # All styling
├── script.js           # Interactive functionality
└── README.md          # This file
```

## Customization Tips

### Adding More Sections
Copy any section from `index.html` and modify the content:
```html
<section class="your-section">
    <div class="container">
        <!-- Your content -->
    </div>
</section>
```

### Changing Fonts
Replace the Google Fonts link in `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont&display=swap" rel="stylesheet">
```

### Adding Payment Integration
Consider integrating:
- Stripe for credit card payments
- PayPal for alternative payments
- Booking.com API
- Airbnb integration

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## SEO Optimization

To improve search engine visibility:

1. Add meta tags in `<head>`:
```html
<meta name="description" content="Luxury villa rental in Spain with pool, sea views, and modern amenities">
<meta name="keywords" content="villa, spain, rental, vacation, luxury">
```

2. Add Open Graph tags for social sharing:
```html
<meta property="og:title" content="Villa España - Luxury Rental">
<meta property="og:description" content="Your dream villa in Spain">
<meta property="og:image" content="images/villa-main.jpg">
```

3. Add structured data for Google:
```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  "name": "Villa España",
  "description": "Luxury villa rental in Spain"
}
</script>
```

## Support & Maintenance

### Regular Updates
- Update pricing seasonally
- Add new photos regularly
- Update availability calendar
- Respond to booking requests promptly

### Security
- Use HTTPS (SSL certificate)
- Validate all form inputs on server-side
- Protect against spam with reCAPTCHA
- Keep contact information current

## License

This template is free to use for your personal villa rental business.

## Questions?

Feel free to customize this website to match your villa's unique character and amenities!
