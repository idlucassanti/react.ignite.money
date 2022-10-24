import { ThemeProvider } from "styled-components";
import { Transactions } from "./pages/Transactions";
import { GlobalTheme } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalTheme />
      <Transactions />
    </ThemeProvider>
  )
}
