import { useContext, useEffect } from 'react'
import { CountdownContainer, Separator } from './styles'
import { motion } from 'framer-motion'

import { DateTime } from 'luxon'
import { CyclesContext } from '../../../../contexts/CyclesContextProvider'

export function Countdown() {
  const {
    activeCycle,
    amountOfSecondsPassed,
    setHowManySecondsHavePassed,
    markCurrentCycleFinished,
  } = useContext(CyclesContext)

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0
  const currentSeconds = activeCycle ? totalSeconds - amountOfSecondsPassed : 0

  const currentMinutes = Math.floor(currentSeconds / 60)

  const leftOverSeconds = Math.floor(currentSeconds % 60)

  const formattedMinutes = String(currentMinutes).padStart(2, '0')
  const formattedSeconds = String(leftOverSeconds).padStart(2, '0')

  useEffect(() => {
    let interval: number

    if (activeCycle) {
      interval = setInterval(function () {
        const differenceInSeconds = DateTime.now().diff(
          DateTime.fromISO(new Date(activeCycle.startDate).toISOString()),
          'seconds',
        ).seconds

        if (differenceInSeconds > totalSeconds) {
          markCurrentCycleFinished()
          setHowManySecondsHavePassed(totalSeconds)
          clearInterval(interval)
        } else {
          setHowManySecondsHavePassed(differenceInSeconds)
        }
      }, 1000)
    }

    return () => {
      clearInterval(interval)
    }
  }, [
    activeCycle,
    totalSeconds,
    setHowManySecondsHavePassed,
    markCurrentCycleFinished,
  ])

  useEffect(() => {
    if (activeCycle) {
      document.title = `${formattedMinutes}: ${formattedSeconds}`
    } else {
      document.title = 'Pomodoro'
    }
  }, [formattedMinutes, formattedSeconds, activeCycle])

  return (
    // eslint-disable-next-line react/jsx-no-undef
    <CountdownContainer>
      <motion.span animate={{ rotateX: 360 }} transition={{ duration: 1 }}>
        {formattedMinutes[0]}
      </motion.span>
      <motion.span animate={{ rotateX: 360 }} transition={{ duration: 1 }}>
        {formattedMinutes[1]}
      </motion.span>
      <Separator>:</Separator>
      <motion.span animate={{ rotateX: 360 }} transition={{ duration: 1 }}>
        {formattedSeconds[0]}
      </motion.span>
      <motion.span animate={{ rotateX: 360 }} transition={{ duration: 1 }}>
        {formattedSeconds[1]}
      </motion.span>
    </CountdownContainer>
  )
}
