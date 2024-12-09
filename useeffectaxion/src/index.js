import reactDom from 'react-dom/client';
import App from "./App";
// function Hello (){
//   return <h1>Hello world</h1>;
// }

const container = document.getElementById("root");
const root = reactDom.createRoot(container);

root.render(
  <>
    <App/>
  </>
  
  
);