import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';

const SideBar = () => {
  var styles = {
    bmBurgerButton: {
      position: 'fixed',
      width: '36px',
      height: '30px',
      left: '36px',
      top: '36px'
    },
    bmBurgerBars: {
      background: '#373a47'
    },
    bmBurgerBarsHover: {
      background: '#a90000'
    },
    bmCrossButton: {
      height: '24px',
      width: '24px'
    },
    bmCross: {
      background: '#bdc3c7'
    },
    bmMenuWrap: {
      position: 'fixed',
      height: '100%',
      zIndex: 9999999
    },
    bmMenu: {
      background: '#373a47',
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em',
      zIndex: 9999999
    },
    bmMorphShape: {
      fill: '#373a47'
    },
    bmItemList: {
      color: '#b8b7ad',
      padding: '0.8em',
      display: 'flex',
      flexDirection: 'column',
    },
    bmItem: {
      display: 'inline-flex',
      outline: 0
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)',
      zIndex: 9999999
    }
  }

  return (
    <>
      <Menu styles={styles}>
        <Link to="/about" className="flex items-center mb-10">
          <div>
            <img src="../assets/trooper.jpg" alt="avatar" className="rounded-full w-12 h-12" />
          </div>
          <div className="text-gray-500 ml-6 hover:text-gray-300">Hndrxx</div>
        </Link>

        <Link to="/" className="text-gray-600 hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="fill-current" width="24" height="24" viewBox="0 0 24 24"><path d="M21.172 24l-7.387-7.387c-1.388.874-3.024 1.387-4.785 1.387-4.971 0-9-4.029-9-9s4.029-9 9-9 9 4.029 9 9c0 1.761-.514 3.398-1.387 4.785l7.387 7.387-2.828 2.828zm-12.172-8c3.859 0 7-3.14 7-7s-3.141-7-7-7-7 3.14-7 7 3.141 7 7 7z" /></svg>
          <span>Search</span>
        </Link>

        <Link to="/" className="text-gray-600 hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="fill-current" width="24" height="24" viewBox="0 0 24 24"><path d="M21 13v10h-6v-6h-6v6h-6v-10h-3l12-12 12 12h-3zm-1-5.907v-5.093h-3v2.093l3 3z" /></svg>
          <span>Home</span>
        </Link>

        <Link to="/" className="text-gray-600 hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="fill-current" width="24" height="24" viewBox="0 0 24 24"><path d="M24 9h-9v-9h-6v9h-9v6h9v9h6v-9h9z" /></svg>
          <span>Watchlist</span>
        </Link>

        <Link to="/" className="text-gray-600 hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="fill-current" width="24" height="24" viewBox="0 0 24 24"><path d="M0 1v22h24v-22h-24zm4 20h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2zm14 16h-12v-8h12v8zm0-10h-12v-8h12v8zm4 10h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2z" /></svg>
          <span>Movies</span>
        </Link>

        <Link to="/" className="text-gray-600 hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="fill-current" width="24" height="24" viewBox="0 0 24 24"><path d="M20.327 13.099l-.427-.427.71-.71.424.427-.707.71zm-.417 4.467l-.708-.709-.428.427.707.709.429-.427zm4.09-11.566v16h-24v-16h10.888l-2.888-3.375.781-.625 3.219 3.75 3.219-3.75.781.625-2.888 3.375h10.888zm-21.049 12.993c.674.671 3.362 1.007 6.05 1.007 2.687 0 5.375-.336 6.049-1.007.633-.632.95-2.851.95-5.059 0-2.181-.31-4.351-.93-4.97-.637-.635-3.399-.964-6.141-.964-2.681 0-5.346.314-5.997.964-.603.601-.913 2.668-.931 4.786-.018 2.268.299 4.594.95 5.243zm15.049-5.9c0 1.021.796 1.851 1.802 1.904 1.097.059 2.009-.814 2.009-1.904 0-1.049-.85-1.906-1.907-1.906-1.048 0-1.904.847-1.904 1.906zm4-3.093v-.555h-4v.555h4zm-4 7.988c0 1.062.86 1.907 1.903 1.907 1.058 0 1.907-.858 1.907-1.907s-.85-1.906-1.907-1.906c-1.047 0-1.903.846-1.903 1.906zm4-9.988h-4v.555h4v-.555z" /></svg>
          <span>Series</span>
        </Link>

        <Link to="/" className="text-gray-600 hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="fill-current" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" /></svg>
          <span>Originals</span>
        </Link>

        <Link to="/" className="text-gray-600 hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="fill-current" width="24" height="24" viewBox="0 0 24 24"><path d="M24 13.616v-3.232c-1.651-.587-2.694-.752-3.219-2.019v-.001c-.527-1.271.1-2.134.847-3.707l-2.285-2.285c-1.561.742-2.433 1.375-3.707.847h-.001c-1.269-.526-1.435-1.576-2.019-3.219h-3.232c-.582 1.635-.749 2.692-2.019 3.219h-.001c-1.271.528-2.132-.098-3.707-.847l-2.285 2.285c.745 1.568 1.375 2.434.847 3.707-.527 1.271-1.584 1.438-3.219 2.02v3.232c1.632.58 2.692.749 3.219 2.019.53 1.282-.114 2.166-.847 3.707l2.285 2.286c1.562-.743 2.434-1.375 3.707-.847h.001c1.27.526 1.436 1.579 2.019 3.219h3.232c.582-1.636.75-2.69 2.027-3.222h.001c1.262-.524 2.12.101 3.698.851l2.285-2.286c-.744-1.563-1.375-2.433-.848-3.706.527-1.271 1.588-1.44 3.221-2.021zm-12 2.384c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z" /></svg>
          <span>Settings</span>
        </Link>
      </Menu>
    </>
  )
}

export default SideBar;
