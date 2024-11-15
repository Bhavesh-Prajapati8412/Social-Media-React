import { useContext, useRef, useState } from "react";
import { PostList } from "../store/post-list-store";

const Createpost = () => {
  const { addPost } = useContext(PostList);

  const userIdElement = useRef();
  const postTileElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleDislike = () => {
    setDislikes(dislikes + 1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTileElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = { likes, dislikes };
    const tags = tagsElement.current.value.split(" ");

    userIdElement.current.value = "";
    postTileElement.current.value = "";
    postBodyElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";

    addPost(userId, postTitle, postBody, reactions, tags);
  };

  return (
    <form className="create-post" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          Enter your UserID here.
        </label>
        <input
          type="text"
          ref={userIdElement}
          className="form-control"
          id="userId"
          placeholder="Your User Id."
        />
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          ref={postTileElement}
          className="form-control"
          id="title"
          placeholder="How are you feeling today..."
        />
      </div>

      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea
          type="text"
          ref={postBodyElement}
          rows="4"
          className="form-control"
          id="body"
          placeholder="Tell usmore about it."
        />
      </div>

      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Reactions
        </label>
        <div>
          <button
            type="button"
            className="btn btn-success"
            onClick={handleLike}
          >
            Like ({likes})
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={handleDislike}
          >
            Dislike ({dislikes})
          </button>
        </div>
      </div>

      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Enter your hashtags here
        </label>
        <input
          type="text"
          ref={tagsElement}
          className="form-control"
          id="tags"
          placeholder="Please enter your tags using space."
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};

export default Createpost;
