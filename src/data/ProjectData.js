import project1 from '../components/assets/images/Projects/project-voodu.JPG';
import project3 from '../components/assets/images/Projects/project-restcountries.JPG'
import project2 from '../components/assets/images/Projects/project-social.jpg';
import project4 from '../components/assets/images/Projects/project-bookmark.jpg';
import project5 from '../components/assets/images/Projects/project-manage.jpg';
import voodumobile from '../components/assets/images/Projects/voodu/voodutv.JPG'
import voodudesktop from '../components/assets/images/Projects/voodu/voodumovies.JPG'
import socialmobile from '../components/assets/images/Projects/social/social-media-mobile.JPG'
import socialdesktop from '../components/assets/images/Projects/social/social-media-desktop-dark.JPG'
import restcountriesdesktop from '../components/assets/images/Projects/rest-countries/rest-countries-desktop.JPG'
import bookmarkmobile from '../components/assets/images/Projects/bookmark/bookmark-mobile.JPG'
import bookmarkdesktop from '../components/assets/images/Projects/bookmark/bookmark-desktop.JPG'
import managemobile from '../components/assets/images/Projects/manage/manage-mobile.JPG'
import managedesktop from '../components/assets/images/Projects/manage/manage-desktop.JPG'


export const ProjectData = [

    {
        img: project1,
        mobile_view: voodumobile,
        desktop_view: voodudesktop,
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
        mobile_view: socialmobile,
        desktop_view: socialdesktop,
        alt: 'Social Media Dashboard',
        title: 'Social Media Dashboard',
        description: 'A Social Media Dashboard challenge with theme switcher(light & dark) from front-end mentor',
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
        // mobile_view: restcountriesmobile,
        desktop_view:restcountriesdesktop,
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
        mobile_view: bookmarkmobile,
        desktop_view: bookmarkdesktop,
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
        mobile_view: managemobile,
        desktop_view: managedesktop,
        alt: 'Manage Landing Page',
        title: 'Manage Landing Page',
        description: 'A Manage landing page with fully responsive testimonial section from front-end mentor challenge.',
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