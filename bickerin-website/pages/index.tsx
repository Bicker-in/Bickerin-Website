import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import AppContainer from '../components/AppContainer'
import Button from '../components/Button';
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div>
      <AppContainer>
        <main>
          <article>
            <div className="h-screen flex flex-col items-center justify-center">
              <div className="md:max-w-4xl px-4 flex flex-col gap-6 lg:gap-14">
                <h2 className="article-title">
                  GitHub, GitLab, Jira, and other dev tools in ONE chat room!
                </h2>
                <p className="text-base lg:text-2xl md:max-w-xl self-center text-light-gray">
                  Bickerin helps you centralize all your team’s important Git Issues, Jira Task deadlines, and other dev tools in shared one chatroom.
                </p>
                <div className="self-center">
                  <Button>
                    <h3 className="font-primary-font text-lg lg:text-3xl">
                      Sign Up For Beta -&gt;
                    </h3>
                  </Button>
                </div>
              </div>
            </div>
          </article>
        </main>
      </AppContainer>
    </div>
  )
}

export default Home
