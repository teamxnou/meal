import { writable } from 'svelte/store'
import type { Writable } from 'svelte/store'

interface School {
  name: string
  city: string
  school: number
  address: string
}

const defaultSchoolObj: School = {
  name: '',
  city: '',
  school: 0,
  address: ''
}
const primarySchool: Writable<School> = writable(defaultSchoolObj)
const primarySchoolSelected: Writable<boolean> = writable(false)
const altSchools: Writable<School[]> = writable([])
const currentSchoolIndex = writable(0)
const openSchoolToast = writable(false)

const lastBigRelease = import.meta.env.VITE_LAST_BIG_RELEASE
const notifyRelease = writable(false)

const isNeisUnderMaintaince: Writable<undefined | boolean> = writable(undefined)

const date: Writable<Date> = writable(new Date())
// If it's past 7 PM, set the date to tomorrow
if (new Date().getHours() >= 19) {
  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)
  tomorrow.setHours(0, 0, 0, 0)
  date.set(tomorrow)
}

if (typeof window !== 'undefined') {
  primarySchool.subscribe((value) => {
    if (value == defaultSchoolObj || Object.keys(value).length == 0) {
      primarySchoolSelected.set(false)
      return
    }
    localStorage.setItem('primarySchool', JSON.stringify(value))
    primarySchoolSelected.set(true)
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

  primarySchool.set(JSON.parse(localStorage.getItem('primarySchool') || '{}') || defaultSchoolObj)
  altSchools.set(JSON.parse(localStorage.getItem('altSchools') || '[]'))

  // Detect whether the NEIS server is under maintaince
  try {
    async () => {
      await fetch('https://open.neis.go.kr/hub/mealServiceDietInfo')
    }
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
  primarySchool,
  primarySchoolSelected,
  altSchools,
  currentSchoolIndex,
  openSchoolToast,
  notifyRelease,
  isNeisUnderMaintaince,
  date
}
export type { School }
