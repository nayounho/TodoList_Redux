import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Footer from 'Pages/Footer/Footer';
import Header from 'Pages/Header/Header';
import Main from 'Pages/Main/Main';

function App() {
  return (
    <Router>
      <Header />
      <Link to='/todoList'>todoList</Link>
      <div>
        <Route path='/todoList'>
          <Main />
          <Footer />
        </Route>
      </div>
      <Link to='/empty'>empty</Link>
      <div>
        <Route path='/empty'>
          <div style={{ fontSize: '100px' }}>Empty</div>
        </Route>
      </div>
    </Router>
  );
}

export default App;
