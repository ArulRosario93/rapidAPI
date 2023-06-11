import { useEffect } from "react";
import SongItem from "../SongItem/SongItem"

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
]}

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
    ArtistBg: String
    ArtistName: String
    ArtistId: String
    value: Array<{ attributes: { name: string }; id: string }>,
    testingGotoAlbum: (albumSongs:String, AlbumAvatar:String, AlbumLink:String, AlbumTitle:String, id:String) => void,
    songs: albumSongs
}

const SongRender = ({ ArtistId, value, songs, ArtistBg, testingGotoAlbum}: ButtonProps) => {

    useEffect(() => {
        console.log("viewing");
    }, [value, songs])

    return(
        ArtistId != ""? true ? value[0].id != "" ? value.map((item, i) => {
        return(
            <div>
                <SongItem testingGotoAlbum={testingGotoAlbum} songName={`${item.attributes.name != ""? item.attributes.name: "Not YEt"}`}  songID={item.id != ""? item.id: "not yet"} ArtistBg={`${i+1}`} />
            </div>
        )
    }) :<div></div>: <div></div> : songs.data[0].songID != ""? songs.data.map((item, i) => {
        return(
            <div>
                <SongItem testingGotoAlbum={testingGotoAlbum} songName={`${item.songID}`} songID={"item"} ArtistBg={`${i+1}`}/>
            </div>
        )
    }) : <div></div>
                    
    )
}

export default SongRender;