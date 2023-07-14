import Navigation from "@/components/Shared/Navigation";
import { Fragment } from "react";
import Hero from "@/components/Home/Hero";
import Carousel from "@/components/Carousel/Carousel";
import Features from "@/components/Home/Features";
import Services from "@/components/Home/Services/Services";
import Work from "@/components/Home/OurWork/Work";
import Plans from "@/components/Home/Plans/Plans";
import MemberShips from "@/components/Home/Memberships/MemberShips";
import TrustedBy from "@/components/Home/TrustedBy";
import BookMeeting from "@/components/Home/BookMeeting/BookMeeting";
import FrequentlyAskedQuestions from "@/components/Home/FrequentlyAskedQuestions/FrequentlyAskedQuestions";
import Footer from "@/components/Shared/Footer";

export const metadata = {
  title: 'Welcome | EverDev - Your Solution',
  description: 'EverDev - Your Solution',
  metadata: ""
}

export default function Home() {
  return (
    <Fragment>
      <Navigation />
      <Hero />
      <Carousel />
      <Features />
      <Services />
      <Work />
      <Plans />
      <MemberShips />
      <TrustedBy />
      <BookMeeting />
      <FrequentlyAskedQuestions />
      <Footer />
    </Fragment>
  );
}
