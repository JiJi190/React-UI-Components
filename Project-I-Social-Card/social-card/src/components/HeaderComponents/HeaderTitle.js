import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent';

function HeaderTitle() {
    return (
        <div className="head">
            <div className="head-title">
                <h2>Lambda School</h2>
                <a>@LambdaSchool</a>
                <p>26 Jan</p>
            </div>
            <div className="head-content">
                <HeaderContent />
            </div>
        </div>
    )
}

export default HeaderTitle;