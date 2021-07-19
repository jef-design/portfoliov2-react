import React from 'react'
import Hero from '../main/Hero/Hero'
import { ProjectData } from '../../data/ProjectData'
import SelectedProject from '../main/Projects/SelectedProject'

function Home() {
    return (
        <React.Fragment>
            <Hero/>
            {/* <Project data={ProjectData} /> */}
            <SelectedProject data={ProjectData} />
        </React.Fragment>
    )
}

export default Home
