import styled from "@emotion/styled";
import {Column, Row} from "@src/components/Flex";
import React from "react";
import SizedBox from "@components/SizedBox";
import {TOKENS_BY_SYMBOL} from "@src/constants";

interface IProps {
}

const Root = styled.div`
  display: flex;
  box-sizing: border-box;
  border: 1px solid #fff;
  border-top: 0;
  height: 50px;
  width: 100%;
`;

const MarketSelect = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  box-sizing: border-box;
  flex: 1;
  height: 100%;
`


const MarketStatistics = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  border-left: 1px solid #fff;
  flex: 4;
  box-sizing: border-box;
  width: 100%;
`


const MarketStatisticsBar: React.FC<IProps> = () => {
    return <Root>
        <MarketSelect>
            <Row alignItems="center">
                <img
                    style={{borderRadius: '50%', width: 24, height: 24}}
                    src={TOKENS_BY_SYMBOL.BTC.logo}
                    alt="btc"
                />
                <SizedBox width={8}/>
                <h4>BTC PERP</h4>
            </Row>
            <h4 style={{transform: 'rotate(90deg)'}}>{">"}</h4>
        </MarketSelect>
        <MarketStatistics>
            <Row alignItems="center">
                <Column>
                    <h4 style={{margin: 0}}>$ 25 000,00</h4>
                    <span style={{margin: 0, color: 'green'}}>+2.22 %</span>
                </Column>
                <SizedBox width={24}/>
                <Column>
                    <h5 style={{margin: 0}}>Market price</h5>
                    <h4 style={{margin: 0}}>$ 25 000,00</h4>
                </Column>
                <SizedBox width={24}/>
                <Column>
                    <h5 style={{margin: 0}}>Volume</h5>
                    <h4 style={{margin: 0}}>250,000k</h4>
                </Column>
            </Row>
            <button style={{minWidth: 'fit-content'}}>see all market details</button>
        </MarketStatistics>
    </Root>;
}
export default MarketStatisticsBar;