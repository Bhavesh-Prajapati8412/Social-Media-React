import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  addInitialPosts: () => {},
  deletePost: () => {},
  updateReactions: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = [...currPostList];

  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_INITIAL_POSTS") {
    newPostList = action.payload.posts;
  } else if (action.type === "ADD_POST") {
    newPostList = [
      ...currPostList,
      {
        id: Date.now(),
        title: action.payload.title,
        body: action.payload.body,
        reactions: action.payload.reactions,
        userId: action.payload.userId,
        tags: action.payload.tags,
      },
    ];
  }
  // Handle updating reactions (likes and dislikes)
  else if (action.type === "UPDATE_REACTIONS") {
    newPostList = currPostList.map((post) =>
      post.id === action.payload.postId
        ? {
            ...post,
            reactions: {
              ...post.reactions,
              likes: action.payload.likes,
              dislikes: action.payload.dislikes,
            },
          }
        : post
    );
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);

  const addPost = (userId, postTitle, postBody, reactions, tags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reactions: reactions,
        userId: userId,
        tags: tags,
      },
    });
  };

  const addInitialPosts = (posts) => {
    dispatchPostList({
      type: "ADD_INITIAL_POSTS",
      payload: {
        posts,
      },
    });
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  const updateReactions = (postId, likes, dislikes) => {
    dispatchPostList({
      type: "UPDATE_REACTIONS",
      payload: {
        postId,
        likes,
        dislikes,
      },
    });
  };

  return (
    <PostList.Provider
      value={{
        postList,
        addPost,
        addInitialPosts,
        deletePost,
        updateReactions,
      }}
    >
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
