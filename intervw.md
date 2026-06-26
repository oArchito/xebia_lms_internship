 1. CSS & Bundler Configurations
index.css
What it contains:
Google Poppins font imports (@import url(...)).
Core @import "tailwindcss".
Brand custom color declarations (primary-600 for Tranquil Velvet, accent-500 for Emerald Teal, etc.) nested in Tailwind's @theme directive.
Reset rules for the html/body height and custom-themed scrollbars.
What you did:
Scrapped Vite's default CSS configurations and wrote the design theme variables directly to match the color palette mockup.
How you built it:
Declared raw hex variables within @theme (e.g., --color-primary-600: #6C1D5F;). Tailwind v4 automatically maps this to utility classes like text-primary-600 and bg-primary-600.
Standardized the body to use font-sans and set its default background to var(--color-bg-base) (#F7F8FC) so that every page loads on the same base background.
vite.config.js
What it contains:
React compiler plugin (@vitejs/plugin-react) and Tailwind CSS v4 compiler plugin (@tailwindcss/vite).
What you did:
Modified the default configuration to register Tailwind CSS v4 as a native bundler compiler plugin.
How you built it:
Imported tailwindcss from @tailwindcss/vite and appended it to the plugins array. This triggers CSS compiling during development and packaging.
🧱 2. Common Reusable Controls (src/components/common/)
Input.jsx
What it contains:
A flexible form-control layout supporting text areas, dynamic validation error spans, and screen-reader ARIA states.
What you did:
Created a component that outputs two styling styles: nested (used in Login Card) and outline (used in Contact Card) based on a layout variant prop.
How you built it:
Passed a variant prop. If variant === "nested", it wraps a <label> (capitalized/lowercase font) and an <input> (no border, transparent background) inside a gray block container (bg-gray-100 px-4 py-2).
If variant === "outline", it puts a bold header-label above, and renders a rectangular field with a border (border-gray-400).
Conditioned the input tag: if type === "textarea", it renders a <textarea> with dynamic row settings, else it renders a standard <input>.
Button.jsx
What it contains:
Button visual variants (primary, outline, accent for Teal, danger), loading spinners, and Framer Motion wrappers.
What you did:
Configured brand-purple gradients and teal accents, using custom spring animations for click interactions.
How you built it:
Wrapped the HTML button in <motion.button>. Added whileHover={{ scale: 1.03 }} and whileTap={{ scale: 0.98 }} to create instant responsive feedback.
Mapped visual styles using a dictionary lookup class configuration (e.g. variants[variant]). If isLoading is true, it overrides the children to render a SVG spinning wheel next to the text.
Card.jsx
What it contains:
Layout container with customizable shadows, borders, and spring animations on hover.
What you did:
Replaced the complex default CSS hover transitions with Framer Motion spring animations to create a lift-up feel.
How you built it:
Built using <motion.div>. Used a spring transition curve (stiffness: 300, damping: 20) to translate the card upwards (y: -8) and adjust shadows upon hover.
SearchBar.jsx
What it contains:
Search input text field, magnifying glass search icons, and a search submission action.
What you did:
Built a layout combining the search field with a square brand-purple button attached on the right.
How you built it:
Laid out a flexbox row (flex w-full). The input container is positioned relatively with an absolute positioning icon (absolute left-4).
The search button is rendered as a child of the flexbox container with a left border-radius of zero (border-l-0 bg-primary-600 rounded-none).
🧭 3. Layouts & Header Navigation
MainLayout.jsx
What it contains:
Persistent layout layout wrapping the <Navbar />, the routing <Outlet /> element, and the <Footer />.
What you did:
Organized routing so that the Landing, FAQ, and Contact pages share the exact same persistent Header/Footer, while Login remains standalone.
How you built it:
Constructed a flex columns wrapper (flex flex-col min-h-screen). The main tag uses flex-grow to push the footer to the bottom of shorter pages.
Navbar.jsx
What it contains:
Responsive layout aligning Logo (left), Search (center), and nav links + Login CTA (right). Includes mobile slide-out transitions.
What you did:
Set a solid background with a bottom border, positioned the search input directly in the center, and styled the Login CTA button with sharp corners.
How you built it:
Built using a flexbox container (flex items-center justify-between gap-4).
Rendered the desktop links by nesting the <NavLinks /> component, and handled mobile drawers using <AnimatePresence> for slide-down heights.
NavItem.jsx
What it contains:
A text link that monitors active paths and applies styling custom states.
What you did:
Simplified the navigation link design. Swapped previous rounded blocks for plain text links that display a simple primary purple underline when active.
How you built it:
Used React Router's <NavLink> component. Passed a callback function to the className prop that checks the isActive parameter to toggle underline classes.
SearchInput.jsx
What it contains:
Text input with submission listeners.
What you did:
Centered the input text and placeholder, removed border radii, and added redirect logic to navigate to the FAQ page.
How you built it:
Created a form with w-full text-center border-gray-400 rounded-none.
Upon form submit, we prevent the default page refresh and call React Router's useNavigate hook to redirect users to /faq?q=searchterm.
🎨 4. Landing Page
Landing.jsx
What it contains:
Imports dynamic data from landing.json, loads the <Hero /> layout, and maps out the feature grid.
What you did:
Configured dynamic icon rendering based on configuration strings (e.g. mapping "FaAward" directly to <FaAward />).
How you built it:
Imported the react-icons/fa directory under a wildcard namespace (import * as FaIcons from 'react-icons/fa').
Created a dynamic mapper function:
javascript


const renderIcon = (name) => {
  const IconComponent = FaIcons[name];
  return IconComponent ? <IconComponent /> : null;
};
🔐 5. Login Page Components (src/components/auth/ & src/pages/)
Login.jsx
What it contains:
Split-screen container view, back-to-home navigation button, and hero texts.
What you did:
Styled the left column with a solid soft lavender background (bg-[#E2D5FC]) and applied alternating white/purple styling to the header words.
How you built it:
Created a split screen (flex flex-col lg:flex-row min-h-screen).
Placed the <HeroImage /> mockup at the bottom of the left column, and centered <LoginCard /> in the right column.
LoginCard.jsx
What it contains:
Welcoming tags, the Login Form, social buttons, and signup redirects.
What you did:
Centered the Xebia brand logo inside the card at the top, removed card rounded corners, and simplified the margins.
How you built it:
Placed a bold text logo at the top, followed by the <LoginForm />, an "OR" divider, and the <GoogleButton />.
LoginForm.jsx
What it contains:
Input state handlers, email validations, and submission loaders.
What you did:
Removed the remember-me checkbox and password recovery links to simplify the UI. Made the login button rectangular and styled it with a brand purple gradient.
How you built it:
Mapped input fields with variant="nested".
Used standard React state validation:
javascript


if (!formData.email) tempErrors.email = 'Email address is required';
else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) tempErrors.email = '...';
❓ 6. FAQ Page Components (src/components/faq/ & src/pages/)
FAQ.jsx
What it contains:
Synchronized search parameters, double-stacked headers, the <SearchBar />, and the <FAQList />.
What you did:
Added the two-line header, rendered a circular speech bubble question mark SVG above the support card, and structured the layout in two columns.
How you built it:
Used useSearchParams to monitor URL changes:
javascript


useEffect(() => {
  const q = searchParams.get('q');
  if (q) setSearchQuery(q);
}, [searchParams]);
Laid out a grid (grid-cols-12). Left side (col-span-7) hosts lists and searches; right side (col-span-5) hosts illustrations and support cards.
Accordion.jsx
What it contains:
Toggle headers, dot prefixes, and +/< indicators.
What you did:
Changed the accordions to look like a single grouped list. Applied #F2E8FA light lavender background when expanded.
How you built it:
Used Framer Motion's <AnimatePresence> to animate accordion height from 0 to "auto" when isOpen is toggled.
Added the • dot indicator and dynamic toggle indicators:
javascript


<span>{isOpen ? '<' : '+'}</span>
✉️ 7. Contact Page Components (src/components/contact/ & src/pages/)
Contact.jsx
What it contains:
Custom headers, the ContactForm nested inside a card, and the overlapping purple background box.
What you did:
Removed the contact details sidebar and centered the form card. Created the purple overlap background box behind the white form card.
How you built it:
Structured the overlap using absolute positioning:
html


<div className="relative max-w-4xl mx-auto">
  {/* Background overlap box */}
  <div className="absolute right-[-20px] bottom-[-25px] w-[95%] h-[200px] bg-[#9C85BF]/60 -z-10" />
  {/* White container card */}
  <div className="w-full bg-white border border-gray-400 p-12">
    <ContactForm ... />
  </div>
</div>
ContactForm.jsx
What it contains:
Inputs state, grid layout, field validations, and checkmark success animations.
What you did:
Organized input fields into two columns: Left has First Name, Email, Subject, Message; Right has Last Name, Phone Number.
How you built it:
Rendered fields in a custom layout:
html


<div className="grid grid-cols-2 gap-8">
  <div className="flex flex-col gap-5"> {/* First Name, Email, Subject, Message */} </div>
  <div className="flex flex-col gap-5"> {/* Last Name, Phone */} </div>
</div>
Placed the teal rectangular Send Message button at the bottom of the left column. Used Framer Motion <AnimatePresence> to render a checkmark success screen upon validation.