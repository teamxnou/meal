import { replaceWithExcepts } from './replaceWithExcepts'
import vegetableData from './vegetableData'

interface MenuToken {
  string: string
  infoIndex?: number
}

interface Menu {
  name: MenuToken[]
  allergies: number[]
}

interface Response {
  body: Menu[]
  error: boolean
  errorCode: number
}

function parseMeal(mealString: string): Menu[] {
  const regex = /(.*) \((.*)\)/
  const meal = mealString.split('<br/>').map((menu) => {
    const match = menu.match(regex)
    let stringMenuName = match?.[1] || menu
    const numString = match?.[2] || ' '
    const allergies = numString
      .split('.')
      .map((n: string) => parseInt(n))
      .filter(function (el) {
        return !!el
      })

    vegetableData.forEach((vegetable, i) => {
      stringMenuName = replaceWithExcepts(
        stringMenuName,
        vegetable.name,
        vegetable.exceptions || [],
        `[${vegetable.name}|${i}]`
      )
    })
    const menuName = stringMenuName
      .split(/(\[[ㄱ-힣]+\|\d+\])/g)
      .filter((token) => !!token)
      .map((token) => {
        const match = token.match(/\[([ㄱ-힣]+)\|(\d+)\]/)
        return match ? { string: match[1], infoIndex: parseInt(match[2]) } : { string: token }
      })
    return { name: menuName, allergies }
  })
  return meal
}

export async function getMeal(cityCode: string, schoolCode: number, date: string): Promise<Response> {
  let meal: Menu[] = []
  let error = false
  let errorCode = 0
  const res = await fetch(
    `https://open.neis.go.kr/hub/mealServiceDietInfo?KEY=${
      import.meta.env.VITE_NEIS_API_KEY
    }&Type=json&ATPT_OFCDC_SC_CODE=${cityCode}&SD_SCHUL_CODE=${schoolCode}&MLSV_YMD=${date}`
  )
  const json = await res.json()

  if (json.mealServiceDietInfo) {
    meal = parseMeal(json.mealServiceDietInfo[1].row[0].DDISH_NM)
    console.log(meal) // prints meal correctly
    error = false
    errorCode = 0
  } else {
    error = true
    errorCode = parseInt(json.RESULT.CODE.replace(/[^0-9]/g, ''))
  }

  console.log(meal) // prints []
  return { body: meal, error, errorCode }
}
