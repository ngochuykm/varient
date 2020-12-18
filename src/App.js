import React from 'react';
import './App.css';
import Routes from './routes'
import { withTranslation} from 'react-i18next';
import HeaderContainer from './containers/HeaderContainer';
import SettingBoxContainer from './containers/SettingBoxContainer'
import MenuContainer from './containers/MenuContainer'
import LogoContainer from './containers/LogoContainer'
import HeaderMobileContainer from './containers/HeaderMobileContainer'
import './style/app.css'
// import FooterContainer from './containers/FooterContainer';

app.use(express.static(path.join(__dirname, 'build')));


app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

function App() {
  return (
    <div className="App">
      <HeaderContainer/>
      <HeaderMobileContainer/>
      <SettingBoxContainer/>
      <LogoContainer/>
      <MenuContainer/>
      <Routes />
      {/* <FooterContainer /> */}
    </div>
  );
}

export default withTranslation('common')(App); 