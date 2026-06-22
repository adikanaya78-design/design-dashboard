'use client'

import { useState } from 'react'
import Sidebar from './Sidebar'
import TopBar from './TopBar'
import EditorPanel from './EditorPanel'
import PreviewPanel from './PreviewPanel'

export default function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [selectedComponent, setSelectedComponent] = useState<string>('welcome')
  const [code, setCode] = useState(`export default function Component() {
  return (
    <div className="p-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg">
      <h1 className="text-4xl font-bold text-white">Welcome</h1>
      <p className="text-white mt-2">Start creating your components</p>
    </div>
  )
}`)

  return (
    <div className="flex h-screen bg-[#0a0a0a]">
      {/* Sidebar */}
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopBar onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

        {/* Editor and Preview */}
        <div className="flex-1 flex overflow-hidden gap-1 p-4">
          <EditorPanel code={code} setCode={setCode} />
          <PreviewPanel code={code} />
        </div>
      </div>
    </div>
  )
}