
import "./SongItem.css"

interface ButtonProps {
    ArtistBg: String;
    songName: String;
    songID: String;
    testingGotoAlbum: (albumSongs:String, AlbumAvatar:String, AlbumLink:String, AlbumTitle:String, id:String) => void,
}

const SongItem =  ({ songName, ArtistBg, songID, testingGotoAlbum }: ButtonProps) => {
    return(
        <div className="SongItem" onClick={(e) => {testingGotoAlbum(songName, ArtistBg, "", "", songID)}}>
            <div className="SongItemDes">
                <div className="SongItemDesContain">
                    <p>{ArtistBg}</p>
                    <p className="songNAME">{songName}</p>
                </div>
                <p></p>
            </div>
        </div>
    )
}

export default SongItem;