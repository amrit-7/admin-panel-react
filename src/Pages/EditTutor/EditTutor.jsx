import { Box, Typography } from "@mui/material";
import TabsComponent from "../../Components/TabComponent/TabsComponent";
import EditAddress from "../../Components/EditTutor/EditAddress";
import EditSubjects from "../../Components/EditTutor/EditSubjects";
import EditExperience from "../../Components/EditTutor/EditExperience";
import BasicDetails from "../../Components/EditTutor/BasicDetails";
import EditEducation from "../../Components/EditTutor/EditEducation";
import EditTeachingDetails from "../../Components/EditTutor/EditTeachingDetails";
import EditProfileDescription from "../../Components/EditTutor/EditProfileDescription";

const EditTutor = () => {
  const components = [
    <BasicDetails key={0} />,
    <EditSubjects key={1} />,
    <EditAddress key={2} />,
    <EditEducation key={3} />,
    <EditExperience key={4} />,
    <EditTeachingDetails key={5} />,
    <EditProfileDescription key={6} />,
  ];
  return (
    <Box>
      <Box>
        <Typography variant="h6" sx={{ mb: 3 }}>
          Edit Tutor details
        </Typography>
        <TabsComponent
          labels={[
            "Basic Details",
            "Subjects",
            "Address",
            "Education",
            "Experience",
            "Teaching Details",
            "Description",
          ]}
          components={components}
        />
      </Box>
    </Box>
  );
};

export default EditTutor;
