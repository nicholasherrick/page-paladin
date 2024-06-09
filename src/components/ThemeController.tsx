import { useRef } from 'react'

const Navbar = () => {
  const dropdown = useRef<HTMLDivElement>(null)

  const handleClick = () => {
    // Ensure dropdown closes after selection
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur()
    }
  }

  return (
    <div className="dropdown" ref={dropdown}>
      <div tabIndex={0} role="button" className="btn m-1">
        Theme
        <svg
          width="12px"
          height="12px"
          className="h-2 w-2 fill-current opacity-60 inline-block"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2048 2048"
        >
          <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] p-2 shadow-2xl bg-base-300 rounded-box w-52"
      >
        <li>
          <input
            onClick={handleClick}
            type="radio"
            name="theme-dropdown"
            className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
            aria-label="Light"
            value="light"
            data-set-theme="light"
          />
        </li>
        <li>
          <input
            type="radio"
            onClick={handleClick}
            name="theme-dropdown"
            className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
            aria-label="Dark"
            value="dark"
            data-set-theme="dark"
          />
        </li>
        <li>
          <input
            onClick={handleClick}
            type="radio"
            name="theme-dropdown"
            className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
            aria-label="Retro"
            value="retro"
            data-set-theme="retro"
          />
        </li>
        <li>
          <input
            onClick={handleClick}
            type="radio"
            name="theme-dropdown"
            className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
            aria-label="Cyberpunk"
            value="cyberpunk"
            data-set-theme="cyberpunk"
          />
        </li>
        <li>
          <input
            onClick={handleClick}
            type="radio"
            name="theme-dropdown"
            className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
            aria-label="Valentine"
            value="valentine"
            data-set-theme="valentine"
          />
        </li>
        <li>
          <input
            onClick={handleClick}
            type="radio"
            name="theme-dropdown"
            className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
            aria-label="Aqua"
            value="aqua"
            data-set-theme="aqua"
          />
        </li>
      </ul>
    </div>
  )
}

export default Navbar
