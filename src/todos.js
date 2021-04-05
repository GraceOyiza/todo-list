export default () => {
    const navlogo = document.createElement('navlogo');

    const logo = document.createElement('h1');
    logo.classList.add('nav-logo');
    logo.innerText = 'MY TODO';

    navlogo.appendChild(logo);
  
    return navlogo;
  };