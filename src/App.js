import { Link, Route, Routes } from 'react-router-dom';
import Form from './components/Form';
import NewTable from './components/NewTable';
import { UsersProvider }from './Context/usersContext';
import { BrowserRouter } from 'react-router-dom';
import EditItems from './components/EditItems';

function App() {
  return (
    <>
    <UsersProvider>
    <BrowserRouter>
     
    
    <Routes>
      <Route path='/' element= {<NewTable/>} />,
      <Route path='/form' element= {<Form/>} />,
      <Route path='/edit/:id' element= {<EditItems/>} />,
    </Routes>
   
    
    </BrowserRouter>
    </UsersProvider>
   </>
   );
}

export default App;
