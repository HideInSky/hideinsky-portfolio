

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
    titleURL: "View CV",
    urlCV: "https://docs.google.com/document/d/e/2PACX-1vT2AlUZWSLEqohaKXB7KbGmXfpXidRHiC568hWalEQzVgIFwp7AMUAzcHg2FpjmCEXjk28r0p-3Rp45/pub"
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
        title: "PROJECT TITLE",    // card image  > insert the svg image in the assets folder
        describe: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam veritatis iusto reiciendisquos, delectus in deserunt harum a. Rerum similique corporis sit odit error incidunt distinctio consectetur neque, cum illum?",
        url: "#",  // url of the Github repository
        img: "assets/project1.jpg"  //image Project
    },
    {
        title: "PROJECT TITLE",
        describe: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam veritatis iusto reiciendisquos, delectus in deserunt harum a. Rerum similique corporis sit odit error incidunt distinctio consectetur neque, cum illum?",
        url: "#",
        img: "assets/project1.jpg"
    },
    {
        title: "PROJECT TITLE",
        describe: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam veritatis iusto reiciendisquos, delectus in deserunt harum a. Rerum similique corporis sit odit error incidunt distinctio consectetur neque, cum illum?",
        url: "#",
        img: "assets/project1.jpg"
    }
]








