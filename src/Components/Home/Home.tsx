import { useEffect, useState } from "react";
import FeaturedPlaylist from "./FeaturedPlaylist/FeaturedPlaylist"
import Greetings from "./Greetings/Greetings"
import axios from 'axios';

import "./Home.css"

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
    testingGototoAlbum: ( Album: MyObject, id: String ) => void;
    testingGoGotoAlbum:(albumsongName:String, AlbumAvatar:String, AlbumLink:String, AlbumPage:String, id: String) => void;
    backFromAlbum:() => void;
}

const Home = ({ testingGototoAlbum, testingGoGotoAlbum, backFromAlbum }:ButtonProps) => {

    const [hopelesslyInLoveobg, setHopelesslyInLoveObg] = useState({});
    const [BrokenHeart, setBrokenHeart] = useState({});

    const [loveAlbum1, setloveAlbum1] = useState<MyObject>({
        bg: "",
        albumName: "",
        ArtistName: "",
        songs: [
            {
                songId: '',
                songName: '',
            },
            {
                songId: '',
                songName: '',
            },
            {
                songId: '',
                songName: '',
            },
            {
                songId: '',
                songName: '',
            },
            {
                songId: '',
                songName: '',
            },
            {
                songId: '',
                songName: '',
            },
            {
                songId: '',
                songName: '',
            },
            {
                songId: '',
                songName: '',
            },
            {
                songId: '',
                songName: '',
            },
        ]
    });
;

    const [loveAlbum2, setloveAlbum2] = useState<MyObject>({
        bg: '',
        albumName: '',
        ArtistName: '',
        songs: [
            {
                songId: '',
                songName: '',
            },
            {
                songId: '',
                songName: '',
            },
            {
                songId: '',
                songName: '',
            },
            {
                songId: '',
                songName: '',
            },
            {
                songId: '',
                songName: '',
            },
            {
                songId: '',
                songName: '',
            },
            {
                songId: '',
                songName: '',
            },
            {
                songId: '',
                songName: '',
            },
            {
                songId: '',
                songName: '',
            },
        ]
    });
    const [loveAlbum3, setloveAlbum3] = useState<MyObject>({
        bg: '',
        albumName: '',
        ArtistName: '',
        songs: [
            {
                songId: '',
                songName: '',
            },
            {
                songId: '',
                songName: '',
            },
            {
                songId: '',
                songName: '',
            },
            {
                songId: '',
                songName: '',
            },
            {
                songId: '',
                songName: '',
            },
            {
                songId: '',
                songName: '',
            },
            {
                songId: '',
                songName: '',
            },
            {
                songId: '',
                songName: '',
            },
            {
                songId: '',
                songName: '',
            },
        ]
    });
    const [loveAlbum4, setloveAlbum4] = useState<MyObject>({
        bg: '',
        albumName: '',
        ArtistName: '',
        songs: [
            {
                songId: '',
                songName: '',
            },
            {
                songId: '',
                songName: '',
            },
            {
                songId: '',
                songName: '',
            },
            {
                songId: '',
                songName: '',
            },
            {
                songId: '',
                songName: '',
            },
            {
                songId: '',
                songName: '',
            },
            {
                songId: '',
                songName: '',
            },
            {
                songId: '',
                songName: '',
            },
            {
                songId: '',
                songName: '',
            },
        ]
    });
    const [loveAlbum5, setloveAlbum5] = useState<MyObject>({
        bg: '',
        albumName: '',
        ArtistName: '',
        songs: [
            {
                songId: '',
                songName: '',
            },
            {
                songId: '',
                songName: '',
            },
            {
                songId: '',
                songName: '',
            },
            {
                songId: '',
                songName: '',
            },
            {
                songId: '',
                songName: '',
            },
            {
                songId: '',
                songName: '',
            },
            {
                songId: '',
                songName: '',
            },
            {
                songId: '',
                songName: '',
            },
            {
                songId: '',
                songName: '',
            },
        ]
    });
    const [loveAlbum6, setloveAlbum6] = useState<MyObject>({
        bg: '',
        albumName: '',
        ArtistName: '',
        songs: [
            {
                songId: '',
                songName: '',
            },
            {
                songId: '',
                songName: '',
            },
            {
                songId: '',
                songName: '',
            },
            {
                songId: '',
                songName: '',
            },
            {
                songId: '',
                songName: '',
            },
            {
                songId: '',
                songName: '',
            },
            {
                songId: '',
                songName: '',
            },
            {
                songId: '',
                songName: '',
            },
            {
                songId: '',
                songName: '',
            },
        ]
    });
    const [loveAlbum7, setloveAlbum7] = useState<MyObject>({
        bg: '',
        albumName: '',
        ArtistName: '',
        songs: [
            {
                songId: '',
                songName: '',
            },
            {
                songId: '',
                songName: '',
            },
            {
                songId: '',
                songName: '',
            },
            {
                songId: '',
                songName: '',
            },
            {
                songId: '',
                songName: '',
            },
            {
                songId: '',
                songName: '',
            },
            {
                songId: '',
                songName: '',
            },
            {
                songId: '',
                songName: '',
            },
            {
                songId: '',
                songName: '',
            },
        ]
    });

    const [albumFound1, setAlbumFound1] = useState({
        data: [
            {
                id: '',
                attributes: {
                    artistName: "",
                    name: '',
                },
                relationships: {
                    tracks: {
                        data: [
                            {
                                attributes: {
                                    name: ''
                                },
                                id: '',
                            },
                            {
                                id: '',
                                attributes: {
                                    name: ''
                                }
                            },
                            {
                                id: '',
                                attributes: {
                                    name: ''
                                }
                            },
                            {
                                id: '',
                                attributes: {
                                    name: ''
                                }
                            },
                            {
                                id: '',
                                attributes: {
                                    name: ''
                                }
                            },
                            {
                                id: '',
                                attributes: {
                                    name: ''
                                }
                            },
                            {
                                id: '',
                                attributes: {
                                    name: ''
                                }
                            },
                            {
                                id: '',
                                attributes: {
                                    name: ''
                                }
                            },
                            {
                                id: '',
                                attributes: {
                                    name: ''
                                }
                            },
                        ]
                    }
                }
            }
        ]
    })

    const [albumFound2, setAlbumFound2] = useState({
        data: [
            {
                id: '',
                attributes: {
                    name: '',
                    artistName: "",
                },
                relationships: {
                    tracks: {
                        data: [
                            {
                                id: '',
                                attributes: {
                                    name: ''
                                }
                            },
                            {
                                id: '',
                                attributes: {
                                    name: ''
                                }
                            },
                            {
                                id: '',
                                attributes: {
                                    name: ''
                                }
                            },
                            {
                                songID: '',
                                attributes: {
                                    name: ''
                                }
                            },
                            {
                                id: '',
                                attributes: {
                                    name: ''
                                }
                            },
                            {
                                id: '',
                                attributes: {
                                    name: ''
                                }
                            },
                            {
                                id: '',
                                attributes: {
                                    name: ''
                                }
                            },
                            {
                                id: '',
                                attributes: {
                                    name: ''
                                }
                            },
                            {
                                id: '',
                                attributes: {
                                    name: ''
                                }
                            },
                        ]
                    }
                }
            }
        ]
    })
    const [albumFound3, setAlbumFound3] = useState({
        data: [
            {
                id: '',
                attributes: {
                    name: '',
                    artistName: "",
                },
                relationships: {
                    tracks: {
                        data: [
                            {
                                id: '',
                                attributes: {
                                    name: ''
                                }
                            },
                            {
                                id: '',
                                attributes: {
                                    name: ''
                                }
                            },
                            {
                                id: '',
                                attributes: {
                                    name: ''
                                }
                            },
                            {
                                id: '',
                                attributes: {
                                    name: ''
                                }
                            },
                            {
                                id: '',
                                attributes: {
                                    name: ''
                                }
                            },
                            {
                                id: '',
                                attributes: {
                                    name: ''
                                }
                            },
                            {
                                id: '',
                                attributes: {
                                    name: ''
                                }
                            },
                            {
                                id: '',
                                attributes: {
                                    name: ''
                                }
                            },
                            {
                                id: '',
                                attributes: {
                                    name: ''
                                }
                            },
                        ]
                    }
                }
            }
        ]
    })
    const [albumFound4, setAlbumFound4] = useState({
        data: [
            {
                id: '',
                attributes: {
                    name: '',
                    artistName: "",
                },
                relationships: {
                    tracks: {
                        data: [
                            {
                                id: '',
                                attributes: {
                                    name: ''
                                }
                            },
                            {
                                id: '',
                                attributes: {
                                    name: ''
                                }
                            },
                            {
                                id: '',
                                attributes: {
                                    name: ''
                                }
                            },
                            {
                                id: '',
                                attributes: {
                                    name: ''
                                }
                            },
                            {
                                id: '',
                                attributes: {
                                    name: ''
                                }
                            },
                            {
                                id: '',
                                attributes: {
                                    name: ''
                                }
                            },
                            {
                                id: '',
                                attributes: {
                                    name: ''
                                }
                            },
                            {
                                id: '',
                                attributes: {
                                    name: ''
                                }
                            },
                            {
                                id: '',
                                attributes: {
                                    name: ''
                                }
                            },
                        ]
                    }
                }
            }
        ]
    })
    const [albumFound5, setAlbumFound5] = useState({
        data: [
            {
                id: '',
                attributes: {
                    name: '',
                    artistName: "",
                },
                relationships: {
                    tracks: {
                        data: [
                            {
                                id: '',
                                attributes: {
                                    name: ''
                                }
                            },
                            {
                                id: '',
                                attributes: {
                                    name: ''
                                }
                            },
                            {
                                id: '',
                                attributes: {
                                    name: ''
                                }
                            },
                            {
                                id: '',
                                attributes: {
                                    name: ''
                                }
                            },
                            {
                                id: '',
                                attributes: {
                                    name: ''
                                }
                            },
                            {
                                id: '',
                                attributes: {
                                    name: ''
                                }
                            },
                            {
                                id: '',
                                attributes: {
                                    name: ''
                                }
                            },
                            {
                                id: '',
                                attributes: {
                                    name: ''
                                }
                            },
                            {
                                id: '',
                                attributes: {
                                    name: ''
                                }
                            },
                        ]
                    }
                }
            }
        ]
    })
    const [albumFound6, setAlbumFound6] = useState({
        data: [
            {
                id: '',
                attributes: {
                    name: '',
                    artistName: "",
                },
                relationships: {
                    tracks: {
                        data: [
                            {
                                id: '',
                                attributes: {
                                    name: ''
                                }
                            },
                            {
                                id: '',
                                attributes: {
                                    name: ''
                                }
                            },
                            {
                                id: '',
                                attributes: {
                                    name: ''
                                }
                            },
                            {
                                id: '',
                                attributes: {
                                    name: ''
                                }
                            },
                            {
                                id: '',
                                attributes: {
                                    name: ''
                                }
                            },
                            {
                                id: '',
                                attributes: {
                                    name: ''
                                }
                            },
                            {
                                id: '',
                                attributes: {
                                    name: ''
                                }
                            },
                            {
                                id: '',
                                attributes: {
                                    name: ''
                                }
                            },
                            {
                                id: '',
                                attributes: {
                                    name: ''
                                }
                            },
                        ]
                    }
                }
            }
        ]
    })
    const [albumFound7, setAlbumFound7] = useState({
        data: [
            {
                id: '',
                attributes: {
                    name: '',
                    artistName: "",
                },
                relationships: {
                    tracks: {
                        data: [
                            {
                                id: '',
                                attributes: {
                                    name: ''
                                }
                            },
                            {
                                id: '',
                                attributes: {
                                    name: ''
                                }
                            },
                            {
                                id: '',
                                attributes: {
                                    name: ''
                                }
                            },
                            {
                                id: '',
                                attributes: {
                                    name: ''
                                }
                            },
                            {
                                id: '',
                                attributes: {
                                    name: ''
                                }
                            },
                            {
                                id: '',
                                attributes: {
                                    name: ''
                                }
                            },
                            {
                                id: '',
                                attributes: {
                                    name: ''
                                }
                            },
                            {
                                id: '',
                                attributes: {
                                    name: ''
                                }
                            },
                            {
                                id: '',
                                attributes: {
                                    name: ''
                                }
                            },
                        ]
                    }
                }
            }
        ]
    })

    const hopelesslyInLove = async () => {
            const options1 = {
                method: 'GET',
                url: 'https://shazam.p.rapidapi.com/albums/get-details',
                params: {
                    id: '1464549183',
                    l: 'en-US',
                    // limit: '5',
                },
                headers: {
                'X-RapidAPI-Key': '79d46c63damshe4cf4939cdde596p19407djsn1b52cf6d5584',
                'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
                }
            };
            


          try {
              const response1 = await axios.request(options1);
              
              const data1 = response1.data;
              
              setAlbumFound1(data1);
              console.log(data1);
              console.log(albumFound1);
            } catch (error) {
                  console.log(error);
            }           
            
            
            const options2 = {
                method: 'GET',
                url: 'https://shazam.p.rapidapi.com/albums/get-details',
                params: {
                    id: '1050204616',
                    l: 'en-US',
                    // limit: '5',
                },
                headers: {
                'X-RapidAPI-Key': '79d46c63damshe4cf4939cdde596p19407djsn1b52cf6d5584',
                'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
                }
            };
          
          try {
              const response2 = await axios.request(options2);
              
              const data2 = response2.data;
              
              setAlbumFound2(data2);
              console.log(data2);
            } catch (error) {
                  console.log(error);
            }             

            const options3 = {
                method: 'GET',
                url: 'https://shazam.p.rapidapi.com/albums/get-details',
                params: {
                    id: '448213992',
                    l: 'en-US',
                    // limit: '5',
                },
                headers: {
                'X-RapidAPI-Key': '79d46c63damshe4cf4939cdde596p19407djsn1b52cf6d5584',
                'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
                }
            };
          
          try {
              const response3 = await axios.request(options3);
              
              const data3 = response3.data;
              
              setAlbumFound3(data3);
              console.log(data3);
            } catch (error) {
                  console.log(error);
            }             
            const options4= {
                method: 'GET',
                url: 'https://shazam.p.rapidapi.com/albums/get-details',
                params: {
                    id: '448213992',
                    l: 'en-US',
                    // limit: '5',
                },
                headers: {
                'X-RapidAPI-Key': '79d46c63damshe4cf4939cdde596p19407djsn1b52cf6d5584',
                'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
                }
            };
          
          try {
              const response4 = await axios.request(options4);
              
              const data3 = response4.data;
              
              setAlbumFound4(data3);
              console.log(data3);
            } catch (error) {
                  console.log(error);
            }             
            const options5 = {
                method: 'GET',
                url: 'https://shazam.p.rapidapi.com/albums/get-details',
                params: {
                    id: '448213992',
                    l: 'en-US',
                    // limit: '5',
                },
                headers: {
                'X-RapidAPI-Key': '79d46c63damshe4cf4939cdde596p19407djsn1b52cf6d5584',
                'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
                }
            };
          
          try {
              const response5 = await axios.request(options5);
              
              const data5 = response5.data;
              
              setAlbumFound5(data5);
            //   console.log(data5);
            } catch (error) {
                  console.log(error);
            }             
            const options6 = {
                method: 'GET',
                url: 'https://shazam.p.rapidapi.com/albums/get-details',
                params: {
                    id: '448213992',
                    l: 'en-US',
                    // limit: '5',
                },
                headers: {
                'X-RapidAPI-Key': '79d46c63damshe4cf4939cdde596p19407djsn1b52cf6d5584',
                'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
                }
            };
          
          try {
              const response6 = await axios.request(options6);
              
              const data6 = response6.data;
              
              setAlbumFound6(data6);
            //   console.log(data3);
            } catch (error) {
                  console.log(error);
            }             
            const options7 = {
                method: 'GET',
                url: 'https://shazam.p.rapidapi.com/albums/get-details',
                params: {
                    id: '448213992',
                    l: 'en-US',
                    // limit: '5',
                },
                headers: {
                'X-RapidAPI-Key': '79d46c63damshe4cf4939cdde596p19407djsn1b52cf6d5584',
                'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
                }
            };
          
          try {
              const response7 = await axios.request(options7);
              
              const data7 = response7.data;
              
              setAlbumFound7(data7);
              console.log(data7);
            } catch (error) {
                  console.log(error);
            }             
    }

    // const albumforLove = async () => {
    //     const options = {
    //         method: 'GET',
    //         url: 'https://shazam.p.rapidapi.com/albums/get-details',
    //         params: {
    //           id: '850576570',
    //           l: 'en-US'
    //         },
    //         headers: {
    //           'X-RapidAPI-Key': 'ffd81f3abbmsh974cc72bab75b1dp1ba08djsnb93db1a1b3ff',
    //           'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
    //         }
    //       };

    //       try {
    //         const response = await axios.request(options);
    //         console.log(response.data);
    //     } catch (error) {
    //         console.error(error);
    //     } 
    // }

    // const BrokeHeart = async () => {
    //         const options = {
    //             method: 'GET',
    //             url: 'https://shazam.p.rapidapi.com/search',
    //             params: {
    //                 term: 'ed sheeran',
    //                 l: 'en-US',
    //                 offset: '0',
    //                 limit: '5'
    //             },
    //             headers: {
    //                 'X-RapidAPI-Key': 'ffd81f3abbmsh974cc72bab75b1dp1ba08djsnb93db1a1b3ff',
    //             'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
    //             }
    //         };

    //       try {
    //           const response = await axios.request(options);
    //           setBrokenHeart(response.data);
    //           console.log(response.data);
    //         } catch (error) {
    //           console.log(error);
    //     }             
    // }

    useEffect(() => {
        hopelesslyInLove();

        const val = albumFound1.data[0].attributes.name;

        setloveAlbum1({
            bg: "https://upload.wikimedia.org/wikipedia/en/4/4f/Ed_Sheeran_-_No._6_Collaborations_Project.png",
            albumName: albumFound1.data[0].attributes.name,
            ArtistName: albumFound1.data[0].attributes.artistName,
            songs: [
                {
                    songId: albumFound1.data[0].relationships.tracks.data[0].id,
                    songName: albumFound1.data[0].relationships.tracks.data[0].attributes.name,
                },
                {
                    songId: albumFound1.data[0].relationships.tracks.data[1].id,
                    songName: albumFound1.data[0].relationships.tracks.data[1].attributes.name,
                },
                {
                    songId: albumFound1.data[0].relationships.tracks.data[2].id,
                    songName: albumFound1.data[0].relationships.tracks.data[2].attributes.name,
                },
                {
                    songId: albumFound1.data[0].relationships.tracks.data[3].id,
                    songName: albumFound1.data[0].relationships.tracks.data[3].attributes.name,
                },
                {
                    songId: albumFound1.data[0].relationships.tracks.data[4].id,
                    songName: albumFound1.data[0].relationships.tracks.data[4].attributes.name,
                },
                {
                    songId: albumFound1.data[0].relationships.tracks.data[5].id,
                    songName: albumFound1.data[0].relationships.tracks.data[5].attributes.name,
                },
                {
                    songId: albumFound1.data[0].relationships.tracks.data[6].id,
                    songName: albumFound1.data[0].relationships.tracks.data[6].attributes.name,
                },
                {
                    songId: albumFound1.data[0].relationships.tracks.data[7].id,
                    songName: albumFound1.data[0].relationships.tracks.data[7].attributes.name,
                },
                {
                    songId: albumFound1.data[0].relationships.tracks.data[8].id,
                    songName: albumFound1.data[0].relationships.tracks.data[8].attributes.name,
                },
            ]
        })

        // console.log(albumFound1);
        // console.log(loveAlbum1);
        // console.log("Avobe is set");

        setloveAlbum2({
            bg: "https://upload.wikimedia.org/wikipedia/en/3/3f/Ed_Sheeran_%2B_cover.png",
            albumName: albumFound2.data[0].attributes.name,
            ArtistName: albumFound2.data[0].attributes.artistName,
            songs: 
        [
            {
                songId: `${albumFound2.data[0].relationships.tracks.data[0].id}`,
                songName: albumFound2.data[0].relationships.tracks.data[0].attributes.name,
            },
            {
                songId: `${albumFound2.data[0].relationships.tracks.data[1].id}`,
                songName: albumFound2.data[0].relationships.tracks.data[1].attributes.name,
            },
            {
                songId: `${albumFound2.data[0].relationships.tracks.data[2].id}`,
                songName: albumFound2.data[0].relationships.tracks.data[2].attributes.name,
            },
            {
                songId: `${albumFound2.data[0].relationships.tracks.data[3].id}`,
                songName: albumFound2.data[0].relationships.tracks.data[3].attributes.name,
            },
            {
                songId: `${albumFound2.data[0].relationships.tracks.data[4].id}`,
                songName: albumFound2.data[0].relationships.tracks.data[4].attributes.name,
            },
            {
                songId:`${albumFound2.data[0].relationships.tracks.data[5].id}`,
                songName: albumFound2.data[0].relationships.tracks.data[5].attributes.name,
            },
            {
                songId: `${albumFound2.data[0].relationships.tracks.data[6].id}`,
                songName: albumFound2.data[0].relationships.tracks.data[6].attributes.name,
            },
            {
                songId: `${albumFound2.data[0].relationships.tracks.data[7].id}`,
                songName: albumFound2.data[0].relationships.tracks.data[7].attributes.name,
            },
            {
                songId: `${albumFound2.data[0].relationships.tracks.data[8].id}`,
                songName: albumFound2.data[0].relationships.tracks.data[8].attributes.name,
            },
        ]
        })

        setloveAlbum3({
            bg: "https://upload.wikimedia.org/wikipedia/en/4/45/Divide_cover.png",
            albumName: albumFound3.data[0].attributes.name,
            ArtistName: albumFound3.data[0].attributes.artistName,
            songs: [
                {
                    songId: `${albumFound3.data[0].relationships.tracks.data[0].id}`,
                    songName: albumFound3.data[0].relationships.tracks.data[0].attributes.name,
                },
                {
                    songId: `${albumFound3.data[0].relationships.tracks.data[1].id}`,
                    songName: albumFound3.data[0].relationships.tracks.data[1].attributes.name,
                },
                {
                    songId: `${albumFound3.data[0].relationships.tracks.data[2].id}`,
                    songName: albumFound3.data[0].relationships.tracks.data[2].attributes.name,
                },
                {
                    songId: `${albumFound3.data[0].relationships.tracks.data[3].id}`,
                    songName: albumFound3.data[0].relationships.tracks.data[3].attributes.name,
                },
                {
                    songId: `${albumFound3.data[0].relationships.tracks.data[4].id}`,
                    songName: albumFound3.data[0].relationships.tracks.data[4].attributes.name,
                },
                {
                    songId:`${albumFound3.data[0].relationships.tracks.data[5].id}`,
                    songName: albumFound2.data[0].relationships.tracks.data[5].attributes.name,
                },
                {
                    songId: `${albumFound3.data[0].relationships.tracks.data[6].id}`,
                    songName: albumFound3.data[0].relationships.tracks.data[6].attributes.name,
                },
                {
                    songId: `${albumFound3.data[0].relationships.tracks.data[7].id}`,
                    songName: albumFound3.data[0].relationships.tracks.data[7].attributes.name,
                },
                {
                    songId: `${albumFound3.data[0].relationships.tracks.data[8].id}`,
                    songName: albumFound3.data[0].relationships.tracks.data[8].attributes.name,
                },
            ]
        })

        setloveAlbum4({
            bg: "https://upload.wikimedia.org/wikipedia/en/4/45/Divide_cover.png",
            albumName: albumFound4.data[0].attributes.name,
            ArtistName: albumFound4.data[0].attributes.artistName,
            songs: [
                {
                    songId: `${albumFound4.data[0].relationships.tracks.data[0].id}`,
                    songName: albumFound4.data[0].relationships.tracks.data[0].attributes.name,
                },
                {
                    songId: `${albumFound4.data[0].relationships.tracks.data[1].id}`,
                    songName: albumFound4.data[0].relationships.tracks.data[1].attributes.name,
                },
                {
                    songId: `${albumFound4.data[0].relationships.tracks.data[2].id}`,
                    songName: albumFound4.data[0].relationships.tracks.data[2].attributes.name,
                },
                {
                    songId: `${albumFound4.data[0].relationships.tracks.data[3].id}`,
                    songName: albumFound4.data[0].relationships.tracks.data[3].attributes.name,
                },
                {
                    songId: `${albumFound4.data[0].relationships.tracks.data[4].id}`,
                    songName: albumFound4.data[0].relationships.tracks.data[4].attributes.name,
                },
                {
                    songId:`${albumFound4.data[0].relationships.tracks.data[5].id}`,
                    songName: albumFound4.data[0].relationships.tracks.data[5].attributes.name,
                },
                {
                    songId: `${albumFound4.data[0].relationships.tracks.data[6].id}`,
                    songName: albumFound4.data[0].relationships.tracks.data[6].attributes.name,
                },
                {
                    songId: `${albumFound4.data[0].relationships.tracks.data[7].id}`,
                    songName: albumFound4.data[0].relationships.tracks.data[7].attributes.name,
                },
                {
                    songId: `${albumFound4.data[0].relationships.tracks.data[8].id}`,
                    songName: albumFound4.data[0].relationships.tracks.data[8].attributes.name,
                },
            ]
        })

        setloveAlbum5({
            bg: "https://upload.wikimedia.org/wikipedia/en/4/45/Divide_cover.png",
            albumName: albumFound5.data[0].attributes.name,
            ArtistName: albumFound5.data[0].attributes.artistName,
            songs: [
                {
                    songId: `${albumFound5.data[0].relationships.tracks.data[0].id}`,
                    songName: albumFound5.data[0].relationships.tracks.data[0].attributes.name,
                },
                {
                    songId: `${albumFound5.data[0].relationships.tracks.data[1].id}`,
                    songName: albumFound5.data[0].relationships.tracks.data[1].attributes.name,
                },
                {
                    songId: `${albumFound5.data[0].relationships.tracks.data[2].id}`,
                    songName: albumFound5.data[0].relationships.tracks.data[2].attributes.name,
                },
                {
                    songId: `${albumFound5.data[0].relationships.tracks.data[3].id}`,
                    songName: albumFound5.data[0].relationships.tracks.data[3].attributes.name,
                },
                {
                    songId: `${albumFound5.data[0].relationships.tracks.data[4].id}`,
                    songName: albumFound5.data[0].relationships.tracks.data[4].attributes.name,
                },
                {
                    songId:`${albumFound5.data[0].relationships.tracks.data[5].id}`,
                    songName: albumFound5.data[0].relationships.tracks.data[5].attributes.name,
                },
                {
                    songId: `${albumFound5.data[0].relationships.tracks.data[6].id}`,
                    songName: albumFound5.data[0].relationships.tracks.data[6].attributes.name,
                },
                {
                    songId: `${albumFound5.data[0].relationships.tracks.data[7].id}`,
                    songName: albumFound5.data[0].relationships.tracks.data[7].attributes.name,
                },
                {
                    songId: `${albumFound5.data[0].relationships.tracks.data[8].id}`,
                    songName: albumFound5.data[0].relationships.tracks.data[8].attributes.name,
                },
            ]
        })

        setloveAlbum6({
            bg: "https://upload.wikimedia.org/wikipedia/en/4/45/Divide_cover.png",
            albumName: albumFound6.data[0].attributes.name,
            ArtistName: albumFound6.data[0].attributes.artistName,
            songs: [
                {
                    songId: `${albumFound6.data[0].relationships.tracks.data[0].id}`,
                    songName: albumFound6.data[0].relationships.tracks.data[0].attributes.name,
                },
                {
                    songId: `${albumFound6.data[0].relationships.tracks.data[1].id}`,
                    songName: albumFound6.data[0].relationships.tracks.data[1].attributes.name,
                },
                {
                    songId: `${albumFound6.data[0].relationships.tracks.data[2].id}`,
                    songName: albumFound6.data[0].relationships.tracks.data[2].attributes.name,
                },
                {
                    songId: `${albumFound6.data[0].relationships.tracks.data[3].id}`,
                    songName: albumFound6.data[0].relationships.tracks.data[3].attributes.name,
                },
                {
                    songId: `${albumFound6.data[0].relationships.tracks.data[4].id}`,
                    songName: albumFound6.data[0].relationships.tracks.data[4].attributes.name,
                },
                {
                    songId:`${albumFound6.data[0].relationships.tracks.data[5].id}`,
                    songName: albumFound6.data[0].relationships.tracks.data[5].attributes.name,
                },
                {
                    songId: `${albumFound6.data[0].relationships.tracks.data[6].id}`,
                    songName: albumFound6.data[0].relationships.tracks.data[6].attributes.name,
                },
                {
                    songId: `${albumFound6.data[0].relationships.tracks.data[7].id}`,
                    songName: albumFound3.data[0].relationships.tracks.data[7].attributes.name,
                },
                {
                    songId: `${albumFound6.data[0].relationships.tracks.data[8].id}`,
                    songName: albumFound6.data[0].relationships.tracks.data[8].attributes.name,
                },
            ]
        })

        setloveAlbum7({
            bg: "https://upload.wikimedia.org/wikipedia/en/4/45/Divide_cover.png",
            albumName: albumFound7.data[0].attributes.name,
            ArtistName: albumFound7.data[0].attributes.artistName,
            songs: [
                {
                    songId: `${albumFound7.data[0].relationships.tracks.data[0].id}`,
                    songName: albumFound7.data[0].relationships.tracks.data[0].attributes.name,
                },
                {
                    songId: `${albumFound7.data[0].relationships.tracks.data[1].id}`,
                    songName: albumFound7.data[0].relationships.tracks.data[1].attributes.name,
                },
                {
                    songId: `${albumFound7.data[0].relationships.tracks.data[2].id}`,
                    songName: albumFound7.data[0].relationships.tracks.data[2].attributes.name,
                },
                {
                    songId: `${albumFound7.data[0].relationships.tracks.data[3].id}`,
                    songName: albumFound7.data[0].relationships.tracks.data[3].attributes.name,
                },
                {
                    songId: `${albumFound7.data[0].relationships.tracks.data[4].id}`,
                    songName: albumFound7.data[0].relationships.tracks.data[4].attributes.name,
                },
                {
                    songId:`${albumFound7.data[0].relationships.tracks.data[5].id}`,
                    songName: albumFound7.data[0].relationships.tracks.data[5].attributes.name,
                },
                {
                    songId: `${albumFound7.data[0].relationships.tracks.data[6].id}`,
                    songName: albumFound7.data[0].relationships.tracks.data[6].attributes.name,
                },
                {
                    songId: `${albumFound7.data[0].relationships.tracks.data[7].id}`,
                    songName: albumFound7.data[0].relationships.tracks.data[7].attributes.name,
                },
                {
                    songId: `${albumFound7.data[0].relationships.tracks.data[8].id}`,
                    songName: albumFound7.data[0].relationships.tracks.data[8].attributes.name,
                },
            ]
        })
    }, [albumFound1])

    return(
        <div className="Home">
            <Greetings testingGotoAlbum={testingGoGotoAlbum} backFromAlbum={backFromAlbum}/>
            {
                loveAlbum1.albumName != "" && loveAlbum2.albumName != "" ? <div><FeaturedPlaylist testingGotoAlbum={testingGototoAlbum} data={hopelesslyInLoveobg} album1={loveAlbum1} album2={loveAlbum2} album3={loveAlbum3} album4={loveAlbum4} album5={loveAlbum5} album6={loveAlbum6} album7={loveAlbum7} title={"When you're Hopelessly In Love"}/><FeaturedPlaylist testingGotoAlbum={testingGototoAlbum} data={hopelesslyInLoveobg} album1={loveAlbum7} album2={loveAlbum6} album3={loveAlbum1} album4={loveAlbum5} album5={loveAlbum2} album6={loveAlbum4} album7={loveAlbum3} title={"Life Full Of Adventures"}/></div>: <div></div>
            }
            {/* <FeaturedPlaylist testingGotoAlbum={testingGotoAlbum} data={BrokenHeart} title={"When you're Hopelessly In Love"}/>
            <FeaturedPlaylist testingGotoAlbum={testingGotoAlbum} data={hopelesslyInLoveobg} title={"When you're Hopelessly In Love"}/> */}
        </div>
    )
}

export default Home;