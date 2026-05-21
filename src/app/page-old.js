"use client"

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { ArrowRight, Github, ExternalLink, Star, Code, Palette, Layers, Sparkles } from 'lucide-react'

export default function HomePage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const projects = [
    {
      id: 'dashboard',
      title: 'Shadcn Dashboard',
      description: 'A beautiful, minimalistic dashboard built with Shadcn UI components following modern design principles.',
      image: '/api/placeholder/600/400',
      tags: ['React', 'Shadcn', 'Dashboard', 'Analytics'],
      link: '/ui/dashboard',
      status: 'Live',
      featured: true,
      icon: <Layers className="w-6 h-6" />
    },
    {
      id: 'glassmorphism',
      title: 'Glassmorphism UI Kit',
      description: 'A modern glassmorphism UI library with beautiful frosted glass effects and modern components.',
      image: '/api/placeholder/600/400',
      tags: ['Glassmorphism', 'UI Kit', 'Modern', 'Components'],
      link: '/ui/glassmorphism',
      status: 'Live',
      featured: true,
      icon: <Sparkles className="w-6 h-6" />
    },
    {
      id: 'amazon-clone',
      title: 'Amazon Clone',
      description: 'A complete Amazon website clone with shopping cart, product filtering, and interactive features.',
      image: '/api/placeholder/600/400',
      tags: ['E-commerce', 'React', 'Shopping Cart', 'Full Stack'],
      link: '/clones/amazon',
      status: 'Live',
      featured: true,
      icon: <Code className="w-6 h-6" />
    },
    {
      id: 'restaurant',
      title: 'Restaurant Website',
      description: 'A modern restaurant website with AI features, reservations, and beautiful animations.',
      image: '/api/placeholder/600/400',
      tags: ['Restaurant', 'AI', 'Animations', 'Modern'],
      link: '/resturant-website',
      status: 'Live',
      featured: false,
      icon: <Palette className="w-6 h-6" />
    },
    {
      id: 'neumorphic-login',
      title: 'Neumorphic Login',
      description: 'A beautiful neumorphic login form with smooth animations and modern design.',
      image: '/api/placeholder/600/400',
      tags: ['Neumorphism', 'Login', 'Animations', 'Forms'],
      link: '/ui/neumorphic-login',
      status: 'Coming Soon',
      featured: false,
      icon: <Sparkles className="w-6 h-6" />
    },
    {
      id: 'dark-mode-toggle',
      title: 'Dark Mode Toggle',
      description: 'An animated dark mode toggle with smooth transitions and beautiful animations.',
      image: '/api/placeholder/600/400',
      tags: ['Dark Mode', 'Animations', 'Toggle', 'UI'],
      link: '/ui/dark-mode-toggle',
      status: 'Coming Soon',
      featured: false,
      icon: <Code className="w-6 h-6" />
    }
  ]

  const featuredProjects = projects.filter(p => p.featured)
  const otherProjects = projects.filter(p => !p.featured)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl transition-transform duration-1000 ease-out"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
          }}
        />
        <div
          className="absolute top-1/2 right-0 w-96 h-96 rounded-full bg-gradient-to-r from-pink-500/20 to-orange-500/20 blur-3xl transition-transform duration-1000 ease-out"
          style={{
            transform: `translate(${mousePosition.x * -0.02}px, ${mousePosition.y * -0.02}px)`
          }}
        />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="pt-20 pb-16 px-6 max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-6">
              Frontend Showcase
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              A collection of modern, interactive web applications and UI components built with cutting-edge technologies
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <span className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white border border-white/20">
                React & Next.js
              </span>
              <span className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white border border-white/20">
                Shadcn UI
              </span>
              <span className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white border border-white/20">
                Glassmorphism
              </span>
              <span className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white border border-white/20">
                Modern UX/UI
              </span>
            </div>
          </div>
        </header>

        {/* Featured Projects */}
        <section className="px-6 max-w-7xl mx-auto mb-20">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} featured />
            ))}
          </div>
        </section>

        {/* Other Projects */}
        <section className="px-6 max-w-7xl mx-auto mb-20">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">More Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="px-6 py-12 max-w-7xl mx-auto text-center">
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Build Something Amazing?</h3>
            <p className="text-gray-300 mb-6">
              Explore the source code and learn from these modern web development patterns
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="https://github.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                <Github className="w-5 h-5" />
                View on GitHub
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white rounded-lg font-medium hover:bg-white/20 transition-colors border border-white/20"
              >
                <ExternalLink className="w-5 h-5" />
                Live Demo
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

function ProjectCard({ project, featured = false }) {
  return (
    <Link href={project.link} className="group block">
      <div className={`bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/20 transition-all duration-300 hover:scale-105 hover:bg-white/15 ${featured ? 'ring-2 ring-purple-500/50' : ''}`}>
        <div className="aspect-video bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center">
          {project.icon}
          <div className="ml-3 text-white font-medium">{project.title}</div>
        </div>
        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-xl font-bold text-white group-hover:text-purple-200 transition-colors">
              {project.title}
            </h3>
            <div className="flex items-center gap-2">
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${project.status === 'Live'
                  ? 'bg-green-500/20 text-green-300 border border-green-500/30'
                  : 'bg-orange-500/20 text-orange-300 border border-orange-500/30'
                }`}>
                {project.status}
              </span>
              {featured && <Star className="w-4 h-4 text-yellow-400 fill-current" />}
            </div>
          </div>
          <p className="text-gray-300 mb-4 text-sm leading-relaxed">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span key={tag} className="px-2 py-1 bg-white/10 rounded-md text-xs text-gray-200">
                {tag}
              </span>
            ))}
          </div>
          <div className="flex items-center text-purple-300 text-sm font-medium group-hover:text-purple-200 transition-colors">
            View Project
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </Link>
  )
}
