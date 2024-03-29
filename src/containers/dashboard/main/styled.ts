import styled from 'styled-components';

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 48px;
`;

export const DashboardTitle = styled.h1`
  width: 100%;
  margin-top: 0;
  text-align: center;
`;

export const DashboardContentTitleWrap = styled.div`
  display: grid;
  grid-template-columns: 0.15fr 0.3fr 0.4fr 0.3fr 0.7fr 0.4fr 0.4fr 0.4fr 0.4fr;
  padding: 4px 30px;
  align-items: center;
  border-radius: 6px 6px 0 0;
  background-color: #6a6a6a;
`;

export const DashboardContentItemWrap = styled(DashboardContentTitleWrap)`
  margin: 20px 0;
  padding-bottom: 10px;
  border-bottom: 1px solid white;
  background-color: transparent;
`;

export const DashboardContentTitle = styled.h2`
  margin: 0;
  padding: 0;
  margin-right: 10px;
  display: flex;
  height: 20px;
  overflow: scroll;
  font-size: 18px;
`;

export const DashboardContentRole = styled.select`
  margin: 0;
  padding: 0;
  appearance: none;
  border: none;
  font-size: 18px;
  background-color: transparent;
  color: var(--color-white);
  option {
    font-size: 16px;
    color: var(--color-white) !important;
  }
`;
