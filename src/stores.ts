import { writable } from 'svelte/store'

const selectedCity = writable('')
const selectedSchool = writable(0)
const selectedSchoolName = writable('')
const openSchoolToast = writable(false)

if (typeof window !== 'undefined') {
  selectedCity.subscribe(value => {
    if (!value) return
    localStorage.setItem('selectedCity', value)
  })

  selectedSchool.subscribe(value => {
    if (!value) return
    localStorage.setItem('selectedSchool', String(value))
  })

  selectedSchoolName.subscribe(value => {
    if (!value) return
    localStorage.setItem('selectedSchoolName', value)
  })

  selectedCity.set(localStorage.getItem('selectedCity') || '')
  selectedSchool.set(Number(localStorage.getItem('selectedSchool')) || 0)
  selectedSchoolName.set(localStorage.getItem('selectedSchoolName') || '')
}

export { selectedCity, selectedSchool, selectedSchoolName, openSchoolToast }
