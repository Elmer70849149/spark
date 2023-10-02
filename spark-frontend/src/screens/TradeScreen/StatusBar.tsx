import styled from "@emotion/styled";
import React from "react";
import SizedBox from "@components/SizedBox";

interface IProps {}

const Root = styled.div`
  display: flex;
  width: 100%;
  height: 24px;
  box-sizing: border-box;
  border: 1px solid white;
  padding: 0 16px;
`;

const StatusBar: React.FC<IProps> = () => {
  return <Root>
    <div>🟢 Stable Connection</div>
    <SizedBox width={24}/>
    <div>🟢 Response Time Name holder (xxxms)</div>
    <SizedBox width={24}/>
    <div>XX,XXX TPS</div>
    <SizedBox width={24}/>
    <div>Average Gas Prices: SPOT: X,XXXX€ PERP: X,XXXX€</div>
  </Root>;
}
export default StatusBar;