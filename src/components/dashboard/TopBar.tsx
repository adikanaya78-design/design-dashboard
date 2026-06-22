'use client'

import { Menu, Download, Copy, RotateCcw } from 'lucide-react'

interface TopBarProps {
  onToggleSidebar: () => void
}

export default function TopBar({ onToggleSidebar }: TopBarProps) {
  return (
    <div className="h-16 bg-[#1a1a1a] border-b border-white/10 flex items-center justify-between px-6">
      {/* Left */}
      <div className="flex items-center gap-4">
        <button
          onClick={onToggleSidebar}
          className="p-2 hover:bg-white/10 rounded-lg transition-colors"
        >
          <Menu size={20} className="text-gray-400" />
        </button>
        <h1 className="text-xl font-bold text-white">Component Editor</h1>
      </div>

      {/* Right */}
      <div className="flex items-center gap-2">
        <button className="p-2 hover:bg-white/10 rounded-lg transition-colors group" title="Undo">
          <RotateCcw size={20} className="text-gray-400 group-hover:text-white" />
        </button>
        <button className="p-2 hover:bg-white/10 rounded-lg transition-colors group" title="Copy code">
          <Copy size={20} className="text-gray-400 group-hover:text-white" />
        </button>
        <button className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors flex items-center gap-2">
          <Download size={18} />
          Export
        </button>
      </div>
    </div>
  )
}