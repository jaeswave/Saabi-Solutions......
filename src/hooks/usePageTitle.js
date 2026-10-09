import { useEffect } from 'react'
import { site } from '../config/site.js'
export default function usePageTitle(title) {
  useEffect(() => { document.title = title ? `${title} | ${site.name}` : `${site.name} | Software, Security & IT Solutions` }, [title])
}
