import PageLink from "./PageLink";

let links = [
  {
    "text": "home"
  },
  {
    "text": "about"
  },
  {
    "text": "services"
  },
  {
    "text": "tours"
  },
] 

function PageLinks({ parentComponent }) {
  return (
    <>
      {links.map((link, index) => {
        return <PageLink key={index} {...link} parentComponent={parentComponent} />
      })}
    </>
  )
}

export default PageLinks;
