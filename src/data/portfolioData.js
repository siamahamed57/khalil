export const portfolioData = {
    personal: {
        name: " MD. Ibrahim Khalil",
        title: "Full-Stack Developer",
        taglines: [
            "Full-Stack Developer",
            "Software Engineer",
            "Wordpress Expert",
            "UI/UX Enthusiast",
            "Problem Solver",
        ],
        email: "siamahamedab@gmail.com",
        phone: "+880 13049 84437",
        location: "Bashundhara R/ADhaka, Bangladesh",
        bio: "I'm a passionate Full-Stack Developer and Competitive Programmer who loves building elegant, high-performance web applications. I thrive at the intersection of great code and great design.",
        bioExtended:
            "With experience across the entire stack — from crafting pixel-perfect UIs with React to engineering scalable backends with Node.js and databases — I bring ideas to life with clean, maintainable code. I'm an active participant in competitive programming and open-source communities.",
        avatar: "/profile.png",
        resumeUrl: "/resume.pdf",
        github: "https://github.com/siamahamed57",
        linkedin: "https://www.linkedin.com/in/khalil-md-ibrahim/",
        leetcode: "https://leetcode.com/u/siamahamedab/",
    },

    skills: {
        languages: [

            { name: "JavaScript", level: 85, icon: "SiJavascript", color: "#F7DF1E" },
            { name: "TypeScript", level: 85, icon: "SiTypescript", color: "#3178C6" },
            { name: "Python", level: 80, icon: "SiPython", color: "#3776AB" },
            { name: "C++", level: 90, icon: "SiCplusplus", color: "#00599C" },
            { name: "Java", level: 72, icon: "SiJava", color: "#007396" },
            { name: "PHP", level: 70, icon: "SiPhp", color: "#777BB4" },
            { name: "MySQL", level: 76, icon: "SiMysql", color: "#2a34c2ff" },
            { name: "PL/SQL", level: 65, icon: "SiOracle", color: "#f26522ff" },
            { name: "C#", level: 65, icon: "SiCsharp", color: "#9966CC" },
            { name: "HTML", level: 90, icon: "SiH   tml5", color: "#777BB4" },
            { name: "CSS", level: 85, icon: "SiCss3", color: "#777BB4" },
            { name: "Tailwind CSS", level: 85, icon: "SiTailwindcss", color: "#777BB4" },


        ],
        frontend: [
            { name: "React", level: 95, icon: "SiReact", color: "#61DAFB" },
            { name: "Vue.js", level: 70, icon: "SiVuedotjs", color: "#4FC08D" },
            { name: "Tailwind CSS", level: 90, icon: "SiTailwindcss", color: "#06B6D4" },
            { name: "Framer Motion", level: 85, icon: "SiFramer", color: "#0055FF" },
            { name: "Three.js", level: 60, icon: "SiThreedotjs", color: "#000000" },
        ],
        backend: [
            { name: "Nest.js", level: 90, icon: "SiNodedotjs", color: "#339933" },
            { name: "FastAPI", level: 75, icon: "SiFastapi", color: "#009688" },
            { name: "REST APIs", level: 95, icon: "SiPostman", color: "#FF6C37" },
        ],
        databases: [
            { name: "MongoDB", level: 88, icon: "SiMongodb", color: "#47A248" },
            { name: "PL/SQL", level: 65, icon: "SiOracle", color: "#f26522ff" },
            { name: "PostgreSQL", level: 82, icon: "SiPostgresql", color: "#4169E1" },
            { name: "MySQL", level: 78, icon: "SiMysql", color: "#4479A1" },
            { name: "Firebase", level: 75, icon: "SiFirebase", color: "#FFCA28" },

        ],
        devops: [
            { name: "Git", level: 95, icon: "SiGit", color: "#F05032" },
            { name: "Linux", level: 82, icon: "SiLinux", color: "#FCC624" },
            { name: "Nginx", level: 70, icon: "SiNginx", color: "#009639" },
        ],
        radarData: [
            { subject: "Frontend", A: 93, fullMark: 100 },
            { subject: "Backend", A: 88, fullMark: 100 },
            { subject: "Databases", A: 82, fullMark: 100 },
            { subject: "CP/DSA", A: 90, fullMark: 100 },
            { subject: "DevOps", A: 75, fullMark: 100 },
            { subject: "System Design", A: 78, fullMark: 100 },
        ],
    },

    experience: [
        {
            id: 1,
            role: "Senior-Developer",
            company: "Unies",
            location: "Dhaka, Bangladesh",
            type: "Remote",
            period: "Jan 2022 – 2026",
            description:
                "I am working as a Senior Developer at Unies, a E-learning Platform. I am responsible for the development and maintenance of the platform.",
            achievements: [
                "Promoted from Junior Developer to Senior Developer",
                "Learned about advanced php with rest API",
                "Learned about advanced postgresql with pl/sql",
            ],
            tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "GSAP", "Tailwind CSS", "Framer Motion"],
            color: "#6366f1",
        },
        {
            id: 2,
            role: "Intern WordPress Developer",
            company: "GAO Tech LNC",
            location: "Remote",
            type: "Free Intern",
            period: "Jun 2024 – Dec 2024",
            description:
                "Delivered 25+ wordpres task, plugin development, theme customization and many more. Also learned about manual code uses in wordpress",
            achievements: [
                "Leared advance wordpress development",
                "Improved wordpress skilss",
                "Built many wordpress custom plugin",
            ],
            tech: ["Wordpress", "Elementor Pro", "Code snippet", "Custom plugin", "Theme customization"],
            color: "#a855f7",
        },
    ],

    projects: [
        {
            id: 1,
            title: "Unies — Advanced LMS",
            category: "Paid",
            shortDesc: "Comprehensive E-learning platform with DRM & content protection.",
            description:
                "An advanced Learning Management System featuring Instructor & Student management, role-based dashboards, IP blocking, secure login, referral systems, and PWA support. Integrated with GTM, Mixpanel, and Facebook Pixel.",
            tech: ["PHP", "PostgreSQL", "REST API", "PWA", "GTM", "Mixpanel"],
            github: "#",
            live: "https://unies.com.bd",
            image: "unies",
            featured: true,
            stars: 120,
            tags: ["LMS", "E-learning", "Security"],
            color: "#6366f1",
        },
        {
            id: 2,
            title: "Being Smile — Crowdfunding",
            category: "Paid",
            shortDesc: "Modern MERN stack crowdfunding platform.",
            description:
                "Developed using MongoDB, Express.js, React.js, and Node.js. Features include a dynamic blog system, awareness content, and user contact forms with a responsive, clean UI.",
            tech: ["React.js", "Node.js", "MongoDB", "Express.js", "Styled Components"],
            github: "#",
            live: "https://beingsmile.org",
            image: "beingsmile",
            featured: true,
            stars: 85,
            tags: ["Crowdfunding", "MERN", "Non-Profit"],
            color: "#10b981",
        },
        {
            id: 3,
            title: "FiveM-QBCore Marketplace",
            category: "Paid",
            shortDesc: "Digital marketplace for gaming resources.",
            description:
                "WooCommerce-based digital product marketplace featuring custom shop layouts, secure payment gateway integration, and a digital licensing & script delivery system.",
            tech: ["WooCommerce", "WordPress", "PHP", "Payment Gateway"],
            github: "#",
            live: "https://fivem-qbcore.com",
            image: "fivem",
            featured: true,
            stars: 95,
            tags: ["Marketplace", "Gaming", "E-commerce"],
            color: "#f59e0b",
        },
        {
            id: 4,
            title: "Lyvaa — E-commerce",
            category: "Paid",
            shortDesc: "Custom Elementor-based premium e-commerce site.",
            description:
                "High-performance e-commerce website with custom plugin integration, optimized UI/UX, and robust product & order management system.",
            tech: ["WordPress", "Elementor", "PHP", "Custom Plugins"],
            github: "#",
            live: "https://lyvaa.com",
            image: "lyvaa",
            featured: false,
            stars: 64,
            tags: ["E-commerce", "UI/UX", "WordPress"],
            color: "#a855f7",
        },
        {
            id: 5,
            title: "UIXpertise",
            category: "Paid",
            shortDesc: "Service-focused professional agency website.",
            description:
                "Custom WordPress development using Elementor with custom code. Optimized for speed, SEO, and mobile responsiveness across all devices.",
            tech: ["WordPress", "Elementor", "Custom Code", "SEO"],
            github: "#",
            live: "https://uixpertise.com",
            image: "uixpertise",
            featured: false,
            stars: 42,
            tags: ["Agency", "Portfolio", "Responsive"],
            color: "#06b6d4",
        },
        {
            id: 6,
            title: "Tusqa Wellbeing",
            category: "Paid",
            shortDesc: "Mental health service platform.",
            description:
                "WordPress-based mental health service website with a calming UI, blog integration, and service booking functionality.",
            tech: ["WordPress", "Elementor", "Booking System"],
            github: "#",
            live: "https://tusqawellbeing.com",
            image: "tusqa",
            featured: false,
            stars: 38,
            tags: ["Health", "Booking", "WordPress"],
            color: "#ec4899",
        },
        {
            id: 7,
            title: "AidNexus",
            category: "Personal",
            shortDesc: "Acid Victims Management System.",
            description:
                "A specialized management system built using Oracle and PHP to track and support acid victims.",
            tech: ["PHP", "Oracle PL/SQL", "Web"],
            github: "https://github.com/siamahamed57/AidNexus",
            live: "#",
            image: "aidnexus",
            featured: false,
            stars: 12,
            tags: ["Management", "Impact", "Oracle"],
            color: "#ef4444",
        },
        {
            id: 8,
            title: "Hotel Booking System",
            category: "Personal",
            shortDesc: "Management system built with C#.",
            description:
                "Desktop-based hotel booking management system facilitating reservations, guest records, and billing.",
            tech: ["C#", ".NET", "MySQL"],
            github: "https://github.com/siamahamed57/Hotel-Booking-Management-System",
            live: "#",
            image: "hotel",
            featured: false,
            stars: 15,
            tags: ["C#", "System"],
            color: "#3b82f6",
        },
        {
            id: 9,
            title: "Wastio",
            category: "Personal",
            shortDesc: "Recycle platform for waste management.",
            description:
                "A PHP-based platform dedicated to waste recycling and management coordination.",
            tech: ["PHP", "MySQL", "JavaScript"],
            github: "https://github.com/siamahamed57/wastio",
            live: "#",
            image: "wastio",
            featured: false,
            stars: 10,
            tags: ["Recycle", "PHP"],
            color: "#10b981",
        },
        {
            id: 10,
            title: "Gender Detection",
            category: "Personal",
            shortDesc: "AI-powered gender detection using Flask.",
            description:
                "A Python Flask application that detects gender from images using machine learning models.",
            tech: ["Python", "Flask", "OpenCV", "TensorFlow"],
            github: "https://github.com/siamahamed57/gender-ditection",
            live: "#",
            image: "gender",
            featured: false,
            stars: 28,
            tags: ["AI", "ML", "Python"],
            color: "#f472b6",
        },
        {
            id: 11,
            title: "Net Speed Analyser",
            category: "Personal",
            shortDesc: "Real-time internet speed testing tool.",
            description:
                "A simple and efficient web tool to analyze internet speed using vanilla JavaScript.",
            tech: ["HTML", "CSS", "JavaScript"],
            github: "https://github.com/siamahamed57/NetSpeedAnalyzer",
            live: "https://siamahamed57.github.io/NetSpeedAnalyzer",
            image: "netspeed",
            featured: false,
            stars: 18,
            tags: ["Utility", "JavaScript"],
            color: "#60a5fa",
        },
        {
            id: 12,
            title: "Kid School",
            category: "Personal",
            shortDesc: "Responsive preschool website template.",
            description:
                "A colorful and engaging landing page for a kid's school, fully responsive and built with HTML/CSS.",
            tech: ["HTML", "CSS"],
            github: "#",
            live: "https://siamahamed57.github.io/assign_2_responsive",
            image: "kidschool",
            featured: false,
            stars: 12,
            tags: ["Education", "HTML/CSS"],
            color: "#fbbf24",
        },
        {
            id: 13,
            title: "AIUB CGPA Calculator",
            category: "Personal",
            shortDesc: "Specialized GPA calculator for AIUB students.",
            description:
                "A handy web tool for AIUB students to calculate their CGPA accurately based on their course credits and grades.",
            tech: ["HTML", "CSS", "JavaScript"],
            github: "#",
            live: "https://siamahamed57.github.io/aiub_calculator",
            image: "aiub",
            featured: false,
            stars: 22,
            tags: ["Tool", "JavaScript"],
            color: "#1e3a8a",
        },
        {
            id: 14,
            title: "Grocery Shop",
            category: "Personal",
            shortDesc: "Simple grocery landing page.",
            description:
                "A basic e-commerce landing page for a grocery store built using HTML and CSS.",
            tech: ["HTML", "CSS"],
            github: "#",
            live: "https://siamahamed57.github.io/assignment_3",
            image: "grocery",
            featured: false,
            stars: 8,
            tags: ["Landing Page", "HTML/CSS"],
            color: "#16a34a",
        },
        {
            id: 15,
            title: "Bangladesh 2.0",
            category: "Personal",
            shortDesc: "National identity themed project.",
            description:
                "A responsive web project themed around the identity and future of Bangladesh.",
            tech: ["HTML", "CSS"],
            github: "#",
            live: "https://siamahamed57.github.io/asgn_1_bangladesh",
            image: "bangladesh",
            featured: false,
            stars: 14,
            tags: ["Theme", "HTML/CSS"],
            color: "#047857",
        },
        {
            id: 16,
            title: "Dev Portfolio",
            category: "Personal",
            shortDesc: "Legacy portfolio website.",
            description:
                "The previous version of my developer portfolio, showcasing my early work and growth in web development.",
            tech: ["HTML", "CSS"],
            github: "#",
            live: "https://siamahamed57.github.io/dev-portfolio/",
            image: "portfolio_old",
            featured: false,
            stars: 10,
            tags: ["Portfolio", "HTML/CSS"],
            color: "#4b5563",
        },
    ],

    codeSnippets: [
        {
            id: 1,
            title: "Bouble Short in C++",
            language: "cpp",
            description: "Bouble short algorithm in C++",
            code: `#include <iostream>
using namespace std;

int main() {
    int size;
    cout << "Enter your array size" << endl;
    cin >> size;
    int arr[size];
    cout << "Please enter your numbers" << endl;
    for (int i = 0; i < size; i++) {
        cin >> arr[i];
    }
    for (int i = 0; i < size - 1; i++) {
        for (int j = 0; j < size - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    cout << "Bouble Short Number" << endl;
    for (int i = 0; i < size; i++) {
        cout << arr[i] << endl;
    }

    return 0;
}`,
        },
        {
            id: 2,
            title: "JS Form Validation",
            language: "javascript",
            description: "JS Form Validation using HTML CSS and JS",
            code: `function FormValidation(){
    let name = document.getElementByID("name").value;
    let email = document.getElementBYID("email").value;
    let password = document.getElementBYID ("password").value;
    if (name == "") {
        alert("Name must be filled out");
        return false;
    }

    if (email == "") {
        alert("Email must be filled out");
        return false;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters");
        return false;
    }

    alert("Form submitted successfully");
    return true;
}
`,
        },
        {
            id: 3,
            title: "LRU Cache (C++)",
            language: "cpp",
            description: "O(1) get/put LRU Cache implementation using doubly linked list + hashmap.",
            code: `class LRUCache {
  int capacity;
  list<pair<int,int>> cache;
  unordered_map<int, list<pair<int,int>>::iterator> mp;

public:
  LRUCache(int cap) : capacity(cap) {}

  int get(int key) {
    if (!mp.count(key)) return -1;
    cache.splice(cache.begin(), cache, mp[key]);
    return mp[key]->second;
  }

  void put(int key, int val) {
    if (mp.count(key)) {
      cache.erase(mp[key]);
    } else if ((int)cache.size() == capacity) {
      mp.erase(cache.back().first);
      cache.pop_back();
    }
    cache.push_front({key, val});
    mp[key] = cache.begin();
  }
};`,
        },
        {
            id: 4,
            title: "Async Queue with Concurrency",
            language: "javascript",
            description: "An async task queue that limits concurrent execution to N tasks.",
            code: `class AsyncQueue {
  constructor(concurrency = 3) {
    this.concurrency = concurrency;
    this.running = 0;
    this.queue = [];
  }

  add(task) {
    return new Promise((resolve, reject) => {
      this.queue.push({ task, resolve, reject });
      this.run();
    });
  }

  async run() {
    while (this.running < this.concurrency && this.queue.length) {
      const { task, resolve, reject } = this.queue.shift();
      this.running++;
      try {
        resolve(await task());
      } catch (e) {
        reject(e);
      } finally {
        this.running--;
        this.run();
      }
    }
  }
}`,
        },
    ],

    articles: [
        {
            id: 1,
            title: "Building Real-Time Apps with WebSockets & Redis Pub/Sub",
            excerpt:
                "A deep dive into architecting scalable real-time features — from basic Socket.io to multi-server Redis pub/sub patterns.",
            date: "Feb 2025",
            readTime: "8 min read",
            tags: ["Node.js", "Redis", "WebSockets"],
            url: "#",
            color: "#6366f1",
        },
        {
            id: 2,
            title: "Mastering React Performance: From Basics to Advanced Patterns",
            excerpt:
                "Comprehensive guide covering memoization, code splitting, virtual DOM tricks, and profiling techniques to squeeze every ms of performance.",
            date: "Jan 2025",
            readTime: "12 min read",
            tags: ["React", "Performance", "JavaScript"],
            url: "#",
            color: "#a855f7",
        },
        {
            id: 3,
            title: "Why Competitive Programmers are Better Engineers",
            excerpt:
                "My personal journey from CP to software engineering — how solving 1000+ problems made me a fundamentally better developer.",
            date: "Dec 2024",
            readTime: "6 min read",
            tags: ["Career", "Algorithms", "CP"],
            url: "#",
            color: "#ec4899",
        },
        {
            id: 4,
            title: "Vector Databases Explained: Building a Semantic Search Engine",
            excerpt:
                "From embeddings to production search — a practical walkthrough of building semantic search using Pinecone, OpenAI and FastAPI.",
            date: "Nov 2024",
            readTime: "10 min read",
            tags: ["AI", "Pinecone", "Python"],
            url: "#",
            color: "#f59e0b",
        },
    ],

    stats: {
        github: {
            repos: 38,
            stars: "20",
            contributions: 400,
            pullRequests: 35,
            username: "siamahamed57",
        },
        competitive: {
            leetcode: { solved: 34, rank: "2,992,553", streak: 180 },
            codeforces: { rating: 1847, rank: "Expert", solved: 420 },
            codechef: { stars: 4, rating: 1780 },
        },
        general: [
            { label: "Projects Delivered", value: 20, suffix: "+" },
            { label: "GitHub Stars", value: 20, suffix: "+" },
            { label: "Problems Solved", value: 34, suffix: "+" },
            { label: "Happy Clients", value: 15, suffix: "+" },
        ],
    },

    timeline: [
        {
            year: "2026",
            title: "Senior Developer Unies",
            description: "Promoted to senior developer at Unies,Publishing their new e-learning website,with full features of LMS,SSL payment gateway,Referral system,Session management,DRM,SSL payment gateway,and full features of E-commerce",
            icon: "🚀",
        },
        {
            year: "2025",
            title: "Start Programming Hero Full Stack Web Development Course",
            description: "Start Programming Hero Full Stack Web Development Course,Learn code in HTML,CSS,JavaScript,React,Node.js,MongoDB,Express.js,API Integration,Payment Gateway Integration,E-commerce Development,LMS Development,Website Maintenance",
            icon: "🏆",
        },
        {
            year: "2024",
            title: "Join remote intern at GAO-Tech LNC (USA)",
            description: "Working as a remote intern at GAO-Tech LNC (USA),Deliverd 25+ tasks,Learn code in wordpress,Custom plugin development,Custom theme development,API Integration,Payment Gateway Integration,E-commerce Development,LMS Development,Website Maintenance",
            icon: "🌐",
        },
        {
            year: "2022- June",
            title: "Joined Unies as a Junior Developer",
            description: "Joined Unies as a Junior Developer, Building their first E-learning website,with full features of LMS,SSL payment gateway,and full features of E-commerce",
            icon: "🌐",
        },
        {
            year: "2022",
            title: "Admitted in AIUB for CSE",
            description: "Began Computer Science & Engineering at AIUB, diving deep into algorithms and systems and Competitive Programming in Leetcode,Start my journey in CS-World",
            icon: "🎓",
        },
        {
            year: "2020",
            title: "Start Making Website by Helping Youtube Channel",
            description: "Firstly i make a website using wordpress.I maked portfolio website,Ecommerce website,Landing page, etc.",
            icon: "✨",
        },
    ],
};
