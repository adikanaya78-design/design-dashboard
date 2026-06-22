'use client'

import { useEffect, useRef } from 'react'

interface PreviewPanelProps {
  code: string
}

export default function PreviewPanel({ code }: PreviewPanelProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    if (!iframeRef.current) return

    const doc = iframeRef.current.contentDocument || iframeRef.current.contentWindow?.document
    if (!doc) return

    const html = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script src="https://cdn.tailwindcss.com"><\/script>
        <style>
          body { margin: 0; padding: 20px; background: #0a0a0a; }
        </style>
      </head>
      <body>
        <div id="root"></div>
        <script>
          try {
            const Component = (${code.replace(/export default function Component/g, 'function Component')});
            const root = document.getElementById('root');
            if (root) {
              root.innerHTML = '<div id="component"></div>';
            }
          } catch (error) {
            console.error('Error:', error);
          }
        <\/script>
      </body>
      </html>
    `

    doc.open()
    doc.write(html)
    doc.close()
  }, [code])

  return (
    <div className="flex-1 flex flex-col bg-[#1a1a1a] rounded-lg border border-white/10 overflow-hidden">
      <div className="px-4 py-3 border-b border-white/10 bg-[#0a0a0a]">
        <h2 className="text-sm font-semibold text-white">Preview</h2>
      </div>
      <iframe
        ref={iframeRef}
        className="flex-1 border-none bg-[#0a0a0a]"
        title="Component Preview"
      />
    </div>
  )
}