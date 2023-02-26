import { Link, Route, Routes } from 'react-router-dom';
import Form from './components/Form';
import NewTable from './components/NewTable';
import { UsersProvider }from './Context/usersContext';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
    <UsersProvider>
     
    <div>
    </div>
    <Routes>
      <Route path='/' element= {<NewTable/>} />,
      <Route path='/form' element= {<Form/>} />,
    </Routes>
   
    
    </UsersProvider>
    </BrowserRouter>
   </>
   );
}

export default App;
