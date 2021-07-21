import project1 from '../components/assets/images/Projects/project-voodu.JPG';
import project3 from '../components/assets/images/Projects/project-restcountries.JPG'
import project2 from '../components/assets/images/Projects/project-social.jpg';
import project4 from '../components/assets/images/Projects/project-bookmark.jpg';
import project5 from '../components/assets/images/Projects/project-manage.jpg';


export const ProjectData = [

    {
        img: project1,
        alt: 'Voodu',
        title: 'Voodu Movie Site',
        description: 'A movie website that shows details and trailers of movies, tv shows and people using TMDB API Built with Reactjs and Redux',
        tech_use: [
            // {name: 'HTML'},
            // {name: 'CSS'},
            {name: 'React.js'},
            {name: 'SCSS'},
            {name: 'Redux'},
            {name: 'API'}, 
        ],
        site_link: 'https://voodu.netlify.app/',
        github_repo: 'https://github.com/jef-design/voodu-movie'
    },
    {
        img: project2,
        alt: 'Social Media Dashboard',
        title: 'Social Media Dashboard',
        description: 'A Front end mentor challenge',
        tech_use: [
            {name: 'HTML'},
            {name: 'CSS'},
            {name: 'Javascript'},
        ],
        site_link: 'https://socialmediadashboard00.netlify.app/',
        github_repo: 'https://github.com/jef-design/voodu-movie'
    }
    ,
    {
        img: project3,
        alt: 'Country Info',
        title: 'CountryInfo',
        description: 'Website that can show the details about different countries using Rest Countries API Built with Reactjs and Redux',
        tech_use: [
            {name: 'React.js'},
            {name: 'Styled-Components'},
            {name: 'Redux'},
            {name: 'API'}, 
        ],
        site_link: 'https://country-infoo.netlify.app/',
        github_repo: 'https://github.com/jef-design/voodu-movie'
    },
    {
        img: project4,
        alt: 'Bookmark Landing Page',
        title: 'Bookmark Landing Page',
        description: 'A simple Bookmark Landing Page with tabbed features section and FAQ accordion.',
        tech_use: [
            {name: 'HTML'},
            {name: 'CSS'},
            {name: 'SCSS'},
            {name: 'Javascript'},
            {name: 'Figma'},
        ],
        site_link: 'https://jef-design.github.io/bookmark-landing-page/',
        github_repo: 'https://github.com/jef-design/bookmark-landing-page'
    }
    ,
    {
        img: project5,
        alt: 'Manage Landing Page',
        title: 'Manage Landing Page',
        description: 'A Front end mentor challenge design in Figma.',
        tech_use: [
            {name: 'HTML'},
            {name: 'CSS'},
            {name: 'SCSS'},
            {name: 'Javascript'},
            {name: 'Figma'},
        ],
        site_link: 'https://manage-fm.netlify.app/',
        github_repo: 'https://github.com/jef-design/manage'
    }
]