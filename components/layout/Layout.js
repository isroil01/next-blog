import React,{Fragment} from 'react'
import MainNav from './MainNav'

const Layout = ({children}) => {
  return (
    <Fragment>
        <MainNav /> 
        <main>
            {children}
        </main>
    </Fragment>
  )
}

export default Layout