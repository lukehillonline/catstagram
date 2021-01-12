import { waitFor, screen, fireEvent } from "@testing-library/react";
import { customRender } from "testing/testUtils";
import { Upload } from "./Upload";
const axios = require("axios");
jest.mock("axios");
const file = (["(⌐□_□)"], "test.png", { name: "test.png", type: "image/png" });

test("A preview of the selected image should show", async () => {
  customRender(<Upload />);
  expect(screen.getByText("Select Image")).toBeInTheDocument();
  global.URL.createObjectURL = jest.fn(() => ({ image: true }));

  fireEvent.change(screen.getByAltText("image"), {
    target: {
      files: [file],
    },
  });

  await waitFor(() =>
    expect(screen.getByAltText("test.png")).toBeInTheDocument()
  );
});

test("An image can be uploaded", async () => {
  customRender(<Upload />);
  expect(screen.getByText("Select Image")).toBeInTheDocument();
  global.URL.createObjectURL = jest.fn(() => ({ image: true }));

  fireEvent.change(screen.getByAltText("image"), {
    target: {
      files: [file],
    },
  });

  axios.post.mockResolvedValueOnce({
    data: { approved: 1 },
  });

  fireEvent.click(screen.getByRole("button", { text: "Upload" }));
  await waitFor(() => expect(axios.post).toHaveBeenCalledTimes(1));
});
