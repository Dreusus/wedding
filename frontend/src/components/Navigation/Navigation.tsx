import './Navigation.scss';

interface NavItem {
  id: string;
  icon: string;
  label: string;
}

const navItems: NavItem[] = [
  { id: 'home', icon: 'fa-house', label: 'Главная' },
  { id: 'bride', icon: 'fa-user-group', label: 'Пара' },
  { id: 'wedding-date', icon: 'fa-calendar-check', label: 'Дата' },
  { id: 'gallery', icon: 'fa-images', label: 'Галерея' },
  { id: 'comment', icon: 'fa-comments', label: 'RSVP' },
];

export const Navigation = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar navbar-expand sticky-bottom rounded-top-4 border-top p-0" id="navbar-menu">
      <ul className="navbar-nav nav-justified w-100 align-items-center">
        {navItems.map((item) => (
          <li key={item.id} className="nav-item">
            <button
              className="nav-link bg-transparent border-0 w-100"
              onClick={() => scrollToSection(item.id)}
            >
              <i className={`fa-solid ${item.icon}`}></i>
              <span className="d-block" style={{ fontSize: '0.7rem' }}>
                {item.label}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
