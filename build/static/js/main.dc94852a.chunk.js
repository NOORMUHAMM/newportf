(this["webpackJsonpi-am-Noor"]=this["webpackJsonpi-am-Noor"]||[]).push([[0],[,,,function(e,t,a){e.exports={container:"TechStacks_container__dcN49",logoWrapper:"TechStacks_logoWrapper__2B2DN",shake:"TechStacks_shake__1xjoA",techStacks:"TechStacks_techStacks__3ehSH",heading:"TechStacks_heading__33JsP",borderBottom:"TechStacks_borderBottom__1QtgD"}},,,function(e,t,a){e.exports={intro:"Home_intro__aH070",experience:"Home_experience__3DUKR",extraIntro:"Home_extraIntro__2m2NG",name:"Home_name__3ZSQT",profile:"Home_profile__vsCD1",profileImage:"Home_profileImage__u_oKt",techStacks:"Home_techStacks__tqPMk",projects:"Home_projects__2qoa5",heading:"Home_heading__5_uBL",borderBottom:"Home_borderBottom__2SPDm",line:"Home_line__2V2v4",resumeBtn:"Home_resumeBtn__1W652"}},,function(e,t,a){e.exports={card:"Card_card__yB5Ck",card__Container:"Card_card__Container__l1R7f",image:"Card_image__2Zxt2",colorDiv:"Card_colorDiv__2q55N",description:"Card_description__2gICy",titleContainer:"Card_titleContainer__3zBAW",popupTech:"Card_popupTech__3hozC",actionBtns:"Card_actionBtns__1tnni",description_container:"Card_description_container__1nk8B",dialogElements:"Card_dialogElements__2VOKr"}},function(e,t,a){e.exports={navContainer:"Navbar_navContainer__3KZ2w",logo:"Navbar_logo__2tsma",navbar:"Navbar_navbar__2poBK",links:"Navbar_links__11KoE",modeButton:"Navbar_modeButton__1Uhkr",bars:"Navbar_bars__1N9y-",circle:"Navbar_circle__1QOI0",crescent:"Navbar_crescent__2pBuf"}},function(e,t,a){e.exports={experiences:"Experiences_experiences__2dvRX",heading:"Experiences_heading__rcEUe",borderBottom:"Experiences_borderBottom__20TTx",container:"Experiences_container__1po5e",position:"Experiences_position__214PA",date:"Experiences_date__2OYz4",responsibilites:"Experiences_responsibilites__1a8Si"}},function(e,t,a){e.exports={container:"About_container__3XNfI",first:"About_first__1B--Q",second:"About_second__3mjKf",heading:"About_heading__17tyx",borderBottom:"About_borderBottom__3jEd_",aboutMe:"About_aboutMe__1VTW4"}},function(e,t,a){e.exports={footer:"Contact_footer__1jiQF",container:"Contact_container__hmOrN",paragraph:"Contact_paragraph__3NPPn",contactOptions:"Contact_contactOptions__2n5xf",shake:"Contact_shake__3ZeZ0",line:"Contact_line__3f8qC",copyright:"Contact_copyright__1c_1U"}},function(e,t,a){e.exports={container:"SideIcons_container__2yQpU",icons:"SideIcons_icons__2dPkv",iconsRihgt:"SideIcons_iconsRihgt__1jBZW",rightEmail:"SideIcons_rightEmail__E6D66",line:"SideIcons_line__MhORF"}},,,,function(e,t,a){e.exports={buttonComponent:"Button_buttonComponent__1hcbF"}},,,,,,,,,,function(e,t,a){},function(e,t,a){},,,,,,,function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),o=a(5),i=a.n(o),s=(a(27),a(2)),r=(a(28),a(20)),l=a(6),d=a.n(l),h={dark:{background:"#111825",title:"#CCD6F6",para:"#8993b1",heading:"#CCD6F6",line:"#24243a",imgBackground:"#0C141B",highlightBackground:"#0f1622",sideIcons:"#8892b0",menuBackground:"#093047",card:"#112240",linkHover:"linear-gradient(120deg, #182744, #132c26"},light:{background:"#FFFFFF",title:"#233742",para:"#233742",heading:"#233742",line:"lightgray",imgBackground:"#e9f3e8",highlightBackground:"#f0f8ef",sideIcons:"#766161",menuBackground:"#aaeff8",card:"#8BD8CE",linkHover:"linear-gradient(135deg, #ccc0f5, #6fd8c1)"}},b=a(0),j=JSON.parse(localStorage.getItem("theme"))||"dark",m=Object(c.createContext)(),p=function(e){var t=e.children,a=n.a.useState(j),o=Object(s.a)(a,2),i=o[0],r=o[1],l=n.a.useState(!0),d=Object(s.a)(l,2),p=d[0],g=d[1];Object(c.useEffect)((function(){localStorage.setItem("theme",JSON.stringify(i))}),[i]);var u={mode:i,newTheme:h[i],handleMode:function(){r("dark"===i?"light":"dark")},open:p,handleMenu:function(){g(!p)}};return Object(b.jsx)(m.Provider,{value:u,children:t})};var g=function(){var e=Object(c.useState)([0,0]),t=Object(s.a)(e,2),a=t[0],n=t[1];return Object(c.useLayoutEffect)((function(){function e(){n([window.innerWidth,window.innerHeight])}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),a},u=a(17),x=a.n(u),O=function(e){var t=e.text,a=e.handleButton,c=e.padding,o=n.a.useContext(m).newTheme;return Object(b.jsx)("button",{style:{color:"".concat(o.title),background:"".concat(o.linkHover),padding:"".concat(c)},className:x.a.buttonComponent,onClick:function(){return a()},children:Object(b.jsx)("span",{children:t})})},f=a(8),_=a.n(f),v=a(53),k=function(e){var t=Object(c.useState)(!1),a=Object(s.a)(t,2),o=a[0],i=a[1],r=n.a.useContext(m).newTheme,l=e.img,d=e.des,h=e.title,j=e.live,p=e.gitHub,u=e.technologies,x=g(),f=Object(s.a)(x,1)[0],k=function(e){i(!1)};return Object(b.jsxs)("div",{"data-aos":"fade-right","data-aos-offset":"300","data-aos-easing":"ease-in-sine","data-aos-duration":"700",className:_.a.card,style:{boxShadow:"3px 3px 5px ".concat(r.line),backgroundColor:"".concat(r.highlightBackground)},children:[Object(b.jsxs)("div",{className:_.a.image,children:[Object(b.jsx)("img",{src:l,alt:"project"}),Object(b.jsx)("div",{className:_.a.colorDiv})]}),Object(b.jsxs)("div",{className:_.a.card__Container,children:[Object(b.jsxs)("div",{className:_.a.titleContainer,style:f<=1e3?{background:"".concat(r.card)}:{background:"none"},children:[Object(b.jsx)("h2",{style:{color:"".concat(r.title)},children:h}),f<=840&&Object(b.jsx)(O,{text:"Read More",handleButton:function(){i(!o)},padding:"10px 20px"}),Object(b.jsx)("p",{style:{color:"".concat(r.para)},children:d}),Object(b.jsx)("div",{children:u.map((function(e,t){return Object(b.jsx)("span",{style:{marginLeft:"20px",color:"".concat(r.title)},children:e},t)}))})]}),Object(b.jsx)(v.a,{"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",open:o,onClose:k,children:Object(b.jsxs)("div",{style:{backgroundColor:"".concat(r.highlightBackground),padding:"20px"},children:[Object(b.jsx)("div",{className:_.a.image,children:Object(b.jsx)("img",{src:l,alt:"project"})}),Object(b.jsx)("h2",{style:{color:"".concat(r.title)},children:h}),Object(b.jsx)("p",{style:{color:"".concat(r.para)},children:d}),Object(b.jsx)("div",{className:_.a.popupTech,children:u.map((function(e,t){return Object(b.jsxs)("div",{style:{marginRight:"20px",color:"".concat(r.title)},children:[e,t!==u.length-1?",":"."]},t)}))}),Object(b.jsx)("div",{style:{backgroundColor:"".concat(r.line),height:"1px"}}),Object(b.jsx)("br",{}),Object(b.jsxs)("div",{className:_.a.dialogElements,children:[Object(b.jsxs)("div",{style:{color:"".concat(r.title)},className:_.a.actionBtns,children:[Object(b.jsx)("a",{href:p,rel:"noopener noreferrer",target:"_blank",children:Object(b.jsx)("i",{className:"fab fa-github"})}),Object(b.jsx)("a",{href:j,rel:"noopener noreferrer",target:"_blank",children:Object(b.jsx)("i",{className:"fas fa-external-link-alt"})})]}),Object(b.jsx)(O,{text:"close",handleButton:k,padding:"10px 20px"})]})]})}),Object(b.jsxs)("div",{style:{color:"".concat(r.para),background:"".concat(r.linkHover)},className:_.a.description,children:[Object(b.jsx)("a",{href:p,rel:"noopener noreferrer",target:"_blank",children:Object(b.jsx)("i",{className:"fab fa-github"})}),Object(b.jsx)("a",{href:j,rel:"noopener noreferrer",target:"_blank",children:Object(b.jsx)("i",{className:"fas fa-external-link-alt"})})]})]})]})},w=a(13),N=a.n(w),y=function(){var e=n.a.useContext(m).newTheme;return Object(b.jsx)("div",{className:N.a.container,children:Object(b.jsx)("div",{className:N.a.icons,style:{right:0,color:"".concat(e.sideIcons)},children:Object(b.jsxs)("div",{className:N.a.rightEmail,children:[Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"https://www.linkedin.com/in/noor-muhammed-a96a10116/","aria-label":"Linkedin",target:"_blank",rel:"noreferrer",children:Object(b.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",role:"img",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",className:"feather feather-linkedin",children:[Object(b.jsx)("title",{children:"LinkedIn"}),Object(b.jsx)("path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"}),Object(b.jsx)("rect",{x:"2",y:"9",width:"4",height:"12"}),Object(b.jsx)("circle",{cx:"4",cy:"4",r:"2"})]})})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"https://github.com/NOORMUHAMM","aria-label":"GitHub",rel:"noreferrer",target:"_blank",children:Object(b.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",role:"img",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",className:"feather feather-github",children:[Object(b.jsx)("title",{children:"GitHub"}),Object(b.jsx)("path",{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"})]})})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"https://www.instagram.com/noormuhammed1435/","aria-label":"Instagram",target:"_blank",rel:"noreferrer",children:Object(b.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",role:"img",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",className:"feather feather-instagram",children:[Object(b.jsx)("title",{children:"Instagram"}),Object(b.jsx)("rect",{x:"2",y:"2",width:"20",height:"20",rx:"5",ry:"5"}),Object(b.jsx)("path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"}),Object(b.jsx)("line",{x1:"17.5",y1:"6.5",x2:"17.51",y2:"6.5"})]})})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"https://twitter.com/noormuhammed143","aria-label":"Twitter",target:"_blank",rel:"noreferrer",children:Object(b.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",role:"img",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",className:"feather feather-twitter",children:[Object(b.jsx)("title",{children:"Twitter"}),Object(b.jsx)("path",{d:"M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"})]})})})]})})})},C=a(3),S=a.n(C),B=function(){var e=Object(c.useContext)(m).newTheme;return Object(b.jsxs)("div",{"data-aos":"fade-right","data-aos-offset":"200","data-aos-easing":"ease-in-sine","data-aos-duration":"800",children:[Object(b.jsx)("h1",{style:{color:"".concat(e.title)},className:S.a.heading,children:"Proficiencies"}),Object(b.jsx)("div",{className:S.a.borderBottom}),Object(b.jsxs)("div",{className:S.a.container,children:[Object(b.jsxs)("div",{style:{color:"".concat(e.title),background:"".concat(e.linkHover)},className:S.a.logoWrapper,children:[Object(b.jsx)("i",{className:"devicon-html5-plain colored"}),Object(b.jsx)("span",{children:"HTML"})]}),Object(b.jsxs)("div",{style:{color:"".concat(e.title),background:"".concat(e.linkHover)},className:S.a.logoWrapper,children:[Object(b.jsx)("i",{className:"devicon-css3-plain colored"}),Object(b.jsx)("span",{children:"CSS"})]}),Object(b.jsxs)("div",{style:{color:"".concat(e.title),background:"".concat(e.linkHover)},className:S.a.logoWrapper,children:[Object(b.jsx)("i",{className:"devicon-javascript-plain colored"}),Object(b.jsx)("span",{children:"Javascript"})]}),Object(b.jsxs)("div",{style:{color:"".concat(e.title),background:"".concat(e.linkHover)},className:S.a.logoWrapper,children:[Object(b.jsx)("i",{className:"devicon-react-original colored"}),Object(b.jsx)("span",{children:"React"})]}),Object(b.jsxs)("div",{style:{color:"".concat(e.title),background:"".concat(e.linkHover)},className:S.a.logoWrapper,children:[Object(b.jsx)("i",{style:{color:"#7248B6"},className:"devicon-redux-original"}),Object(b.jsx)("span",{children:"Redux"})]}),Object(b.jsxs)("div",{style:{color:"".concat(e.title),background:"".concat(e.linkHover)},className:S.a.logoWrapper,children:[Object(b.jsx)("i",{style:{color:"#509941"},className:"devicon-nodejs-plain"}),Object(b.jsx)("span",{children:"Node"})]}),Object(b.jsxs)("div",{style:{color:"".concat(e.title),background:"".concat(e.linkHover)},className:S.a.logoWrapper,children:[Object(b.jsx)("i",{className:"devicon-express-original"}),Object(b.jsx)("span",{children:"Express"})]}),Object(b.jsxs)("div",{style:{color:"".concat(e.title),background:"".concat(e.linkHover)},className:S.a.logoWrapper,children:[Object(b.jsx)("i",{className:"devicon-mongodb-plain colored"}),Object(b.jsx)("span",{children:"MongoDB"})]}),Object(b.jsxs)("div",{style:{color:"".concat(e.title),background:"".concat(e.linkHover)},className:S.a.logoWrapper,children:[Object(b.jsx)("i",{className:"devicon-sass-original colored"}),Object(b.jsx)("span",{children:"SASS"})]}),Object(b.jsxs)("div",{style:{color:"".concat(e.title),background:"".concat(e.linkHover)},className:S.a.logoWrapper,children:[Object(b.jsx)("i",{className:"devicon-gatsby-plain colored"}),Object(b.jsx)("span",{children:"Gatsby Js"})]}),Object(b.jsxs)("div",{style:{color:"".concat(e.title),background:"".concat(e.linkHover)},className:S.a.logoWrapper,children:[Object(b.jsx)("img",{src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",style:{width:"40px",marginBottom:"10px"}}),Object(b.jsx)("span",{children:"Graphql"})]})]})]})},H=a(19),M=a.n(H),T=(a(34),a(11)),E=a.n(T),I=function(){var e=n.a.useContext(m).newTheme,t=g();Object(s.a)(t,1)[0];return Object(b.jsxs)("div",{className:E.a.container,style:{boxShadow:"3px 3px 5px ".concat(e.line)},children:[Object(b.jsx)("div",{className:E.a.first,children:Object(b.jsx)("img",{src:"https://github.com/himrd95/portfolio/blob/main/public/developer.gif?raw=true",alt:""})}),Object(b.jsxs)("div",{className:E.a.second,children:[Object(b.jsx)("h1",{style:{color:"".concat(e.title)},className:E.a.heading,children:"About Me"}),Object(b.jsx)("div",{className:E.a.borderBottom}),Object(b.jsxs)("p",{style:{color:"".concat(e.para)},className:E.a.aboutMe,children:["Hello! My name is Noor Muhammed and I enjoy creating things that live on the internet. My interest in web development started back last year when I was trying to edit things on the web \u2014 taught me a lot about HTML & CSS!. ",Object(b.jsx)("br",{}),Object(b.jsx)("br",{})," Fast Forwarding to today, I built a number of web applications and 4 major projects. Learned a great deal about teamwork, leadership, and communication. After months of rigorous training, here I am",Object(b.jsxs)("span",{style:{color:"#00a0a0"},children:[" ","looking for an opportunity as a full stack web developer"]}),"."]})]})]})},L=[{img:"https://github.com/himrd95/portfolio/blob/main/public/ProjectImages/masai_refresh.png?raw=true",title:"Masai Refresh",des:"A Quiz app that tests your knowledge based on your preferred stack topic, and analyses results. A comprehensive report is presented at the end of each quiz.",demo:"",live:"https://refresh.masai.tech/quiz_topics",gitHub:"https://github.com/masai-oss/Masai_Refresh.git",technologies:["React","Redux","HTML","CSS","javaScript"]},{img:"https://github.com/arshadalitalwar/bookmyshow/blob/main/bookmyshow-app/public/website_images/home_page.JPG?raw=true",title:"Clone of BookMyShow",des:"BookMyShow website is basically for entertainment purposes, In this app, a user can book movie tickets by choosing the different theatres and timings accordingly. The user also can see some events happening around them and can attend the events.",demo:"",live:"https://bookmyshow-clone-masaischool.netlify.app/",gitHub:"https://github.com/arshadalitalwar/bookmyshow.git",technologies:["React","Redux","HTML","CSS","javaScript"]},{img:"https://github.com/himrd95/todo/blob/master/public/dashboard.png?raw=true",title:"Todo App",des:"A ToDo application made using React, Redux and a few libraries, wherein the user can add a new task, change the status, edit it, edit sub-task and delete it.",demo:"",live:"https://him-todo.netlify.app/",gitHub:"https://github.com/himrd95/todo.git",technologies:["React","Redux","HTML","CSS","javaScript"]},{img:"https://user-images.githubusercontent.com/73213873/107113597-f547e200-6885-11eb-8abd-72106074907a.png",title:"Clone of Medium",des:"Clone of a blogging web application, Medium where a user can read the blogs written by others and show their response also, one can share their thoughts by posting a blog.",demo:"",live:"https://medium-web.netlify.app/",gitHub:"https://github.com/himrd95/Medium-Clone.git",technologies:["React","HTML","CSS","javaScript"]},{img:"https://camo.githubusercontent.com/b7f4aa8c34ddf776dd19b78dc3488456470a73e5026f48784e9e753601468802/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f4c62507030307771454537386c6f68584d372f67697068792e676966",title:"Clone of Fitness Blender",des:"This is a clone of the Fitness Blender website. The clone is complete with a Login page, Sign-in page, Shopping Cart, Wishlist and Calendar Scheduling feature. Following is the link to the clone of the website.",demo:"",live:"https://anshusagar.github.io/FitnessBlender/",gitHub:"https://github.com/Anshusagar/FitnessBlender.git",technologies:["HTML","CSS","javaScript"]},{img:"https://github.com/mandarsatam/Mailchimp-Clone/blob/master/Snips/Screenshot%20(79).png?raw=true",title:"Mailchimp Clone",des:"This is a static clone of a website called Mailchimp. This clone includes landing, pricing, our story, and the resources page.",demo:"",live:"https://mandarsatam.github.io/Mailchimp-Clone/",gitHub:"https://github.com/mandarsatam/Mailchimp-Clone",technologies:["HTML","CSS","javaScript"]}],R=a(12),A=a.n(R),F=function(){var e=n.a.useContext(m).newTheme;return Object(b.jsxs)("footer",{className:A.a.footer,id:"contact",children:[Object(b.jsxs)("div",{className:A.a.container,children:[Object(b.jsx)("h1",{style:{color:"".concat(e.title)},children:"Get in Touch"}),Object(b.jsx)("p",{style:{color:"".concat(e.para)},className:A.a.paragraph,children:"I'm actively looking for any new opportunities, in full-stack web development."}),Object(b.jsxs)("div",{style:{color:"".concat(e.title)},className:A.a.contactOptions,children:[Object(b.jsx)("a",{href:"tel:+917895488719","aria-label":"GitHub",rel:"noreferrer",target:"_blank",children:Object(b.jsx)("i",{className:"fas fa-phone-alt"})}),Object(b.jsx)("a",{href:"mailto:noormuhammed14@gmail.com","aria-label":"email",target:"_blank",rel:"noreferrer",children:Object(b.jsx)("i",{className:"far fa-envelope"})}),Object(b.jsx)("a",{href:"https://twitter.com/noormuhammed143","aria-label":"Twitter",target:"_blank",rel:"noreferrer",children:Object(b.jsx)("i",{className:"fab fa-twitter"})}),Object(b.jsx)("a",{href:"https://github.com/NOORMUHAMM","aria-label":"GitHub",rel:"noreferrer",target:"_blank",children:Object(b.jsx)("i",{className:"fab fa-github"})}),Object(b.jsx)("a",{href:"https://www.linkedin.com/in/noor-muhammed-a96a10116/","aria-label":"Linkedin",target:"_blank",rel:"noreferrer",children:Object(b.jsx)("i",{className:"fab fa-linkedin-in"})})]})]}),Object(b.jsx)("div",{style:{background:"".concat(e.line)},className:A.a.line}),Object(b.jsx)("div",{style:{color:"".concat(e.para)},className:A.a.copyright,children:"Designed and build by Noor Muhammed, 2021 All rights reserved."})]})},W=a(10),D=a.n(W),P=function(){var e=Object(c.useContext)(m).newTheme;return Object(b.jsxs)("div",{className:D.a.experiences,children:[Object(b.jsx)("h1",{style:{color:"".concat(e.title)},className:D.a.heading,children:"Experience"}),Object(b.jsx)("div",{className:D.a.borderBottom}),Object(b.jsxs)("div",{className:D.a.container,children:[Object(b.jsxs)("div",{className:D.a.position,children:["Shopify Developer | Software Engineer"," ",Object(b.jsx)("a",{href:"https://www.masaischool.com/",children:"@ CodeRapper"})]}),Object(b.jsx)("div",{className:D.a.date,children:"DEC 2021 - present"}),Object(b.jsxs)("fieldset",{className:D.a.responsibilites,children:[Object(b.jsx)("legend",{children:Object(b.jsx)("h3",{children:" Roles & responsibilites "})}),Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:"Working with the team of 25 member where I'm working as a frontend Developer."}),Object(b.jsx)("li",{children:"Worked on the new blog projects using new technology gatsby js and Graph ql maintaining blog with contentful(CMS)."}),Object(b.jsx)("li",{children:"Working on a project which is Shopify applications development using shopify polaris and Graph ql"})]})]})]})]})},z=function(e){var t=e.scrollRef,a=Object(c.useState)(L.slice(0,4)),o=Object(s.a)(a,2),i=o[0],l=o[1],h=n.a.useContext(m).newTheme,j=Object(c.useState)(0),p=Object(s.a)(j,2),g=p[0],u=p[1],x=Object(c.useState)(0),f=Object(s.a)(x,2),_=f[0],v=f[1];Object(c.useEffect)((function(){M.a.init()}));var w=function(){u(window.pageYOffset)};Object(c.useEffect)((function(){return window.addEventListener("scroll",w),function(){return window.removeEventListener("scroll",w)}}),[]),Object(c.useEffect)((function(){document.body.style.backgroundColor=h.background}),[h]);console.log(g);return Object(b.jsxs)("div",{ref:t,children:[Object(b.jsx)(y,{}),Object(b.jsxs)("div",{id:"home",className:d.a.profile,style:{backgroundColor:"".concat(h.imgBackground)},children:[Object(b.jsxs)("div",{"data-aos":"fade-zoom-out",className:d.a.intro,style:{color:"".concat(h.para),transform:"translateX(-".concat(2.5*g,"px)"),opacity:"".concat(g>300?"0":g>160?".5":"1")},children:[Object(b.jsxs)("h1",{children:[Object(b.jsx)("span",{children:"Hi, My name is"}),Object(b.jsx)("div",{className:d.a.name,style:{color:"".concat(h.title)},children:"Noor Muhammed."})]}),Object(b.jsx)("h1",{children:"I am a Full Stack Developer based in Dehradun. I build things for web."}),Object(b.jsx)("div",{className:d.a.btn,children:Object(b.jsx)("a",{href:"https://drive.google.com/file/d/1QOx_5nFHSLbyDdEFGOer-I3ctKJhp8w-/view?usp=sharing",target:"_blank",children:Object(b.jsx)(O,{text:Object(b.jsxs)("span",{className:d.a.resumeBtn,children:[Object(b.jsx)("span",{children:"Resume"})," ",Object(b.jsx)("i",{className:"fas fa-file-download"})]}),handleButton:function(){}})})})]}),Object(b.jsx)("div",{style:{transform:"translateX(".concat(2.5*g,"px)"),opacity:"".concat(g>300?"0":g>160?".5":"1")},className:d.a.profileImage,children:Object(b.jsx)("img",{src:"./NOORPIC.jpg",alt:"Profile pic"})})]}),Object(b.jsx)("div",{id:"about",style:{background:"".concat(h.highlightBackground)},className:d.a.experience,children:Object(b.jsx)(I,{})}),Object(b.jsx)("div",{id:"techStacks",className:d.a.techStacks,children:Object(b.jsx)(B,{})}),Object(b.jsx)("div",{id:"experience",className:d.a.experience,style:{background:"".concat(h.highlightBackground)},children:Object(b.jsx)("div",{"data-aos":"fade-right","data-aos-offset":"150","data-aos-easing":"ease-in-sine","data-aos-duration":"700",style:{color:"".concat(h.para)},children:Object(b.jsx)(P,{})})}),Object(b.jsxs)("div",{id:"projects",className:d.a.projects,children:[Object(b.jsx)("h1",{style:{color:"".concat(h.title)},className:d.a.heading,children:"Few Things I've Build"}),Object(b.jsx)("div",{className:d.a.borderBottom}),Object(b.jsx)("div",{children:i.map((function(e,t){return Object(b.jsx)(k,Object(r.a)({},e),t)}))}),Object(b.jsx)(O,{text:L.length!==i.length?"Show More":"Show Less",handleButton:function(){L.length===i.length?(l(L.slice(0,4)),window.scrollTo(0,_)):(l(L),v(g))}})]}),Object(b.jsx)("div",{style:{background:"".concat(h.highlightBackground)},children:Object(b.jsx)(F,{})})]})},G=a(9),q=a.n(G),J={bar1:{position:"absolute",width:"15px",transform:"rotate(45deg)"},bar2:{position:"absolute",left:"-2px"},bar3:{position:"absolute",width:"15px",transform:"rotate(-45deg)"}},K={background:"linear-gradient(40deg, #8983F7, #1c2931 70%)"},Q={transform:"scale(1)"},U=function(){var e=Object(c.useState)(window.pageYOffset),t=Object(s.a)(e,2),a=t[0],n=t[1],o=Object(c.useRef)(),i=Object(c.useContext)(m),r=i.newTheme,l=i.mode,d=i.handleMode,h=i.open,j=i.handleMenu;return window.onscroll=function(){var e=window.pageYOffset;o.current.style.top=a>e?"0":"-80px",n(e)},Object(b.jsx)("nav",{ref:o,className:q.a.navContainer,style:{background:"".concat(r.background),boxShadow:"3px 3px 10px ".concat(r.line)},children:Object(b.jsxs)("div",{className:q.a.navbar,children:[Object(b.jsx)("a",{href:"https://himanshu-dwivedi.netlify.app/",children:Object(b.jsx)("div",{className:q.a.logo,children:Object(b.jsx)("img",{src:"./N.png",alt:"Logo"})})}),Object(b.jsxs)("div",{style:{color:"".concat(r.title)},className:q.a.links,children:[Object(b.jsx)("a",{href:"#home",children:"Home"}),Object(b.jsx)("a",{href:"#about",children:"About"}),Object(b.jsx)("a",{href:"#experience",children:"Experience"}),Object(b.jsx)("a",{href:"#projects",children:"Projects"}),Object(b.jsx)("a",{href:"#contact",children:"Contact"})]}),Object(b.jsx)("button",{"aria-label":"dark"===l?"Light Mode":"Dark Mode",title:"dark"===l?"Toggle Light Mode":"Toggle Dark Mode",style:{color:"".concat(r.title)},className:q.a.modeButton,onClick:d,children:Object(b.jsx)("div",{className:q.a.circle,style:"light"===l?K:{},children:Object(b.jsx)("div",{style:"light"===l?Q:{},className:q.a.crescent})})}),Object(b.jsxs)("div",{onClick:j,className:q.a.bars,children:[Object(b.jsx)("div",{style:h?{background:"".concat(r.title)}:J.bar1}),Object(b.jsx)("div",{style:h?{background:"".concat(r.title)}:J.bar2}),Object(b.jsx)("div",{style:h?{background:"".concat(r.title)}:J.bar3})]})]})})};var Z=function(){var e=Object(c.useState)(!1),t=Object(s.a)(e,2),a=t[0],o=t[1],i=n.a.useContext(m),r=i.newTheme,l=i.open,d=i.handleMenu,h=Object(c.useRef)();return Object(c.useEffect)((function(){setTimeout((function(){o(!0)}),2200)}),[]),Object(b.jsx)(n.a.Fragment,{children:a?Object(b.jsxs)("div",{className:"components",children:[Object(b.jsxs)("div",{style:{background:"".concat(r.menuBackground),color:"".concat(r.title),left:"".concat(l?"-100vw":"0")},className:"links",children:[Object(b.jsx)("a",{onClick:d,href:"#home",children:"Home"}),Object(b.jsx)("a",{onClick:d,href:"#about",children:"About"}),Object(b.jsx)("a",{onClick:d,href:"#experience",children:"Experience"}),Object(b.jsx)("a",{onClick:d,href:"#projects",children:"Projects"}),Object(b.jsx)("a",{onClick:d,href:"#techStacks",children:"Profeciencies"}),Object(b.jsx)("a",{onClick:d,href:"#contact",children:"Contact"})]}),Object(b.jsx)(U,{}),Object(b.jsx)(z,{scrollRef:h})]}):Object(b.jsx)("div",{style:{background:"".concat(r.background)},className:"logoStart",children:Object(b.jsx)("img",{src:"./N.png",alt:"logo"})})})},V=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,54)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,o=t.getLCP,i=t.getTTFB;a(e),c(e),n(e),o(e),i(e)}))};i.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(p,{children:Object(b.jsx)(Z,{})})}),document.getElementById("root")),V()}],[[35,1,2]]]);
//# sourceMappingURL=main.dc94852a.chunk.js.map