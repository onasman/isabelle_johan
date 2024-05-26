/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...index]]/page.tsx` route
 */

import { visionTool } from '@sanity/vision'
import { defineConfig, LayoutProps } from 'sanity'
import { structureTool } from 'sanity/structure'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from './sanity/env'
import { schema } from './sanity/schema'

function EnhancedLayout(props: LayoutProps) {
  return (
    <div className="h-[calc(100vh-65px)]">{props.renderDefault(props)}</div>
  )
}

export default defineConfig({
  basePath: '/admin',
  projectId,
  dataset,
  title: 'Isabelle & Johan',

  studio: {
    components: {
      layout: EnhancedLayout,
    },
  },
  // Add and edit the content schema in the './sanity/schema' folder
  schema,
  plugins: [
    structureTool(),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
  ],
})
