import React, { useEffect, useRef } from "react"
import Header from "../components/Header"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Footer from '../components/Footer'

gsap.registerPlugin(ScrollTrigger)

const activities = [
  {
    title: "Resturant",
    description: "Experience the taste of perfection.Fresh, flavorful dishes for every palate. A blend of local and international cuisines. Perfect for any gathering or special occasion. Dine in comfort and style with us.",
    image: "/resturant.avif"
  },
  {
    title: "Excursions",
    description: "Embark on unforgettable adventures, explore breathtaking destinations, enjoy custom tours for every traveler, perfect for families, couples, and solo explorers, and create lasting memories with us.",
    image: "./excursion.webp"
  },
  {
    title: "Beach & Pool",
    description: "Relax under the sun on pristine sands, dive into crystal-clear waters, unwind by the serene poolside, enjoy refreshing drinks and snacks, and create perfect moments of leisure and joy.",
    image: "./beach.jpg"
  },
  {
    title: "Fitness Center",
    description: " Stay active with state-of-the-art equipment, enjoy a variety of workout options, maintain your routine while traveling, benefit from a clean and modern space, and feel energized throughout your stay.",
    image: "./gym.webp"
  }
]

const Main = () => {
  const textRef = useRef(null)
  const bgRef = useRef(null)
  const containerRef = useRef(null)
  const sectionsRef = useRef([])

  useEffect(() => {
    // Hero parallax effect
    gsap.fromTo(
      textRef.current,
      {
        y: 0,
        opacity: 1,
        scale: 1,
      },
      {
        y: -150,
        opacity: 0,
        scale: 0.8,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "center center",
          scrub: 1.5,
        }
      }
    )

    gsap.to(bgRef.current, {
      backgroundPosition: "50% 100%",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      }
    })

    // Modified image animation to trigger earlier
    sectionsRef.current.forEach((section) => {
      const image = section.querySelector('.parallax-image')
      
      gsap.fromTo(image, 
        {
          scale: 1.5,
          clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)"
        },
        {
          scale: 1,
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          duration: 1.5,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "top center",
            toggleActions: "play none none reverse",
          }
        }
      )
    })
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1">
        <div 
          ref={containerRef}
          className="h-[100vh] relative overflow-hidden"
        >
          <div 
            ref={bgRef}
            className="w-full h-full bg-[url('./bg.jpg')] bg-cover bg-center bg-no-repeat fixed top-0 left-0 before:content-[''] before:absolute before:inset-0 before:bg-black/30 z-0"
          ></div>
          <Header></Header>
          <div className="w-full h-[93vh] flex items-end justify-center pb-32 relative z-10">
            <h1 
              ref={textRef}
              className="text-white text-6xl font-StyleScript text-center"
            > 
              <span className="text-9xl ms-3">Hotel California</span><br/>
              <span className="text-4xl">Your Perfect Stay Awaits</span>
            </h1>
          </div>
        </div>

        <div className="bg-[#0C0C0C]">
          {activities.map((activity, index) => (
            <section 
              key={index} 
              ref={el => sectionsRef.current[index] = el}
              className="relative min-h-[100vh] border-b border-zinc-800 overflow-hidden"
            >
              <div className="flex flex-col lg:flex-row min-h-[100vh]">
                <div className={`w-full lg:w-2/5 flex items-center justify-center order-2 relative z-10 ${
                  index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'
                }`}>
                  <div className="relative w-full h-full flex items-center justify-center">
                    <div className="absolute inset-0 backdrop-blur-md bg-black/30 lg:bg-black/50"></div>
                    
                    <div className="relative z-10 max-w-xl px-8 lg:px-16 py-20">
                      <h2 className="text-5xl lg:text-7xl text-white font-StyleScript mb-8">
                        {activity.title}
                      </h2>
                      <p className="text-zinc-100 text-lg leading-relaxed mb-12">
                        {activity.description}
                      </p>
                      <button className="group inline-flex items-center">
                        <span className="relative overflow-hidden">
                          <span className="text-white text-sm tracking-[0.2em] uppercase">
                            Discover
                          </span>
                          <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>

                <div className={`w-full lg:w-3/5 relative order-1 ${
                  index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'
                }`}>
                  <div className="absolute inset-0 overflow-hidden">
                    <img 
                      src={activity.image} 
                      alt={activity.title}
                      className="parallax-image w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/10"></div>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
      
      <Footer />
    </div>
  )
}

export default Main