import { writable } from 'svelte/store'
import type { Writable } from 'svelte/store'

interface School {
  name: string
  city: string
  school: number
}

const primarySchool: Writable<School> = writable({
  name: '',
  city: '',
  school: 0
})
const altSchools: Writable<School[]> = writable([])
const openSchoolToast = writable(false)

const lastBigRelease = import.meta.env.VITE_LAST_BIG_RELEASE
const notifyRelease = writable(false)

const isNeisUnderMaintaince: Writable<undefined | boolean> = writable(undefined)

if (typeof window !== 'undefined') {
  primarySchool.subscribe((value) => {
    if (!value) return
    localStorage.setItem('primarySchool', JSON.stringify(value))
  })
  altSchools.subscribe((value) => {
    if (value.length == 0) return
    localStorage.setItem('altSchools', JSON.stringify(value))
  })

  const lastUsedBigRelease = localStorage.getItem('lastUsedBigRelease') || ''
  if (lastUsedBigRelease === '') localStorage.setItem('lastUsedBigRelease', lastBigRelease)
  if (lastBigRelease != lastUsedBigRelease) notifyRelease.set(true)
  notifyRelease.subscribe((value) => {
    if (!value) return
    localStorage.setItem('lastUsedBigRelease', lastBigRelease)
  })

  primarySchool.set(JSON.parse(localStorage.getItem('primarySchool') || '') || primarySchool)
  altSchools.set(JSON.parse(localStorage.getItem('altSchools') || '') || [])

  // Detect whether the NEIS server is under maintaince
  try {
    await fetch('https://open.neis.go.kr/hub/mealServiceDietInfo')
    isNeisUnderMaintaince.set(false)
  } catch (error) {
    if (navigator.onLine) {
      isNeisUnderMaintaince.set(true)
    } else {
      isNeisUnderMaintaince.set(false)
    }
  }
}

export { primarySchool, altSchools, openSchoolToast, notifyRelease, isNeisUnderMaintaince }
export type { School }
