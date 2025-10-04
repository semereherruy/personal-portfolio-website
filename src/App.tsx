import React, { useState, useEffect } from 'react';
import { 
  Home, 
  User, 
  GraduationCap, 
  Code, 
  FolderOpen, 
  Briefcase,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ExternalLink,
  Download,
  Award,
  Calendar,
  Building,
  Sun,
  Moon,
  Eye,
  Send,
  Globe,
  Languages,
  Heart,
  Users,
  Lightbulb,
  MessageCircle,
  ArrowRight,
  Sparkles,
  Zap,
  Star
} from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isDark, setIsDark] = useState(false);
  const [selectedCert, setSelectedCert] = useState<any>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'education', 'skills', 'projects', 'experience', 'certifications'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    
    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'about', icon: User, label: 'About' },
    { id: 'education', icon: GraduationCap, label: 'Education' },
    { id: 'skills', icon: Code, label: 'Skills' },
    { id: 'projects', icon: FolderOpen, label: 'Projects' },
    { id: 'experience', icon: Briefcase, label: 'Experience' },
    { id: 'certifications', icon: Award, label: 'Certifications' },
  ];

  const skills = {
    languages: [
      'PHP', 'Java', 'JavaScript', 'Python', 'Dart'
    ],
    frontend: [
      'React', 'Bootstrap', 'Tailwind CSS', 'HTML5', 'CSS3', 'TypeScript'
    ],
    backend: [
      'Laravel', 'Node.js', 'Express.js', 'Spring Boot'
    ],
    database: [
      'Relational/SQL', 'MySQL', 'NoSQL Databases', 'MongoDB', 'PostgreSQL'
    ],
    mobile: [
      'Flutter'
    ],
    orm: [
      'Eloquent ORM', 'JPA/Hibernate', 'Migrations', 'Database Design'
    ],
    tools: [
      'Version Control/Git', 'GitHub', 'Branching', 'CI/CD', 'Cloud Services', 'Vercel', 'Cloudflare', 'InfinityFree', 'AWS', 'Render', 'Notion', 'Jira', 'Confluence'
    ],
    api: [
      'RESTful APIs', 'Third-party service integration', 'Chapa payment gateway', 'Data handling and storage with DBs', 'Firebase', 'scikit-learn'
    ],
    marketing: [
      'Social Media Marketing (SMM)', 'SEO', 'Content Creation'
    ]
  };

  const projects = [
    {
      title: 'Dukem Flutter Project',
      description: 'Core mobile mapping features, MapLibre/PMTiles tile handling, interactive map UI (markers, routing controls, POI), state management for responsiveness, API integration, and backend contract alignment.',
      tech: ['Flutter', 'Dart', 'MapLibre', 'PMTiles', 'REST APIs', 'Provider', 'Git'],
      category: 'mobile',
      status: 'Private',
      icon: '🗺️'
    },
    {
      title: 'Food Delivery App',
      description: 'A mobile app for restaurant listings, menu browsing, cart management, and order placement, integrated with backend services for real-time updates.',
      tech: ['Flutter', 'Firebase', 'Dart', 'REST APIs'],
      category: 'mobile',
      status: 'Private Client (In Development)',
      icon: '🍔'
    },
    {
      title: 'Gbigubae Registration App',
      description: 'Comprehensive web-based student registration system built for እንዳ ኢየሱስ ግቢ ጉባኤ with Node.js, Express, and MySQL backend.',
      tech: ['Node.js', 'Express.js', 'MySQL', 'RESTful API'],
      category: 'web',
      status: 'Private',
      icon: '📝'
    },
    {
      title: 'Mini Ecommerce App',
      description: 'A modern e-commerce application featuring product browsing, cart functionality, and responsive design.',
      tech: ['React', 'TypeScript', 'Tailwind CSS'],
      category: 'web',
      status: 'Private Client (In Development)',
      icon: '🛒'
    },
    {
      title: 'Learn Plutus Mobile App',
      description: 'Transformed an existing website into a fully functional mobile app.',
      tech: ['Flutter', 'Dart', 'Firebase'],
      category: 'mobile',
      status: 'Private Client',
      icon: '📱'
    },
    {
      title: 'PayFlow: Chapa Payment Integration Demo',
      description: 'Demo of payment integration for Ethiopian context with mobile money support. Features include payment creation, verification, webhook handling, and order management.',
      tech: ['Node.js', 'Express.js', 'MongoDB', 'Chapa API', 'Vanilla HTML/JS', 'Axios'],
      category: 'web',
      githubUrl: 'https://github.com/semereherruy/PayFlow.git',
      icon: '💳'
    },
    {
      title: 'Simple User Login Mobile App',
      description: 'A React Native app with user authentication.',
      tech: ['React Native'],
      category: 'mobile',
      githubUrl: 'https://github.com/semereherruy/User-Register-App-React-Native-project.git',
      icon: '🔐'
    },
    {
      title: 'E-commerce Website',
      description: 'Full-featured e-commerce platform with user authentication, product management, and shopping cart functionality.',
      tech: ['JavaScript', 'PHP', 'MySQL'],
      category: 'web',
      liveUrl: 'https://blustock.free.nf/d_index.php',
      icon: '🛍️'
    },
    {
      title: 'Rora Cleaning Service',
      description: 'Professional cleaning service website with service booking and customer management features.',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'PHP'],
      category: 'web',
      liveUrl: 'https://rora.great-site.net/',
      icon: '🧹'
    }
  ];

  const certifications = [
    {
      title: 'IT Essentials: PC Hardware & Software',
      issuer: 'Cisco',
      date: 'April 2, 2024',
      icon: '🔧',
      link: 'https://drive.google.com/file/d/1Z5SREJmu8uCNtGkpiTrthUF1rr8592lH/view?usp=drive_link'
    },
    {
      title: 'Digital Computing I & Cyber Fundamentals',
      issuer: 'IQ Business',
      date: 'September 23, 2022',
      icon: '💻',
      link: 'https://drive.google.com/file/d/1QHBy0h1udZW5rrCHwIrjgiRsxiwJ0kLo/view?usp=drive_link'
    },
    {
      title: 'Social Media Marketing',
      issuer: 'HP LIFE',
      date: 'December 2024',
      icon: '📱',
      link: 'https://drive.google.com/file/d/1hUffYFnYAbs-nDKJYzg2YM0MwB_Ctpf2/view?usp=drive_link'
    },
    {
      title: 'Fundamentals of Digital Marketing',
      issuer: 'Google',
      date: 'March 2024',
      icon: '📊',
      link: 'https://drive.google.com/file/d/108Ta0g3tWv6PeQxM8QV1A_5fjvo0IHpB/view?usp=drive_link'
    },
    {
      title: 'Cursor Hackathon Addis Ababa 2025',
      issuer: 'Cursor Community',
      date: 'July 2025',
      icon: '🏆',
      link: 'https://drive.google.com/file/d/1DBCuOzvF46YAv9QAuFmcKzRwc2NprRtR/view?usp=sharing'
    },
    {
      title: 'Basic Electric & Electronics',
      issuer: 'Don Bosco Polytechnic College, Mekelle',
      date: 'August 30, 2023',
      description: '3-month TVET Program',
      icon: '⚡',
      link: 'https://drive.google.com/file/d/1nkDAIYBgmocGx5664H4rgh_q-0z3PU-H/view?usp=drive_link'
    },
    {
      title: 'Business Administration — DISH Program',
      issuer: 'Mekelle University / Digital Innovation & Skills Hub (DISH)',
      date: 'January 23, 2023',
      description: '3-month Online Course - Supported by Nuffic',
      icon: '🎓',
      link: 'https://drive.google.com/file/d/1HVTozZbD9ql7xbgUz5RaPlSJjxfn1umi/view?usp=drive_link'
    }
  ];

  const softSkills = [
    'Problem-Solving', 'Adaptability', 'Teamwork & Collaboration'
  ];

  const languages = [
    'English', 'Amharic', 'Tigrigna'
  ];

  const openCertificate = (cert: any) => {
    if (cert.link) {
      window.open(cert.link, '_blank');
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'dark bg-gray-900' : 'bg-page'}`}>
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float"
          style={{
            left: mousePosition.x * 0.02 + '%',
            top: mousePosition.y * 0.02 + '%',
          }}
        />
        <div 
          className="absolute w-64 h-64 bg-accent/3 rounded-full blur-2xl animate-float-delayed"
          style={{
            right: mousePosition.x * 0.01 + '%',
            bottom: mousePosition.y * 0.01 + '%',
          }}
        />
      </div>

      {/* Glass Navigation - Smaller Size */}
      <nav className="fixed right-4 top-1/2 -translate-y-1/2 z-50">
        <div className="flex flex-col items-center space-y-1">
          <div className={`backdrop-blur-md border rounded-xl p-2 shadow-lg transition-all duration-300 ${
            isDark 
              ? 'bg-gray-800/30 border-gray-700/50' 
              : 'bg-white/30 border-borderSubtle/50'
          }`}>
            <div className="flex flex-col space-y-1">
              {navItems.map(({ id, icon: Icon, label }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`p-2 rounded-lg transition-all duration-300 group relative ${
                    activeSection === id
                      ? 'text-accent bg-accent/10'
                      : isDark 
                        ? 'text-gray-400 hover:text-accent hover:bg-accent/5'
                        : 'text-textMuted hover:text-accent hover:bg-accent/5'
                  }`}
                  aria-label={label}
                >
                  <Icon size={16} />
                  <span className={`absolute right-full mr-2 top-1/2 -translate-y-1/2 backdrop-blur-sm px-2 py-1 rounded-lg text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap border shadow-sm ${
                    isDark 
                      ? 'bg-gray-800/90 text-white border-gray-700'
                      : 'bg-white/90 text-textPrimary border-borderSubtle'
                  }`}>
                    {label}
                  </span>
                </button>
              ))}
            </div>
          </div>
          
          <button
            onClick={toggleTheme}
            className={`backdrop-blur-md border rounded-lg p-2 transition-all duration-300 shadow-lg ${
              isDark 
                ? 'bg-gray-800/30 border-gray-700/50 text-gray-400 hover:text-accent'
                : 'bg-white/30 border-borderSubtle/50 text-textMuted hover:text-accent'
            }`}
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>
      </nav>

      {/* Hero Section - Modern & Unique Design */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="animate-hero-entrance">
            {/* Animated Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent text-sm font-medium mb-8 animate-bounce-subtle">
              <Sparkles size={16} className="animate-spin-slow" />
              Available for opportunities
              <Zap size={16} className="animate-pulse" />
            </div>

            {/* Main Title with Gradient */}
            <h1 className={`text-6xl md:text-8xl font-bold mb-6 transition-colors duration-300 bg-gradient-to-r from-accent via-textPrimary to-accent bg-clip-text text-transparent animate-gradient-x animate-3d-float ${
              isDark ? 'from-accent via-white to-accent' : 'from-accent via-textPrimary to-accent'
            }`} style={{ textShadow: '0 0 30px rgba(6, 182, 212, 0.3)' }}>
              <span className="animate-type-name">Semere Herruy</span>
            </h1>
            
            {/* Motto */}
            <div className="mb-4">
              <p className="text-lg text-accent font-medium animate-fade-in-up-delayed italic">
                "Coding the Future"
              </p>
            </div>
            
            {/* Animated Subtitle */}
            <div className="relative mb-8">
              <h2 className="text-2xl md:text-3xl text-accent font-medium animate-type-writer">
                Aspiring Software Engineer
              </h2>
              <div className="absolute -right-2 top-0 w-1 h-8 bg-accent animate-blink"></div>
            </div>
            
            {/* Fun Fact */}
            <div className="mb-8">
              <div className={`inline-flex items-center gap-2 px-6 py-3 rounded-full border transition-all duration-300 animate-bounce-subtle ${
                isDark 
                  ? 'bg-gray-800/30 border-gray-700/50 text-gray-300' 
                  : 'bg-white/30 border-borderSubtle/50 text-textMuted'
              } backdrop-blur-sm`}>
                <Zap size={18} className="text-accent animate-pulse" />
                <span className="text-sm font-medium">
                  Fun fact: "If you knew me yesterday, you don't know me today — I grow daily."
                </span>
                <span className="text-lg">😉</span>
              </div>
            </div>

            {/* Description with Stagger Animation */}
            <p className={`text-lg md:text-xl mb-12 max-w-4xl mx-auto leading-relaxed transition-colors duration-300 animate-fade-in-up-delayed ${
              isDark ? 'text-gray-300' : 'text-textMuted'
            }`}>
              Integrating business acumen, digital marketing expertise, and technical proficiency 
              to create innovative software solutions that drive meaningful impact.
            </p>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up-delayed-2">
              <a
                href="https://drive.google.com/file/d/1fe1nUAWZptY9Mf8Gh9b7gmsVpOZXTP6b/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-accent text-white rounded-xl font-medium hover:bg-accent/90 transition-all duration-300 focus:ring-2 focus:ring-accent focus:ring-offset-2 transform hover:scale-105 hover:shadow-lg"
              >
                <Download size={20} className="group-hover:animate-bounce" />
                Download CV
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              
              <button
                onClick={() => scrollToSection('projects')}
                className={`group inline-flex items-center gap-3 px-8 py-4 border-2 border-accent text-accent rounded-xl font-medium hover:bg-accent hover:text-white transition-all duration-300 focus:ring-2 focus:ring-accent focus:ring-offset-2 transform hover:scale-105 ${
                  isDark ? 'bg-gray-900/50' : 'bg-white/50'
                } backdrop-blur-sm`}
              >
                <Star size={20} className="group-hover:animate-spin" />
                View Projects
              </button>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-accent/10 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-accent/5 rounded-full animate-float-delayed"></div>
        <div className="absolute top-1/2 left-20 w-12 h-12 bg-accent/5 rounded-full animate-bounce-slow"></div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl font-bold text-center mb-16 transition-colors duration-300 animate-fade-in-up ${
            isDark ? 'text-white' : 'text-textPrimary'
          }`}>About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className={`border rounded-2xl p-8 shadow-sm transition-all duration-300 hover:shadow-md animate-slide-in-left ${
              isDark ? 'bg-gray-800/50 border-gray-700' : 'bg-white border-borderSubtle'
            }`}>
              <p className={`text-lg leading-relaxed mb-8 transition-colors duration-300 ${
                isDark ? 'text-gray-300' : 'text-textMuted'
              }`}>
                I am an aspiring software engineer with a passion for creating innovative solutions 
                that bridge the gap between technology and business needs. Currently pursuing my BSc 
                in Software Engineering at Mekelle University, I combine technical expertise with 
                digital marketing knowledge to develop comprehensive software solutions.
              </p>
              
              <div className="space-y-4">
                <div className={`flex items-center gap-3 transition-colors duration-300 ${
                  isDark ? 'text-white' : 'text-textPrimary'
                }`}>
                  <Mail size={20} className="text-accent" />
                  <span>semereherruy27@gmail.com</span>
                </div>
                <div className={`flex items-center gap-3 transition-colors duration-300 ${
                  isDark ? 'text-white' : 'text-textPrimary'
                }`}>
                  <Phone size={20} className="text-accent" />
                  <span>+251 914 722 740</span>
                </div>
                <div className={`flex items-center gap-3 transition-colors duration-300 ${
                  isDark ? 'text-white' : 'text-textPrimary'
                }`}>
                  <MapPin size={20} className="text-accent" />
                  <span>Ethiopia</span>
                </div>
              </div>
            </div>

            <div className={`border rounded-2xl p-8 shadow-sm transition-all duration-300 hover:shadow-md animate-slide-in-right ${
              isDark ? 'bg-gray-800/50 border-gray-700' : 'bg-white border-borderSubtle'
            }`}>
              <h3 className={`text-xl font-semibold mb-6 transition-colors duration-300 ${
                isDark ? 'text-white' : 'text-textPrimary'
              }`}>Connect With Me</h3>
              <div className="flex gap-4">
                <a
                  href="https://linkedin.com/in/semere-herruy-1833222a4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-4 border rounded-xl transition-all duration-300 focus:ring-2 focus:ring-accent focus:ring-offset-2 transform hover:scale-110 ${
                    isDark 
                      ? 'bg-gray-800/50 border-gray-700 text-white hover:text-accent hover:border-accent'
                      : 'bg-white border-borderSubtle text-textPrimary hover:text-accent hover:border-accent'
                  }`}
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="https://github.com/semereherruy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-4 border rounded-xl transition-all duration-300 focus:ring-2 focus:ring-accent focus:ring-offset-2 transform hover:scale-110 ${
                    isDark 
                      ? 'bg-gray-800/50 border-gray-700 text-white hover:text-accent hover:border-accent'
                      : 'bg-white border-borderSubtle text-textPrimary hover:text-accent hover:border-accent'
                  }`}
                  aria-label="GitHub Profile"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://t.me/Semere17"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-4 border rounded-xl transition-all duration-300 focus:ring-2 focus:ring-accent focus:ring-offset-2 transform hover:scale-110 ${
                    isDark 
                      ? 'bg-gray-800/50 border-gray-700 text-white hover:text-accent hover:border-accent'
                      : 'bg-white border-borderSubtle text-textPrimary hover:text-accent hover:border-accent'
                  }`}
                  aria-label="Telegram Profile"
                >
                  <Send size={24} />
                </a>
                <a
                  href="https://www.upwork.com/freelancers/~019ee0f07dabf6999b?nav_dir=pop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-4 border rounded-xl transition-all duration-300 focus:ring-2 focus:ring-accent focus:ring-offset-2 transform hover:scale-110 ${
                    isDark 
                      ? 'bg-gray-800/50 border-gray-700 text-white hover:text-accent hover:border-accent'
                      : 'bg-white border-borderSubtle text-textPrimary hover:text-accent hover:border-accent'
                  }`}
                  aria-label="Upwork Profile"
                >
                  <Globe size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-4xl font-bold text-center mb-16 transition-colors duration-300 animate-fade-in-up ${
            isDark ? 'text-white' : 'text-textPrimary'
          }`}>Education</h2>
          
          <div className={`border rounded-2xl p-8 shadow-sm transition-all duration-300 hover:shadow-md animate-scale-in ${
            isDark ? 'bg-gray-800/50 border-gray-700' : 'bg-white border-borderSubtle'
          }`}>
            <div className="flex items-start gap-6">
              <div className="p-4 bg-accent/10 rounded-xl">
                <GraduationCap size={32} className="text-accent" />
              </div>
              <div className="flex-1">
                <h3 className={`text-2xl font-semibold mb-2 transition-colors duration-300 ${
                  isDark ? 'text-white' : 'text-textPrimary'
                }`}>BSc in Software Engineering</h3>
                <p className="text-accent font-medium mb-2">Mekelle University</p>
                <p className={`mb-6 transition-colors duration-300 ${
                  isDark ? 'text-gray-300' : 'text-textMuted'
                }`}>Expected Graduation: June 30, 2018 E.C</p>
                
                <div>
                  <h4 className={`font-semibold mb-4 transition-colors duration-300 ${
                    isDark ? 'text-white' : 'text-textPrimary'
                  }`}>Relevant Coursework:</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      {['Data Structures & Algorithms', 'Object-Oriented Programming', 'Database Management Systems'].map((course) => (
                        <div key={course} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                          <span className={`transition-colors duration-300 ${
                            isDark ? 'text-gray-300' : 'text-textMuted'
                          }`}>{course}</span>
                        </div>
                      ))}
                    </div>
                    <div className="space-y-2">
                      {['Web Development', 'Software Engineering Principles', 'Machine Learning'].map((course) => (
                        <div key={course} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                          <span className={`transition-colors duration-300 ${
                            isDark ? 'text-gray-300' : 'text-textMuted'
                          }`}>{course}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl font-bold text-center mb-16 transition-colors duration-300 animate-fade-in-up ${
            isDark ? 'text-white' : 'text-textPrimary'
          }`}>Technical Skills</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <div 
                key={category} 
                className={`border rounded-2xl p-6 shadow-sm transition-all duration-300 hover:shadow-md transform hover:scale-105 animate-fade-in-up ${
                  isDark ? 'bg-gray-800/50 border-gray-700' : 'bg-white border-borderSubtle'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className={`text-xl font-semibold mb-4 capitalize transition-colors duration-300 ${
                  isDark ? 'text-white' : 'text-textPrimary'
                }`}>
                  {category === 'tools' ? 'Tools & Collaboration' : 
                   category === 'api' ? 'API Integration' :
                   category === 'marketing' ? 'Digital Marketing' : category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill) => (
                    <span
                      key={skill}
                      className={`px-3 py-1 text-sm rounded-lg border transition-all duration-200 hover:border-accent hover:text-accent transform hover:scale-105 ${
                        isDark 
                          ? 'bg-gray-700/50 text-gray-300 border-gray-600'
                          : 'bg-gray-50 text-textMuted border-borderSubtle'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Soft Skills & Languages */}
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className={`border rounded-2xl p-6 shadow-sm transition-all duration-300 hover:shadow-md animate-slide-in-left ${
              isDark ? 'bg-gray-800/50 border-gray-700' : 'bg-white border-borderSubtle'
            }`}>
              <div className="flex items-center gap-3 mb-4">
                <Heart size={24} className="text-accent animate-pulse" />
                <h3 className={`text-xl font-semibold transition-colors duration-300 ${
                  isDark ? 'text-white' : 'text-textPrimary'
                }`}>Soft Skills</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-3 py-1 text-sm rounded-lg border transition-all duration-200 hover:border-accent hover:text-accent ${
                      isDark 
                        ? 'bg-gray-700/50 text-gray-300 border-gray-600'
                        : 'bg-gray-50 text-textMuted border-borderSubtle'
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className={`border rounded-2xl p-6 shadow-sm transition-all duration-300 hover:shadow-md animate-slide-in-right ${
              isDark ? 'bg-gray-800/50 border-gray-700' : 'bg-white border-borderSubtle'
            }`}>
              <div className="flex items-center gap-3 mb-4">
                <Languages size={24} className="text-accent animate-bounce-slow" />
                <h3 className={`text-xl font-semibold transition-colors duration-300 ${
                  isDark ? 'text-white' : 'text-textPrimary'
                }`}>Languages</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {languages.map((language) => (
                  <span
                    key={language}
                    className={`px-3 py-1 text-sm rounded-lg border transition-all duration-200 hover:border-accent hover:text-accent ${
                      isDark 
                        ? 'bg-gray-700/50 text-gray-300 border-gray-600'
                        : 'bg-gray-50 text-textMuted border-borderSubtle'
                    }`}
                  >
                    {language}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl font-bold text-center mb-16 transition-colors duration-300 animate-fade-in-up ${
            isDark ? 'text-white' : 'text-textPrimary'
          }`}>Projects</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className={`border rounded-2xl p-6 shadow-sm transition-all duration-300 hover:shadow-md transform hover:scale-105 animate-fade-in-up ${
                  isDark ? 'bg-gray-800/50 border-gray-700' : 'bg-white border-borderSubtle'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl mb-4 animate-bounce-slow">{project.icon}</div>
                <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300 ${
                  isDark ? 'text-white' : 'text-textPrimary'
                }`}>{project.title}</h3>
                {project.status && (
                  <span className="inline-block px-2 py-1 bg-accent/10 text-accent text-xs rounded mb-3">
                    {project.status}
                  </span>
                )}
                <p className={`mb-4 leading-relaxed transition-colors duration-300 ${
                  isDark ? 'text-gray-300' : 'text-textMuted'
                }`}>{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className={`px-2 py-1 text-xs rounded border transition-colors duration-300 ${
                        isDark 
                          ? 'bg-gray-700/50 text-gray-300 border-gray-600'
                          : 'bg-gray-50 text-textMuted border-borderSubtle'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-accent text-accent rounded-lg text-sm font-medium hover:bg-accent hover:text-white transition-all duration-300 focus:ring-2 focus:ring-accent focus:ring-offset-2"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 px-4 py-2 border rounded-lg text-sm font-medium transition-all duration-300 focus:ring-2 focus:ring-accent focus:ring-offset-2 ${
                        isDark 
                          ? 'bg-gray-800/50 border-gray-700 text-gray-300 hover:text-accent hover:border-accent'
                          : 'bg-white border-borderSubtle text-textMuted hover:text-accent hover:border-accent'
                      }`}
                    >
                      <Github size={16} />
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-4xl font-bold text-center mb-16 transition-colors duration-300 animate-fade-in-up ${
            isDark ? 'text-white' : 'text-textPrimary'
          }`}>Work Experience</h2>
          
          <div className="space-y-8">
            <div className={`border rounded-2xl p-8 shadow-sm transition-all duration-300 hover:shadow-md animate-slide-in-left ${
              isDark ? 'bg-gray-800/50 border-gray-700' : 'bg-white border-borderSubtle'
            }`}>
              <div className="flex items-start gap-6">
                <div className="p-4 bg-accent/10 rounded-xl">
                  <Code size={32} className="text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className={`text-2xl font-semibold mb-2 transition-colors duration-300 ${
                    isDark ? 'text-white' : 'text-textPrimary'
                  }`}>Mobile Developer (Flutter)</h3>
                  <p className="text-accent font-medium mb-2">Map Rendering & API Integration</p>
                  <div className={`flex items-center gap-4 mb-4 transition-colors duration-300 ${
                    isDark ? 'text-gray-300' : 'text-textMuted'
                  }`}>
                    <span className="flex items-center gap-2">
                      <Building size={16} />
                      Ambalay Maps · Internship
                    </span>
                    <span className="flex items-center gap-2">
                      <Calendar size={16} />
                      Aug 2025 - Sep 2025 · 2 mos
                    </span>
                  </div>
                  <p className={`mb-4 transition-colors duration-300 ${
                    isDark ? 'text-gray-300' : 'text-textMuted'
                  }`}>ICT Park, Addis Ababa, Ethiopia · Hybrid</p>
                  <p className={`mb-6 leading-relaxed transition-colors duration-300 ${
                    isDark ? 'text-gray-300' : 'text-textMuted'
                  }`}>
                    As a Flutter Developer Intern at Ambalay Maps I implemented core mobile mapping features 
                    and ensured integration between the app, backend services. I worked on MapLibre/PMTiles 
                    tile handling, built interactive map UI (markers, routing controls, POI), and implemented 
                    state management to improve responsiveness.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Flutter', 'Dart', 'MapLibre', 'PMTiles', 'REST APIs', 'Provider', 'Git'].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-lg"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className={`border rounded-2xl p-8 shadow-sm transition-all duration-300 hover:shadow-md animate-slide-in-right ${
              isDark ? 'bg-gray-800/50 border-gray-700' : 'bg-white border-borderSubtle'
            }`}>
              <div className="flex items-start gap-6">
                <div className="p-4 bg-accent/10 rounded-xl">
                  <Briefcase size={32} className="text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className={`text-2xl font-semibold mb-2 transition-colors duration-300 ${
                    isDark ? 'text-white' : 'text-textPrimary'
                  }`}>Software Engineering Intern</h3>
                  <p className="text-accent font-medium mb-2">Backend Developer (Spring Boot)</p>
                  <div className={`flex items-center gap-4 mb-4 transition-colors duration-300 ${
                    isDark ? 'text-gray-300' : 'text-textMuted'
                  }`}>
                    <span className="flex items-center gap-2">
                      <Building size={16} />
                      Medco Technology Solutions
                    </span>
                    <span className="flex items-center gap-2">
                      <Calendar size={16} />
                      March 2025 – May 2025
                    </span>
                  </div>
                  <p className={`leading-relaxed transition-colors duration-300 ${
                    isDark ? 'text-gray-300' : 'text-textMuted'
                  }`}>
                    Worked as a backend developer focusing on Spring Boot applications, contributing to 
                    enterprise-level software solutions and gaining hands-on experience in professional 
                    software development practices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl font-bold text-center mb-16 transition-colors duration-300 animate-fade-in-up ${
            isDark ? 'text-white' : 'text-textPrimary'
          }`}>🎓 Certifications & Training</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div 
                key={index} 
                className={`border rounded-2xl p-6 shadow-sm transition-all duration-300 hover:shadow-md transform hover:scale-105 cursor-pointer animate-fade-in-up ${
                  isDark ? 'bg-gray-800/50 border-gray-700' : 'bg-white border-borderSubtle'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => openCertificate(cert)}
              >
                <div className="text-3xl mb-4 animate-bounce-slow">{cert.icon}</div>
                <h3 className={`text-lg font-semibold mb-2 transition-colors duration-300 ${
                  isDark ? 'text-white' : 'text-textPrimary'
                }`}>{cert.title}</h3>
                <p className="text-accent font-medium mb-2">{cert.issuer}</p>
                <p className={`text-sm mb-3 transition-colors duration-300 ${
                  isDark ? 'text-gray-300' : 'text-textMuted'
                }`}>Issued: {cert.date}</p>
                {cert.description && (
                  <p className={`text-sm mb-4 transition-colors duration-300 ${
                    isDark ? 'text-gray-300' : 'text-textMuted'
                  }`}>{cert.description}</p>
                )}
                {cert.link && (
                  <button 
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-accent text-accent rounded-lg text-sm font-medium hover:bg-accent hover:text-white transition-all duration-300 focus:ring-2 focus:ring-accent focus:ring-offset-2"
                    onClick={(e) => {
                      e.stopPropagation();
                      openCertificate(cert);
                    }}
                  >
                    <Eye size={16} />
                    View Certificate
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clean & Aesthetic Footer */}
      <footer className={`border-t py-16 px-6 transition-colors duration-300 ${
        isDark ? 'bg-gray-900/50 border-gray-800' : 'bg-white border-borderSubtle'
      }`}>
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Content */}
          <div className="mb-8">
            <h3 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-textPrimary'
            }`}>Let's Connect</h3>
            <p className={`text-lg mb-8 transition-colors duration-300 ${
              isDark ? 'text-gray-300' : 'text-textMuted'
            }`}>
              Ready to collaborate on your next project?
            </p>
            
            {/* Social Links */}
            <div className="flex justify-center gap-6 mb-8">
              <a
                href="https://linkedin.com/in/semere-herruy-1833222a4"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full transition-all duration-300 transform hover:scale-110 ${
                  isDark 
                    ? 'text-gray-400 hover:text-accent hover:bg-accent/10'
                    : 'text-textMuted hover:text-accent hover:bg-accent/10'
                }`}
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://github.com/semereherruy"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full transition-all duration-300 transform hover:scale-110 ${
                  isDark 
                    ? 'text-gray-400 hover:text-accent hover:bg-accent/10'
                    : 'text-textMuted hover:text-accent hover:bg-accent/10'
                }`}
                aria-label="GitHub Profile"
              >
                <Github size={24} />
              </a>
              <a
                href="https://t.me/Semere17"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full transition-all duration-300 transform hover:scale-110 ${
                  isDark 
                    ? 'text-gray-400 hover:text-accent hover:bg-accent/10'
                    : 'text-textMuted hover:text-accent hover:bg-accent/10'
                }`}
                aria-label="Telegram Profile"
              >
                <Send size={24} />
              </a>
              <a
                href="https://www.upwork.com/freelancers/~019ee0f07dabf6999b?nav_dir=pop"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full transition-all duration-300 transform hover:scale-110 ${
                  isDark 
                    ? 'text-gray-400 hover:text-accent hover:bg-accent/10'
                    : 'text-textMuted hover:text-accent hover:bg-accent/10'
                }`}
                aria-label="Upwork Profile"
              >
                <Globe size={24} />
              </a>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="pt-8 border-t border-borderSubtle/50">
            <p className={`text-sm transition-colors duration-300 ${
              isDark ? 'text-gray-400' : 'text-textMuted'
            }`}>
              © 2025 Semere Herruy Solomon. Coding the future. Assisted by Bolt AI
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;