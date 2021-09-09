import {Typography} from "@material-ui/core";

import {useStyles} from "./useStyles";

const NavBar = () => {
	const classes = useStyles();

	return (
		<nav className={classes.navbar}>
			<Typography variant="h3">wheelofnames</Typography>
		</nav>
	);
};

export default NavBar;
