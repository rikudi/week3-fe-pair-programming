import PageLink from "./PageLink";
import {pageLinks} from "../data";

function PageLinks({ parentComponent }) {
  return (
    <>
      {pageLinks.map((link) => {
        return <PageLink key={link.id} {...link} parentComponent={parentComponent} />
      })}
    </>
  )
}

export default PageLinks;
