
import './App.css';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
<div className='max-w-2xl mx-auto  bg-white shadow-md rounded-2xl p-6'>
<p className='text-2xl font-bold mb-4 text-center  ' >Task Management App</p>
    < AddTask/>
    <TaskList/>
</div>
    </div>
  );
}

export default App;
