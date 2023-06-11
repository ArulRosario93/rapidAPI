import "./Playlist.css"

const Playlist:React.FC = () => {
    return(
        <div className="Playlist">
            <h2 className="PlaylistHead">Playlist</h2>
            <br />
            <br />
            <div className="addbtn">
                +
            </div>
            <div className="scrollable-item">
                <div className="boxContainer">
                    <img src="https://images.genius.com/071a819f088609ee9d24b2dba4546b23.1000x1000x1.jpg" alt="coverimage"/>
                    <p className="boxContainerP">Divide</p>
                </div>
            </div>
        </div>
    )
}

export default Playlist;