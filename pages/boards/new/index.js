import styled from '@emotion/styled';

const Wrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  padding: 0 101px;
  box-shadow: 0px 4px 20px 0px #00000033;
  font-family: Noto Sans CJK KR;
`;

const Title = styled.p`
  font-size: 36px;
  font-weight: 700;
  margin: 60px 0 40px;
`;

const WriterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 40px;
`;

const InputWrapperSmall = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 40px;
`;

const BoardLabel = styled.label`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 16px;
  .active {
    box-shadow: 0px 4px 4px 0px #00000040;
    font-weight: 500;
  }
`;

const BoardInputRow = styled.input`
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
const BoardInput = styled.input`
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

const ContentField = styled.textarea`
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

const SearchWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 16px;
`;

const ZipInput = styled.input`
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

const SearchButton = styled.button`
  background: #000000;
  color: white;
  padding: 14px 16px;
  font-size: 16px;
  font-weight: 500;
`;

const AddressInput = styled.input`
  box-sizing: border-box;
  border: 1px solid #bdbdbd;
  padding: 14px 0;
  width: 100%;
  margin-bottom: ${props => (props.marginBottom ? '30px' : '0px')};
  ::placeholder {
    color: #bdbdbd;
    font-size: 16px;
    font-weight: 400;
  }
`;

const PhotoWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Photo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 78px;
  width: 78px;
  margin-right: 24px;
  background: #bdbdbd;
  p {
    font-size: 12px;
    font-weight: 500;
    margin: 5px 0 0;
  }
`;

const SettingWrapper = styled.div`
  width: 100%;
`;

const RadioInput = styled.input`
  cursor: pointer;
`;

const RadioLabel = styled.label`
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  margin-right: 22px;
  margin-left: 10px;
`;

const SubmitButton = styled.button`
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  padding: 14px 60px;
  background: #ffd600;
  border: none;
  margin: 80px auto 100px;
`;

export default function index() {
  return (
    <>
      <Wrapper>
        <Title>게시물 등록</Title>
        <WriterWrapper>
          <InputWrapperSmall>
            <BoardLabel htmlFor='name' className='active'>작성자</BoardLabel>
            <BoardInputRow
              placeholder='이름을 적어주세요.'
              id='name'
              type='text'
            ></BoardInputRow>
          </InputWrapperSmall>
          <InputWrapperSmall>
            <BoardLabel htmlFor='password'>비밀번호</BoardLabel>
            <BoardInputRow
              placeholder='비밀번호를 입력해주세요.'
              id='password'
              type='password'
            ></BoardInputRow>
          </InputWrapperSmall>
        </WriterWrapper>
        <InputWrapper>
          <BoardLabel htmlFor='title'>제목</BoardLabel>
          <BoardInput
            placeholder='제목을 작성해주세요.'
            id='title'
            type='text'
          ></BoardInput>
        </InputWrapper>
        <InputWrapper>
          <BoardLabel htmlFor='contents'>내용</BoardLabel>
          <ContentField
            placeholder='내용을 작성해주세요.'
            id='contents'
          ></ContentField>
        </InputWrapper>
        <InputWrapper>
          <BoardLabel htmlFor='address'>주소</BoardLabel>
          <SearchWrapper>
            <ZipInput placeholder='07250' type='text'></ZipInput>
            <SearchButton>우편번호 검색</SearchButton>
          </SearchWrapper>
          <AddressInput marginBottom type='text'/>
          <AddressInput type='text'/>
        </InputWrapper>
        <InputWrapper>
          <BoardLabel htmlFor='youtube'>유튜브</BoardLabel>
          <BoardInput
            placeholder='링크를 복사해주세요.'
            id='youtube'
            type='url'
          ></BoardInput>
        </InputWrapper>
        <InputWrapper>
          <BoardLabel htmlFor='attachPhoto'>사진첨부</BoardLabel>
          <PhotoWrapper>
            <Photo>
              <svg
                width='14'
                height='14'
                viewBox='0 0 14 14'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z' fill='#4F4F4F' />
              </svg>
              <p>Upload</p>
            </Photo>
            <Photo>
              <svg
                width='14'
                height='14'
                viewBox='0 0 14 14'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z' fill='#4F4F4F' />
              </svg>
              <p>Upload</p>
            </Photo>
            <Photo>
              <svg
                width='14'
                height='14'
                viewBox='0 0 14 14'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z' fill='#4F4F4F' />
              </svg>
              <p>Upload</p>
            </Photo>
          </PhotoWrapper>
        </InputWrapper>
        <InputWrapper>
          <BoardLabel htmlFor='mainSetting'>메인설정</BoardLabel>
          <SettingWrapper>
            <RadioInput
              type='radio'
              value='유튜브'
              id='youtubeSetting'
            ></RadioInput>
            <RadioLabel htmlFor='youtubeSetting'>유튜브</RadioLabel>
            <RadioInput
              type='radio'
              value='사진'
              id='photoSetting'
            ></RadioInput>
            <RadioLabel htmlFor='photoSetting'>사진</RadioLabel>
          </SettingWrapper>
        </InputWrapper>
        <SubmitButton>등록하기</SubmitButton>
      </Wrapper>
    </>
  );
}
