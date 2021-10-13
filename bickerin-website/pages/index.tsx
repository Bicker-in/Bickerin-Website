import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import AppContainer from '../components/AppContainer'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div>
      <AppContainer>
        <main>
          <article>
            <div className="h-screen flex flex-col items-center justify-center">
              <div className="md:max-w-4xl px-4">
                <h2 className="article-title">
                  GitHub, GitLab, Jira, and other dev tools in ONE chat room!
                </h2>
                <p className="">
                  Bickerin helps you centralize all your team’s important Git Issues, Jira Task deadlines, and other dev tools in shared one chatroom.
                </p>
              </div>
            </div>
          </article>
          <article>
            <div className="h-screen flex flex-col items-center justify-center">
              <div className="md:max-w-4xl px-4">
                <h2 className="article-title">
                  GitHub, GitLab, Jira, and other dev tools in ONE chat room!
                </h2>
                <p className="">
                  Bickerin helps you centralize all your team’s important Git Issues, Jira Task deadlines, and other dev tools in shared one chatroom.
                </p>
              </div>
            </div>
          </article>
        </main>
      </AppContainer>
    </div>
  )
}

export default Home
