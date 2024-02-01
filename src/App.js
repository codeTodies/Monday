import './App.css';
import Research from './templates/SignUp/Research.jsx';
import SignupLayout from './templates/SignUp/SignupLayout.jsx';
import WorkAndRole from './templates/SignUp/WorkAndRole.jsx';
import CreateAcc from './templates/SignUp/CreateAcc.jsx';
import Invite from './../src/templates/SignUp/Invite.jsx';
import StartCreate from './templates/CreateBoard/StartCreate.jsx';
import AddColumn from './templates/CreateBoard/AddColumn.jsx';
import TaskOrProject from './templates/CreateBoard/TaskOrProject.jsx';
import ChooseBoard from './templates/CreateBoard/ChooseBoard.jsx';
import CreateTask from './templates/CreateBoard/CreateTask.jsx';

function App() {
  return (
    <div className="App">
      <WorkAndRole/>
    </div>
  );
}

export default App;
