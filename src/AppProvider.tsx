import { ThemeProvider } from "./common/theme";
import AppLayout from "./components/layout/AppLayout";
import { ServicesProvider } from "./services";
import ChartPage from "./pages/ChartPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <ThemeProvider>
      <AppLayout>
        <ServicesProvider>
          <ToastContainer />
          <ChartPage />
        </ServicesProvider>
      </AppLayout>
    </ThemeProvider>
  );
}

export default App;
