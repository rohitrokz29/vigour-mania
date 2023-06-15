import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    LineChart,
    Line,
    Radar,
    RadarChart,
    PolarAngleAxis,
    PolarGrid,
    PolarRadiusAxis

} from 'recharts';


//custom hooks
import { useFetchUser } from '../../hooks/useFetchUser'
//styles
import '../../styles/profile.css'
//assets
import Image from '../../../assets/profile.webp'
import Null from '../../../assets/null.png'

const Profile = () => {
    const { userData, isLoading, error, fetchData } = useFetchUser();
    const { username } = useParams();

    useEffect(() => {
        fetchData(username)
    }, [username])

    const friends = [
        {
            image: Image,
            username: "marshal_453",
            name: "Marshal Prab"
        },
        {
            image: Image,
            username: "djhk3_32",
            name: "bc abdnd"
        }, {
            image: Image,
            username: "rohfb.48df",
            name: "roffh hjf"
        }, {
            image: Image,
            username: "username",
            name: "name abdnd"
        }
    ]
    return (

        !isLoading && <>
            <div className="profile">
                <div className="user-details">
                    <div className="user-data">
                        <div className="profile-details">
                            <img src={Image} alt="Profile" className="user-image" />
                            <ul className="user-id">
                                <li className="username dark-text">{userData.user.username}</li>
                                <li className="name light-text">{userData.user.name || "Rohit Kharche"}</li>
                            </ul>
                        </div>
                        <div className="user-bio dark-text">
                            {userData.user.bio && userData.user.bio}
                        </div>
                        <Link to="/update-profile" >
                            <button className="edit-profile ">
                                Edit Profile
                            </button>
                        </Link>
                    </div>
                    <ul className="conn-list">
                        <li className="conn-head dark-text">Connections</li>
                        <li className="contact-item">
                            <i className="fa fa-envelope light-text"></i>
                            <Link>{userData.user.email}</Link>
                        </li>
                        {userData.user.facebook &&
                            <li className="contact-item">
                                <i className="fa fa-facebook light-text"></i>
                                <Link>{userData.user.facebook}</Link>
                            </li>}
                        {userData.user.instagram && <li className="contact-item">
                            <i className="fa fa-instagram light-text"></i>
                            <Link>{userData.user.instagram}</Link>
                        </li>}
                        {userData.user.twitter && <li className="contact-item">
                            <i className="fa fa-twitter light-text"></i>
                            <Link>{userData.user.twitter}</Link>
                        </li>}
                    </ul>
                </div>
                <div className="user-summary">
                    <div className="head dark-text">Trackers Overview</div>

                    {
                        userData.charts[0] ?
                            <TrackerSummary charts={userData.charts} chartTypes={userData.chartTypes} />
                            :
                            <div className="image">
                                <img src={Null} alt="" />
                            </div>
                    }
                </div>
            </div>

            <div className="friends ">
                <div className="friends-head dark-text">
                    <div >
                        Friends
                    </div>
                </div>
                <div className=" friend-comp-head">
                    {/* <img src={Image} alt="" className="li-img friend-head-img " /> */}
                    <ul className="cont items">
                        <li className="username bold">Username</li>
                        <li className="name bold">Name</li>
                        <li className='status bold'>status</li>
                        <li>
                            <button className="add-friend friend-head-img ">Add friend</button>
                        </li>
                    </ul>
                </div>
                {
                    friends[0] ? friends.map((item, index) => {
                        return (<FriendComp key={index} name={item.name} username={item.username} image={item.image} />)
                    }) :
                        <div className="image ">
                            <img src={Null} alt="" />
                        </div>
                }
            </div>
        </>
    )
}

const TrackerSummary = ({ charts, chartTypes }) => {

    //set colorcodes  theme  wise
    let colorCodes = ["#fc0505", "#fc7d05", "#22fc05", "#05fcc6", "#050dfc", "#7d07fa"];
    return (<>
        <div className="track">

            <div className="track-chart">

                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        data={charts}
                        margin={{
                            top: 20,
                            right: 20,
                            left: 0,
                            bottom: 0,
                        }}
                        style={{
                            backgroundColor: "#0000001f"
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" fill="#ff00001a" fillOpacity={0.2} />
                        <XAxis dataKey="week" label={{ value: 'week', position: 'insideBottom' }} height={40} />
                        <YAxis label={{ value: "value", angle: "-90", position: 'insideLeft' }} width={40} />
                        <Tooltip cursor={{ stroke: 'grey', strokeWidth: 1 }} />
                        {
                            charts.map((item, index) => {
                                return <Line key={index} connectNulls type='monotone' name={chartTypes[index % chartTypes.length].chartType} stroke={colorCodes[(index) % 6]} dataKey={`value${index}`} />
                            })
                        }
                    </LineChart>
                </ResponsiveContainer>

            </div>
           
        </div>

    </>
    )
}
const FriendComp = ({ image, username, name }) => {
    return (
        <div className="friend-comp">
            {/* <img src={image} alt="" className="li-img" /> */}
            <ul className="cont items">
                <li className="username">
                    <Link to={`/user/${username}`}>{username}</Link>
                </li>
                <li className="name">{name}</li>
                <li className='status'>status</li>
                <li>
                    <button className="add-friend ">Add friend</button>
                </li>
            </ul>
        </div>
    )
}



export default Profile;