import './AboutPage.css';
import AboutImage from './AboutImageBackground.jpg';
import DeveloperImage from './DeveloperImage.png';
export default function AboutPage()
{
    const AboutFoodifyFeatures = [
        {id : 1 , title :"Discover various recipes from around the world."},
        {id : 2 , title :"Filter and search for recipes to make the selection process easier."},
        {id : 3 , title :"Add your favorite recipes to your Favorites page to return to them later."},
        {id : 4 , title :"Create recipes you'd like to prepare later."}
    ]
    return(
        <>
        <div className='about-image' style={{backgroundImage : `url(${AboutImage})`}}>
            <div className='about-image-text'>
            <h1>Foodify</h1>
            <p>is an interactive recipe hub designed to make cooking simple, fun, 
                and inspiring. The platform allows you to explore a wide variety of recipes categorized by ingredients and meal types,
                 making it easy to find exactly what you’re craving—whether it’s a quick breakfast, a hearty lunch, or a delicious dinner.
                  With a clean and modern interface, Foodify is built to give users a smooth experience while discovering new dishes, step-by-step
                   instructions, and helpful cooking tips.</p>
            </div>
            </div>

            <div className='section-about-foodify'>
                <div className='section-about-foodify-text'>
                    <h2>Learn and create</h2>
                    <h1>A collection of delicious recipes from around the world</h1>
                    <p>Learn the most delicious recipes and create your own favorites with Foodify. It allows you to:</p>
                    <ul>
                    {AboutFoodifyFeatures.map((item) => {
                        return <li key={item.id} style={{color:'#000',
                            fontFamily: 'Poppins',
                                fontSize: '20px',
                                fontStyle: 'normal',
                                fontWeight: '400',
                                lineHeight: '50px'
                        }}>{item.title}</li>
                    })}
                    </ul>
                </div>
                <div className='section-about-foodify-logo'>
                    <h1>Foodify</h1>
                </div>
            </div>

            <div className='section-about-developer'>
                <div className='section-about-developer-image' style={{backgroundImage :`url(${DeveloperImage})`}}></div>
                <div className='section-about-developer-text'>
                    <h2>Discover</h2>
                    <h1>About the Developer</h1>
                    <div className='underline'></div>
                    <p>Hi,</p>    
                    <p>I’m Saif Abu Matar, a passionate Front-End Developer with a degree in Software Engineering.
                         I enjoy bringing ideas to life through clean code and intuitive user experiences. Foodify
                         is part of my journey to build impactful projects that combine creativity with functionality.
                           With skills in HTML, CSS, JavaScript, and React, I focus on creating interactive web applications
                          that are both user-friendly and visually engaging. Beyond this project, I’m constantly learning new technologies
                           and expanding my skills to grow as a Full-Stack Developer.</p>                
                </div>
            </div>
        </>
    );
}