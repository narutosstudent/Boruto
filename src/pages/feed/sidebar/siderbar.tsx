import { FiClock, FiBookmark, FiStar } from 'react-icons/fi'
import './sidebar.css'
export function SideBar() {
  return (
    <aside className="sidebar">
      {' '}
      <button className="sidebar__latest">
        <FiClock className="icon" />
        Latest
      </button>
      <button className="sidebar__top">
        <FiStar className="icon" />
        Top
      </button>
      <button className="sidebar__bookmarks">
        <FiBookmark className="icon" />
        Bookmarks
      </button>
      <div className="line"></div>
      <footer>
        <p>
          Built with
          <span className="footer__emoji" aria-label="love">
            &nbsp;💙&nbsp;
          </span>
          by&nbsp;
          <a href="https://github.com/mirayatech" target="_blank">
            Miraya
          </a>
        </p>
      </footer>
    </aside>
  )
}