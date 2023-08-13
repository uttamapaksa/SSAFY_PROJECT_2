import { styled } from "styled-components";

export const MessegePageDiv = styled.div`
  width: 300px;
  height: 400px;
  border-color: #D2D2D2;
  border-radius: 15px;
  border-style: solid;
  border: 1px;
  /* border: solid 10px green; */
  background-color: white;
  position: fixed;
  right: 25px;
  bottom: 25px;
  z-index: 100;
  `;

export const MessegeTitle = styled.div`
  font-size: 14px;
  font-weight: bold;
  margin-top: 10px;
  margin-left: 10px;
  `;

export const ExitImg = styled.img`
  position: absolute;
  right: 10px;
  top: 9px;
  width: 20px;
  height: 20px;
  `;

export const MessegeBodyDiv = styled.div`
  margin: 0 auto;
  `;

export const MessegeList = styled.div`
  height: 340px;
  position: relative;
  top: -9px;
  overflow-y: auto;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: #535353;
    border-radius: 10px;
  }
  `;

export const MessageCardDiv = styled.div`
  /* border: solid 1px red; */
  width: 95%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  &:hover {
    background-color: #efefef;
  }
`;

export const MessageTitle = styled.div`
  font-size: 15px;
  margin: 3%;
`;

export const MessageChecked = styled.img`
  float: right;
  margin: 5px;
  width: 8px;
`;

export const MessageAdd = styled.img`
  position: absolute;
  right: 10px;
  bottom: 9px;
  width: 30px;
  height: 30px;
  &:hover{
    background-color: rgba(255, 255, 255, 0.5)
  }
`;
