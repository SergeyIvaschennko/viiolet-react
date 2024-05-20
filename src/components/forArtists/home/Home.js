import Inscr from "../../home/inscr/Inscr";
import React from "react";
import Myalbums from "./Myalbums";
import ArtstistCover from "./ArtstistCover";
import {getNameFromToken} from "../../../axios_helper";

function HomeForArtist() {
    const name = getNameFromToken();
    return (
        <div>
            <ArtstistCover name={name}/>
            <Inscr color={"transparent"} text={`Your albums`} type={'Simple header'}/>
            <Myalbums name={name}/>
        </div>
    )
}

export default HomeForArtist;