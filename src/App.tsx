import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";

import MyForm from "./components/MyForm";

function App() {
  return (
    <MantineProvider forceColorScheme="dark">
      <MyForm></MyForm>
    </MantineProvider>
  );
}

export default App;
