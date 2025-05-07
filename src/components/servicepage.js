import React, { useState, useEffect } from 'react';
import image from './images/1.jpg';
import arvrImage from './images/ar-vr.jpg';
import brandImage from './images/brand.jpg';
import eventImage from './images/event.jpg';
import marketingImage from './images/marketing.jpg';
import outdoorImage from './images/outdoor.jpg';
import performanceImage from './images/performence.jpg';

import twoImage from './images/2.jpg';
import uiuxImage from './images/UI-UX.jpg';
import websiteImage from './images/website.jpg';
import  application  from './images/application.jpg';



const PLACEHOLDER_IMAGE = './images/performence.jpg';

const ServicePage = () => {
  const sliderImages = [
    './images/application.jpg',
    './images/ar-vr.jpg',
    './images/brand.jpg',
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % sliderImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [sliderImages.length]);

  return (
    <div className="bg-gray-900 text-white">
      
      <section className="py-40 px-10 text-left flex flex-col items-start justify-center min-h-screen">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-5">
          Experience
          <br />
          the best services.
        </h1>
        <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
          Driving powerful solutions with creativity, strategy, and flawless
          execution.
        </p>
      </section>

      
      <section className="py-16">
        <div className="w-full max-w-3xl mx-auto h-[400px] overflow-hidden relative">
          {sliderImages.map((imageUrl, index) => {
            const isFirst = index === 0;
            return (
              <img
                key={index}
                src={imageUrl}
                alt={`Slide ${index + 1}`}
                className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${isFirst ? 'opacity-100' : 'opacity-0'
                  }`}
              />
            );
          })}
        </div>
      </section>

      
      <section className="py-20 px-4 md:px-8 lg:px-16 xl:px-32">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
            Services
          </h2>
          <p className="text-lg text-gray-400 mb-16">
            Purposeful Strategy, Exceptional Design, Real Results.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <div className="bg-gray-800 p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:scale-[1.02] border border-gray-700">
              <div className="w-16 h-16 rounded-full bg-gray-700 flex items-center justify-center mb-6">
                <div className="text-3xl text-blue-400">A</div>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Amplify</h3>
              <p className="text-gray-400">
                Crafting impactful branding, engaging content, and result-driven
                marketing strategies to take your brand to the next level.
              </p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:scale-[1.02] border border-gray-700">
              <div className="w-16 h-16 rounded-full bg-gray-700 flex items-center justify-center mb-6">
                <div className="text-3xl text-green-400">I</div>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Innovate</h3>
              <p className="text-gray-400">
                Our web and app development solutions, paired with cutting-edge
                UI/UX design, bring your digital ideas to life.
              </p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:scale-[1.02] border border-gray-700">
              <div className="w-16 h-16 rounded-full bg-gray-700 flex items-center justify-center mb-6">
                <div className="text-3xl text-yellow-400">E</div>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Execute</h3>
              <p className="text-gray-400">
                From immersive event activations to strategic media planning, we
                deliver campaigns that captivate and convert.
              </p>
            </div>
          </div>
        </div>
      </section>

      
      <section className="bg-gray-900 py-20 px-4 md:px-8 lg:px-16 xl:px-32">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img
              src={marketingImage}
              alt="Content Production"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2">
            <p className="text-gray-500 text-lg mb-2">01 HOM</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Content Production
            </h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              We believe that strong storytelling is key to effective marketing.
              Our content creation team focuses on:
            </p>
            <ul className="list-none p-0">
              <li className="mb-6 leading-relaxed">
                <strong className="font-semibold text-gray-200">
                  Content Creation:
                </strong>
                <br />
                Engage your audience with high-quality, compelling content that
                aligns with your brand's voice and values.
              </li>
              <li className="mb-6 leading-relaxed">
                <strong className="font-semibold text-gray-200">
                  Social Media Management:
                </strong>
                <br />
                Strengthen your brand's presence across all platforms with
                consistent, authentic engagement that keeps your audience
                connected and involved.
              </li>
              <li className="mb-6 leading-relaxed">
                <strong className="font-semibold text-gray-200">
                  Professional Photoshoots and Video Production:
                </strong>
                <br />
                Capture the essence of your brand with stunning visuals that tell
                your story and resonate with your audience on a deeper level.
              </li>
              <li className="mb-6 leading-relaxed">
                <strong className="font-semibold text-gray-200">
                  At BBIC, we specialize in capturing life’s most precious
                  moments,
                </strong>
                <br /> transforming them into unforgettable experiences. From
                weddings and anniversaries, to baby showers and bachelorette
                parties, our expert team provides bespoke coverage, preserving
                every detail with meticulous attention. We deliver timeless,
                nostalgic treasures, telling your story with love and care, so you
                can cherish the memories of your special day for a lifetime.
              </li>
            </ul>
          </div>
        </div>
      </section>

      
      <section className="bg-gray-900 py-20 px-4 md:px-8 lg:px-16 xl:px-32">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img
              src={performanceImage}
              alt="Performance Marketing"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2">
            <p className="text-gray-500 text-lg mb-2">02 HOM</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Performance Marketing
            </h2>
            <p className="text-gray-400 leading-relaxed text-lg">
              We evaluate brand's specific goals and target audience to develop
              tailored campaigns across various digital channels. Our services
              include creating high-converting digital ads that connect with the
              right audience at the right moment. Our team uses advanced tools
              and analytics to monitor performance, optimize strategies, and
              ensure you spend wisely. We turn insights into results that elevate
              your brand.
            </p>
          </div>
        </div>
      </section>

     
      <section className="bg-gray-900 py-20 px-4 md:px-8 lg:px-16 xl:px-32">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img
              src={brandImage}
              alt="Branding"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2">
            <p className="text-gray-500 text-lg mb-2">03 HOM</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Branding</h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              Our team works to give your brand a complete experience. We help you
              create an authentic identity that resonates with your audience and
              create a strong presence.
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              <strong className="font-semibold text-gray-200">
                Brand Identity Development:
              </strong>{' '}
              Craft a unique brand identity that reflects your vision, values, and
              what makes you stand out.
            </p>
            <ul className="list-none p-0">
              <li className="mb-4 leading-relaxed">
                <strong className="font-semibold text-gray-200">
                  Cohesive Brand Experience:
                </strong>{' '}
                Build a seamless brand journey across every touchpoint, ensuring
                your message is clear and consistent.
              </li>
              <li className="mb-4 leading-relaxed">
                <strong className="font-semibold text-gray-200">
                  Communication & Brand Positioning:
                </strong>{' '}
                Strategically position your brand to communicate clearly and
                effectively with your target audience.
              </li>
              <li className="mb-4 leading-relaxed">
                <strong className="font-semibold text-gray-200">
                  Influencer Marketing:
                </strong>{' '}
                Partner with authentic influencers to boost your brand's
                credibility and visibility within your community.
              </li>
              <li className="mb-4 leading-relaxed">
                <strong className="font-semibold text-gray-200">
                  CGI Video Creation:
                </strong>{' '}
                Harness the power of visually striking CGI videos to elevate your
                brand's storytelling and captivate your audience.
              </li>
              <li className="mb-4 leading-relaxed">
                <strong className="font-semibold text-gray-200">
                  Engagement & Impression:
                </strong>{' '}
                Build a strong foundation for your brand that creates lasting
                connections and leaves a powerful impression on your audience.
              </li>
            </ul>
          </div>
        </div>
      </section>

      
      <section className="bg-gray-900 py-20 px-4 md:px-8 lg:px-16 xl:px-32">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img
              src={websiteImage}
              alt="Website Development"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2">
            <p className="text-gray-500 text-lg mb-2">04 HOM</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Website Development
            </h2>
            <p className="text-gray-400 leading-relaxed text-lg mb-6">
              Our website development services focus on creating responsive web
              designs that are not only visually stunning but also optimized for
              high performance.
            </p>
            <ul className="list-disc pl-5">
              <li className="mb-2 leading-relaxed text-gray-300">Angular JS</li>
              <li className="mb-2 leading-relaxed text-gray-300">React JS</li>
              <li className="mb-2 leading-relaxed text-gray-300">Vue JS</li>
              <li className="mb-2 leading-relaxed text-gray-300">Node JS</li>
            </ul>
          </div>
        </div>
      </section>

      
      <section className="bg-gray-900 py-20 px-4 md:px-8 lg:px-16 xl:px-32">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="w-full aspect-video bg-gray-700 rounded-lg shadow-lg">


              <img
                src={application}
                alt="Website Development"
                className="w-full rounded-lg shadow-lg"
              />
            </div>

          </div>
          <div className="md:w-1/2">
            <p className="text-gray-500 text-lg mb-2">05 HOM</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Application Development
            </h2>
            <p className="text-gray-400 leading-relaxed text-lg mb-6">
              Our team specializes in developing high-performance mobile and web
              applications, ensuring seamless functionality and user-friendly
              interfaces across all platforms.
            </p>
            <ul className="list-disc pl-5">
              <li className="mb-2 leading-relaxed text-gray-300">
                API development
              </li>
              <li className="mb-2 leading-relaxed text-gray-300">
                Cloud migration
              </li>
              <li className="mb-2 leading-relaxed text-gray-300">WordPress</li>
              <li className="mb-2 leading-relaxed text-gray-300">
                Flutter Framework
              </li>
            </ul>
          </div>
        </div>
      </section>

      
      <section className="bg-gray-900 py-20 px-4 md:px-8 lg:px-16 xl:px-32">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="w-full aspect-video bg-gray-700 rounded-lg shadow-lg">

              <img
                src={arvrImage}
                alt="Website Development"
                className="w-full rounded-lg shadow-lg"
              />

            </div>
          </div>
          <div className="md:w-1/2">
            <p className="text-gray-500 text-lg mb-2">06 HOM</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              AR/VR Solutions
            </h2>
            <p className="text-gray-400 leading-relaxed text-lg mb-6">
              Transform audience engagement with our cutting-edge AR/VR
              solutions. Create immersive experiences that captivate and inspire,
              fostering deeper connections with your brand through interactive
              storytelling.
            </p>
            <ul className="list-disc pl-5">
              <li className="mb-2 leading-relaxed text-gray-300">AR Filters</li>
              <li className="mb-2 leading-relaxed text-gray-300">
                Immersive Website
              </li>
              <li className="mb-2 leading-relaxed text-gray-300">
                Digital Website Walkthrough
              </li>
            </ul>
          </div>
        </div>
      </section>

      
      <section className="bg-gray-900 py-20 px-4 md:px-8 lg:px-16 xl:px-32">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="w-full aspect-video bg-gray-700 rounded-lg shadow-lg">

              <img
                src={eventImage}
                alt="Website Development"
                className="w-full rounded-lg shadow-lg"
              />

            </div>
          </div>
          <div className="md:w-1/2">
            <p className="text-gray-500 text-lg mb-2">07 HOM</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Event Activation
            </h2>
            <p className="text-gray-400 leading-relaxed text-lg">
              Our focus is on transforming events into unforgettable
              experiences that engage your audience. Our event activation team
              is engaged throughout the entire process, from concept
              development to execution, ensuring every detail aligns with your
              brand's vision. Whether it's a product launch, trade show, or
              experiential marketing event, we create immersive environments
              that make a lasting impact.
            </p>
          </div>
        </div>
      </section>

      
      <section className="bg-gray-900 py-20 px-4 md:px-8 lg:px-16 xl:px-32">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="w-full aspect-video bg-gray-700 rounded-lg shadow-lg">

              <img
                src={marketingImage}
                alt="Website Development"
                className="w-full rounded-lg shadow-lg"
              />

            </div>
          </div>
          <div className="md:w-1/2">
            <p className="text-gray-500 text-lg mb-2">08 HOM</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Media Planning</h2>
            <p className="text-gray-400 leading-relaxed text-lg">
              Effective media planning is key to reaching your target audience.
              At Mantaray, we do thorough research to create tailored media
              strategies that fit your goals and budget. Our team looks at
              market trends, audience behavior, and competition to find the best
              channels for your campaigns. By optimizing your media mix, we make
              sure your message reaches the right people at the right time,
              maximizing its impact and boosting engagement.
            </p>
          </div>
        </div>
      </section>

     
      <section className="bg-gray-900 py-20 px-4 md:px-8 lg:px-16 xl:px-32">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="w-full aspect-video bg-gray-700 rounded-lg shadow-lg">

              <img
                src={outdoorImage}
                alt="Website Development"
                className="w-full rounded-lg shadow-lg"
              />

            </div>
          </div>
          <div className="md:w-1/2">
            <p className="text-gray-500 text-lg mb-2">9 HOM</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Outdoor Advertising
            </h2>
            <p className="text-gray-400 leading-relaxed text-lg">
              We create attention-grabbing outdoor campaigns that stand out in
              busy locations, using striking visuals and strategic placements to
              engage your audience. Our team works closely with you to
              understand your brand's goals and develop messages that resonate.
              Whether it's billboards, transit ads, or posters in high-traffic
              areas, we ensure your brand is always in the spotlight and reaches
              the right people at the right time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicePage;
