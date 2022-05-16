import AppLyrics from "./components/AppLyrics";
import { LetrasProvider } from "./context/LetrasProvider";


function App() {

  
  
  return (
    <LetrasProvider>
      <AppLyrics />
    </LetrasProvider>
  );
}

export default App;
