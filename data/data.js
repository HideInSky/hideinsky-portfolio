//=========================================
// INTRODUCTION
//=========================================
export const introductionData = {
    // Hi, my name is....
    yourName: "", // Insert your name
    socialNetwork: [
        {
            icon: "fa fa-envelope-o",  // find other icon in https://fontawesome.com/v4.7/icons/
            nameSocialNetwork: "Email",  // label name
            url: "#"  //  url of the Social Network
        },
        {
            icon: "fa fa-linkedin-square", // find other icon in https://fontawesome.com/v4.7/icons/
            nameSocialNetwork: "Linkedin",
            url: "https://www.linkedin.com/in/yucheng-lin-12b422195/"
        },
        {
            icon: "fa fa-github",   // find other icon in https://fontawesome.com/v4.7/icons/
            nameSocialNetwork: "Github",
            url: "https://github.com/HideInSky"
        }


    ],

    // Page session direction
    nav: [
        {
            optionNav: "About me",
            idSection: "about"    // If it changes, check the session id in <index.html> ;
        },
        {
            optionNav: "Skills",
            idSection: "skills"   // If it changes, check the session id in <index.html> ;
        },
        {
            optionNav: "Projects",
            idSection: "projects"  // If it changes, check the session id in <index.html> ;
        }


    ]

}


//=========================================
//                ABOUT ME
//=========================================
export const aboutMeData = {
    title: "Yucheng Lin",
    description: "I am a CS senior in UW-Madison. I am passionate about technology. I am interested in both software development and web development. During my past years in college, I built java and python projects either individually or collboratively to fully understand the programming languages. During the past summers, I attended two interns both related to web development. Currently I am building individual web development MERN stack project. I am activly looking for full-time software development engineer or web development developer position that may include visa sponsorship. I am a proactive person and looking for any opportunities to learn new skills and technologies that may contribute to your company. Thank you for reading through, wish you have a nice and happy day!",
    titleURL: "View Resume",
    urlCV: "https://drive.google.com/file/d/1H6Z4YVvzCbMc61m10glPpByANjiI54WF/view?usp=sharing"
}




//=========================================
//                 SKILLS 
//=========================================
export const skillsData = [
    {
        img: "assets/java.svg",
        nameSkill: "Java"
    },
    {
        img: "assets/js.svg",
        nameSkill: "JavaScript"
    },
    {
        img: "assets/node.svg",  // card image  > insert the svg image in the assets folder
        nameSkill: "Node.js"      //  card name
    },
    {
        img: "assets/react.svg",
        nameSkill: "React"
    },
    {
        img: "assets/python.svg",  // card image  > insert the svg image in the assets folder
        nameSkill: "Python"      //  card name
    },
    {
        img: "assets/bootstrap.svg",  // card image  > insert the svg image in the assets folder
        nameSkill: "Bootstrap" 
    }

]
//=========================================
//                PROJECTS
//=========================================
export const projectsData = [
    {
        title: "Zenind Software Developer Engineer Intern",    // card image  > insert the svg image in the assets folder
        describe: 
        "Implement RESTful APIs and CRUD operations for the backend of the web application using Node.js, Express, and MongoDB.",
        url: "https://www.zenind.com/en-US",  // url of the Github repository
        img: "assets/intern-1.png"  //image Project
    },
    {
        title: "Wicky Web Developer Intern",
        describe: "Developed a flexible and modular client web application for PC by defining over 10 reusable components using React, React Router, Bootstrap and Redux.",
        url: "https://www.limewhale.com/",
        img: "assets/intern-2.png"
    },
    {
        title: "Data Visualization Course Team Project",
        describe: "Lead team to develop an interactive web application which allows users to move food item bubbles around the screen and make improvements on their diets.",
        url: "https://hideinsky/project-3.html",
        img: "assets/project-3.png"
    }
]








