import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

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
        name: "categories",
        label: "Categories",
        path: "content/categories",
        fields: [
          {
            name: "title",
            label: "Title",
            type: "string",
            required: true,
          },
          {
            name: "slug",
            label: "Slug",
            type: "string",
            required: true,
          },
          {
            name: "icon",
            label: "Icon",
            type: "string",
            required: true,
          },
          {
            name: "iconType",
            label: "Icon type",
            type: "string",
            required: true,
            options: ["solid", "logo"]
          },
          {
            name: "prio",
            label: "Priority",
            type: "number",
            required: true,
          },
          {
            name: "main_menu",
            label: "Main Menu",
            type: "boolean",
          },
        ],
      },
      {
        name: "post",
        label: "Posts",
        path: "content/posts",
        format: 'mdx',
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
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
            ]
          },
        ],
      },
    ],
  },
});
