
import { useEffect, useState } from "react";
import "./SongPage.css"

import { connect, useDispatch } from 'react-redux';
import axios from "axios";
import { AiFillHeart } from 'react-icons/ai';
import { AiOutlineHeart } from 'react-icons/ai';
import { IoIosArrowRoundBack } from 'react-icons/io';

import SongRender from "./SongRender/SongRender";

interface ReduxProps {
    changeSong(songs:foundSongs): any;
}

interface foundSongs {
    data: [
    {
        attributes: {
            name: String,
        },
        id: String,
    },
    {
        attributes: {
            name: String,
        },
        id: String,
    },
    {
        attributes: {
            name: String,
        },
        id: String,
    },
    {
        attributes: {
            name: String,
        },
        id: String,
    },
    {
        attributes: {
            name: String,
        },
        id: String,
    },
    {
        attributes: {
            name: String,
        },
        id: String,
    },
    {
        attributes: {
            name: String,
        },
        id: String,
    },
    {
        attributes: {
            name: String,
        },
        id: String,
    },
    {
        attributes: {
            name: String,
        },
        id: String,
    },
]
}

interface albumSongs {
    data:  [
        {
        songID: String,
        songName: String,
      },
        {
        songID: String,
        songName: String,
      },
        {
        songID: String,
        songName: String,
      },
        {
        songID: String,
        songName: String,
      },
        {
        songID: String,
        songName: String,
      },
        {
        songID: String,
        songName: String,
      },
        {
        songID: String,
        songName: String,
      },
        {
        songID: String,
        songName: String,
      },
        {
        songID: String,
        songName: String,
      },
]
}

interface ButtonProps {
    backFromSong: () => void;
    ArtistBg: String;
    ArtistName: String;
    ArtistId: String;
    testingGotoAlbum: (albumsongName:String, AlbumAvatar:String, AlbumLink:String, AlbumTitle:String, id:String) => void;
    songs: albumSongs;
}

var albumName: Array<{ attributes: {albumName: String, artistName: String} }> = [
    {
        attributes:{
            albumName: "",
            artistName: "",
        }
    }
]

// var format = Object<{ songs: {} }>

var value: Array<{ attributes: { name: string }; id: string }> = [
    {
        attributes: {
            name: '',
        },
        id: "",
    },
    {
        attributes: {
            name: '',
        },
        id: "",
    },
    {
        attributes: {
            name: '',
        },
        id: "",
    },
    {
        attributes: {
            name: '',
        },
        id: "",
    },
    {
        attributes: {
            name: '',
        },
        id: "",
    },
    {
        attributes: {
            name: 'uo',
        },
        id: "uo",
    },
    {
        attributes: {
            name: 'uo',
        },
        id: "uo",
    },
    {
        attributes: {
            name: '',
        },
        id: "",
    },
    {
        attributes: {
            name: '',
        },
        id: "",
    },
];

const SongPage = ({ backFromSong, ArtistBg, ArtistName, ArtistId, songs, testingGotoAlbum }:ButtonProps, { changeSong }: ReduxProps) => {

    const [SongAsk, setSongAsk] = useState(false)

    const [like, setLIke] = useState(false);

    const handleCallIT = async () => {

        const options = {
            method: 'GET',
            url: 'https://shazam.p.rapidapi.com/artists/get-top-songs',
            params: {
                id: ArtistId,
                l: 'en-US',
                limit: '8',
            },
            headers: {
                'X-RapidAPI-Key': '79d46c63damshe4cf4939cdde596p19407djsn1b52cf6d5584',
                'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options);
            const valueGG = response.data;
            
            value = valueGG.data;

            albumName = valueGG.data;

            console.log(value);

            console.log("SEEEEE");
            setSongAsk(true)
        } catch (error) {
            console.error(error);
        }
    };
                
    const liked = () => {
        // localStorage.setItem("", "")
        setLIke(!like);
    }

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

        const arry = [
            {
                id: String,
            }
        ]

        // const keyyy = localStorage.setItem("likedOnes", arry);

        // const liked = localStorage.getItem("liked")

        // if (condition) {
            
        // }

        if (ArtistId.length > 1) {

            handleCallIT();

        }  else{
            console.log(songs);
            console.log(songs.data[0]);
        }
    }, [value])

    return(
        <div className="SongPage">
            <div className="SongPageHeader" style={{background: 'black'}}>
                <img src={`${ArtistBg}`} alt="coverImage"/>
                <div className="SongPageDes">
                    <div>   
                        <h2 className="SongPageDesp">{ArtistBg.length > 1?`${albumName[0].attributes.albumName.length > 1? albumName[0].attributes.albumName: ArtistName}`: true}</h2>
                        {/* <h2>{`${albumName[0].attributes.artistName}`}</h2> */}
                    </div>
                    <div style={{color: 'red', fontSize: '35px'}} onClick={() => liked()}>
                            {like?<AiFillHeart />: <AiOutlineHeart />}                    </div>
                </div>
            </div>

            <div className="SongPageHeaderAb">
                <div className="SongPageHeaderAbFlex">
                    <div className="Backbtn" onClick={() => backFromSong()}><IoIosArrowRoundBack /></div>
                    <div style={{fontSize: 'x-large', fontWeight: 'lighter'}} className="nameOFArtist">{`${albumName[0].attributes.artistName.length > 1? albumName[0].attributes.artistName: albumName[0].attributes.artistName}`}</div>
                    {/* <div></div> */}
                </div>
            </div>

            <div className="bgForSong" style={{backgroundImage: `url(${ArtistBg})`, backgroundRepeat: 'repeat', objectFit: 'cover'}}>
                <div className="blurbg">
                    <div className="playShuffle">
                        <div>Play</div>
                        <div>Shuffle</div>
                    </div>

                        <SongRender testingGotoAlbum={testingGotoAlbum} ArtistId={ArtistId} ArtistName={ArtistName} backFromSong={backFromSong} value={value} songs={songs} ArtistBg={ArtistBg}/>

                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state: foundSongs): ReduxProps => {
    return {
        changeSong(){}
      // Map more Redux state to props if needed
    };
};

// const mapDispatchToProps = {
//    yourReduxAction: YourActionType,
//    // Add more Redux actions if needed
// };

export default connect(mapStateToProps)(SongPage);
