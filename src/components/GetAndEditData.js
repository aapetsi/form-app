import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Loader from 'react-loader-spinner'
import styled from 'styled-components'
import { fetchData } from '../actions'

const Wrapper = styled.div`
  width: 90%;
  padding: 30px;
  margin: 0 auto;
  text-align: center;
`

const UsersList = styled.li`
  list-style: none;
`

const Heading = styled.div`
  margin-top: 15px;
  text-align: center;
  font-size: 32px;
  font-weight: bold;
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

const Input = styled.input`
  width: 200px;
  padding: 5px;
  margin: 5px;
`

const InputNumber = styled(Input)`
  width: 100px;
`

const NextButton = styled(Button)`
  width: 10%;
`

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
`

const GetAndEditData = () => {
  const [users, setUsers] = useState([])
  const dispatch = useDispatch()
  const userState = useSelector((state) => state.user)

  useEffect(() => {
    let api = 'https://webhook.site/8a874276-60f5-4a29-a15b-52f2b208bf64'
    fetchData(api, dispatch)
    setUsers([...userState.usersList])
  }, [dispatch])

  const handleAddUserSpecificData = (e) => {
    e.preventDefault()
    console.log('this works')
  }

  const handleAddUserGenericAndSpecificData = (e) => {
    e.preventDefault()
    console.log('this works')
  }

  const handleNext = (e) => {
    console.log('test')
  }

  const handleChange = (e) => {}

  return (
    <Wrapper>
      <Heading>Generic data</Heading>
      <p>Users</p>
      {userState.isLoading && (
        <Loader type='Circles' color='#000' height={100} width={100} />
      )}
      <ul>
        {users.map((user) => (
          <div key={user.name}>
            <Input name={user.name} value={user.name} onChange={(e) => {}} />
            <InputNumber
              name={`${user.name}Number`}
              value={user.age}
              onChange={(e) => {}}
            />
          </div>
        ))}
        {/* <UsersList>
          <Input />
          <InputNumber type='number' />
        </UsersList>
        <UsersList>
          <Input />
          <InputNumber type='number' />
        </UsersList>
        <UsersList>
          <Input />
          <InputNumber type='number' />
        </UsersList> */}
      </ul>
      <Button onClick={handleAddUserGenericAndSpecificData}>
        Add user in generic and specific data
      </Button>
      <Heading>Specific data</Heading>
      <p>Users</p>
      <ul>
        <UsersList>
          <Input />
          <InputNumber type='number' />
        </UsersList>
      </ul>
      <ButtonContainer>
        <Button onClick={handleAddUserSpecificData}>
          Add user only in specific data
        </Button>
        <NextButton>
          <Link to='/show-and-send'>Next</Link>
        </NextButton>
      </ButtonContainer>
    </Wrapper>
  )
}

export default GetAndEditData
