import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Blazeshosting Wiki',
  tagline: 'Blazeshosting Guide For Newbie',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://tutorial.blazeshosting.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'mrlongshen', // Usually your GitHub org/user name.
  projectName: 'blazeshostingwiki', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/mrlongshen/blazeshostingwiki/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/mrlongshen/blazeshostingwiki/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
	plugins: [
		[
      require.resolve("@easyops-cn/docusaurus-search-local"),
      ({
        hashed: true,
      }),
		],
			],
			
			
  themeConfig: {
  
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Blazeshosting Tutorial',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
	  
	items: [
    /*    {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'General',
		},
	*/	
		{
          type: 'docSidebar',
          sidebarId: 'directadminSidebar',
          position: 'left',
          label: 'Directadmin',
		},
		{
          type: 'docSidebar',
          sidebarId: 'seedboxSidebar',
          position: 'left',
          label: 'Seedbox',
		},
		
//        {to: '/blog', label: 'Blog', position: 'left'},
		
        {
          href: 'https://blazeshosting.com',
          label: 'Blazeshosting Website',
          position: 'right',
        },
		{
          href: 'https://github.com/mrlongshen/blazeshostingwiki',
          label: 'GitHub',
          position: 'right',
        },
		
      ],
	
    },
	
	
	
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Tutorial',
          items: [
            {
              label: 'Directadmin',
              to: '/docs/directadmin/intro',
            },
			 {
              label: 'Seedbox',
              to: '/docs/seedbox/intro',
            },
          ],
        },
/*		
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
*/
		
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Blazeshosting Tutorial. Built with Docusaurus.`,
    },
	
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
	
};

export default config;