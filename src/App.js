import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import { LayoutProvider } from "./context/LayoutContext";
import CssBaseline from '@mui/material/CssBaseline';
import Layout from "./layout/Layout";
export default function App() {
  return (
    <LayoutProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Layout />
      </ThemeProvider>
    </LayoutProvider>
  );
}






// import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';

// export default function App() {

//   const Button = ({onClick,children}) => {
//     return (
//       <button
//         onClick = {onClick}
//       >
//         {children}
//       </button>
//     )
//   }

//   const showMessage = () => {
//     console.log("Good morning!")
//   }

//   return (
//     <div className = "myApp">
//       <h1>App</h1>
//       <Button onClick={showMessage}>
//         <DownloadForOfflineIcon/>
//         Download
//       </Button>
//     </div>
//   )
// }


// const App = () => {
//   const content = "Card content..."
  
//   const Content = ({content}) => {
//     return <p>{content}</p>
//   }

//   const Card = ({children}) => {
//     return <div>{children}</div>
//   }
  
//   return (
//     <div>
//       <Card>
//         <Content content={content}/>
//       </Card>
//     </div>
//   )
// }

// export default App