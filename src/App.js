import "./App.css";
import UserList from "./components/UserLIst";
import Container from "@mui/material/Container";
function App() {
  return (
    <div className="App">
      <Container >
        <UserList></UserList>
      </Container>
    </div>
  );
}

export default App;
