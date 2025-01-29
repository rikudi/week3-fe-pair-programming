function PageLink({ text, parentComponent }) {
  return (
    <li>
      <a 
        href={`#${text}`} 
        className={parentComponent === 'footer' ? 'footer-link' : 'nav-link'}
      >
        {text}
      </a>
    </li>
  )
}

export default PageLink;
