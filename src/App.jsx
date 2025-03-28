
import './App.css'
import EmployeeComponent from './Components/EmployeeComponent';
import FooterComponent from './Components/FooterComponent'
import HeaderComponent from './Components/HeaderComponent'
import ListEmployeeComponent from './Components/ListEmployeeComponent'
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
  

  return (
    <>
      <BrowserRouter>
      <div className='app-wrapper'>
        <HeaderComponent />
        <main className='main-content'>
          <Routes>
            {/* //http://localhost:3000 */}
            <Route path='/' element = { <ListEmployeeComponent /> }> </Route>
            {/* //http://localhost:3000/employees */}
            <Route path='/employees' element = { <ListEmployeeComponent /> }> </Route>
            {/* //http://localhost:3000/add-employee */}
            <Route path='/add-employee' element = { <EmployeeComponent /> }></Route>
            {/* //http://localhost:3000/edit-employee/1 */}
            <Route path='/edit-employee/:id' element = { <EmployeeComponent /> }></Route>
          </Routes>
          </main>
        <FooterComponent />
        </div>
      </BrowserRouter>
        
    </>
  )
}

export default App
