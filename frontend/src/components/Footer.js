import footerTemplate from "../templates/footerTemplate.html";

const Footer = {
    render: () => {
      const texto = "Todos os direitos reservados @2023";
      return footerTemplate.replace("{{texto}}", texto);
    },
  };
  
  export default Footer;