const Navigation = ({ headerLinks }) => {
  return (
    <nav>
      <ul>
        {headerLinks.map((link) => (
          <li key={link.path}>
            <a href={link.path}>{link.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
