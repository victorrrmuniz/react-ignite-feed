import { Post } from './Post'
import { Header } from './components/Header';
import './global.css';

function App() {

  return (
    <>
      <Header />
      <Post 
        author="Víctor Muniz dos Santos"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque varius justo et justo tincidunt, ac facilisis sapien tempus. Nulla facilisi. Sed vestibulum lacus id felis fermentum, vitae."
      />

      <Post 
        author="Teste"
        content="teste de um novo post                                     "
      />
    </>
  )
}

export default App
