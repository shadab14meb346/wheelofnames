import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
	navbar: {
		position: "fixed",
		width: "100%",
		height: 52,
		background: theme.palette.secondary.light,
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
}));
