
import { useState } from "react";
import "./AlbumPage.css";
import { AiFillHeart } from 'react-icons/ai';
import { AiOutlineHeart } from 'react-icons/ai';
import { IoIosArrowRoundBack } from 'react-icons/io';


interface ButtonProps {
    backFromAlbum: () => void;
    Link: String;
    avatar: String;
    songName: String;
    // setAlbumPage: (albumsongName:String, AlbumAvatar:String, AlbumLink:String, AlbumTitle:String) => void;
    title: String;
    id: String;
}

const AlbumPage = ({ backFromAlbum, Link, avatar, title, songName, id }: ButtonProps) => {


    const [like, setLike] = useState(false);

    if (Link) {
        console.log(Link);
    }else{

        

    }

    const liked = () => {
        setLike(!like)
    //    const arr = localStorage.getItem("liked");

    //    const arrayFound[] = arr;

        // localStorage.setItem("liked", arrayFound)
    }

    return(
        <div className="AlbumPage">
                <h1 className="AlbumPageHead">{title}</h1>
            <p className="AlbumPageP">{songName}</p>
                <div className="backbtn" onClick={() => backFromAlbum()}><IoIosArrowRoundBack /></div>
            <br />
            <div className="AlbumPageHeader">
                <img src={`${avatar}`} alt="coverImage"/>
            </div>

            <br />
            <br />

            <p className="likeITbtn" style={{color: like?'red':  "red"}} onClick={() => liked()}>{like?<AiFillHeart />: <AiOutlineHeart />}</p>
            {/* <p className="likeIT">Like</p> */}
            <br />
            {/* <br /> */}

            <div className="ListenonSpotify"><a href={`${Link}`} target="_blank"><p>Listen on Spotify</p></a></div>
        </div>
    )
}

export default AlbumPage;