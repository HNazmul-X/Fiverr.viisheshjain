import styled from "styled-components";

const DashboardContnetSC = styled.section`
    padding: 10px 0px 0px 70px;
`;

const Button = styled.button`
    background: ${(props) => props.background};
    border: ${(props) => props.border};
    font-size: ${(props) => props.fontSize};
    padding: ${(props) => props.padding};
    margin: ${(props) => props.margin};
    color: ${props => props.color};
`;

export { DashboardContnetSC, Button };
