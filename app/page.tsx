'use client'
import styles from "./styles/home.module.css";
import useMousePosition from "./useMousePosition";
import { useEffect, useRef } from "react";
import Image from "next/image";
const experience = [
  {
    title: "Software Engineer",
    company: "Logyq Protocol",
    website: "https://logyqprotocol.com",
    location: "Remote",
    date: "2022 - 2023",
    description: "Delivered multiple products and core features. As the first tech hire at Logyq, I played a pivotal role in shaping the technology stack.",
    tags: ["React", "Next.js", "TypeScript", "Flutter", "Liquid", "Node.js", "Shopify API", "Discord API", "Python", "Wagmi.js", "Google Cloud", "Blockchain", "Cardano Node"],
  },
  {
    title: "Fucking Around",
    company: "Freelancer",
    website: "",
    location: "Remote",
    date: "2018 - 2021",
    description: "I helped dozens of SMEs digitalize their business and establish their online presence by building funnels and ecommerce stores.",
    tags: ["Shopify", "Liquid", "Google Tag Manager", "Wordpress","Google Analytics", "Facebook Pixel", "Google Ads", "Facebook Ads"],
  },
];

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
          <img style={{borderRadius: "100px"}}width="150" src="https://media.licdn.com/dms/image/D4E03AQE9XiGD1WbbxQ/profile-displayphoto-shrink_800_800/0/1700247681332?e=1719446400&v=beta&t=hTyS180XBZuEGo4UUs_D7XQVPgl9I7G6peCczIwuZog"></img>
          <h1>Luigi Bardella Gerbi</h1>
          <h2>Software Engineer</h2>
          {/* <p>I learn fast, I’m extremely curious and practice self-awareness daily.</p> */}
          {/* <nav>
            <ul>
              <li className={styles.active}><a  href="#about">About</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#hackatons">Hackatons</a></li>
              <li><a href="#silicon">Silicon Valley</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav> */}
        </div>
        
        {/* <div className={styles.social}></div> */}
      </header>
      <main className={styles.main}>
        <section id="about" className={styles.about}>
          <h2>About me</h2>
          <p>Hello👋, I'm Luigi! Since writing my first line of code at 12, I've been captivated by the joy of building.
          </p><p>
          During my bachelor in Business & Management, I helped dozens of SMEs in digitalizing their business and establishing their online presence through Digital Marketing. 
          </p>
          <p>After rediscovering my passion for coding during the lockdown period, I started to work as a Software Engineer (and first tech hire) at Logyq Protocol, a web3 startup, where I contributed to build their products from scratch. </p>
          <p>In the first six months of 2023, while working remote for Logyq, I had the opportunity to couch surf across 10 countries, exploring different cultures and tastes.</p>
          
       </section>
        <section id="experience" className={styles.experience}>          
        <h2>Experience</h2>
          {experience.map((exp, index) => (
            <a key={index} href={exp.website}>
              <div className={styles.item}>
                <div className={styles.date}>{exp.date}</div>
                <div className={styles.content}>
                  <h3>{exp.title} · {exp.company}</h3>
                  <p>{exp.description}</p>
                  <div className={styles.pillContainer}>
                    {exp.tags.map((tag, index) => (
                      <div key={index} className={styles.pill}>{tag}</div>
                    ))}
                  </div>
                </div>
              </div>
            </a>
          ))}

        </section>
        <section id="projects" className={styles.projects}>
          <h2>Projects</h2>

          <a href="https://github.com/twotimesgi/KNN"><div className={styles.item}>
          <div className={styles.thumbnail}>
            <img alt="project thumbnail" width={100}src={"https://i.pinimg.com/originals/9b/35/bd/9b35bda37a361d888596694c3dd9aad2.jpg"}/ >
            </div>
            <div className={styles.content}>
                  <h3>KNN</h3>
                  <p>In this project, I implemented the K-Nearest Neighbors (KNN) algorithm from scratch using Python. Then, trained the model on a dataset containing Pokémon statistics to predict whether a Pokémon is legendary or not based on its attributes.</p>
                  <div className={styles.pillContainer}>
                      <div className={styles.pill}>KNN</div>
                      <div className={styles.pill}>Machine Learning</div>
                      <div className={styles.pill}>Python</div>
                      <div className={styles.pill}>Scikit-learn</div>

                  </div>
                </div>
          </div>
          
                

          </a>
        </section>
        <section id="projects" className={styles.projects}>
          <h2>Hackatons</h2>
          <p>
In the chaotic realm of hackathons, success often boils down to the art of piecing things together with a mix of Red Bull-fueled energy and sheer determination, transforming ideas into (barely) working solutions.</p>
          <a href=""><div className={styles.item}>
          <div className={styles.thumbnail}>
            <img alt="project thumbnail" width={40}src={"https://thehub-io.imgix.net/files/s3/20200207125602-4d7877684841560f4fa59e54a9c45f9d.png?fit=crop&w=300&h=300&auto=format&q=60"}/ >
            </div>
            <div className={styles.content}>
                  <h3>Talent Garden x Var Group (1st prize)</h3>
                  <p>In just 36 hours, our team, consisting of me and Paolo Grignaffini, developed the idea and a working prototype to leverage Blockchain for building loyalty and trust in the private labels of one of the 12 partner companies. Using Next.js, Wagmi, and deploying our smart contracts on the Mumbai Testnet, we emerged as the first prize winners.</p>
                  <div className={styles.linksContainer}>
                    <span className={styles.link}><a href="https://www.linkedin.com/posts/vargroup-spa_il-team-di-lavoro-di-eurospin-vince-lhackathon-activity-6989176850501545984-LLT1/?utm_source=share&utm_medium=member_desktop">VarGroup: Congratulations to the Hackathon Winners!
</a></span>
                  </div>
                  <div className={styles.pillContainer}>
                      <div className={styles.pill}>Blockchain</div>
                      <div className={styles.pill}>NFT</div>
                      <div className={styles.pill}>Wagmi</div>
                      <div className={styles.pill}>Next.js</div>
                      <div className={styles.pill}>Solidity</div>

                  </div>
                </div>
          </div>
          

          </a>
          <a href=""><div className={styles.item}>
          <div className={styles.thumbnail}>
            <img alt="project thumbnail" width={40}src={"https://cryptologos.cc/logos/celo-celo-logo.png"}/ >

            </div>
            <div className={styles.content}>
                  <h3>MasterZ x Celo (2nd prize)</h3>
                  <p>Greengo, a blockchain-based crowdfunding platform structured as a Decentralized Autonomous Organization (DAO), aims to foster innovative and sustainable projects by connecting companies, creators, and users through a single ecosystem. It was selected among the top 10 projects and pitched to more than 300 people during the MasterZ Night live event, where it also achieved 2nd place.</p>
                  <div className={styles.linksContainer}>
                    <span className={styles.link}><a href="https://youtu.be/MRamzjVieNQ">Demo Video</a></span>
                  </div>
                  <div className={styles.pillContainer}>
                      <div className={styles.pill}>Blockchain</div>
                      <div className={styles.pill}>Wagmi</div>
                      <div className={styles.pill}>Next.js</div>
                      <div className={styles.pill}>Ether.js</div>
                      <div className={styles.pill}>Hardhat</div>
                      <div className={styles.pill}>Solidity</div>
                  </div>
                </div>
          </div>
          
                

          </a>
          <a href=""><div className={styles.item}>
          <div className={styles.thumbnail}>
            <img alt="project thumbnail" width="40px" src={"https://cryptologos.cc/logos/algorand-algo-logo.png"}/ >
            </div>
            <div className={styles.content}>
                  <h3>Encode x Algorand (2nd prize)</h3>
                  <p>Building on its mission as a blockchain-based crowdfunding platform, Greengo secured second place among 12 finalists in the DeFi Challenge hackathon organized by Encode x Algorand. Following this achievement, it earned an invitation to join the Algorand x Encode Accelerator programme.</p>
                  <div className={styles.linksContainer}>
                    <span className={styles.link}><a href="https://main--effulgent-marshmallow-2fa690.netlify.app/">Demo</a></span>
                  </div>
                  <div className={styles.pillContainer}>
                      <div className={styles.pill}>Blockchain</div>
                      <div className={styles.pill}>Wagmi</div>
                      <div className={styles.pill}>Next.js</div>
                      <div className={styles.pill}>Ether.js</div>
                      <div className={styles.pill}>Hardhat</div>

                  </div>
                </div>
          </div>
          
                

          </a>
          <a href=""><div className={styles.item}>
          <div className={styles.thumbnail}>
            <img alt="project thumbnail" width="50px" src={"https://avatars.githubusercontent.com/u/104076707?s=280&v=4"}/ >
            </div>
            <div className={styles.content}>
                  <h3>Venom Foundation</h3>
                  <p>In just ten days, on behalf of Logyq Protocol, I embarked on a hackathon project, building a decentralized marketplace on the Venom blockchain. Juggling both smart contract development and frontend design.</p>
                  <div className={styles.linksContainer}>
                    <span className={styles.link}><a href="https://dorahacks.io/buidl/6057">Logyq Decentralized Marketplace: A Secure and Transparent Way to shop online
</a></span>
<span className={styles.link}><a href="https://vimeo.com/834801257">Demo Video</a></span>

                  </div>
                  <div className={styles.pillContainer}>
                      <div className={styles.pill}>Blockchain</div>
                      <div className={styles.pill}>Marketplace</div>
                      <div className={styles.pill}>Wagmi</div>
                      <div className={styles.pill}>Next.js</div>
                      <div className={styles.pill}>Ether.js</div>
                      <div className={styles.pill}>Hardhat</div>
                      <div className={styles.pill}>Threaded Solidity</div>
                  </div>
                </div>
          </div>
          
                

          </a>
        </section>
      </main>
    </div>
  );
}
