import reactLogo from '../images/skills/react-logo-white.png'
import jsLogo from '../images/skills/javascript-logo-white.png'
import graphqlLogo from '../images/skills/graphql-logo-white.png'
import railsLogo from '../images/skills/rails-logo-white.png'
import wpLogo from '../images/skills/wordpress-logo-white.png'
import sassLogo from '../images/skills/sass-logo-white.png'

export const projects = [
  {
    name: 'kovi',
    description:
      "A mobile CRM / Directory app used for rental community vendors to locate and contact rental communities in their city and track their sales process with notes, favorites, and contact tracking. I've been the sole developer and designer on this project and the first beta version is now being tested via Test Flight on iOS.",
    features: [
      'Map with apartment communities marked and scroll cards for quick contact info',
      'Community pages with full info including unit counts, contact info, management company info and manager names',
      'Note taking ability and community favoriting for each user to save with each community',
      'Saved contact events to track calls, emails and visits (based on GPS check-ins)',
    ],
    stack: ['React Native', 'GraphQL', 'Apollo', 'Expo'],
    images: ['kovi-map.png'],
  },
  {
    name: 'AMAC games',
    description:
      'Five puzzle type games for our 1.5 million over 55 aged members to play to keep their minds sharp. Built as Custom Post Types in Wordpress for in-house content creators to quickly and easily input each new daily game into the WP backend and have the games created dynamically. Each game with custom PHP templates along with Javascript and jQuery scripts to implement game creation and gameplay.<br /><br /><a href="https://amac.us/games" target="_blank">Check them out here.</a>',
    features: [
      'Quizzes',
      'Puzzle',
      'Spot the Difference',
      'Word Search',
      'Word Jumble',
    ],
    stack: ['Wordpress', 'PHP', 'Javascript', 'jQuery'],
  },
  {
    name: 'SiteStash',
    description:
      "A Bookmarking website that allows users to create their own topics and index websites in the appropriate topic for later use. Users can then update and delete bookmarks and topics at will as their interests change. For times when a user doesn't have access to their SiteStash account but discover a site they'd like to bookmark, they can email the site with the topic name and bookmarked website. Their site will then automatically be saved to the appropriate location in the database.",
    features: [
      'Dynamically pulling in bookmarked sites icons to display with the names',
      'Users can not only bookmark websites on the application but they can email a URL to SiteStash and have it saved in the SiteStash database',
      'Full user authorization and authentication with Devise and Pundit',
      'Users can group bookmarked websites into their custom created topics for easier location',
    ],
    stack: ['Ruby on Rails', 'Devise', 'Pundit', 'Faker'],
  },
]

export const skills = [
  {
    name: 'JavaScript | jQuery',
    id: 0,
    logo: jsLogo,
    alt: 'JavaScript Logo',
  },
  {
    name: 'React | React Native',
    id: 1,
    logo: reactLogo,
    alt: 'React Logo',
  },
  {
    name: 'GraphQL',
    id: 2,
    logo: graphqlLogo,
    alt: 'GraphQL Logo',
  },
  {
    name: 'Wordpress | PHP',
    id: 3,
    logo: wpLogo,
    alt: 'Wordpress Logo',
  },
  {
    name: 'Ruby on Rails',
    id: 4,
    logo: railsLogo,
    alt: 'Ruby on Rails Logo',
  },
  {
    name: 'Sass | Styled Components',
    id: 5,
    logo: sassLogo,
    alt: 'Sass Logo',
  },
]
