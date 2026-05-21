'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'

const ComponentLibrary = () => {
  const [activeCategory, setActiveCategory] = useState('buttons')
  const [copiedCode, setCopiedCode] = useState('')
  const [isInstalling, setIsInstalling] = useState(false)

  const categories = [
    { id: 'buttons', name: 'Buttons', icon: '🔘' },
    { id: 'inputs', name: 'Inputs', icon: '📝' },
    { id: 'cards', name: 'Cards', icon: '🃏' },
    { id: 'modals', name: 'Modals', icon: '🪟' },
    { id: 'navigation', name: 'Navigation', icon: '🧭' },
    { id: 'data', name: 'Data Display', icon: '📊' }
  ]

  const components = {
    buttons: [
      {
        name: 'Primary Button',
        description: 'Main action button with gradient background',
        component: (
          <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
            Primary Action
          </button>
        ),
        code: `<button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
  Primary Action
</button>`
      },
      {
        name: 'Outline Button',
        description: 'Secondary button with border styling',
        component: (
          <button className="px-6 py-3 border-2 border-blue-500 text-blue-500 rounded-lg font-medium hover:bg-blue-500 hover:text-white transition-all duration-200">
            Outline Button
          </button>
        ),
        code: `<button className="px-6 py-3 border-2 border-blue-500 text-blue-500 rounded-lg font-medium hover:bg-blue-500 hover:text-white transition-all duration-200">
  Outline Button
</button>`
      },
      {
        name: 'Ghost Button',
        description: 'Minimal button with subtle hover effects',
        component: (
          <button className="px-6 py-3 text-gray-700 rounded-lg font-medium hover:bg-gray-100 transition-all duration-200">
            Ghost Button
          </button>
        ),
        code: `<button className="px-6 py-3 text-gray-700 rounded-lg font-medium hover:bg-gray-100 transition-all duration-200">
  Ghost Button
</button>`
      }
    ],
    inputs: [
      {
        name: 'Floating Label Input',
        description: 'Input with animated floating label',
        component: (
          <div className="relative">
            <input
              type="text"
              className="peer w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-200"
              placeholder=" "
            />
            <label className="absolute left-4 top-3 text-gray-500 transition-all duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-3 peer-focus:text-sm peer-focus:text-blue-500 bg-white px-1">
              Email Address
            </label>
          </div>
        ),
        code: `<div className="relative">
  <input
    type="text"
    className="peer w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-200"
    placeholder=" "
  />
  <label className="absolute left-4 top-3 text-gray-500 transition-all duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-3 peer-focus:text-sm peer-focus:text-blue-500 bg-white px-1">
    Email Address
  </label>
</div>`
      },
      {
        name: 'Search Input',
        description: 'Input with search icon and clear functionality',
        component: (
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              className="pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full"
              placeholder="Search components..."
            />
          </div>
        ),
        code: `<div className="relative">
  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
    <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  </div>
  <input
    type="text"
    className="pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full"
    placeholder="Search components..."
  />
</div>`
      }
    ],
    cards: [
      {
        name: 'Product Card',
        description: 'Card component for displaying products',
        component: (
          <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden max-w-sm">
            <div className="h-48 bg-gradient-to-br from-purple-400 to-pink-400"></div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Product Name</h3>
              <p className="text-gray-600 mb-4">Beautiful product description that explains the features.</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-purple-600">$99</span>
                <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ),
        code: `<div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden max-w-sm">
  <div className="h-48 bg-gradient-to-br from-purple-400 to-pink-400"></div>
  <div className="p-6">
    <h3 className="text-xl font-semibold text-gray-800 mb-2">Product Name</h3>
    <p className="text-gray-600 mb-4">Beautiful product description that explains the features.</p>
    <div className="flex justify-between items-center">
      <span className="text-2xl font-bold text-purple-600">$99</span>
      <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
        Add to Cart
      </button>
    </div>
  </div>
</div>`
      }
    ],
    modals: [
      {
        name: 'Confirmation Modal',
        description: 'Modal for user confirmations',
        component: (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl p-6 max-w-md w-full">
              <h3 className="text-xl font-semibold mb-4">Confirm Action</h3>
              <p className="text-gray-600 mb-6">Are you sure you want to continue? This action cannot be undone.</p>
              <div className="flex space-x-3">
                <button className="flex-1 px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors">
                  Cancel
                </button>
                <button className="flex-1 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors">
                  Confirm
                </button>
              </div>
            </div>
          </div>
        ),
        code: `<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
  <div className="bg-white rounded-xl p-6 max-w-md w-full">
    <h3 className="text-xl font-semibold mb-4">Confirm Action</h3>
    <p className="text-gray-600 mb-6">Are you sure you want to continue? This action cannot be undone.</p>
    <div className="flex space-x-3">
      <button className="flex-1 px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors">
        Cancel
      </button>
      <button className="flex-1 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors">
        Confirm
      </button>
    </div>
  </div>
</div>`
      }
    ],
    navigation: [
      {
        name: 'Breadcrumb',
        description: 'Navigation breadcrumb component',
        component: (
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-4">
              <li>
                <a href="#" className="text-blue-600 hover:text-blue-800">Home</a>
              </li>
              <li>
                <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </li>
              <li>
                <a href="#" className="text-blue-600 hover:text-blue-800">Components</a>
              </li>
              <li>
                <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </li>
              <li>
                <span className="text-gray-500">Navigation</span>
              </li>
            </ol>
          </nav>
        ),
        code: `<nav className="flex" aria-label="Breadcrumb">
  <ol className="flex items-center space-x-4">
    <li>
      <a href="#" className="text-blue-600 hover:text-blue-800">Home</a>
    </li>
    <li>
      <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
      </svg>
    </li>
    <li>
      <a href="#" className="text-blue-600 hover:text-blue-800">Components</a>
    </li>
    <li>
      <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
      </svg>
    </li>
    <li>
      <span className="text-gray-500">Navigation</span>
    </li>
  </ol>
</nav>`
      }
    ],
    data: [
      {
        name: 'Progress Bar',
        description: 'Animated progress indicator',
        component: (
          <div className="w-full">
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">Progress</span>
              <span className="text-sm text-gray-500">75%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-500" style={{width: '75%'}}></div>
            </div>
          </div>
        ),
        code: `<div className="w-full">
  <div className="flex justify-between mb-2">
    <span className="text-sm font-medium text-gray-700">Progress</span>
    <span className="text-sm text-gray-500">75%</span>
  </div>
  <div className="w-full bg-gray-200 rounded-full h-2">
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-500" style={{width: '75%'}}></div>
  </div>
</div>`
      }
    ]
  }

  const copyToClipboard = async (code, componentName) => {
    try {
      await navigator.clipboard.writeText(code)
      setCopiedCode(componentName)
      setTimeout(() => setCopiedCode(''), 2000)
    } catch (err) {
      console.error('Failed to copy: ', err)
    }
  }

  const installCommand = `npm install tailwindcss @tailwindcss/forms @tailwindcss/typography`

  const handleInstall = async () => {
    setIsInstalling(true)
    await copyToClipboard(installCommand, 'install-command')
    setTimeout(() => setIsInstalling(false), 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Component Library</h1>
              <p className="text-gray-600 mt-1">Beautiful, reusable components built with Tailwind CSS</p>
            </div>
            <Link href="/ui/dashboard" className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
              ← Back to Dashboard
            </Link>
          </div>
        </div>
      </div>

      {/* Installation Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">🚀 Getting Started</h2>
          <p className="text-gray-600 mb-4">Install Tailwind CSS and start using these components:</p>
          <div className="flex items-center space-x-4">
            <code className="flex-1 bg-gray-100 px-4 py-3 rounded-lg text-sm font-mono">
              {installCommand}
            </code>
            <button
              onClick={handleInstall}
              className="px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
            >
              {isInstalling ? (
                <>
                  <svg className="w-4 h-4 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Category Navigation */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center space-x-2 ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span>{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Components Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {components[activeCategory]?.map((component, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden">
              {/* Component Preview */}
              <div className="p-8 bg-gradient-to-br from-gray-50 to-gray-100 border-b">
                <div className="flex items-center justify-center min-h-[200px]">
                  {component.component}
                </div>
              </div>

              {/* Component Info */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{component.name}</h3>
                    <p className="text-gray-600 mt-1">{component.description}</p>
                  </div>
                  <button
                    onClick={() => copyToClipboard(component.code, component.name)}
                    className="px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors flex items-center space-x-2"
                  >
                    {copiedCode === component.name ? (
                      <>
                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-green-600">Copied!</span>
                      </>
                    ) : (
                      <>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Code Block */}
                <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                  <pre className="text-sm text-gray-300">
                    <code>{component.code}</code>
                  </pre>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Build Amazing UIs?</h3>
            <p className="text-gray-600 mb-6">Copy any component and customize it to fit your design needs.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/ui/glassmorphism" className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200">
                Explore Glassmorphism
              </Link>
              <Link href="/ui/neumorphic" className="px-6 py-3 border-2 border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-200">
                Try Neumorphic Design
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ComponentLibrary
