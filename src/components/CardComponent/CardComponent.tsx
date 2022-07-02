import { DeleteOutlined } from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { green } from "@mui/material/colors";
import { useAuthContext } from "../../lib/hooks/context/AuthContext/AuthContext";

interface Props {
  title: string;
  body: string;
  thumbnailUrl?: string;
}

export const CardComponent = ({ title, body, thumbnailUrl }: Props) => {
  const { user } = useAuthContext();

  return (
    <Card sx={{ width: 300 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: green[500] }} aria-label="recipe">
            {user?.charAt(0)}
          </Avatar>
        }
        action={
          <IconButton>
            <DeleteOutlined />
          </IconButton>
        }
        title={"title"}
        subheader={"September 14, 2022"}
      ></CardHeader>

      {thumbnailUrl ? (
        <CardMedia
          component="img"
          height="350"
          image="https://images-na.ssl-images-amazon.com/images/I/81y72TQXS+L.jpg"
          alt="Paella dish"
        />
      ) : null}

      <CardContent>
        <Typography gutterBottom variant="body2" color="text.secondary">
          {body}
        </Typography>
      </CardContent>
    </Card>
  );
};
