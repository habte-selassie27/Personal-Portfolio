const NAV_ITEMS = [
  { label: 'About', href: '#about', icon: 'mdi-social-person', aria: 'Navigate to the About section' },
  { label: 'Experience', href: '#experience', icon: 'mdi-action-trending-up', aria: 'Navigate to the Experience section' },
  { label: 'Projects', href: '#projects', icon: 'mdi-av-my-library-books', aria: 'Navigate to the Projects section' },
  { label: 'Skills', href: '#skills', icon: 'mdi-action-assessment', aria: 'Navigate to the Skills section' },
  { label: 'Education', href: '#education', icon: 'mdi-social-school', aria: 'Navigate to the Education section' },
  { label: 'Certificates', href: '#certificates', icon: 'mdi-social-school', aria: 'Navigate to the Certificates section' },
  { label: 'Contact', href: '#contact', icon: 'mdi-content-mail', aria: 'Navigate to the Contact section' },
];

export default function Sidebar() {
  return (
    <aside id="sidebar" aria-label="Section navigation">
      <a
        aria-label="Navigate to the beginning of the page"
        className="sidebar-avatar"
        href="#intro"
        id="logo-container"
      >
        <img alt="Habte Selassie Fitsum" src="/images/profile.png" />
      </a>

      <ul className="sidebar-nav">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a aria-label={item.aria} className="nav-link" href={item.href}>
                <i aria-hidden="true" className={item.icon}></i>
                <span>{item.label}</span>
              </a>
            </li>
          ))}
          <li className="sidebar-divider" aria-hidden="true"></li>
          <li>
            <a
              aria-label="Open Habte Selassie's resume in a new tab"
              className="nav-link"
              href="https://1drv.ms/b/s!AnRyPPgnSpsyaw2SXVdQJgJ3t8k?e=XC40Rc"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i aria-hidden="true" className="mdi-file-folder-open"></i>
              <span>Resume</span>
            </a>
          </li>
        </ul>
    </aside>
  );
}
