'use client'

import { useAuthStore } from '@/store/authStore'
import { Plus, Settings, LogOut } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

interface SidebarProps {
  open: boolean
  setOpen: (open: boolean) => void
}

export default function Sidebar({ open, setOpen }: SidebarProps) {
  const user = useAuthStore((state) => state.user)
  const logout = useAuthStore((state) => state.logout)
  const router = useRouter()

  const handleLogout = () => {
    logout()
    router.push('/')
  }

  return (
    <div
      className={`${
        open ? 'w-64' : 'w-20'
      } bg-[#1a1a1a] border-r border-white/10 flex flex-col transition-all duration-300 overflow-hidden`}
    >
      {/* Logo */}
      <div className="p-4 border-b border-white/10 flex items-center justify-between">
        {open && <span className="font-bold text-white">Projects</span>}
      </div>

      {/* New Project */}
      <button
        className={`m-4 flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors ${
          !open && 'px-2 py-2'
        }`}
      >
        <Plus size={20} />
        {open && <span>New Project</span>}
      </button>

      {/* Projects List */}
      <div className="flex-1 overflow-y-auto px-4 py-4">
        {open && (
          <div className="space-y-2">
            {[
              { name: 'Button Component', date: 'Today' },
              { name: 'Card Component', date: '2 days ago' },
              { name: 'Modal Component', date: 'Last week' },
            ].map((project, i) => (
              <div
                key={i}
                className="p-3 rounded-lg bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-white/10 cursor-pointer transition-all"
              >
                <p className="text-sm font-medium text-white">{project.name}</p>
                <p className="text-xs text-gray-500 mt-1">{project.date}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Bottom Actions */}
      <div className="border-t border-white/10 p-4 space-y-2">
        <button className="w-full flex items-center gap-2 px-4 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors">
          <Settings size={20} />
          {open && <span>Settings</span>}
        </button>
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-2 px-4 py-2 rounded-lg text-gray-400 hover:text-red-400 hover:bg-red-500/10 transition-colors"
        >
          <LogOut size={20} />
          {open && <span>Logout</span>}
        </button>
      </div>

      {/* User Info */}
      {open && user && (
        <div className="px-4 py-4 border-t border-white/10 text-sm">
          <p className="text-gray-400">Logged in as</p>
          <p className="text-white font-medium mt-1">{user.name}</p>
          <p className="text-gray-500 text-xs mt-1">{user.email}</p>
        </div>
      )}
    </div>
  )
}