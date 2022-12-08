import './App.css';
import ListTask from './component/ListTask';
import Addtask from './component/Addtask';
import Filters from './component/Filters';
import { useSelector } from 'react-redux';
import { v4 as uuid4} from "uuid"

function App() {
const tasks = useSelector(state => state.todo)
const filterId = useSelector(state => state.filter)


const handleFilter = (tasks) => {
    switch (filterId) {
      case "Active":
        return tasks.filter(task => !task.done )

      case "Completed":
        return tasks.filter(task => task.done)
        
      case "All":
        return tasks

      default:
        return tasks
    }
}

return (
    <div className="App">
        <Addtask />
        <Filters tasks={tasks} />
        <ListTask tasks={  handleFilter(tasks)}/> 
        </div>

  );
}
export default App





