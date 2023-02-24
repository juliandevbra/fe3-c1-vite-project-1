import './App.css'
import Card from './components/Card'
import ClassComponent from './components/ClassComponent'
import FuncComponent from './components/FuncComponent'

function App() {
  let arr = [1,2,3]
  return (
      <>
        <ClassComponent/>
        <FuncComponent/>
        <Card index={arr[0]}/>
        <Card index={arr[1]}/>
        <Card index={arr[2]}/>
      </>
  )
}

export default App



