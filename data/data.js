

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// HERE ALL THE DATA FROM THE WEB PAGE WILL BE INSERTED
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


//=========================================
// INTRODUCTION
//=========================================
export const introductionData = {
    // Hi, my name is....
    yourName: "Yucheng Lin", // Insert your name
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
            icon: "fa fa-github-alt",   // find other icon in https://fontawesome.com/v4.7/icons/
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
    description: "I am currently a CS major senior in University of Wisconsin Madison. I am passionate about technology, specifically in the field of software development and front-end development. I am looking for a full-time software development or web development position after graduation. I am a fast learner and a team player. I am also a hard worker and a self-motivated person. I am willing to learn new things and I am always open to new opportunities.",
    titleURL: "View Resume",
    urlCV: "https://drive.google.com/file/d/1ZEE-vvQLxc1bGFgRisrR1fJ8iUwTCSzA/view?usp=sharing"
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
        describe: "Developed a flexible and modular web application for PC by defining over 10 reusable components using React, React Router, and Redux.",
        url: "https://www.limewhale.com/",
        img: "assets/intern-2.png"
    },
    {
        title: "Data Visualization Course Team Project",
        describe: "Lead team to develop an interactive web application which allows users to move food item bubbles around the screen and make improvements on their diets.",
        url: "https://hideinsky.github.io/Data_Visualization/index.html",
        img: "assets/project-3.png"
    }
]








