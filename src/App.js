import Display from "./components/Display"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Input from "./components/Input"
import { CalcProvider } from "./context/CalContext"

function App() {
  return (
    <CalcProvider>
      <div className="container h-screen mx-auto flex justify-center items-center">
        <div className="container max-w-lg">
          <div data-theme="night" className="artboard-demo p-4 shadow-2xl">
            <Header />
            <Display />
            <Input />
            <Footer />
          </div>
        </div>
      </div>
    </CalcProvider>
  )
}

export default App
