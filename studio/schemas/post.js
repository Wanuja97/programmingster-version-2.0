export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'cannonicalURL',
      title: 'Canonical URL',
      type: 'string',
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
       to: {type: 'category'},
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'topics',
      title: 'Topics',
      type: 'array',
      of:[{type: 'string'}],
    },
    {
      name: 'rescources',
      title: 'Rescources',
      type: 'array',
      of:[{type: 'string'}],
    },
    {
      name: 'sourcecode',
      title: 'Github Source Code',
      type: 'string',
      of:[{type: 'string'}],
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
  ],

  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
    }
  },
}
