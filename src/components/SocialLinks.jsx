import SocialLink from './SocialLink';
import { socialLinks } from '../data';

function SocialLinks({ parentComponent }) {
  return (
    <ul className={`${parentComponent === 'footer' ? 'footer-icons' : 'nav-icons'}`}>
      {socialLinks.map((social) => {
        return <SocialLink key={social.id} {...social} parentComponent={parentComponent} />
      })}
    </ul>
  )
}

export default SocialLinks;
