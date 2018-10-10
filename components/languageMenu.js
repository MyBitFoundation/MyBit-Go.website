import classNames from 'classnames'
import stylesheet from './languageMenu.scss'
import { withRouter } from 'next/router'
import Link from 'next/link'

const LanguageMenu = ({currentLanguage, changeLanguage, isInHomePage, isInMobileMenu, isVisible, router}) => (
  <div className={
    classNames({
      'LanguageMenu': true,
      'LanguageMenu__mobile': isInMobileMenu,
      'LanguageMenu__dark': !isInHomePage,
      'LanguageMenu__mobile--is-visible': isVisible,
    })
  }>
    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    <p className="LanguageMenu__selected">{currentLanguage === "en-US" || currentLanguage === "en" ? "Eng" : "Cn"} <Arrow className="LanguageMenu__arrow"/></p>
    <div className="LanguageMenu__submenu">
      <Link href={currentLanguage === "en-US" || currentLanguage === "en" ? `${router.pathname}?lng=cn` : `${router.pathname}`}>
        <p
        onClick={() =>
          changeLanguage(currentLanguage === "en-US" || currentLanguage === "en" ? "cn" : "en")
        }
        className="LanguageMenu__submenu-item">
          {currentLanguage === "en-US" || currentLanguage === "en" ? "Cn" : "Eng"}
        </p>
      </Link>
    </div>
  </div>
);


const Arrow = ({className}) => (
  <svg viewBox="64 64 896 896" className={className} width="1em" height="1em" fill="currentColor" ariaHidden="true">
    <path
      d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z">
    </path>
  </svg>
);


export default withRouter(LanguageMenu)
;



