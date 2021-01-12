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
        id: "IMAGE1",
        original_filename: "image_1.jpg",
        url: "https://cdn2.thecatapi.com/images/bn1I9i1TT.jpg",
        width: 700,
      },
      {
        height: 700,
        id: "IMAGE2",
        original_filename: "image_2.jpg",
        url: "https://cdn2.thecatapi.com/images/bn1I9i1TT.jpg",
        width: 700,
      },
    ],
  });

  customRender(<Home />);

  await waitFor(() => expect(screen.getAllByText("0").length).toEqual(2));

  axios.post.mockResolvedValueOnce({
    data: { message: "success", id: 0 },
  });

  fireEvent.click(screen.getAllByTitle("Vote Up")[0]);

  await waitFor(() => expect(axios.post).toHaveBeenCalledTimes(1));
  await waitFor(() => expect(screen.getAllByText("1").length).toEqual(1));

  axios.post.mockResolvedValueOnce({
    data: { message: "success", id: 1 },
  });

  fireEvent.click(screen.getAllByTitle("Vote Down")[0]);

  await waitFor(() => expect(axios.post).toHaveBeenCalledTimes(1));
  await waitFor(() => expect(screen.getAllByText("0").length).toEqual(2));
});
