import React from "react";
import styled from "styled-components";

const CategoryCircle = styled.div`
  background-color: white;
  height: 5vw;
  width: 5vw;
  display: inline-block;
   &:not(:last-child) {
    margin-right: 1%;
  }
  border-radius: 100%;
  font-size: 1vw;
`

const CategoryImage = styled.img`
  height: 100%;
  width: 100%;
`

const Category = ({text, image}) => {

    const onClick = () => {
        window.location.replace(`/search/${text}?class=field`);
    }

    return (
        <CategoryCircle>
            <CategoryImage src={image} alt={text} onClick={onClick}/>
        </CategoryCircle>
    );
}

// 카테고리 한개
// 나중에 이미지 주소 넣는 부분 구현하기

export default Category;