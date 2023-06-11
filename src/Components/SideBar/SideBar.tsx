import "./SideBar.css"

interface ButtonProps {
    homeScreen: () => void;
    searchScreen: () => void;
    favouriteScreen: () => void;
    playlistScreen: () => void;
}

const SideBar = ({ homeScreen, searchScreen, favouriteScreen, playlistScreen }: ButtonProps) => {

    const handelHome = () => {
        homeScreen();
    }
    const handelSearch = () => {
        searchScreen();
    }

    const handleFavourite = () => {
        favouriteScreen();
    }

    const handlePlaylist = () => {
        playlistScreen();
    }

    return(
        <div className="sidebar text-center">
            <div className="emptyDiv"></div>
            <p className='sideBarItem' onClick={() => handelHome()}>Home</p>
            <p className="sideBarItem" onClick={() => handelSearch()}>Search</p>
            <p className="sideBarItem" onClick={() => handleFavourite()}>Favourite</p>
            <p className="sideBarItem" onClick={() => handlePlaylist()}>Playlist</p>
        </div>
    )
}

export default SideBar;