import {
  ReactNode,
  createContext,
  useEffect,
  useReducer,
  useState,
} from 'react'
import { Cycle, CyclesReducer, CyclesState } from '../reducers/cycles/reducer'
import {
  createNewCycleAction,
  markCurrentCycleAsFinishedAction,
} from '../reducers/cycles/actions'
import { DateTime } from 'luxon'

interface CreateCycleData {
  task: string
  minutesAmount: number
}

interface CyclesContextType {
  activeCycle: Cycle | undefined
  cycles: Cycle[]
  amountOfSecondsPassed: number
  activeCycleId: string | null
  markCurrentCycleFinished: () => void
  setHowManySecondsHavePassed: (seconds: number) => void
  createNewCycle: (data: CreateCycleData) => void
  interruptCycle: () => void
}

export const CyclesContext = createContext({} as CyclesContextType)

interface CyclesContextProviderProps {
  children: ReactNode
}

export function CyclesContextProvider({
  children,
}: CyclesContextProviderProps) {
  const [cyclesState, dispatch] = useReducer(
    CyclesReducer,
    {
      cycles: [],
      activeCycleId: null,
    } as CyclesState,
    getStoredCycles,
  )

  useEffect(() => {
    const stateJSON = JSON.stringify(cyclesState)
    localStorage.setItem('@pomodoro:cycles-state-1.0.0', stateJSON)
  }, [cyclesState])

  const { cycles, activeCycleId } = cyclesState
  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  const [amountOfSecondsPassed, setAmountOfSecondsPassed] = useState(() => {
    if (activeCycle) {
      return DateTime.now().diff(
        DateTime.fromISO(new Date(activeCycle.startDate).toISOString()),
        'seconds',
      ).seconds
    }
    return 0
  })

  function setHowManySecondsHavePassed(seconds: number) {
    setAmountOfSecondsPassed(seconds)
  }

  function markCurrentCycleFinished() {
    dispatch(markCurrentCycleAsFinishedAction())
  }

  function getStoredCycles(initialState: CyclesState) {
    const storesCycles = localStorage.getItem('@pomodoro:cycles-state-1.0.0')

    if (storesCycles) return JSON.parse(storesCycles)

    return initialState
  }
  function createNewCycle(data: CreateCycleData) {
    const id = new Date().getTime().toString()
    const newCycle: Cycle = {
      id,
      minutesAmount: data.minutesAmount,
      task: data.task,
      startDate: new Date(),
    }

    dispatch(createNewCycleAction(newCycle))
    setAmountOfSecondsPassed(0)
  }

  function interruptCycle() {
    dispatch(markCurrentCycleAsFinishedAction())
  }

  return (
    <CyclesContext.Provider
      value={{
        activeCycle,
        activeCycleId,
        cycles,
        amountOfSecondsPassed,
        markCurrentCycleFinished,
        setHowManySecondsHavePassed,
        createNewCycle,
        interruptCycle,
      }}
    >
      {children}
    </CyclesContext.Provider>
  )
}
