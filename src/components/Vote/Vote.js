import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { useCreateVote } from "lib";
import { pxToREM } from "utils";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import { useEffect } from "react";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    alignItems: "center",
    display: "flex",
    left: pxToREM(10),
    position: "absolute",
    bottom: pxToREM(10),
  },
  thumbsUp: {
    color: theme.palette.primary.main,
    cursor: "pointer",
  },
  thumbsDown: ({ count }) => ({
    color: count > 0 ? theme.palette.primary.main : null,
    cursor: "pointer",
  }),
  count: {
    color: theme.palette.primary.main,
    display: "inline-block",
    fontSize: pxToREM(20),
    margin: `0 ${pxToREM(10)}`,
  },
}));

/**
 * This component renders two buttons that allow a user to vote
 * up or down an image and the count of total votes
 *
 * @param {integer} imageId the ID for image that is being voted on
 * @param {function} showError option function to show error messages
 */
export function Vote({ imageId, showError, voteCount }) {
  const [count, setCount] = useState(0);
  const { createVote, status, reset } = useCreateVote();
  const classes = useStyles({ count: voteCount });

  useEffect(() => {
    setCount(voteCount);
  }, [voteCount]);

  useEffect(() => {
    if (status === "error" && showError) {
      showError(
        "Whoops, it seems like your vote couldn't be counted right now."
      );
      reset();
    }
  }, [status, reset, showError]);

  function handleVoteUp() {
    createVote({
      data: {
        image_id: imageId,
        sub_id: "1234",
        value: 1,
      },
      callback: () => setCount((count) => count + 1),
    });
  }

  function handleVoteDown() {
    createVote({
      data: {
        image_id: imageId,
        sub_id: "1234",
        value: 0,
      },
      callback: () => setCount((count) => count - 1),
    });
  }

  return (
    <>
      <div className={classes.wrapper}>
        <ThumbUpIcon
          className={classes.thumbsUp}
          onClick={handleVoteUp}
          title="Vote Up"
          tabIndex="0"
        />
        <Typography variant="h1" className={classes.count}>
          {count}
        </Typography>
        <ThumbDownIcon
          className={classes.thumbsDown}
          onClick={() => {
            if (count > 0) {
              handleVoteDown();
            }
          }}
          title="Vote Down"
          tabIndex="0"
        />
      </div>
    </>
  );
}
