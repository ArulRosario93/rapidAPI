import { ChangeEvent, useEffect, useState } from "react";

import "./Search.css"
import SearchItem from "./SearchItems/SearchItems";
import axios from "axios";

// import dotenv from 'dotenv';

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
    testingGoGotoAlbum: (albumsongName: String, AlbumAvatar: String, AlbumLink: String, AlbumTitle: String, id:String ) => void;
    saveInputSearch: (name:String) => void;
    intSearch: String;
}

const Search = ({ testingGotoSong, saveInputSearch, intSearch, testingGoGotoAlbum }:ButtonProps) => {

    const [input, setInput] = useState("")
    
    const [localInput, setlocalInput] = useState("")
    
    const [result, setResult] = useState({
        artists: {
            hits: [
                {
                    artist: {
                        adamid: "183313439",
                        avatar: "https://is4-ssl.mzstatic.com/image/thumb/Features116/v4/24/2a/47/242a479e-5eac-fa17-5db1-5937b226ac04/mza_16354820982611288829.png/800x800bb.jpg",
                        name: "",
                    }
                },

                {
                    artist: {
                        adamid: "183313439",
                        avatar: "https://is4-ssl.mzstatic.com/image/thumb/Features116/v4/24/2a/47/242a479e-5eac-fa17-5db1-5937b226ac04/mza_16354820982611288829.png/800x800bb.jpg",
                        name: "",
                    }
                },
                {
                    artist: {
                        adamid: "183313439",
                        avatar: "https://is4-ssl.mzstatic.com/image/thumb/Features116/v4/24/2a/47/242a479e-5eac-fa17-5db1-5937b226ac04/mza_16354820982611288829.png/800x800bb.jpg",
                        name: "",
                    }
                },
                {
                    artist: {
                        adamid: "183313439",
                        avatar: "https://is4-ssl.mzstatic.com/image/thumb/Features116/v4/24/2a/47/242a479e-5eac-fa17-5db1-5937b226ac04/mza_16354820982611288829.png/800x800bb.jpg",
                        name: "",
                    }
                },
                {
                    artist: {
                        adamid: "183313439",
                        avatar: "https://is4-ssl.mzstatic.com/image/thumb/Features116/v4/24/2a/47/242a479e-5eac-fa17-5db1-5937b226ac04/mza_16354820982611288829.png/800x800bb.jpg",
                        name: "",
                    }
                }
            ]
        },
        tracks: {
            hits: [
                {
                    track: {
                        artists: [
                            {
                                adamid: ''
                            }
                        ],
                        hub: {
                            providers: [
                                {
                                    actions:
                                        [
                                            {
                                                uri: ''
                                            }
                                        ]
                                }
                            ]
                        },
                        images: {
                            background: ""
                        },
                        subtitle: "",
                        title: "",
                    }
                },
                {
                    track: {
                        artists: [
                            {
                                adamid: ''
                            }
                        ],
                        hub: {
                            providers: [
                                {
                                    actions:
                                        [
                                            {
                                                uri: ''
                                            }
                                        ]
                                }
                            ]
                        },
                        images: {
                            background: ""
                        },
                        subtitle: "",
                        title: "Ed Sheeran",
                    }
                },
                {
                    track: {
                        artists: [
                            {
                                adamid: ''
                            }
                        ],
                        hub: {
                            providers: [
                                {
                                    actions:
                                        [
                                            {
                                                uri: ''
                                            }
                                        ]
                                }
                            ]
                        },
                        images: {
                            background: ""
                        },
                        subtitle: "",
                        title: "Ed Sheeran",
                    }
                },
                {
                    track: {
                        artists: [
                            {
                                adamid: ''
                            }
                        ],
                        hub: {
                            providers: [
                                {
                                    actions:
                                        [
                                            {
                                                uri: ''
                                            }
                                        ]
                                }
                            ]
                        },
                        images: {
                            background: ""
                        },
                        subtitle: "",
                        title: "Ed Sheeran",
                    }
                },
                {
                    track: {
                        artists: [
                            {
                                adamid: ''
                            }
                        ],
                        hub: {
                            providers: [
                                {
                                    actions:
                                        [
                                            {
                                                uri: ''
                                            }
                                        ]
                                }
                            ]
                        },
                        images: {
                            background: ""
                        },
                        subtitle: "",
                        title: "Ed Sheeran",
                    }
                }
            ]
        }
    })

    const [dummyData , setDummyData] = useState<MyObject>({
        bg: "",
        albumName: "",
        ArtistName: "",
        songs: [
            {
                songId: "",
                songName: "",
            },
            {
                songId: "",
                songName: "",
            },
            {
                songId: "",
                songName: "",
            },
            {
                songId: "",
                songName: "",
            },
            {
                songId: "",
                songName: "",
            },
            {
                songId: "",
                songName: "",
            },
            {
                songId: "",
                songName: "",
            },
            {
                songId: "",
                songName: "",
            },
            {
                songId: "",
                songName: "",
            },
        ]
      })

    const [data1, setData1] = useState({
        id: '',
        name: '',
        avatar: '',
        artistName: "",
    })
    const [data2, setData2] = useState({
        id: '',
        name: '',
        avatar: '',
        spotifyLink: '',
        artistName: "",
    })
    const [data3, setData3] = useState({
        id: '',
        name: '',
        avatar: '',
        artistName: "",
    })
    const [data4, setData4] = useState({
        id: '',
        name: '',
        avatar: '',
        spotifyLink: '',
        artistName: "",
    })
    const [data5, setData5] = useState({
        id: '',
        name: '',
        avatar: '',
        spotifyLink: '',
        artistName: "",
    })
    const [data6, setData6] = useState({
        id: '',
        name: '',
        avatar: '',
        spotifyLink: '',
        artistName: "",
    })
    const [data7, setData7] = useState({
        id: '',
        name: '',
        avatar: '',
        spotifyLink: '',
        artistName: "",
    })

    
    // var data1 = {
    //     id: '',
    //     name: '',
    //     avatar: '',
    // }
    // var data2 = {
    //     name: '',
    //     avatar: '',
    //     id: ''
    // }
    // var data3 = {
    //     name: '',
    //     avatar: '',
    //     id: ''
    // }

    useEffect(() => {

        if(input == ''){
            const locoString = localStorage.getItem("dendritesearch");
            setInput(`${locoString}`);
        }

        if(input != ""){
           const localInputFound = localStorage.setItem("dendritesearch", input);

           setlocalInput(`${localInputFound}`);
        }

        if (result) {
            setData1({
                name: result.artists.hits[0].artist.name,
                id: result.artists.hits[0].artist.adamid,
                avatar: result.artists.hits[0].artist.avatar,
                artistName: result.artists.hits[0].artist.name
            })
            
            setData2({
                name: result.tracks.hits[0].track.title,
                id: result.tracks.hits[0].track.artists[0].adamid,
                avatar: result.tracks.hits[0].track.images.background,
                spotifyLink: result.tracks.hits[0].track.hub.providers[0].actions[0].uri,
                artistName: result.tracks.hits[0].track.subtitle,
            })

            setData3({
                name: result.artists.hits[1].artist.name,
                id: result.artists.hits[1].artist.adamid,
                avatar: result.artists.hits[1].artist.avatar,
                artistName: result.artists.hits[0].artist.name,
            })
            setData4({
                name: result.tracks.hits[1].track.title,
                id: result.tracks.hits[1].track.artists[0].adamid,
                avatar: result.tracks.hits[1].track.images.background,
                spotifyLink: result.tracks.hits[1].track.hub.providers[0].actions[0].uri,
                artistName: result.tracks.hits[1].track.subtitle,
            })
            setData5({
                name: result.tracks.hits[2].track.title,
                id: result.tracks.hits[2].track.artists[0].adamid,
                avatar: result.tracks.hits[2].track.images.background,
                spotifyLink: result.tracks.hits[2].track.hub.providers[0].actions[0].uri,
                artistName: result.tracks.hits[2].track.subtitle,
            })
            setData6({
                name: result.tracks.hits[3].track.title,
                id: result.tracks.hits[3].track.artists[0].adamid,
                avatar: result.tracks.hits[3].track.images.background,
                spotifyLink: result.tracks.hits[3].track.hub.providers[0].actions[0].uri,
                artistName: result.tracks.hits[3].track.subtitle,
            })
            setData7({
                name: result.tracks.hits[4].track.title,
                id: result.tracks.hits[4].track.artists[0].adamid,
                avatar: result.tracks.hits[4].track.images.background,
                spotifyLink: result.tracks.hits[4].track.hub.providers[0].actions[0].uri,
                artistName: result.tracks.hits[4].track.subtitle,
            })   
        }
    }, [result])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        var value = e.currentTarget.value;

        setInput(value);
        saveInputSearch(value);
    }

    const BrokeHeart = async () => {
        const options = {
            method: 'GET',
            url: 'https://shazam.p.rapidapi.com/search',
            params: {
                term: input,
                l: 'en-US',
                offset: '0',
                limit: '5'
            },
            headers: {
                'X-RapidAPI-Key': '79d46c63damshe4cf4939cdde596p19407djsn1b52cf6d5584',
            'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
            }
        };

      try {
          const response = await axios.request(options);
        //   setBrokenHeart(response.data);
          const Result = response.data;

          setResult(Result);
          console.log(Result);
          console.log(result);
        } catch (error) {
          console.log("maybe" + error);
        }             
    }

    return(
        <div className="Search">
            <h2 className="SearchHead">Search</h2>
            <div className="SearchFlex">
                <input className="SearchInput" placeholder="Search song, album, artist, playlist" value={input} onChange={handleChange}/>
                <div onClick={() => BrokeHeart()} className="Searchbtn">Search</div>
            </div>
            
            {
                data1.name == ""? 
                <></>:
                    <div>
                        <SearchItem album={dummyData} testingGotoSong={testingGotoSong} testingGoGotoAlbum={testingGoGotoAlbum} artistName={data1.artistName} title={data1.name} id={data1.id} bg={data1.avatar} type={"Artist"} Link="" />
                        <SearchItem album={dummyData} testingGotoSong={testingGotoSong} testingGoGotoAlbum={testingGoGotoAlbum} artistName={data2.artistName} title={data2.name} id={data1.id} bg={data2.avatar} type={"Song"} Link={data2.spotifyLink} />
                        <SearchItem album={dummyData} testingGotoSong={testingGotoSong} testingGoGotoAlbum={testingGoGotoAlbum} artistName={data3.artistName} title={data3.name} id={data1.id} bg={data3.avatar} type={"Artist"} Link="" />
                        <SearchItem album={dummyData} testingGotoSong={testingGotoSong} testingGoGotoAlbum={testingGoGotoAlbum} artistName={data4.artistName} title={data4.name} id={data1.id} bg={data4.avatar} type={"Song"} Link={data4.spotifyLink} />
                        <SearchItem album={dummyData} testingGotoSong={testingGotoSong} testingGoGotoAlbum={testingGoGotoAlbum} artistName={data5.artistName} title={data5.name} id={data1.id} bg={data5.avatar} type={"Song"} Link={data5.spotifyLink} />
                        <SearchItem album={dummyData} testingGotoSong={testingGotoSong} testingGoGotoAlbum={testingGoGotoAlbum} artistName={data6.artistName} title={data6.name} id={data1.id} bg={data6.avatar} type={"Song"} Link={data5.spotifyLink} />
                        <SearchItem album={dummyData} testingGotoSong={testingGotoSong} testingGoGotoAlbum={testingGoGotoAlbum} artistName={data7.artistName} title={data7.name} id={data1.id} bg={data7.avatar} type={"Song"} Link={data5.spotifyLink} />
                    </div>
            }

            {/* <SearchItem testingGotoSong={testingGotoSong} name="Ed Sheeran"/>
            <SearchItem testingGotoSong={testingGotoSong} name="Edward Donald"/>
            <SearchItem testingGotoSong={testingGotoSong} name="Sheerios"/> */}
        </div>
    )
}

export default Search;