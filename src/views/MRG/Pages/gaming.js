import React from "react";
import { Link } from "react-router-dom";
import Button from "components/CustomButtons/Button.js";
import Typography from "@material-ui/core/Typography";

const Gaming = () => {
  return (
    <div>
      <Typography variant="h4">Gaming</Typography>
      <Link to="/mrg">
        <Button usetheme="true">Back</Button>
      </Link>
    </div>
  );
};

export default Gaming;
