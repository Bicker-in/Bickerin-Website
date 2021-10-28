import type { NextPage } from "next";
import Image from "next/image";
import { useLayoutEffect, useEffect, useRef } from "react";
import AppContainer from "../components/AppContainer";
import ArticleSection from "../components/ArticleSection";
import LargeFeatureDescript from "../components/LargeFeatureDescript";
import MainHomePage from "../components/MainHomePage";
import RoadMap from "../components/RoadMap";
import textContent from "../website-text-content.json";

const Home: NextPage = () => {
  // const firstDesktopArticleRef = useRef(null);

  // Sets up the scroll event
  // useEffect(() => {
  //   const topPosition =
  //     firstDesktopArticleRef.current?.getBoundingClientRect?.().top;
  //   console.log(topPosition);
  //   console.log("123213213");
  //   const onScroll = () => {
  //     const scrollPosition = window.scrollY + window.innerHeight;
  //     console.log("123");
  //     if (topPosition < scrollPosition) {
  //       console.log("sdadas");
  //     }
  //   };
  //   window.addEventListener("scroll", onScroll, false);

  //   return () => window.removeEventListener("scroll", onScroll);
  // }, []);

  return (
    <div>
      <AppContainer>
        <main className="flex flex-col gap-10 md:gap-20 lg:gap-30 mb-10 pt-64 sm:pt-0">
          <MainHomePage />
          <div className="md:hidden">
            <ArticleSection
              title={textContent.mobileDescTitle}
              description={textContent.mobileDescBody}
              flipped
            >
              <Image
                src="/bickerin_mock.jpg"
                alt="Bickerin Mock Screenshot"
                width="480"
                height="300"
              />
            </ArticleSection>
          </div>
          <LargeFeatureDescript
            title={textContent.desktopChatTitle}
            desc={textContent.desktopChatDesc}
          >
            <Image
              src="/bicker_chatside_mock.jpg"
              alt="Bickerin Mock Screenshot"
              width="762"
              height="600"
            />
          </LargeFeatureDescript>
          <LargeFeatureDescript
            title={textContent.desktopIntegTitle}
            desc={textContent.desktopIntegDesc}
            reverse
          >
            <Image
              src="/bicker_integrationside_mock.jpg"
              alt="Bickerin Mock Screenshot"
              width="765"
              height="600"
            />
          </LargeFeatureDescript>
          <RoadMap />
        </main>
      </AppContainer>
    </div>
  );
};

export default Home;
