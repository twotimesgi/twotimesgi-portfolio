'use client'
import styles from "./styles/home.module.css";
import useMousePosition from "./useMousePosition";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Tesla from "../public/tesla.png";
import Pokeball from "../public/pokeball.png";
import SocialIcons from "./components/socials";


const experience = [
  {
    title: "Software Engineer · Logyq Protocol",
    date: "2022 - 2023",
    description: "Delivered multiple products and core features. As the first tech hire at Logyq Protocol, I played a pivotal role in shaping the technology stack and guided the development of various projects. This included crafting a Web App, a Mobile App, a Discord bot, and a Shopify App to seamlessly integrate on-chain reviews directly onto product pages.",
    tags: ["Blockchain", "Web3", "React", "Next.js", "TypeScript", "Flutter", "Liquid", "Node.js", "Shopify API", "Discord API", "Python", "Wagmi.js", "Google Cloud", "Cardano Node"],
    links: [<a href="https://www.lidonation.com/ja/proposals/logyq-protocol-social-commerce-and-digital-product-passport-f10#:~:text=Luigi%20Bardella%20Gerbi%20is%20our%20first%20employee%20and%20has%20been%20an%20invaluable%20contributor%20to%20our%20development%20work.%20He%20has%20proven%20to%20be%20up%20to%20any%20coding%20challenge%20and%20has%20helped%20us%20extensively%20in%20designing%20our%20product%20suite.">"Luigi Bardella Gerbi is our first employee and has been an invaluable contributor to our development work. He has proven to be up to any coding challenge and has helped us extensively in designing our product suite."</a>]
  },
  {
    title: "Freelancer",
    date: "2019 - 2021",
    description: "I helped dozens of SMEs digitalize their business and establish their online presence by building funnels and ecommerce stores.",
    tags: ["Shopify", "Liquid", "Google Tag Manager", "Wordpress","Google Analytics", "Facebook Pixel", "Google Ads", "Facebook Ads"],
    links: [],
  }
]

const projects = [
  {
    title: "KNN",
    description: "In this project, I implemented the K-Nearest Neighbors (KNN) algorithm from scratch using Python. Then, trained the model on a dataset containing Pokémon statistics to predict whether a Pokémon is legendary or not based on its attributes.",
    tags: ["KNN", "Machine Learning", "Python", "Scikit-learn"],
    thumbnail: Pokeball,
    link: "https://github.com/twotimesgi/KNN",
  }
]

const hackatons = [
    {
    title: "Talent Garden x Var Group (1st prize)",
    thumbnail: "https://thehub-io.imgix.net/files/s3/20200207125602-4d7877684841560f4fa59e54a9c45f9d.png?fit=crop&w=300&h=300&auto=format&q=60",
    description: "In just 36 hours, our team, consisting of me and Paolo Grignaffini, developed the idea and a working prototype to leverage Blockchain for building loyalty and trust in the private labels of Eurospin, one of the 12 partner companies. We duplicated the Eurospin website, integrating a decentralized marketplace and an NFT Einstein-themed loyalty program. Deploying smart contracts on the Mumbai Testnet, we emerged as first prize winners.",
    tags: ["Blockchain", "NFT", "Wagmi", "Next.js", "Solidity"],
    links: [<a href="https://www.linkedin.com/posts/vargroup-spa_il-team-di-lavoro-di-eurospin-vince-lhackathon-activity-6989176850501545984-LLT1/?utm_source=share&utm_medium=member_desktop">VarGroup: Congratulations to the Hackathon Winners!</a>, <a href="https://drive.google.com/file/d/1_oIMuxdj4EjzwRHlj2BkFKgLZcYnrIeG/view">Pitch Deck</a>, <a href="https://testnets.opensea.io/collection/eurospin">NFT Collection</a>]
    },
    {
    title: "MasterZ x Celo (2nd prize)",
    thumbnail: "https://cryptologos.cc/logos/celo-celo-logo.png",
    description: "Greengo, a blockchain-based crowdfunding platform structured as a Decentralized Autonomous Organization (DAO), aims to foster innovative and sustainable projects by connecting companies, creators, and users through a single ecosystem. It was selected among the top 10 projects and pitched to more than 300 people during the MasterZ Night live event, where it also achieved 2nd place.",
    tags: ["Blockchain", "Wagmi", "Next.js", "Ether.js", "Hardhat", "Solidity"],
    links: [<a href="https://youtu.be/MRamzjVieNQ">Demo Video</a>]
    },
    {
    title: "Encode x Algorand (2nd prize)",
    thumbnail: "https://cryptologos.cc/logos/algorand-algo-logo.png",
    description: "Building on its mission as a blockchain-based crowdfunding platform, Greengo secured second place among 12 finalists in the DeFi Challenge hackathon organized by Encode x Algorand. Following this achievement, it earned an invitation to join the Algorand x Encode Accelerator programme.",
    tags: ["Blockchain", "Wagmi", "Next.js", "Ether.js", "Hardhat"],
    links: [<a href="https://main--effulgent-marshmallow-2fa690.netlify.app/">Demo</a>]
    },
    {
    title: "Venom Foundation",
    thumbnail: "https://avatars.githubusercontent.com/u/104076707?s=280&v=4",
    description: "In just ten days, on behalf of Logyq Protocol, I embarked on a hackathon project, building a decentralized marketplace on the Venom blockchain. Juggling both smart contract development and frontend design.",
    tags: ["Blockchain", "Marketplace", "Wagmi", "Next.js", "Ether.js", "Hardhat", "Threaded Solidity"],
    links: [<a href="https://dorahacks.io/buidl/6057">Logyq Decentralized Marketplace: A Secure and Transparent Way to shop online</a>, <a href="https://vimeo.com/834801257">Demo Video</a>]
    }
]

export default function Home() {
  const wrapper = useRef<HTMLDivElement>(null);
  const mousePosition = useMousePosition();

  useEffect(() => {
    if (wrapper.current) wrapper.current.style.background = `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`
  }, [mousePosition]);

  return (
    <div ref={wrapper} className={styles.wrapper}>
      <header className={styles.header}>
        <div>
          <img style={{borderRadius: "100px", border: "6px solid rgb(254, 98, 29)"}} width="150" src="https://media.licdn.com/dms/image/D4E03AQE9XiGD1WbbxQ/profile-displayphoto-shrink_800_800/0/1700247681332?e=1719446400&v=beta&t=hTyS180XBZuEGo4UUs_D7XQVPgl9I7G6peCczIwuZog"></img>
          <h1>Luigi Bardella Gerbi</h1>
          <h2>Software Engineer</h2>
        <section id="about" className={styles.about}>
          <p>Hi, I'm Luigi!👋</p><p>Since writing my first line of code at 12, I've been captivated by the joy of building.</p> 
        </section>
          <SocialIcons/>
        </div>
        {/* <div className={styles.social}></div> */}
      </header>
      <main className={styles.main}>
        
        <section id="experience" className={styles.experience}>          
        <h2>Work Experience</h2>
        {experience.map((job, index) => (
              <div className={styles.item}>
                <div className={styles.date}>{job.date}</div>
                <div className={styles.content}>
                  <h3>{job.title}</h3>
                  <p>{job.description}</p>
                  {job.links.length > 0 && <div className={styles.linksContainer}>
                    {job.links.map((link, index) => <span key={index} className={styles.link}>{link}</span>)}
                  </div>
                  }
                  <div className={styles.pillContainer}>
                      {job.tags.map((tag, index) => <div key={index} className={styles.pill}>{tag}</div>)}
                  </div>
                </div>
              </div>
            ))  
            }         
        </section>
        <section id="projects" className={styles.projects}>
          <h2>Projects</h2>

          {projects.map((project, index) => (
          <a href={project.link}><div className={styles.item}>
          <div className={styles.thumbnail}>
            <Image alt="project thumbnail" height={55} src={Pokeball}/ >
            </div>
            <div className={styles.content}>
                  <h3 className={styles.link}>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className={styles.pillContainer}>
                    {project.tags.map((tag, index) => <div key={index} className={styles.pill}>{tag}</div>)}
                  </div>
                </div>
          </div>
          </a>
          ))}

        </section>
        <section id="hackatons"  className={styles.projects}>
          <h2>Hackatons</h2>
          <p>
In the chaotic realm of hackathons, success often boils down to the art of piecing things together with a mix of Red Bull-fueled energy and sheer determination, transforming ideas into (barely) working solutions.</p>
         {hackatons.map((project, index) => (
          <div className={styles.item}>
          <div className={styles.thumbnail}>
            <img alt={`${project.title} project thumbnail`} width={40} src={project.thumbnail}/ >
            </div>
            <div className={styles.content}>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className={styles.linksContainer}>
                    {project.links.map((link, index) => <span key={index} className={styles.link}>{link}</span>)}
                  </div>
                  <div className={styles.pillContainer}>
                    {project.tags.map((tag, index) => <div key={index} className={styles.pill}>{tag}</div>)}
                  </div>
                </div>
          </div>
          ))}        
        </section>
        <section id="silicon"  className={styles.silicon}>
        <h2>Silicon Valley & Washington D.C.</h2>
        <iframe width="100%" height="500px" frameBorder="0" src="https://www.youtube.com/embed/HeCEctR0OF4?si=Mqt6auPwOCLKxosg" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        <p>I've had the incredible privilege of being selected not just once, but twice, to embark on immersive journeys to Silicon Valley. </p><p>Both opportunities, bestowed upon me by the <a href="https://www.linkedin.com/company/silicon-valley-study-tour/">Silicon Valley Study Tour (SVST) + Boolean </a> and <a href="https://www.linkedin.com/school/silicon-valley-fellowship/">Silicon Valley Fellowship</a>, were grounded on personal merit. These experiences provided invaluable insights into the heartbeat of innovation and entrepreneurship.</p>
        <Image style={{width: "100%", height: "auto"}}alt="Luigi at Tesla" src={Tesla}></Image>
        <p> Building upon this foundation, I decided to further hone my skills by pursuing a <a href="https://www.linkedin.com/school/77751989">Master's in Entrepreneurship between Georgetown University and University of Genoa</a>, to fuel my aspirations in the realm of startups and innovation.</p>
        <img style={{width: "100%", height: "auto"}} src={"https://www.genoaes.com/_next/image?url=%2Fimages%2Fempower.png&w=1920&q=75"}/>
        </section>
      </main>
    </div>
  );
}
