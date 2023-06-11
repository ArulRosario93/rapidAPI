import { MouseEvent } from "react"
import "./SearchItems.css"
import { type } from "os";

interface MyObject {
    bg: String,
    albumName: String,
    ArtistName: String,
    songs: [
        {
            songId: String,
            songName: String,
        },
        {
            songId: String,
            songName: String,
        },
        {
            songId: String,
            songName: String,
        },
        {
            songId: String,
            songName: String,
        },
        {
            songId: String,
            songName: String,
        },
        {
            songId: String,
            songName: String,
        },
        {
            songId: String,
            songName: String,
        },
        {
            songId: String,
            songName: String,
        },
        {
            songId: String,
            songName: String,
        },
    ]
  }

interface ButtonProps {
    testingGotoSong: ( Album: MyObject, id: String ) => void;
    testingGoGotoAlbum: ( albumsongName: String, AlbumAvatar: String, AlbumLink: String, AlbumTitle: String, id:String ) => void;
    type: string;
    title: string;
    Link: string;
    bg: string;
    artistName: string;
    album: MyObject;
    id: string;
}

const SearchItem = ({ testingGotoSong, title, type, Link, bg, artistName, album, id, testingGoGotoAlbum }:ButtonProps) => {

    const handleClick = (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>, namee: String) => {

        if(Link != ""){
            testingGoGotoAlbum(artistName, bg, Link, title, "")
        }else{
            testingGotoSong(album, id)
        }
    }

    return(
        <div className="SearchItem" onClick={(e) => handleClick(e, "name")}>
            <div className="FlexItem">
                <img src={bg} alt="coverImage"/>
                <p>{title}</p>    
            </div>
            <p>{type}</p>
            <p>Something</p>
        </div>
    )
}

export default SearchItem