import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import profileImg from "../img/profile.png";
import profile3Img from "../img/profile3.png";
import Profile1 from "../component/Profile1";
import Profile2 from "../component/Profile2";
import Profile3 from "../component/Profile3";
import { FaArrowRight } from "react-icons/fa";

//가장 밖(1)
const Wrapper = styled.div`
  overflow: hidden;
`;
//2
const Container = styled.div`
  width: 100%;
  height: 120vh;
`;
//3 Slide
const SlideBox = styled.div`
  position: relative;
  width: 100%;
  height: 120vh;
  &:nth-child(-n + 3) {
    background: url(${profileImg}) no-repeat;
    background-size: cover;
  }
  &:nth-child(3) {
    background: url(${profile3Img}) no-repeat;
    background-size: cover;
  }
`;
//5 Slide later/next button
const Scroll = styled.div`
  width: 15%;
  height: 100%;
  float: right;
`;

//다음단계
const NextButton = styled.button`
  border: 0px;
  width: 100%;
  background: none;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 41px;
  color: #676767;
`;

//다음에 하기
const LaterButton = styled.button`
  width: 100%;
  margin-top: 20%;
  margin-bottom: 200%;
  border: 0px;
  background: none;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 41px;
  color: #999999;
`;

const Profile = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);
  const nextSlide = () => {
    if (currentSlide >= 4) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };
  useEffect(() => {
    slideRef.current.style.transition = "all 0.5s ease-in-out";
    slideRef.current.style.transform = `translateY(-${currentSlide}00%)`;
  }, [currentSlide]);

  return (
    <Wrapper>
      <Container ref={slideRef}>
        <SlideBox>
          <Profile1></Profile1>
          <Scroll>
            <Link to="/">
              <LaterButton> 다음에 하기</LaterButton>
            </Link>
            <NextButton onClick={nextSlide}>
              <FaArrowRight size="50px" /> <br />
              다음 단계
            </NextButton>
          </Scroll>
        </SlideBox>

        <SlideBox>
          <Profile2></Profile2>
          <Scroll>
            <Link to="/">
              <LaterButton> 다음에 하기</LaterButton>
            </Link>
            <Link to="/mypage">
              <NextButton>
                <FaArrowRight size="50px" /> <br />
                완료 하기
              </NextButton>
            </Link>
          </Scroll>
        </SlideBox>

        <SlideBox>
          <Profile3></Profile3>
          <Scroll>
            <Link to="/">
              <LaterButton style={{ color: "white" }}>다음에 하기</LaterButton>{" "}
            </Link>
            <NextButton onClick={nextSlide}>
              <FaArrowRight size="50px" /> <br />
              완료 하기
            </NextButton>
          </Scroll>
        </SlideBox>
      </Container>
    </Wrapper>
  );
};

//   return (
//     <Wrapper>
//       <Container ref={slideRef}>
//         <SlideBox>
//           <Profile1></Profile1>
//         </SlideBox>

//         <SlideBox>
//           <Profile2></Profile2>
//         </SlideBox>

//         <SlideBox>
//           <Profile3></Profile3>
//         </SlideBox>
//       </Container>
//     </Wrapper>
//   );
// };
export default Profile;
