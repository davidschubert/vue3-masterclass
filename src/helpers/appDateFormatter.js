// Import dayjs
import dayjs from 'dayjs'

// Importieren des deutschen Sprachpakets
import 'dayjs/locale/de'
dayjs.locale('de')

// Importieren des relativen Zeit Plugins
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

// Importieren des lokalen Datums Plugins
import localizedDate from 'dayjs/plugin/localizedFormat'
dayjs.extend(localizedDate)

// Ausgabe-Beispiel: vor 3 Jahren
export const timeDiffForHumans = (unformattedDate) => {
  return dayjs.unix(unformattedDate).fromNow()
}

// Ausgabe-Beispiel: Montag, 6. Juli 2020 · 15:01:37 · GMT+02:00
export const humanFriendlyDate = (unformattedDate) => {
  return dayjs.unix(unformattedDate).format('dddd · LL · LTS · [GMT]Z')
}
