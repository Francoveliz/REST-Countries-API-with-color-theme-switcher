import React from "react";
import Box from "@material-ui/core/Box";
import CircularProgress from "@material-ui/core/CircularProgress";

const LoadingAnimation = () => {
	return (
		<Box display="flex" justifyContent="center">
			<CircularProgress />
		</Box>
	);
};

export default LoadingAnimation;
