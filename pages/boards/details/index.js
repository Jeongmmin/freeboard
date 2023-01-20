import {
  ContentsWrapper,
  CreatedDate,
  Header,
  InfoText,
  LikeOrDisLike,
  LikeOrDisLikecount,
  NavIconWrapper,
  Test,
  ThumbsIconWrapper,
  Title,
  UserInfoWrapper,
  UserName,
  VideoWrapper,
  Wrapper,
  MenuButtonsWrapper
} from '../../../styles/emotion';

export default function DetailPage() {
  return (
    <>
      <Wrapper>
        <Header>
          <UserInfoWrapper>
            <img src='/assets/avatar.png' />
            <InfoText>
              <UserName>노원두</UserName>
              <CreatedDate>Date : 2021.02.18</CreatedDate>
            </InfoText>
          </UserInfoWrapper>
          <NavIconWrapper>
            <img src='/assets/link.png' />
            <img src='/assets/map.png' />
          </NavIconWrapper>
        </Header>
        <ContentsWrapper>
          <Title>게시글 제목입니다.</Title>
          <img src='/assets/detail-page-content.png' alt='' />
          <span>
            가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하
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
            <LikeOrDisLikecount color='#FFD600'>1920</LikeOrDisLikecount>
          </ThumbsIconWrapper>
          <ThumbsIconWrapper>
            <img src='/assets/ic_thumb_down-24px.png' alt='' />
            <LikeOrDisLikecount color='#828282'>1920</LikeOrDisLikecount>
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
