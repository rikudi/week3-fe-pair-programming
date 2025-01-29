import PageLink from "./PageLink";
import {pageLinks} from "../data";

function PageLinks({ parentComponent }) {
  return (
    <>
      {pageLinks.map((link, index) => {
        return <PageLink key={index} {...link} parentComponent={parentComponent} />
      })}
    </>
  )
}

export default PageLinks;
