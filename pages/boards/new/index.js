import { useState } from 'react';
import {
  AddressInput,
  BoardInput,
  BoardInputRow,
  BoardLabel,
  ContentField,
  ErrorMessage,
  InputWrapper,
  InputWrapperSmall,
  Photo,
  PhotoWrapper,
  RadioInput,
  RadioLabel,
  SearchButton,
  SearchWrapper,
  SettingWrapper,
  SubmitButton,
  Title,
  Wrapper,
  WriterWrapper,
  ZipInput,
} from '../../../styles/emotion';

export default function index() {
  const [writer, setWriter] = useState('');
  const [password, setPassword] = useState('');
  const [boardTitle, setBoardTitle] = useState('');
  const [boardContents, setBoardContents] = useState('');
  const [address, setAddress] = useState('');
  const [youtubeLink, setYoutubeLink] = useState('');

  const [writerError, setWriterError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [boardTitleError, setBoardTitleError] = useState('');
  const [boardContentsError, setBoardContentsError] = useState('');
  const [addressError, setAddressError] = useState('');
  const [youtubeLinkError, setYoutubeLinkError] = useState('');

  function handleWriter(e) {
    setWriter(e.target.value);
    if (writer === '') {
      setWriterError('작성자를 입력해주세요');
    }
  }

  function handlePassword(e) {
    setPassword(e.target.value);
    if (password === '') {
      setPasswordError('비밀번호를 입력해주세요');
    }
  }
  function handleBoardTitle(e) {
    setBoardTitle(e.target.value);
    if (boardTitle === '') {
      setBoardTitleError('제목을 입력해주세요');
    }
  }
  function handleBoardContents(e) {
    setBoardContents(e.target.value);
    if (boardContents === '') {
      setBoardContentsError('내용을 입력해주세요');
    }
  }
  function handleAddress(e) {
    setAddress(e.target.value);
    if (address === '') {
      setAddressError('주소를 입력해주세요');
    }
  }
  function handleYoutubeLink(e) {
    setYoutubeLink(e.target.value);
    if (youtubeLink === '') {
      setYoutubeLinkError('유튜브링크를 입력해주세요');
    }
  }

  function onSubmitForm() {
    if (
      writer &&
      password &&
      boardTitle &&
      boardContents &&
      address &&
      youtubeLink
    ) {
      alert('게시물이 정상적으로 등록되었습니다.');
    }
  }

  return (
    <>
      <Wrapper>
        <Title>게시물 등록</Title>
        <WriterWrapper>
          <InputWrapperSmall>
            <BoardLabel htmlFor='name' className='active'>
              작성자
            </BoardLabel>
            <BoardInputRow
              placeholder='이름을 적어주세요.'
              id='name'
              type='text'
              onChange={handleWriter}
            ></BoardInputRow>
            <ErrorMessage>{writerError}</ErrorMessage>
          </InputWrapperSmall>
          <InputWrapperSmall>
            <BoardLabel htmlFor='password'>비밀번호</BoardLabel>
            <BoardInputRow
              placeholder='비밀번호를 입력해주세요.'
              id='password'
              type='password'
              onChange={handlePassword}
            ></BoardInputRow>
            <ErrorMessage>{passwordError}</ErrorMessage>
          </InputWrapperSmall>
        </WriterWrapper>
        <InputWrapper>
          <BoardLabel htmlFor='title'>제목</BoardLabel>
          <BoardInput
            placeholder='제목을 작성해주세요.'
            id='title'
            type='text'
            onChange={handleBoardTitle}
          ></BoardInput>
          <ErrorMessage>{boardTitleError}</ErrorMessage>
        </InputWrapper>
        <InputWrapper>
          <BoardLabel htmlFor='contents'>내용</BoardLabel>
          <ContentField
            placeholder='내용을 작성해주세요.'
            id='contents'
            onChange={handleBoardContents}
          ></ContentField>
          <ErrorMessage>{boardContentsError}</ErrorMessage>
        </InputWrapper>
        <InputWrapper>
          <BoardLabel htmlFor='address'>주소</BoardLabel>
          <SearchWrapper>
            <ZipInput placeholder='07250' type='text'></ZipInput>
            <SearchButton>우편번호 검색</SearchButton>
          </SearchWrapper>
          <AddressInput marginBottom type='text' onChange={handleAddress} />
          <AddressInput type='text' />
          <ErrorMessage>{addressError}</ErrorMessage>
        </InputWrapper>
        <InputWrapper>
          <BoardLabel htmlFor='youtube'>유튜브</BoardLabel>
          <BoardInput
            placeholder='링크를 복사해주세요.'
            id='youtube'
            type='url'
            onChange={handleYoutubeLink}
          ></BoardInput>
          <ErrorMessage>{youtubeLinkError}</ErrorMessage>
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
        <SubmitButton onClick={onSubmitForm}>등록하기</SubmitButton>
      </Wrapper>
    </>
  );
}