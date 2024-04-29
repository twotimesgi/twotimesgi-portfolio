'use client'
import styles from "./styles/home.module.css";
import useMousePosition from "./useMousePosition";
import { Ref, useEffect, useRef } from "react";
import Image from "next/image";
import Tesla from "../public/tesla.png";
import Pokeball from "../public/pokeball.png";
const experience = [
  {
    title: "Software Engineer",
    company: "Logyq Protocol",
    website: "https://logyqprotocol.com",
    location: "Remote",
    date: "2022 - 2023",
    description: "Delivered multiple products and core features. As the first tech hire at Logyq Protocol, I played a pivotal role in shaping the technology stack.",
    tags: [ "Blockchain", "Web3", "React", "Next.js", "TypeScript", "Flutter", "Liquid", "Node.js", "Shopify API", "Discord API", "Python", "Wagmi.js", "Google Cloud", "Cardano Node"],
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
  const aboutSection = useRef<HTMLHeadingElement>(null);
  const experienceSection = useRef<HTMLHeadingElement>(null);
  const projectsSection = useRef<HTMLHeadingElement>(null);
  const hackatonsSection = useRef<HTMLHeadingElement>(null);
  const siliconSection = useRef<HTMLHeadingElement>(null);

  const wrapper = useRef<HTMLDivElement>(null);
  const mousePosition = useMousePosition();

  useEffect(() => {
    if (wrapper.current) wrapper.current.style.background = `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`
  }, [mousePosition]);

//   const checkInView = (ref: React.RefObject<HTMLHeadingElement | null>) => {
//     if(ref.current){
//     let rect = ref.current.getBoundingClientRect();
//     return rect.top < window.innerHeight && rect.bottom >= 0;
//     }
//     return false;
// };

  return (
    <div ref={wrapper} className={styles.wrapper}>
      <header className={styles.header}>
        <div>
          <img style={{borderRadius: "100px", border: "6px solid rgb(254, 98, 29)"}}width="150" src="https://media.licdn.com/dms/image/D4E03AQE9XiGD1WbbxQ/profile-displayphoto-shrink_800_800/0/1700247681332?e=1719446400&v=beta&t=hTyS180XBZuEGo4UUs_D7XQVPgl9I7G6peCczIwuZog"></img>
          <h1>Luigi Bardella Gerbi</h1>
          <h2>Software Engineer</h2>
         <section id="about" className={styles.about}>
          <p>Hi, I'm Luigi!👋</p><p>Since writing my first line of code at 12, I've been captivated by the joy of building.</p> 
          
          
       </section>
          {/* <nav>
            <ul>
              <li className={checkInView(aboutSection) ? styles.active: ""}><a  href="#about">About</a></li>
              <li className={checkInView(experienceSection) ? styles.active: ""}><a href="#experience">Experience</a></li>
              <li className={checkInView(projectsSection) ? styles.active: ""}><a href="#projects">Projects</a></li>
              <li className={checkInView(hackatonsSection) ? styles.active: ""}><a href="#hackatons">Hackatons</a></li>
              <li className={checkInView(siliconSection) ? styles.active: ""}><a href="#silicon">Silicon Valley & US</a></li>
            </ul>
          </nav> */}
          <div className={styles.socialBox}>
            <a href="https://github.com/twotimesgi">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className={styles.socialIcon} aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
            </a>
    
            <a href="https://www.linkedin.com/in/luigibardellagerbi/">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={styles.socialIcon} aria-hidden="true"><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path></svg>
            </a>
            <a href="https://www.instagram.com/luigibardellagerbi/">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" fill="currentColor" className={styles.socialIcon} aria-hidden="true"><path d="M295.42,6c-53.2,2.51-89.53,11-121.29,23.48-32.87,12.81-60.73,30-88.45,57.82S40.89,143,28.17,175.92c-12.31,31.83-20.65,68.19-23,121.42S2.3,367.68,2.56,503.46,3.42,656.26,6,709.6c2.54,53.19,11,89.51,23.48,121.28,12.83,32.87,30,60.72,57.83,88.45S143,964.09,176,976.83c31.8,12.29,68.17,20.67,121.39,23s70.35,2.87,206.09,2.61,152.83-.86,206.16-3.39S799.1,988,830.88,975.58c32.87-12.86,60.74-30,88.45-57.84S964.1,862,976.81,829.06c12.32-31.8,20.69-68.17,23-121.35,2.33-53.37,2.88-70.41,2.62-206.17s-.87-152.78-3.4-206.1-11-89.53-23.47-121.32c-12.85-32.87-30-60.7-57.82-88.45S862,40.87,829.07,28.19c-31.82-12.31-68.17-20.7-121.39-23S637.33,2.3,501.54,2.56,348.75,3.4,295.42,6m5.84,903.88c-48.75-2.12-75.22-10.22-92.86-17-23.36-9-40-19.88-57.58-37.29s-28.38-34.11-37.5-57.42c-6.85-17.64-15.1-44.08-17.38-92.83-2.48-52.69-3-68.51-3.29-202s.22-149.29,2.53-202c2.08-48.71,10.23-75.21,17-92.84,9-23.39,19.84-40,37.29-57.57s34.1-28.39,57.43-37.51c17.62-6.88,44.06-15.06,92.79-17.38,52.73-2.5,68.53-3,202-3.29s149.31.21,202.06,2.53c48.71,2.12,75.22,10.19,92.83,17,23.37,9,40,19.81,57.57,37.29s28.4,34.07,37.52,57.45c6.89,17.57,15.07,44,17.37,92.76,2.51,52.73,3.08,68.54,3.32,202s-.23,149.31-2.54,202c-2.13,48.75-10.21,75.23-17,92.89-9,23.35-19.85,40-37.31,57.56s-34.09,28.38-57.43,37.5c-17.6,6.87-44.07,15.07-92.76,17.39-52.73,2.48-68.53,3-202.05,3.29s-149.27-.25-202-2.53m407.6-674.61a60,60,0,1,0,59.88-60.1,60,60,0,0,0-59.88,60.1M245.77,503c.28,141.8,115.44,256.49,257.21,256.22S759.52,643.8,759.25,502,643.79,245.48,502,245.76,245.5,361.22,245.77,503m90.06-.18a166.67,166.67,0,1,1,167,166.34,166.65,166.65,0,0,1-167-166.34"></path></svg>
            </a>
          </div>
        </div>
        
        {/* <div className={styles.social}></div> */}
      </header>
      <main className={styles.main}>
        
        <section id="experience" className={styles.experience}>          
        <h2 ref={experienceSection}>Work Experience</h2>
          
<a href="https://logyqprotocol.com"> 
              <div className={styles.item}>
                <div className={styles.date}>2022 - 2023</div>
                <div className={styles.content}>
                  <h3 className={styles.link}>Software Engineer · Logyq Protocol</h3>
                  <p>Delivered multiple products and core features. As the first tech hire at Logyq Protocol, I played a pivotal role in shaping the technology stack.</p>
                  <div className={styles.linksContainer}>
                    <span className={styles.link}><a href="https://www.lidonation.com/ja/proposals/logyq-protocol-social-commerce-and-digital-product-passport-f10#:~:text=Luigi%20Bardella%20Gerbi%20is%20our%20first%20employee%20and%20has%20been%20an%20invaluable%20contributor%20to%20our%20development%20work.%20He%20has%20proven%20to%20be%20up%20to%20any%20coding%20challenge%20and%20has%20helped%20us%20extensively%20in%20designing%20our%20product%20suite.">"Luigi Bardella Gerbi is our first employee and has been an invaluable contributor to our development work. He has proven to be up to any coding challenge and has helped us extensively in designing our product suite."
</a></span>
                  </div>
                  <div className={styles.pillContainer}>
                      {[ "Blockchain", "Web3", "React", "Next.js", "TypeScript", "Flutter", "Liquid", "Node.js", "Shopify API", "Discord API", "Python", "Wagmi.js", "Google Cloud", "Cardano Node"].map((tag, index) => <div key={index} className={styles.pill}>{tag}</div>)}
                  </div>
                </div>
              </div>
            </a>

            
              <div className={styles.item}>
                <div className={styles.date}>2019 - 2021</div>
                <div className={styles.content}>
                  <h3>Freelancer</h3>
                  <p>I helped dozens of SMEs digitalize their business and establish their online presence by building funnels and ecommerce stores.</p>
                  <div className={styles.pillContainer}>
                  {["Shopify", "Liquid", "Google Tag Manager", "Wordpress","Google Analytics", "Facebook Pixel", "Google Ads", "Facebook Ads"].map((tag, index) => <div key={index} className={styles.pill}>{tag}</div>)}
                  </div>
                </div>
              </div>
           
        </section>
        <section id="projects" className={styles.projects}>
          <h2 ref={projectsSection}>Projects</h2>

          <a href="https://github.com/twotimesgi/KNN"><div className={styles.item}>
          <div className={styles.thumbnail}>
            <Image alt="project thumbnail" height={55} src={Pokeball}/ >
            </div>
            <div className={styles.content}>
                  <h3 className={styles.link}>KNN</h3>
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
        <section id="hackatons"  className={styles.projects}>
          <h2 ref={hackatonsSection}>Hackatons</h2>
          <p>
In the chaotic realm of hackathons, success often boils down to the art of piecing things together with a mix of Red Bull-fueled energy and sheer determination, transforming ideas into (barely) working solutions.</p>
          <div className={styles.item}>
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
          

        <div className={styles.item}>
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
          
                

        
          <div className={styles.item}>
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
          
                

          
          <div className={styles.item}>
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
          
                

        
        </section>
        <section id="silicon"  className={styles.silicon}>
        <h2 ref={siliconSection}>Silicon Valley & Washington D.C.</h2>
        <p>I've had the incredible privilege of being selected not just once, but twice, to embark on immersive journeys to Silicon Valley. </p><p>Both opportunities, bestowed upon me by the Silicon Valley Study Tour (SVST) and the esteemed Silicon Valley Fellowship, were grounded on personal merit. These experiences provided invaluable insights into the heartbeat of innovation and entrepreneurship.</p>
        <Image style={{width: "100%", height: "auto"}}alt="Luigi at Tesla" src={Tesla}></Image>
        <p> Building upon this foundation, I decided to further hone my skills by pursuing a <b>Master's in Entrepreneurship at Georgetown University and University of Genoa</b>, to fuel my aspirations in the realm of startups and innovation.</p>
        <img style={{width: "100%", height: "auto"}} src={"https://www.genoaes.com/_next/image?url=%2Fimages%2Fempower.png&w=1920&q=75"}/>
        </section>
      </main>
    </div>
  );
}
