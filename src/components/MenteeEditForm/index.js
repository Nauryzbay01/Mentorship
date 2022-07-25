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
import { listOfNis } from "../../constants";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaForEditingMenteeProfile } from "../../utils/schema";
import style from "./menteeEditForm.module.css";
import { useNavigate } from "react-router-dom";

import { useContext } from "react";
import { UserProfileContext } from "../../contexts/UserProfileContext";

import { menteeEditProfileRequest } from "../../services";

const theme = createTheme();

export default function MenteeEditForm() {
  const { userProfileData } = useContext(UserProfileContext);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaForEditingMenteeProfile),
  });

  const onSubmit = async (data) => {
    const response = await menteeEditProfileRequest(data);
    response?.status === 200 ? navigate("/userprofile") : alert("Smth Wrong!");
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
                    fullWidth
                    id="firstname"
                    defaultValue={userProfileData?.user.firstname}
                    placeholder={userProfileData?.user.firstname}
                    autoFocus
                    {...register("firstname")}
                  />
                  <span className={style.errors}>
                    {errors.firstname?.message}
                  </span>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    id="lastname"
                    defaultValue={userProfileData?.user.lastname}
                    placeholder={userProfileData?.user.lastname}
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
                    id="grade"
                    label="Grade"
                    defaultValue={userProfileData?.grade}
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
                      defaultValue={userProfileData?.school}
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
                    defaultValue={userProfileData?.achievements}
                    placeholder={userProfileData?.achievements}
                    name="achievements"
                    multiline
                    rows={5}
                    {...register("achievements")}
                  />
                  <span className={style.errors}>
                    {errors.achievements?.message}
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
