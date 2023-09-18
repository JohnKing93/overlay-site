import { DocsConfig } from "types"

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Documentation",
      href: "/docs",
    },
    {
      title: "Guides",
      href: "/guides",
    },
  ],
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/docs",
        },
      ],
    },
    {
      title: "Documentation",
      items: [
        {
          title: "Introduction",
          href: "/docs/documentation",
          disabled: true,
        },
        {
          title: "Search",
          href: "/docs/in-progress",
          disabled: true,
        },
      ],
    },
  ],
}
