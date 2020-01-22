import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'



class HomeIndex extends React.Component {

    render() {
        const siteTitle = "Yonael Bekele - Personal Website"
        const siteDescription = "Overview of interests, previous work and skills"

        return (
            <Layout>
                <Helmet>
                        <title>{siteTitle}</title>
                        <meta name="description" content={siteDescription} />
                </Helmet>

                <div id="main">

                    <section id="one">
                        <header className="major">
                            <h2>Yonael Bekele's Overview</h2>
                        </header>
                        <p>I'm a Full Stack Developer mainly interested in Web Development, Natural Language Processing and Web Architechture. But I'm always open to new and exciting opportunities in tech!</p>
                        <break>
                        <p>The main language I work with is <strong>Python</strong>, but I've worked with <strong>Javascript</strong> and have a bit of experience working with <strong>Java</strong> and <strong>C</strong>.</p>
                        <p>I've worked with Relational Databases (<strong>Postgres</strong> and <strong>MySQL</strong>), containerization using <strong>Docker</strong> and front-end web frameworks like <strong>React</strong> & <strong>Bootstrap</strong>.</p>
                        </break>
                        <ul className="actions">
                            <li><a href="https://docs.google.com/gview?url=https://github.com/ybekele/Gatsby-Portfolio/raw/master/Yonael_Bekele_2020.pdf" className="button">Resume</a></li>
                        </ul>
                    </section>

                    <section id="two">
                        <h2>Recent Work</h2>
                        <h3> The Online Interview System </h3>
                        <p>The Department of Occupational Therapy at the University of Alberta gets more than 500+ applicants a year. They wanted a system where candidates can add a personal touch to their application, and have a way to ask questions that would be difficult to be distributed online yet be personal to the applicant.</p>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/0QQqfyDGqRA?start=17" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <p></p>
                        
                        <h3>FriendZone - Distributed Social Networking Application</h3>
                        <p>A course project based on the diaspora social networking app. FriendZone is a social networking Web Application that allows users to be in control of their data, and has the capability to interact with other social networking app nodes with similar API configurations.</p>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/Coq5Z20sqmc" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        
                        <p></p>
                        <h3>HabiTrack</h3>
                        <p>A course project for Android Devices to help users track their Habits, such as eating healthy, exercising, etc. Our application was unique because it gave the ability to users to share their accomplishments on social media!</p>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/iRYMjlrQxK0" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                        <p></p>
                        <ul className="actions">
                            <li><a href="#" className="button">Back to Top</a></li>
                        </ul>
                    </section>

                </div>

            </Layout>
        )
    }
}

export default HomeIndex