import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';

import './global.css';
import styles from './App.module.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/victorrrmuniz.png',
      name: 'Víctor Muniz',
      role: 'Full Stack Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'paragraph', content: '👉' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2023-11-22 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/victorrrmuniz.png',
      name: 'Víctor Teste',
      role: 'Frontend Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'paragraph', content: '👉' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2023-11-20 20:00:00')
  },
]

function App() {

  return (
    <>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {
            posts.map(post => {
              return (
                <Post 
                  key={post.id} 
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                />
              )
            })
          }
        </main>
      </div>
    </>
  )
}

export default App
