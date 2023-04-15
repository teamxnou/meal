export function replaceWithExcepts(
  originalString: string,
  find: string,
  excepts: string[],
  replacement: string
) {
  const exceptsSet = new Set(excepts.filter((except) => except.includes(find)))
  const exceptsBeforeString: string[] = []
  const exceptsAfterString: string[] = []

  exceptsSet.forEach((except) => {
    const [before, after] = except.split(find)
    if (before) exceptsBeforeString.push(before)
    if (after) exceptsAfterString.push(after)
  })

  const regex = new RegExp(
    `${
      exceptsBeforeString.length ? `(?<!${exceptsBeforeString.join('|')})` : ''
    }${find}${
      exceptsAfterString.length ? `(?!${exceptsAfterString.join('|')})` : ''
    }`,
    'g'
  )

  return originalString.replace(regex, replacement)
}
