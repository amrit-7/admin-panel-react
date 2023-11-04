/* eslint-disable react/prop-types */
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useState } from "react";
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      {...other}
    >
      {value === index && (
        <Box
          sx={{ boxShadow: "1", p: 2, borderRadius: "0 4px 4px 4px", mb: 10 }}
        >
          <Box>{children}</Box>
        </Box>
      )}
    </div>
  );
}
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
export default function TabsComponent({ components, labels }) {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          variant="scrollable"
          scrollButtons="auto"
          indicatorColor="primary"
          allowScrollButtonsMobile
          textColor="white"
          sx={{
            "& .Mui-selected": {
              backgroundColor: "primary.main",
              color: "white.main",
            },
            "& .MuiTab-root": {
              width: "fit-content",
              height: 40,
              border: "1px solid #E0E0E0",
              borderRadius: "4px 4px 0 0 ",
              mr: 1,
              fontSize: 16,
              textTransform: "capitalize",
              color: "white.grey",
            },
          }}
          value={value}
          onChange={handleChange}
        >
          {labels.map((label, index) => {
            return (
              <Tab
                key={index}
                sx={{ fontSize: 16 }}
                label={label}
                {...a11yProps(index)}
              />
            );
          })}
        </Tabs>
      </Box>
      {components.map((component, index) => {
        return (
          <CustomTabPanel key={index} value={value} index={index}>
            {component}
          </CustomTabPanel>
        );
      })}
    </Box>
  );
}
