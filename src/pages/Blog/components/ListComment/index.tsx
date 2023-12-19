import { Comment as TypeComment } from '~/types/entity';
import Comment from '../Comment';

type CommentProps = {
  comments: TypeComment[];
};

const ListComment = (props: CommentProps) => {
  const { comments } = props;

  return (
    <div>
      {comments.map((comment, index) => (
        <Comment key={index} comment={comment} />
      ))}
    </div>
  );
};

export default ListComment;
