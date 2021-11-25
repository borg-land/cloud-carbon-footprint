(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{122:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=u(n),d=r,h=s["".concat(i,".").concat(d)]||s[d]||b[d]||o;return n?a.a.createElement(h,l(l({ref:t},p),{},{components:n})):a.a.createElement(h,l({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},92:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),o=(n(0),n(122)),i={id:"getting-started",title:"Getting Started",slug:"/getting-started"},l={unversionedId:"getting-started",id:"getting-started",isDocsHomePage:!1,title:"Getting Started",description:"There are two different ways to get started with Cloud Carbon Footprint:",source:"@site/docs/GettingStarted.md",slug:"/getting-started",permalink:"/docs/getting-started",version:"current",sidebar:"tryNowSidebar",previous:{title:"Introduction",permalink:"/docs/introduction"},next:{title:"Create an App",permalink:"/docs/create-app"}},c=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Create your Cloud Carbon Footprint App",id:"create-your-cloud-carbon-footprint-app",children:[]},{value:"Configuring the App Locally",id:"configuring-the-app-locally",children:[{value:"Clone the repository",id:"clone-the-repository",children:[]},{value:"Guided Install",id:"guided-install",children:[]},{value:"Standard Install",id:"standard-install",children:[]},{value:"Starting the App",id:"starting-the-app",children:[]},{value:"Optional Prerequisites",id:"optional-prerequisites",children:[]}]}],p={toc:c};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"There are two different ways to get started with Cloud Carbon Footprint:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Create a standalone app using the command line interface"),Object(o.b)("li",{parentName:"ul"},"Clone the Cloud Carbon Footprint repository")),Object(o.b)("p",null,"For the best way of staying up to date with the project, you can create a standalone app for simple customization according to your needs. This method uses the @cloud-carbon-footprint packages as npm dependencies, making for a more lightweight standalone app."),Object(o.b)("p",null,"Forking and cloning the repository is the best way to contribute to the project. Cloning the project will include all of the @cloud-carbon-footprint packages for local development and configuration. This path offers the option to create Pull Requests and to stay up to date with the latest changes."),Object(o.b)("h3",{id:"prerequisites"},"Prerequisites"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Git")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Node.js >= 12 (tip: use ",Object(o.b)("a",{parentName:"p",href:"https://github.com/nvm-sh/nvm"},"nvm")," or ",Object(o.b)("a",{parentName:"p",href:"https://github.com/tj/n"},"n")," to manage multiple Node versions)")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Yarn (latest)"))),Object(o.b)("h2",{id:"create-your-cloud-carbon-footprint-app"},"Create your Cloud Carbon Footprint App"),Object(o.b)("p",null,"We provide the @cloud-carbon-footprint/create-app package to create standalone instances of Cloud Carbon Footprint."),Object(o.b)("p",null,"This option offers a quick setup, but has @cloud-carbon-footprint packages as dependencies. This means you will inherit the core estimation logic, but will have less freedom over customizing that logic. If you want to explore linking in local Cloud Carbon Footprint packages to your created app, you can refer to ",Object(o.b)("a",{parentName:"p",href:"create-app#linking-in-local-cloud-carbon-footprint-packages"},"this section"),"."),Object(o.b)("p",null,"Using npx, you can then run the following command to create an app within your current working directory:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"npx @cloud-carbon-footprint/create-app\n")),Object(o.b)("p",null,"You can read more about this process in ",Object(o.b)("a",{parentName:"p",href:"create-app"},"Create an app"),"."),Object(o.b)("h2",{id:"configuring-the-app-locally"},"Configuring the App Locally"),Object(o.b)("p",null,"This option has more visibility and control over configuring the application, but requires a more manual setup process than using the create-app command."),Object(o.b)("p",null,"You can fork and clone ",Object(o.b)("a",{parentName:"p",href:"https://github.com/cloud-carbon-footprint/cloud-carbon-footprint"},"https://github.com/cloud-carbon-footprint/cloud-carbon-footprint")," in order to make changes to the core project's packages or project documentation."),Object(o.b)("p",null,"This will let you run the latest code off of the trunk branch, fix bugs or contribute new features, run test suites, etc."),Object(o.b)("p",null,"You can read more about contributing to the project in our ",Object(o.b)("a",{parentName:"p",href:"https://github.com/cloud-carbon-footprint/cloud-carbon-footprint/blob/trunk/CONTRIBUTING.md"},"CONTRIBUTING")," guide."),Object(o.b)("p",null,"In order to run Cloud Carbon Footprint locally, there are a few things you must do to get set up first."),Object(o.b)("h3",{id:"clone-the-repository"},"Clone the repository"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"git clone --branch latest https://github.com/cloud-carbon-footprint/cloud-carbon-footprint.git\ncd cloud-carbon-footprint\n")),Object(o.b)("h3",{id:"guided-install"},"Guided Install"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"yarn install && yarn guided-install\n")),Object(o.b)("p",null,"This will install dependencies for all packages, then guide you through setting up credentials and environment variables to analyze the footprint of your AWS, GCP, or Azure account."),Object(o.b)("p",null,"If you have any problems with the guided install, you can instead choose to do a standard install."),Object(o.b)("h3",{id:"standard-install"},"Standard Install"),Object(o.b)("p",null,"A standard install gives you more visibility and control around your particular setup."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"yarn install\n")),Object(o.b)("p",null,"You can now continue by running with ",Object(o.b)("a",{parentName:"p",href:"run-with-mocked-data"},"mocked data")," or ",Object(o.b)("a",{parentName:"p",href:"aws"},"manually configuring your cloud providers")),Object(o.b)("h3",{id:"starting-the-app"},"Starting the App"),Object(o.b)("p",null,"Now you can start the app using:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"yarn start\n")),Object(o.b)("p",null,"As you get more experienced with the app, in future you can run just the frontend with ",Object(o.b)("inlineCode",{parentName:"p"},"yarn start-client")," in one window, and the backend with ",Object(o.b)("inlineCode",{parentName:"p"},"yarn start-api")," in a different window."),Object(o.b)("h3",{id:"optional-prerequisites"},"Optional Prerequisites"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",{parentName:"p",href:"https://brew.sh/"},"Homebrew")," (to download the AWS CLI)")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"AWS CLI ",Object(o.b)("inlineCode",{parentName:"p"},"brew install awscli")," (if you are authenticating with AWS - see below)")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Talisman (if you want to commit code)"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"  curl --silent https://raw.githubusercontent.com/thoughtworks/talisman/master/global_install_scripts/install.bash > /tmp/install_talisman.bash && /bin/bash /tmp/install_talisman.bash\n")))),Object(o.b)("p",null,"Note:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"During install, Talisman may fail to add the pre-commit hook to this repository because one already exists for Husky. This is fine because it can still execute in the existing husky pre-commit hook, once installed.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"During install, Talisman will also ask you for the directory of your git repositories. If you don't want to install Talisman in all your git repos, then cancel out at this step."))))}u.isMDXComponent=!0}}]);