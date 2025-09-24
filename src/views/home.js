import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import Features24 from '../components/features24'
import CTA26 from '../components/cta26'
import Features25 from '../components/features25'
import Pricing14 from '../components/pricing14'
import Steps2 from '../components/steps2'
import Testimonial17 from '../components/testimonial17'
import Contact10 from '../components/contact10'
import Footer4 from '../components/footer4'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>HouseDeLeonWeb</title>
        <meta property="og:title" content="HouseDeLeonWeb" />
      </Helmet>
      <Navbar8
        link1={
          <Fragment>
            <span className="home-text100">
              Link to DevOps Developer Portfolio
            </span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text101">
              Link to HR Recruitment Officer Portfolio
            </span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text102">
              Link to Digital Products Catalogue
            </span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text103">
              Link to Couples For Christ Sanctuary
            </span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="home-text104">DevOps Developer Portfolio</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="home-text105">
              HR Recruitment Officer Portfolio
            </span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="home-text106">Digital Products Catalogue</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="home-text107">
              Couples For Christ Moncton NB Chapter Sanctuary
            </span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text108">Main Action</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text109">Secondary Action</span>
          </Fragment>
        }
        page1Description={
          <Fragment>
            <span className="home-text110">
              Explore the portfolio of a DevOps Developer with Python and
              Microsoft DevOps CI/CD skillset
            </span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="home-text111">
              Discover the stylish portfolio of an HR Recruitment officer with a
              half-body profile picture
            </span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="home-text112">
              Browse through a small and simple catalogue of digital products
              for sale that links to Etsy
            </span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="home-text113">
              Visit the small sanctuary for the Moncton NB Chapter of Couples
              For Christ, a Catholic-based charismatic community
            </span>
          </Fragment>
        }
      ></Navbar8>
      <Hero17
        action1={
          <Fragment>
            <span className="home-text114">Explore DevOps Portfolio</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text115">
              Explore HR Recruitment Portfolio
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text116">
              Explore our diverse portfolios and digital products. Connect with
              us for more information.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text117">Welcome to Our Landing Page</span>
          </Fragment>
        }
      ></Hero17>
      <Features24
        feature1Title={
          <Fragment>
            <span className="home-text118">DevOps Developer Portfolio</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text119">Couples For Christ Community</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text120">Digital Products Catalogue</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text121">
              Explore the portfolio of a DevOps Developer with Python, Microsoft
              DevOps CI/CD skillset
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text122">
              Connect with the Moncton NB Chapter of Couples For Christ
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text123">
              Browse and purchase digital products
            </span>
          </Fragment>
        }
      ></Features24>
      <CTA26
        action1={
          <Fragment>
            <span className="home-text124">Explore Now</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text125">
              Explore our portfolios and products or get in touch with us today!
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text126">Ready to take the next step?</span>
          </Fragment>
        }
      ></CTA26>
      <Features25
        feature1Title={
          <Fragment>
            <span className="home-text127">DevOps Developer Portfolio</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text128">
              HR Recruitment Officer Portfolio
            </span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text129">Digital Products Catalogue</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text130">
              Explore the impressive portfolio of a DevOps Developer showcasing
              Python and Microsoft DevOps CI/CD skillset.
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text131">
              Discover the stylish portfolio of an HR Recruitment Officer with a
              captivating half-body profile picture.
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text132">
              Browse through a small and simple catalogue of digital products
              available for sale, linking directly to Etsy.
            </span>
          </Fragment>
        }
      ></Features25>
      <Pricing14
        plan1={
          <Fragment>
            <span className="home-text133">Basic plan</span>
          </Fragment>
        }
        plan2={
          <Fragment>
            <span className="home-text134">Business plan</span>
          </Fragment>
        }
        plan3={
          <Fragment>
            <span className="home-text135">Enterprise plan</span>
          </Fragment>
        }
        plan11={
          <Fragment>
            <span className="home-text136">Basic plan</span>
          </Fragment>
        }
        plan21={
          <Fragment>
            <span className="home-text137">Business plan</span>
          </Fragment>
        }
        plan31={
          <Fragment>
            <span className="home-text138">Enterprise plan</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text139">
              Choose the perfect plan for you
            </span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="home-text140">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text141">Pricing plan</span>
          </Fragment>
        }
        plan1Price={
          <Fragment>
            <span className="home-text142">$99</span>
          </Fragment>
        }
        plan2Price={
          <Fragment>
            <span className="home-text143">$79</span>
          </Fragment>
        }
        plan3Price={
          <Fragment>
            <span className="home-text144">$19.99</span>
          </Fragment>
        }
        plan1Action={
          <Fragment>
            <span className="home-text145">Purchase Now</span>
          </Fragment>
        }
        plan1Price1={
          <Fragment>
            <span className="home-text146">$200/yr</span>
          </Fragment>
        }
        plan1Yearly={
          <Fragment>
            <span className="home-text147">or $200 yearly</span>
          </Fragment>
        }
        plan2Action={
          <Fragment>
            <span className="home-text148">Buy Now</span>
          </Fragment>
        }
        plan2Price1={
          <Fragment>
            <span className="home-text149">$299/yr</span>
          </Fragment>
        }
        plan2Yearly={
          <Fragment>
            <span className="home-text150">or $299 yearly</span>
          </Fragment>
        }
        plan3Action={
          <Fragment>
            <span className="home-text151">Shop Now</span>
          </Fragment>
        }
        plan3Price1={
          <Fragment>
            <span className="home-text152">$499/yr</span>
          </Fragment>
        }
        plan3Yearly={
          <Fragment>
            <span className="home-text153">or $499 yearly</span>
          </Fragment>
        }
        plan1Action1={
          <Fragment>
            <span className="home-text154">Get started</span>
          </Fragment>
        }
        plan1Yearly1={
          <Fragment>
            <span className="home-text155">or $20 monthly</span>
          </Fragment>
        }
        plan2Action1={
          <Fragment>
            <span className="home-text156">Get started</span>
          </Fragment>
        }
        plan2Yearly1={
          <Fragment>
            <span className="home-text157">or $29 monthly</span>
          </Fragment>
        }
        plan3Action1={
          <Fragment>
            <span className="home-text158">Get started</span>
          </Fragment>
        }
        plan3Yearly1={
          <Fragment>
            <span className="home-text159">or $49 monthly</span>
          </Fragment>
        }
        plan1Feature1={
          <Fragment>
            <span className="home-text160">Customized DevOps solutions</span>
          </Fragment>
        }
        plan1Feature2={
          <Fragment>
            <span className="home-text161">Python automation scripts</span>
          </Fragment>
        }
        plan1Feature3={
          <Fragment>
            <span className="home-text162">
              Microsoft DevOps CI/CD pipelines
            </span>
          </Fragment>
        }
        plan2Feature1={
          <Fragment>
            <span className="home-text163">
              Tailored HR recruitment strategies
            </span>
          </Fragment>
        }
        plan2Feature2={
          <Fragment>
            <span className="home-text164">
              Candidate screening and selection
            </span>
          </Fragment>
        }
        plan2Feature3={
          <Fragment>
            <span className="home-text165">
              Interview coordination services
            </span>
          </Fragment>
        }
        plan2Feature4={
          <Fragment>
            <span className="home-text166">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature1={
          <Fragment>
            <span className="home-text167">Digital products for sale</span>
          </Fragment>
        }
        plan3Feature2={
          <Fragment>
            <span className="home-text168">Instant download options</span>
          </Fragment>
        }
        plan3Feature3={
          <Fragment>
            <span className="home-text169">
              Variety of digital items available
            </span>
          </Fragment>
        }
        plan3Feature4={
          <Fragment>
            <span className="home-text170">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature5={
          <Fragment>
            <span className="home-text171">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature11={
          <Fragment>
            <span className="home-text172">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature21={
          <Fragment>
            <span className="home-text173">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature31={
          <Fragment>
            <span className="home-text174">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature11={
          <Fragment>
            <span className="home-text175">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature21={
          <Fragment>
            <span className="home-text176">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature31={
          <Fragment>
            <span className="home-text177">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature41={
          <Fragment>
            <span className="home-text178">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature11={
          <Fragment>
            <span className="home-text179">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature21={
          <Fragment>
            <span className="home-text180">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature31={
          <Fragment>
            <span className="home-text181">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature41={
          <Fragment>
            <span className="home-text182">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature51={
          <Fragment>
            <span className="home-text183">Feature text goes here</span>
          </Fragment>
        }
      ></Pricing14>
      <Steps2
        step1Title={
          <Fragment>
            <span className="home-text184">
              Explore DevOps Developer Portfolio
            </span>
          </Fragment>
        }
        step2Title={
          <Fragment>
            <span className="home-text185">Meet HR Recruitment Officer</span>
          </Fragment>
        }
        step3Title={
          <Fragment>
            <span className="home-text186">
              Browse Digital Products Catalogue
            </span>
          </Fragment>
        }
        step4Title={
          <Fragment>
            <span className="home-text187">
              Join Couples For Christ Moncton NB
            </span>
          </Fragment>
        }
        step1Description={
          <Fragment>
            <span className="home-text188">
              Discover the impressive portfolio showcasing the skills and
              projects of our talented DevOps Developer with expertise in Python
              and Microsoft DevOps CI/CD.
            </span>
          </Fragment>
        }
        step2Description={
          <Fragment>
            <span className="home-text189">
              Get to know our HR Recruitment Officer through their stylish
              portfolio and learn about their experience and expertise in the
              field.
            </span>
          </Fragment>
        }
        step3Description={
          <Fragment>
            <span className="home-text190">
              Explore our small and simple catalogue of digital products for
              sale, with easy links to purchase directly on Etsy.
            </span>
          </Fragment>
        }
        step4Description={
          <Fragment>
            <span className="home-text191">
              Experience a small sanctuary for the Moncton NB Chapter of Couples
              For Christ, a Catholic-based charismatic community dedicated to
              spiritual growth and fellowship.
            </span>
          </Fragment>
        }
      ></Steps2>
      <Testimonial17
        review1={
          <Fragment>
            <span className="home-text192">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </span>
          </Fragment>
        }
        review2={
          <Fragment>
            <span className="home-text193">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </span>
          </Fragment>
        }
        review3={
          <Fragment>
            <span className="home-text194">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </span>
          </Fragment>
        }
        review4={
          <Fragment>
            <span className="home-text195">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text196">
              Read what our clients have to say about their experience with us.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text197">Testimonials</span>
          </Fragment>
        }
        author1Name={
          <Fragment>
            <span className="home-text198">John Doe</span>
          </Fragment>
        }
        author2Name={
          <Fragment>
            <span className="home-text199">Jane Smith</span>
          </Fragment>
        }
        author3Name={
          <Fragment>
            <span className="home-text200">Michael Johnson</span>
          </Fragment>
        }
        author4Name={
          <Fragment>
            <span className="home-text201">Sarah Williams</span>
          </Fragment>
        }
        author1Position={
          <Fragment>
            <span className="home-text202">CEO, Company ABC</span>
          </Fragment>
        }
        author2Position={
          <Fragment>
            <span className="home-text203">HR Manager, Company XYZ</span>
          </Fragment>
        }
        author3Position={
          <Fragment>
            <span className="home-text204">CTO, Tech Solutions Inc.</span>
          </Fragment>
        }
        author4Position={
          <Fragment>
            <span className="home-text205">
              Marketing Director, New Wave Marketing
            </span>
          </Fragment>
        }
      ></Testimonial17>
      <Contact10
        content1={
          <Fragment>
            <span className="home-text206">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text207">Locations</span>
          </Fragment>
        }
        location1={
          <Fragment>
            <span className="home-text208">Bucharest</span>
          </Fragment>
        }
        location2={
          <Fragment>
            <span className="home-text209">Cluj - Napoca</span>
          </Fragment>
        }
        location1Description={
          <Fragment>
            <span className="home-text210">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </span>
          </Fragment>
        }
        location2Description={
          <Fragment>
            <span className="home-text211">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </span>
          </Fragment>
        }
      ></Contact10>
      <Footer4
        link1={
          <Fragment>
            <span className="home-text212">Portfolio of DevOps Developer</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text213">
              Portfolio of HR Recruitment Officer
            </span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text214">
              Digital Products Catalogue on Etsy
            </span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text215">
              Couples For Christ Moncton NB Chapter
            </span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="home-text216">Link 5</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="home-text217">Terms and Conditions</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="home-text218">Cookies Policy</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="home-text219">Privacy Policy</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Home
