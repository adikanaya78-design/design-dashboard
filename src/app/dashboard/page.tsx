'use client'

import { useAuthStore } from '@/store/authStore'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import DashboardLayout from '@/components/dashboard/DashboardLayout'

export default function DashboardPage() {
  const user = useAuthStore((state) => state.user)
  const router = useRouter()

  useEffect(() => {
    if (!user) {
      router.push('/login')
    }
  }, [user, router])

  if (!user) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>
  }

  return <DashboardLayout />
}