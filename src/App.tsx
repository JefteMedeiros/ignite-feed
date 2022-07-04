import React from 'react'
import Header from './components/Header'
import './global.css'
import styles from './app.module.css';
import Sidebar from './components/Sidebar';
import Post from './components/Post';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post role="Frontend Developer" author="Samuel Luiz" src="https://pps.whatsapp.net/v/t61.24694-24/147976775_1150159979107944_1217930821709761510_n.jpg?ccb=11-4&oh=5de07da8908421b451c39e58eee39278&oe=62D3AF2D" />
          <Post role="UI/UX Designer" author="Geovana Bezerra" src="https://pps.whatsapp.net/v/t61.24694-24/260053004_1063856937881432_3671821027234621640_n.jpg?ccb=11-4&oh=63839a28e22a51793fd49517f5174348&oe=62D2C30E" />
        </main>
      </div>
    </div>
  )
}

export default App
