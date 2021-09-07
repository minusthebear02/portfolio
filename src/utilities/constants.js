import reactLogo from '../images/skills/react-logo-white.png'
import jsLogo from '../images/skills/javascript-logo-white.png'
import graphqlLogo from '../images/skills/graphql-logo-white.png'
import railsLogo from '../images/skills/rails-logo-white.png'
import wpLogo from '../images/skills/wordpress-logo-white.png'
import sassLogo from '../images/skills/sass-logo-white.png'

export const projects = [
  {
    name: 'AMAC App',
    description:
      "AMAC's flagship mobile application with over 37,000 downloads across the iOS App Store and Google Play Store with 4.8 star ratings in both. News application where users read new and archived news articles or podcasts and bookmark the ones they want to come back to later. Features video along with podcast style audio that plays even while app is not open or phone is asleep. (POLITICAL VIEWS OF AMAC DO NOT REFLECT MY OWN)<br /><br /><a href='https://apps.apple.com/us/app/amac-inc/id1556320046'><img width='75px' src='https://amac.us/wp-content/uploads/2021/04/app-store-icon.png' alt='Apple App Store Icon'></a> <a href='https://play.google.com/store/apps/details?id=com.amac.amac'><img width='61px' style='margin-left:15px' src='https://amac.us/wp-content/uploads/2021/04/google-play-icon.png' alt='Google Play Store Icon'></a>",
    features: [
      'Easy to use News reading and bookmarking',
      'User engagement in the form of article comments and polls',
      'Video podcasts with audio that persists even while the phone screen is asleep',
      'Full fledged push notification system implemented with the help of serverless functions on AWS',
      'Dark mode and Text size adjustments to help make the app more accessible',
    ],
    stack: ['React Native', 'Wordpress REST API', 'AWS Lambda', 'Node.js'],
    images: [{fileName: 'amac-news-app.png', altText: 'AMAC App'}],
  },
  {
    name: 'Army Futures Command',
    description:
      "A public facing website that shows the US Army's Army Futures Command organization and all of its sub-commands.<br /><br />The site's purpose is to invite collaboration between AFC and potential industry and academic partners to help further modernize the Army's efforts.<br /><br /><a href='https://armyfuturescommand.com' target='_blank' rel='noopener noreferrer'>Check it out here.</a>",
    features: [
      'Detailed descriptions of what the Army Futures Command does',
      'Interactive map showing locations of sub-commands all over the world',
      'Each subcommand has its own page detailing what they do with portraits and bios of their leadership',
      'Lists of opportunities to get involved with the program including career opportunities along with projects open to proposal submissions',
    ],
    stack: ['React', 'Next.js', 'Strapi', 'Graphql', 'TinaCMS'],
    images: [{ fileName: 'army-futures-command-home.png', altText: 'Army Futures Command Homepage' }, { fileName: 'army_futures_command-sf.png', altText: 'Army Futures Command Software Factory page'}],
  },
  {
    name: 'AMAC Map',
    description:
      'A business listing directory application for AMAC Members to search for and patronize local businesses with similar values and ideologies that provide discounts for them as AMAC Members. This Full Stack React and Node application is live and in production!<br /><br /><a href="https://map.amac.us/" target="_blank" rel="noopener noreferrer">Check it out here.</a>',
    features: [
      'Map for searching nearby locations based on zip code, location provided by the browser, business category and/or business name',
      'Users have the choice to display results based on distance from searched location or by business name alphabetically',
      'Businesses that get listed can upload their logo along with optional discount coupons',
      'Businesses can have any number of locations. If location count is high, locations close together get grouped on the map for render performance purposes',
    ],
    stack: ['React', 'Framer Motion', 'Node', 'Express', 'Stripe'],
    images: [{fileName: 'map-home.png', altText: 'AMAC Map - Homepage'}, {fileName: 'map-map.png', altText: 'AMAC Map - Map page'}],
  },
  {
    name: 'AMAC games',
    description:
      'Five puzzle type games for our 1.5 million over 55 aged members to play to keep their minds sharp. Built as Custom Post Types in Wordpress for in-house content creators to quickly and easily input each new daily game into the WP backend and have the games created dynamically.<br /><br />Each game with custom PHP templates along with Javascript and jQuery scripts to implement game creation and gameplay.<br /><br /><a href="https://amac.us/games" target="_blank" rel="noopener noreferrer">Check them out here.</a>',
    features: [
      'Quizzes',
      'Puzzle',
      'Spot the Difference',
      'Word Search',
      'Word Jumble',
    ],
    stack: ['Wordpress', 'PHP', 'Javascript', 'jQuery'],
    images: [{ fileName: 'amac-games.jpg', alText: 'AMAC Games - Archive page'}, { fileName: 'amac-word-search.jpg', altText: 'AMAC Games - Word Search'}]
  }
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
    name: 'WordPress | PHP',
    id: 3,
    logo: wpLogo,
    alt: 'WordPress Logo',
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
