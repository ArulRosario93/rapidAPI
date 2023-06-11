import "./App.css"
import { useEffect, useState } from "react"

import Home from './Components/Home/Home'
import Search from './Components/Search/Search'
import SideBar from "./Components/SideBar/SideBar"

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Favourite from "./Components/Favourite/Favourite"
import Playlist from "./Components/Playlist/Playlist"
import SongPage from "./Components/SongPage/SongPage"
import AlbumPage from "./Components/AlbumPage/AlbumPage"

import useAuth from "./useAuth"

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

function App() {
  const [home, setHome] = useState(true)
  const [search, setSearch] = useState(false)
  const [favourite, setFavourite] = useState(false)
  const [playlist, setPlaylist] = useState(false)

  const [songPage, setSongPage] = useState(false);
  const [albumPage, setAlbumPage] = useState(false);

  const [albumAvatar, setAlbumAvatar] = useState("");
  const [albumLink, setAlbumLink] = useState("");
  const [albumTitle, setalbumTitle] = useState("");
  const [albumsongName, setalbumsongName] = useState("");
  
  const [artistName, setArtistName] = useState("");
  const [artistId, setArtistId] = useState("");
  const [artistBg, setArtistBg] = useState("");
  const [songId, setSongId] = useState("");
  const [albumSongs, setalbumSongs] = useState<albumSongs>({

  
    data: 
    [
  {
  songID: '',
  songName: '',
},
  {
  songID: '',
  songName: '',
},
  {
  songID: '',
  songName: '',
},
  {
  songID: '',
  songName: '',
},
  {
  songID: '',
  songName: '',
},
  {
  songID: '',
  songName: '',
},
  {
  songID: '',
  songName: '',
},
  {
  songID: '',
  songName: '',
},
  {
  songID: '',
  songName: '',
},
]});


  const [inputSearch, setInputSearch] = useState("");

  const homeScreen = () => {
    setHome(true);
    setPlaylist(false)
    setFavourite(false)
    setSearch(false)
    setSongPage(false)
    setPlaylist(false)
  }

  const searchScreen = () => {
    setSearch(true);
    setHome(false)
    setFavourite(false)
    setPlaylist(false)
    setSongPage(false)
    setPlaylist(false)
  }

  const favouriteScreen = () => {
    setFavourite(true);
    setHome(false)
    setPlaylist(false)
    setSearch(false)
    setSongPage(false)
    setPlaylist(false)
  }
  const playlistScreen = () => {
    setPlaylist(true);
    setFavourite(false)
    setSearch(false)
    setHome(false)
    setSongPage(false)
  }

  const saveInputSearch = (value: String) => {
    setInputSearch(`${value}`);    
    console.log("value" + inputSearch)
  }

  const testingGotoSong = ( Album: MyObject, id: String ) => {

    setArtistBg(`${Album.bg}`)
    setalbumSongs({
      data: [
        {
          songID: `${Album.songs[0].songName}`,
          songName: `${Album.songs[0].songId}`,
        },
        {
          songID: `${Album.songs[1].songName}`,
          songName: `${Album.songs[1].songId}`,
        },
        {
          songID: `${Album.songs[2].songName}`,
          songName: `${Album.songs[2].songId}`,
        },
        {
          songID: `${Album.songs[3].songName}`,
          songName: `${Album.songs[3].songId}`,
        },
        {
          songID: `${Album.songs[4].songName}`,
          songName: `${Album.songs[4].songId}`,
        },
        {
          songID: `${Album.songs[5].songName}`,
          songName: `${Album.songs[5].songId}`,
        },
        {
          songID: `${Album.songs[6].songName}`,
          songName: `${Album.songs[6].songId}`,
        },
        {
          songID: `${Album.songs[7].songName}`,
          songName: `${Album.songs[7].songId}`,
        },
        {
          songID: `${Album.songs[8].songName}`,
          songName: `${Album.songs[8].songId}`,
        },
      ]
    });
    setArtistId(`${id}`)
    setArtistName(`${Album.ArtistName}`)
    setSongPage(true);
  }

  const testingGotoAlbum = ( albumsongName:String, AlbumAvatar:String, AlbumLink:String, AlbumTitle:String, id:String ) => {
    setalbumsongName(`${albumsongName}`);
    setAlbumAvatar(`${AlbumAvatar}`);
    setAlbumLink(`${AlbumLink}`);
    setalbumTitle(`${AlbumTitle}`);
    setAlbumPage(true); 
    setSongId(`${id}`);
  }

  const backFromSong = () => {
    setSongPage(false);
  }

  const backFromAlbum = () => {
    setAlbumPage(false);
  }

  

  const [isLogin, token] = useAuth();

  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      // Cancel the default behavior to show a custom prompt
      localStorage.setItem("dendritesearch", "");
      event.preventDefault();

      // Perform any necessary cleanup or save operations
      // before the user leaves the site

      // You can also show a custom prompt here
      const confirmationMessage = 'Are you sure you want to leave?';
      event.returnValue = confirmationMessage; // Some browsers require a return value

      return confirmationMessage;
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return (
    <>
    {
      isLogin? <div className='Main'>
      <div className=''>
        <div className=''>
          <SideBar homeScreen={homeScreen} searchScreen={searchScreen} favouriteScreen={favouriteScreen} playlistScreen={playlistScreen}/>
        </div>
        <div className=''>
        <div className='App'>
        {
          albumPage? <AlbumPage id={songId} avatar={albumAvatar} Link={albumLink} title={albumTitle} songName={albumsongName} backFromAlbum={backFromAlbum}/>: songPage? <SongPage ArtistBg={artistBg} testingGotoAlbum={testingGotoAlbum} songs={albumSongs} ArtistName={artistName} ArtistId={artistId} backFromSong={backFromSong}/>: home? <Home testingGototoAlbum={testingGotoSong} backFromAlbum={backFromAlbum} testingGoGotoAlbum={testingGotoAlbum}/>: search? <Search intSearch={inputSearch} saveInputSearch={saveInputSearch} testingGoGotoAlbum={testingGotoAlbum} testingGotoSong={testingGotoSong}/>: favourite? <Favourite />: playlist? <Playlist />: <div></div>
        }
        </div>
        </div>
      </div>
    </div>: <h1>Not LoggedIn Yet</h1>
    }
    </>
  )
}

export default App
