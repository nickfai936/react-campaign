import React from "react";
import ReactDOM from "react-dom";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SearchForm from "../components/SearchForm";

let container;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

describe("<SearchForm>", () => {
  it("can render", () => {
    act(() => {
      ReactDOM.render(
        <BrowserRouter>
          <Switch>
            <Route render={props => <SearchForm {...props} />} />
          </Switch>
        </BrowserRouter>,
        container
      );
    });

    const InputBase = container.querySelector('[id="searchInput"]');
    const IconButton = container.querySelector('[id="searchIconButton"]');
    const SearchIcon = container.querySelector('[id="searchIcon"]');
    expect(InputBase).toHaveAttribute("placeholder", "Search");
    expect(InputBase).not.toHaveValue();
    expect(IconButton).toContainElement(SearchIcon);
  });

  it("can input search", () => {
    act(() => {
      ReactDOM.render(
        <BrowserRouter>
          <Switch>
            <Route render={props => <SearchForm {...props} />} />
          </Switch>
        </BrowserRouter>,
        container
      );
    });

    const InputBase = container.querySelector('[id="searchInput"]');
    fireEvent.change(InputBase, {
      target: { value: "testing" }
    });
    expect(InputBase).toHaveValue("testing");
  });

  it("can render correct search link", () => {
    act(() => {
      ReactDOM.render(
        <BrowserRouter>
          <Switch>
            <Route render={props => <SearchForm {...props} />} />
          </Switch>
        </BrowserRouter>,
        container
      );
    });

    const searchLink = container.querySelector('[id="searchLink"]');
    expect(searchLink.href).toBe("http://localhost/filter?search=");
  });
});
