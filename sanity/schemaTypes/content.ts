import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'content',
  title: 'Content',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'intro',
      title: 'Intro',
      type: 'blockContent',
    }),
    defineField({
      name: 'schedule',
      title: 'Schema',
      type: 'blockContent',
    }),
    defineField({
      name: 'wedding',
      title: 'Vigsel & Transport',
      type: 'blockContent',
    }),
    defineField({
      name: 'dinner',
      title: 'Middag & Fest',
      type: 'blockContent',
    }),
    defineField({
      name: 'speaches',
      title: 'Tal',
      type: 'blockContent',
    }),
    defineField({
      name: 'dresscode',
      title: 'Klädsel',
      type: 'blockContent',
    }),
    defineField({
      name: 'presenter',
      title: 'Presenter',
      type: 'blockContent',
    }),
    defineField({
      name: 'rsvp',
      title: 'RSVP',
      type: 'blockContent',
    }),
    defineField({
      name: 'information',
      title: 'Information in english',
      type: 'blockContent',
    }),
  ],
})
