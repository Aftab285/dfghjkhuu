import { useState, useEffect } from 'react';
import {
  Zap, Shield, Bookmark, Cloud, Lock, Search,
  Wallet, CreditCard, Sparkles, ArrowRight, Check,
  Play, BookOpen, Code2, FileText, ChevronRight,
  Menu, X, ExternalLink, Layers, Globe, Download
} from 'lucide-react';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen bg-deep-purple relative overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-midnight-purple via-deep-purple to-midnight-purple opacity-95" />

        {/* Synthwave sun effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px]">
          <div className="absolute inset-0 bg-gradient-to-b from-orange-glow via-magenta to-transparent opacity-60 blur-[100px] rounded-full" />
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[400px] h-[400px]">
            <div className="absolute inset-0 bg-gradient-radial from-yellow-glow/30 to-transparent" />
          </div>
        </div>

        {/* Grid lines */}
        <div className="absolute bottom-0 left-0 right-0 h-[60%] overflow-hidden">
          <div className="absolute bottom-0 left-0 right-0 h-full bg-gradient-to-t from-deep-purple via-transparent to-transparent z-10" />
          <svg className="absolute bottom-0 w-full h-full opacity-20" viewBox="0 0 1200 600" preserveAspectRatio="none">
            <defs>
              <linearGradient id="gridGradient" x1="0%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#FF6B35" stopOpacity="0.8"/>
                <stop offset="50%" stopColor="#9B5DE5" stopOpacity="0.4"/>
                <stop offset="100%" stopColor="#9B5DE5" stopOpacity="0"/>
              </linearGradient>
            </defs>
            {/* Horizontal lines */}
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
              <line
                key={`h-${i}`}
                x1="0" y1={600 - i * 60} x2="1200" y2={600 - i * 60}
                stroke="url(#gridGradient)"
                strokeWidth={i === 0 ? 3 : 1}
              />
            ))}
            {/* Vertical lines with perspective */}
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => (
              <line
                key={`v-${i}`}
                x1={i * 100 + 50} y1="600"
                x2={i * 100 + 50 - 400} y2="0"
                stroke="url(#gridGradient)"
                strokeWidth="1"
                opacity="0.5"
              />
            ))}
          </svg>
        </div>

        {/* Floating orbs */}
        <div
          className="absolute w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{
            left: mousePosition.x - 300,
            top: mousePosition.y - 300,
            background: 'radial-gradient(circle, rgba(255,107,53,0.08) 0%, transparent 70%)',
            transform: 'translate(0, 0)',
            transition: 'transform 0.3s ease-out',
          }}
        />

        {/* Stars */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 60}%`,
                animationDelay: `${Math.random() * 3}s`,
                opacity: Math.random() * 0.8 + 0.2,
              }}
            />
          ))}
        </div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-card py-3' : 'py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-glow to-yellow-glow flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-glow to-yellow-glow rounded-xl blur opacity-30 -z-10" />
              </div>
              <span className="text-xl font-bold text-white">MoondogAI</span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
              <a href="#membership" className="text-gray-300 hover:text-white transition-colors">Membership</a>
              <a href="#resources" className="text-gray-300 hover:text-white transition-colors">Resources</a>
              <a href="#dashboard" className="text-gray-300 hover:text-white transition-colors">Dashboard</a>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <button className="px-4 py-2 text-white/80 hover:text-white transition-colors font-medium flex items-center space-x-2">
                <Wallet className="w-4 h-4" />
                <span>Connect</span>
              </button>
              <button className="px-5 py-2.5 bg-gradient-to-r from-orange-glow to-yellow-glow text-white font-semibold rounded-lg hover:shadow-glow transition-all">
                Mint NFT
              </button>
            </div>

            <button
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden glass-card mx-4 mt-2 rounded-2xl p-4">
            <div className="flex flex-col space-y-4">
              <a href="#features" className="text-white py-2">Features</a>
              <a href="#membership" className="text-white py-2">Membership</a>
              <a href="#resources" className="text-white py-2">Resources</a>
              <a href="#dashboard" className="text-white py-2">Dashboard</a>
              <button className="px-4 py-2 text-white/80 font-medium flex items-center justify-center space-x-2">
                <Wallet className="w-4 h-4" />
                <span>Connect</span>
              </button>
              <button className="px-5 py-2.5 bg-gradient-to-r from-orange-glow to-yellow-glow text-white font-semibold rounded-lg">
                Mint NFT
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-card mb-8 animate-fade-in-up">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm text-gray-300">Now live with Web3 integration</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight animate-fade-in-up animation-delay-100">
            <span className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
              The Future of AI
            </span>
            <br />
            <span className="bg-gradient-to-r from-orange-glow via-yellow-glow to-orange-glow bg-clip-text text-transparent">
              Is Here
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed animate-fade-in-up animation-delay-200">
            Unlock premium AI tools, courses, and research through{' '}
            <span className="text-orange-glow font-semibold">membership</span> or{' '}
            <span className="text-purple-400 font-semibold">NFT access</span>
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up animation-delay-300">
            <button className="group px-8 py-4 bg-gradient-to-r from-orange-glow to-yellow-glow text-white font-bold text-lg rounded-xl hover:shadow-glow transition-all flex items-center space-x-2 w-full sm:w-auto justify-center">
              <span>Get Access</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 glass-card text-white font-semibold text-lg rounded-xl hover:bg-white/10 transition-all flex items-center space-x-2 w-full sm:w-auto justify-center">
              <Play className="w-5 h-5" />
              <span>Explore AI Library</span>
            </button>
          </div>

          {/* Wallet + Mint Preview */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-400">
            <button className="group px-6 py-3 glass-card rounded-xl hover:bg-white/10 transition-all flex items-center space-x-3">
              <Wallet className="w-5 h-5 text-purple-400" />
              <span className="text-white font-medium">Connect Wallet</span>
            </button>
            <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-500 text-white font-semibold rounded-xl hover:from-purple-500 hover:to-purple-400 transition-all flex items-center space-x-2">
              <Sparkles className="w-5 h-5" />
              <span>Mint NFT</span>
            </button>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
              <div className="w-1.5 h-3 bg-white/50 rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / Trust Bar */}
      <section className="relative z-10 py-12 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-gray-500 mb-8 text-sm uppercase tracking-widest">
            Trusted by AI builders & innovators worldwide
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {[
              { value: '10,000+', label: 'Active Users' },
              { value: '500+', label: 'AI Resources' },
              { value: '99.9%', label: 'Uptime' },
              { value: '24/7', label: 'Support' }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-glow to-yellow-glow bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              How It <span className="bg-gradient-to-r from-orange-glow to-yellow-glow bg-clip-text text-transparent">Works</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Get instant access to premium AI resources in three simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: CreditCard,
                step: '01',
                title: 'Buy Membership',
                description: 'Choose a monthly or annual subscription plan that fits your needs',
                color: 'from-orange-glow to-red-500'
              },
              {
                icon: Sparkles,
                step: '02',
                title: 'Or Mint NFT',
                description: 'Acquire a lifetime NFT access pass with exclusive benefits',
                color: 'from-purple-500 to-purple-400'
              },
              {
                icon: Zap,
                step: '03',
                title: 'Unlock Instantly',
                description: 'Get immediate access to all premium AI tools and resources',
                color: 'from-yellow-glow to-orange-glow'
              }
            ].map((item, i) => (
              <div key={i} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl blur-xl group-hover:blur-2xl transition-all opacity-0 group-hover:opacity-100" />
                <div className="relative glass-card rounded-3xl p-8 hover:bg-white/5 transition-all duration-300">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 shadow-lg`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-6xl font-bold text-white/5 absolute top-4 right-4">{item.step}</div>
                  <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.description}</p>
                  {i < 2 && (
                    <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 z-20">
                      <ChevronRight className="w-8 h-8 text-purple-400/50" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership + NFT Section */}
      <section id="membership" className="relative z-10 py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Choose Your <span className="bg-gradient-to-r from-orange-glow to-yellow-glow bg-clip-text text-transparent">Access</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Flexible options to unlock the full power of MoondogAI
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Membership Card */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-glow/20 to-yellow-glow/20 rounded-3xl blur-xl" />
              <div className="relative glass-card rounded-3xl p-8 border border-orange-glow/30 hover:border-orange-glow/50 transition-all">
                <div className="inline-block px-4 py-1 bg-gradient-to-r from-orange-glow to-yellow-glow rounded-full text-sm font-semibold text-white mb-6">
                  Popular
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">Monthly Membership</h3>
                <div className="flex items-baseline mb-6">
                  <span className="text-5xl font-bold text-white">$29</span>
                  <span className="text-gray-400 ml-2">/month</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {[
                    'Full access to AI tools library',
                    'Weekly new resources added',
                    'Priority support',
                    'Course access',
                    'Research papers'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-orange-glow" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full py-4 bg-gradient-to-r from-orange-glow to-yellow-glow text-white font-bold rounded-xl hover:shadow-glow transition-all">
                  Subscribe Now
                </button>
              </div>
            </div>

            {/* NFT Card */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-purple-400/20 rounded-3xl blur-xl" />
              <div className="relative glass-card rounded-3xl p-8 border border-purple-500/30 hover:border-purple-500/50 transition-all">
                <div className="inline-block px-4 py-1 bg-gradient-to-r from-purple-500 to-purple-400 rounded-full text-sm font-semibold text-white mb-6">
                  Lifetime Access
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">NFT Access Pass</h3>
                <div className="flex items-baseline mb-6">
                  <span className="text-5xl font-bold text-white">0.5</span>
                  <span className="text-gray-400 ml-2">ETH</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {[
                    'One-time payment, lifetime access',
                    'Exclusive NFT holder benefits',
                    'All future updates included',
                    'Priority access to new features',
                    'Community voting rights'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-purple-400" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full py-4 bg-gradient-to-r from-purple-500 to-purple-400 text-white font-bold rounded-xl hover:shadow-purple transition-all">
                  Mint NFT
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Resource Library Preview */}
      <section id="resources" className="relative z-10 py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Explore the <span className="bg-gradient-to-r from-orange-glow to-yellow-glow bg-clip-text text-transparent">AI Library</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Discover premium AI tools, courses, and research curated for innovators
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Play,
                title: 'Tutorials & Courses',
                count: '200+ Resources',
                description: 'Learn AI from beginner to advanced',
                gradient: 'from-orange-glow to-red-500'
              },
              {
                icon: Code2,
                title: 'AI Tools & Software',
                count: '150+ Tools',
                description: 'Cutting-edge tools for your projects',
                gradient: 'from-purple-500 to-purple-400'
              },
              {
                icon: FileText,
                title: 'Research Papers',
                count: '100+ Papers',
                description: 'Stay ahead with latest research',
                gradient: 'from-yellow-glow to-orange-glow'
              }
            ].map((category, i) => (
              <div key={i} className="group relative cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-all" />
                <div className="relative glass-card rounded-3xl p-8 hover:bg-white/5 transition-all duration-300 h-full">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center mb-6 shadow-lg`}>
                    <category.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{category.title}</h3>
                  <p className="text-gray-400 mb-4">{category.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-orange-glow font-semibold">{category.count}</span>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="px-8 py-4 glass-card text-white font-semibold rounded-xl hover:bg-white/10 transition-all inline-flex items-center space-x-2">
              <BookOpen className="w-5 h-5" />
              <span>Browse Full Library</span>
            </button>
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section id="features" className="relative z-10 py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Platform <span className="bg-gradient-to-r from-orange-glow to-yellow-glow bg-clip-text text-transparent">Features</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Everything you need for seamless AI resource discovery
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Zap, title: 'Instant Access', description: 'Get immediate access after purchase' },
              { icon: Wallet, title: 'Web3 + Stripe', description: 'Multiple payment options supported' },
              { icon: Bookmark, title: 'Bookmark & Save', description: 'Save your favorite resources' },
              { icon: Globe, title: 'Cross-Device', description: 'Access from any device anywhere' },
              { icon: Lock, title: 'Secure & Private', description: 'Your data is always protected' },
              { icon: Layers, title: 'NFT Verified', description: 'Blockchain-verified access pass' }
            ].map((feature, i) => (
              <div key={i} className="glass-card rounded-2xl p-6 hover:bg-white/5 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-glow/20 to-purple-500/20 flex items-center justify-center mb-4 group-hover:from-orange-glow/30 group-hover:to-purple-500/30 transition-all">
                  <feature.icon className="w-6 h-6 text-orange-glow" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section id="dashboard" className="relative z-10 py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Your <span className="bg-gradient-to-r from-orange-glow to-yellow-glow bg-clip-text text-transparent">Dashboard</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A premium experience designed for maximum productivity
            </p>
          </div>

          {/* Mock Dashboard */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-glow/10 to-purple-500/10 rounded-3xl blur-3xl" />
            <div className="relative glass-card rounded-3xl p-6 overflow-hidden">
              {/* Top bar */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-glow to-yellow-glow flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-white font-bold text-lg">MoondogAI</span>
                </div>
                <div className="flex-1 max-w-md mx-4">
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search AI resources..."
                      className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-orange-glow/50 transition-all"
                    />
                  </div>
                </div>
                <button className="px-4 py-2 glass-card rounded-lg text-white text-sm font-medium">
                  <Wallet className="w-4 h-4 inline mr-2" />
                  Connected
                </button>
              </div>

              <div className="grid lg:grid-cols-4 gap-6">
                {/* Sidebar */}
                <div className="lg:col-span-1 space-y-2">
                  {['Dashboard', 'Library', 'Courses', 'Research', 'Bookmarks', 'Settings'].map((item, i) => (
                    <button
                      key={i}
                      className={`w-full text-left px-4 py-3 rounded-xl transition-all ${i === 0 ? 'bg-gradient-to-r from-orange-glow/20 to-transparent text-white font-medium' : 'text-gray-400 hover:bg-white/5 hover:text-white'}`}
                    >
                      {item}
                    </button>
                  ))}
                </div>

                {/* Main content */}
                <div className="lg:col-span-3">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-white">Featured Resources</h3>
                    <div className="flex space-x-2">
                      <button className="px-4 py-2 bg-gradient-to-r from-orange-glow to-yellow-glow rounded-lg text-white text-sm font-medium">
                        All
                      </button>
                      <button className="px-4 py-2 glass-card rounded-lg text-gray-400 text-sm hover:text-white transition-all">
                        Tools
                      </button>
                      <button className="px-4 py-2 glass-card rounded-lg text-gray-400 text-sm hover:text-white transition-all">
                        Courses
                      </button>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                      { title: 'ChatGPT Mastery', type: 'Course', category: 'AI', icon: Play },
                      { title: 'TensorFlow Pro', type: 'Tool', category: 'ML', icon: Code2 },
                      { title: 'Neural Networks', type: 'Paper', category: 'Research', icon: FileText },
                    ].map((item, i) => (
                      <div key={i} className="glass-card rounded-2xl p-5 hover:bg-white/5 transition-all cursor-pointer group">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-orange-glow/20 flex items-center justify-center mb-4">
                          <item.icon className="w-6 h-6 text-purple-400" />
                        </div>
                        <div className="text-xs text-orange-glow font-medium mb-2">{item.type}</div>
                        <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                        <p className="text-gray-400 text-sm mb-4">{item.category}</p>
                        <button className="text-sm text-purple-400 font-medium group-hover:text-purple-300 transition-colors flex items-center">
                          View <ExternalLink className="w-4 h-4 ml-1" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-glow/20 to-purple-500/20 rounded-3xl blur-3xl" />
            <div className="relative glass-card rounded-3xl p-12 md:p-16">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-orange-glow/20 to-purple-500/20 rounded-full mb-6">
                <Sparkles className="w-4 h-4 text-orange-glow" />
                <span className="text-sm text-gray-300">Limited Time Offer</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Start Unlocking <span className="bg-gradient-to-r from-orange-glow to-yellow-glow bg-clip-text text-transparent">AI Power</span> Today
              </h2>
              <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
                Join thousands of AI enthusiasts and builders who are already accessing premium resources
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="group px-8 py-4 bg-gradient-to-r from-orange-glow to-yellow-glow text-white font-bold text-lg rounded-xl hover:shadow-glow transition-all flex items-center space-x-2 w-full sm:w-auto justify-center">
                  <span>Get Membership</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 glass-card text-white font-semibold text-lg rounded-xl hover:bg-white/10 transition-all flex items-center space-x-2 w-full sm:w-auto justify-center">
                  <Sparkles className="w-5 h-5" />
                  <span>Mint NFT</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-12 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-glow to-yellow-glow flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold text-white">MoondogAI</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                The ultimate AI resource platform. Unlock premium tools, courses, and research through membership or NFT access.
              </p>
              <div className="flex space-x-4">
                {['Twitter', 'Discord', 'GitHub'].map((social, i) => (
                  <button key={i} className="px-4 py-2 glass-card rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-all text-sm">
                    {social}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-3">
                {['Features', 'Pricing', 'Resources', 'Documentation'].map((item, i) => (
                  <li key={i}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-3">
                {['About', 'Blog', 'Careers', 'Contact'].map((item, i) => (
                  <li key={i}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © 2026 MoondogAI. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">Terms of Service</a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;