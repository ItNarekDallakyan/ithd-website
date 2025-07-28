import {LANGUAGES, ROUTES} from "@models/enums";
import {SERVICES_IMAGES_BASE_PATH, WORKS_IMAGES_BASE_PATH} from "@common/variables";

export const FOOTER_ROUTES = [
    {
        id: 9,
        label: "Testimonies",
        path: ROUTES.TESTIMONIES,
        children: []
    },
    {
        id: 5,
        label: "Our Process",
        path: ROUTES.OUR_PROCESS,
        children: []
    },
    {
        id: 6,
        label: "Contact",
        children: [],
        path: ROUTES.CONTACT
    },
    {
        id: 7,
        label: "FAQ",
        path: ROUTES.FAQ,
        children: []
    }
];

export const USERS = [
    {
        username: "admin",
        password: "admin"
    }
];

const WEB_DEVELOPMENT = {
    movie: "d6GkVsf5wmI",
    path: "/web-development",
    media: [
        `${SERVICES_IMAGES_BASE_PATH}web-development/1.jpeg`,
        `${SERVICES_IMAGES_BASE_PATH}web-development/2.jpeg`
    ],
    technologies: [
        {
            title: "React.js",
            content: "Used by some of the world's largest companies, Next.js enables you to create full-stack Web applications by extending the latest React features, and integrating powerful Rust-based JavaScript tooling for the fastest builds.",
            icon: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
        },
        {
            title: "Next.js",
            content: "Used by some of the world's largest companies, Next.js enables you to create full-stack Web applications by extending the latest React features, and integrating powerful Rust-based JavaScript tooling for the fastest builds.",
            icon: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg"
        },
        {
            title: "Webpack",
            content: "Used by some of the world's largest companies, Next.js enables you to create full-stack Web applications by extending the latest React features, and integrating powerful Rust-based JavaScript tooling for the fastest builds.",
            icon: "https://webpack.js.org/icon-square-small.9e8aff7a67a5dd20.svg"
        }
    ],
    whatWeOffer: {
        [LANGUAGES.EN]: "Customized React JS solutions that meet your specific needs Experienced and passionate developers who are up-to-date on the latest trends A transparent and collaborative development process Agile methodology to ensure on-time and within-budget delivery Exceptional customer service and support A commitment to building long-term relationships"
    },
    approach: {
        [LANGUAGES.EN]: "We believe that every project is unique and requires a customized approach. We work closely with our clients to understand their business goals and design a tailored solution that fits their specific needs. Our team is experienced in developing a wide range of web applications, from small-scale projects to large, enterprise-level applications."
    },
    expertise: {
        [LANGUAGES.EN]: "We have extensive experience in developing React JS applications using modern tools and technologies. Our developers are skilled in React JS libraries and frameworks, including Redux and Next.js. We are also proficient in using modern front-end development tools, such as Webpack and ESLint."
    },
    process: {
        [LANGUAGES.EN]: "Our development process is transparent and collaborative, ensuring that our clients are involved in every step of the project. We use Agile methodology to deliver high-quality projects on time and within budget. Our team is dedicated to providing exceptional customer service and support, and we are committed to building long-term relationships with our clients."
    },
    title: {
        [LANGUAGES.EN]: "Website development"
    },
    description: {
        [LANGUAGES.EN]: "<p><strong>1. Elevating Your Digital Presence</strong><br>Elevate your digital presence with our professional website development services. In an increasingly digital world, your website serves as the primary gateway to your brand. It's the platform where first impressions are formed, and we recognize the importance of making that impression a remarkable one.<br>&nbsp;</p><p><strong>2. Seasoned Team and Meticulous Craftsmanship</strong><br>Our seasoned team of experts approaches each project with meticulous attention to detail. We're passionate about the art of web development, and we understand that excellence lies in crafting custom, responsive, and user-centric websites. Our aim is not just to meet your expectations but to consistently deliver results that leave a lasting impact.<br>&nbsp;</p><p><strong>3. From Concept to Deployment</strong><br>From the very inception of your website concept to the final seamless deployment, we take care of every step of the journey. Our comprehensive approach ensures a polished and tailored online presence that aligns perfectly with your unique goals and vision. We believe in creating websites that are not only visually stunning but also highly functional.<br>&nbsp;</p><p><strong>4. Bringing Your Web Projects to Life</strong><br>We view websites as more than just lines of code and design elements. They are digital embodiments of your brand, and we're here to breathe life into your web projects. We don't just build websites; we create digital experiences that resonate with your audience and help you achieve your objectives.<br>&nbsp;</p><p><strong>5. Collaboration and Client-Centric Approach</strong><br>Collaboration and communication are at the heart of our process. We work closely with you, involving you in key decisions, and valuing your feedback at every stage. This client-centric approach ensures that your website truly represents your brand, goals, and aspirations.</p><p>&nbsp;</p><p>Let us bring your web projects to life. Contact us today to embark on this exciting digital journey. Whether you're starting a new online venture or revamping an existing site, our dedicated team is ready to make your vision a stunning reality. Your digital success is our top priority, and we're excited to be a part of your online growth.</p>"
    },
    shortDescription: {
        [LANGUAGES.EN]: `
            <p>Our skilled team specializes in creating websites that excel in all areas. We optimize them for search engines to ensure high visibility for potential customers. Our designs prioritize user-friendly navigation, making it easy for visitors to find what they need.</p>
        `
    },
    faqList: [
        {
            title: {
                [LANGUAGES.EN]: "How much does Web development cost?"
            },
            content: {
                [LANGUAGES.EN]: "The cost of Web development varies depending on the scope of work, complexity, and features required for the app. It's recommended to obtain a quote from an experienced Web development service provider after discussing your requirements. On average, a typical Web development project can cost around $3,000 or more."
            }
        },
        {
            title: {
                [LANGUAGES.EN]: "How Long Does It Take to Build a Web App?"
            },
            content: {
                [LANGUAGES.EN]: "The duration of a Web development project depends on several factors, including the requirements, dependencies, complexity, and scope of work. On average, a typical Web development service can take around 3 weeks or longer. However, when we assess and scope your project, we will provide you with a more accurate estimate of how long your Web development project will take. This will help you plan and manage your resources accordingly and ensure that your project is delivered on time and within budget."
            }
        },
        {
            title: {
                [LANGUAGES.EN]: "What kind of support is provided after the app is launched?"
            },
            content: {
                [LANGUAGES.EN]: "We offer continuous maintenance and support services after launching the app, which may include bug fixes, updates, and feature enhancements. The pricing for ongoing support will depend on the complexity of the work required."
            }
        },
        {
            title: {
                [LANGUAGES.EN]: "Do I get ownership rights?"
            },
            content: {
                [LANGUAGES.EN]: "Absolutely! Upon receipt of payment, you will own all rights to the concepts and variations developed during your project, including the final designs. However, unless otherwise agreed in advance, we reserve the right to display the work we have done for you as part of our portfolio. Additionally, upon completion of the project, we will provide you with the source files for the project."
            }
        },
    ]
};

const ANDROID_DEVELOPMENT = {
    movie: "3NP5Wjc49fk",
    path: "/android-development",
    title: {
        [LANGUAGES.EN]: "<p>Android development</p>"
    },
    media: [
        `${SERVICES_IMAGES_BASE_PATH}android-development/1.jpg`,
        `${SERVICES_IMAGES_BASE_PATH}android-development/2.jpg`
    ],
    technologies: [
        {
            title: "Kotlin",
            content: "Kotlin, a modern and versatile programming language, has become an integral part of Android app development. Its concise syntax and powerful features make it the ideal choice for creating high-quality Android applications. Leveraging Kotlin's capabilities, developers can take full advantage of the Android platform and its vast opportunities for digital companies.",
            icon: "https://upload.wikimedia.org/wikipedia/commons/0/06/Kotlin_Icon.svg"
        },
        {
            title: "Android",
            content: "Android, the world's most popular mobile operating system, offers vast opportunities for digital companies. With its open ecosystem, diverse device support, and thriving app marketplace, Android is the platform of choice for innovation and reaching a global audience. Elevate your digital presence with Android development expertise.",
            icon: "https://upload.wikimedia.org/wikipedia/commons/6/64/Android_logo_2019_%28stacked%29.svg"
        },
        {
            title: "Jetpack Compose",
            content: "Jetpack Compose is a revolutionary UI toolkit for Android app development. It simplifies the creation of dynamic and visually stunning user interfaces with a declarative approach. With its rich library of components, it streamlines design and boosts productivity, enabling digital companies to craft modern, intuitive apps effortlessly.",
            icon: "https://3.bp.blogspot.com/-VVp3WvJvl84/X0Vu6EjYqDI/AAAAAAAAPjU/ZOMKiUlgfg8ok8DY8Hc-ocOvGdB0z86AgCLcBGAsYHQ/s1600/jetpack%2Bcompose%2Bicon_RGB.png"
        }
    ],
    whatWeOffer: {
        [LANGUAGES.EN]: "At our Android development studio, we offer comprehensive end-to-end solutions tailored to meet all your app's requirements. Our team of experts harnesses the power of Jetpack Compose to craft innovative, visually captivating Android applications."
    },
    approach: {
        [LANGUAGES.EN]: "In the realm of Android development, our approach is dedicated to crafting exceptional apps that seamlessly merge cutting-edge technology with user-centric design. Our process commences with a deep dive into your objectives and a thorough understanding of your target audience."
    },
    expertise: {
        [LANGUAGES.EN]: "Our team of highly skilled developers stands firmly at the forefront of Android innovation, specializing in avant-garde frameworks like Jetpack Compose. What sets us apart is not only meeting but consistently exceeding industry standards. Our portfolio is a testament to our proven track record in creating user-centric, feature-rich, and visually captivating apps that span a multitude of industries."
    },
    process: {
        [LANGUAGES.EN]: "Our Android development process is a proven roadmap to success, tailored to your specific needs and goals. We start by understanding your target audience and your desired outcomes, then create a customized plan that aligns with your vision. Throughout the development process, we collaborate closely with you, keeping you involved in every phase, from concept to launch."
    },
    description: {
        [LANGUAGES.EN]: "<p><strong>1. Tailored Solutions</strong></p><p>Jetpack Compose allows for highly customized user interfaces. Our development team will craft solutions that precisely match your unique needs, ensuring that your app stands out in the crowded Android marketplace.<br>&nbsp;</p><p><strong>2. Expertise and Innovation</strong></p><p>Our developers are passionate and well-versed in the latest trends in Android development. They're committed to staying up-to-date with the ever-evolving world of Jetpack Compose to bring innovative and cutting-edge solutions to your project.<br>&nbsp;</p><p><strong>3. Transparent Collaboration</strong></p><p>Collaboration is key to a successful project. We prioritize transparency in our development process, keeping you informed at every step. This collaborative approach ensures that the final product aligns perfectly with your vision.<br>&nbsp;</p><p><strong>4. Agile Methodology</strong></p><p>To meet project timelines and budgets, we employ an Agile methodology. This approach allows us to adapt to changing requirements, deliver incremental updates, and ensure your project remains on time and within budget.<br>&nbsp;</p><p><strong>5. Exceptional Support</strong></p><p>Our commitment to your project doesn't end at delivery. We provide exceptional customer service and support to address any issues or updates that may arise post-launch. Your satisfaction is our top priority.<br>&nbsp;</p><p><strong>6. Long-Term Partnership</strong></p><p>We're not just here for a one-time project; we're dedicated to building long-term relationships. Our team is ready to support your app through its entire lifecycle, ensuring its continuous success.</p><p><br>Whether you're building a new Android app or looking to enhance an existing one, our Android Development with Jetpack Compose services are designed to meet your needs and exceed your expectations.</p>"
    },
    shortDescription: {
        [LANGUAGES.EN]: "At the core of successful Android app development lies a set of principles that ensure your application not only meets your specific requirements but also thrives in a rapidly evolving landscape."
    },
    faqList: [
        {
            title: {
                [LANGUAGES.EN]: "How much does Android development cost?"
            },
            content: {
                [LANGUAGES.EN]: "The cost of Android development varies depending on the scope of work, complexity, and features required for the app. On average, a typical Android development project can cost around $10,000 or more."
            }
        },
        {
            title: {
                [LANGUAGES.EN]: "How long does the Android app process take?"
            },
            content: {
                [LANGUAGES.EN]: "The duration of an Android development project depends on several factors, including the requirements, dependencies, complexity, and scope of work. On average, a typical Android development service can take around 5 weeks or longer. However, when we assess and scope your project, we will provide you with a more accurate estimate of how long your Android development project will take. This will help you plan and manage your resources accordingly and ensure that your project is delivered on time and within budget."
            }
        },
        {
            title: {
                [LANGUAGES.EN]: "What kind of support is provided after the app is launched?"
            },
            content: {
                [LANGUAGES.EN]: "We offer continuous maintenance and support services after launching the app, which may include bug fixes, updates, and feature enhancements. The pricing for ongoing support will depend on the complexity of the work required."
            }
        },
        {
            title: {
                [LANGUAGES.EN]: "Do I get ownership rights?"
            },
            content: {
                [LANGUAGES.EN]: "Absolutely! Upon receipt of payment, you will own all rights to the concepts and variations developed during your project, including the final designs. However, unless otherwise agreed in advance, we reserve the right to display the work we have done for you as part of our portfolio. Additionally, upon completion of the project, we will provide you with the source files for the project."
            }
        },
    ]
};

const IOS_DEVELOPMENT = {
    movie: "D05KWNjGtwk",
    path: "/ios-development",
    title: {
        [LANGUAGES.EN]: "<p>iOS development</p>"
    },
    description: {
        [LANGUAGES.EN]: "<p><strong>1. Customized</strong></p><p>Swift and SwiftUI empower us to create highly tailored user interfaces on iOS. Our development team excels at crafting solutions that precisely match your unique requirements, ensuring that your iOS app stands out in the competitive world of mobile applications.<br>&nbsp;</p><p><strong>2. Expertise and Innovation</strong></p><p>Our developers are passionate about iOS and are well-versed in the latest trends and technologies in iOS development. They're committed to staying up-to-date with the ever-evolving world of Swift and SwiftUI to bring innovative and cutting-edge solutions to your iOS project.<br>&nbsp;</p><p><strong>3. Transparent Collaboration for iOS Apps</strong></p><p>Collaboration is the cornerstone of a successful project. We prioritize transparency in our iOS development process, keeping you informed at every step. This collaborative approach ensures that the final iOS product aligns perfectly with your vision.<br>&nbsp;</p><p><strong>4. Agile Methodology</strong></p><p>To meet project timelines and budgets, we employ an Agile methodology for iOS app development. This approach allows us to adapt to changing requirements, deliver incremental updates, and ensure your iOS project remains on time and within budget.<br>&nbsp;</p><p><strong>5. Exceptional Support</strong></p><p>Our commitment to your iOS project doesn't end at delivery. We provide exceptional customer service and support to address any issues or updates that may arise post-launch. Your satisfaction is our top priority, and we're here to ensure your iOS app's success.<br>&nbsp;</p><p><strong>6. Long-Term iOS Partnership</strong></p><p>We're not just here for a one-time project; we're dedicated to building long-term relationships. Our team is ready to support your iOS app through its entire lifecycle, ensuring its continuous success and evolution.</p><p><br>Whether you're building a new iOS app or looking to enhance an existing one, our iOS Development with Swift and SwiftUI services are designed to meet your needs and exceed your expectations. Let us help you turn your iOS app vision into a reality.</p>"
    },
    shortDescription: {
        [LANGUAGES.EN]: "We specialize in crafting exceptional iOS applications that bring your digital vision to life. Our team of experienced iOS developers is dedicated to delivering cutting-edge, user-centric mobile solutions for the iOS platform. Whether you need a feature-rich iPhone app or a powerful iPad application, we have the expertise and creativity to turn your ideas into a reality."
    },
    media: [
        `${SERVICES_IMAGES_BASE_PATH}ios-development/1.jpg`,
        `${SERVICES_IMAGES_BASE_PATH}ios-development/2.jpg`
    ],
    technologies: [
        {
            title: "iOS",
            content: "iOS, renowned as one of the world's leading mobile operating systems, presents a wealth of possibilities for digital enterprises. Its seamless ecosystem, wide-ranging device compatibility, and thriving app store make iOS the ultimate choice for groundbreaking innovation and reaching a worldwide user base. Enhance your digital footprint with iOS development proficiency.",
            icon: "https://upload.wikimedia.org/wikipedia/commons/c/ca/IOS_logo.svg"
        },
        {
            title: "Swift",
            content: "Swift, Apple's renowned programming language, has revolutionized the world of mobile app development on iOS, providing a compelling counterpart to Android's ecosystem. While Android presents extensive opportunities, it's essential not to overlook the immense potential of iOS, which boasts a devoted user base and a unique set of advantages for digital companies. By harnessing the power of Swift, you can elevate your digital presence on the iOS platform.",
            icon: "https://ithd.org/static/swift-svgrepo-com.svg"
        }
    ],
    whatWeOffer: {
        [LANGUAGES.EN]: "At our iOS development studio, we provide holistic and customized solutions to fulfill your app's every need. Our team of skilled professionals leverages the latest iOS technologies and frameworks, such as SwiftUI and Combine, to create cutting-edge and visually stunning iOS applications. Whether you're looking to build an elegant user interface, optimize performance, or ensure seamless integration, we have the expertise to bring your iOS app vision to life."
    },
    approach: {
        [LANGUAGES.EN]: "In the world of iOS development, our commitment is to create extraordinary apps that seamlessly blend the latest technology with user-centric design. Our journey begins with a deep exploration of your goals and a comprehensive grasp of your intended user base. This allows us to tailor our development process to meet your specific requirements and deliver iOS applications that resonate with your audience."
    },
    expertise: {
        [LANGUAGES.EN]: "At the forefront of iOS innovation, our team of highly skilled developers is dedicated to pushing the boundaries of technology. We specialize in cutting-edge frameworks like SwiftUI, ensuring that we're not just keeping pace with industry standards but consistently surpassing them. Our extensive portfolio showcases our unwavering commitment to creating user-centric, feature-rich, and visually stunning apps that cater to a wide range of industries. We take pride in our proven track record of excellence in iOS app development."
    },
    process: {
        [LANGUAGES.EN]: "At our iOS development studio, we have a well-established process that serves as a reliable path to success, meticulously tailored to your unique requirements and objectives. Our journey begins with a deep understanding of your target audience and the results you aim to achieve. From there, we craft a bespoke strategy that aligns seamlessly with your vision. Throughout the iOS development journey, we maintain close collaboration with you, ensuring your active involvement in every step of the process, from initial concept to the exciting launch phase."
    },
    faqList: [
        {
            title: {
                [LANGUAGES.EN]: "How much does iOS development cost?"
            },
            content: {
                [LANGUAGES.EN]: "The cost of iOS development varies depending on the scope of work, complexity, and features required for the app. On average, a typical iOS development project can cost around $10,000 or more."
            }
        },
        {
            title: {
                [LANGUAGES.EN]: "How long does the iOS app process take?"
            },
            content: {
                [LANGUAGES.EN]: "The duration of an iOS development project depends on several factors, including the requirements, dependencies, complexity, and scope of work. On average, a typical iOS development service can take around 5 weeks or longer. However, when we assess and scope your project, we will provide you with a more accurate estimate of how long your iOS development project will take. This will help you plan and manage your resources accordingly and ensure that your project is delivered on time and within budget."
            }
        },
        {
            title: {
                [LANGUAGES.EN]: "What kind of support is provided after the app is launched?"
            },
            content: {
                [LANGUAGES.EN]: "We offer continuous maintenance and support services after launching the app, which may include bug fixes, updates, and feature enhancements. The pricing for ongoing support will depend on the complexity of the work required."
            }
        },
        {
            title: {
                [LANGUAGES.EN]: "Do I get ownership rights?"
            },
            content: {
                [LANGUAGES.EN]: "Absolutely! Upon receipt of payment, you will own all rights to the concepts and variations developed during your project, including the final designs. However, unless otherwise agreed in advance, we reserve the right to display the work we have done for you as part of our portfolio. Additionally, upon completion of the project, we will provide you with the source files for the project."
            }
        },
    ]
};

const UX_DESIGN = {
    movie: "Uo82k0fHkko",
    path: "/ux-ui-design",
    title: {
        [LANGUAGES.EN]: "UX/UI Design"
    },
    media: [
        `${SERVICES_IMAGES_BASE_PATH}ui-ux/1.jpg`,
        `${SERVICES_IMAGES_BASE_PATH}ui-ux/2.jpg`
    ],
    technologies: [
        {
            title: "Figma",
            content: "Figma, an exceptional cloud-based design and prototyping tool, streamlines collaboration for design teams. Real-time editing and commenting capabilities enable designers to work together effortlessly on web and mobile projects. Figma's user-friendly interface and extensive features position it as the premier choice for crafting interactive and responsive designs.",
            icon: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg"
        },
        {
            title: "Adobe XD",
            content: "Adobe XD stands at the forefront of design and prototyping tools, dedicated to meeting every designer's requirements. With an emphasis on user experience, it seamlessly empowers the creation of web and mobile interfaces. Its intuitive features and real-time collaboration capabilities establish Adobe XD as the indisputable industry leader for designing and prototyping applications, offering a powerful platform for designers to transform their imaginative concepts into reality.",
            icon: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Adobe_XD_CC_icon.svg"
        },
        {
            title: "Sketch",
            content: "Elevate your design capabilities with Sketch, the industry-leading software for creating captivating graphics and user interfaces. Harness the intuitive interface and robust features to transform your creative vision into reality. Seamlessly design, prototype, and collaborate, while enhancing your online presence. Maximize your creative potential with Sketch, the professional's choice for design excellence.",
            icon: "https://upload.wikimedia.org/wikipedia/commons/5/59/Sketch_Logo.svg"
        }
    ],
    whatWeOffer: {
        [LANGUAGES.EN]: "Our UI/UX service is tailored to not only create visually stunning and user-friendly designs but also to align with SEO guidelines. We believe that a seamless user experience and SEO success go hand in hand, and we're here to help you achieve both."
    },
    approach: {
        [LANGUAGES.EN]: "Transform your digital products with our expert UI/UX design services. We focus on user-centric design, creating wireframes, high-fidelity visuals, and prototypes to enhance user experiences. Collaborate with our team to seamlessly integrate designs and stay ahead with our latest design trends. Elevate your brand and engage your audience with our tailored solutions."
    },
    expertise: {
        [LANGUAGES.EN]: "Elevate your digital products with our expertise in UI/UX design. We prioritize user-centered design, creating wireframes, high-fidelity visuals, and prototypes. Collaborate with our team for seamless design integration and stay updated with the latest trends. Enhance your brand and captivate your audience with our tailored solutions."
    },
    process: {
        [LANGUAGES.EN]: "Discover our methodical UI/UX design process. We begin with in-depth user research, followed by wireframing and prototyping. Our design team creates high-fidelity visuals, collaborates with developers, and iterates based on user feedback. Stay ahead with the latest design trends and elevate your digital products."
    },
    description: {
        [LANGUAGES.EN]: "<p><strong>1. Expertise in UI/UX Design</strong><br>Elevate your digital products with our UI/UX design expertise. Our user-centric approach, wireframing, and high-fidelity designs ensure outstanding user experiences.<br>&nbsp;</p><p><strong>2. The UI/UX Design Process</strong><br>Discover our methodical design process, including user research, wireframing, high-fidelity visuals, and iterative improvements based on user feedback.<br>&nbsp;</p><p><strong>3. Tailored UI/UX Solutions</strong><br>Our customized UI/UX solutions enhance your brand's appeal and captivate your audience while ensuring seamless design integration with your team.</p><p>&nbsp;</p><p><strong>4. Staying Updated on Design Trends</strong><br>Stay ahead with our team, which is always up-to-date with the latest UI/UX design trends, ensuring your digital products remain competitive.<br>&nbsp;</p><p><strong>5. Collaborative Design Integration</strong><br>We value collaboration, working closely with your development team to ensure your designs are seamlessly integrated into your digital products.<br>&nbsp;</p><p><strong>6. Streamlined Design Journey</strong><br>Embark on a design journey that transforms your digital products. Our comprehensive UI/UX design services are tailored to your unique needs and objectives.</p>"
    },
    shortDescription: {
        [LANGUAGES.EN]: "Our team of experienced designers will work closely with you to understand your brand and target audience and create a custom design that reflects your unique identity. We'll focus on creating an intuitive and easy-to-use interface that guides visitors through your site and encourages them to take action."
    },
    faqList: [
        {
            title: {
                [LANGUAGES.EN]: "How much does UX/UI Design cost?"
            },
            content: {
                [LANGUAGES.EN]: "The cost of UX/UI Design varies depending on the scope of work, complexity, and features required for the app. On average, a typical UX/UI Design project can cost around $3,000 or more."
            }
        },
        {
            title: {
                [LANGUAGES.EN]: "How long does the UX/UI Design process take?"
            },
            content: {
                [LANGUAGES.EN]: "The duration of a UX/UI Design project depends on several factors, including the requirements, dependencies, complexity, and scope of work. On average, a typical UX/UI Design service can take around 3 weeks or longer. However, when we assess and scope your project, we will provide you with a more accurate estimate of how long your UX/UI Design project will take. This will help you plan and manage your resources accordingly and ensure that your project is delivered on time and within budget."
            }
        },
        {
            title: {
                [LANGUAGES.EN]: "What kind of support is provided after the app is launched?"
            },
            content: {
                [LANGUAGES.EN]: "We offer continuous maintenance and support services after launching the app, which may include bug fixes, updates, and feature enhancements. The pricing for ongoing support will depend on the complexity of the work required."
            }
        },
        {
            title: {
                [LANGUAGES.EN]: "Do I get ownership rights?"
            },
            content: {
                [LANGUAGES.EN]: "Absolutely! Upon receipt of payment, you will own all rights to the concepts and variations developed during your project, including the final designs. However, unless otherwise agreed in advance, we reserve the right to display the work we have done for you as part of our portfolio. Additionally, upon completion of the project, we will provide you with the source files for the project."
            }
        },
    ]
};

export var SERVICES = [
    WEB_DEVELOPMENT,
    UX_DESIGN,
    {
        movie: "9PVzNwsT400",
        path: "/cloud-solutions",
        title: {
            [LANGUAGES.EN]: "Cloud Solutions"
        },
        media: [
            `${SERVICES_IMAGES_BASE_PATH}cloud-solutions/1.jpg`,
            `${SERVICES_IMAGES_BASE_PATH}cloud-solutions/2.jpg`
        ],
        technologies: [
            {
                title: "Google Cloud Platform",
                content: "Google Cloud Platform (GCP) is a leading cloud computing service offering infrastructure, data analytics, machine learning, and more. With global data centers, GCP provides scalable and secure solutions for businesses seeking cloud-based services.",
                icon: "https://ithd.org/static/google-cloud-svgrepo-com.svg"
            },
            {
                title: "Docker",
                content: "Docker is a containerization platform that simplifies software deployment by packaging applications and their dependencies into containers. It enables efficient, portable, and consistent application deployment across various environments, enhancing development and operational efficiency.",
                icon: "https://ithd.org/static/docker-svgrepo-com.svg"
            },
            {
                title: "Serverless & Cloud functions",
                content: "Serverless computing is a cloud computing model that lets developers build and run applications without managing servers. It automatically scales, reducing operational overhead, and charges based on actual usage, making it cost-efficient and agile.",
                icon: "https://ithd.org/static/serverless-svgrepo-com.svg"
            }
        ],
        whatWeOffer: {
            [LANGUAGES.EN]: "Discover our comprehensive cloud solutions, including scalable infrastructure, secure data storage, and expert guidance for seamless cloud integration. We tailor solutions to your specific needs, empowering your business with efficiency and productivity. Explore the limitless possibilities of the cloud with our dedicated team of experts."
        },
        approach: {
            [LANGUAGES.EN]: "At our core, we prioritize a client-centric approach. We begin by thoroughly understanding your unique needs and goals. With this insight, we tailor our services to provide personalized solutions that drive success. Our collaborative process ensures your vision is seamlessly integrated into every aspect of our work, guaranteeing a solution that fits your business like a glove."
        },
        expertise: {
            [LANGUAGES.EN]: "Our expertise is your advantage. With a seasoned team of industry professionals, we offer a wealth of knowledge and experience in [your field]. We've successfully navigated the challenges of [specific challenges or projects], delivering results that exceed expectations. Trust our experts to guide you toward excellence."
        },
        process: {
            [LANGUAGES.EN]: "Our process is a meticulously crafted roadmap to success. It begins with a deep dive into your unique needs and objectives. We then strategize, design, and implement solutions, with regular milestones and client collaboration. Our structured approach ensures your project stays on track and results in a successful outcome."
        },
        description: {
            [LANGUAGES.EN]: "<p><strong>1. Introduction</strong><br>Climb to new heights with our cutting-edge cloud solutions. In a rapidly evolving digital landscape, harnessing the power of the cloud is no longer an option but a necessity. Our cloud services are designed to empower businesses and organizations with the scalability, flexibility, and security needed to thrive in the digital age.<br>&nbsp;</p><p><strong>2. Comprehensive Cloud Services</strong><br>Our cloud solutions encompass a wide spectrum of services. We offer scalable cloud infrastructure that adapts to your specific needs, ensuring you have the computing resources required, whether it's for a small startup or a large enterprise. Our data storage solutions guarantee the accessibility and security of your critical information.<br>&nbsp;</p><p><strong>3. Efficiency and Productivity</strong><br>The cloud is more than just a technology; it's a pathway to greater efficiency and productivity. With our cloud services, your team gains remote access to essential resources, streamlining operations and enhancing collaboration. Say goodbye to cumbersome data silos and hello to real-time information sharing.<br>&nbsp;</p><p><strong>4. Tailored Solutions</strong><br>We understand that no two businesses are the same. That's why we're dedicated to tailoring the perfect cloud solution for your unique requirements. Whether you're seeking cost-effective solutions, data security, or performance optimization, we have you covered. Our team of experts will work closely with you to align our cloud services with your goals.<br>&nbsp;</p><p><strong>5. Dedicated Expertise</strong><br>What sets us apart is our team of cloud experts who are well-versed in the latest industry trends and best practices. We're not just service providers; we're your partners in your cloud journey. Our dedication to staying up-to-date with emerging technologies ensures that you always have access to the most cutting-edge solutions.<br>&nbsp;</p><p><strong>6. Explore the Possibilities</strong><br>The cloud offers limitless possibilities, and we're here to help you explore them. Whether you're looking to migrate your data to the cloud, optimize your existing cloud setup, or embark on an entirely new cloud-based venture, we're ready to guide you. Discover how our cloud solutions can transform your business, drive growth, and position you for success in the digital era.</p>"
        },
        shortDescription: {
            [LANGUAGES.EN]: "Efficient and client-focused, our process ensures a smooth journey from concept to completion. We analyze, design, implement, and collaborate closely with you to achieve exceptional results."
        },
        faqList: [
            {
                title: {
                    [LANGUAGES.EN]: "How much does Cloud solutions cost?"
                },
                content: {
                    [LANGUAGES.EN]: "The cost of Cloud solutions varies depending on the scope of work, complexity, and features required for the app. On average, a typical Cloud solutions can cost around $10,000 or more."
                }
            },
            {
                title: {
                    [LANGUAGES.EN]: "How long does the Cloud solutions process take?"
                },
                content: {
                    [LANGUAGES.EN]: "The duration of a Cloud solutions depends on several factors, including the requirements, dependencies, complexity, and scope of work. On average, a typical Cloud solutions service can take around 5 weeks or longer. However, when we assess and scope your project, we will provide you with a more accurate estimate of how long your Cloud solutions will take. This will help you plan and manage your resources accordingly and ensure that your project is delivered on time and within budget."
                }
            },
            {
                title: {
                    [LANGUAGES.EN]: "What kind of support is provided after the app is launched?"
                },
                content: {
                    [LANGUAGES.EN]: "We offer continuous maintenance and support services after launching the app, which may include bug fixes, updates, and feature enhancements. The pricing for ongoing support will depend on the complexity of the work required."
                }
            },
            {
                title: {
                    [LANGUAGES.EN]: "Do I get ownership rights?"
                },
                content: {
                    [LANGUAGES.EN]: "Absolutely! Upon receipt of payment, you will own all rights to the concepts and variations developed during your project, including the final designs. However, unless otherwise agreed in advance, we reserve the right to display the work we have done for you as part of our portfolio. Additionally, upon completion of the project, we will provide you with the source files for the project."
                }
            },
        ]
    },
    IOS_DEVELOPMENT,
    ANDROID_DEVELOPMENT,
    {
        movie: "Uo82k0fHkko",
        path: "/logo-making",
        title: {
            [LANGUAGES.EN]: "Logo making"
        },
        description: {
            [LANGUAGES.EN]: "<p>Our logo design service provides distinctive visual identities for your brand. Our creative team meticulously crafts unique logos, ensuring they encapsulate your brand's essence and leave a lasting impact. From the initial concept to the final design, we meticulously guide the creative process to guarantee your logo resonates with your brand's story and values.</p><p><br>We understand the significance of a well-designed logo in today's competitive business landscape. A compelling logo is not merely a symbol; it's a representation of your brand's character. Our experienced designers work closely with you to translate your vision into a compelling and memorable visual identity.</p><p><br>Our process revolves around your needs and aspirations. We take the time to listen, research, and brainstorm to create a logo that's a perfect fit for your brand. We value collaboration and consider your feedback integral to our design journey. We believe that your involvement ensures a logo that truly reflects your brand's identity.</p><p><br>Your brand deserves a unique, eye-catching, and timeless logo. We have a proven track record of delivering logos that resonate with audiences and stand the test of time. Let us be your partner in crafting a logo that tells your brand's story, enhances its recognition, and contributes to its long-term success.</p><p><br>The design of your logo is a pivotal element of your brand's overall identity. We take this responsibility seriously and are committed to providing you with a logo that not only meets but exceeds your expectations. Your brand is our priority, and we look forward to creating a logo that embodies your brand's essence and vision.</p><p><br>Contact us today to embark on the journey of logo design that elevates your brand. Let us create a visual identity that sets you apart in the market, leaving a strong and lasting impression on your audience.</p>"
        },
        media: [
            `${SERVICES_IMAGES_BASE_PATH}logo-making/1.jpg`,
            `${SERVICES_IMAGES_BASE_PATH}logo-making/2.jpg`
        ],
        technologies: [
            {
                title: "Figma",
                content: "Figma, an exceptional cloud-based design and prototyping tool, streamlines collaboration for design teams. Real-time editing and commenting capabilities enable designers to work together effortlessly on web and mobile projects. Figma's user-friendly interface and extensive features position it as the premier choice for crafting interactive and responsive designs.",
                icon: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg"
            },
            {
                title: "Adobe XD",
                content: "Adobe XD stands at the forefront of design and prototyping tools, dedicated to meeting every designer's requirements. With an emphasis on user experience, it seamlessly empowers the creation of web and mobile interfaces. Its intuitive features and real-time collaboration capabilities establish Adobe XD as the indisputable industry leader for designing and prototyping applications, offering a powerful platform for designers to transform their imaginative concepts into reality.",
                icon: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Adobe_XD_CC_icon.svg"
            },
            {
                title: "Sketch",
                content: "Elevate your design capabilities with Sketch, the industry-leading software for creating captivating graphics and user interfaces. Harness the intuitive interface and robust features to transform your creative vision into reality. Seamlessly design, prototype, and collaborate, while enhancing your online presence. Maximize your creative potential with Sketch, the professional's choice for design excellence.",
                icon: "https://upload.wikimedia.org/wikipedia/commons/5/59/Sketch_Logo.svg"
            }
        ],
        whatWeOffer: {
            [LANGUAGES.EN]: "Unlock a world of possibilities with our tailored services. We specialize in web design, mobile app development, software solutions, e-commerce, digital marketing, cloud services, IT consulting, and ongoing support. Your success is our priority."
        },
        approach: {
            [LANGUAGES.EN]: "Our approach centers on you. We begin with a deep understanding of your goals and needs. Our collaborative, client-focused process ensures your vision guides every step, resulting in a solution that seamlessly integrates with your objectives."
        },
        expertise: {
            [LANGUAGES.EN]: "Our expertise is your assurance. With a seasoned team of industry professionals, we offer a wealth of knowledge and experience in your field. We've successfully navigated complex projects, delivering results that exceed expectations. Trust our experts to guide you toward excellence."
        },
        process: {
            [LANGUAGES.EN]: "Our process is a carefully structured roadmap to success. It begins with a deep dive into your unique needs and objectives. We then strategize, design, and implement solutions, with regular milestones and client collaboration. Our systematic approach ensures your project stays on track and results in a successful outcome."
        },
        shortDescription: {
            [LANGUAGES.EN]: "Our logo design service offers tailored visual identities for your brand. Our creative team crafts unique logos that capture your brand's essence and leave a lasting impression. From concept to final design, we ensure your logo communicates your brand's story and values, enhancing your overall identity."
        },
        faqList: [
            {
                title: {
                    [LANGUAGES.EN]: "How much does Logo cost?"
                },
                content: {
                    [LANGUAGES.EN]: "The cost of Logo making varies depending on the scope of work, complexity, and features required for the app. On average, a typical Logo making project can cost around $1,000 or more."
                }
            },
            {
                title: {
                    [LANGUAGES.EN]: "How long does the Logo making process take?"
                },
                content: {
                    [LANGUAGES.EN]: "The duration of a Logo making depends on several factors, including the requirements, dependencies, complexity, and scope of work. On average, a typical Logo making service can take around a week or longer. However, when we assess and scope your project, we will provide you with a more accurate estimate of how long your Logo making will take. This will help you plan and manage your resources accordingly and ensure that your project is delivered on time and within budget."
                }
            },
            {
                title: {
                    [LANGUAGES.EN]: "What kind of support is provided after the app is launched?"
                },
                content: {
                    [LANGUAGES.EN]: "We offer continuous maintenance and support services after launching the app, which may include bug fixes, updates, and feature enhancements. The pricing for ongoing support will depend on the complexity of the work required."
                }
            },
            {
                title: {
                    [LANGUAGES.EN]: "Do I get ownership rights?"
                },
                content: {
                    [LANGUAGES.EN]: "Absolutely! Upon receipt of payment, you will own all rights to the concepts and variations developed during your project, including the final designs. However, unless otherwise agreed in advance, we reserve the right to display the work we have done for you as part of our portfolio. Additionally, upon completion of the project, we will provide you with the source files for the project."
                }
            },
        ]
    },
    {
        movie: "9PVzNwsT400",
        path: "/business-automation",
        title: {
            [LANGUAGES.EN]: "CRM & Business Automation"
        },
        description: {
            [LANGUAGES.EN]: "<p><strong>1. Introduction</strong><br>At ITHD, we offer a wide range of services to meet your unique needs. Our goal is to empower your business with innovative solutions that drive growth and success. Whether you're looking to enhance your online presence, streamline your operations, or leverage the latest technologies, we have you covered.<br>&nbsp;</p><p><strong>2. Web Design and Development</strong><br>Our web design and development services focus on creating visually stunning and responsive websites. We believe that your online presence is often the first interaction with your audience, and we're dedicated to making that experience remarkable. Our team of experts crafts custom websites that engage your visitors and drive tangible results.<br>&nbsp;</p><p><strong>3. Mobile App Development</strong><br>In the age of mobile technology, having a strong mobile presence is crucial. Our mobile app development expertise extends to iOS and Android platforms. We take your app ideas and turn them into functional and feature-rich mobile applications, ensuring that your brand is accessible to your audience on their preferred devices.<br>&nbsp;</p><p><strong>4. Custom Software Solutions</strong><br>Every business is unique, and your software solutions should be too. We specialize in developing custom software that enhances your operations, productivity, and efficiency. Our tailored solutions are designed to address your specific requirements, ensuring that technology works in harmony with your business objectives.<br>&nbsp;</p><p><strong>5. Digital Marketing and SEO</strong><br>Success in the digital world requires more than a great website or app. Our digital marketing and SEO services are designed to maximize your online reach. From search engine optimization to content marketing and social media management, we connect you with your target audience and drive engagement.<br>&nbsp;</p><p><strong>6. Collaboration and Results</strong><br>What sets us apart is our commitment to collaboration. We believe that the best results come from working closely with our clients. Your feedback is invaluable, and we consider it an integral part of our creative process. We look forward to partnering with you, understanding your vision, and helping you achieve your business goals.</p>"
        },
        media: [
            `${SERVICES_IMAGES_BASE_PATH}crm/1.jpg`,
            `${SERVICES_IMAGES_BASE_PATH}crm/2.jpg`
        ],
        technologies: [
            {
                title: "React.js",
                content: "Used by some of the world's largest companies, Next.js enables you to create full-stack Web applications by extending the latest React features, and integrating powerful Rust-based JavaScript tooling for the fastest builds.",
                icon: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
            },
            {
                title: "Next.js",
                content: "Used by some of the world's largest companies, Next.js enables you to create full-stack Web applications by extending the latest React features, and integrating powerful Rust-based JavaScript tooling for the fastest builds.",
                icon: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg"
            },
            {
                title: "Webpack",
                content: "Used by some of the world's largest companies, Next.js enables you to create full-stack Web applications by extending the latest React features, and integrating powerful Rust-based JavaScript tooling for the fastest builds.",
                icon: "https://webpack.js.org/icon-square-small.9e8aff7a67a5dd20.svg"
            },
            {
                title: "Google Cloud Platform",
                content: "Google Cloud Platform (GCP) is a leading cloud computing service offering infrastructure, data analytics, machine learning, and more. With global data centers, GCP provides scalable and secure solutions for businesses seeking cloud-based services.",
                icon: "https://ithd.org/static/google-cloud-svgrepo-com.svg"
            },
            {
                title: "Docker",
                content: "Docker is a containerization platform that simplifies software deployment by packaging applications and their dependencies into containers. It enables efficient, portable, and consistent application deployment across various environments, enhancing development and operational efficiency.",
                icon: "https://ithd.org/static/docker-svgrepo-com.svg"
            },
            {
                title: "Serverless & Cloud functions",
                content: "Serverless computing is a cloud computing model that lets developers build and run applications without managing servers. It automatically scales, reducing operational overhead, and charges based on actual usage, making it cost-efficient and agile.",
                icon: "https://ithd.org/static/serverless-svgrepo-com.svg"
            },
            {
                title: "Kotlin",
                content: "Kotlin, a modern and versatile programming language, has become an integral part of Android app development. Its concise syntax and powerful features make it the ideal choice for creating high-quality Android applications. Leveraging Kotlin's capabilities, developers can take full advantage of the Android platform and its vast opportunities for digital companies.",
                icon: "https://upload.wikimedia.org/wikipedia/commons/0/06/Kotlin_Icon.svg"
            },
            {
                title: "Android",
                content: "Android, the world's most popular mobile operating system, offers vast opportunities for digital companies. With its open ecosystem, diverse device support, and thriving app marketplace, Android is the platform of choice for innovation and reaching a global audience. Elevate your digital presence with Android development expertise.",
                icon: "https://upload.wikimedia.org/wikipedia/commons/6/64/Android_logo_2019_%28stacked%29.svg"
            },
            {
                title: "Jetpack Compose",
                content: "Jetpack Compose is a revolutionary UI toolkit for Android app development. It simplifies the creation of dynamic and visually stunning user interfaces with a declarative approach. With its rich library of components, it streamlines design and boosts productivity, enabling digital companies to craft modern, intuitive apps effortlessly.",
                icon: "https://3.bp.blogspot.com/-VVp3WvJvl84/X0Vu6EjYqDI/AAAAAAAAPjU/ZOMKiUlgfg8ok8DY8Hc-ocOvGdB0z86AgCLcBGAsYHQ/s1600/jetpack%2Bcompose%2Bicon_RGB.png"
            },
            {
                title: "iOS",
                content: "iOS, renowned as one of the world's leading mobile operating systems, presents a wealth of possibilities for digital enterprises. Its seamless ecosystem, wide-ranging device compatibility, and thriving app store make iOS the ultimate choice for groundbreaking innovation and reaching a worldwide user base. Enhance your digital footprint with iOS development proficiency.",
                icon: "https://upload.wikimedia.org/wikipedia/commons/c/ca/IOS_logo.svg"
            },
            {
                title: "Swift",
                content: "Swift, Apple's renowned programming language, has revolutionized the world of mobile app development on iOS, providing a compelling counterpart to Android's ecosystem. While Android presents extensive opportunities, it's essential not to overlook the immense potential of iOS, which boasts a devoted user base and a unique set of advantages for digital companies. By harnessing the power of Swift, you can elevate your digital presence on the iOS platform.",
                icon: "https://ithd.org/static/swift-svgrepo-com.svg"
            }
        ],
        whatWeOffer: {
            [LANGUAGES.EN]: "Explore our range of services designed to meet your specific needs. From web design and development to mobile apps, software solutions, and digital marketing, we have you covered. We provide custom, results-driven services to help your business thrive."
        },
        approach: {
            [LANGUAGES.EN]: "Our approach is client-centric. We listen, analyze, and collaborate to understand your unique needs. With a focus on your objectives, we tailor solutions, ensuring seamless integration and a path to success."
        },
        expertise: {
            [LANGUAGES.EN]: "We bring a wealth of experience and knowledge to the table. With a seasoned team of industry professionals, we've successfully navigated diverse projects, consistently exceeding expectations. Trust our experts to guide you toward excellence in your endeavors."
        },
        process: {
            [LANGUAGES.EN]: "Our systematic approach is designed to drive success. We begin with a thorough analysis of your unique needs and objectives, followed by strategic planning and precise execution. Collaboration and regular milestones ensure your project remains on track, leading to a successful outcome."
        },
        shortDescription: {
            [LANGUAGES.EN]: "CRM (Customer Relationship Management) is a strategic approach that empowers businesses to manage and nurture customer relationships. It involves tools and practices to streamline sales, support, and marketing efforts, ultimately enhancing customer satisfaction and loyalty."
        },
        faqList: [
            {
                title: {
                    [LANGUAGES.EN]: "How much does CRM development cost?"
                },
                content: {
                    [LANGUAGES.EN]: "The cost of CRM development varies depending on the scope of work, complexity, and features required for the app. On average, a typical CRM development project can cost around $60,000 or more."
                }
            },
            {
                title: {
                    [LANGUAGES.EN]: "How long does the CRM platform process take?"
                },
                content: {
                    [LANGUAGES.EN]: "The duration of a CRM development project depends on several factors, including the requirements, dependencies, complexity, and scope of work. On average, a typical CRM development service can take around 25 weeks or longer. However, when we assess and scope your project, we will provide you with a more accurate estimate of how long your CRM development project will take. This will help you plan and manage your resources accordingly and ensure that your project is delivered on time and within budget."
                }
            },
            {
                title: {
                    [LANGUAGES.EN]: "What kind of support is provided after the app is launched?"
                },
                content: {
                    [LANGUAGES.EN]: "We offer continuous maintenance and support services after launching the app, which may include bug fixes, updates, and feature enhancements. The pricing for ongoing support will depend on the complexity of the work required."
                }
            },
            {
                title: {
                    [LANGUAGES.EN]: "Do I get ownership rights?"
                },
                content: {
                    [LANGUAGES.EN]: "Absolutely! Upon receipt of payment, you will own all rights to the concepts and variations developed during your project, including the final designs. However, unless otherwise agreed in advance, we reserve the right to display the work we have done for you as part of our portfolio. Additionally, upon completion of the project, we will provide you with the source files for the project."
                }
            },
        ]
    }
];

export const WORKS = [
    {
        services: [
            "ios-development",
            "android-development",
            "ux-ui-design",
            "cloud-solutions",
            "business-automation"
        ],
        movie: null,
        images: [
            `${WORKS_IMAGES_BASE_PATH}pms-for-mobile/1.jpg`,
            `${WORKS_IMAGES_BASE_PATH}pms-for-mobile/2.jpg`,
            `${WORKS_IMAGES_BASE_PATH}pms-for-mobile/3.jpg`,
            `${WORKS_IMAGES_BASE_PATH}pms-for-mobile/4.jpg`,
            `${WORKS_IMAGES_BASE_PATH}pms-for-mobile/5.jpg`,
            `${WORKS_IMAGES_BASE_PATH}pms-for-mobile/6.jpg`
        ],
        path: "/pms-for-mobile",
        title: {
            [LANGUAGES.EN]: "Product management system"
        },
        description: {
            [LANGUAGES.EN]: `
                A product management system (PMS) is a software application that helps product managers and their teams manage the product development process. A PMS can help with tasks such as:<br />
                <ul class="list-circle ml-1 mv-1">
                    <li>Idea management: Collecting and organizing product ideas from a variety of sources, such as customers, employees, and market research.</li>
                    <li>Requirements management: Documenting and tracking product requirements.</li>
                    <li>Roadmapping: Planning and communicating the product roadmap.</li>
                    <li>Prioritization: Determining the order in which features and tasks should be completed.</li>
                    <li>Task management: Tracking the progress of tasks and ensuring that they are completed on time and within budget.</li>
                    <li>Communication: Communicating with stakeholders about the product development process.</li>
                    <li>Collaboration: Facilitating collaboration between product managers, engineers, designers, and other stakeholders.</li>
                    <li>Reporting: Generating reports on the product development process.</li>
                </ul>
                A PMS can help product managers to improve the efficiency and effectiveness of the product development process. By automating tasks and providing a central repository for information, a PMS can help product managers to focus on the most important aspects of their job, such as understanding customer needs and creating innovative products.
                Here are some of the benefits of using a product management system:
                <ul class="list-circle ml-1 mv-1">
                    <li>Increased efficiency: A PMS can help to automate tasks and streamline the product development process. This can free up product managers and their teams to focus on more important tasks, such as understanding customer needs and creating innovative products.</li>
                    <li>Reduced costs: A PMS can help to reduce costs by eliminating the need for manual processes and by providing a central repository for information. This can save time and money, and it can also help to improve accuracy and compliance.</li>
                    <li>Improved communication: A PMS can help to improve communication between product managers, engineers, designers, and other stakeholders. This can help to ensure that everyone is on the same page and that the product development process is running smoothly.</li>
                    <li>Increased visibility: A PMS can provide increased visibility into the product development process. This can help to stakeholders to track the progress of the product and to make informed decisions about the future of the product.</li>
                    <li>Improved decision-making: A PMS can help to improve decision-making by providing product managers with access to data and insights. This can help them to make more informed decisions about the product development process and the future of the product.</li>
                    <li>If you are looking for a way to improve the efficiency, effectiveness, and visibility of your product development process, then a product management system is a great option. There are many different PMSs available, so you can find one that fits your specific needs and budget.</li>
                </ul>
            `
        },
        shortDescription: {
            [LANGUAGES.EN]: "If you are looking for a way to improve the efficiency, effectiveness, and visibility of your product development process, then a product management system is a great option. There are many different PMSs available, so you can find one that fits your specific needs and budget."
        },
        imagesGrid: true
    },
    {
        services: [
            "website",
            "web-development",
            "customer-relationship-management",
            "ux-ui-design",
            "chat-application",
            "cloud-computing",
            "cloud-development",
            "cloud-solutions",
            "business-automation"
        ],
        movie: null,
        images: [
            `${WORKS_IMAGES_BASE_PATH}furniture-repairs-website/1.jpg`,
            `${WORKS_IMAGES_BASE_PATH}furniture-repairs-website/4.jpg`,
            `${WORKS_IMAGES_BASE_PATH}furniture-repairs-website/2.jpg`,
            `${WORKS_IMAGES_BASE_PATH}furniture-repairs-website/3.jpg`,
            `${WORKS_IMAGES_BASE_PATH}furniture-repairs-website/5.jpg`,
            `${WORKS_IMAGES_BASE_PATH}furniture-repairs-admin-portal/1.jpg`,
            `${WORKS_IMAGES_BASE_PATH}furniture-repairs-admin-portal/2.jpg`,
            `${WORKS_IMAGES_BASE_PATH}furniture-repairs-admin-portal/3.jpg`,
            `${WORKS_IMAGES_BASE_PATH}furniture-repairs-admin-portal/4.jpg`
        ],
        path: "/furniture-repairs-website",
        title: {
            [LANGUAGES.EN]: "Designed and developed a Furniture And Repair platform"
        },
        description: {
            [LANGUAGES.EN]: `
                What do you do when your business outgrows its original size and requires a major transformation? This happened to Furniture And Repair, a web platform for furniture enthusiasts with a high-quality furniture automation program. At least, that's what it was before they approached us in 2017 with an ambitious vision to transform it into a full-scale furniture digital platform.
                Here are some of the key factors that contributed to the success of the new platform:
                <ul class="list-circle ml-1 mv-1">
                    <li>A clear and concise vision for the future</li>
                    <li>A strong focus on user experience</li>
                    <li>A commitment to continuous improvement</li>
                </ul>
                If you are a furniture company that is looking to transform your business, then we encourage you to contact us. We would be happy to discuss your needs and help you develop a plan to achieve your goals.
            `
        },
        shortDescription: {
            [LANGUAGES.EN]: "The transformation was a success, and Furniture And Repair is now one of the leading furniture manufacturers in the country."
        },
        imagesGrid: true
    },
    {
        services: [
            "web-development",
            "website",
            "customer-relationship-management",
            "ux-ui-design",
            "chat-application",
            "cloud-computing",
            "cloud-development",
            "cloud-solutions",
            "business-automation"
        ],
        movie: null,
        images: [
            `${WORKS_IMAGES_BASE_PATH}business-automation/1.jpg`,
            `${WORKS_IMAGES_BASE_PATH}business-automation/2.jpg`,
            `${WORKS_IMAGES_BASE_PATH}business-automation/3.jpg`,
            `${WORKS_IMAGES_BASE_PATH}business-automation/4.jpg`,
            `${WORKS_IMAGES_BASE_PATH}business-automation/5.jpg`,
            `${WORKS_IMAGES_BASE_PATH}business-automation/6.jpg`,
            `${WORKS_IMAGES_BASE_PATH}business-automation/7.jpg`,
            `${WORKS_IMAGES_BASE_PATH}business-automation/8.jpg`,
        ],
        path: "/business-automation-work",
        title: {
            [LANGUAGES.EN]: "Our Completed Work for Business Automation"
        },
        description: {
            [LANGUAGES.EN]: `We are proud to announce that we have completed the development of a new business automation app for our client. The app is designed to help businesses automate their processes and save time and money. <br />
            The app features a number of innovative features, including:
            <ul class="list-circle ml-1 mv-1">
                <li>The ability to automate a variety of tasks, including data entry, scheduling, and email marketing</li>
                <li>The ability to integrate with a variety of third-party apps and services</li>
                <li>The ability to track and report on progress</li>
            </ul>
            Here are some of the benefits of our new business automation app:
            <ul class="list-circle ml-1 mv-1">
                <li>Save time: Businesses can save time by automating repetitive tasks.</li>
                <li>Save money: Businesses can save money by automating tasks that would otherwise require human intervention.</li>
                <li>Improve efficiency: Businesses can improve efficiency by automating tasks that are currently done manually.</li>
                <li>Increase productivity: Businesses can increase productivity by freeing up employees to focus on more important tasks.</li>
            </ul>
            If you are a business that is looking for a new business automation app, please contact us today. We would be happy to discuss your needs and help you develop a plan to achieve your goals.
            `
        },
        shortDescription: {
            [LANGUAGES.EN]: "We are confident that our new business automation app will be a valuable asset to our client. The app is easy to use, powerful, and packed with features."
        },
        imagesGrid: true
    },
    {
        services: [
            "ios-development",
            "android-development",
            "ux-ui-design",
            "cloud-solutions"
        ],
        movie: null,
        images: [
            `${WORKS_IMAGES_BASE_PATH}banking-mobile-app/2.jpg`,
            `${WORKS_IMAGES_BASE_PATH}banking-mobile-app/4.jpg`,
            `${WORKS_IMAGES_BASE_PATH}banking-mobile-app/1.jpg`,
            `${WORKS_IMAGES_BASE_PATH}banking-mobile-app/3.jpg`,
            `${WORKS_IMAGES_BASE_PATH}banking-mobile-app/5.jpg`
        ],
        path: "/banking-mobile-app",
        title: {
            [LANGUAGES.EN]: "Banking Mobile App"
        },
        description: {
            [LANGUAGES.EN]: `
                The app features a number of innovative features, including:
                <ul class="list-circle ml-1 mv-1">
                    <li>A secure and easy-to-use interface</li>
                    <li>The ability to check balances and transactions</li>
                    <li>The ability to transfer money between accounts</li>
                    <li>The ability to pay bills</li>
                    <li>The ability to deposit checks</li>
                    <li>The app is available for both iOS and Android devices</li>
                </ul>
                We are confident that our Work will be a valuable asset to users. The app is easy to use, secure, and packed with features. We are excited to see how our client uses the app to improve their customer service and grow their business.
                Here are some of the benefits of the app:
                <ul class="list-circle ml-1 mv-1">
                    <li>Convenience: Customers can manage their finances from anywhere, at any time.</li>
                    <li>Security: Customers' information is protected with the latest security features.</li>
                    <li>Flexibility: Customers can customize the app to fit their needs.</li>
                    <li>Peace of mind: Customers can rest assured knowing that their finances are in good hands.</li>
                </ul> 
                If you are a bank or financial institution that is looking for a new mobile app, please contact us today. We would be happy to discuss your needs and help you develop a plan to achieve your goals.
            `
        },
        shortDescription: {
            [LANGUAGES.EN]: "We are proud to announce that we have completed the development of a new banking mobile app for our client. The app is designed to make it easier for customers to manage their finances on the go."
        },
        imagesGrid: false
    },
    {
        services: [
            "ux-ui-design"
        ],
        movie: null,
        images: [
            `${WORKS_IMAGES_BASE_PATH}design/8.jpg`,
            `${WORKS_IMAGES_BASE_PATH}design/1.jpg`,
            `${WORKS_IMAGES_BASE_PATH}design/2.jpg`,
            `${WORKS_IMAGES_BASE_PATH}design/3.jpg`,
            `${WORKS_IMAGES_BASE_PATH}design/4.jpg`,
            `${WORKS_IMAGES_BASE_PATH}design/5.jpg`,
            `${WORKS_IMAGES_BASE_PATH}design/6.jpg`,
            `${WORKS_IMAGES_BASE_PATH}design/7.jpg`
        ],
        imagesGrid: false,
        path: "/design",
        title: {
            [LANGUAGES.EN]: "Our Completed UI/UX Job for Activity Tracking"
        },
        description: {
            [LANGUAGES.EN]: `
                The app features a number of innovative features, including:
                <ul class="list-circle ml-1 mv-1">
                    <li>A sleek and modern user interface</li>
                    <li>The ability to track a variety of activities, including running, walking, cycling, and swimming</li>
                    <li>The ability to set goals and track progress</li>
                    <li>The ability to compete with friends and family</li>
                    <li>The app is available for both iOS and Android devices.</li>
                </ul>
                We are confident that our new activity-tracking mobile app will be a valuable asset to our client. The app is easy to use, stylish, and packed with features. We are excited to see how our client uses the app to help their users reach their fitness goals.
                Here are some of the benefits of our new activity-tracking mobile app:
                <ul class="list-circle ml-1 mv-1">
                    <li>Convenience: Users can track their activities from anywhere, at any time.</li>
                    <li>Motivation: Users can set goals and track their progress, which can help them stay motivated.</li>
                    <li>Competition: Users can compete with friends and family, which can help them stay motivated.</li>
                </ul>
                If you are a fitness company or organization that is looking for a new activity-tracking mobile app, please contact us today. We would be happy to discuss your needs and help you develop a plan to achieve your goals.
            `
        },
        shortDescription: {
            [LANGUAGES.EN]: "We are proud to announce that we have completed the development of a new activity tracking mobile app for our client. The app is designed to help users track their fitness goals and stay motivated."
        }
    },
    {
        services: [
            "ios-development",
            "android-development",
            "ux-ui-design",
            "cloud-solutions"
        ],
        movie: null,
        images: [
            `${WORKS_IMAGES_BASE_PATH}cryptocurrency/1.jpg`,
            `${WORKS_IMAGES_BASE_PATH}cryptocurrency/2.jpg`,
            `${WORKS_IMAGES_BASE_PATH}cryptocurrency/3.jpg`,
            `${WORKS_IMAGES_BASE_PATH}cryptocurrency/4.jpg`,
            `${WORKS_IMAGES_BASE_PATH}cryptocurrency/5.jpg`,
            `${WORKS_IMAGES_BASE_PATH}cryptocurrency/6.jpg`
        ],
        imagesGrid: false,
        path: "/crypto-app",
        title: {
            [LANGUAGES.EN]: "Crypto app"
        },
        description: {
            [LANGUAGES.EN]: `
                A cryptocurrency application (app) is a software application that allows users to buy, sell, store, and use cryptocurrencies. Cryptocurrency apps offer a variety of features, including:<br xmlns="http://www.w3.org/1999/html"/>
                <ul class="list-circle ml-1 mv-1">
                    <li>Account creation and management</li>
                    <li>Cryptocurrency buying and selling</li>
                    <li>Cryptocurrency storage</li>
                    <li>Cryptocurrency sending and receiving</li>
                    <li>Cryptocurrency-based payments</li>
                    <li>Cryptocurrency-based investments</li>
                    <li>Cryptocurrency-based news and information</li>
                </ul>
                Cryptocurrency apps offer a number of benefits to users, including:<br />
                <ul class="list-circle ml-1 mv-1">
                    <li>Convenience: Cryptocurrency apps allow users to buy, sell, store, and use cryptocurrencies from anywhere, at any time.</li>
                    <li>Security: Cryptocurrency apps are typically very secure, using features such as encryption and two-factor authentication to protect user data.</li>
                    <li>Efficiency: Cryptocurrency apps can save users time and hassle by eliminating the need to visit an exchange or use a desktop wallet.</li>
                    <li>Personalization: Cryptocurrency apps can be personalized to meet the individual needs of each user.</li>
                </ul>        
                If you are looking for a convenient, secure, and efficient way to use cryptocurrencies, then a cryptocurrency app is a great option. There are many different cryptocurrency apps available, so you can find one that fits your specific needs and preferences.
                Here are some of the features that users look for in a cryptocurrency app: <br />
                <ul class="list-circle ml-1 mv-1">
                    <li>A user-friendly interface</li>
                    <li>A wide range of features</li>
                    <li>Secure access</li>
                    <li>Up-to-date information</li>
                    <li>The ability to customize the app</li>
                    <li>The ability to access the app offline</li>
                </ul>
                If you are a cryptocurrency exchange or wallet provider looking to develop an app, it is important to consider the needs of your users and to design an app that meets those needs. By doing so, you can create an app that will be used and appreciated by your users.
            `
        },
        shortDescription: {
            [LANGUAGES.EN]: "If you are looking for a convenient, secure, and efficient way to use cryptocurrencies, then a cryptocurrency app is a great option. There are many different cryptocurrency apps available, so you can find one that fits your specific needs and preferences."
        }
    },
    {
        services: [
            "ios-development",
            "android-development",
            "ux-ui-design",
            "cloud-solutions"
        ],
        movie: "Ga8hidtwCFA",
        images: [
            `${WORKS_IMAGES_BASE_PATH}crypto-app/1.jpg`,
            `${WORKS_IMAGES_BASE_PATH}crypto-app/2.jpg`
        ],
        path: "/crypto-wallet",
        title: {
            [LANGUAGES.EN]: "Mobile Crypto wallet"
        },
        description: {
            [LANGUAGES.EN]: "%3Cp%3E%3Cstrong%3EProject%3A%20Mobile%20Crypto%20Apps%3C%2Fstrong%3E%3C%2Fp%3E%3Cp%3E%3Cbr%3E%3C%2Fp%3E%3Cp%3E%3Cem%3EIntroduction%3A%3C%2Fem%3E%3C%2Fp%3E%3Cp%3ERevolutionizing%20the%20digital%20landscape%2C%20our%20Mobile%20Crypto%20Apps%20represent%20the%20pinnacle%20of%20innovation%2C%20merging%20seamless%20functionality%20with%20cutting-edge%20technology.%20Designed%20to%20empower%20users%20in%20the%20realm%20of%20cryptocurrencies%2C%20these%20apps%20redefine%20convenience%2C%20security%2C%20and%20accessibility.%3C%2Fp%3E%3Cp%3E%3Cbr%3E%3C%2Fp%3E%3Cp%3E%3Cstrong%3E%3Cem%3EKey%20Features%3A%3C%2Fem%3E%3C%2Fstrong%3E%3C%2Fp%3E%3Cp%3E%3Cbr%3E%3C%2Fp%3E%3Col%3E%3Cli%3ESecure%20Wallet%20Integration%3A%20Robust%20encryption%20ensures%20utmost%20security%20for%20storing%20and%20managing%20various%20cryptocurrencies.%3C%2Fli%3E%3Cli%3EReal-Time%20Market%20Tracking%3A%20Live%20updates%20and%20intuitive%20charts%20enable%20users%20to%20monitor%20crypto%20trends%20effortlessly.%3C%2Fli%3E%3Cli%3EInstant%20Trading%3A%20Swift%20and%20secure%20transactions%20allow%20users%20to%20buy%2C%20sell%2C%20and%20exchange%20cryptocurrencies%20with%20ease.%3C%2Fli%3E%3Cli%3EPortfolio%20Management%3A%20Comprehensive%20tools%20for%20tracking%20and%20managing%20diverse%20crypto%20portfolios%20efficiently.%3C%2Fli%3E%3Cli%3EUser-Friendly%20Interface%3A%20Intuitive%20design%20and%20user-centric%20interface%20for%20a%20seamless%20experience%20across%20devices.%3C%2Fli%3E%3C%2Fol%3E%3Cp%3E%3Cbr%3E%3C%2Fp%3E%3Cp%3E%3Cstrong%3E%3Cem%3ETechnological%20Expertise%3A%3C%2Fem%3E%3C%2Fstrong%3E%3C%2Fp%3E%3Cp%3EUtilizing%20the%20latest%20advancements%20in%20blockchain%20technology%2C%20secure%20encryption%20protocols%2C%20and%20responsive%20design%20frameworks%2C%20our%20team%20crafted%20these%20apps%20to%20deliver%20a%20flawless%20and%20reliable%20user%20experience.%3C%2Fp%3E%3Cp%3E%3Cbr%3E%3C%2Fp%3E%3Cp%3E%3Cstrong%3E%3Cem%3EChallenges%20Overcome%3A%3C%2Fem%3E%3C%2Fstrong%3E%3C%2Fp%3E%3Cul%3E%3Cli%3ESecurity%20Protocols%3A%20Implementing%20top-tier%20security%20measures%20to%20safeguard%20user%20data%20and%20transactions.%3C%2Fli%3E%3Cli%3EReal-Time%20Updates%3A%20Ensuring%20accurate%20and%20real-time%20market%20data%20integration%20for%20informed%20decision-making.%3C%2Fli%3E%3Cli%3EScalability%3A%20Designing%20for%20scalability%20to%20accommodate%20growing%20user%20bases%20without%20compromising%20performance.%3C%2Fli%3E%3C%2Ful%3E%3Cp%3E%3Cbr%3E%3C%2Fp%3E%3Cp%3E%3Cstrong%3E%3Cem%3EClient%20Impact%3A%3C%2Fem%3E%3C%2Fstrong%3E%3C%2Fp%3E%3Cp%3EOur%20Mobile%20Crypto%20Apps%20have%20empowered%20users%20worldwide%2C%20providing%20them%20with%20a%20secure%2C%20user-friendly%20platform%20to%20navigate%20the%20intricate%20world%20of%20cryptocurrencies.%20The%20apps%20have%20garnered%20praise%20for%20their%20intuitive%20interface%2C%20robust%20security%20measures%2C%20and%20seamless%20functionality.%3C%2Fp%3E%3Cp%3E%3Cbr%3E%3C%2Fp%3E%3Cp%3E%3Cstrong%3E%3Cem%3EConclusion%3A%3C%2Fem%3E%3C%2Fstrong%3E%3C%2Fp%3E%3Cp%3EThese%20Mobile%20Crypto%20Apps%20epitomize%20our%20commitment%20to%20innovation%2C%20functionality%2C%20and%20user-centric%20design.%20They%20stand%20as%20a%20testament%20to%20our%20expertise%20in%20crafting%20cutting-edge%20solutions%20that%20redefine%20the%20landscape%20of%20digital%20finance.%3C%2Fp%3E"
        },
        shortDescription: {
            [LANGUAGES.EN]: "Crypto wallet app is a secure and user-friendly platform for managing and transferring cryptocurrencies. With features like multi-currency support, portfolio management, and built-in exchange, it simplifies crypto asset management for users worldwide."
        },
        imagesGrid: true
    },
    {
        services: [
            "ios-development",
            "android-development",
            "ux-ui-design",
            "cloud-solutions",
            "website",
            "web-development",
            "customer-relationship-management",
            "chat-application",
            "cloud-computing",
            "cloud-development",
            "business-automation"
        ],
        movie: "D9OVCasg2w0",
        images: [
            `${WORKS_IMAGES_BASE_PATH}business-automation/1.jpg`,
            `${WORKS_IMAGES_BASE_PATH}business-automation/2.jpg`,
            `${WORKS_IMAGES_BASE_PATH}business-automation/3.jpg`,
            `${WORKS_IMAGES_BASE_PATH}business-automation/4.jpg`,
            `${WORKS_IMAGES_BASE_PATH}business-automation/5.jpg`,
            `${WORKS_IMAGES_BASE_PATH}business-automation/6.jpg`,
            `${WORKS_IMAGES_BASE_PATH}business-automation/7.jpg`,
            `${WORKS_IMAGES_BASE_PATH}business-automation/8.jpg`
        ],
        path: "/business-automation-app",
        title: {
            [LANGUAGES.EN]: "Empower Your Business with Cutting-Edge Digital Solutions"
        },
        description: {
            [LANGUAGES.EN]: "%3Cp%3E%3Cstrong%3EITHD%3A%20Your%20Trusted%20Partner%20in%20Business%20Automation%3C%2Fstrong%3E%3C%2Fp%3E%3Cp%3E%3Cbr%3E%3C%2Fp%3E%3Cp%3EEmbark%20on%20a%20transformative%20journey%20into%20the%20realm%20of%20cutting-edge%20business%20automation%20with%20ITHD!%20Our%20dynamic%20and%20expansive%20portfolio%20showcases%20the%20fusion%20of%20cloud%20development%2C%20web%20development%2C%20mobile%20development%2C%20design%2C%20and%20branding%2C%20converging%20to%20redefine%20the%20landscape%20of%20contemporary%20businesses.%20Experience%20the%20power%20of%20innovation%20firsthand%20as%20we%20unveil%20a%20spectrum%20of%20scalable%20cloud%20solutions%2C%20user-centric%20web%20and%20mobile%20applications%2C%20and%20visually%20captivating%20designs.%3C%2Fp%3E%3Cp%3E%3Cbr%3E%3C%2Fp%3E%3Cp%3E%3Cstrong%3ERevolutionizing%20Business%20Operations%20with%20ITHD%3C%2Fstrong%3E%3C%2Fp%3E%3Cp%3E%3Cbr%3E%3C%2Fp%3E%3Cp%3EAt%20ITHD%2C%20we%20invite%20you%20to%20witness%20the%20seamless%20synergy%20of%20technology%20and%20creativity%2C%20designed%20to%20revolutionize%20your%20business%20operations.%20Our%20commitment%20to%20excellence%20is%20evident%20in%20every%20aspect%20of%20our%20offerings%2C%20promising%20to%20elevate%20your%20digital%20presence%20and%20optimize%20your%20organizational%20efficiency.%3C%2Fp%3E%3Cp%3E%3Cbr%3E%3C%2Fp%3E%3Cp%3E%3Cstrong%3EOur%20Comprehensive%20Business%20Automation%20Solutions%3C%2Fstrong%3E%3C%2Fp%3E%3Cp%3E%3Cbr%3E%3C%2Fp%3E%3Cul%3E%3Cli%3EScalable%20Cloud%20Solutions%3A%20We%20harness%20the%20power%20of%20the%20cloud%20to%20deliver%20secure%2C%20scalable%2C%20and%20cost-effective%20infrastructure%20that%20supports%20your%20evolving%20business%20needs.%3C%2Fli%3E%3Cli%3EUser-Centric%20Web%20and%20Mobile%20Applications%3A%20We%20design%20and%20develop%20intuitive%20and%20engaging%20web%20and%20mobile%20applications%20that%20enhance%20user%20experience%20and%20drive%20business%20growth.%3C%2Fli%3E%3Cli%3EVisually%20Captivating%20Designs%3A%20Our%20team%20of%20creative%20experts%20crafts%20visually%20compelling%20designs%20that%20capture%20attention%20and%20resonate%20with%20your%20target%20audience.%3C%2Fli%3E%3C%2Ful%3E%3Cp%3E%3Cbr%3E%3C%2Fp%3E%3Cp%3E%3Cstrong%3EPartner%20with%20ITHD%20for%20Unparalleled%20Success%3C%2Fstrong%3E%3C%2Fp%3E%3Cp%3E%3Cbr%3E%3C%2Fp%3E%3Cp%3EJoin%20us%20in%20unlocking%20the%20full%20potential%20of%20modern%20business%20automation%2C%20and%20let%20ITHD%20be%20your%20trusted%20partner%20on%20the%20path%20to%20success.%20Our%20expertise%2C%20dedication%2C%20and%20passion%20are%20the%20driving%20forces%20behind%20our%20commitment%20to%20delivering%20exceptional%20results%20for%20our%20clients.%3C%2Fp%3E%3Cp%3E%3Cbr%3E%3C%2Fp%3E%3Cp%3E%3Cstrong%3EUnlock%20the%20Power%20of%20Business%20Automation%20with%20ITHD%3C%2Fstrong%3E%3C%2Fp%3E%3Cp%3E%3Cbr%3E%3C%2Fp%3E%3Cp%3EContact%20us%20today%20to%20schedule%20a%20consultation%20and%20discover%20how%20ITHD%20can%20transform%20your%20business%20with%20innovative%20automation%20solutions.%3C%2Fp%3E"
        },
        shortDescription: {
            [LANGUAGES.EN]: "Explore the world of modern business automation with ITHD! Discover how our comprehensive portfolio, encompassing cloud development, web development, mobile development, design, and branding, revolutionizes businesses. Witness innovation in action as we showcase scalable cloud solutions, user-centric web and mobile applications, and captivating designs. Join us on a journey to elevate your digital presence and optimize your operations!"
        },
        imagesGrid: true
    },
    {
        services: [
            "ux-ui-design"
        ],
        movie: null,
        images: [
            `${WORKS_IMAGES_BASE_PATH}tobacco-branding/1.jpg`,
            `${WORKS_IMAGES_BASE_PATH}tobacco-branding/2.jpg`,
            `${WORKS_IMAGES_BASE_PATH}tobacco-branding/3.jpg`,
            `${WORKS_IMAGES_BASE_PATH}tobacco-branding/4.jpg`,
            `${WORKS_IMAGES_BASE_PATH}tobacco-branding/5.jpg`
        ],
        path: "/tobacco-branding",
        title: {
            [LANGUAGES.EN]: "Tobacco Branding"
        },
        description: {
            [LANGUAGES.EN]: "%3Cp%3E%3Cstrong%3EWelcome%20to%20Our%20Tobacco%20Branding%20Portfolio%3C%2Fstrong%3E%3C%2Fp%3E%3Cp%3E%3Cbr%3E%3C%2Fp%3E%3Cp%3EAt%20ITHD%2C%20we%20specialize%20in%20crafting%20captivating%20and%20distinguished%20branding%20experiences%20for%20tobacco%20products%20that%20resonate%20with%20your%20audience.%20Our%20portfolio%20is%20a%20testament%20to%20our%20expertise%20in%20creating%20compelling%20narratives%20and%20visually%20striking%20designs%20that%20elevate%20every%20brand%20we%20work%20with.%3C%2Fp%3E%3Cp%3E%3Cbr%3E%3C%2Fp%3E%3Cp%3E%3Cstrong%3EOur%20Approach%3C%2Fstrong%3E%3C%2Fp%3E%3Cp%3E%3Cbr%3E%3C%2Fp%3E%3Cp%3EWe%20believe%20that%20each%20tobacco%20brand%20has%20a%20unique%20story%20waiting%20to%20be%20told.%20Our%20approach%20involves%20diving%20deep%20into%20the%20essence%20of%20your%20brand%20and%20understanding%20its%20heritage%2C%20values%2C%20and%20target%20audience.%20We%20merge%20creativity%20with%20strategic%20thinking%20to%20develop%20a%20brand%20identity%20that%20not%20only%20stands%20out%20but%20also%20connects%20authentically%20with%20consumers.%3C%2Fp%3E%3Cp%3E%3Cbr%3E%3C%2Fp%3E%3Cp%3E%3Cstrong%3EServices%20Offered%3C%2Fstrong%3E%3C%2Fp%3E%3Cp%3E%3Cbr%3E%3C%2Fp%3E%3Cul%3E%3Cli%3EBrand%20Identity%20Creation%3A%20From%20logo%20design%20to%20color%20palette%20selection%2C%20typography%2C%20and%20brand%20guidelines%2C%20we%20craft%20cohesive%20and%20memorable%20brand%20identities%20that%20encapsulate%20the%20essence%20of%20your%20tobacco%20products.%3C%2Fli%3E%3Cli%3EPackaging%20Design%3A%20Our%20designs%20go%20beyond%20aesthetics%3B%20they%20communicate%20the%20brand's%20personality%20and%20allure%20on%20every%20package%2C%20capturing%20attention%20on%20the%20shelves%20and%20leaving%20a%20lasting%20impression.%3C%2Fli%3E%3Cli%3EMarketing%20Collateral%3A%20We%20extend%20the%20brand%20story%20across%20various%20collateral%2C%20including%20advertisements%2C%20promotional%20materials%2C%20and%20digital%20assets%2C%20ensuring%20consistency%20and%20impact%20across%20all%20touchpoints.%3C%2Fli%3E%3C%2Ful%3E%3Cp%3E%3Cbr%3E%3C%2Fp%3E%3Cp%3E%3Cstrong%3EFeatured%20Projects%3C%2Fstrong%3E%3C%2Fp%3E%3Cp%3E%3Cbr%3E%3C%2Fp%3E%3Col%3E%3Cli%3E%3Cem%3ELegacy%20Blend%3C%2Fem%3E%3A%20Embracing%20tradition%20and%20heritage%2C%20we%20developed%20an%20identity%20that%20paid%20homage%20to%20the%20brand's%20rich%20history%20while%20infusing%20modern%20elements%20to%20appeal%20to%20a%20younger%20demographic.%20The%20packaging%20incorporated%20elegant%20typography%20and%20intricate%20patterns%20that%20reflected%20the%20brand's%20legacy.%3C%2Fli%3E%3Cli%3E%3Cem%3EUrban%20Smoke%3C%2Fem%3E%3A%20For%20this%20contemporary%20brand%20targeting%20urban%20enthusiasts%2C%20we%20created%20a%20sleek%2C%20minimalist%20identity%20with%20a%20focus%20on%20bold%20typography%20and%20a%20monochromatic%20palette.%20The%20packaging%20design%20exuded%20sophistication%20and%20urban%20chic%2C%20resonating%20with%20the%20brand's%20audience.%3C%2Fli%3E%3C%2Fol%3E%3Cp%3E%3Cbr%3E%3C%2Fp%3E%3Cp%3E%3Cstrong%3ELet's%20Collaborate%3C%2Fstrong%3E%3C%2Fp%3E%3Cp%3E%3Cbr%3E%3C%2Fp%3E%3Cp%3EWhether%20you're%20launching%20a%20new%20tobacco%20product%20or%20looking%20to%20revamp%20an%20existing%20brand%2C%20we're%20passionate%20about%20bringing%20your%20vision%20to%20life.%20Let's%20collaborate%20and%20create%20a%20captivating%20brand%20experience%20that%20leaves%20a%20lasting%20impression.%3C%2Fp%3E%3Cp%3EContact%20us%20to%20discuss%20your%20project%20and%20let's%20embark%20on%20a%20journey%20to%20redefine%20your%20tobacco%20brand's%20identity.%3C%2Fp%3E"
        },
        shortDescription: {
            [LANGUAGES.EN]: "Tobacco branding is a complex and controversial topic. On the one hand, it is a vital part of the tobacco industry, helping to create and maintain brand awareness and loyalty. On the other hand, it has been criticized for its role in promoting tobacco use, particularly among young people."
        },
        imagesGrid: true
    },
    {
        services: [
            "ios-development",
            "android-development",
            "ux-ui-design",
            "cloud-solutions"
        ],
        movie: null,
        images: [
            "/images/works/mobile-app-development/6.jpg",
            "/images/works/mobile-app-development/1.jpg",
            "/images/works/mobile-app-development/2.jpg",
            "/images/works/mobile-app-development/3.jpg",
            "/images/works/mobile-app-development/4.jpg",
            "/images/works/mobile-app-development/5.jpg"
        ],
        path: "/mobile-app-development",
        title: {
            [LANGUAGES.EN]: "Crypto Wallet Mobile App: Revolutionizing Digital Asset Management"
        },
        description: {
            [LANGUAGES.EN]: `
                Our Crypto Wallet Mobile App is a state-of-the-art platform that provides a user-friendly and secure way to manage a diverse range of cryptocurrencies in one place. With the ever-increasing popularity of digital assets, we understand the importance of a reliable and feature-rich wallet to navigate the world of cryptocurrencies with confidence.
                <br />
                <b>Key Features:</b><br/>
                <ul class="list-circle ml-1 mv-1">
                    <li><b>Bank-Grade Security:</b> Security is at the core of our app. Leveraging advanced encryption techniques, multi-factor authentication, and biometric security, we ensure that your digital assets are protected from any potential threats.</li>
                    <li><b>Multi-Currency Support:</b> Say goodbye to juggling multiple wallets. Our app supports a wide array of cryptocurrencies, from Bitcoin and Ethereum to altcoins, providing you with a unified platform for seamless asset management.</li>
                    <li><b>Intuitive User Interface:</b> We've designed the app with a user-centric approach. The intuitive and easy-to-navigate interface allows you to access your wallet, view balances, and make transactions with ease – even if you're new to cryptocurrencies.</li>
                    <li><b>Real-Time Market Data:</b> Stay on top of your investments with real-time market data and price alerts. Our app ensures you are always informed about the latest market trends, enabling you to make informed decisions at the right time.</li>
                    <li><b>Fast and Secure Transactions:</b> Whether you're sending or receiving cryptocurrencies, our app ensures swift and secure transactions, providing you with peace of mind during each transaction.</li>
                </ul>
                <br />
                <b>How Our App Stands Out:</b><br/>
                <ul class="list-circle ml-1 mv-1">
                    <li><b>Customization:</b> We understand that every user has unique preferences and requirements. Our app allows you to customize your wallet, personalize the user interface, and manage your assets based on your specific needs.</li>
                    <li><b>Regulatory Compliance:</b> Our development process adheres to the highest industry standards and regulatory requirements, ensuring that your Crypto Wallet Mobile App is legally compliant and trustworthy.</li>
                    <li><b>Constant Innovation:</b>  We're committed to continuous improvement. Our team regularly updates the app with new features and enhancements to provide you with the best possible user experience.</li>
                </ul>
                <br />
                At ITHD, we are thrilled to present our Crypto Wallet Mobile App, designed to revolutionize how you manage your digital assets. Embrace the world of cryptocurrencies confidently with our cutting-edge app. Join us in the journey towards a secure and seamless digital asset management experience. Get in touch with us today to learn more and explore the possibilities that our Crypto Wallet App has to offer.
            `
        },
        shortDescription: {
            [LANGUAGES.EN]: "At ITHD, we take pride in showcasing our latest accomplishment – the Crypto Wallet Mobile App. Our team of skilled developers and blockchain enthusiasts has crafted an innovative solution to empower you in managing your digital assets securely and effortlessly."
        },
        imagesGrid: true
    },
    {
        services: [
            "ios-development",
            "android-development",
            "ux-ui-design",
            "cloud-solutions"
        ],
        movie: null,
        images: [
            `${WORKS_IMAGES_BASE_PATH}chat-app/1.jpg`,
            `${WORKS_IMAGES_BASE_PATH}chat-app/2.jpg`,
            `${WORKS_IMAGES_BASE_PATH}chat-app/3.jpg`,
            `${WORKS_IMAGES_BASE_PATH}chat-app/4.jpg`,
            `${WORKS_IMAGES_BASE_PATH}chat-app/5.jpg`
        ],
        path: "/chat-application",
        title: {
            [LANGUAGES.EN]: "Chat application"
        },
        description: {
            [LANGUAGES.EN]: "Our development team created a chat app that revolutionizes communication and collaboration for businesses. Our app allows users to chat in real time, make video calls, and share files securely. It provides an intuitive and user-friendly interface that makes it easy for team members to communicate and stay organized. The chat app was developed using the latest technologies and features end-to-end encryption to ensure that all communications are secure and private. It also has robust notification settings, allowing users to customize their notifications and stay on top of their messages without feeling overwhelmed. Our team designed the chat app with scalability in mind, making it easy to add new features and expand as your business grows. It is also fully customizable, allowing you to add your brand colors and logo, making it feel like an extension of your business. Our chat app has been used by businesses of all sizes to improve communication and collaboration, resulting in increased productivity and happier teams. <br /> Contact us today to learn more about how our chat app can benefit your business."
        },
        shortDescription: {
            [LANGUAGES.EN]: "Our chat app is a secure and user-friendly platform for real-time communication and collaboration. With features like video calling, file sharing, and customizable notifications, it improves productivity and teamwork for businesses of all sizes. Contact us to learn more about how our chat app can benefit your company."
        },
        imagesGrid: true
    },
    {
        services: [
            "ios-development",
            "android-development",
            "ux-ui-design",
            "cloud-solutions"
        ],
        movie: null,
        images: [
            `${WORKS_IMAGES_BASE_PATH}loan-banking-app/2.jpg`,
            `${WORKS_IMAGES_BASE_PATH}loan-banking-app/1.jpg`
        ],
        path: "/mobile-loan-app",
        title: {
            [LANGUAGES.EN]: "Loan banking app"
        },
        description: {
            [LANGUAGES.EN]: "Our development team has designed a Loan app that offers a fast and convenient way for users to apply for loans, track their application status, and manage their loan repayments. The Loan app has a simple and user-friendly interface that makes it easy for users to submit loan applications, provide the necessary documentation, and receive loan approval. The app also features advanced security measures to ensure the safety of users' personal and financial information. Our Loan app is designed with the latest technologies to ensure a seamless user experience. Our development team has also integrated advanced security measures into the app to protect users' sensitive data and financial information. Our Loan app is fully compliant with the latest security standards, ensuring that users' data is protected at all times. The Loan app also offers real-time updates on the status of loan applications, giving users greater visibility and control over the loan process."
        },
        shortDescription: {
            [LANGUAGES.EN]: "Our completed loan banking app is a user-friendly and secure platform for managing loans and payments. With features like loan tracking, payment reminders, and account management, it simplifies the loan process for both borrowers and lenders."
        },
        imagesGrid: true
    },
    {
        services: [
            "ux-ui-design",
            "cloud-solutions"
        ],
        movie: null,
        images: [
            `${WORKS_IMAGES_BASE_PATH}mobile-app-design/1.jpg`,
            `${WORKS_IMAGES_BASE_PATH}mobile-app-design/2.jpg`
        ],
        path: "/mobile-app-design",
        title: {
            [LANGUAGES.EN]: "Mobile App Design"
        },
        description: {
            [LANGUAGES.EN]: `
                <p>
                    Welcome to ITHD, where digital innovation meets creative excellence. We are a leading digital company dedicated to helping businesses thrive in the fast-paced world of technology and online presence. With our cutting-edge solutions, strategic insights, and impeccable design work, we empower brands to make a lasting impact in the digital landscape.
                </p>
                <br />
                <div>
                    <b>Our Approach:</b><br />
                    <p>At ITHD, we believe that great design is not just visually stunning, but also strategically aligned with your business goals. Our team of talented designers, developers, and marketers work collaboratively to create captivating digital experiences that engage your target audience and drive measurable results.</p>
                </div>
                <br />
                <div>
                    <b>Services We Offer:</b><br />
                    <p>Web Design and Development: We specialize in creating visually appealing and user-friendly websites that reflect your brand's unique identity. From responsive design to seamless navigation, we ensure that your website leaves a lasting impression on your visitors.</p>
                </div>
                <br />
                <div>
                    <b>UI/UX Design:</b><br />
                    <p>Our user-centered design approach focuses on enhancing the overall user experience. We craft intuitive interfaces and engaging interactions that captivate your users and keep them coming back for more.</p>
                </div>
                <br />
                <div>
                    <b>Mobile App Development:</b><br />
                    <p>In the era of smartphones, having a mobile app is crucial for reaching a wider audience. Our skilled app developers create customized solutions for iOS and Android platforms, bringing your ideas to life and providing users with a seamless mobile experience.</p>
                </div>
                <br />
                <div>
                    <b>E-commerce Solutions:</b><br />
                    <p>We help businesses establish a robust online presence by developing secure and scalable e-commerce platforms. Our expertise in various platforms enables us to create tailored solutions that drive conversions and maximize revenue.</p>
                </div>
                <br />
                <div>
                    <b>Digital Marketing:</b><br />
                    <p>Beyond design and development, we offer comprehensive digital marketing strategies to amplify your online visibility. From search engine optimization (SEO) to social media marketing, we ensure that your brand gets noticed and stays ahead of the competition.</p>
                </div>
                <br />
                <div>
                    <b>Why Choose Us:</b><br />
                    <p>Expertise and Experience: With years of experience in the digital industry, our team has honed their skills and gained in-depth knowledge of the latest trends and technologies. You can trust us to deliver top-notch solutions tailored to your specific requirements.</p>
                </div>
                <br />
                <div>
                    <b>Client-Centric Approach:</b><br />
                    <p>We believe in building strong and lasting partnerships with our clients. Our collaborative process involves understanding your goals, values, and target audience to create solutions that align with your brand vision.</p>
                </div>
                <br />
                <div>
                    <b>Creative Excellence:</b><br />
                    <p>We are passionate about pushing boundaries and delivering designs that make an impact. Our innovative ideas and attention to detail ensure that your brand stands out in the digital space.</p>
                </div>
                <br />
                <div>
                    <b>Results-Driven:</b><br />
                    <p>Our primary focus is on generating tangible results for your business. Whether it's increasing conversions, driving traffic, or improving user engagement, we employ data-driven strategies to achieve your desired outcomes.</p>
                </div>
                <br />
                <div>
                    <b>Customer Support:</b><br />
                    <p>We value our clients and provide ongoing support even after the project is completed. Our dedicated support team is always ready to assist you and ensure a smooth digital journey for your business.</p>
                </div>
                <br />
                <div>
                    <b>Get in Touch:</b><br />
                    <p>Ready to elevate your digital presence? Contact us today to discuss your project and learn how our design work and digital solutions can help your business thrive in the ever-evolving digital landscape. Let's embark on a digital journey together and create something extraordinary.</p>
                </div>
            `
        },
        shortDescription: {
            [LANGUAGES.EN]: "Our team of talented designers and strategists is here to create stunning visual experiences that captivate your audience and drive results."
        },
        imagesGrid: true
    },
    {
        services: [
            "logo-making"
        ],
        movie: null,
        images: [
            `${WORKS_IMAGES_BASE_PATH}beer-work/1.jpg`,
            `${WORKS_IMAGES_BASE_PATH}beer-work/2.png`,
            `${WORKS_IMAGES_BASE_PATH}beer-work/3.jpg`,
            `${WORKS_IMAGES_BASE_PATH}beer-work/4.jpg`,
            `${WORKS_IMAGES_BASE_PATH}beer-work/5.jpg`,
            `${WORKS_IMAGES_BASE_PATH}beer-work/6.jpg`,
            `${WORKS_IMAGES_BASE_PATH}beer-work/7.jpg`
        ],
        path: "/beer-work",
        title: {
            [LANGUAGES.EN]: "Beer Factory Branding"
        },
        description: {
            [LANGUAGES.EN]: `
                <p>We aimed to create a logo that embodies the essence of the brewing process and the passion behind crafting exceptional beer.</p>
                <br />
                <p>The logo design centers around an abstract representation of a beer bottle, symbolizing the heart of the brewery and the ultimate product we offer.</p>
                <br />
                <p>We integrated sleek and stylized gears, pipes, and hop leaves surrounding the beer bottle to emphasize the industrial and intricate nature of beer production. These elements also serve as a nod to the machinery and craftsmanship involved in the process, while highlighting the importance of natural ingredients in creating our unique brews.</p>
                <br />
                <p>The color palette we chose exudes warmth and invites a sense of camaraderie, with deep amber, rustic brown, and muted gold tones that resonate with the beer culture. We carefully selected a bold yet approachable typography for the "Beer Factory Branding" name, instilling confidence and reliability in our brand.</p>
                <br />
                <p>We aim to reflect the expertise, innovation, and dedication that go into our brewing process through this logo. We are excited to share this emblem with you as the representation of our passion for brewing excellence. We hope it inspires a sense of trust and excitement among our customers as they explore the world of beer with us.</p>
            `
        },
        shortDescription: {
            [LANGUAGES.EN]: "A symbol of passion and craftsmanship in brewing. Our abstract beer bottle design, surrounded by gears and hop leaves, embodies the industrial and natural elements of our process. With warm amber hues and vintage-inspired typography, it's a testament to our commitment to \"Crafting Excellence, One Sip at a Time.\" Join us on a flavorful journey through the world of beer. Cheers!"
        },
        imagesGrid: true
    },
    {
        services: [
            "logo-making"
        ],
        movie: null,
        images: [
            `${WORKS_IMAGES_BASE_PATH}completed-logos/1.jpg`,
            `${WORKS_IMAGES_BASE_PATH}completed-logos/2.jpg`,
            `${WORKS_IMAGES_BASE_PATH}completed-logos/3.jpg`,
            `${WORKS_IMAGES_BASE_PATH}completed-logos/4.jpg`,
            `${WORKS_IMAGES_BASE_PATH}completed-logos/5.jpg`,
            `${WORKS_IMAGES_BASE_PATH}completed-logos/6.jpg`,
            `${WORKS_IMAGES_BASE_PATH}completed-logos/7.jpg`,
            `${WORKS_IMAGES_BASE_PATH}completed-logos/8.jpg`,
            `${WORKS_IMAGES_BASE_PATH}completed-logos/9.jpg`,
            `${WORKS_IMAGES_BASE_PATH}completed-logos/10.jpg`,
            `${WORKS_IMAGES_BASE_PATH}completed-logos/11.jpg`,
            `${WORKS_IMAGES_BASE_PATH}completed-logos/12.jpg`,
            `${WORKS_IMAGES_BASE_PATH}completed-logos/13.jpg`
        ],
        path: "/logo",
        title: {
            [LANGUAGES.EN]: "Our Completed Logo's"
        },
        description: {
            [LANGUAGES.EN]: `
                The logo was created using a variety of techniques, including typography, illustration, and color. The typography was chosen to be both modern and timeless, while the illustration was used to add a touch of personality to the logo. The color palette was chosen to be both vibrant and complementary to the client's brand colors. <br />
                We are confident that the new logo will be a valuable asset to our client. The logo is eye-catching and memorable, and it will help the client stand out from the competition. We are excited to see how the client uses the new logo to promote their business. <br />
                Here are some of the benefits of our logo design service:
                <ul class="list-circle ml-1 mv-1">
                    <li>We'll work with you to understand your brand identity and create a logo that reflects your values.</li>
                    <li>We'll use a variety of techniques to create a logo that is both visually appealing and effective in communicating your brand message.</li>
                    <li>We'll provide you with a high-quality, professional logo that you can use on your website, marketing materials, and other branding assets.</li>
                </ul>
                If you're looking for a professional logo that will help you stand out from the competition, contact us today.
            `
        },
        shortDescription: {
            [LANGUAGES.EN]: "We are proud to announce that we have completed the design of a new logo for our client. The logo is a modern and stylish design that reflects the client's brand identity."
        },
        imagesGrid: true
    }
];

export const PARTNERS_LIST = [
    {
        path: "/images/furniture-logo-icon.svg"
    },
    {
        path: "/images/lendmepros-logo-icon.svg"
    },
    {
        path: "/images/google-cloud-logo-icon.svg"
    },
    {
        path: "/images/stripe-logo-icon.svg"
    }
];

export const FAQ_LIST = [
    {
        title: {
            [LANGUAGES.EN]: "What kind of services do you offer?"
        },
        content: {
            [LANGUAGES.EN]: "Our development company offers a wide range of services including web development, mobile app development, custom software development, App Design, e-commerce solutions, and cloud computing services."
        }
    },
    {
        title: {
            [LANGUAGES.EN]: "How do you price your services?"
        },
        content: {
            [LANGUAGES.EN]: "Our pricing varies based on the scope of the project, the technologies used, and the estimated time required to complete the project. We provide a detailed breakdown of costs and deliverables in our project proposals."
        }
    },
    {
        title: {
            [LANGUAGES.EN]: "What is your development process?"
        },
        content: {
            [LANGUAGES.EN]: "Our development process involves several phases including planning, design, development, testing, and deployment. We work closely with our clients throughout the process to ensure their requirements are met, and we provide regular updates and progress reports."
        }
    },
    {
        title: {
            [LANGUAGES.EN]: "What kind of technologies do you use?"
        },
        content: {
            [LANGUAGES.EN]: "We use a wide range of technologies depending on the project requirements. Some of the technologies we specialize in include Java, Kotlin, Swift, Python, JavaScript, React, Angular, Node.js, Google Cloud platform, etc."
        }
    },
    {
        title: {
            [LANGUAGES.EN]: "How do you ensure the security of the project?"
        },
        content: {
            [LANGUAGES.EN]: "We take security very seriously and use industry-standard security practices to ensure the confidentiality, integrity, and availability of our clients data. We also conduct regular security audits and vulnerability assessments to identify and mitigate any potential security risks."
        }
    },
    {
        title: {
            [LANGUAGES.EN]: "What kind of support do you offer after the project is completed?"
        },
        content: {
            [LANGUAGES.EN]: "We provide ongoing support and maintenance services to ensure the smooth functioning of the project. We also offer training and documentation to help our clients manage their projects efficiently."
        }
    }
];

export const SOCIALS = {
    REDDIT: "https://www.reddit.com/user/ITHD-Digital-company",
    YOUTUBE: "https://youtube.com/@ITHD",
    TWITTER: "https://twitter.com/ITHDLLC",
    PINTEREST: "https://www.pinterest.com/ithdagency/",
    LINKEDIN: "https://www.linkedin.com/company/ithd/",
    DRIBBBLE: "https://dribbble.com/ITHDAgency",
    WHATSAPP: "https://wa.me/19149047784?text=Hello ITHD Team"
};

export const VALUES_FAQ = [
    {
        title: {
            [LANGUAGES.EN]: "Innovation"
        },
        content: {
            [LANGUAGES.EN]: "We value creativity and be willing to experiment with new ideas and technologies."
        }
    },
    {
        title: {
            [LANGUAGES.EN]: "Quality"
        },
        content: {
            [LANGUAGES.EN]: "Delivering quality products and services are a top priority for us. This includes ensuring that software is secure, user-friendly, and meets customer expectations."
        }
    },
    {
        title: {
            [LANGUAGES.EN]: "Continuous learning"
        },
        content: {
            [LANGUAGES.EN]: "ITHD encourages its team members to continuously learn and stay up-to-date with the latest technologies and industry trends."
        }
    },
    {
        title: {
            [LANGUAGES.EN]: "Transparency"
        },
        content: {
            [LANGUAGES.EN]: "We value transparency and open communication, both with our clients and within the company itself."
        }
    }
];

export const ROUTING_ROUTES = [
    {
        id: 0,
        label: "Works",
        path: ROUTES.WORK,
        children: []
    },
    {
        id: 1,
        label: "Services",
        path: ROUTES.SERVICES,
        children: SERVICES.map(service => {
            let {path, title, shortDescription} = service;
            return {
                path: `${ROUTES.SERVICES}${path}`,
                title: title[LANGUAGES.EN],
                content: shortDescription.en
            }
        })
    },
    {
        id: 2,
        label: "Company",
        path: ROUTES.COMPANY,
        children: []
    },
    {
        id: 3,
        label: "Blog",
        path: ROUTES.BLOG,
        children: []
    }
];