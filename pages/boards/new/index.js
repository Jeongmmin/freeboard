import { gql, useMutation } from '@apollo/client';
import { useState } from 'react';
import { useRouter } from 'next/router';
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
  PlusIcon,
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

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      title
    }
  }
`;

export default function index() {
  const [writer, setWriter] = useState('');
  const [password, setPassword] = useState('');
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');
  const [address, setAddress] = useState('');
  const [youtubeLink, setYoutubeLink] = useState('');

  const [writerError, setWriterError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [titleError, setTitleError] = useState('');
  const [contentsError, setContentsError] = useState('');
  const [addressError, setAddressError] = useState('');
  const [youtubeLinkError, setYoutubeLinkError] = useState('');

  const router = useRouter();

  const [createBoard] = useMutation(CREATE_BOARD);

  function handleWriter(e) {
    setWriter(e.target.value);
    if (writer !== '') {
      setWriterError('');
    }
  }

  function handlePassword(e) {
    setPassword(e.target.value);
    if (password !== '') {
      setPasswordError('');
    }
  }
  function handleTitle(e) {
    setTitle(e.target.value);
    if (title !== '') {
      setTitleError('');
    }
  }
  function handleContents(e) {
    setContents(e.target.value);
    if (contents !== '') {
      setContentsError('');
    }
  }
  function handleAddress(e) {
    setAddress(e.target.value);
    if (address !== '') {
      setAddressError('');
    }
  }
  function handleYoutubeLink(e) {
    setYoutubeLink(e.target.value);
    if (youtubeLink !== '') {
      setYoutubeLinkError('');
    }
  }

  const onSubmitForm = async () => {
    if (!writer) {
      setWriterError('작성자를 입력해주세요');
    }
    if (!password) {
      setPasswordError('비밀번호를 입력해주세요');
    }
    if (!title) {
      setTitleError('제목을 입력해주세요');
    }
    if (!contents) {
      setContentsError('내용을 입력해주세요');
    }
    if (!address) {
      setAddressError('주소를 입력해주세요');
    }

    if (!youtubeLink) {
      setYoutubeLinkError('유튜브링크를 입력해주세요');
    }

    if (writer && password && title && contents && address && youtubeLink) {
      try {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              writer,
              password,
              title,
              contents,
            },
          },
        });
        console.log(result);
        alert('게시물이 정상적으로 등록되었습니다.');
        router.push(`/boards/${result.data.createBoard._id}`);
      } catch (e) {
        alert(e.message);
      }
    }
  };

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
            onChange={handleTitle}
          ></BoardInput>
          <ErrorMessage>{titleError}</ErrorMessage>
        </InputWrapper>
        <InputWrapper>
          <BoardLabel htmlFor='contents'>내용</BoardLabel>
          <ContentField
            placeholder='내용을 작성해주세요.'
            id='contents'
            onChange={handleContents}
          ></ContentField>
          <ErrorMessage>{contentsError}</ErrorMessage>
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
              <PlusIcon />
              <p>Upload</p>
            </Photo>
            <Photo>
              <PlusIcon />
              <p>Upload</p>
            </Photo>
            <Photo>
              <p>Upload</p>
            </Photo>
            <Photo>
              <p>Upload</p>
            </Photo>
            <Photo>
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
