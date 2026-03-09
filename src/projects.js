import particlesim from './assets/particlesim.png';
import sponsorstories from './assets/sponsorstories.png';
import intelligentnotes from './assets/intelligentnotes.png';
import kanban from './assets/kanban.png';
import wip from './assets/wip.png';
import shellhacks from './assets/shellhacks.png';
import shellhacks1 from './assets/shellhacks1.png';
import recipeRecommender from './assets/nutrichoice.png';
import miamiDadeActiveCalls from './assets/miami-dade-active-calls.png';
import bookmarkbuddy from './assets/bookmarkbuddy.png';
import multichoice from './assets/multichoice.png';
import kasiopya1 from './assets/kasiopya1.png';
import kasiopya2 from './assets/kasiopya2.png';
import kasiopya3 from './assets/kasiopya3.png';
import kasiopya4 from './assets/kasiopya4.png';


const projects = [
  {
    slug: "multichoice",
    title: "MultiChoice",
    description: "AI-powered study practice app for creating and practicing multiple choice questions with spaced repetition ordering based on performance history.",
    longDescription: `MultiChoice is a single-page web app for creating and practicing multiple choice questions with AI-powered spaced repetition ordering.

Create questions manually or generate them from study material using Claude AI. Practice with intelligent ordering that adapts to your performance.`,
    extendedDescription: `Features:
• Question Creation — Manual input or AI generation from study material using Claude. Add/remove answer choices, optional explanations.
• Practice Modes — AI-ordered practice (spaced repetition based on performance) or original order.
• Performance Tracking — Tracks times answered, accuracy per question, score during sessions. Visual correct/incorrect feedback.
• Data Persistence — All data stored locally in browser; no backend required.`,
    categories: ["JavaScript", "AI", "Education"],
    tech: ["JavaScript", "Claude AI", "Local Storage", "Spaced Repetition"],
    github: "https://github.com/izy138/MultiChoice",
    demo: "https://izy138.github.io/MultiChoice/",
    image: multichoice,
    imagePosition: "object-center"
  },
  {
    slug: "bookmarkbuddy",
    title: "BookmarkBuddy",
    description: "A modern Chrome extension for visual bookmark management with smart categorization, favorites, duplicate detection, and X/Twitter integration.",
    longDescription: `BookmarkBuddy is a visual Chrome bookmarks manager with smart categorization, favorites, duplicate detection, and X/Twitter integration.

Features include a card grid layout, auto-categorization by URL, right-click save, search and sort, bulk operations, and both side panel and full-page views.`,
    extendedDescription: `Features:
• Card Grid Layout — Visual bookmark cards with favicons, titles, domains, and category tags. Toggle between grid and list views.
• Smart Auto-Categorization — Bookmarks automatically categorized (Streaming, Development, AI Tools, Education, Social, etc.) based on URL.
• Favorites / Pinned — Star any bookmark to pin it. View all favorites in a dedicated tab.
• Duplicate Detection — Identifies domains with multiple bookmarks for cleanup.
• X/Twitter Integration — Auto-captures posts when you press X's bookmark button. Import from X bookmarks page or likes archive.
• Right-Click Context Menu — Save any page or link via "Save to BookmarkBuddy" or save as favorite.
• Search & Sort — Search across titles, URLs, and categories. Sort by newest, oldest, or alphabetical.
• Bulk Operations — Select multiple bookmarks and delete at once.
• Side Panel & Full Page — Quick access in Chrome's side panel or full-page manager for large collections.`,
    categories: ["Chrome Extension", "JavaScript", "Bookmarks"],
    tech: ["Chrome Extension", "JavaScript", "HTML5", "CSS3", "Chrome APIs"],
    github: "https://github.com/izy138/BookmarkBuddy",
    demo: "",
    image: bookmarkbuddy,
    imagePosition: "object-left"
  },
  {
    slug: "miami-dade-active-calls",
    title: "Miami-Dade Active Calls",
    description: "Interactive, real-time map of active Miami-Dade Fire Rescue and FHP calls using OpenStreetMap, with filters by incident type and geocoded markers.",
    longDescription: `Miami-Dade Fire Rescue — Live Dispatch Map

An interactive, real-time map of active Miami-Dade Fire Rescue calls using OpenStreetMap.`,
    extendedDescription: `Features:
• Live data — Scrapes Miami-Dade Fire Rescue active calls; auto-refreshes every 60 seconds
• Geocoded map — Addresses plotted on a dark-theme map (OpenStreetMap + Leaflet)
• Miami-Dade bounds — Pan and zoom constrained to the county
• Filters — By incident type: Fire, Medical, Traffic, FHP (highway patrol only), or All
• Sidebar — All active calls by zone; click a marker or card for details
• Caching — Geocode results cached in Turso (or in-memory) so the daily limit and cache survive server restarts

Alternative: A Google Maps version (with traffic layer) lives in version-googlemaps/.

Data source:
Miami-Dade Fire Rescue CAD Active Calls:
https://www.miamidade.gov/firecalls/calls.html

Florida Highway Patrol — Live Traffic Crash and Road Condition Report (FLHSMV):
https://trafficincidents.flhsmv.gov/SmartWebClient/CadView.aspx

FLHSMV / FHP integration:
The map merges Florida Highway Patrol incidents with MDFR calls. FHP data is scraped from the FLHSMV live report and filtered to Miami-Dade only. Incidents include built-in latitude and longitude, so no geocoding is used for FHP — zero extra API cost. FHP primarily covers highways (e.g. I-95, SR-826, Turnpike); MDFR covers local street-level fire and medical calls. Together the two sources give a fuller picture of what's active in the county.

On the map, FHP incidents use purple markers, a dedicated FHP filter in the sidebar, and their own zone section. Popups show a source badge (MDFR or FHP) and, for FHP, a remarks field (e.g. "ROADBLOCK", "PARTIALLY BLOCKING RIGHT LANE"). Both sources are fetched in parallel; if one fails, the other still loads.

This app uses publicly available data from Miami-Dade Fire Rescue and FLHSMV. Addresses are approximate and incident types may change. Not for emergency use.`,
    categories: ["JavaScript", "Leaflet", "OpenStreetMap", "Real-time Data"],
    tech: ["JavaScript", "Leaflet", "OpenStreetMap", "Node.js", "Turso", "Web Scraping"],
    github: "https://github.com/izy138/MDC-ActiveCalls",
    demo: "https://mdc-activecalls.onrender.com/",
    image: miamiDadeActiveCalls,
    imagePosition: "object-left"
  },
  {
    slug: "recipe-recommender",
    title: "Recipe Recommender",
    description: "AI-powered recipe recommendation website using K-means clustering to suggest personalized recipes based on dietary preferences.",
    longDescription: `Recipe Recommender is an intelligent recipe discovery platform that uses machine learning to provide personalized recipe recommendations.
`,
    extendedDescription: `
Core Features:
• AI-Powered Recommendations: Uses K-means clustering algorithm to recommend similar recipes based on user preferences and past interactions
• Dietary Preferences: Personalized recommendations tailored to your dietary restrictions and preferences (vegetarian, vegan, gluten-free, keto, etc.)
• Recipe Management: Favorite recipes and mark recipes as tried to improve recommendation accuracy
• Meal Planning: Plan your meals ahead with an integrated meal planning feature
• Nutrition Tracking: Track nutritional information for your meals and recipes
• Smart Search: Search recipes by ingredients, cuisine type, or dietary requirements

Built with React TypeScript for the frontend and Django with Python for the backend, providing a seamless user experience with intelligent recipe discovery.`,
    categories: ["React", "TypeScript", "Django", "Python", "AI", "Machine Learning"],
    tech: ["React", "TypeScript", "Django", "Python", "K-means Clustering", "Machine Learning", "AI"],
    github: "https://github.com/Joaquin54/nutrichoice",
    demo: "",
    image: recipeRecommender,
    imagePosition: "object-center"
  },
  {
    slug: "webgpu-particles",
    title: "WebGPU Particle Simulation",
    description: "High-performance particle physics simulation using WebGPU compute shaders with real-time particle dynamics.",
    longDescription: `A real-time particle life simulation running entirely on the GPU via the WebGPU API. Thousands of particles interact through attraction and repulsion forces, producing complex emergent behaviors — from clustering and swarming to oscillation and chaotic flow.

Inspired by Particle Life by Sandbox Science.`,
    extendedDescription: `How it works
Each frame, the simulation runs two GPU passes:

• Compute pass — for every particle, calculates net force from nearby particles using the attraction matrix, then integrates velocity and position. Spatial binning divides the canvas into a grid so each particle only checks neighbors in adjacent bins rather than all N² pairs.

• Render pass — draws each particle as a colored point at its current position using a render pipeline.

Force between two particles of types A and B follows a piecewise model: strong repulsion inside the collision radius, attraction or repulsion based on the force matrix between collision and interaction radius, and no force beyond the interaction radius. All simulation state lives in GPU buffers with double buffering (ping-pong) so the previous frame's positions are read while the next frame's are written.

Features
• Up to 20,000 particles rendered in real time
• 2–8 particle types, each with unique colors and force relationships
• Configurable attraction/repulsion forces between every type pair
• Adjustable friction, force scale, and simulation speed
• Mouse interaction — attract or repel particles with adjustable strength and radius
• Save / load configurations as .json files; drag and drop supported
• Keyboard shortcuts: Space (randomize), P (pause), R (reset), N (new config), Ctrl+F (fullscreen), TAB (toggle panel)

Browser requirements
WebGPU is required. Available in recent Chrome and Safari.

• Chrome: Settings → System → enable Hardware acceleration
• Safari: Settings → Advanced → Show features for web developers → Feature Flags → enable WebGPU
• Laptop with multiple GPUs: Settings → System → Display → Graphics → Add Chrome → set GPU Preference to dedicated GPU (e.g. NVIDIA) → restart Chrome

Running locally
No build step required — serve from any static file server:

python3 -m http.server 8080

Then open http://localhost:8080 in Chrome or Safari with WebGPU enabled. Opening index.html directly as a file:// URL won't work due to shader loading restrictions.`,
    categories: ["Graphics", "WebGPU", "Interactive"],
    tech: ["WebGPU", "JavaScript", "WGSL"],
    github: "https://github.com/izy138/ParticleSim",
    demo: "https://izy138.github.io/ParticleSim",
    image: particlesim,
    imagePosition: "object-center"
  },
  {
    slug: "fiu-panther-planner",
    title: "FIU Panther Planner",
    description: "Chrome extension for FIU students with AI-powered academic planning, course tracking, and campus navigation.",
    longDescription: `FIU Panther Planner is an AI-powered Chrome extension for FIU students.

Core Features:
• Degree Progress Tracking: Visual checklist showing completed vs. required courses for any major
• AI Academic Advisor (Roary): Personalized course recommendations and academic guidance
• Smart Schedule Planning: Intelligent course scheduling with conflict detection
• Campus Navigation: Google Maps integration for optimal routes between classes
• Real-time Data Sync: Automatically extracts course data from FIU's PantherSoft system
• Prerequisite Checking: Validates course eligibility based on completed prerequisites

Built for ShellHacks 2025 in a team of 4 using Chrome Extension Manifest V3, FastAPI, Python 3.13, MongoDB, and Google APIs for AI and navigation features.`,
    extendedDescription: `Inspiration
FIU Panther Planner was inspired by the common difficulties students face when trying to understand complex degree requirements, plan conflict-free schedules, track their progress, and navigate campus between classes.

What it does
FIU Panther Planner is an all-in-one Chrome extension designed to streamline academic planning. Once a student selects their major, it generates a personalized checklist of all required courses. An intelligent AI agent analyzes their progress to recommend which courses to take next and automatically detects schedule conflicts. The extension also integrates Google Maps to provide the most efficient walking routes between classes, helping students manage their time effectively.

How we built it
The frontend is a Chrome Extension (Manifest V3) using HTML5, CSS3, and JavaScript. The backend is powered by FastAPI and Python with a MongoDB database. For AI capabilities, the system integrates Claude 3.5 Sonnet and Google Gemini 2.0 Flash, along with the Google Maps and Anthropic Claude APIs.

Challenges
The primary challenges included integrating the web application into the Chrome extension architecture, ensuring high-quality data for the course checklist, and developing effective tools for the AI agent. Connecting the FastAPI backend to MongoDB and making all components work together seamlessly required extensive troubleshooting.

Accomplishments
We successfully created a comprehensive solution with genuinely personalized course recommendations and a clear visual interface for tracking degree progress. The result is a fast, responsive experience that integrates smoothly with FIU's portal and matches its branding.

What we learned
This project provided invaluable experience in full-stack development, particularly with FastAPI and MongoDB integration. We gained hands-on skills in Chrome Extension development, API design, and building AI agentic systems. We also learned the importance of iterative development, starting with an MVP, and the critical value of user testing.

Running the project
• Backend: python -m uvicorn app.main:app --reload
• Extension: Go to chrome://extensions → enable Developer mode → click 'Load Unpacked' and select the frontend folder → open the extension or navigate to my.fiu.edu

Google Maps APIs: Maps Static API, Places API, Geocoding API, Routes API

Python dependencies: fastapi, motor, uvicorn, pydantic, python-dotenv, python-multipart, anthropic, requests, google-adk

What's next
• Mobile App: iOS/Android companion app for on-the-go planning
• Expanded Majors: Support for all majors offered at FIU
• Advanced Scheduling: Automatic conflict resolution and optimal schedule generation
• Smart Notifications: Alerts for registration deadlines and course availability
• Enhanced AI: Train on more FIU-specific data for better recommendations
• Social Features: Share schedules and form study groups`,
    categories: ["Chrome Extension", "AI", "Python", "JavaScript", "Hackathon"],
    tech: ["Chrome Extension", "JavaScript", "HTML5", "CSS3", "FastAPI", "Python 3.13", "MongoDB", "Pydantic", "Google Maps API", "Google ADK"],
    github: "https://github.com/izy138/ShellHacks2025",
    demo: "https://devpost.com/software/fiu-panther-planner",
    image: shellhacks,
    projectPageImage: shellhacks1,
    imagePosition: "object-right"
  },
  {
    slug: "intelligent-notes",//"react-dashboard", 
    title: "Intelligent Notes",
    description: "Note taking app using AI to summarize and organize notes.",
    longDescription: `Intelligent Notes is a note-taking app built for Software Engineering I at FIU. It features real-time editing, search, tag-based organization, and Claude AI integration to generate summaries of individual notes and entire folders.

Led a team of four — managed project milestones, delegated tasks, and ensured all deadlines were met throughout the semester.`,
    extendedDescription: `Features
• AI Summaries — Generate concise summaries of individual notes or entire folders using the Claude API. Supports bringing your own API key.
• AI Tags — Automatically suggest relevant tags for notes based on their content.
• Note Organization — Organize notes into folders with a clean, intuitive layout.
• Real-time Editing — Notes save automatically as you type.
• Search — Quickly find notes by title, content, or tag.
• Tag System — Label and filter notes with a custom tag-based system.

Development timeline
• April 6, 2023 — Built the main UI using JavaFX. Focused on a clean interface with auto-save and real-time search from the start.
• April 14, 2023 — Successfully integrated Claude AI summarization. The model generates concise summaries of longer notes, making review and organization much faster.
• March 27, 2024 — Revisited AI integration planning, exploring local model options for offline and privacy-focused use cases.

Role
Led a team of four as project manager and lead developer — designed the application architecture, managed milestones, delegated features across the team, and ensured all deadlines were met.`,
    categories: ["AI","Java", "JavaFX", "Maven"],
    tech: ["Java", "Maven", "JavaFX", "AI"],
    github: "https://github.com/izy138/Intelligent-Notes/",
    demo: "https://youtu.be/hVVNb0Lfw4I?si=qC5AGLoeRv5qOs_5&t=652",
    image: intelligentnotes,
    imagePosition: "object-left"
  },
  {
    slug: "kanban-board",//"react-dashboard", 
    title: "Kanban Board",
    description: "Task tracking with board and list views.",
    longDescription: `Includes priority, due date, and tags.`,
    categories: ["React", "TypeScript", "TailwindCSS", "Node.js" ],
    tech: ["React", "TypeScript", "TailwindCSS", "Node.js", "Express"],
    github: "https://github.com/yourusername/react-dashboard",
    demo: "https://izy138-kanban.vercel.app",
    image: kanban,
    imagePosition: "object-top"
  },

  {
    slug: "internship-fullstack",//"react-dashboard", 
    title: "Internship: Frontend Dev",
    description: "Interning at Red Peak Corp's Sponsor Stories, using AI to generate personalized book content.",
    longDescription: `Frontend development internship at Red Peak Corp, contributing to Sponsor Stories — an AI-powered platform that generates personalized books for sponsors.

Built responsive React components, engineered page animations, and maintained the Python backend and AI generation pipeline using Google Gemini and Pillow.`,
    extendedDescription: `What I worked on
• React Frontend — Collaborated with the designer to build responsive components using React, TypeScript, and TailwindCSS. Engineered all page animations and responsive UI elements to improve engagement and user experience.
• AI Content Generation — Integrated Google Gemini's API to power personalized book content generation based on sponsor information.
• Book Cover Generation — Enhanced the book cover generation process using Python and Pillow, producing custom covers that match each book's theme and content.
• Backend Maintenance — Optimized core Python scripts, resolving prompt-content mismatch issues and increasing the overall relevance of AI-generated books.

Development timeline
• May 25, 2024 — First day at Red Peak Corp. Onboarded to the Sponsor Stories project and got familiar with the team and codebase.
• June 27, 2024 — Began frontend development, learning the established design system and TypeScript/TailwindCSS best practices.
• July 2, 2024 — Integrated the Gemini API for AI-powered content generation, enabling personalized book content from sponsor data.
• July 14, 2024 — Enhanced the book cover generation pipeline with Python and Pillow. The AI now generates custom covers matched to each book's theme.`,
    categories: ["Python", "React", "AI", "Typescript", "TailwindCSS"],
    tech: ["React", "TypeScript", "TailwindCSS", "Node.js", "AI", "Python", "Pillow", "Docker"],
    // github: "https://github.com/yourusername/react-dashboard",
    demo: "https://www.youtube.com/watch?v=yBECDuw2gaM",
    image: sponsorstories,
    imagePosition: "object-left"
  },
  {
    slug: "chat-app",//"react-dashboard", 
    title: "Chat App",
    description: "Currently in development",
    longDescription: `Currently in development.`,
    categories: ["Development", "React"],
    tech: ["React", "TypeScript", "TailwindCSS", "Node.js", "Express", "Firebase"],
    github: "https://github.com/yourusername/react-dashboard",
    demo: "https://your-dashboard.vercel.app",
    image: wip,
    imagePosition: "object-center"
  },
  {
    slug: "go-data",//"react-dashboard", 
    title: "Relational Database in Go",
    description: "Currently in development",
    longDescription: `Currently in development.`,
    categories: ["Development", "Golang"],
    tech: ["Golang", "Database", "SQL"],
    github: "https://github.com/yourusername/react-dashboard",
    demo: "https://your-dashboard.vercel.app",
    image: wip,
    imagePosition: "object-center"
  },

  {
    slug: "kasiopya",
    title: "Kasiopya.com",
    description: "Custom Shopify storefront for Kasiopya — a silk fashion brand — featuring a horizontal image carousel, variant-based image filtering, and polished UI.",
    longDescription: `Shopify development for Kasiopya, a silk fashion brand. Built heavily customized product page features on top of Shopify's Dawn theme, far beyond what the platform offers out of the box.

Key work: custom horizontal image carousel, variant-based image filtering, swatches, popup, and a three-column video layout for the tutorials page.`,
    extendedDescription: `Image Carousel
The centerpiece of the work is a custom horizontal image carousel for the product page on desktop. Rather than Shopify's default stacked gallery, the carousel shows images in a horizontal strip with a "peek" effect — partially revealing adjacent images to hint at more content. It includes smooth transitions, custom navigation arrows, opacity changes to highlight the active slide, and responsive sizing across large desktop, medium desktop, and tablet breakpoints.

Variant-based image filtering
When a customer selects a color variant, the carousel automatically filters to show only the images for that color. This works by fetching the product's JSON data, mapping each color variant to its image range, tagging slides with data attributes, and hiding or showing slides accordingly. The counter updates to reflect only the visible images, not the total count.

Mobile vs. desktop
On mobile, Shopify's native touch-swipe slider is preserved entirely — the variant filtering logic is layered on top without breaking the platform's built-in behavior. A page reload triggers whenever the viewport crosses the 750px breakpoint in either direction, ensuring the correct mode (desktop carousel vs. mobile slider) is always initialized cleanly.

Other improvements
• Color name display that fades in and out when a swatch is selected
• Custom swatch styling with hover and disabled states
• Sticky product media column on desktop
• Spacing and layout adjustments to the header and product grid
• Three-column video layout for the tutorials page
• Custom popup template using Shopify's Liquid templating language

Development approach
The approach was iterative — one feature at a time, tested across screen sizes, with heavy use of browser dev tools to debug CSS specificity issues, JavaScript timing conflicts, and DOM state problems. Carousel and variant filtering were combined into a single unified script to eliminate race conditions between separate scripts competing for the same DOM elements.`,
    categories: ["Shopify", "JavaScript", "Liquid"],
    tech: ["Shopify", "Liquid", "JavaScript", "CSS3", "Dawn Theme"],
    github: "https://github.com/izy138/Kasiopya.com",
    demo: "https://kasiopya.com",
    image: kasiopya1,
    images: [kasiopya1, kasiopya2, kasiopya3, kasiopya4],
    imagePosition: "object-top"
  },

  // ...add the rest of your projects here, following the same structure
];

/** Display order for all projects. Reorder this array to change how projects appear on the portfolio. */
export const PROJECT_ORDER = [
  "bookmarkbuddy",
  "fiu-panther-planner",
  "webgpu-particles",
  "miami-dade-active-calls",
  "recipe-recommender",
  "multichoice",
  "intelligent-notes",
  "kanban-board",
  "kasiopya",
  "internship-fullstack",
  "chat-app",
  "go-data",
];

export default projects; 