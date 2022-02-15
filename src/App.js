import './App.css'
import styled from 'styled-components'
import Header from './components/Header'
import SideBar from './components/SideBar'

function App() {
  return (
    <AppWrapper>
      <Header/>
      <div className='app__body'>
        <SideBar/>
      </div>
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  background-color: #f1f2f5;
  .app__body {
    display: flex;
  }
`

export default App;
