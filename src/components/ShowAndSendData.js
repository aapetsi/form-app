import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { fetchData } from '../actions'
import Loader from 'react-loader-spinner'

const Wrapper = styled.div`
  width: 90%;
  padding: 30px;
  margin: 0 auto;
  text-align: center;
`

const Button = styled.button`
  background-color: #1976d2;
  width: 200px;
  color: white;
  height: 32px;
  border-radius: 1px;
  text-transform: uppercase;
  font-weight: bold;
`

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
`

const ShowAndSendData = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    let api = 'https://webhook.site/8a874276-60f5-4a29-a15b-52f2b208bf64'
    fetchData(api, dispatch)
  }, [dispatch])
  const userState = useSelector((state) => state.user)

  const sortedByName = [...userState.usersList]
  sortedByName.sort((a, b) => {
    let fa = a.name.toLocaleLowerCase(),
      fb = b.name.toLocaleLowerCase()

    if (fa < fb) return -1
    if (fa > fb) return 1
    return 0
  })

  const sortedByAge = [...userState.usersList]
  sortedByAge.sort((a, b) => (Number(a.age) > Number(b.age) ? 1 : -1))

  return (
    <Wrapper>
      <h1>Show and send data</h1>
      <h2>All Users order by name</h2>
      {userState.isLoading && (
        <Loader type='Circles' color='#000' height={100} width={100} />
      )}
      <ol>
        {sortedByName.map((user) => (
          <li key={user.name}>
            <span>
              {user.name} ({user.age})
            </span>
          </li>
        ))}
      </ol>
      <h2>All Users order by age</h2>
      {userState.isLoading && (
        <Loader type='Circles' color='#000' height={100} width={100} />
      )}
      <ol>
        {sortedByAge.map((user) => (
          <li key={user.name}>
            <span>
              {user.name} ({user.age})
            </span>
          </li>
        ))}
      </ol>
      <ButtonContainer>
        <Button>Send data order by age</Button>
        <Button>Send data order by name</Button>
        <Button>
          <Link to='/'>Previous</Link>
        </Button>
      </ButtonContainer>
    </Wrapper>
  )
}

export default ShowAndSendData
