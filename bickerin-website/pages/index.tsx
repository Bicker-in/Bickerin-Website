import type { NextPage } from 'next';
import Image from 'next/image';
import AppContainer from '../components/AppContainer';
import ArticleSection from '../components/ArticleSection';
import LargeFeatureDescript from '../components/LargeFeatureDescript';
import Button from '../components/Button';
import textContent from '../website-text-content.json';

const Home: NextPage = () => {
  return (
    <div>
      <AppContainer>
        <main>
          <ArticleSection
            title={textContent.mainHomepageTitle}
            description={textContent.mainHomepageDesc}
          >
            <Button>
              <h3 className="font-primary-font text-lg lg:text-3xl">
                Sign Up For Beta -&gt;
              </h3>
            </Button>
          </ArticleSection>
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
          <div className="flex flex-col gap-40 mb-40">
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
          </div>
        </main>
      </AppContainer>
    </div>
  )
}

export default Home
