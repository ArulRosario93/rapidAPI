import { useEffect } from "react";
import "./FeaturedPlaylist.css"

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
    testingGotoAlbum: ( Album: MyObject, id: String) => void;
    data: object;
    album1: MyObject;
    album2: MyObject;
    album3: MyObject;
    album4: MyObject;
    album5: MyObject;
    album6: MyObject;
    album7: MyObject;
    title: string;
}

const FeaturedPlaylist = ({ testingGotoAlbum, data, title, album1, album2, album3, album4, album5, album6, album7 }:ButtonProps) => {

    const handleOnclick = (e: any) => {
        testingGotoAlbum(album1, "");
    }
    
    return(
        <div className="FeaturedPlaylist">
            <h3 className="FeaturedPlaylistHead">{title}</h3>
            <div className="scrollableContainer scrollable-container">
                <div className="scrollable-content">
                    <div className="row d-flex flex-nowrap overflow-x-scroll">

                        <div className="scrollable-item">
                            <div className="boxContainer" onClick={(e) => handleOnclick(e)}>
                                <img src={`${album1.bg}`} alt="coverimage"/>
                                <p className="boxContainerP">{album1.albumName}</p>
                            </div>
                        </div>  
                        
                        <div className="scrollable-item">
                            <div className="boxContainer" onClick={() => testingGotoAlbum(album2, "")}>
                                <img src={`${album2.bg}`} alt="coverimage"/>
                                <p className="boxContainerP">{album2.albumName}</p>
                            </div>
                        </div>
    
                        <div className="scrollable-item">
                            <div className="boxContainer" onClick={() => testingGotoAlbum(album3, "")}>
                                <img src={`${album3.bg}`} alt="coverimage"/>
                                <p className="boxContainerP">{album3.albumName}</p>
                            </div>
                        </div>
                        
                        <div className="scrollable-item">
                            <div className="boxContainer" onClick={() => testingGotoAlbum(album4, "")}>
                                <img src={`${album4.bg}`} alt="coverimage"/>
                                <p className="boxContainerP">{album4.albumName}</p>
                            </div>
                        </div>
                        
                        <div className="scrollable-item">
                            <div className="boxContainer" onClick={() => testingGotoAlbum(album5, "")}>
                                <img src={`${album5.bg}`} alt="coverimage"/>
                                <p className="boxContainerP">{album5.albumName}</p>
                            </div>
                        </div>
                        
                        <div className="scrollable-item">
                            <div className="boxContainer" onClick={() => testingGotoAlbum(album7, "")}>
                                <img src={`${album7.bg}`} alt="coverimage"/>
                                <p className="boxContainerP">{album7.albumName}</p>
                            </div>
                        </div>
                        
                        <div className="scrollable-item">
                            <div className="boxContainer" onClick={() => testingGotoAlbum(album6, "")}>
                                <img src={`${album6.bg}`} alt="coverimage"/>
                                <p className="boxContainerP">{album6.albumName}</p>
                            </div>
                        </div>
                        
                        
                    </div>
                </div>
            </div>
        </div>  
    )
}

export default FeaturedPlaylist;