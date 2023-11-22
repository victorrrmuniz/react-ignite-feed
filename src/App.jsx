import { Post } from './Post'
import { Header } from './components/Header';

import './global.css';
import styles from './App.module.css';
import { Sidebar } from './components/Sidebar';

function App() {

  return (
    <>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
        <Post 
          author="Víctor Muniz dos Santos"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque varius justo et justo tincidunt, ac facilisis sapien tempus. Nulla facilisi. Sed vestibulum lacus id felis fermentum, vitae."
        />

        <Post 
          author="Teste"
          content="teste de um novo post                                     "
        />
        </main>
      </div>
    </>
  )
}

export default App
