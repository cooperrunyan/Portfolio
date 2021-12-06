import Socials from './Socials';
import Nav from '../../components/Nav';
import HeaderContents from './Contents';

function Header() {
  return (
    <header className="header">
      <Nav />
      <HeaderContents />
      <Socials />
    </header>
  );
}

export default Header;
