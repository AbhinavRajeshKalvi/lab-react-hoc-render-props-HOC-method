import React, { useState } from 'react';
import './App.css'

function App() {

  const withLike = (Container, type) => {
    return function WithLike(props) {
      const [Like, setLike] = useState(0);
  
      const handleLikeCount = () => {
        setLike(Like + 1);
      };
  
      return (
        <div>
          <Container
            handleLike={handleLikeCount}
            Like={Like}
            type={type}
            {...props}
          />
        </div>
      );
    };
  };
  
  const LikeButton = ({ handleLike, Like, type }) => {
    return (
      <button onClick={handleLike}>
        Like {type} {Like}
      </button>
    );
  };
  
  const LikeImage = withLike(LikeButton, 'Image');
  
  const LikePost = withLike(LikeButton, 'Post');

  return (
    <div className='container'>
      <h3>Some Blog</h3>
      <div className='buttons'>
        <LikePost />
        <LikeImage />
      </div>
    </div>
  );
}

export default App;
