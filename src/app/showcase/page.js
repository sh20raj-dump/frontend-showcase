'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const FrontendShowcase = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const projects = [
    {
      id: 'dashboard',
      title: 'Shadcn Dashboard',
      description: 'A comprehensive dashboard built with modern UI components, featuring project analytics, progress tracking, and beautiful visualizations.',
      image: '/api/placeholder/400/250',
      category: 'dashboard',
      tags: ['React', 'Tailwind', 'Charts', 'Analytics'],
      link: '/ui/dashboard',
      status: 'completed',
      features: ['Project Management', 'Analytics', 'Progress Tracking', 'Responsive Design']
    },
    {
      id: 'glassmorphism',
      title: 'Glassmorphism UI Kit',
      description: 'Modern glass morphism design system with interactive components, live code examples, and beautiful animations.',
      image: '/api/placeholder/400/250',
      category: 'ui-kit',
      tags: ['Glass Design', 'CSS', 'Animations', 'Modern UI'],
      link: '/ui/glassmorphism',
      status: 'completed',
      features: ['Glass Effects', 'Interactive Demos', 'Code Examples', 'Copy to Clipboard']
    },
    {
      id: 'neumorphic',
      title: 'Neumorphic Login Form',
      description: 'Soft UI authentication system with neumorphic design principles, smooth transitions, and form validation.',
      image: '/api/placeholder/400/250',
      category: 'forms',
      tags: ['Neumorphism', 'Authentication', 'Forms', 'Soft UI'],
      link: '/ui/neumorphic',
      status: 'completed',
      features: ['Soft Shadows', 'Form Validation', 'Social Login', 'Responsive']
    },
    {
      id: 'dark-mode',
      title: 'Dark Mode Toggle',
      description: 'Advanced theme switching system with multiple toggle variants, smooth animations, and system preference detection.',
      image: '/api/placeholder/400/250',
      category: 'components',
      tags: ['Dark Mode', 'Theme Toggle', 'Animations', 'Accessibility'],
      link: '/ui/dark-mode',
      status: 'completed',
      features: ['Multiple Variants', 'System Detection', 'Smooth Transitions', 'Accessible']
    },
    {
      id: 'component-library',
      title: 'Component Library',
      description: 'Comprehensive collection of reusable components with live previews, code examples, and installation guides.',
      image: '/api/placeholder/400/250',
      category: 'ui-kit',
      tags: ['Components', 'Library', 'Reusable', 'Documentation'],
      link: '/ui/component-library',
      status: 'completed',
      features: ['50+ Components', 'Live Preview', 'Copy Code', 'Installation Guide']
    },
    {
      id: 'amazon-clone',
      title: 'Amazon E-commerce Clone',
      description: 'Full-featured e-commerce platform with shopping cart, product catalog, user authentication, and payment integration.',
      image: '/api/placeholder/400/250',
      category: 'clone',
      tags: ['E-commerce', 'Next.js', 'Shopping Cart', 'Full Stack'],
      link: '/clones/amazon',
      status: 'completed',
      features: ['Product Catalog', 'Shopping Cart', 'User Auth', 'Payment Integration']
    },
    {
      id: 'restaurant-website',
      title: 'Restaurant Website',
      description: 'Beautiful restaurant website with menu display, reservation system, and modern design aesthetics.',
      image: '/api/placeholder/400/250',
      category: 'website',
      tags: ['Restaurant', 'Menu', 'Reservations', 'Business'],
      link: '/restaurant-website',
      status: 'completed',
      features: ['Menu Display', 'Reservations', 'Gallery', 'Contact Forms']
    }
  ]

  const categories = [
    { id: 'all', name: 'All Projects', count: projects.length },
    { id: 'ui-kit', name: 'UI Kits', count: projects.filter(p => p.category === 'ui-kit').length },
    { id: 'dashboard', name: 'Dashboards', count: projects.filter(p => p.category === 'dashboard').length },
    { id: 'clone', name: 'Clones', count: projects.filter(p => p.category === 'clone').length },
    { id: 'components', name: 'Components', count: projects.filter(p => p.category === 'components').length },
    { id: 'forms', name: 'Forms', count: projects.filter(p => p.category === 'forms').length }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  const stats = [
    { label: 'Total Projects', value: projects.length, icon: '🚀' },
    { label: 'UI Components', value: '150+', icon: '🎨' },
    { label: 'Code Examples', value: '200+', icon: '💻' },
    { label: 'Technologies', value: '15+', icon: '⚡' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 opacity-90"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white opacity-10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Frontend
                <span className="block bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">
                  Showcase
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
                A curated collection of modern UI components, dashboards, and full-stack applications 
                built with cutting-edge technologies
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <Link href="#projects" className="px-8 py-4 bg-white text-purple-600 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
                  Explore Projects
                </Link>
                <Link href="/ui/dashboard" className="px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-purple-600 transition-all duration-200">
                  View Dashboard
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className={`text-center transition-all duration-500 delay-${index * 100}`}>
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From stunning UI kits to full-stack applications, explore our collection of 
              carefully crafted frontend projects
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                  activeFilter === category.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:scale-105 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-purple-400 to-pink-400 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20"></div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-white/90 text-sm font-medium text-gray-700 rounded-full">
                      {project.status}
                    </span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl text-white/30">
                      {project.category === 'ui-kit' && '🎨'}
                      {project.category === 'dashboard' && '📊'}
                      {project.category === 'clone' && '🛍️'}
                      {project.category === 'components' && '🧩'}
                      {project.category === 'forms' && '📝'}
                      {project.category === 'website' && '🌐'}
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.features.slice(0, 2).map((feature, idx) => (
                        <span key={idx} className="px-2 py-1 bg-gray-100 text-xs text-gray-600 rounded-md">
                          {feature}
                        </span>
                      ))}
                      {project.features.length > 2 && (
                        <span className="px-2 py-1 bg-gray-100 text-xs text-gray-600 rounded-md">
                          +{project.features.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <Link 
                      href={project.link}
                      className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-200 text-center"
                    >
                      View Project
                    </Link>
                    <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Built With Modern Technologies</h2>
            <p className="text-xl text-gray-600">Leveraging the latest tools and frameworks for optimal performance</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              { name: 'React', icon: '⚛️' },
              { name: 'Next.js', icon: '▲' },
              { name: 'Tailwind', icon: '🎨' },
              { name: 'TypeScript', icon: '📘' },
              { name: 'Node.js', icon: '🟢' },
              { name: 'MongoDB', icon: '🍃' }
            ].map((tech, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                <div className="text-4xl mb-3">{tech.icon}</div>
                <div className="font-medium text-gray-900">{tech.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Build Something Amazing?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Explore our components, learn from our code, and create beautiful user interfaces
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/ui/component-library" className="px-8 py-4 bg-white text-purple-600 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-200 shadow-lg">
              Browse Components
            </Link>
            <Link href="/ui/dashboard" className="px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-purple-600 transition-all duration-200">
              View Dashboard
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <h3 className="text-2xl font-bold mb-4">Frontend Showcase</h3>
              <p className="text-gray-400 mb-6">
                A collection of modern UI components and full-stack applications 
                showcasing the latest in frontend development.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/ui/dashboard" className="hover:text-white transition-colors">Dashboard</Link></li>
                <li><Link href="/ui/component-library" className="hover:text-white transition-colors">Components</Link></li>
                <li><Link href="/ui/glassmorphism" className="hover:text-white transition-colors">UI Kits</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Projects</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/clones/amazon" className="hover:text-white transition-colors">Amazon Clone</Link></li>
                <li><Link href="/ui/neumorphic" className="hover:text-white transition-colors">Neumorphic Forms</Link></li>
                <li><Link href="/ui/dark-mode" className="hover:text-white transition-colors">Dark Mode Toggle</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Frontend Showcase. Built with ❤️ using React & Tailwind CSS.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default FrontendShowcase
