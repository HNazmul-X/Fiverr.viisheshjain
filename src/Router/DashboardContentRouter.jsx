import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SuperChat from '../Pages/SuperChat/SuperChat';
import { DashboardContnetSC } from '../Styles/Styled-components/StyledComponets';

const DashboardContentRouter = () => {
    return (
        <DashboardContnetSC>
            <Switch>
                <Route exact path="/super-chat">
                    <SuperChat />
                </Route>
            </Switch>
        </DashboardContnetSC>
    );
};

export default DashboardContentRouter;