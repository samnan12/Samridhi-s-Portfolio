# Samridhi Nandwani - Portfolio Website

A dynamic, animated portfolio website built with Next.js, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Fully responsive across all devices
- **Interactive**: Engaging hover effects and micro-interactions
- **Performance**: Optimized with Next.js for fast loading
- **Accessible**: Built with accessibility best practices
- **SEO Optimized**: Proper meta tags and structured data

## 🛠 Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions
- **Lucide React** - Beautiful icons
- **Google Fonts** - Poppins, Inter, and Clash Display

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── projects/          # Projects pages
│   │   └── [id]/         # Dynamic project pages
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── Button.tsx         # Custom button component
│   ├── Footer.tsx         # Site footer
│   └── Header.tsx         # Site header
├── data/                  # Data and content
│   └── portfolio.ts       # Portfolio data
└── lib/                   # Utility functions
```

## 🎨 Design System

### Colors
- **Primary**: #1E1E1E (Charcoal Black)
- **Secondary**: #F5F5F5 (Soft White)
- **Accent**: #6C63FF (Vibrant Purple)
- **Muted**: #A0A0A0 (Secondary Text)

### Typography
- **Headings**: Poppins (Bold, Modern)
- **Body**: Inter (Legible, Minimal)
- **Display**: Clash Display (Premium Feel)

### Components
- Rounded corners (2xl)
- Generous white space
- Smooth transitions
- Hover animations

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📱 Pages

### Home Page (`/`)
- Hero section with introduction
- Featured projects grid
- About preview section

### Projects (`/projects`)
- All projects overview
- Project filtering and search
- Interactive project cards

### Individual Project (`/projects/[id]`)
- Detailed project information
- Process, challenges, and results
- Project images and links

### About (`/about`)
- Personal story and philosophy
- Skills and expertise
- Experience timeline
- Values and principles

### Contact (`/contact`)
- Contact form with validation
- Contact information
- FAQ section

## 🎭 Animations

The website features smooth animations powered by Framer Motion:

- **Page Transitions**: Fade and slide effects
- **Hover Effects**: Scale and shadow animations
- **Scroll Animations**: Elements animate into view
- **Micro-interactions**: Button and card hover states
- **Loading States**: Form submission feedback

## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for speed
- **Image Optimization**: Next.js Image component
- **Code Splitting**: Automatic route-based splitting
- **Font Optimization**: Google Fonts with display swap

## 🔧 Customization

### Adding New Projects

1. Edit `src/data/portfolio.ts`
2. Add new project object to the `projects` array
3. Set `featured: true` for homepage display

### Updating Content

- **About Info**: Edit `aboutInfo` in `src/data/portfolio.ts`
- **Contact Info**: Update contact details in `src/app/contact/page.tsx`
- **Styling**: Modify `tailwind.config.ts` for design system changes

### Adding New Pages

1. Create new directory in `src/app/`
2. Add `page.tsx` file
3. Update navigation in `src/components/Header.tsx`

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Other Platforms
- **Netlify**: Build command: `npm run build`
- **AWS Amplify**: Framework: Next.js
- **Railway**: Automatic detection

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

**Samridhi Nandwani**
- Email: samridhi@example.com
- LinkedIn: [linkedin.com/in/samridhi-nandwani](https://linkedin.com/in/samridhi-nandwani)
- Portfolio: [samridhi.framer.ai](https://samridhi.framer.ai)

---

Built with ❤️ using Next.js, Tailwind CSS, and Framer Motion