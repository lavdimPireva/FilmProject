import { Comment } from "../comments/comments";

import { useQuery } from "react-query";
import { getComments } from "../comments/comments.client";

export const useComment = () => {
  return useQuery<Comment[]>("comments", () => getComments(20));
};
