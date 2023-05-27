import { writable } from 'svelte/store'
import type { Writable } from 'svelte/store'

const selectedCity = writable('')
const selectedSchool = writable(0)
const selectedSchoolName = writable('')
const openSchoolToast = writable(false)

const lastBigRelease = import.meta.env.VITE_LAST_BIG_RELEASE
const notifyRelease = writable(false)

const isNeisUnderMaintaince: Writable<undefined | boolean> = writable(undefined)

if (typeof window !== 'undefined') {
  selectedCity.subscribe((value) => {
    if (!value) return
    localStorage.setItem('selectedCity', value)
  })
  
  selectedSchool.subscribe((value) => {
    if (!value) return
    localStorage.setItem('selectedSchool', String(value))
  })
  
  selectedSchoolName.subscribe((value) => {
    if (!value) return
    localStorage.setItem('selectedSchoolName', value)
  })
  
  const lastUsedBigRelease = localStorage.getItem('lastUsedBigRelease') || ''
  if (lastUsedBigRelease === '') localStorage.setItem('lastUsedBigRelease', lastBigRelease)
  if (lastBigRelease != lastUsedBigRelease) notifyRelease.set(true)
  notifyRelease.subscribe((value) => {
    if (!value) return
    localStorage.setItem('lastUsedBigRelease', lastBigRelease)
  })
  
  selectedCity.set(localStorage.getItem('selectedCity') || '')
  selectedSchool.set(Number(localStorage.getItem('selectedSchool')) || 0)
  selectedSchoolName.set(localStorage.getItem('selectedSchoolName') || '')
  
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

export {
  selectedCity,
  selectedSchool,
  selectedSchoolName,
  openSchoolToast,
  notifyRelease,
  isNeisUnderMaintaince
}
