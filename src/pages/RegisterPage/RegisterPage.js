import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { username, email, password } from "SRC/utils/validations";
import TextField from "@material-ui/core/TextField";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import LocalMallIcon from "@material-ui/icons/LocalMall";

import { postData } from "SRC/services/postData";

const validationSchema = yup.object({
  username,
  email,
  password
});

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh"
  },
  image: {
    backgroundImage: "url(https://picsum.photos/640/480)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center"
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  linkWrapper: {
    textAlign: "center",
    margin: theme.spacing(1.5)
  }
}));

export const RegisterPage = () => {
  const classes = useStyles();

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: ""
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    }
  });

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LocalMallIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Register
          </Typography>
          <form onSubmit={formik.handleSubmit}>
            <TextField
              fullWidth
              margin="normal"
              id="username"
              name="username"
              label="Username"
              value={formik.values.username}
              onChange={formik.handleChange}
              error={formik.touched.username && Boolean(formik.errors.username)}
              helperText={formik.touched.username && formik.errors.username}
            />
            <TextField
              fullWidth
              margin="normal"
              id="email"
              name="email"
              label="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
              fullWidth
              margin="normal"
              id="password"
              name="password"
              label="Password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
            <Button
              color="primary"
              variant="contained"
              fullWidth
              type="submit"
              className={classes.submit}
            >
              Submit
            </Button>
          </form>
          <Grid container className={classes.linkWrapper}>
            <Grid item xs textAlign="center">
              <Link href="#" variant="body2" mx="auto">
                Forgot password?
              </Link>
            </Grid>
          </Grid>
          <Grid container className={classes.linkWrapper}>
            <Grid item xs>
              <Link href="/login" variant="body2" mx="auto">
                Already have an account? Sign In
              </Link>
            </Grid>
          </Grid>
          <Box mt={5}>
            <Typography variant="body2" color="textSecondary" align="center">
              {"Copyright © "}
              <Link color="inherit" href="/">
                Our Website
              </Link>{" "}
              {new Date().getFullYear()}
              {"."}
            </Typography>
          </Box>
        </div>
      </Grid>
    </Grid>
  );
};
