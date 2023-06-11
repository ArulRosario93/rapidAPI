import "./Greeting.css"

interface ButtonProps {
    testingGotoAlbum: ( albumsongName:String, AlbumAvatar:String, AlbumLink:String, AlbumPage:String, id:String ) => void;
    backFromAlbum: () => void;
}

const Greetings= ({ testingGotoAlbum, backFromAlbum }:ButtonProps) => {
    return(
        <>
            <div className="Greetings">
                <h2 className="Head">Good Morning!</h2>
                <div className="flexGreetingsDes" onClick={() => testingGotoAlbum( "String"," AlbumAvatar:String", "", "AlbumPage:String", "")}>
                    {/* <div> */}
                        <div className="itemOne">
                            <div className="itemOneDes"><p>Roses Are Red, Sky is Blue, All I’m Thinking Is You.</p></div>
                            <p className="fontweight">Listen To Subtract</p>
                        </div>
                        {/* <br /> */}
                        <div className="itemTwo">
                            <img src="https://upload.wikimedia.org/wikipedia/en/e/e4/Ed_Sheeran_-_Subtract.png" alt="Cover"/>
                        </div>
                    {/* </div> */}
                </div>
            </div>
        </>
    )
}

export default Greetings;