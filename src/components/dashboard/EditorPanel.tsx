'use client'

import { useEffect, useRef } from 'react'

interface EditorPanelProps {
  code: string
  setCode: (code: string) => void
}

export default function EditorPanel({ code, setCode }: EditorPanelProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Tab') {
      e.preventDefault()
      const textarea = textareaRef.current
      if (!textarea) return

      const start = textarea.selectionStart
      const end = textarea.selectionEnd
      const newCode = code.substring(0, start) + '\t' + code.substring(end)
      setCode(newCode)
      setTimeout(() => {
        textarea.selectionStart = textarea.selectionEnd = start + 1
      }, 0)
    }
  }

  return (
    <div className="flex-1 flex flex-col bg-[#1a1a1a] rounded-lg border border-white/10 overflow-hidden">
      <div className="px-4 py-3 border-b border-white/10 bg-[#0a0a0a]">
        <h2 className="text-sm font-semibold text-white">Code Editor</h2>
      </div>
      <textarea
        ref={textareaRef}
        value={code}
        onChange={(e) => setCode(e.target.value)}
        onKeyDown={handleKeyDown}
        className="flex-1 p-4 bg-[#0f0f0f] text-gray-300 font-mono text-sm resize-none focus:outline-none border-none"
        spellCheck={false}
        style={{
          lineHeight: '1.6',
          caretColor: '#0070f3',
        }}
      />
    </div>
  )
}