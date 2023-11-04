import {
  Box,
  Container,
  FormLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useFormik } from "formik";
import LoadingButton from "@mui/lab/LoadingButton";
import "./loginpage.css";
import loginimg from "../../assets/loginhero.png";
import { baseAPI } from "../../utils/baseAPIandKey";
import { loginSchema } from "../../utils/formsSchema";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../../store";
import { toast } from "react-toastify";
const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const defaultFormFields = {
    email: "",
    password: "",
  };
  const [loading, setLoading] = useState(false);
  const { values, touched, errors, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: defaultFormFields,
      validationSchema: loginSchema,
      onSubmit: (values) => handleFormSubmit(values),
    });
  const handleFormSubmit = async () => {
    setLoading(true);
    try {
      const res = await axios.post(`${baseAPI}/api/login`, values);
      if (res.status === 200) {
        navigate("/");
        toast.success(res.data.message);
        dispatch(setCurrentUser(res.data.data));
        setLoading(false);
      }
    } catch (error) {
      if (error.response?.status !== 200) {
        setLoading(false);
        toast.error("Invalid Email or password");
      } else if (error.code === "ERR_NETWORK") {
        setLoading(false);
        toast.error("Network Error, Try Again");
      }
    }
  };

  return (
    <Container
      maxWidth="xl"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: { md: "center", sm: "stretch" },
        bgcolor: "neutral.main",
      }}
    >
      <Box
        sx={{
          height: { lg: "95.5vh", md: "95vh", sm: "94.7vh", xs: "100vh" },
          width: { xs: "100vw", sm: "100vw", md: "90vw", lg: "70vw" },
          m: { sm: 2, md: 2 },
          p: 3,
          borderRadius: "10px",
          backgroundColor: "white",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Grid container sx={{ justifyContent: "center" }}>
          <Grid item sx={{ display: { xs: "none", md: "block" } }} md={5}>
            <Box
              className="loginBackGround"
              sx={{
                width: "100%",
                height: "98%",
                borderRadius: "32px",
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                justifyContent: "center",
              }}
            >
              <Box sx={{ px: 5 }}>
                <Box sx={{ mt: 2, textAlign: "center" }}>
                  <img src={loginimg} width={"90%"} />
                </Box>
                <Typography
                  variant="h5"
                  sx={{ color: "neutral.main", mt: 4, fontWeight: "700" }}
                >
                  Welcome Admin!
                </Typography>
                <Typography
                  sx={{ mt: 1 }}
                  variant="caption"
                  color="neutral.main"
                >
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Molestias nulla amet ullam beatae tenetur recusandae suscipit
                  eius repellat et.
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item md={7} xs={10}>
            <Box
              sx={{
                p: { lg: 8, md: 8, sm: 2, xs: 1 },
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                height: "100%",
              }}
            >
              <Typography variant="h5" fontWeight="bold">
                Sign In
              </Typography>
              <Box sx={{ mt: 5 }}>
                <form onSubmit={handleSubmit}>
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <FormLabel
                      type="email"
                      sx={{
                        color: "black",
                        fontSize: 13,
                        fontWeight: 550,
                        mb: 1,
                      }}
                    >
                      Email
                    </FormLabel>
                    <TextField
                      size="small"
                      label="Example@email.com"
                      type="email"
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.email && touched.email ? (
                      <p className="form-error" style={{ color: "red" }}>
                        {errors.email}
                      </p>
                    ) : null}
                    <FormLabel
                      sx={{
                        color: "black",
                        fontSize: 13,
                        fontWeight: 550,
                        mt: 3,
                        mb: 1,
                      }}
                      placeholder="Password"
                    >
                      Password
                    </FormLabel>
                    <TextField
                      size="small"
                      type="password"
                      name="password"
                      label="at least 8 characters"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.password && touched.password ? (
                      <p className="form-error" style={{ color: "red" }}>
                        {errors.password}
                      </p>
                    ) : null}
                    <Typography
                      variant="subtitle2"
                      sx={{ ml: "auto", mt: 1 }}
                      color="grey"
                    >
                      Forgot Password?
                    </Typography>
                    <Box sx={{ mt: 2 }}>
                      <LoadingButton
                        type="submit"
                        sx={{
                          fontSize: 15,
                          textTransform: "capitalize",
                          bgcolor: "secondary.main",
                          ":hover": { bgcolor: "secondary.dark" },
                          width: "100%",
                        }}
                        variant="contained"
                        loading={loading}
                      >
                        Sign In
                      </LoadingButton>
                    </Box>
                  </Box>
                </form>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default LoginPage;
