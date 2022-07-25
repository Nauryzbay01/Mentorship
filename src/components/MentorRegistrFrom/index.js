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

import { listOfNis, listOfCountries, listOfMajors } from "../../constants";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaForMentor } from "../../utils/schema";
import { mentorSignupRequest } from "../../services";
import style from "./mentor-form-style.module.css";

const theme = createTheme();

export default function MentorRegistrationForm() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaForMentor),
  });

  const onSubmit = async (data) => {
    const response = await mentorSignupRequest(data);
    response[0]?.status === 200 ? navigate("/login") : alert("Smth Wrong!");
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="sm" className={style}>
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
            Sign up as Mentor
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
                    id="age"
                    label="Age"
                    name="age"
                    type="number"
                    {...register("age")}
                  />
                  <span className={style.errors}>{errors.age?.message}</span>
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
                  <FormControl fullWidth>
                    <TextField
                      id="major"
                      label="Major"
                      select
                      required
                      defaultValue=""
                      fullWidth
                      inputProps={register("major")}
                    >
                      {listOfMajors.map((major) => (
                        <MenuItem key={major} value={major}>
                          {major}
                        </MenuItem>
                      ))}
                    </TextField>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="university"
                    label="University"
                    id="university"
                    {...register("university")}
                  />
                  <span className={style.errors}>
                    {errors.university?.message}
                  </span>
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <TextField
                      id="country"
                      label="Country"
                      select
                      required
                      defaultValue=""
                      fullWidth
                      inputProps={register("country")}
                    >
                      {listOfCountries.map((country) => (
                        <MenuItem key={country} value={country}>
                          {country}
                        </MenuItem>
                      ))}
                    </TextField>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    defaultValue=""
                    name="work"
                    label="Workplace (Leave Empty if you are Student)"
                    id="work"
                    {...register("work")}
                  />
                  <span className={style.errors}>{errors.work?.message}</span>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="userInfo"
                    label="About Mentor"
                    name="userInfo"
                    multiline
                    rows={5}
                    {...register("userInfo")}
                  />
                  <span className={style.errors}>
                    {errors.userInfo?.message}
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
