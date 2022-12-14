import React from 'react';
import {Link} from "@remix-run/react";

const Home = () => (
    <div>
        <h1>Welcome to WePost website</h1>
         <p>To see the post please click <Link to={'/posts'}><b><i><u>here</u></i></b></Link></p>
    </div>
);

export default Home;