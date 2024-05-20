import React from "react";
import ArtstistCover from "../../forArtists/home/ArtstistCover";
import Inscr from "../inscr/Inscr";
import Myalbums from "../../forArtists/home/Myalbums";
import {useParams} from "react-router-dom";
import {getNameFromToken} from "../../../axios_helper";

function CertainArtist() {
    const { name } = useParams();
    return (
        <div>
            <ArtstistCover name={name}/>
            <Inscr color={"transparent"} text={`Albums`} type={'Simple header'}/>
            <Myalbums name={name}/>
        </div>
    )
}

export default CertainArtist;