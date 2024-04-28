import { groq } from 'next-sanity'

export const INTRO_QUERY = groq`*[_type == "post" && defined(slug)]`

export const SCHEDULE_QUERY = groq`*[_type == "content" && slug.current == $slug][0]`
