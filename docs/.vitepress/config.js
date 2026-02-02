import maniascriptLanguage from './theme/maniascript.language.json';

export default {
  lang: 'en-US',
  title: "ManiaScript Docs",
  description: "Documentation for ManiaScript.",
  markdown: {
    lineNumbers: true,
    languages: [maniascriptLanguage],
  },
  themeConfig: {
    logo: '/maniascript.png',
    sidebar: {
      "/": [
        {
          text: "Introduction",
          items: [
            { text: "ManiaScript", link: "/introduction/maniascript.md" },
            { text: "Development setup", link: "/introduction/development_setup.md" },
          ],
        },
        {
          text: "Basics",
          items: [
            { text: "Comments", link: "/basics/comments.md" },
            { text: "Variables", link: "/basics/variables.md" },
            { text: "Types", link: "/basics/types.md" },
            { text: "Functions", link: "/basics/functions.md" },
            { text: "Control structures", link: "/basics/control_structures.md" },
          ],
        },
        {
          text: "Advanced",
          items: [
            { text: "Errors", link: "/advanced/errors.md" },
            { text: "Asserts", link: "/advanced/asserts.md" },
            { text: "Log", link: "/advanced/log.md" },
            { text: "Dumping", link: "/advanced/dumping.md" },
            { text: "Time", link: "/advanced/time.md" },
            { text: "Global scope", link: "/advanced/global_scope.md" },
            { text: "Labels", link: "/advanced/labels.md" },
            { text: "Aliases", link: "/advanced/aliases.md" },
            { text: "Directives", link: "/advanced/directives.md" },
            { text: "Libraries", link: "/advanced/libraries.md" },
            { text: "Extension variables", link: "/advanced/extension_variables.md" },
            { text: "Context", link: "/advanced/context.md" },
            { text: "Script viewer", link: "/advanced/script_viewer.md" },
            { text: "Network", link: "/advanced/network.md" },
            { text: "Persistence", link: "/advanced/persistence.md" },
            { text: "Translations", link: "/advanced/translations.md" },
            { text: "Metadata", link: "/advanced/metadata.md" },
            { text: "Http requests", link: "/advanced/http_requests.md" },
            { text: "Unknown keywords", link: "/advanced/unknown_keywords.md" },
            { text: "Reference generation", link: "/advanced/reference_generation.md" },
          ],
        },
        {
          text: "Manialinks",
          items: [
            { text: "Manialinks", link: "/manialinks/manialinks.md" },
            { text: "Development setup", link: "/manialinks/development_setup.md" },
            { text: "Elements", link: "/manialinks/elements.md" },
            { text: "ManiaScript in Manialinks ", link: "/manialinks/maniascript_in_manialinks.md" },
            { text: "Text styling", link: "/manialinks/text_styling.md" },
            { text: "Symbols", link: "/manialinks/symbols.md" },
          ],
        },
        {
          text: "Game modes",
          items: [
            { text: "Game modes", link: "/game_modes/game_modes.md" },
            { text: "Server loop", link: "/game_modes/server_loop.md" },
            { text: "Layers", link: "/game_modes/layers.md" },
            { text: "Events", link: "/game_modes/events.md" },
          ],
        },
        {
          text: "Other",
          items: [
            { text: "Thanks", link: "/other/thanks.md" },
          ],
        },
      ]
    },
    editLink: {
      pattern: 'https://github.com/destroflyer/maniascript/blob/master/docs/:path',
      text: 'Edit this page on GitHub'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/destroflyer/maniascript' },
      { icon: 'discord', link: 'https://discord.gg/BzDg4W78Na' },
    ],
    footer: {
      message: 'Made with ❤️ by destroflyer',
    },
  },
};
