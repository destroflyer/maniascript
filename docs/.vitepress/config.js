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
            { text: "Contexts", link: "/advanced/contexts.md" },
            { text: "Labels", link: "/advanced/labels.md" },
            { text: "Aliases", link: "/advanced/aliases.md" },
            { text: "Constants", link: "/advanced/constants.md" },
            { text: "Debugger", link: "/advanced/debugger.md" },
            { text: "Extension variables", link: "/advanced/extension_variables.md" },
            { text: "Network", link: "/advanced/network.md" },
            { text: "Logs", link: "/advanced/logs.md" },
            { text: "Persistence", link: "/advanced/persistence.md" },
            { text: "Translations", link: "/advanced/translations.md" },
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
