function SocialLink(props, parentComponent) {
  return (
    <li>
      <a
        href={props.href}
        target="_blank"
        rel="noreferrer"
        className={parentComponent === 'footer' ? 'footer-icon' : 'nav-icon'}
      >
        <i className={`fab fa-${props.icon}`} />
      </a>
    </li>
  )
}

export default SocialLink;
