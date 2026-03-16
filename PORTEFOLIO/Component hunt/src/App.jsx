import "./App.css"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import VideoCard from "./components/VideoCard"

function App() {
  return (
    <div>

      <Header />

      <div className="container">
        <Sidebar />

        <div className="content">
          <VideoCard title="React Tutorial" />
          <VideoCard title="JavaScript Basics" />
          <VideoCard title="CSS Flexbox Guide" />
          <VideoCard title="Node.js Introduction" />
          <VideoCard title="Frontend Development" />
          <VideoCard title="Web Development Course" />
        </div>
      </div>

      <Footer />

    </div>
  )
}

export default App