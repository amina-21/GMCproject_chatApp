import './App.css';
import {ChatEngine} from 'react-chat-engine'
import ChatFeed from './components/ChatFeed'
import LoginForm from "./components/LoginForm";
import LogoutForm from './components/LogoutForm';

const projectID = "0070078a-3809-43e2-a23a-3b767db79801";


function App() {
  if (!localStorage.getItem("username")) return <LoginForm />;
        
  console.log(localStorage.getItem("username"));


  return (
    <>
      <LogoutForm />
      <ChatEngine
        height="100vh"
        projectID={projectID}
        userName={localStorage.getItem("username")}
        userSecret={localStorage.getItem("password")}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        onNewMessage={() =>
          new Audio(
            "https://chat-engine-assets.s3.amazonaws.com/click.mp3"
          ).play()
        }
      />
    </>
  );
}

export default App;
