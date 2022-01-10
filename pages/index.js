import Head from 'next/head'
import { useState, useEffect } from 'react'


export default function Home() {

  const [party, setParty] = useState(false)
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)


  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date()
    
      const target = new Date('01/10/2022 08:25:20')
      const difference = target.getTime() - now.getTime()

      console.log('The time is now', now);
      // console.log('The time is target', target);

      const d = Math.floor(difference / (1000 * 60 * 60 * 24))
      setDays(d)

      console.log(d);

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h)

      const m = Math.floor(
        (difference % (1000 * 60 * 60 )) / (1000 * 60)
      );
      setMinutes(m)

      const s = Math.floor(
        (difference % (1000 * 60)) / 1000);
      setSeconds(s);
      
      if (d <= 0 && h <= 0 && m <= 0 && s <= m) { 
        setParty(true)

      }

    }, 1000)

    return () => {
      clearInterval(interval)
    }

  }, [])

  return (
    <div>
      <Head>
        <title>Next Time App</title>
        <meta name="description" content="This is a Timer Application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

       <main>
      {
        party ? (
          <p>It is Party Time</p>
          ) :
            
        (
        <div>
            <h2>Main</h2>
          <div>
            <span>{days}</span> <span>Days</span>
          </div>

          <div>
            <span>{hours}</span> <span>hours</span>
          </div>

          <div>
            <span>{minutes}</span> <span>minutes</span>
          </div>

          <div>
            <span>{seconds}</span> <span>seconds</span>
          </div>
        </div>
            
        )
      }
     
      </main>
      
    </div>
  )
}
