import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  TextField,
} from "@mui/material";

export const Privacy = () => {
  return (
    <Box sx={{}}>
      <form autoComplete="off" noValidate>
        <Card
          sx={{
            marginTop: 5,
          }}
        >
          <CardHeader subheader="The information can be edited" title="Privacy">
            <Divider />
          </CardHeader>
          <CardContent>
            <TextField
              type="password"
              label="Current Password"
              name="currentPassword"
              required
              variant="outlined"
              style={{ margin: 12, width: 1000 }}
            />
            <TextField
              type="password"
              label="New Password"
              name="newPassword"
              required
              variant="outlined"
              style={{ margin: 12, width: 1000 }}
            />
            <TextField
              type="password"
              label="Confirm Password"
              name="confirmPassword"
              required
              variant="outlined"
              style={{ margin: 12, width: 1000 }}
            />
          </CardContent>
        </Card>
      </form>
    </Box>
  );
};
