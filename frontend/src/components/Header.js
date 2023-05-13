import '../styles/header.css';
import headerTemplate from "../templates/headerTemplate.html";

const Header = {
    render: () => {
      const empresa = document.title;
      const Login = "";
      const user = Login.length !==0 ? Login : "Sign-in";
      const userUrl = (user === "Sign-in") ?  "/#/signin" : "/#/login";    
      return headerTemplate
      .replace("{{empresa}}",empresa)
      .replace("{{userUrl}}",userUrl)
      .replace("{{user}}", user);
    },
  };
  
  export default Header;