import { useContext } from "react";
import { UserProfileContext } from "../../contexts/UserProfileContext";
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

import { listOfNis, listOfCountries, listOfMajors } from "../../constants";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaForEditingMentorProfile } from "../../utils/schema";
import { mentorEditProfileRequest } from "../../services";
import style from "./mentorEditForm.module.css";

const theme = createTheme();

export default function MentorEditForm() {
  const { userProfileData } = useContext(UserProfileContext);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaForEditingMentorProfile),
  });

  const onSubmit = async (data) => {
    const response = await mentorEditProfileRequest(data);
    response?.status === 200 ? navigate("/userprofile") : alert("Smth Wrong!");
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
          <Typography
            component="h1"
            variant="h5"
            style={{ marginTop: "0.5rem" }}
          >
            Profile Edit Form
          </Typography>
          <Box component="div" noValidate sx={{ mt: 3 }}>
            <form action="#" onSubmit={handleSubmit(onSubmit)}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="firstname"
                    fullWidth
                    defaultValue={userProfileData?.user.firstname}
                    placeholder={userProfileData?.user.firstname}
                    id="firstname"
                    {...register("firstname")}
                  />
                  <span className={style.errors}>
                    {errors.firstname?.message}
                  </span>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    defaultValue={userProfileData?.user.lastname}
                    placeholder={userProfileData?.user.lastname}
                    id="lastname"
                    name="lastname"
                    {...register("lastname")}
                  />
                  <span className={style.errors}>
                    {errors.lastname?.message}
                  </span>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    id="email"
                    defaultValue={userProfileData?.user.email}
                    placeholder={userProfileData?.user.email}
                    name="email"
                    {...register("email")}
                  />
                  <span className={style.errors}>{errors.email?.message}</span>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    id="number"
                    defaultValue={userProfileData?.number}
                    placeholder={userProfileData?.number}
                    name="number"
                    {...register("number")}
                  />
                  <span className={style.errors}>{errors.number?.message}</span>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    id="iin"
                    defaultValue={userProfileData?.iin}
                    placeholder={`IIN - ${userProfileData?.iin}`}
                    name="iin"
                    {...register("iin")}
                  />
                  <span className={style.errors}>{errors.iin?.message}</span>
                </Grid>
                <Grid item xs={12}>
                  <TextField
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
                      defaultValue={userProfileData?.school}
                      select
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
                      defaultValue={userProfileData?.major}
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
                    fullWidth
                    name="university"
                    defaultValue={userProfileData?.university}
                    placeholder={userProfileData?.university}
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
                      defaultValue={userProfileData?.country}
                      select
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
                    name="work"
                    defaultValue={userProfileData?.work}
                    placeholder={userProfileData?.work}
                    id="work"
                    {...register("work")}
                  />
                  <span className={style.errors}>{errors.work?.message}</span>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    id="userInfo"
                    defaultValue={userProfileData?.userInfo}
                    placeholder={userProfileData?.userInfo}
                    name="userInfo"
                    multiline
                    rows={5}
                    {...register("userInfo")}
                  />
                  <span className={style.errors}>
                    {errors.userInfo?.message}
                  </span>
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Submit Edition
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <RouterLink to="/userprofile">Back</RouterLink>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
