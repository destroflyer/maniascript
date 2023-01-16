import { BUNDLED_LANGUAGES } from 'shiki';
import splunk_syntax from './theme/maniascript.tmLanguage.json';

BUNDLED_LANGUAGES.push({
  id: 'maniascript',
  scopeName: 'source.ms',
  grammar: splunk_syntax,
});

export default {
  lang: 'en-US',
  title: "ManiaScript Docs",
  description: "Documentation for ManiaScript.",
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    logo: '/maniascript.png',
    sidebar: {
      "/": [
        {
          text: "Introduction",
          items: [
            { text: "ManiaScript", link: "/introduction/maniascript.md" },
            { text: "Development Setup", link: "/introduction/development_setup.md" },
          ],
        },
        {
          text: "Basics",
          items: [
            { text: "Comments", link: "/basics/comments.md" },
            { text: "Variables", link: "/basics/variables.md" },
            { text: "Types", link: "/basics/types.md" },
            { text: "Functions", link: "/basics/functions.md" },
            { text: "Control Structures", link: "/basics/control_structures.md" },
          ],
        },
        {
          text: "Advanced",
          items: [
            { text: "Errors", link: "/advanced/errors.md" },
            { text: "Asserts", link: "/advanced/asserts.md" },
            { text: "Log", link: "/advanced/log.md" },
            { text: "Dump", link: "/advanced/dump.md" },
            { text: "Time", link: "/advanced/time.md" },
            { text: "Labels", link: "/advanced/labels.md" },
            { text: "Aliases", link: "/advanced/aliases.md" },
            { text: "Directives", link: "/advanced/directives.md" },
            { text: "Libraries", link: "/advanced/libraries.md" },
            { text: "Extension properties", link: "/advanced/extension_properties.md" },
            { text: "Contexts", link: "/advanced/contexts.md" },
            { text: "Debugger", link: "/advanced/debugger.md" },
            { text: "Network", link: "/advanced/network.md" },
            { text: "Persistence", link: "/advanced/persistence.md" },
            { text: "Translations", link: "/advanced/translations.md" },
            { text: "Reference generation", link: "/advanced/reference_generation.md" },
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
