import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 45px;
  font-weight: 700;
  color: var(--color-white);
  margin: 20px 0 10px 0;
  line-height: 56px;

  small {
    font-size: 32px;
    line-height: 43px;
  }

  @media screen and (max-width: 991px) {
    font-size: 39px;
    line-height: 40px;
  }
`;

export const RecruitmentDateText = styled.p`
  font-size: 18px;
  font-weight: 400px;
  color: #87829f;
  margin-bottom: 60px;
`;

export const LogoBigImage = styled.div<{ src: string }>`
  width: 300px;
  height: 300px;
  opacity: 0.9;
  background-size: cover;
  background-image: url(${(props) => props.src});
  filter: drop-shadow(0px 0px 8px rgba(255, 255, 255, 0.25));
`;

export const SectionContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 767px) {
    align-items: flex-start;
    flex-direction: column-reverse;
    padding: 40px 0;

    div:last-child {
      display: none;
    }
  }
`;

export const ContestPosterImagesWrapper = styled.div`
  @media screen and (min-width: 767px) {
    position: relative;
    top: -280px;
    left: -250px;
    z-index: -1;

    div:first-child {
      position: absolute;
      width: 209px;
      height: 332px;
      left: 304px;
      top: 132.75px;
      transform: rotate(-8.01deg);
    }

    div:last-child {
      position: absolute;
      width: 241px;
      height: 361px;
      left: 470px;
      top: 100px;
      box-shadow: 10px 23px 21px -2px rgba(0, 0, 0, 0.2);
      border-radius: 5px;
      transform: rotate(6.09deg);
    }
  }

  @media screen and (max-width: 1030px) and (min-width: 940px) {
    div:first-child {
      width: 210px;
      height: 312px;
    }

    div:last-child {
      width: 221px;
      height: 331px;
    }
  }

  @media screen and (max-width: 940px) and (min-width: 900px) {
    div:first-child {
      width: 200px;
      height: 270px;
    }

    div:last-child {
      width: 190px;
      height: 291px;
    }
  }

  @media screen and (max-width: 900px) and (min-width: 767px) {
    position: absolute;
    top: -140px;
    left: -470px;

    div:first-child {
      width: 0px;
      height: 0px;
      display: none;
    }

    div:last-child {
      position: absolute;
      width: 200px;
      height: 298px;

      box-shadow: 10px 23px 21px -2px rgba(0, 0, 0, 0.2);
      border-radius: 5px;
      transform: rotate(0deg);
    }
  }

  @media screen and (max-width: 767px) {
    margin-top: 40px;
    display: flex;
    div:first-child {
      position: relative;
      top: 20px;
      left: 20px;
      margin-left: 20px;
      width: 156px;
      height: 234px;
      transform: rotate(-10.01deg);
    }
    div:last-child {
      position: relative;
      right: 20px;
      transform: rotate(6.09deg);
      width: 170px;
      height: 254px;
    }
  }
`;

export const ContestPosterImage = styled.div<{ src: string }>`
  border-radius: 5px;
  background-size: cover;
  background-image: url(${(props) => props.src});
  box-shadow: 10px 23px 21px -2px rgba(0, 0, 0, 0.2);
`;

export const SectionImage = styled.div<{ src: string }>`
  width: 425px;
  height: 255px;
  filter: drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.25));
  border-radius: 15px;
  box-shadow: 0px 0px 10px 0px #00000040;
  background-size: cover;
  background-position: center;
  background-image: url(${(props) => props.src});

  @media screen and (max-width: 991px) {
    width: 300px;
    height: 180px;
  }

  @media screen and (max-width: 767px) {
    width: 450px;
    height: 270px;
  }

  @media screen and (max-width: 540px) {
    width: 360px;
    height: 234px;
  }

  @media screen and (max-width: 400px) {
    width: 320px;
    height: 192px;
  }
`;

export const TeacherSectionImage = styled(SectionImage)<{ images: string[] }>`
  animation: changeTeacherSectionImages 6s infinite;
  resize: both;

  @keyframes changeTeacherSectionImages {
    0%,
    100% {
      background-image: url(${(props) => props.images[0]});
    }
    50% {
      background-image: url(${(props) => props.images[1]});
    }
    75% {
      background-image: url(${(props) => props.images[2]});
    }
  }
`;

export const ServerRoomSectionImage = styled(SectionImage)<{ images: string[] }>`
  animation: changeServerRoomSectionImages 7s infinite;

  @keyframes changeServerRoomSectionImages {
    0%,
    100% {
      background-image: url(${(props) => props.images[0]});
    }
    25% {
      background-image: url(${(props) => props.images[1]});
    }
    50% {
      background-image: url(${(props) => props.images[2]});
    }
    75% {
      background-image: url(${(props) => props.images[3]});
    }
  }
`;
