const blogData = {
  "webgpu-particles": [
    {
      id: 1,
      date: "2024-05-15",
      title: "Getting Started with WebGPU",
      content: "I saw a twitter post showing a particle life simulation and instantly wanted to try to make my own. The simulation is inspired by @lisyarus simulation found here: https://lisyarus.github.io/webgpu/particle-life.html. The simulation is written using the WebGPU API, and I have had so much fun making it. I started off with a simple verion using vanilla JavaScript, HTML5 Canvas, and CSS. However I realized going about 800+ particle count significantly impacted FPS. This is because it was running at O(n²) time, every particle had to check every other particle, for each frame. A small version of it is what is used on the homepage using only 600 particles.",
      tags: []
    },
    // {
    //   id: 2,
    //   date: "2024-05-20",
    //   title: "Particle Physics Implementation",
    //   content: "Implemented the core particle physics system using WGSL compute shaders. The parallel processing capabilities are amazing - we're now handling 10,000+ particles at 60fps!",
    //   tags: ["WGSL", "Compute Shaders", "Physics"]
    // },
    // {
    //   id: 3,
    //   date: "2024-01-25",
    //   title: "Optimization Breakthrough",
    //   content: "After several days of profiling and optimization, I managed to increase particle count to 50,000 while maintaining smooth performance. The key was optimizing memory access patterns in the compute shaders.",
    //   tags: ["Optimization", "Performance", "Memory"]
    // }
  ],
  "intelligent-notes": [
    {
      id: 1,
      date: "2024-3-27",
      title: "AI Integration Planning",
      content: "Started planning the AI integration for the notes app. Decided to use a local AI model for privacy and offline functionality. The challenge will be balancing performance with accuracy.",
      tags: ["AI", "Planning", "Privacy"]
    },
    {
      id: 2,
      date: "2023-4-6",
      title: "JavaFX UI Development",
      content: "Built the main UI using JavaFX. The interface is clean and intuitive, with a focus on quick note-taking. Added features like auto-save and real-time search.",
      tags: ["JavaFX", "UI/UX", "Java"]
    },
    {
      id: 3,
      date: "2023-4-14",
      title: "AI Summarization Working",
      content: "Successfully integrated the AI summarization feature! The model can now generate concise summaries of longer notes, making it easier to review and organize information.",
      tags: ["AI", "Summarization", "Integration"]
    }
  ],
  "kanban-board": [
    {
      id: 1,
      date: "2024-02-01",
      title: "Project Setup and Planning",
      content: "Started the Kanban board project with React and TypeScript. Planning to include drag-and-drop functionality, priority levels, and due date tracking. Using Supabase for the backend.",
      tags: ["React", "TypeScript", "Planning"]
    },
    {
      id: 2,
      date: "2024-02-08",
      title: "Drag and Drop Implementation",
      content: "Implemented drag-and-drop functionality using react-beautiful-dnd. The user experience is smooth and intuitive. Users can now easily move tasks between different columns.",
      tags: ["React", "Drag & Drop", "UX"]
    },
    {
      id: 3,
      date: "2024-02-15",
      title: "Backend Integration",
      content: "Successfully integrated Supabase for real-time data synchronization. Tasks now persist across sessions and update in real-time for all users. Added authentication as well.",
      tags: ["React", "Backend", "Real-time"]
    }
  ],
  "chat-app": [
    {
      id: 1,
      date: "2024-03-01",
      title: "Project Kickoff",
      content: "Started development on a new chat application. Planning to use React with TypeScript for the frontend and Firebase for real-time messaging. This will be a comprehensive messaging platform.",
      tags: ["React", "Firebase", "Planning"]
    },
    {
      id: 2,
      date: "2024-03-10",
      title: "Firebase Setup",
      content: "Set up Firebase project with Authentication and Firestore. The real-time database capabilities will be perfect for instant messaging. Working on user authentication flow.",
      tags: ["Firebase", "Authentication", "Setup"]
    }
  ],
  "internship-fullstack": [
    {
      id: 1,
      date: "2024-01-05",
      title: "First Day at Red Peak Corp",
      content: "Excited to start my internship at Red Peak Corp working on the Sponsor Stories project! The team is great and I'm looking forward to contributing to this AI-powered book generation platform.",
      tags: ["Internship", "First Day", "Team"]
    },
    {
      id: 2,
      date: "2024-01-12",
      title: "Frontend Development Begins",
      content: "Started working on the React frontend for Sponsor Stories. The design system is well-established and I'm learning a lot about TypeScript and TailwindCSS best practices.",
      tags: ["React", "TypeScript", "Frontend"]
    },
    {
      id: 3,
      date: "2024-01-20",
      title: "AI Integration with Gemini",
      content: "Integrated Google's Gemini API for AI-powered content generation. The API is powerful and we're using it to create personalized book content based on sponsor information.",
      tags: ["AI", "Gemini", "API Integration"]
    },
    {
      id: 4,
      date: "2024-02-01",
      title: "Book Cover Generation",
      content: "Enhanced the book cover generation process using Python and Pillow. The AI can now generate custom covers that match the book's theme and content. The results are impressive!",
      tags: ["Python", "Pillow", "AI", "Design"]
    }
  ]
};

export default blogData; 