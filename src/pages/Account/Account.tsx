import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  TextField,
} from "@mui/material";

export const Account = () => {
  return (
    <Box sx={{}}>
      <form autoComplete="off" noValidate>
        <Card
          sx={{
            marginTop: 5,
          }}
        >
          <CardHeader subheader="The information can be edited" title="Profile">
            <Divider />
          </CardHeader>
          <CardContent>
            <TextField
              label="Username"
              name="username"
              required
              variant="outlined"
              style={{ margin: 12, width: 1000 }}
            />
            <TextField
              label="Email"
              name="email"
              required
              variant="outlined"
              style={{ margin: 12, width: 1000 }}
            />
            <TextField
              label="Address"
              name="address"
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