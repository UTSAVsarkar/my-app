import { INavInterface } from "./navInterface";
import { Icon } from "@fluentui/react";

export const Nav = (props: INavInterface) => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark"
        style={{
          position: "sticky",
          top: 0,
          overflow: "hidden",
          zIndex: 10,
        }}
      >
        <div className="container-fluid">
          {props.l === 0 ? (
            <>
              <a
                className="navbar-brand"
                onClick={() => props.whichPage(0)}
                style={{ cursor: "pointer" }}
              >
                MakeMyFood
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item" onClick={() => props.whichPage(1)}>
                    <a className="nav-link" href="#">
                      Add Recipe
                    </a>
                  </li>
                </ul>
                <form className="d-flex">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button className="btn btn-outline-success" type="submit">
                    Search
                  </button>
                </form>
              </div>
            </>
          ) : (
            <>
              <a
                className="navbar-brand"
                onClick={() => props.whichPage(0)}
                style={{ cursor: "pointer" }}
              >
                <Icon
                  iconName="ChevronLeft"
                  style={{ fontSize: 15, cursor: 'pointer' }}
                />
                back
              </a>
            </>
          )}
        </div>
      </nav>
    </>
  );
};
