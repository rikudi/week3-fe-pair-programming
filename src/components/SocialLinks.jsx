import SocialLink from './SocialLink';
import { socialLinks } from '../data';

function SocialLinks({ parentComponent }) {
  return (
    <ul className={`${parentComponent === 'footer' ? 'footer-icons' : 'nav-icons'}`}>
      {socialLinks.map((social, index) => {
        return <SocialLink key={index} {...social} parentComponent={parentComponent} />
      })}
    </ul>
  )
}

export default SocialLinks;
