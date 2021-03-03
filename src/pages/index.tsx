import Head from 'next/head'
import { ChalllengeBox } from '../components/ChallengeBox';
import { CompletedChallenges } from '../components/CompletedChallenges';
import { Countdown } from '../components/Countdown';
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from '../components/Profile';
import { CountdownProvider } from '../contexts/CountdownContext';
import styles from '../styles/pages/Home.module.css'

import { GetServerSideProps } from 'next'
import { ChallengesProvider } from '../contexts/ChallengesContext';
import { UserContext, UsersProvider } from '../contexts/UserContext';
import { useContext } from 'react';
import UserPage from './userPage';
import { useRouter } from 'next/router';

interface HomeProps {
  level : number
  currentExperience : number
  challengesCompleted :number
  userName : string
}

export default function Home(props:HomeProps) {
  const router = useRouter()
  return (

    <div>
      { false ?(
        <ChallengesProvider 
        level = {props.level}
        currentExperience = {props.currentExperience}
        challengesCompleted = {props.challengesCompleted}
      >
        <div className={styles.container}>
  
          <Head>
            <title>Início | Move.it</title>
          </Head>
        <ExperienceBar/ >
        <CountdownProvider>
          <section>
            <div>
              <Profile/>
              <CompletedChallenges/>
              <Countdown/>
            </div>
            <div>
              <ChalllengeBox/>
            </div>
  
          </section>
        </CountdownProvider>
        </div>
      </ChallengesProvider>
      ):(
         
       <UserPage></UserPage>
     
       
      )}
   </div>
   
    
  )
}

export const getServerSideProps:GetServerSideProps = async (ctx) => {
  const {level,currentExperience,challengesCompleted } = ctx.req.cookies
  return {
    
    props: {
      
      level:Number(level),
      currentExperience:Number(currentExperience),
      challengesCompleted:Number(challengesCompleted),
    }
  }
}
