import { Routes,Route } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import AddMemberPage from './pages/AddMemberPage'
import AllMembersPage from './pages/AllMembersPage'

function App() {

  return (
    <>
        <MainLayout>
          <Routes>
            <Route path="/" element={<AllMembersPage/>}></Route>
            <Route path="/add-member" element={<AddMemberPage/>}></Route>
          </Routes>
        </MainLayout>
    </>
  )
}

export default App
