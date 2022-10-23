import { ThemeProvider } from "styled-components";
import { GlobalTheme } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalTheme />
      <h1>Hello Money</h1>
    </ThemeProvider>
  )
}
