import React from 'react';
import { inject, observer } from 'mobx-react';
import { instanceOf } from 'prop-types';
import styled from 'styled-components';
import PostsStore from '../../../stores/PostsStore';
import Post from './Post';

const StyledDiv = styled.div`
  width: 100%;
  min-width: 400px;
  height: 470px;
  margin: 20px 0px;
`;

class Feed extends React.Component {
  static propTypes = {
    postsStore: instanceOf(PostsStore).isRequired,
  }

  async componentDidMount() {
    const { postsStore } = this.props;
    await postsStore.fetchPosts();
  }

  render() {
    const { postsStore: { posts } } = this.props;
    return (
      <StyledDiv >
        {posts &&
          <div>
            {
              posts.length === 0 ?
                <Post
                  post={'Hi there, this is where you will see posts related to your projects. You can also use this feed as your though catalog - about your vision, dreams and aspirations!'}
                  user={{ fullName: 'Global Shapers Team', imgUrl: 'http://res.cloudinary.com/depjh17m6/image/upload/v1510193454/Shapers%20Iloilo/logo_njstdw.png' }}
                /> :
                posts.map(post => <Post key={post._id} post={post.post} user={post.owner} />)
            }
          </div>
        }
      </StyledDiv>
    );
  }
}

export default inject('postsStore')(observer(Feed));
