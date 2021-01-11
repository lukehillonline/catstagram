import { waitFor, screen, fireEvent } from "@testing-library/react";
import { customRender } from "testing/testUtils";
import { Home } from "./Home";
const axios = require("axios");
jest.mock("axios");

test("Renders the gallery", async () => {
  axios.get.mockResolvedValueOnce({
    data: [
      {
        height: 700,
        id: "bn1I9i1TT",
        original_filename: "WhiteCat_20170526_03.jpg",
        url: "https://cdn2.thecatapi.com/images/bn1I9i1TT.jpg",
        width: 700,
      },
    ],
  });

  customRender(<Home />);

  await waitFor(() =>
    expect(screen.getByTitle("Click to favourite")).toBeInTheDocument()
  );

  axios.post.mockResolvedValueOnce({
    data: { message: "success", id: 0 },
  });

  fireEvent.click(screen.getByTitle("Click to favourite"));

  await waitFor(() =>
    expect(screen.getByTitle("Click to unfavourite")).toBeInTheDocument()
  );
});

test("A user can favourite an item", async () => {
  axios.get.mockResolvedValueOnce({
    data: [
      {
        height: 700,
        id: "bn1I9i1TT",
        original_filename: "WhiteCat_20170526_03.jpg",
        url: "https://cdn2.thecatapi.com/images/bn1I9i1TT.jpg",
        width: 700,
      },
    ],
  });

  customRender(<Home />);

  await waitFor(() =>
    expect(screen.getByTitle("Click to favourite")).toBeInTheDocument()
  );

  axios.post.mockResolvedValueOnce({
    data: { message: "success", id: 0 },
  });

  fireEvent.click(screen.getByTitle("Click to favourite"));

  await waitFor(() =>
    expect(screen.getByTitle("Click to unfavourite")).toBeInTheDocument()
  );
});

test("A user can vote up and down item", async () => {
  axios.get.mockResolvedValueOnce({
    data: [
      {
        height: 700,
        id: "bn1I9i1TT",
        original_filename: "WhiteCat_20170526_03.jpg",
        url: "https://cdn2.thecatapi.com/images/bn1I9i1TT.jpg",
        width: 700,
      },
    ],
  });

  customRender(<Home />);

  await waitFor(() => expect(screen.getByTitle("Vote Up")).toBeInTheDocument());

  axios.post.mockResolvedValue({
    data: { message: "success", id: 0 },
  });

  fireEvent.click(screen.getByTitle("Vote Up"));

  await waitFor(() => expect(screen.getByText("1")).toBeInTheDocument());

  fireEvent.click(screen.getByTitle("Vote Down"));

  await waitFor(() => expect(screen.getByText("0")).toBeInTheDocument());
});
