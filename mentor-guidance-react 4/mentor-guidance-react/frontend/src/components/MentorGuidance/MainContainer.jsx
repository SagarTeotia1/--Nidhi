import React from 'react'
import Hero from './Sections/Hero'
import CategorySection from './Sections/CategorySection'
import CardsSection from './sections/CardSection'
import ExpertLearning from './sections/ExpertLearning'
import PhilosophySection from './Sections/PhilosophySection'
import ExpertAdviceSection from './Sections/ExpertAdviceSection'
import MentorshipServices from './Sections/MentorshipServices'
import TestimonialSection from './Sections/TestimonialSection'
import PricingSection from './Sections/PricingSection'
import BuildTeamSection from './sections/BuildTeamSection'




const MainContainer = () => {
  return (
    <main className='main-content'>
     {/*  hero section */}
     <Hero/>

     {/*Catgeory section */}
     <CategorySection/>

     {/*Card section*/}
     <CardsSection/>

     {/*Expert Learning section */}
     <ExpertLearning/>

     {/*Philosophy section */}
     <PhilosophySection/>

     {/*Expert-Advice section */}
     <ExpertAdviceSection/>

     {/*Mentorship sevice  */}
     <MentorshipServices/>


     {/*Testimonial section */}
     <TestimonialSection/>

     {/*Price Section */}
     <PricingSection/>

     {/*Build Team section */}
     <BuildTeamSection/>

    </main>
  )
}

export default MainContainer
