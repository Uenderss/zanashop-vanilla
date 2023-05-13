import Footer from "../components/Footer.js";
// import Main from "../components/Main.js";
import Header from "../components/Header.js";

const App = {
    render: () =>{
        const header = Header.render();
        // const main = Main.render();
        const footer = Footer.render();

        return `${header}${footer}`;
    }
}
export default App;