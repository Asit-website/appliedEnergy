import { useEffect, useRef, useState } from "react";
import "./about2.css";
import tabsvg from "../assets/wr2.png";
import "@splidejs/react-splide/css";
import about_wr from "../assets/about_wr.png";
import Testimonial from "./Testimonial";


const leftItem = [
  "About US",
  "Timeline",
  "Our Services",
  "Our Visionary Leader"
];


const data = [
  "2008-09",
  "2010-11",
  "2012-13",
  "2014-15",
  "2016-24",
];

const data3 = [
  {
    title: "Dr Vinod  Agarwal ",
    img: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1743399700/WhatsApp_Image_2025-03-29_at_12.33.39_PM_shrgql.jpg",
    para: "With over 30 years in Semiconductor and Renewable Energy, our Chairman and CEO has pioneered innovation and excellence. As the founder of LogicVision, Inc. (NASDAQ-listed) and Applied Energy Technologies (managing 12,000+ sites), his leadership has transformed industries. A distinguished alumnus of Johns Hopkins University and BITS Pilani, IEEE Fellow, and recipient of the IEEE Lifetime Achievement Award, he continues to drive sustainable energy solutions and inspire progress"
  },

  {
    title1: "Empowering Tomorrow: Our Vision, Our Values:",
    para1: `At Applied Energy Technologies, our strategy is built on four pillars driving the future of energy: Decarbonisation, Decentralisation, Digitalisation, and Democratisation. We are dedicated to delivering sustainable, innovative solutions that empower our clients and contribute to a greener planet.

Decarbonisation: We help customers cut carbon emissions by 40% over five years by integrating renewables and optimizing energy use, supporting their transition to cleaner energy.
Decentralisation: Through microgrids and distributed energy resources, we provide resilient, localized systems that promote energy independence and reduce reliance on centralized grids.
 `,
    para2: `Digitalisation: Leveraging IoT sensors and AI platforms, we offer real-time insights, predictive maintenance, and enhanced operational efficiency for optimal energy management.
Democratisation: We make clean energy accessible by offering scalable, affordable solutions, particularly in emerging markets, promoting global equity and sustainability.
These four D’s form the foundation of our vision to lead the global energy transition, creating a future where energy is cleaner, smarter, and available to all.`

  }

];


const data2 = [
  {
    img: about_wr,
    heading: " Commenced operations.",
    para: "Signed 1st contract for 500  telecom towers.",
    para1: "Series A fund-raise."
  },
  {
    img: about_wr,
    heading: " Hybrid Solar Solution Installation, O&M Contact with",
    para: "Series B fundraise.",
    para1: "Achieved 1000+ towersunder management.",
    para3: " Additional 2000 towers contract from Bharti Infratel."
  },
  {
    img: about_wr,
    heading: "Series C fundraise ",
    para: "Achieved 2000+ towersunder management.",
    para1: "Master Services Agreement signed with ATC.",
    para3: " Solar Solution Installation, O&M contract* for ATMs."
  },

  {
    img: about_wr,
    heading: "Achieved 3000+ towers  ",
    para: " Management and 500+ Bank ATMs .",
    para1: "Series D fundraise.",
    para2: "Hybrid Solar Solution Installation, O&M contract with."

  },
  {
    img: about_wr,
    heading: "management and 1500+ Bank ATMs.",
    para: " Achieved 4000+ towersunder .",
    // para1: "management and 1500+ Bank ATMs.",
    para2: "Customer Agreement signed for 3 telecom circles.",
    para3: "Serviced 3,000+Bank ATMsand branches",
    para4: "Established as market leader in servicing  Telecom Tower while acquiring ~6,000 towers.",
    para5: "Agreement signed with",
    para6: "Established a hardware R&D center and developed",
    para7: "Telecom-in-a-box (TiB) for Small cell and Macro towers.",
    para8: "Agreement for Solar assist with 2000+ sales for TiB.",
    para9: "Airtel vendor registration.",
    para10: "TiB contract with Cloud Extel."

  },
  {
    img: about_wr,
    heading: "Serviced ",
    para: "Serviced 3,000+Bank ATMsand branches",
    para1: "Established as market leader in servicing  Telecom Tower while acquiring ~6,000 towers.",
    para2: "Agreement signed with",

  },
  {
    img: about_wr,
    heading: "Established  ",
    para: "Established a hardware R&D center and developed",
    para1: "Telecom-in-a-box (TiB) for Small cell and Macro towers.",
    para2: "Agreement for Solar assist with 2000+ sales for TiB.",
    para3: "Airtel vendor registration.",
    para4: "TiB contract with Cloud Extel."
  },




];

const data1 = [
  {
    title: "About US",
    para1: `Applied Energy Technologies leverages decades of experience to transform how businesses manage and optimize their energy needs. As pioneers in cost-efficient, distributed, and sustainable energy solutions, we deliver comprehensive services across the EV, Telecom, and Banking sectors.`,

    para2: `End-to-End Energy  Management: From design and installation to ongoing operation and maintenance, we provide full-spectrum solutions.
    AI/ML-Powered Platform: Ensures long-term reliability, scalability, and peak performance for intelligent energy management, renewable integration, and advanced EV charging.
    Expert Team: With over 2,000 engineers, technicians, and experts, we deliver tailored.`,

    para3: `innovative solutions that meet specific energy requirements.
    Next-Gen Technologies: Our commitment to R&D keeps us at the forefront of cutting-edge energy advancements.

    At Applied Energy, we don’t just provide energy solutions—we create possibilities for a smarter, more sustainable future.`

  }
];

const coreData = [


  // {
  //   img: tabsvg,
  //   title: "Our Visionary ",
  //   para: `With over 30 years in Semiconductor and Renewable Energy, our Chairman and CEO has pioneered innovation and excellence. As the founder of LogicVision, Inc. (NASDAQ-listed) and Applied Energy Technologies (managing 12,000+ sites), his leadership has transformed industries. A distinguished alumnus of Johns Hopkins University and BITS Pilani, IEEE Fellow, and recipient of the IEEE Lifetime Achievement Award, he continues to drive sustainable energy solutions and inspire progress.
  //   `,
  // },
  // {
  //   img: tabsvg,
  //   title: "Empowering ",
  //   para: `At Applied Energy Technologies, our strategy is built on four pillars driving the future of energy: Decarbonisation, Decentralisation, Digitalisation, and Democratisation. We are dedicated to delivering sustainable, innovative solutions that empower our clients and contribute to a greener planet.
  //   Decarbonisation: We help customers cut carbon emissions by 40% over five years by integrating renewables and optimizing energy use, supporting their transition to cleaner energy.
  //  `,
  // },

  {
    // img: tabsvg,
    title: "Our Services",
    para: ` Operations & Maintenance
End-to-end support for optimal performance, ensuring efficiency and reliability of energy systems through ongoing operations and maintenance services.

Monitoring and Management Software
AI-driven platforms providing real-time monitoring, predictive maintenance, and intelligent energy management, enhanced by advanced data analytics. These solutions deliver actionable insights, improve operational efficiency, and optimize energy use, ensuring smarter decision-making and peak system performance.`,
  },

  {
    // img: tabsvg,
    title: "Our Solutions ",
    para: `TIB (Telecom-In-Box) / Power Plant,
Customizable power solutions ranging from 0.6 kW to 72 kW and beyond, tailored to meet specific energy requirements.
Source Priority Controllers (SPC), and Remote Monitoring Units (RMU), MPPT Charger Controllers, Battery Management System (BMS).
Power Solutions
Comprehensive power management tools including Rectifier Modules, Li-ion Battery Banks, Battery UPS, Inverter.
CMS for Banks
Advanced systems for monitoring ATMs, including controllers and sensors to ensure efficient operation and security.
Solar Solutions
Tailored solar energy systems to meet diverse energy needs, integrating renewable energy for sustainable power generation.
EV Chargers
High-performance charging solutions for electric vehicles:
AC Chargers: 7.4 kW & 22 kW.
DC Chargers: 120 kW & 240 kW.  `,
  },
];

function AboutSec2() {


  const [curlefitem, stCurLeftItem] = useState(0);

  const [currtime, setCurrTime] = useState(0);


  const sectionRef = useRef(null);
  const splideRef = useRef(null);

  const [currCore, setCurrCore] = useState(0);


  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      const sectionRect = section.getBoundingClientRect(); // Get the position and size of the section

      // Check each item in data
      data.forEach((_, index) => {
        const item = section.children[index]; // Get the corresponding item
        const itemRect = item.getBoundingClientRect(); // Get the position and size of the item

        // Check if the item's top position is around 200px from the top of the viewport
        if (itemRect.top <= 200 && itemRect.bottom > 0) {
          setCurrTime(index); // Update currtime based on the item position
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [data]);

  const [isInView, setIsInView] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  // Create refs for all sections
  const sectionRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null), // Added fourth ref to track all sections correctly
  ];

  useEffect(() => {
    const observers = sectionRefs.map((ref, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            stCurLeftItem(index); // Set the active index based on the visible section
          }
        },
        {
          threshold: 0.5, // Adjust for better accuracy (50% of section visible)
        }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return observer;
    });

    return () => {
      observers.forEach((observer, index) => {
        if (sectionRefs[index].current) {
          observer.unobserve(sectionRefs[index].current);
        }
      });
    };
  }, []);

  useEffect(() => {
    if (isInView[0]) {
      stCurLeftItem(0);
    } else if (isInView[1]) {
      stCurLeftItem(1);
    } else if (isInView[2]) {
      stCurLeftItem(2);
    } else if (isInView[3]) {
      stCurLeftItem(3);
    } else if (isInView[4]) {
      stCurLeftItem(4);
    } else if (isInView[5]) {
      stCurLeftItem(5);
    } else if (isInView[6]) {
      stCurLeftItem(6);
    }
  }, [isInView]);

  const handleClick = (index) => {
    stCurLeftItem(index);
    sectionRefs[index].current.scrollIntoView({ behavior: "smooth" });
  };


  return (
    <div className="abouts2wrap">
      <div className="about2_cont">

        {/* left wrap */}
        <div className="abo2lefwrap">
          <div className="ab2lecont">
            <h2>About</h2>

            {leftItem?.map((item, index) => (
              <div
                key={index}
                onClick={() => {
                  stCurLeftItem(index);
                  handleClick(index);
                }}
                className="singiteab cursor-pointer"
              >
                {/* left  */}
                <div className="divsinable">
                  <div
                    className={`curcles ${curlefitem === index && "addbagorange"
                      }`}
                  >
                    {" "}
                  </div>
                  <span
                    className={`${curlefitem === index && "linesss"}`}
                  ></span>
                </div>

                {/* right */}
                <div className="siabrih">{item}</div>
              </div>
            ))}
          </div>
        </div>

        {/* right wrap */}


        {/* About Us Section */}


        <div className="actu_right">

          <section ref={sectionRefs[0]} className="sec2ab">
            <div className="cons2ab">



              <h2>{data1[0].title}</h2>
              <p>{data1[0].para1}</p>
              <p>{data1[0].para2}</p>
              <p>{data1[0].para3}</p>
            </div>
          </section>


          <section ref={sectionRefs[1]} className="sec2ab">
            <div className="cons2ab">
              <h2>TIMELINE</h2>

              <div className="mains2ab">
                {/* left side */}

                <div className="mans2lef" ref={sectionRef}>
                  {data.map((d, index) => (
                    <div key={index} className="snmoths">
                      {/* left */}
                      <div className="snmothlef">
                        <div className="strlcurl">
                          <p className="straline"></p>
                          <p className="circss"></p>
                        </div>
                        <p
                          className={`${currtime === index ? "lfdssff" : ""}`}
                        ></p>
                      </div>

                      <div
                        className={`snmorigh  ${currtime === index ? "curritmnum" : ""
                          }`}
                      >
                        {d}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Right Side */}
                <div

                  className={`man2righ ${currtime === 1 && "addonetop"} ${currtime === 2 && "addtwotop"} ${currtime === 3 && "addthreetop"} ${currtime === 4 && "addfourtop"}`}
                >
                  <img src={data2[currtime]?.img} alt="" />
                  <div className="m2_content">
                    <h4>{data2[currtime]?.heading}</h4>
                    <p>{data2[currtime]?.para}</p>
                    <p>{data2[currtime]?.para1}</p>
                    <p>{data2[currtime]?.para2}</p>
                    <p>{data2[currtime]?.para3}</p>
                    <p>{data2[currtime]?.para4}</p>
                    <p>{data2[currtime]?.para5}</p>
                    <p>{data2[currtime]?.para6}</p>
                    <p>{data2[currtime]?.para7}</p>
                    <p>{data2[currtime]?.para8}</p>
                    <p>{data2[currtime]?.para9}</p>
                    <p>{data2[currtime]?.para10}</p>


                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* core value section  */}
          <section ref={sectionRefs[2]} className="sec3ab" id="sec3abbb">
            <div className="cons3ab">
              <h2>Our Services</h2>

              <div className="main_conts3">
                {coreData?.map((core, index) => (
                  <div
                    onClick={() => setCurrCore(index)}
                    key={index}
                    className={`singcore ${currCore === index && "currCore"}`}
                  >
                    <img src={core.img} alt="" />
                    <p>{core.title}</p>
                  </div>
                ))}
              </div>

              <div className="main_cos2fds">
                <h5>{coreData[currCore]?.title}</h5>
                <p>{coreData[currCore]?.para}</p>
              </div>
            </div>
          </section>

          {/* <section ref={sectionRefs[2]} >
         
          </section> */}

          {/*  */}

          <section ref={sectionRefs[3]} className="sec3ab" id="sec2abb">
            <div className="cons3ab">
              <h2 className="vision_lead">Our Visionary Leader </h2>
              <div className="main_cos2fds">
                <h5>{data3[0]?.title || "Default Title"}</h5>
                <img src={data3[0]?.img} alt={data3[0]?.title} className="leader-img" />
                <p>{data3[0]?.para || "Default description text."}</p>
                <h5>{data3[0]?.title1 || `Empowering Tomorrow: Our Vision, Our Values

`}</h5>
                <p>{data3[0]?.para1 || `At Applied Energy Technologies, our strategy is built on four pillars driving the future of energy: Decarbonisation, Decentralisation, Digitalisation, and Democratisation. We are dedicated to delivering sustainable, innovative solutions that empower our clients and contribute to a greener planet.

Decarbonisation: We help customers cut carbon emissions by 40% over five years by integrating renewables and optimizing energy use, supporting their transition to cleaner energy.
Decentralisation: Through microgrids and distributed energy resources, we provide resilient, localized systems that promote energy independence and reduce reliance on centralized grids.
`}</p>
                <p>{data3[0]?.para2 || `Digitalisation: Leveraging IoT sensors and AI platforms, we offer real-time insights, predictive maintenance, and enhanced operational efficiency for optimal energy management.
Democratisation: We make clean energy accessible by offering scalable, affordable solutions, particularly in emerging markets, promoting global equity and sustainability.
These four D’s form the foundation of our vision to lead the global energy transition, creating a future where energy is cleaner, smarter, and available to all.`}</p>
              </div>
            </div>
          </section>





        </div>

      </div>
    </div>
  );
}

export default AboutSec2;
