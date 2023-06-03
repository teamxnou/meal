import { writable } from 'svelte/store'

interface Settings {
  parcipiateMenuSurvey: boolean
  viewMenuSurvey: boolean
  showMealLoading: boolean
  tomorrowMealAfter7pm: boolean
  shareMeal: boolean
  allergies: boolean[]
}

const defaultSettings: Settings = {
  parcipiateMenuSurvey: true,
  viewMenuSurvey: true,
  showMealLoading: true,
  tomorrowMealAfter7pm: true,
  shareMeal: true,
  allergies: []
}
const settings = writable<Settings>()

if (typeof window !== 'undefined') {
  const savedSettings = localStorage.getItem('settings')
  const mergedSettings = {...defaultSettings, ...JSON.parse(savedSettings || '{}')}
  settings.set(mergedSettings)

  settings.subscribe((value) => {
    if (!value) return
    localStorage.setItem('settings', JSON.stringify(value))
  })
} else {
  settings.set(defaultSettings)
}

export { settings, defaultSettings }
export type { Settings }
