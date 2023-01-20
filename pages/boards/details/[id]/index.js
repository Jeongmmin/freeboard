import { useQuery, gql } from '@apollo/client';
import { useRouter } from 'next/router';
import {
  ContentsWrapper,
  CreatedDate,
  Header,
  InfoText,
  LikeOrDisLike,
  LikeOrDisLikecount,
  NavIconWrapper,
  ThumbsIconWrapper,
  Title,
  UserInfoWrapper,
  UserName,
  VideoWrapper,
  Wrapper,
  MenuButtonsWrapper,
} from '../../../../styles/emotion';

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
      createdAt
    }
  }
`;

export default function DetailPage() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.id,
    },
  });

  return (
    <>
      <Wrapper>
        <Header>
          <UserInfoWrapper>
            <img src='/assets/avatar.png' />
            <InfoText>
              <UserName>{data?.fetchBoard.writer}</UserName>
              <CreatedDate>{data?.fetchBoard.createdAt}</CreatedDate>
            </InfoText>
          </UserInfoWrapper>
          <NavIconWrapper>
            <img src='/assets/link.png' />
            <img src='/assets/map.png' />
          </NavIconWrapper>
        </Header>
        <ContentsWrapper>
          <Title>{data?.fetchBoard.title}</Title>
          <img src='/assets/detail-page-content.png' alt='' />
          <span>
          {data?.fetchBoard.contents}
          </span>
        </ContentsWrapper>
        <VideoWrapper>
          <div>
            <img src='/assets/Polygon.png' alt='' />
          </div>
        </VideoWrapper>
        <LikeOrDisLike>
          <ThumbsIconWrapper marginRight='40px'>
            <img src='/assets/ic_thumb_up_off_alt-24px.png' alt='' />
            <LikeOrDisLikecount color='#FFD600'> {data?.fetchBoard.likeCount}</LikeOrDisLikecount>
          </ThumbsIconWrapper>
          <ThumbsIconWrapper>
            <img src='/assets/ic_thumb_down-24px.png' alt='' />
            <LikeOrDisLikecount color='#828282'>{data?.fetchBoard.dislikeCount}</LikeOrDisLikecount>
          </ThumbsIconWrapper>
        </LikeOrDisLike>
      </Wrapper>
      <MenuButtonsWrapper>
        <button>목록으로</button>
        <button>수정하기</button>
        <button>삭제하기</button>
      </MenuButtonsWrapper>
    </>
  );
}
