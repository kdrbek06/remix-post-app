import React from 'react';

import {Outlet} from "@remix-run/react";

const Posts = () => (
    <div className={'post-parent'}>
        <h2>Parent Post route</h2>
        <Outlet />
    </div>
);

export default Posts;