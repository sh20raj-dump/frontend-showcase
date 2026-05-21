"use client"

import { useState, useEffect } from "react"
import { Sun, Moon, Monitor, Palette, Sparkles, Code, Download } from "lucide-react"
import Link from "next/link"

export default function DarkModeShowcase() {
    const [darkMode, setDarkMode] = useState(false)
    const [theme, setTheme] = useState('system')
    const [animationType, setAnimationType] = useState('slide')

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [darkMode])

    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
    }

    const animations = [
        { id: 'slide', name: 'Slide' },
        { id: 'flip', name: 'Flip' },
        { id: 'rotate', name: 'Rotate' },
        { id: 'bounce', name: 'Bounce' }
    ]

    const themeOptions = [
        { id: 'light', name: 'Light', icon: Sun },
        { id: 'dark', name: 'Dark', icon: Moon },
        { id: 'system', name: 'System', icon: Monitor }
    ]

    return (
        <div className={`min-h-screen transition-all duration-500 ${darkMode ? 'dark bg-gray-900' : 'bg-gradient-to-br from-blue-50 to-indigo-100'}`}>
            <div className="container mx-auto px-4 py-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className={`p-8 rounded-3xl transition-all duration-500 ${darkMode ? 'bg-gray-800 shadow-2xl' : 'bg-white/80 backdrop-blur-sm shadow-xl'}`}>
                        <div className="mb-6">
                            <Link href="/" className={`inline-flex items-center px-4 py-2 rounded-lg transition-all duration-200 ${darkMode ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-white/60 hover:bg-white/80 text-gray-700'}`}>
                                ← Back to Showcase
                            </Link>
                        </div>
                        <h1 className={`text-4xl font-bold mb-4 transition-colors duration-500 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                            Dark Mode Toggle
                        </h1>
                        <p className={`text-lg transition-colors duration-500 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                            Beautiful animated theme switchers with smooth transitions
                        </p>
                        <div className="flex gap-4 justify-center mt-6">
                            <button className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${darkMode ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}>
                                <Download className="h-4 w-4" />
                                Download
                            </button>
                            <button className={`flex items-center gap-2 px-6 py-3 rounded-full border-2 transition-all duration-300 ${darkMode ? 'border-gray-600 text-gray-300 hover:bg-gray-700' : 'border-gray-300 text-gray-700 hover:bg-gray-50'}`}>
                                <Code className="h-4 w-4" />
                                View Code
                            </button>
                        </div>
                    </div>
                </div>

                {/* Toggle Variants */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {/* Basic Toggle */}
                    <div className={`p-6 rounded-2xl transition-all duration-500 ${darkMode ? 'bg-gray-800 shadow-xl' : 'bg-white shadow-lg'}`}>
                        <h3 className={`text-xl font-semibold mb-4 transition-colors duration-500 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                            Basic Toggle
                        </h3>
                        <div className="flex items-center justify-center">
                            <button
                                onClick={toggleDarkMode}
                                className={`relative w-16 h-8 rounded-full transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300 ${darkMode ? 'bg-blue-600' : 'bg-gray-300'}`}
                            >
                                <div
                                    className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform duration-300 flex items-center justify-center ${darkMode ? 'transform translate-x-8' : ''}`}
                                >
                                    {darkMode ? (
                                        <Moon className="w-4 h-4 text-blue-600" />
                                    ) : (
                                        <Sun className="w-4 h-4 text-yellow-500" />
                                    )}
                                </div>
                            </button>
                        </div>
                    </div>

                    {/* Animated Toggle */}
                    <div className={`p-6 rounded-2xl transition-all duration-500 ${darkMode ? 'bg-gray-800 shadow-xl' : 'bg-white shadow-lg'}`}>
                        <h3 className={`text-xl font-semibold mb-4 transition-colors duration-500 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                            Animated Toggle
                        </h3>
                        <div className="flex items-center justify-center">
                            <button
                                onClick={toggleDarkMode}
                                className={`relative w-20 h-10 rounded-full transition-all duration-500 focus:outline-none ${darkMode ? 'bg-gradient-to-r from-purple-600 to-blue-600' : 'bg-gradient-to-r from-yellow-400 to-orange-500'}`}
                            >
                                <div
                                    className={`absolute top-1 left-1 w-8 h-8 bg-white rounded-full transition-all duration-500 flex items-center justify-center shadow-lg ${darkMode ? 'transform translate-x-10' : ''}`}
                                >
                                    <div className={`transition-all duration-500 ${darkMode ? 'rotate-180' : 'rotate-0'}`}>
                                        {darkMode ? (
                                            <Moon className="w-5 h-5 text-blue-600" />
                                        ) : (
                                            <Sun className="w-5 h-5 text-yellow-600" />
                                        )}
                                    </div>
                                </div>
                                <div className={`absolute inset-0 rounded-full ${darkMode ? 'bg-gradient-to-r from-purple-600 to-blue-600' : 'bg-gradient-to-r from-yellow-400 to-orange-500'} transition-all duration-500`}>
                                    {/* Stars for dark mode */}
                                    {darkMode && (
                                        <div className="absolute inset-0 overflow-hidden rounded-full">
                                            <Sparkles className="absolute top-2 right-3 w-2 h-2 text-white animate-pulse" />
                                            <Sparkles className="absolute top-3 right-6 w-1 h-1 text-white animate-pulse delay-100" />
                                            <Sparkles className="absolute top-5 right-4 w-1 h-1 text-white animate-pulse delay-200" />
                                        </div>
                                    )}
                                </div>
                            </button>
                        </div>
                    </div>

                    {/* Theme Selector */}
                    <div className={`p-6 rounded-2xl transition-all duration-500 ${darkMode ? 'bg-gray-800 shadow-xl' : 'bg-white shadow-lg'}`}>
                        <h3 className={`text-xl font-semibold mb-4 transition-colors duration-500 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                            Theme Selector
                        </h3>
                        <div className="flex gap-2 justify-center">
                            {themeOptions.map((option) => {
                                const Icon = option.icon
                                return (
                                    <button
                                        key={option.id}
                                        onClick={() => {
                                            setTheme(option.id)
                                            if (option.id === 'dark') setDarkMode(true)
                                            if (option.id === 'light') setDarkMode(false)
                                        }}
                                        className={`p-3 rounded-xl transition-all duration-300 ${
                                            theme === option.id
                                                ? (darkMode ? 'bg-blue-600 text-white' : 'bg-blue-600 text-white')
                                                : (darkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200')
                                        }`}
                                    >
                                        <Icon className="w-5 h-5" />
                                    </button>
                                )
                            })}
                        </div>
                    </div>
                </div>

                {/* Interactive Demo */}
                <div className={`p-8 rounded-3xl transition-all duration-500 mb-12 ${darkMode ? 'bg-gray-800 shadow-2xl' : 'bg-white shadow-xl'}`}>
                    <div className="flex items-center justify-between mb-6">
                        <h3 className={`text-2xl font-semibold transition-colors duration-500 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                            Interactive Demo
                        </h3>
                        <div className="flex items-center gap-4">
                            <span className={`text-sm transition-colors duration-500 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                Animation:
                            </span>
                            <select
                                value={animationType}
                                onChange={(e) => setAnimationType(e.target.value)}
                                className={`px-3 py-2 rounded-lg border transition-all duration-300 ${
                                    darkMode 
                                        ? 'bg-gray-700 border-gray-600 text-white' 
                                        : 'bg-white border-gray-300 text-gray-900'
                                }`}
                            >
                                {animations.map((anim) => (
                                    <option key={anim.id} value={anim.id}>
                                        {anim.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Card Demo */}
                        <div className={`p-6 rounded-2xl border transition-all duration-500 ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-200'}`}>
                            <div className="flex items-center gap-3 mb-4">
                                <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ${darkMode ? 'bg-blue-600' : 'bg-blue-500'}`}>
                                    <Palette className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h4 className={`font-semibold transition-colors duration-500 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                        Design System
                                    </h4>
                                    <p className={`text-sm transition-colors duration-500 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                        Theme-aware components
                                    </p>
                                </div>
                            </div>
                            <p className={`text-sm leading-relaxed transition-colors duration-500 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                This demo showcases how components adapt to different themes with smooth animations 
                                and transitions. Notice how colors, shadows, and backgrounds change seamlessly.
                            </p>
                        </div>

                        {/* Stats Demo */}
                        <div className={`p-6 rounded-2xl border transition-all duration-500 ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-200'}`}>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <span className={`font-medium transition-colors duration-500 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                        User Preference
                                    </span>
                                    <span className={`text-sm transition-colors duration-500 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                        {darkMode ? 'Dark Mode' : 'Light Mode'}
                                    </span>
                                </div>
                                <div className={`w-full h-2 rounded-full transition-all duration-500 ${darkMode ? 'bg-gray-600' : 'bg-gray-200'}`}>
                                    <div
                                        className={`h-full rounded-full transition-all duration-1000 ${darkMode ? 'bg-blue-500' : 'bg-blue-600'}`}
                                        style={{ width: darkMode ? '85%' : '60%' }}
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-4 pt-2">
                                    <div className="text-center">
                                        <div className={`text-2xl font-bold transition-colors duration-500 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                            {darkMode ? '85%' : '60%'}
                                        </div>
                                        <div className={`text-xs transition-colors duration-500 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                            Theme Score
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <div className={`text-2xl font-bold transition-colors duration-500 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                            {darkMode ? '🌙' : '☀️'}
                                        </div>
                                        <div className={`text-xs transition-colors duration-500 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                            Current Theme
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Code Example */}
                <div className={`p-8 rounded-3xl transition-all duration-500 mb-12 ${darkMode ? 'bg-gray-800 shadow-2xl' : 'bg-white shadow-xl'}`}>
                    <h3 className={`text-2xl font-semibold mb-6 transition-colors duration-500 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        Implementation
                    </h3>
                    <div className={`p-6 rounded-xl transition-all duration-500 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
                        <pre className={`text-sm overflow-x-auto transition-colors duration-500 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            <code>{`// React Dark Mode Toggle
const [darkMode, setDarkMode] = useState(false)

useEffect(() => {
  if (darkMode) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}, [darkMode])

const toggleDarkMode = () => {
  setDarkMode(!darkMode)
}

// CSS Classes
.dark {
  --bg-primary: #1f2937;
  --text-primary: #ffffff;
}

.light {
  --bg-primary: #ffffff;
  --text-primary: #1f2937;
}`}</code>
                        </pre>
                    </div>
                </div>

                {/* Navigation */}
                <div className="text-center">
                    <div className={`p-6 rounded-2xl inline-block transition-all duration-500 ${darkMode ? 'bg-gray-800 shadow-xl' : 'bg-white shadow-lg'}`}>
                        <div className="flex gap-4">
                            <Link href="/ui/neumorphic">
                                <button className={`px-6 py-3 rounded-xl transition-all duration-300 ${darkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                                    ← Neumorphic
                                </button>
                            </Link>
                            <Link href="/ui/dashboard">
                                <button className={`px-6 py-3 rounded-xl transition-all duration-300 ${darkMode ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-blue-600 text-white hover:bg-blue-700'}`}>
                                    Dashboard
                                </button>
                            </Link>
                            <Link href="/ui/component-library">
                                <button className={`px-6 py-3 rounded-xl transition-all duration-300 ${darkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                                    Components →
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
