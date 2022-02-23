import { Fragment } from 'react';

import me from '../public/static/Images/tooncropped.png';
import palms from '../public/static/Images/palmtrees.jpg';
// import abstract from '../public/static/Images/abstract.png';
import greenCircle from '../public/static/Images/greencircle.png';

import Image from 'next/image';

import classes from './About.module.scss';

import Container from 'react-bootstrap/Container';

import Button from '../components/ui/Button';
import FlexContainer from '../components/ui/FlexContainer';
import SideBar from '../components/ui/SideBar';
import SectionContainer from '../components/ui/SectionContainer';
import Headings from '../components/ui/Headings';

const About = () => {
	return (
		<Fragment>
			<SideBar />
			<SectionContainer>
                
				<Container>
                    <div className={classes.flex__container}>
                        
                        {/* <div className={classes.circle}> <Image src={greenCircle} height={100} width={100}/></div> */}
                        <div className={classes.img__holder}><Image src={me} height={130} width={140} className={classes.me}/></div>
                    </div>
                    <FlexContainer>
                    {/* <div className={classes.headings__holder}><Headings heading="Who I am">About Me</Headings></div> */}
                        {/* <div className={classes.first}>
                            <Image src={me} height={500} width={350} priority/>
                            <div className={classes.bio}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus iste, magni velit vitae doloribus ullam quas suscipit ab veritatis molestiae, maiores nam aut dolorem enim necessitatibus veniam, quod saepe dolores.
                            </div>
                        </div>
                        <div className={classes.second}>
                            <Image src={palms} height={500} width={340} priority/>
                            <div className={classes.bios}>
                            <div className={classes.first_bio}>
                                Name: Lindy Ramirez <br />
                                Interests: Tech, food, sports <br />
                                Languages: Spanish, Portuguese <br />
                            </div>
                            <div className={classes.second_bio}>
                                Location: El Monte, CA <br />
                                Focus: Front End <br />
                                 Development
                            </div>
                            </div>
                        </div>
                        <div className={classes.third}>
                            
                        <div className={classes.abstract}>
                                <Image  src={`/../public/static/Images/abstract.png`} height={400} width={200}/>  
                            </div>
                            <h1>Education</h1>
                            <p className={classes.school}>University of California, Santa Barbara <br />
                            <span className={classes.details}>Goleta, CA</span>
                            </p>
                            <p className={classes.details}>
                                Bachelor's Degree in Anthropology <br />
                                GPA: 3.25
                            </p>
                        </div> */}
                        
                        
                        <div className={classes.about__card}>
                        <h1>Lindy Ramirez</h1>
                                <h3>Front End Developer</h3>
                           <div>
                               
                                </div>
                           <div className={classes.details}>
                           
                               
                               
                                
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet magni perferendis error quos voluptate ea, minus totam. Dolore quaerat animi consectetur recusandae eius dolor enim. Repudiandae labore odit unde dolor. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate ducimus officiis pariatur minima ipsam quibusdam iure, cum qui? Architecto eaque adipisci asperiores sequi? Fugit ratione quibusdam nam accusamus aut expedita.</p>
                                <div className={classes.btn__container}>
                                    <Button name="Hire Me"/>
                                    <div className={classes.icons}>
                                        <div className={classes.img}><Image src={`/static/icons/github-logo.png`} height={30} width={30} /></div>
                                        <div className={classes.img}><Image src={`/static/icons/twitter-brands.svg`} height={30} width={30} /></div>
                                        <div className={classes.img}><Image src={`/static/icons/linkedin-in-brands.svg`} height={30} width={30} /></div> 
                                    </div>
                                </div>
                           </div>
                        </div>
                        
                    </FlexContainer>
				</Container>
			</SectionContainer>
		</Fragment>
	);
};

export default About;
