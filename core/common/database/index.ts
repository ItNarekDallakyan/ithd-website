import {LANGUAGES, ROUTES} from "@models/enums";
import {SERVICES_IMAGES_BASE_PATH, WORKS_IMAGES_BASE_PATH} from "@common/variables";

export const FOOTER_ROUTES = [
    {
        id: 9,
        label: "Testimonials",
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
        label: "Contact Us",
        children: [],
        path: ROUTES.CONTACT
    },
    {
        id: 7,
        label: "FAQs",
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
            content: "React.js is a powerful JavaScript library trusted by Fortune 500 companies worldwide for building dynamic, high-performance web applications. Our expert developers leverage React's component-based architecture to create scalable, maintainable solutions that deliver exceptional user experiences and fast load times.",
            icon: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
        },
        {
            title: "Next.js",
            content: "Next.js is the industry-leading React framework that powers modern web applications for global enterprises. By combining server-side rendering, static site generation, and API routes, Next.js enables us to build lightning-fast, SEO-optimized websites with superior performance and enhanced user engagement.",
            icon: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg"
        },
        {
            title: "Webpack",
            content: "Webpack is an advanced module bundler that optimizes your web application's performance through efficient code splitting and asset management. Our development team utilizes Webpack's powerful build tools to ensure faster page loads, reduced file sizes, and improved overall website performance.",
            icon: "https://webpack.js.org/icon-square-small.9e8aff7a67a5dd20.svg"
        }
    ],
    whatWeOffer: {
        [LANGUAGES.EN]: "Custom-built React.js solutions tailored to your business objectives | Award-winning developers with expertise in cutting-edge technologies | Transparent project management with regular milestone updates | Agile development methodology ensuring on-time, on-budget delivery | Dedicated 24/7 customer support and maintenance | Long-term partnership focused on your digital success"
    },
    approach: {
        [LANGUAGES.EN]: "Every business is unique, and so is every web development project. Our experienced team collaborates closely with you to understand your specific goals, target audience, and competitive landscape. We design custom web solutions that align perfectly with your brand identity and business objectives, from simple business websites to complex enterprise applications."
    },
    expertise: {
        [LANGUAGES.EN]: "Our certified developers bring years of hands-on experience building React.js applications using industry-leading frameworks and tools. We specialize in modern JavaScript libraries including Redux for state management and Next.js for server-side rendering. Our technical stack also includes advanced build tools like Webpack, ESLint for code quality, and comprehensive testing frameworks."
    },
    process: {
        [LANGUAGES.EN]: "We believe in complete transparency throughout the web development lifecycle. Our proven Agile methodology ensures continuous client involvement, regular sprint reviews, and iterative improvements. From initial consultation through deployment and beyond, we maintain open communication channels and provide detailed progress reports to guarantee project success."
    },
    title: {
        [LANGUAGES.EN]: "Professional Web Development Services in Dubai"
    },
    description: {
        [LANGUAGES.EN]: "<p><strong>1. Transform Your Digital Presence with Expert Web Development</strong><br>Elevate your brand with professional web development services in Dubai. Your website is your digital storefront and the foundation of your online presence. In today's competitive marketplace, a professionally designed website isn't just nice to have—it's essential for business growth. We understand that first impressions matter, which is why we create websites that captivate visitors and drive conversions.<br>&nbsp;</p><p><strong>2. Award-Winning Development Team & Proven Methodology</strong><br>Our seasoned development team brings together decades of combined experience in web technologies. We're passionate about crafting custom, responsive, and user-focused websites that exceed industry standards. Each project undergoes rigorous quality assurance to ensure flawless functionality, optimal performance, and seamless user experience across all devices and browsers.<br>&nbsp;</p><p><strong>3. Complete Web Development Solutions from Strategy to Launch</strong><br>From initial concept and strategic planning to final deployment and ongoing support, we manage every aspect of your web development project. Our comprehensive approach includes market research, <a href='/services/ux-ui-design/'>UX/UI design</a>, <a href='/services/web-development/'>custom development</a>, quality testing, SEO optimization, and post-launch maintenance. We create stunning, high-performing websites that align with your business goals and drive measurable results.<br>&nbsp;</p><p><strong>4. Bringing Your Vision to Life with Cutting-Edge Technology</strong><br>We view websites as powerful business tools that represent your brand's identity and values in the digital world. Using the latest technologies including React.js, Next.js, and modern web standards, we transform your ideas into fully functional, scalable web applications. Whether you need an e-commerce platform, corporate website, or <a href='/services/business-automation/'>custom web application</a>, we deliver solutions that engage users and achieve your objectives.<br>&nbsp;</p><p><strong>5. Client-Focused Collaboration & Transparent Communication</strong><br>Your success is our priority. We maintain open communication throughout every project phase, involving you in key decisions and incorporating your feedback at each milestone. This collaborative approach ensures your website truly reflects your brand vision, business values, and target audience expectations. Our client-centric methodology has helped businesses across Dubai achieve their digital transformation goals.<br>&nbsp;</p><p><strong>Ready to Launch Your Web Project?</strong></p><p>Let's bring your digital vision to life. <a href='/contact/'>Contact our expert team</a> today to discuss your web development needs. Whether you're launching a new business, redesigning your existing site, or building a complex web application, our dedicated developers are ready to turn your ideas into reality. Discover why leading businesses in Dubai trust us for their web development needs. View our <a href='/portfolio/'>portfolio of successful projects</a> and read <a href='/testimonies/'>client testimonials</a> to see the results we deliver.</p>"
    },
    shortDescription: {
        [LANGUAGES.EN]: `
            <p>Our professional web development team specializes in creating high-performance websites optimized for search engines and user experience. We build responsive, mobile-friendly sites with intuitive navigation that convert visitors into customers. Partner with Dubai's leading web development agency for results-driven digital solutions.</p>
        `
    },
    faqList: [
        {
            title: {
                [LANGUAGES.EN]: "What is the cost of professional web development services?"
            },
            content: {
                [LANGUAGES.EN]: "Web development costs vary based on project scope, complexity, required features, and technology stack. Factors include design customization, functionality requirements, third-party integrations, and ongoing maintenance needs. Typical professional website development projects start from $3,000 and scale based on your specific requirements. <a href='/contact/'>Contact us</a> for a detailed quote tailored to your business needs and budget."
            }
        },
        {
            title: {
                [LANGUAGES.EN]: "How long does it take to develop a professional website?"
            },
            content: {
                [LANGUAGES.EN]: "Website development timelines depend on project complexity, feature requirements, content readiness, and revision cycles. A standard business website typically takes 3-6 weeks from initial consultation to launch. Complex e-commerce or custom web applications may require 8-12 weeks or more. During our <a href='/our-process/'>initial assessment</a>, we'll provide you with a detailed timeline and project roadmap with clear milestones, ensuring efficient resource allocation and on-time delivery."
            }
        },
        {
            title: {
                [LANGUAGES.EN]: "What ongoing support and maintenance do you provide?"
            },
            content: {
                [LANGUAGES.EN]: "We offer comprehensive post-launch support including security updates, bug fixes, performance optimization, content updates, and feature enhancements. Our maintenance packages are flexible and customized based on your needs. We provide 24/7 technical support, regular backups, uptime monitoring, and priority assistance. Learn more about our <a href='/services/web-development/'>ongoing maintenance services</a> and support packages."
            }
        },
        {
            title: {
                [LANGUAGES.EN]: "Will I own the website and all its components?"
            },
            content: {
                [LANGUAGES.EN]: "Absolutely! Upon final payment, you receive full ownership rights to all website components including source code, design files, content, and intellectual property developed during your project. We provide complete documentation and training for your team. Unless agreed otherwise, we reserve the right to showcase the website in our <a href='/portfolio/'>portfolio</a>. All source files, databases, and access credentials are transferred to you upon project completion."
            }
        },
    ]
};

const ANDROID_DEVELOPMENT = {
    movie: "3NP5Wjc49fk",
    path: "/android-development",
    title: {
        [LANGUAGES.EN]: "<p>Professional Android App Development Services</p>"
    },
    media: [
        `${SERVICES_IMAGES_BASE_PATH}android-development/1.jpg`,
        `${SERVICES_IMAGES_BASE_PATH}android-development/2.jpg`
    ],
    technologies: [
        {
            title: "Kotlin",
            content: "Kotlin is Google's preferred programming language for Android development, offering enhanced safety, conciseness, and interoperability. Our expert developers leverage Kotlin's modern features to build robust, high-performance Android applications that fully utilize the platform's capabilities, ensuring faster development cycles and superior app quality.",
            icon: "https://upload.wikimedia.org/wikipedia/commons/0/06/Kotlin_Icon.svg"
        },
        {
            title: "Android",
            content: "Android is the world's leading mobile operating system with over 70% global market share, offering unparalleled reach for businesses. Our Android development expertise helps you tap into this massive user base through the Google Play Store ecosystem. We build scalable, secure applications that work seamlessly across thousands of Android devices worldwide.",
            icon: "https://upload.wikimedia.org/wikipedia/commons/6/64/Android_logo_2019_%28stacked%29.svg"
        },
        {
            title: "Jetpack Compose",
            content: "Jetpack Compose is Android's modern UI toolkit that revolutionizes mobile app development with declarative programming. Our developers utilize Compose's powerful component library to create stunning, responsive interfaces with less code and improved productivity. This cutting-edge framework enables us to deliver visually impressive, high-performance apps faster than traditional methods.",
            icon: "https://3.bp.blogspot.com/-VVp3WvJvl84/X0Vu6EjYqDI/AAAAAAAAPjU/ZOMKiUlgfg8ok8DY8Hc-ocOvGdB0z86AgCLcBGAsYHQ/s1600/jetpack%2Bcompose%2Bicon_RGB.png"
        }
    ],
    whatWeOffer: {
        [LANGUAGES.EN]: "Comprehensive end-to-end Android app development solutions customized to your business needs. Our certified Android developers leverage cutting-edge technologies including Jetpack Compose, Kotlin Coroutines, and Material Design to create innovative, high-performance applications. We deliver secure, scalable mobile solutions that engage users and drive business growth."
    },
    approach: {
        [LANGUAGES.EN]: "Our Android development approach combines technical excellence with user-centered design principles. We begin each project with in-depth research into your business objectives, target audience demographics, competitive landscape, and market positioning. This strategic foundation ensures we build Android applications that not only meet technical requirements but also deliver exceptional user experiences and measurable business value."
    },
    expertise: {
        [LANGUAGES.EN]: "Our award-winning Android development team stays at the forefront of mobile innovation, specializing in modern frameworks like Jetpack Compose, Android Architecture Components, and Material Design 3. We consistently exceed industry standards by implementing best practices in performance optimization, security, and user experience. Our diverse portfolio demonstrates proven expertise delivering feature-rich, visually stunning applications across healthcare, finance, e-commerce, and enterprise sectors."
    },
    process: {
        [LANGUAGES.EN]: "Our proven Android development process follows industry best practices from concept to deployment and beyond. We collaborate closely with stakeholders throughout every development phase including requirements gathering, UX/UI design, agile development sprints, quality assurance testing, Play Store deployment, and post-launch support. Regular communication, milestone reviews, and iterative feedback ensure your Android app meets expectations and launches successfully."
    },
    description: {
        [LANGUAGES.EN]: "<p><strong>1. Custom Android Solutions Tailored to Your Business</strong></p><p>Jetpack Compose enables highly customized, pixel-perfect user interfaces that differentiate your app in the competitive Android marketplace. Our development team crafts bespoke solutions aligned with your unique requirements, brand identity, and user expectations. We create standout Android applications that deliver exceptional user experiences and drive engagement.<br>&nbsp;</p><p><strong>2. Innovation Through Expertise and Passion</strong></p><p>Our developers are passionate Android specialists who stay current with the latest platform updates, design trends, and development techniques. We're committed to continuous learning in Jetpack Compose, Kotlin advancements, and Android best practices. This dedication to innovation enables us to deliver cutting-edge solutions that leverage the full potential of the Android ecosystem. <a href='/portfolio/'>View our successful Android projects</a>.<br>&nbsp;</p><p><strong>3. Transparent Collaboration Every Step</strong></p><p>Successful Android projects require clear communication and collaboration. We maintain complete transparency throughout development, providing regular updates, demo sessions, and progress reports. This collaborative methodology ensures the final product perfectly aligns with your vision, business goals, and user needs. Learn about our <a href='/our-process/'>development process</a>.<br>&nbsp;</p><p><strong>4. Agile Methodology for On-Time Delivery</strong></p><p>We employ Agile development practices to ensure flexibility, efficiency, and timely delivery. Our sprint-based approach allows for iterative improvements, requirement adjustments, and continuous quality assurance. This methodology keeps your Android project on schedule, within budget, and adaptable to changing business needs while maintaining the highest quality standards.<br>&nbsp;</p><p><strong>5. Exceptional Ongoing Support and Maintenance</strong></p><p>Our commitment extends beyond app launch. We provide comprehensive post-deployment support including bug fixes, performance optimization, security updates, OS compatibility updates, and feature enhancements. Your app's continued success is our priority. We offer flexible <a href='/services/android-development/'>maintenance packages</a> tailored to your needs.<br>&nbsp;</p><p><strong>6. Long-Term Partnership for Continued Success</strong></p><p>We build lasting relationships with our clients, supporting your Android app throughout its entire lifecycle. From initial launch to major version updates and market expansion, our team provides strategic guidance, technical expertise, and ongoing optimization to ensure sustained success in the dynamic mobile landscape.</p><p><br>Whether launching a new Android application or enhancing an existing app, our comprehensive Android Development services deliver results that exceed expectations. <a href='/contact/'>Contact us today</a> to discuss your mobile app project. Read our <a href='/testimonies/'>client success stories</a> to see the impact we've created.</p>"
    },
    shortDescription: {
        [LANGUAGES.EN]: "Professional Android app development services delivering successful mobile applications that meet your business requirements and exceed user expectations. Our expert developers use the latest Android technologies to create high-performance, scalable applications that thrive in today's competitive mobile landscape."
    },
    faqList: [
        {
            title: {
                [LANGUAGES.EN]: "What does professional Android app development cost?"
            },
            content: {
                [LANGUAGES.EN]: "Android development costs depend on app complexity, feature requirements, design sophistication, third-party integrations, and backend infrastructure needs. Professional Android applications typically start from $10,000 and scale based on functionality. <a href='/contact/'>Request a detailed quote</a> tailored to your specific project requirements and business objectives."
            }
        },
        {
            title: {
                [LANGUAGES.EN]: "What is the typical Android app development timeline?"
            },
            content: {
                [LANGUAGES.EN]: "Development timelines vary based on app complexity, feature scope, design requirements, and integration needs. Standard Android apps typically require 5-8 weeks from initial consultation to Play Store launch. Enterprise or complex applications may need 12-16 weeks or longer. During our <a href='/our-process/'>project assessment phase</a>, we provide detailed timelines with clear milestones to help you plan resources and launch dates effectively."
            }
        },
        {
            title: {
                [LANGUAGES.EN]: "What support is provided after app launch?"
            },
            content: {
                [LANGUAGES.EN]: "We offer comprehensive post-launch support including bug resolution, performance optimization, Android OS updates, security patches, and new feature development. Support packages are customized based on your app's complexity and requirements. We provide ongoing monitoring, analytics implementation, and user feedback integration. Learn about our <a href='/services/android-development/'>maintenance and support services</a>."
            }
        },
        {
            title: {
                [LANGUAGES.EN]: "Will I receive full ownership of the Android app?"
            },
            content: {
                [LANGUAGES.EN]: "Yes! Upon final payment, you receive complete ownership rights including source code, design assets, documentation, and all intellectual property created during development. We provide comprehensive handover documentation and technical training. Unless otherwise agreed, we reserve the right to feature the app in our <a href='/portfolio/'>project portfolio</a>. All source files, API keys, and Play Store credentials are transferred to you."
            }
        },
    ]
};

const IOS_DEVELOPMENT = {
    movie: "D05KWNjGtwk",
    path: "/ios-development",
    title: {
        [LANGUAGES.EN]: "<p>Expert iOS App Development Services</p>"
    },
    description: {
        [LANGUAGES.EN]: "<p><strong>1. Custom iOS Solutions with Swift and SwiftUI</strong></p><p>Swift and SwiftUI empower us to create highly customized, premium iOS user interfaces that stand out in the competitive App Store. Our expert iOS development team crafts tailored solutions that precisely match your requirements, brand standards, and user expectations, ensuring your iPhone and iPad applications deliver exceptional experiences that drive engagement and retention.<br>&nbsp;</p><p><strong>2. Innovation Through iOS Expertise</strong></p><p>Our developers are passionate iOS specialists deeply versed in the latest Apple technologies, design guidelines, and development best practices. We maintain cutting-edge expertise in Swift, SwiftUI, iOS frameworks, and Apple Human Interface Guidelines. This commitment to continuous learning enables us to leverage the full power of Apple's ecosystem to deliver innovative, future-proof mobile solutions. Explore our <a href='/portfolio/'>iOS development portfolio</a>.<br>&nbsp;</p><p><strong>3. Transparent Collaboration for Superior iOS Apps</strong></p><p>Successful iOS development requires close partnership and clear communication. We prioritize transparency throughout every development phase, keeping you informed with regular updates, prototype demos, and milestone reviews. This collaborative approach ensures your iOS application perfectly aligns with your business vision, brand identity, and user needs while maintaining Apple's high-quality standards.<br>&nbsp;</p><p><strong>4. Agile iOS Development Methodology</strong></p><p>We employ proven Agile development practices optimized for iOS projects to ensure flexibility, quality, and timely delivery. Our iterative sprint-based approach enables continuous refinement, requirement adaptation, and ongoing quality assurance. This methodology keeps your iOS project on track, within budget, and responsive to evolving business needs while maintaining exceptional quality throughout development.<br>&nbsp;</p><p><strong>5. Comprehensive Post-Launch Support</strong></p><p>Our commitment to your iOS app extends well beyond App Store launch. We provide dedicated ongoing support including bug fixes, performance optimization, iOS version updates, security enhancements, and feature additions. Your application's sustained success is our priority. We offer flexible support packages tailored to your needs. Learn about our <a href='/services/ios-development/'>iOS maintenance services</a>.<br>&nbsp;</p><p><strong>6. Long-Term iOS Partnership</strong></p><p>We're dedicated to building enduring relationships with our clients. Our team supports your iOS application throughout its entire lifecycle, from initial launch through major updates, feature expansions, and market growth. We provide strategic guidance, technical expertise, and continuous optimization to ensure your app thrives in Apple's dynamic ecosystem.</p><p><br>Whether you're launching a new iOS application or enhancing an existing iPhone app, our comprehensive iOS Development services with Swift and SwiftUI are designed to exceed your expectations. <a href='/contact/'>Contact us today</a> to transform your iOS vision into reality. View our <a href='/testimonies/'>client success stories</a> and discover why leading businesses trust us for iOS development.</p>"
    },
    shortDescription: {
        [LANGUAGES.EN]: "We specialize in creating exceptional iOS applications that transform your digital vision into reality. Our experienced iOS development team delivers cutting-edge, user-centric mobile solutions for iPhone, iPad, and Apple Watch. From feature-rich consumer apps to powerful enterprise solutions, we have the expertise and creativity to build premium iOS experiences."
    },
    media: [
        `${SERVICES_IMAGES_BASE_PATH}ios-development/1.jpg`,
        `${SERVICES_IMAGES_BASE_PATH}ios-development/2.jpg`
    ],
    technologies: [
        {
            title: "iOS",
            content: "iOS is Apple's premium mobile operating system powering iPhone, iPad, and Apple Watch devices worldwide. With a highly engaged, loyal user base and industry-leading App Store, iOS offers exceptional opportunities for businesses to reach affluent consumers and drive revenue. Our iOS development expertise helps you tap into this lucrative market with sophisticated, high-performing applications.",
            icon: "https://upload.wikimedia.org/wikipedia/commons/c/ca/IOS_logo.svg"
        },
        {
            title: "Swift",
            content: "Swift is Apple's powerful, modern programming language specifically designed for iOS, macOS, and Apple ecosystem development. Our certified Swift developers leverage its safety features, performance optimizations, and elegant syntax to build robust, maintainable applications. Swift enables us to create secure, efficient iOS apps that deliver exceptional user experiences and superior performance.",
            icon: "https://ithd.ae/static/swift-svgrepo-com.svg"
        }
    ],
    whatWeOffer: {
        [LANGUAGES.EN]: "Comprehensive iOS development solutions tailored to your business objectives and user needs. Our skilled professionals utilize cutting-edge Apple technologies including SwiftUI, Combine framework, Core Data, and ARKit to create innovative, visually stunning iOS applications. Whether building elegant user interfaces, optimizing app performance, or ensuring seamless device integration, we deliver iOS solutions that exceed expectations."
    },
    approach: {
        [LANGUAGES.EN]: "Our iOS development philosophy centers on creating extraordinary applications that seamlessly blend cutting-edge Apple technologies with user-centric design principles. We begin with comprehensive discovery of your business goals, target audience insights, and competitive positioning. This strategic foundation enables us to craft iOS applications that not only meet technical requirements but deliver meaningful value and exceptional user experiences."
    },
    expertise: {
        [LANGUAGES.EN]: "Our elite iOS development team leads the industry in Apple innovation. We specialize in advanced frameworks like SwiftUI, Combine, Core ML, and ARKit, consistently exceeding industry benchmarks. Our extensive portfolio showcases proven expertise delivering user-focused, feature-rich, visually captivating applications across diverse industries including healthcare, finance, retail, and entertainment. We're committed to iOS excellence."
    },
    process: {
        [LANGUAGES.EN]: "Our proven iOS development methodology provides a reliable path to App Store success. We start by understanding your target users and desired outcomes, then create a customized development roadmap aligned with your vision. Throughout every phase—from concept and design to development, testing, and launch—we collaborate closely with you, ensuring active involvement and transparent communication for optimal results."
    },
    faqList: [
        {
            title: {
                [LANGUAGES.EN]: "What is the cost of professional iOS development?"
            },
            content: {
                [LANGUAGES.EN]: "iOS development costs vary based on app complexity, feature requirements, design customization, backend infrastructure, and third-party integrations. Professional iOS applications typically start from $10,000 and scale according to functionality and scope. <a href='/contact/'>Contact our team</a> for a detailed estimate tailored to your specific project requirements and business goals."
            }
        },
        {
            title: {
                [LANGUAGES.EN]: "How long does iOS app development take?"
            },
            content: {
                [LANGUAGES.EN]: "iOS development timelines depend on project complexity, feature scope, design requirements, testing needs, and App Store review processes. Standard iOS applications typically require 5-8 weeks from kickoff to App Store submission. Complex enterprise apps may need 12-16 weeks or more. During our <a href='/our-process/'>initial assessment</a>, we provide accurate timeline estimates with detailed milestones to facilitate effective planning and resource allocation."
            }
        },
        {
            title: {
                [LANGUAGES.EN]: "What ongoing support do you provide post-launch?"
            },
            content: {
                [LANGUAGES.EN]: "We offer comprehensive ongoing support including bug fixes, iOS version compatibility updates, performance optimization, security patches, and feature enhancements. Support packages are customized to your app's complexity and business requirements. We provide App Store management, analytics monitoring, and continuous improvement recommendations. Explore our <a href='/services/ios-development/'>iOS support services</a>."
            }
        },
        {
            title: {
                [LANGUAGES.EN]: "Will I own all rights to the iOS app?"
            },
            content: {
                [LANGUAGES.EN]: "Absolutely! Upon final payment, you receive complete ownership of all project deliverables including source code, design files, documentation, and intellectual property. We provide comprehensive handover materials and training. Unless otherwise specified, we reserve the right to showcase the application in our <a href='/portfolio/'>project showcase</a>. All source files, certificates, and App Store credentials are transferred to you upon completion."
            }
        },
    ]
};

const UX_DESIGN = {
    movie: "Uo82k0fHkko",
    path: "/ux-ui-design",
    title: {
        [LANGUAGES.EN]: "Professional UX/UI Design Services"
    },
    media: [
        `${SERVICES_IMAGES_BASE_PATH}ui-ux/1.jpg`,
        `${SERVICES_IMAGES_BASE_PATH}ui-ux/2.jpg`
    ],
    technologies: [
        {
            title: "Figma",
            content: "Leverage Figma's powerful cloud-based design platform for seamless team collaboration and rapid prototyping. Our designers utilize real-time editing features to create responsive, user-centric interfaces for web and mobile applications, ensuring consistent design systems and efficient workflows.",
            icon: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg"
        },
        {
            title: "Adobe XD",
            content: "Harness Adobe XD's industry-leading capabilities for professional interface design and interactive prototyping. We leverage its advanced features for creating intuitive user experiences, collaborative design workflows, and seamless handoff to development teams, ensuring pixel-perfect implementation.",
            icon: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Adobe_XD_CC_icon.svg"
        },
        {
            title: "Sketch",
            content: "Utilize Sketch's robust vector-based design toolkit for crafting scalable user interfaces and design systems. Our team employs advanced plugins and integrations to streamline workflows, maintain design consistency, and deliver production-ready assets for digital products.",
            icon: "https://upload.wikimedia.org/wikipedia/commons/5/59/Sketch_Logo.svg"
        }
    ],
    whatWeOffer: {
        [LANGUAGES.EN]: "We deliver data-driven UX/UI design solutions that combine aesthetic excellence with conversion optimization. Our designs enhance user engagement, improve accessibility standards, and align with SEO best practices to maximize your digital presence and business growth."
    },
    approach: {
        [LANGUAGES.EN]: "Our user-centered design methodology integrates comprehensive research, strategic wireframing, and iterative prototyping to create exceptional digital experiences. We collaborate closely with your team throughout the design process, ensuring seamless integration with your <a href='/services/web-development/'>web development</a> and <a href='/services/android-development/'>mobile app development</a> initiatives."
    },
    expertise: {
        [LANGUAGES.EN]: "With extensive experience in enterprise-level UX/UI design, we specialize in creating intuitive interfaces that drive measurable results. Our portfolio spans <a href='/portfolio/banking-mobile-app/'>fintech applications</a>, e-commerce platforms, and SaaS products, consistently delivering designs that enhance user satisfaction and business metrics."
    },
    process: {
        [LANGUAGES.EN]: "Our systematic design process begins with in-depth user research and competitive analysis, followed by information architecture planning, low and high-fidelity prototyping, usability testing, and iterative refinement. We maintain alignment with current design trends while prioritizing usability and accessibility standards."
    },
    description: {
        [LANGUAGES.EN]: "<p><strong>1. Strategic UX/UI Design Excellence</strong><br>Transform your digital products with our evidence-based design approach. We combine user psychology, interaction design principles, and conversion optimization techniques to create interfaces that engage users and achieve business objectives. Explore our <a href='/portfolio/design/'>completed design projects</a> to see our expertise in action.<br>&nbsp;</p><p><strong>2. Comprehensive Design Process</strong><br>Our structured methodology encompasses discovery workshops, user persona development, journey mapping, wireframing, visual design, prototyping, and usability testing. Each phase includes stakeholder collaboration and iterative feedback integration to ensure optimal outcomes.<br>&nbsp;</p><p><strong>3. Custom-Tailored Design Solutions</strong><br>We develop bespoke design systems and component libraries that reinforce your brand identity while ensuring scalability across platforms. Our solutions integrate seamlessly with your existing technology stack, including <a href='/services/cloud-solutions/'>cloud infrastructure</a> and development frameworks.<br>&nbsp;</p><p><strong>4. Industry-Leading Design Trends</strong><br>Stay competitive with designs incorporating motion design, micro-interactions, accessibility features (WCAG compliance), and responsive layouts optimized for all devices. We continuously evaluate emerging patterns in user behavior and interface design.<br>&nbsp;</p><p><strong>5. Seamless Development Collaboration</strong><br>Our design handoff process includes detailed specifications, asset optimization, and direct collaboration with development teams. We provide ongoing support during implementation, ensuring design fidelity and addressing technical considerations efficiently.<br>&nbsp;</p><p><strong>6. End-to-End Design Partnership</strong><br>From initial concept through launch and beyond, we serve as your strategic design partner. Our services complement our <a href='/services/ios-development/'>iOS development</a> and <a href='/services/business-automation/'>business automation</a> offerings, providing comprehensive digital solutions.</p>"
    },
    shortDescription: {
        [LANGUAGES.EN]: "Our award-winning design team creates conversion-focused interfaces that resonate with your target audience. Through comprehensive brand analysis and user research, we develop intuitive navigation systems and compelling visual hierarchies that guide visitors toward desired actions while reinforcing brand recognition."
    },
    faqList: [
        {
            title: {
                [LANGUAGES.EN]: "What is the investment for professional UX/UI design services?"
            },
            content: {
                [LANGUAGES.EN]: "Professional UX/UI design pricing varies based on project complexity, number of screens, research requirements, and deliverable scope. Typical projects range from $3,000 for basic design work to $15,000+ for comprehensive design systems. Contact us for a detailed quote tailored to your specific requirements."
            }
        },
        {
            title: {
                [LANGUAGES.EN]: "What is the timeline for UX/UI design projects?"
            },
            content: {
                [LANGUAGES.EN]: "Design timelines depend on project scope, revision rounds, stakeholder availability, and complexity. Standard projects typically require 3-6 weeks from discovery to final deliverables. Complex design systems or enterprise applications may extend to 8-12 weeks. We provide detailed project timelines during our initial consultation."
            }
        },
        {
            title: {
                [LANGUAGES.EN]: "What ongoing support is available post-launch?"
            },
            content: {
                [LANGUAGES.EN]: "We offer comprehensive post-launch support including design iterations based on user feedback, A/B testing consultation, design system maintenance, and additional screen designs. Support packages are customized based on your evolving needs and can be bundled with our <a href='/services/web-development/'>development services</a>."
            }
        },
        {
            title: {
                [LANGUAGES.EN]: "Who owns the intellectual property rights?"
            },
            content: {
                [LANGUAGES.EN]: "Upon final payment, you receive complete ownership of all design deliverables, including source files, design systems, and assets. We retain portfolio rights to showcase the work publicly unless confidentiality agreements specify otherwise. All files are delivered in industry-standard formats for seamless handoff."
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
            [LANGUAGES.EN]: "Enterprise Cloud Solutions & Infrastructure"
        },
        media: [
            `${SERVICES_IMAGES_BASE_PATH}cloud-solutions/1.jpg`,
            `${SERVICES_IMAGES_BASE_PATH}cloud-solutions/2.jpg`
        ],
        technologies: [
            {
                title: "Google Cloud Platform",
                content: "Deploy scalable, secure infrastructure using Google Cloud Platform's enterprise-grade services. We architect solutions leveraging compute engine, cloud storage, BigQuery analytics, and machine learning APIs to build resilient, high-performance applications with global reach.",
                icon: "https://ithd.ae/static/google-cloud-svgrepo-com.svg"
            },
            {
                title: "Docker",
                content: "Implement containerization strategies with Docker for consistent deployment across environments. We create optimized container images, orchestrate multi-container applications, and establish CI/CD pipelines that accelerate development cycles and improve operational reliability.",
                icon: "https://ithd.ae/static/docker-svgrepo-com.svg"
            },
            {
                title: "Serverless & Cloud Functions",
                content: "Leverage serverless architecture for cost-efficient, auto-scaling applications. We design event-driven solutions using cloud functions that eliminate infrastructure management, reduce operational costs, and provide instant scalability for variable workloads.",
                icon: "https://ithd.ae/static/serverless-svgrepo-com.svg"
            }
        ],
        whatWeOffer: {
            [LANGUAGES.EN]: "We architect enterprise-grade cloud solutions that optimize performance, security, and cost-efficiency. Our services include cloud migration strategy, infrastructure design, disaster recovery planning, and ongoing optimization to ensure your business leverages cloud technology for maximum competitive advantage."
        },
        approach: {
            [LANGUAGES.EN]: "Our cloud strategy begins with comprehensive infrastructure assessment and business objectives alignment. We design scalable architectures tailored to your workload requirements, implementing best practices for security, compliance, and cost optimization throughout the migration and deployment process."
        },
        expertise: {
            [LANGUAGES.EN]: "Our certified cloud architects bring extensive experience in multi-cloud environments, DevOps practices, and enterprise migrations. We've successfully deployed solutions for industries requiring high availability, regulatory compliance, and global scalability, integrating seamlessly with your <a href='/services/web-development/'>web applications</a> and <a href='/services/business-automation/'>business systems</a>."
        },
        process: {
            [LANGUAGES.EN]: "We follow a proven methodology encompassing discovery and assessment, architecture design, proof of concept development, phased migration execution, testing and validation, optimization, and knowledge transfer. Regular stakeholder communication ensures alignment with business objectives throughout each phase."
        },
        description: {
            [LANGUAGES.EN]: "<p><strong>1. Cloud Transformation Strategy</strong><br>Accelerate your digital transformation with strategic cloud adoption. Our consultants evaluate your current infrastructure, identify optimization opportunities, and develop comprehensive roadmaps for cloud migration that minimize disruption while maximizing business value and ROI.<br>&nbsp;</p><p><strong>2. Comprehensive Cloud Infrastructure Services</strong><br>We provide end-to-end cloud services including infrastructure as a service (IaaS), platform as a service (PaaS), and software as a service (SaaS) implementation. Our solutions ensure high availability, automatic scaling, and cost optimization through intelligent resource management.<br>&nbsp;</p><p><strong>3. Enhanced Productivity & Collaboration</strong><br>Cloud infrastructure enables seamless remote access, real-time collaboration, and centralized data management. We implement secure access controls, backup strategies, and collaboration tools that empower distributed teams while maintaining data integrity and security compliance.<br>&nbsp;</p><p><strong>4. Industry-Specific Cloud Solutions</strong><br>Every organization has unique requirements. We customize cloud architectures for specific use cases including <a href='/portfolio/banking-mobile-app/'>financial services</a>, healthcare, e-commerce, and SaaS platforms. Our solutions address regulatory compliance, data sovereignty, and performance requirements specific to your industry.<br>&nbsp;</p><p><strong>5. Certified Cloud Expertise</strong><br>Our team holds certifications across major cloud platforms and stays current with emerging technologies. We apply proven architectural patterns, security frameworks, and cost optimization strategies developed through hundreds of successful cloud implementations. View our <a href='/portfolio/business-automation/'>automation projects</a> for examples.<br>&nbsp;</p><p><strong>6. Future-Ready Cloud Innovation</strong><br>The cloud ecosystem offers unlimited growth potential. Whether migrating legacy systems, optimizing existing cloud deployments, or building cloud-native applications, we provide strategic guidance and technical expertise. Our services integrate with <a href='/services/android-development/'>mobile development</a> and <a href='/services/ios-development/'>iOS solutions</a> for comprehensive digital ecosystems.</p>"
        },
        shortDescription: {
            [LANGUAGES.EN]: "Our structured cloud implementation process ensures smooth transitions from legacy infrastructure to modern cloud environments. We conduct thorough assessments, design robust architectures, execute controlled migrations, and provide ongoing optimization to maximize your cloud investment ROI."
        },
        faqList: [
            {
                title: {
                    [LANGUAGES.EN]: "What is the cost of cloud solution implementation?"
                },
                content: {
                    [LANGUAGES.EN]: "Cloud solution costs depend on infrastructure complexity, migration scope, data volume, security requirements, and ongoing management needs. Projects typically start at $10,000 for basic implementations and scale based on requirements. We provide transparent pricing models including one-time migration costs and ongoing operational expenses."
                }
            },
            {
                title: {
                    [LANGUAGES.EN]: "How long does cloud migration take?"
                },
                content: {
                    [LANGUAGES.EN]: "Migration timelines vary based on current infrastructure complexity, data volumes, application dependencies, and testing requirements. Typical implementations range from 5-12 weeks for standard migrations to 6+ months for complex enterprise environments. We provide detailed project plans with phased milestones during our assessment phase."
                }
            },
            {
                title: {
                    [LANGUAGES.EN]: "What ongoing support and maintenance is provided?"
                },
                content: {
                    [LANGUAGES.EN]: "We offer comprehensive managed services including 24/7 monitoring, performance optimization, security updates, backup management, disaster recovery testing, and cost optimization reviews. Support packages are customized to your SLA requirements and can integrate with our <a href='/services/web-development/'>development services</a> for application-level support."
                }
            },
            {
                title: {
                    [LANGUAGES.EN]: "What are the ownership and access rights?"
                },
                content: {
                    [LANGUAGES.EN]: "You retain complete ownership of all cloud resources, data, and infrastructure configurations. Upon project completion, we provide comprehensive documentation, architecture diagrams, access credentials, and knowledge transfer. We can showcase anonymized case studies with your permission while maintaining strict confidentiality of proprietary information."
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
            [LANGUAGES.EN]: "Professional Logo Design & Brand Identity"
        },
        description: {
            [LANGUAGES.EN]: "<p><strong>Strategic Logo Design That Defines Your Brand</strong><br>Our professional logo design services create memorable visual identities that communicate your brand values and resonate with target audiences. We employ strategic design thinking, market research, and creative expertise to develop logos that stand out in competitive markets and build lasting brand recognition.<br>&nbsp;</p><p><strong>Psychology-Driven Design Approach</strong><br>Understanding that effective logos transcend mere aesthetics, we apply color psychology, typography principles, and visual hierarchy to create marks that evoke intended emotional responses. Each design decision is purposeful, ensuring your logo communicates professionalism, trustworthiness, and brand personality at first glance.<br>&nbsp;</p><p><strong>Collaborative Design Process</strong><br>Our iterative process values your input at every stage. We begin with discovery sessions to understand your brand positioning, competitive landscape, and target demographics. Through concept development, refinement rounds, and stakeholder feedback integration, we ensure the final logo authentically represents your vision and market position.<br>&nbsp;</p><p><strong>Timeless Visual Identity Creation</strong><br>We design logos with longevity in mind, balancing contemporary aesthetics with timeless design principles. Our portfolio demonstrates consistent success in creating memorable marks that maintain relevance across years of market evolution. Explore our <a href='/portfolio/logo/'>completed logo projects</a> to see our versatility across industries.<br>&nbsp;</p><p><strong>Comprehensive Brand Identity Systems</strong><br>Beyond logo creation, we develop complete brand identity guidelines including color palettes, typography systems, and usage standards. These comprehensive packages ensure consistent brand application across all touchpoints, from <a href='/services/web-development/'>websites</a> to <a href='/services/android-development/'>mobile applications</a> and print materials.<br>&nbsp;</p><p><strong>Your Strategic Branding Partner</strong><br>Partner with us to establish a visual identity that differentiates your business and builds brand equity. Our logo design services integrate seamlessly with our <a href='/services/ux-ui-design/'>UI/UX design</a> and <a href='/services/business-automation/'>business solutions</a>, providing cohesive branding across your entire digital ecosystem. Contact our team to begin your branding journey.</p>"
        },
        media: [
            `${SERVICES_IMAGES_BASE_PATH}logo-making/1.jpg`,
            `${SERVICES_IMAGES_BASE_PATH}logo-making/2.jpg`
        ],
        technologies: [
            {
                title: "Figma",
                content: "Utilize Figma's collaborative design platform for iterative logo development and brand system creation. Real-time stakeholder feedback capabilities enable efficient approval workflows, while vector-based tools ensure scalability across all applications from mobile icons to large-format displays.",
                icon: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg"
            },
            {
                title: "Adobe XD",
                content: "Leverage Adobe XD's precision vector tools for creating versatile logo designs that maintain quality at any scale. We utilize advanced features for presenting logo mockups in context, demonstrating application across various media, and facilitating client review processes.",
                icon: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Adobe_XD_CC_icon.svg"
            },
            {
                title: "Sketch",
                content: "Employ Sketch's professional-grade design tools for crafting sophisticated brand identities. Advanced symbol libraries and export features enable efficient creation of comprehensive brand guidelines and asset packages optimized for web, print, and digital applications.",
                icon: "https://upload.wikimedia.org/wikipedia/commons/5/59/Sketch_Logo.svg"
            }
        ],
        whatWeOffer: {
            [LANGUAGES.EN]: "We deliver strategic logo design and complete brand identity systems that establish market presence and drive recognition. Our services include concept development, competitive analysis, design iteration, file preparation, and brand guideline creation tailored to your business objectives and target market positioning."
        },
        approach: {
            [LANGUAGES.EN]: "Our brand-first approach begins with comprehensive discovery including competitive analysis, target audience research, and brand positioning workshops. We develop multiple concepts based on strategic insights, refine selected directions through collaborative feedback, and deliver production-ready assets with comprehensive usage guidelines."
        },
        expertise: {
            [LANGUAGES.EN]: "Our senior designers bring decades of combined branding experience across diverse industries including technology, finance, hospitality, and retail. We've created identities for startups through enterprise organizations, consistently delivering logos that strengthen market positioning and support long-term brand growth. See our <a href='/portfolio/tobacco-branding/'>branding portfolio</a>."
        },
        process: {
            [LANGUAGES.EN]: "We follow a systematic design process: discovery and research, strategic brief development, concept sketching, digital refinement, presentation of options, revision rounds based on feedback, finalization, and comprehensive deliverable package preparation including vector files, color variations, and application guidelines."
        },
        shortDescription: {
            [LANGUAGES.EN]: "Our strategic logo design services transform brand concepts into powerful visual identities. Through meticulous research, creative exploration, and iterative refinement, we craft distinctive logos that capture brand essence, communicate core values, and create memorable impressions that drive customer recognition and loyalty."
        },
        faqList: [
            {
                title: {
                    [LANGUAGES.EN]: "What is the investment for professional logo design?"
                },
                content: {
                    [LANGUAGES.EN]: "Professional logo design pricing reflects complexity, concept quantity, revision rounds, and deliverable scope. Projects typically range from $1,000 for essential logo packages to $5,000+ for comprehensive brand identity systems. Investment includes research, concepts, revisions, and complete file packages. Request a customized quote for your project."
                }
            },
            {
                title: {
                    [LANGUAGES.EN]: "What is the typical timeline for logo design?"
                },
                content: {
                    [LANGUAGES.EN]: "Logo design projects typically span 1-3 weeks depending on complexity and revision requirements. Timeline includes discovery (2-3 days), concept development (3-5 days), presentation and feedback (1-2 days), refinement rounds (3-5 days), and final file preparation (1-2 days). Expedited timelines available for urgent requirements."
                }
            },
            {
                title: {
                    [LANGUAGES.EN]: "What support is provided after logo delivery?"
                },
                content: {
                    [LANGUAGES.EN]: "Post-delivery support includes minor adjustments, additional file format exports, and application guidance. We offer brand identity expansion services for business cards, letterheads, and digital assets. Ongoing branding support can be combined with our <a href='/services/web-development/'>web design</a> services for cohesive brand implementation."
                }
            },
            {
                title: {
                    [LANGUAGES.EN]: "What are the intellectual property and usage rights?"
                },
                content: {
                    [LANGUAGES.EN]: "Upon final payment, you receive full ownership and exclusive rights to your logo and all design variations. Comprehensive file packages include vector formats (AI, EPS, SVG), high-resolution rasters (PNG, JPG), and various color versions. We retain portfolio rights unless confidentiality agreements specify otherwise."
                }
            },
        ]
    },
    {
        movie: "9PVzNwsT400",
        path: "/business-automation",
        title: {
            [LANGUAGES.EN]: "Custom CRM & Business Automation Solutions"
        },
        description: {
            [LANGUAGES.EN]: "<p><strong>1. Digital Transformation Through Automation</strong><br>At ITHD, we engineer custom business automation solutions that streamline operations, eliminate redundancies, and accelerate growth. Our CRM platforms and automated workflows transform how organizations manage customer relationships, sales pipelines, and internal processes, delivering measurable ROI and competitive advantages.<br>&nbsp;</p><p><strong>2. Custom CRM Development</strong><br>We build tailored CRM systems that align perfectly with your business processes, eliminating the limitations of off-the-shelf solutions. Our platforms feature intuitive interfaces, advanced analytics, sales automation, customer segmentation, and integration capabilities that unify your technology ecosystem for enhanced productivity.<br>&nbsp;</p><p><strong>3. Intelligent Business Process Automation</strong><br>Transform manual workflows into automated systems that reduce operational costs and human error. We implement intelligent automation for lead management, email marketing, reporting, document generation, approval workflows, and data synchronization across platforms, freeing your team for strategic initiatives.<br>&nbsp;</p><p><strong>4. Industry-Specific Solutions</strong><br>Every business has unique operational requirements. We develop customized automation solutions for sales teams, customer service departments, marketing operations, and back-office functions. Our systems address industry-specific challenges in real estate, professional services, retail, and B2B enterprises. View our <a href='/portfolio/business-automation/'>automation case studies</a>.<br>&nbsp;</p><p><strong>5. Integration & Scalability Expertise</strong><br>Our solutions seamlessly integrate with existing tools including email platforms, accounting systems, marketing automation, and communication tools. We architect scalable systems that grow with your business, incorporating <a href='/services/cloud-solutions/'>cloud infrastructure</a> for reliability and accessibility across devices.<br>&nbsp;</p><p><strong>6. Complete Digital Ecosystem Development</strong><br>Beyond CRM and automation, we provide comprehensive digital solutions including <a href='/services/web-development/'>web platforms</a>, <a href='/services/ios-development/'>mobile applications</a>, and <a href='/services/android-development/'>Android solutions</a>. Our integrated approach ensures all systems work cohesively to support your business objectives and enhance customer experiences.</p>"
        },
        media: [
            `${SERVICES_IMAGES_BASE_PATH}crm/1.jpg`,
            `${SERVICES_IMAGES_BASE_PATH}crm/2.jpg`
        ],
        technologies: [
            {
                title: "React.js",
                content: "Build dynamic, responsive CRM interfaces using React's component-based architecture. We leverage React's virtual DOM and state management for creating high-performance user interfaces that handle complex data interactions while maintaining excellent user experience across all devices.",
                icon: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
            },
            {
                title: "Next.js",
                content: "Develop enterprise-grade web applications using Next.js for optimal performance, SEO advantages, and scalable architecture. Server-side rendering and static generation capabilities ensure fast load times and excellent search engine visibility for customer-facing portals and internal systems.",
                icon: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg"
            },
            {
                title: "Webpack",
                content: "Optimize application build processes with Webpack's advanced bundling and code-splitting capabilities. We configure efficient development workflows and production builds that minimize load times, improve caching strategies, and enhance overall application performance.",
                icon: "https://webpack.js.org/icon-square-small.9e8aff7a67a5dd20.svg"
            },
            {
                title: "Google Cloud Platform",
                content: "Deploy secure, scalable automation solutions on Google Cloud Platform's reliable infrastructure. Leverage managed databases, serverless functions, and machine learning APIs to build intelligent systems that scale automatically with demand while maintaining cost efficiency.",
                icon: "https://ithd.ae/static/google-cloud-svgrepo-com.svg"
            },
            {
                title: "Docker",
                content: "Implement containerized deployment strategies for consistent environments across development, testing, and production. Docker enables rapid deployment, easy scaling, and simplified maintenance of complex business automation systems with multiple integrated services.",
                icon: "https://ithd.ae/static/docker-svgrepo-com.svg"
            },
            {
                title: "Serverless & Cloud Functions",
                content: "Build cost-effective automation workflows using serverless architecture. Event-driven functions handle background tasks, data processing, notifications, and integrations automatically, scaling instantly to meet demand without infrastructure management overhead.",
                icon: "https://ithd.ae/static/serverless-svgrepo-com.svg"
            },
            {
                title: "Kotlin",
                content: "Develop robust Android CRM applications using Kotlin's modern language features. Type-safe code, coroutines for asynchronous operations, and seamless Java interoperability enable creation of reliable, high-performance mobile business tools for field teams.",
                icon: "https://upload.wikimedia.org/wikipedia/commons/0/06/Kotlin_Icon.svg"
            },
            {
                title: "Android",
                content: "Extend CRM capabilities to Android devices for mobile workforce enablement. Native Android applications provide offline functionality, real-time synchronization, and device integration features that empower sales and service teams with access to critical business data anywhere.",
                icon: "https://upload.wikimedia.org/wikipedia/commons/6/64/Android_logo_2019_%28stacked%29.svg"
            },
            {
                title: "Jetpack Compose",
                content: "Create modern, intuitive Android interfaces using Jetpack Compose's declarative UI framework. Simplified development processes and rich component libraries enable rapid creation of polished, user-friendly CRM applications that enhance mobile productivity.",
                icon: "https://3.bp.blogspot.com/-VVp3WvJvl84/X0Vu6EjYqDI/AAAAAAAAPjU/ZOMKiUlgfg8ok8DY8Hc-ocOvGdB0z86AgCLcBGAsYHQ/s1600/jetpack%2Bcompose%2Bicon_RGB.png"
            },
            {
                title: "iOS",
                content: "Deliver premium CRM experiences on iOS devices for organizations serving Apple ecosystem users. Native iOS applications leverage platform capabilities including biometric authentication, push notifications, and seamless iCloud integration for executive and mobile teams.",
                icon: "https://upload.wikimedia.org/wikipedia/commons/c/ca/IOS_logo.svg"
            },
            {
                title: "Swift",
                content: "Build powerful, secure iOS CRM applications using Swift's modern programming paradigm. Native performance, safety features, and SwiftUI framework enable development of sophisticated mobile business tools that meet enterprise security and usability standards.",
                icon: "https://ithd.ae/static/swift-svgrepo-com.svg"
            }
        ],
        whatWeOffer: {
            [LANGUAGES.EN]: "We deliver end-to-end business automation solutions including custom CRM development, workflow automation, system integration, mobile application development, and ongoing optimization. Our services transform operational efficiency, enhance customer relationships, and provide actionable insights through advanced analytics and reporting dashboards."
        },
        approach: {
            [LANGUAGES.EN]: "Our methodology begins with comprehensive process analysis and pain point identification. We design automation strategies that align with your business objectives, develop intuitive systems using agile methodologies, integrate with existing tools, provide training, and offer continuous improvement support based on usage analytics."
        },
        expertise: {
            [LANGUAGES.EN]: "Our team combines business analysis expertise with technical proficiency across full-stack development, database architecture, and system integration. We've successfully delivered automation solutions for diverse industries, consistently achieving significant improvements in productivity, customer satisfaction, and revenue generation. Explore our <a href='/portfolio/'>portfolio</a>."
        },
        process: {
            [LANGUAGES.EN]: "We follow a proven implementation framework: discovery and requirements gathering, process mapping and optimization design, system architecture planning, iterative development with regular demos, testing and quality assurance, user training, phased deployment, and post-launch optimization based on feedback and analytics."
        },
        shortDescription: {
            [LANGUAGES.EN]: "CRM and business automation represent strategic investments in operational excellence. Our custom solutions empower organizations to nurture customer relationships systematically, automate repetitive tasks, gain actionable insights from data analytics, and create scalable processes that support sustainable growth and competitive differentiation."
        },
        faqList: [
            {
                title: {
                    [LANGUAGES.EN]: "What is the investment for custom CRM development?"
                },
                content: {
                    [LANGUAGES.EN]: "Custom CRM development costs vary based on feature complexity, user count, integration requirements, and platform scope (web, mobile, or both). Projects typically range from $60,000 for core CRM functionality to $200,000+ for comprehensive automation platforms with advanced features. We provide detailed proposals following requirements analysis."
                }
            },
            {
                title: {
                    [LANGUAGES.EN]: "What is the timeline for CRM implementation?"
                },
                content: {
                    [LANGUAGES.EN]: "Implementation timelines depend on system complexity, integration scope, customization requirements, and data migration needs. Standard CRM projects require 25-35 weeks from discovery through deployment. Enterprise implementations with extensive customization may extend to 40+ weeks. Detailed project plans are provided during initial assessment."
                }
            },
            {
                title: {
                    [LANGUAGES.EN]: "What ongoing support and maintenance is included?"
                },
                content: {
                    [LANGUAGES.EN]: "Comprehensive maintenance packages include bug fixes, security updates, performance monitoring, feature enhancements, user training, and technical support. We offer tiered support levels based on SLA requirements. Integration with our <a href='/services/cloud-solutions/'>cloud services</a> ensures system reliability and continuous optimization."
                }
            },
            {
                title: {
                    [LANGUAGES.EN]: "What are the ownership and licensing terms?"
                },
                content: {
                    [LANGUAGES.EN]: "Upon final payment, you receive complete ownership of custom-developed code, databases, and intellectual property. Comprehensive documentation, source code, and database schemas are delivered for full system control. We retain rights to showcase anonymized case studies while respecting confidentiality agreements and proprietary business processes."
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
            [LANGUAGES.EN]: "Product Management System (PMS) for Mobile – Streamlined Product Development"
        },
        description: {
            [LANGUAGES.EN]: `
                A <strong>Product Management System (PMS)</strong> is a powerful software solution designed to empower product managers and cross-functional teams throughout the entire product lifecycle. From ideation to launch and beyond, our mobile-optimized PMS enables efficient management of critical processes, ensuring faster time-to-market and superior product quality.<br /><br />
                <strong>Core Capabilities of Our PMS:</strong>
                <ul class="list-circle ml-1 mv-1">
                    <li><strong>Idea Management:</strong> Capture, evaluate, and prioritize product ideas from customers, stakeholders, and internal teams using collaborative tools.</li>
                    <li><strong>Requirements Tracking:</strong> Document, version, and trace functional and non-functional requirements with full audit trails.</li>
                    <li><strong>Interactive Roadmapping:</strong> Visualize product timelines, milestones, and dependencies with drag-and-drop Gantt charts and Kanban boards.</li>
                    <li><strong>Smart Prioritization:</strong> Apply frameworks like RICE, MoSCoW, or WSJF to align features with business goals.</li>
                    <li><strong>Task & Sprint Management:</strong> Assign tasks, monitor progress, and integrate with <a href="https://ithd.ae/services/cloud-solutions/">cloud-based Agile tools</a> for real-time updates.</li>
                    <li><strong>Stakeholder Communication:</strong> Automated status reports, feedback loops, and in-app notifications keep everyone aligned.</li>
                    <li><strong>Cross-Team Collaboration:</strong> Seamless integration between product, engineering, design, and marketing teams.</li>
                    <li><strong>Advanced Reporting & Analytics:</strong> KPI dashboards, burndown charts, and ROI forecasts for data-driven decisions.</li>
                </ul>
                <br />
                <strong>Business Benefits:</strong>
                <ul class="list-circle ml-1 mv-1">
                    <li><strong>30% Faster Development Cycles</strong> through automation and centralized data.</li>
                    <li><strong>Reduced Costs</strong> by eliminating manual spreadsheets and redundant tools.</li>
                    <li><strong>Enhanced Visibility</strong> across the entire product pipeline.</li>
                    <li><strong>Improved Decision-Making</strong> with actionable insights and predictive analytics.</li>
                    <li><strong>Scalable Architecture</strong> built on secure <a href="https://ithd.ae/services/cloud-solutions/">cloud infrastructure</a>.</li>
                </ul>
                <br />
                Ready to transform your product development process? <a href="https://ithd.ae/portfolio/">Explore our full portfolio</a> or <a href="https://ithd.ae/services/business-automation/">learn more about business automation solutions</a>.
            `
        },
        shortDescription: {
            [LANGUAGES.EN]: "A robust mobile-first Product Management System (PMS) that streamlines ideation, roadmapping, prioritization, and collaboration—delivering 30% faster product cycles and data-driven decisions."
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
            [LANGUAGES.EN]: "Furniture Repair & Restoration Platform – Full Digital Transformation"
        },
        description: {
            [LANGUAGES.EN]: `
                In 2017, a leading furniture repair business partnered with ITHD to evolve from a local service provider into a nationwide digital platform. We delivered a complete <strong>web and admin portal overhaul</strong> combining e-commerce, CRM, real-time chat, and automated scheduling.<br /><br />
                <strong>Key Transformation Outcomes:</strong>
                <ul class="list-circle ml-1 mv-1">
                    <li><strong>User-Centric Design:</strong> Intuitive booking flow increased conversion rates by 45%.</li>
                    <li><strong>Integrated CRM & Chat:</strong> Live support and automated follow-ups improved customer retention.</li>
                    <li><strong>Cloud-Powered Scalability:</strong> Handled 10x traffic growth without downtime using <a href="https://ithd.ae/services/cloud-solutions/">AWS/GCP solutions</a>.</li>
                </ul>
                <br />
                Today, the platform stands as one of the top furniture restoration marketplaces in the region. <a href="https://ithd.ae/portfolio/">View more success stories</a> or <a href="https://ithd.ae/services/web-development/">discover our web development expertise</a>.
            `
        },
        shortDescription: {
            [LANGUAGES.EN]: "End-to-end digital platform for furniture repair services—featuring e-commerce, CRM, live chat, and cloud automation—driving 45% higher conversions and nationwide scalability."
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
            `${WORKS_IMAGES_BASE_PATH}business-automation/8.jpg`
        ],
        path: "/business-automation-work",
        title: {
            [LANGUAGES.EN]: "Enterprise Business Automation Suite – Workflow Optimization & ROI Boost"
        },
        description: {
            [LANGUAGES.EN]: `
                We engineered a comprehensive <strong>business automation platform</strong> that consolidates data entry, scheduling, email campaigns, and third-party integrations into a single intelligent system.<br /><br />
                <strong>Highlighted Features:</strong>
                <ul class="list-circle ml-1 mv-1">
                    <li><strong>AI-Powered Workflow Engine:</strong> Automates repetitive tasks with zero-code rules.</li>
                    <li><strong>Seamless API Integrations:</strong> Connects with ERP, CRM, and marketing tools.</li>
                    <li><strong>Real-Time Analytics Dashboard:</strong> Tracks KPIs and generates compliance-ready reports.</li>
                </ul>
                <br />
                <strong>Proven Results:</strong>
                <ul class="list-circle ml-1 mv-1">
                    <li>60% reduction in manual processing time</li>
                    <li>35% cost savings on operational overhead</li>
                    <li>99.9% uptime via <a href="https://ithd.ae/services/cloud-solutions/">enterprise cloud architecture</a></li>
                </ul>
                <br />
                <a href="https://ithd.ae/services/business-automation/">Explore business automation services</a> or <a href="https://ithd.ae/portfolio/business-automation-app/">see the full case study</a>.
            `
        },
        shortDescription: {
            [LANGUAGES.EN]: "All-in-one business automation platform with AI workflows, third-party integrations, and real-time analytics—delivering 60% faster operations and 35% cost reduction."
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
            [LANGUAGES.EN]: "Secure Banking Mobile App – iOS & Android Native Development"
        },
        description: {
            [LANGUAGES.EN]: `
                A feature-rich <strong>mobile banking application</strong> built for iOS and Android, delivering secure, intuitive financial management on the go.<br /><br />
                <strong>Core Banking Features:</strong>
                <ul class="list-circle ml-1 mv-1">
                    <li>Biometric login &amp; end-to-end encryption</li>
                    <li>Real-time balance &amp; transaction history</li>
                    <li>Instant fund transfers (P2P, SEPA, SWIFT)</li>
                    <li>Bill payment automation with OCR scan</li>
                    <li>Remote check deposit via camera</li>
                </ul>
                <br />
                <strong>Performance & Security:</strong>
                <ul class="list-circle ml-1 mv-1">
                    <li>99.99% uptime with <a href="https://ithd.ae/services/cloud-solutions/">cloud-native backend</a></li>
                    <li>PCI DSS & GDPR compliant</li>
                    <li>Push notifications for fraud alerts</li>
                </ul>
                <br />
                <a href="https://ithd.ae/services/ios-development/">View iOS expertise</a> | <a href="https://ithd.ae/services/android-development/">Android solutions</a> | <a href="https://ithd.ae/portfolio/">More mobile projects</a>
            `
        },
        shortDescription: {
            [LANGUAGES.EN]: "Native iOS & Android banking app with biometric security, instant transfers, bill pay, and remote check deposit—trusted by thousands of daily active users."
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
            [LANGUAGES.EN]: "Activity Tracking App UI/UX Design – Fitness Motivation Redefined"
        },
        description: {
            [LANGUAGES.EN]: `
                A visually stunning and behavior-driven <strong>UI/UX design</strong> for a next-gen activity tracking mobile app.<br /><br />
                <strong>Design Highlights:</strong>
                <ul class="list-circle ml-1 mv-1">
                    <li>Clean, modern interface with micro-interactions</li>
                    <li>Goal setting with progress rings and streaks</li>
                    <li>Social challenges and leaderboards</li>
                    <li>Dark/light mode & accessibility compliance</li>
                </ul>
                <br />
                <strong>User Engagement Metrics Post-Launch:</strong>
                <ul class="list-circle ml-1 mv-1">
                    <li>42% increase in daily active users</li>
                    <li>3.8x higher goal completion rate</li>
                </ul>
                <br />
                <a href="https://ithd.ae/services/ux-ui-design/">Explore UI/UX services</a> or <a href="https://ithd.ae/portfolio/">browse design portfolio</a>.
            `
        },
        shortDescription: {
            [LANGUAGES.EN]: "Award-winning UI/UX design for fitness tracking app—boosting user retention by 42% through gamification, intuitive navigation, and personalized dashboards."
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
            [LANGUAGES.EN]: "Cryptocurrency Management App – Buy, Sell, Store & Track Digital Assets"
        },
        description: {
            [LANGUAGES.EN]: `
                A full-featured <strong>cryptocurrency mobile app</strong> enabling secure trading, wallet management, and portfolio analytics.<br /><br />
                <strong>Key Functionalities:</strong>
                <ul class="list-circle ml-1 mv-1">
                    <li>Multi-wallet support (BTC, ETH, USDT, etc.)</li>
                    <li>Real-time price charts with technical indicators</li>
                    <li>Instant buy/sell via fiat on-ramp</li>
                    <li>Secure cold storage integration</li>
                    <li>Portfolio performance tracking with P&L</li>
                </ul>
                <br />
                <strong>Security Standards:</strong>
                <ul class="list-circle ml-1 mv-1">
                    <li>Hardware-grade encryption</li>
                    <li>Two-factor authentication & biometric lock</li>
                    <li>Regular penetration testing</li>
                </ul>
                <br />
                <a href="https://ithd.ae/services/ios-development/">iOS Crypto Apps</a> | <a href="https://ithd.ae/services/android-development/">Android Solutions</a> | <a href="https://ithd.ae/portfolio/crypto-wallet/">Crypto Wallet Case Study</a>
            `
        },
        shortDescription: {
            [LANGUAGES.EN]: "Secure cryptocurrency app for trading, storing, and tracking digital assets—featuring real-time charts, fiat on-ramp, and bank-level encryption."
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
            [LANGUAGES.EN]: "Mobile Crypto Wallet – Secure Multi-Chain Asset Management"
        },
        description: {
            [LANGUAGES.EN]: `%3Cp%3E%3Cstrong%3ESecure%20Multi-Chain%20Crypto%20Wallet%20App%3C%2Fstrong%3E%3C%2Fp%3E%3Cp%3E%3Cbr%3E%3C%2Fp%3E%3Cp%3EOur%20flagship%20mobile%20crypto%20wallet%20supports%20Bitcoin%2C%20Ethereum%2C%20BSC%2C%20Polygon%2C%20and%20100%2B%20tokens%20in%20a%20single%2C%20elegant%20interface.%3C%2Fp%3E%3Cp%3E%3Cbr%3E%3C%2Fp%3E%3Cp%3E%3Cstrong%3EKey%20Features%3A%3C%2Fstrong%3E%3C%2Fp%3E%3Col%3E%3Cli%3EHardware-grade%20encryption%20%26%20seed%20phrase%20backup%3C%2Fli%3E%3Cli%3EReal-time%20market%20data%20%26%20price%20alerts%3C%2Fli%3E%3Cli%3EIn-app%20swap%20via%20Uniswap%20%26%201inch%3C%2Fli%3E%3Cli%3EPortfolio%20analytics%20with%20historical%20P%26L%3C%2Fli%3E%3Cli%3EDApp%20browser%20for%20Web3%20interaction%3C%2Fli%3E%3C%2Fol%3E%3Cp%3E%3Cbr%3E%3C%2Fp%3E%3Cp%3E%3Ca%20href%3D%22https%3A%2F%2Fithd.ae%2Fservices%2Fcloud-solutions%2F%22%3ECloud-synced%20backup%3C%2Fa%3E%20ensures%20your%20assets%20are%20safe%20across%20devices.%3C%2Fp%3E%3Cp%3E%3Cbr%3E%3C%2Fp%3E%3Cp%3E%3Ca%20href%3D%22https%3A%2F%2Fithd.ae%2Fportfolio%2F%22%3EView%20full%20crypto%20portfolio%3C%2Fa%3E%20or%20%3Ca%20href%3D%22https%3A%2F%2Fithd.ae%2Fservices%2Fios-development%2F%22%3Eexplore%20iOS%20development%3C%2Fa%3E.%3C%2Fp%3E`
        },
        shortDescription: {
            [LANGUAGES.EN]: "Multi-chain crypto wallet with hardware-grade security, in-app swaps, DApp browser, and real-time portfolio analytics—trusted by 50K+ users."
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
            [LANGUAGES.EN]: "ITHD Business Automation Suite – Cloud, Web, Mobile & Design Integration"
        },
        description: {
            [LANGUAGES.EN]: `%3Cp%3E%3Cstrong%3EAll-in-One%20Digital%20Transformation%20Platform%3C%2Fstrong%3E%3C%2Fp%3E%3Cp%3E%3Cbr%3E%3C%2Fp%3E%3Cp%3EITHD%20delivers%20end-to-end%20business%20automation%20by%20integrating%20cloud%20infrastructure%2C%20responsive%20web%20portals%2C%20native%20mobile%20apps%2C%20and%20conversion-focused%20design.%3C%2Fp%3E%3Cp%3E%3Cbr%3E%3C%2Fp%3E%3Cp%3E%3Cstrong%3EOur%20Core%20Pillars%3A%3C%2Fstrong%3E%3C%2Fp%3E%3Cul%3E%3Cli%3E%3Ca%20href%3D%22https%3A%2F%2Fithd.ae%2Fservices%2Fcloud-solutions%2F%22%3EScalable%20Cloud%20Architecture%3C%2Fa%3E%3C%2Fli%3E%3Cli%3E%3Ca%20href%3D%22https%3A%2F%2Fithd.ae%2Fservices%2Fweb-development%2F%22%3EHigh-Performance%20Web%20Apps%3C%2Fa%3E%3C%2Fli%3E%3Cli%3E%3Ca%20href%3D%22https%3A%2F%2Fithd.ae%2Fservices%2Fios-development%2F%22%3EiOS%20%26%20Android%20Native%20Apps%3C%2Fa%3E%3C%2Fli%3E%3Cli%3E%3Ca%20href%3D%22https%3A%2F%2Fithd.ae%2Fservices%2Fux-ui-design%2F%22%3EUX%2FUI%20Design%20Excellence%3C%2Fa%3E%3C%2Fli%3E%3C%2Ful%3E%3Cp%3E%3Cbr%3E%3C%2Fp%3E%3Cp%3EReady%20to%20automate%3F%20%3Ca%20href%3D%22https%3A%2F%2Fithd.ae%2Four-process%2F%22%3ELearn%20about%20our%20process%3C%2Fa%3E%20or%20%3Ca%20href%3D%22https%3A%2F%2Fithd.ae%2Fportfolio%2F%22%3Eexplore%20case%20studies%3C%2Fa%3E.%3C%2Fp%3E`
        },
        shortDescription: {
            [LANGUAGES.EN]: "Comprehensive business automation ecosystem—cloud, web, mobile, CRM, chat, and design—engineered for scalability, security, and seamless user experience."
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
            [LANGUAGES.EN]: "Premium Tobacco Branding & Packaging Design – Heritage Meets Modernity"
        },
        description: {
            [LANGUAGES.EN]: `%3Cp%3E%3Cstrong%3EElevated%20Tobacco%20Brand%20Identity%3C%2Fstrong%3E%3C%2Fp%3E%3Cp%3E%3Cbr%3E%3C%2Fp%3E%3Cp%3EWe%20craft%20sophisticated%20brand%20identities%20and%20luxury%20packaging%20for%20premium%20tobacco%20products%20that%20honor%20tradition%20while%20appealing%20to%20modern%20consumers.%3C%2Fp%3E%3Cp%3E%3Cbr%3E%3C%2Fp%3E%3Cp%3E%3Cstrong%3EServices%3A%3C%2Fstrong%3E%3C%2Fp%3E%3Cul%3E%3Cli%3ELogo%20%26%20visual%20identity%20system%3C%2Fli%3E%3Cli%3ELuxury%20packaging%20with%20foil%20%26%20embossing%3C%2Fli%3E%3Cli%3EDigital%20assets%20for%20e-commerce%20%26%20social%3C%2Fli%3E%3C%2Ful%3E%3Cp%3E%3Cbr%3E%3C%2Fp%3E%3Cp%3E%3Ca%20href%3D%22https%3A%2F%2Fithd.ae%2Fservices%2Fux-ui-design%2F%22%3EExplore%20branding%20services%3C%2Fa%3E%20or%20%3Ca%20href%3D%22https%3A%2F%2Fithd.ae%2Fportfolio%2Fbeer-work%2F%22%3Eview%20beverage%20branding%3C%2Fa%3E.%3C%2Fp%3E`
        },
        shortDescription: {
            [LANGUAGES.EN]: "Luxury tobacco branding blending heritage craftsmanship with modern aesthetics—featuring premium packaging, logo systems, and digital presence."
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
            [LANGUAGES.EN]: "Crypto Wallet Mobile App – Multi-Chain, Bank-Grade Security"
        },
        description: {
            [LANGUAGES.EN]: `
                Our <strong>flagship crypto wallet app</strong> combines institutional-grade security with consumer-friendly design.<br /><br />
                <strong>Security-First Architecture:</strong>
                <ul class="list-circle ml-1 mv-1">
                    <li>End-to-end encryption & private key isolation</li>
                    <li>Multi-signature wallets</li>
                    <li>Regular third-party audits</li>
                </ul>
                <br />
                <strong>User Experience:</strong>
                <ul class="list-circle ml-1 mv-1">
                    <li>One-tap swaps across 100+ tokens</li>
                    <li>NFT gallery with metadata display</li>
                    <li>Custom fee settings & gas optimization</li>
                </ul>
                <br />
                <a href="https://ithd.ae/services/cloud-solutions/">Cloud sync</a> | <a href="https://ithd.ae/portfolio/crypto-wallet/">Live demo</a>
            `
        },
        shortDescription: {
            [LANGUAGES.EN]: "Multi-chain crypto wallet with bank-level security, NFT support, instant swaps, and real-time portfolio insights—available on iOS & Android."
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
            [LANGUAGES.EN]: "Enterprise Chat Application – Secure Team Communication Platform"
        },
        description: {
            [LANGUAGES.EN]: `
                A scalable <strong>real-time chat solution</strong> with video calls, file sharing, and end-to-end encryption.<br /><br />
                <strong>Enterprise Features:</strong>
                <ul class="list-circle ml-1 mv-1">
                    <li>Group channels with role-based access</li>
                    <li>Screen sharing & whiteboarding</li>
                    <li>Message search & export for compliance</li>
                </ul>
                <br />
                <a href="https://ithd.ae/services/cloud-solutions/">Cloud-hosted</a> | <a href="https://ithd.ae/portfolio/">More comms tools</a>
            `
        },
        shortDescription: {
            [LANGUAGES.EN]: "Secure enterprise chat app with video, file sync, and compliance tools—improving team productivity by 40%."
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
            [LANGUAGES.EN]: "Digital Loan Application & Management App – Fast Approvals"
        },
        description: {
            [LANGUAGES.EN]: `
                Streamlined <strong>loan origination app</strong> with document upload, credit scoring, and instant decisioning.<br /><br />
                <strong>Journey:</strong> Apply → Verify → Sign → Fund in under 10 minutes.<br /><br />
                <a href="https://ithd.ae/services/business-automation/">Automate lending</a> | <a href="https://ithd.ae/portfolio/">Case studies</a>
            `
        },
        shortDescription: {
            [LANGUAGES.EN]: "Mobile loan app with OCR upload, instant credit checks, and e-signatures—reducing approval time by 85%."
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
            [LANGUAGES.EN]: "Mobile App UI/UX Design Services – Conversion-Driven Interfaces"
        },
        description: {
            [LANGUAGES.EN]: `
                <p>ITHD delivers <strong>high-conversion mobile app designs</strong> backed by user research, A/B testing, and accessibility standards.</p><br />
                <p><strong>Process:</strong> Research → Wireframes → Prototypes → Handoff</p><br />
                <a href="https://ithd.ae/services/ux-ui-design/">View UX services</a> | <a href="https://ithd.ae/portfolio/design/">Design portfolio</a>
            `
        },
        shortDescription: {
            [LANGUAGES.EN]: "Data-driven mobile UI/UX design—improving user retention and conversion through research, prototyping, and iterative testing."
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
            [LANGUAGES.EN]: "Craft Beer Branding & Logo Design – Brewery Identity System"
        },
        description: {
            [LANGUAGES.EN]: `
                <p>A bold, vintage-inspired <strong>craft beer brand identity</strong> featuring a custom illustrated logo, label system, and packaging guidelines.</p><br />
                <p>Includes color palette, typography, and merchandise templates.</p><br />
                <a href="https://ithd.ae/services/logo-making/">Logo services</a> | <a href="https://ithd.ae/portfolio/tobacco-branding/">More branding</a>
            `
        },
        shortDescription: {
            [LANGUAGES.EN]: "Vintage craft beer branding with illustrated logo, label designs, and full brand guidelines—capturing authenticity and taste."
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
            [LANGUAGES.EN]: "Professional Logo Design Portfolio – 100+ Brand Identities"
        },
        description: {
            [LANGUAGES.EN]: `
                <p>Explore our collection of <strong>custom logo designs</strong> across industries: tech, finance, hospitality, and retail.</p><br />
                <p>Each logo is delivered in vector format with brand guidelines.</p><br />
                <a href="https://ithd.ae/services/logo-making/">Start your logo project</a> | <a href="https://ithd.ae/portfolio/">Full portfolio</a>
            `
        },
        shortDescription: {
            [LANGUAGES.EN]: "Diverse logo design portfolio—modern, minimalist, illustrative, and typographic styles tailored to brand personality and industry."
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
    YOUTUBE: "https://youtube.com/@ITHDAgency",
    TWITTER: "https://twitter.com/ITHDLLC",
    PINTEREST: "https://www.pinterest.com/ithdagency/",
    LINKEDIN: "https://www.linkedin.com/company/ithd/",
    DRIBBBLE: "https://dribbble.com/ITHDAgency",
};

export const WHATSAPP = `https://wa.me/971588923283?text=Hello%20ITHD%20Team%2C%0AI'm%20interested%20in%20custom%20web%20%2F%20mobile%20app%20development%20for%20my%20business%20in%20Dubai.%0ACan%20you%20share%20your%20portfolio%20and%20pricing%3F`;

export const VALUES_FAQ = [
    {
        title: {
            [LANGUAGES.EN]: "Innovation – Driving Digital Transformation Through Cutting-Edge Solutions"
        },
        content: {
            [LANGUAGES.EN]: `
                At ITHD, <strong>innovation</strong> is the cornerstone of everything we do. We foster a culture of bold creativity and proactive experimentation with emerging technologies such as AI, blockchain, cloud-native architectures, and Web3.<br /><br />
                Our teams are empowered to challenge conventions, prototype rapidly, and deploy groundbreaking features that give our clients a competitive edge in their industries.<br /><br />
                <a href="https://ithd.ae/portfolio/crypto-wallet/">Explore our crypto wallet innovation</a> or <a href="https://ithd.ae/services/cloud-solutions/">discover cloud-native development</a>.
            `
        }
    },
    {
        title: {
            [LANGUAGES.EN]: "Quality – Delivering Secure, Scalable & User-Centric Software Solutions"
        },
        content: {
            [LANGUAGES.EN]: `
                <strong>Quality</strong> is non-negotiable. Every line of code, every design pixel, and every user interaction is crafted to meet the highest standards of performance, security, and usability.<br /><br />
                We adhere to rigorous testing protocols—including unit, integration, penetration, and UX testing—to ensure our <a href="https://ithd.ae/services/ios-development/">iOS apps</a>, <a href="https://ithd.ae/services/android-development/">Android solutions</a>, and <a href="https://ithd.ae/services/web-development/">web platforms</a> are:<br />
                <ul class="list-circle ml-1 mv-1">
                    <li>100% compliant with GDPR, PCI DSS, and ISO 27001</li>
                    <li>Optimized for 99.99% uptime and lightning-fast load times</li>
                    <li>Intuitive and accessible (WCAG 2.1 AA compliant)</li>
                </ul>
                <br />
                <a href="https://ithd.ae/portfolio/banking-mobile-app/">See our secure banking app</a> built with enterprise-grade quality.
            `
        }
    },
    {
        title: {
            [LANGUAGES.EN]: "Continuous Learning – Staying Ahead in a Fast-Evolving Tech Landscape"
        },
        content: {
            [LANGUAGES.EN]: `
                In an industry that evolves daily, <strong>continuous learning</strong> keeps us—and our clients—ahead of the curve.<br /><br />
                Every ITHD team member participates in:<br />
                <ul class="list-circle ml-1 mv-1">
                    <li>Weekly tech deep-dives and innovation workshops</li>
                    <li>Certifications in AWS, React Native, Swift, Kotlin, and more</li>
                    <li>Access to O’Reilly, Pluralsight, and internal knowledge bases</li>
                </ul>
                <br />
                This commitment ensures we deliver future-proof solutions using the latest frameworks, security protocols, and design trends.<br /><br />
                <a href="https://ithd.ae/our-process/">Learn about our agile development process</a> powered by continuous improvement.
            `
        }
    },
    {
        title: {
            [LANGUAGES.EN]: "Transparency – Building Trust Through Open Communication & Accountability"
        },
        content: {
            [LANGUAGES.EN]: `
                <strong>Transparency</strong> is the foundation of lasting partnerships. From day one, we provide:<br /><br />
                <ul class="list-circle ml-1 mv-1">
                    <li>Real-time project dashboards (Jira, ClickUp, or client portals)</li>
                    <li>Weekly sprint reports and video updates</li>
                    <li>Clear pricing, timelines, and scope documentation</li>
                    <li>Direct access to developers, designers, and project leads</li>
                </ul>
                <br />
                No surprises. No hidden fees. Just honest collaboration that drives results.<br /><br />
                <a href="https://ithd.ae/testimonies/">Read client testimonials</a> or <a href="https://ithd.ae/faq/">explore our FAQs</a> for full transparency.
            `
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