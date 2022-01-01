import styled from "styled-components";
import Colors from "./assets/Colors";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import NavMenu from "./assets/components/NavMenu";
import HomePage from "./assets/components/HomePage";

const AppEl = styled.div`
  display: flex;
  flex-direction: column;
  posistion: absolute;
  left: 0;
  top : 0;
  width: 100vw;
  overflow: hidden;
  height: 100vh;
`;

const Title = styled.h1`
  color: ${Colors.Primary};
  border: 2px solid ${Colors.Primary};
  padding: 0.5rem 1rem;
  border-radius: 20px;
`;

const Pages=styled.div`
  flex : 1;
  display: flex;
  overflow: hidden;
`;

function App() {
  return (
  <Router>
     <AppEl>
       <Pages>
         <Routes>
           <Route excat path="/store" element={<div>Store</div>} />
           <Route excat path="/product" element={<div>Product</div>} />
           <Route excat path="/" element={<HomePage />} />
         </Routes>
       </Pages>
       <NavMenu />
    </AppEl>
  </Router>
  );
}

export default App;
