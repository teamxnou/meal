import { writable } from 'svelte/store'

const selectedCity = writable('')
const selectedSchool = writable(0)
const selectedSchoolName = writable('')
const openSchoolToast = writable(false)

const lastBigRelease = import.meta.env.VITE_LAST_BIG_RELEASE
const notifyRelease = writable(false)

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
}

export { selectedCity, selectedSchool, selectedSchoolName, openSchoolToast, notifyRelease }
