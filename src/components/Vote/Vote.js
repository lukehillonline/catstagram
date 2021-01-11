import { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { useCreateVote } from "lib";
import { pxToREM } from "utils";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";

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
 */
export function Vote({ imageId }) {
  const [count, setCount] = useState(0);
  const [direction, setDirection] = useState();
  const createVote = useCreateVote();
  const classes = useStyles({ count });

  function handleVoteUp() {
    setDirection("UP");
    createVote.createVote({
      data: {
        image_id: imageId,
        value: 1,
      },
    });
  }

  function handleVoteDown() {
    setDirection("DOWN");
    createVote.createVote({
      data: {
        image_id: imageId,
        value: 0,
      },
    });
  }

  useEffect(() => {
    if (createVote.status === "success") {
      if (direction === "UP") {
        setCount((count) => count + 1);
      } else if (direction === "DOWN") {
        setCount((count) => count - 1);
      }

      setDirection(null);
    }
  }, [createVote, direction]);

  return (
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
  );
}
