import "./index.css";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { NavigateNext } from "@mui/icons-material";

export default function BreadCrumbMUI() {
  const location = useLocation();
  let currentPath = "";
  let renderBreadCrums = location.pathname.split("/").filter((e) => e !== "");
  renderBreadCrums = renderBreadCrums.map((eachBC, ind) => {
    currentPath += `/${eachBC}`;
    return (
      <Link
        to={currentPath}
        key={uuidv4()}
        className={
          ind === renderBreadCrums.length - 1
            ? "styleActiveLink"
            : "styleInactiveLink"
        }>
        {eachBC}
      </Link>
    );
  });
  return (
    <div role="presentation">
      <Breadcrumbs aria-label="breadcrumb" separator={<NavigateNext />}>
        {renderBreadCrums}
      </Breadcrumbs>
    </div>
  );
}
