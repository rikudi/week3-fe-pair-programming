import SocialLink from './SocialLink';

let socials = [
  {
    "href": "https://www.facebook.com",
    "icon": "facebook"
  },
  {
    "href": "https://www.twitter.com",
    "icon": "twitter"
  },
  {
    "href": "https://www.squarespace.com/",
    "icon": "squarespace"
  },
]

function SocialLinks({ parentComponent }) {
  return (
    <ul className="footer-icons">
      {socials.map((social, index) => {
        return <SocialLink key={index} {...social} parentComponent={parentComponent} />
      })}
    </ul>
  )
}

export default SocialLinks;
