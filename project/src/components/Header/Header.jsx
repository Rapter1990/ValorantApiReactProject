import React,{ useContext, useEffect, useState  }  from 'react';
import styles from './Header.module.css';
import { Link, useLocation }  from 'react-router-dom'
import Logo from '../../images/valorant_logo.png';
import { LanguageContext, languages } from "../../context/LanguageContext";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faToggleOff, faToggleOn } from '@fortawesome/free-solid-svg-icons'
import { useTranslation } from 'react-i18next';
import axios from 'axios';


const Header = ({theme , switchTheme }) => {

  const [lang, setLang] = useContext(LanguageContext);
  const { i18n, t } = useTranslation();

  let location = useLocation();
  let [pathname, setPathname] = useState("");
  
  useEffect(() => {
    setPathname(location.pathname)
  }, [location]);


  const onChangeLanguage = language => {
    i18n.changeLanguage(language);
    changeLanguage(language);
  };

  const changeLanguage = language => {
    axios.defaults.headers['accept-language'] = language;
  };

  return(
      <header>
          <div className={styles.logo}>
            <Link to='/'>
              <img src={Logo} alt='logo' />
              <h1>VALORANT API</h1>
            </Link>
          </div>
          <nav>
            <ul className={styles.navList}>
              <li className={styles.navItem}>
                <Link 
                  to='/'
                  className={pathname === '/' ? styles.activeNav : styles.navLink}
                  >
                  {t('Home')} 
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link 
                  to='/agents'
                  className={pathname === '/agents' ? styles.activeNav : styles.navLink}
                  >
                  {t('Agents')} 
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link 
                  to='/gear'
                  className={pathname === '/gear' ? styles.activeNav : styles.navLink}
                  >
                  {t('Gear')}  
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link 
                  to='/maps'
                  className={pathname === '/maps' ? styles.activeNav : styles.navLink}
                  >
                  {t('Maps')}
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link 
                  to='/weapons'
                  className={pathname === '/weapons' ? styles.activeNav : styles.navLink}
                  >
                  {t('Weapons')} 
                </Link>
              </li>
              <li>
                <select className={styles.languageMenu}
                    id="Language"
                    value={lang}
                    onChange={(e) => {
                      setLang(e.target.value)
                      onChangeLanguage(e.target.value)
                      }
                    }
                    onBlur={(e) => setLang(e.target.value)}
                  >
                    {languages.map((language) => {
                      return (
                        <option value={language.lang} key={language.lang}>
                          {language.displayName}
                        </option>
                      );
                    })}
                </select>
              </li>
              <li className={styles.toggleItem}>
                <FontAwesomeIcon icon={theme === 'light' ? faToggleOn : faToggleOff} onClick={switchTheme} size="2x" />
              </li>
            </ul>
        </nav>
      </header>
  );
};

export default Header;
