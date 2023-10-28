import {
  Box,
  Button,
  Container,
  FormLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import loginimg from "../../assets/loginhero.png";
import "./loginpage.css";
const LoginPage = () => {
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
                <form>
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
                    />
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
                    <TextField size="small" label="at least 8 characters" />
                    <Typography
                      variant="subtitle2"
                      sx={{ ml: "auto", mt: 1 }}
                      color="grey"
                    >
                      Forgot Password?
                    </Typography>
                    <Box sx={{ mt: 2 }}>
                      <Button
                        sx={{
                          fontSize: 15,
                          textTransform: "capitalize",
                          bgcolor: "secondary.main",
                          ":hover": { bgcolor: "secondary.dark" },
                          width: "100%",
                        }}
                        variant="contained"
                      >
                        Sign In
                      </Button>
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
