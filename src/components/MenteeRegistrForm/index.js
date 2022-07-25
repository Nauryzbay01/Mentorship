import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link as RouterLink } from "react-router-dom";
import logo from "../../img/logo.png";
import { listOfNis } from "../../constants";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaForMentee } from "../../utils/schema";
import style from "./mentee-form-style.module.css";
import { useNavigate } from "react-router-dom";

import { menteeSignupRequest } from "../../services";

const theme = createTheme();

export default function MentiRegistrationForm() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaForMentee),
  });

  const onSubmit = async (data) => {
    const response = await menteeSignupRequest(data);
    response[0]?.status === 200 ? navigate("/login") : alert("Smth Wrong!");
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs" className={style}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <RouterLink to="/">
            <img
              src={logo}
              alt="Logo"
              style={{
                height: "200px",
                width: "170px",
                marginBottom: "0.5rem",
              }}
            />
          </RouterLink>
          <Typography
            component="h1"
            variant="h5"
            style={{ marginTop: "0.5rem" }}
          >
            Sign up as Mentee
          </Typography>
          <Box component="div" noValidate sx={{ mt: 3 }}>
            <form action="#" onSubmit={handleSubmit(onSubmit)}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="firstname"
                    required
                    fullWidth
                    id="firstname"
                    label="First Name"
                    autoFocus
                    {...register("firstname")}
                  />
                  <span className={style.errors}>
                    {errors.firstname?.message}
                  </span>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastname"
                    label="Last Name"
                    name="lastname"
                    {...register("lastname")}
                  />
                  <span className={style.errors}>
                    {errors.lastname?.message}
                  </span>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    {...register("email")}
                  />
                  <span className={style.errors}>{errors.email?.message}</span>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="number"
                    label="Phone Number"
                    name="number"
                    {...register("number")}
                  />
                  <span className={style.errors}>{errors.number?.message}</span>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="iin"
                    label="IIN"
                    name="iin"
                    {...register("iin")}
                  />
                  <span className={style.errors}>{errors.iin?.message}</span>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="grade"
                    label="Grade"
                    name="grade"
                    type="number"
                    {...register("grade")}
                  />
                  <span className={style.errors}>{errors.grade?.message}</span>
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <TextField
                      id="school"
                      label="School"
                      select
                      required
                      defaultValue=""
                      fullWidth
                      inputProps={register("school")}
                    >
                      {listOfNis.map((nis) => (
                        <MenuItem key={nis} value={nis}>
                          {nis}
                        </MenuItem>
                      ))}
                    </TextField>
                  </FormControl>
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="achievements"
                    label="Achievements"
                    name="achievements"
                    multiline
                    rows={5}
                    {...register("achievements")}
                  />
                  <span className={style.errors}>
                    {errors.achievements?.message}
                  </span>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    {...register("password")}
                  />
                  <span className={style.errors}>
                    {errors.password?.message}
                  </span>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="confirmPassword"
                    label="Confirm Password"
                    type="password"
                    id="confirmPassword"
                    {...register("confirmPassword")}
                  />
                  <span className={style.errors}>
                    {errors.confirmPassword?.message}
                  </span>
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <RouterLink to="/login">
                    Already have an account? Sign in
                  </RouterLink>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
