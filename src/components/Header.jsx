import React from "react";
import HighlightIcon from '@material-ui/icons/Highlight';

function Header() {
    return (
        <header>
            <h1>
                {/* https://material-ui.com/components/material-icons/ */}
                <HighlightIcon />
                Keeper
            </h1>
        </header>
    );
}

export default Header;