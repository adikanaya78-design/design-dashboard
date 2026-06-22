'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useAuthStore } from '@/store/authStore'

export default function Home() {
  const user = useAuthStore((state) => state.user)
  const [isScrolled, setIsScrolled] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#1a1a2e] to-[#0a0a0a]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg"></div>
              <span className="text-xl font-bold text-white">Design Dashboard</span>
            </div>
            <div className="flex items-center space-x-4">
              {user ? (
                <>
                  <Link href="/dashboard">
                    <button className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors">
                      Dashboard
                    </button>
                  </Link>
                </>
              ) : (
                <>
                  <Link href="/login">
                    <button className="px-4 py-2 rounded-lg text-white hover:bg-white/10 transition-colors">
                      Login
                    </button>
                  </Link>
                  <Link href="/signup">
                    <button className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors">
                      Sign Up
                    </button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Design & Generate Code
            <span className="block bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Like Never Before
            </span>
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Create beautiful components and generate production-ready code with AI assistance. Collaborate with your team in real-time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {user ? (
              <Link href="/dashboard">
                <button className="px-8 py-4 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all">
                  Go to Dashboard →
                </button>
              </Link>
            ) : (
              <>
                <Link href="/signup">
                  <button className="px-8 py-4 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all">
                    Get Started Free →
                  </button>
                </Link>
                <Link href="/login">
                  <button className="px-8 py-4 rounded-lg border border-white/20 text-white font-semibold text-lg hover:bg-white/5 transition-all">
                    Sign In
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 px-4 bg-white/5 backdrop-blur-sm border-y border-white/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Powerful Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '🎨',
                title: 'Component Generator',
                description: 'Design components visually and generate clean, reusable code instantly'
              },
              {
                icon: '⚡',
                title: 'Real-time Preview',
                description: 'See your changes instantly with our fast, responsive preview system'
              },
              {
                icon: '🔧',
                title: 'Code Editor',
                description: 'Edit code with syntax highlighting and intelligent auto-completion'
              },
              {
                icon: '📁',
                title: 'File Management',
                description: 'Organize your projects with our intuitive file explorer'
              },
              {
                icon: '🤖',
                title: 'AI Assistance',
                description: 'Get smart suggestions and auto-generate components from descriptions'
              },
              {
                icon: '🚀',
                title: 'Deploy Ready',
                description: 'Export and deploy your projects to production instantly'
              },
            ].map((feature, i) => (
              <div key={i} className="p-6 rounded-lg bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all hover:bg-white/10">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to start designing?</h2>
          <p className="text-xl text-gray-400 mb-8">Join thousands of developers creating beautiful components</p>
          {!user && (
            <Link href="/signup">
              <button className="px-8 py-4 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all">
                Start Free Today →
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}