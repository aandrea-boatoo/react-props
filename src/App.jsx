import './App.css'
import Card from './components/CardComponent'
import posts from './data/post';


function App() {

  return (
    <>
      <header>
        <h1>post react props</h1>
      </header>
      <main>
        <Card title={posts[0].title} content={posts[0].content} imgURL={posts[0].image} tag={posts[0].tags[0]} tag2={posts[0].tags[1] ? posts[0].tags[1] : ""} className={posts[0].published == false ? "d - none" : ""} />
        <Card title={posts[1].title} content={posts[1].content} imgURL={posts[1].image} tag={posts[1].tags[0]} tag2={posts[1].tags[1] ? posts[1].tags[1] : ""} className={posts[1].published == false ? "d-none" : ""} />
        <Card title={posts[2].title} content={posts[2].content} imgURL={posts[2].image} tag={posts[2].tags[0]} tag2={posts[2].tags[1] ? posts[2].tags[1] : ""} className={posts[2].published == false ? "d-none" : ""} />
        <Card title={posts[3].title} content={posts[3].content} imgURL={posts[3].image} tag={posts[3].tags[0]} tag2={posts[3].tags[1] ? posts[3].tags[1] : ""} className={posts[3].published == false ? "d-none" : ""} />
      </main>
    </>
  )
}

export default App
