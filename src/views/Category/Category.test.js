import React from "react";
import axios from "axios";
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react'
import { useParams, MemoryRouter } from "react-router-dom";
import Category from "./Category";
import { races } from '../../mockData'

jest.mock("axios");

describe("<Category />", () => {
  it("can tell mocked from unmocked functions", () => {
    expect(jest.isMockFunction(useParams)).toBe(true);
    expect(jest.isMockFunction(MemoryRouter)).toBe(false);
  });

  it("Renders <Category /> correctly for a race category", async () => {
    useParams.mockReturnValue({ category: 'Harness' });
    axios.get.mockImplementation((url) => {
      switch (url) {
        case "https://www.betright.com.au/api/racing/todaysracing":
          return Promise.resolve({
            data: races
          });
        default:
          throw new Error(`UNMATCHED URL: ${url}`);
      }
    });
    render(<Category />);
    await waitForElementToBeRemoved(() =>
      screen.queryByText(/Fetching category item Harness/i)
    );

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(screen.getByText(/Category: Harness/)).toBeInTheDocument();
    // expect(screen.getByText(/Reims/)).toBeInTheDocument();
  });
});
