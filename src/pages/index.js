import React from "react";
import Meta from "./../components/Meta";
import HeroSection from "./../components/HeroSection";
import ClientsSection from "./../components/ClientsSection";
import FeaturesSection from "./../components/FeaturesSection";
import TestimonialsSection from "./../components/TestimonialsSection";
import NewsletterSection from "./../components/NewsletterSection";
import { useDarkMode } from "../util/theme";
import lost from "../resources/lost.svg";
import "../resources/index.css";
import FaqSection from "../components/FaqSection";
function IndexPage(props) {
  const darkMode = useDarkMode();
  return (
    <>
      <Meta />
      <HeroSection
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Meet Your Goals Or Pay The Price"
        subtitle="Set goals. Form contracts. Pay the penalty if you fail."
        image={darkMode.value ? lost : lost}
        buttonText="Pricing"
        buttonColor="primary"
        buttonPath="/pricing"
      />
      {/* <ClientsSection
        bgColor="light"
        size="normal"
        bgImage=""
        bgImageOpacity={1}
        title=""
        subtitle=""
      /> */}
      <FeaturesSection
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Lock In Desired Future Behavior"
        subtitle=""
        buttonAboveText="More questions?"
        buttonText="FAQ"
        buttonColor="primary"
        buttonPath="/faq"
        button2Path="/contact"
      />
      {/* <TestimonialsSection
        bgColor="light"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Here's what people are saying"
        subtitle=""
      /> */}
      <FaqSection
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Frequently Asked Questions"
        subtitle=""
      />
      {
        <NewsletterSection
          bgColor="default"
          size="medium"
          bgImage=""
          bgImageOpacity={1}
          title="Subscribe to our newsletter!"
          subtitle="Be the first to know when we release new features"
          buttonText="Subscribe"
          buttonColor="primary"
          inputPlaceholder="Enter your email"
          subscribedMessage="You are now subscribed!"
        />
      }
    </>
  );
}

export default IndexPage;
