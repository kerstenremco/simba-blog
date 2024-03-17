import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.GITHUB_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || process.env.HEAD || "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "tags",
        label: "Tags",
        path: "content/tags",
        fields: [
          {
            name: "title",
            label: "Title",
            type: "string",
            required: true,
          },
          {
            name: "color",
            label: "Color",
            type: "string",
            options: ["neutral", "primary", "secondary", "accent", "ghost", "info", "warning", "error", "success"],
          },
        ],
      },
      {
        name: "post",
        label: "Posts",
        path: "content/posts",
        format: "mdx",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "subtitle",
            label: "Subtitle",
            required: true,
          },
          {
            type: "string",
            name: "customslug",
            label: "Slug",
            required: true,
          },
          {
            type: "string",
            name: "snippet",
            label: "Snippet",
            required: true,
          },
          {
            type: "image",
            name: "image",
            label: "Image",
            required: true,
          },
          {
            type: "string",
            name: "special",
            label: "Special",
          },
          {
            type: "datetime",
            name: "written",
            label: "Written",
            required: true,
          },
          {
            type: "datetime",
            name: "modified",
            label: "Last modified",
          },

          {
            type: "string",
            name: "seo_keywords",
            label: "Seo keywords",
            required: true,
          },

          {
            type: "object",
            list: true,
            name: "tags",
            label: "tags",
            fields: [
              {
                type: "reference",
                label: "Tag",
                name: "tag",
                collections: ["tags"],
              },
            ],
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
            templates: [
              {
                name: "Alert",
                label: "Alert",
                fields: [
                  {
                    name: "text",
                    label: "Text",
                    type: "string",
                  },
                  {
                    name: "type",
                    label: "Type",
                    type: "string",
                    options: ["warning", "info", "error"],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
});
