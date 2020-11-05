import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ShowAndSendData from '../components/ShowAndSendData'
import GetAndEditData from '../components/GetAndEditData'

const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Switch>
            <Route path='/show-and-send' component={ShowAndSendData} />
            <Route path='/' component={GetAndEditData} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default AppRouter
