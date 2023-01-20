import styled from '@emotion/styled';

export const Wrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  padding: 0 101px;
  box-shadow: 0px 4px 20px 0px #00000033;
  font-family: Noto Sans CJK KR;
  margin: 0 auto;
`;

export const Title = styled.p`
  font-size: 36px;
  font-weight: 700;
  margin: 60px 0 40px;
`;

export const WriterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 40px;
`;

export const InputWrapperSmall = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 40px;
`;

export const BoardLabel = styled.label`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 16px;
  .active {
    box-shadow: 0px 4px 4px 0px #00000040;
    font-weight: 500;
  }
`;

export const BoardInputRow = styled.input`
  box-sizing: border-box;
  border: 1px solid #bdbdbd;
  padding: 14px 16px;
  width: 486px;
  ::placeholder {
    color: #bdbdbd;
    font-size: 16px;
    font-weight: 400;
  }
`;
export const BoardInput = styled.input`
  box-sizing: border-box;
  border: 1px solid #bdbdbd;
  padding: 14px 16px;
  width: 100%;
  ::placeholder {
    color: #bdbdbd;
    font-size: 16px;
    font-weight: 400;
  }
`;

export const ContentField = styled.textarea`
  box-sizing: border-box;

  border: 1px solid #bdbdbd;
  padding: 14px 16px;
  width: 100%;
  height: 480px;
  ::placeholder {
    color: #bdbdbd;
    font-size: 16px;
    font-weight: 400;
  }
`;

export const SearchWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 16px;
`;

export const ZipInput = styled.input`
  width: 77px;
  box-sizing: border-box;
  border: 1px solid #bdbdbd;
  padding: 14px 15px;
  margin-right: 16px;
  ::placeholder {
    color: #bdbdbd;
    font-size: 16px;
    font-weight: 400;
  }
`;

export const SearchButton = styled.button`
  background: #000000;
  color: white;
  padding: 14px 16px;
  font-size: 16px;
  font-weight: 500;
`;

export const AddressInput = styled.input`
  box-sizing: border-box;
  border: 1px solid #bdbdbd;
  padding: 14px 0;
  width: 100%;
  margin-bottom: ${(props) => (props.marginBottom ? '30px' : '0px')};
  ::placeholder {
    color: #bdbdbd;
    font-size: 16px;
    font-weight: 400;
  }
`;

export const PhotoWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const Photo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 78px;
  width: 78px;
  margin-right: 24px;
  background: #bdbdbd;
  cursor: pointer;
  p {
    font-size: 12px;
    font-weight: 500;
    margin: 5px 0 0;
  }
`;

export const PlusIcon = styled.div`
  background-image: url('/assets/ic_add-24px.png');
  background-size: cover;
  height: 14px;
  width: 14px;
`;

export const SettingWrapper = styled.div`
  width: 100%;
`;

export const RadioInput = styled.input`
  cursor: pointer;
`;

export const RadioLabel = styled.label`
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  margin-right: 22px;
  margin-left: 10px;
`;

export const SubmitButton = styled.button`
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  padding: 14px 60px;
  background: #ffd600;
  border: none;
  margin: 80px auto 100px;
  cursor: pointer;
`;

export const ErrorMessage = styled.div`
  color: #ff1b6d;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  width: 100%;
  margin-top: 12px;
`;

// detail Page

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 46.67px;
  padding-bottom: 20px;
  margin-top: 80px;
  border-bottom: 1px solid #bdbdbd;
`;

export const UserInfoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const InfoText = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16.67px;
  height: 100%;
`;

export const UserName = styled.span`
  font-family: Noto Sans CJK KR;
  font-size: 24px;
  font-weight: 500;
`;

export const CreatedDate = styled.span`
  font-family: Noto Sans CJK KR;
  font-size: 16px;
  font-weight: 400;
  color: #828282;
`;

export const NavIconWrapper = styled.div`
  display: flex;
  align-items: center;
  img:last-child {
    margin-left: 29.33px;
  }
`;

export const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
  margin-bottom: 120px;

  img {
    width: 100%;
    margin-bottom: 40px;
  }

  span {
    font-family: Noto Sans CJK KR;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
  }
`;

export const VideoWrapper = styled.div`
  position: relative;
  width: 486px;
  height: 240px;
  margin: 0 auto 163px;
  background-color: yellow;
  background: url('/assets/video.png');
  background-size: cover;
  div {
    position: absolute;
    width: 48px;
    height: 48px;
    background: rgba(255, 255, 255, 0.6);
    border-radius: 50%;
    transform: translate(219px, 96px);
    img {
      position: absolute;
      transform: translate(17px, 15px);
    }
  }
`;

export const LikeOrDisLike = styled.div`
  display: flex;
  margin-bottom: 80px;
`;

export const ThumbsIconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: ${(props) => props.marginRight};
`;

export const LikeOrDisLikecount = styled.div`
  font-family: Noto Sans CJK KR;
  font-size: 18px;
  font-weight: 400;
  color: ${(props) => props.color};
`;

export const MenuButtonsWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  margin: 101px auto 87px;
  /* border-bottom: 1px solid #BDBDBD; */
  button {
    font-family: 'Noto Sans CJK KR';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    border: 1px solid #bdbdbd;
    padding: 10.5px 60px;
    background: white;
    margin-right: 24px;
  }
`;
