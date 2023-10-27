import { useContext } from 'react'
import { HistoryContainer, HistoryList, Status } from './styles'
import { CyclesContext } from '../../contexts/CyclesContextProvider'
import { DateTime } from 'luxon'
export function History() {
  const { cycles } = useContext(CyclesContext)

  return (
    <HistoryContainer>
      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {cycles.map((cycle) => {
              return (
                <tr key={cycle.id}>
                  <td>{cycle.task}</td>
                  <td>{cycle.minutesAmount} minutos</td>
                  <td>
                    {DateTime.fromISO(new Date(cycle.startDate).toISOString(), {
                      locale: 'pt',
                    }).toRelative()}
                  </td>

                  <td>
                    {cycle.finishedDate && (
                      <Status $statusColor="green">Concluido</Status>
                    )}
                    {cycle.interruptedDate && (
                      <Status $statusColor="red">Interrompido</Status>
                    )}
                    {!cycle.interruptedDate && !cycle.finishedDate && (
                      <Status $statusColor="yellow">Em andamento</Status>
                    )}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
