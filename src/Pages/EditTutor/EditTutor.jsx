import { useParams } from "react-router";
import { Box, LinearProgress, Typography } from "@mui/material";
import { useFetchTutorByIdQuery } from "../../store";
import EditAddress from "../../Components/EditTutor/EditAddress";
import BasicDetails from "../../Components/EditTutor/BasicDetails";
import EditSubjects from "../../Components/EditTutor/EditSubjects";
import EditEducation from "../../Components/EditTutor/EditEducation";
import EditExperience from "../../Components/EditTutor/EditExperience";
import TabsComponent from "../../Components/TabComponent/TabsComponent";
import EditTeachingDetails from "../../Components/EditTutor/EditTeachingDetails";
import EditProfileDescription from "../../Components/EditTutor/EditProfileDescription";

const EditTutor = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useFetchTutorByIdQuery(id);
  const tutorData = !isLoading && !error && data ? data.data : [];
  const components = [
    <BasicDetails key={0} />,
    <EditSubjects key={1} subjects={tutorData.tutor_subjects} />,
    <EditAddress key={2} />,
    <EditEducation key={3} education={tutorData.tutor_educations} />,
    <EditExperience key={4} experience={tutorData.tutor_experiences} />,
    <EditTeachingDetails key={5} charges={tutorData.charges} />,
    <EditProfileDescription key={6} />,
  ];
  return (
    <Box>
      <Box>
        <Typography variant="h6" sx={{ mb: 3 }}>
          Edit Tutor details
        </Typography>
        {isLoading ? (
          <LinearProgress />
        ) : (
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
        )}
      </Box>
    </Box>
  );
};

export default EditTutor;
