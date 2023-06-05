import React, { useEffect } from 'react'
import { useFetchUser } from '../../hooks/useFetchUser'
import { Link, useParams } from 'react-router-dom';
import '../../styles/profile.css'
import Image from '../../../assets/profile.webp'
const Profile = () => {

    const { userData, isLoading, error, fetchData } = useFetchUser();
    useEffect(() => {
        fetchData()
    }, [])
    const trackData = [

        {
            type: "weigth"
        },
        {
            type: "bmi"
        },
        {
            type: "height"
        },
        {
            type: "deadlift"
        }
    ]
    const friends = [
        {
            image: Image,
            username: "username",
            name: "name abdnd"
        },
        {
            image: Image,
            username: "username",
            name: "name abdnd"
        }, {
            image: Image,
            username: "username",
            name: "name abdnd"
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
                                <li className="username dark-text">{userData.username}</li>
                                <li className="name light-text">{userData.name || "Rohit Kharche"}</li>
                            </ul>
                        </div>

                        <div className="user-bio dark-text">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed minus vitae provident ratione enim magnam voluptatem ut quia ducimus quisquam?
                        </div>
                        <Link to="/update-profile" >
                            <button className="edit-profile ">
                                Edit Profile
                            </button>
                        </Link>
                    </div>
                    <ul className="conn-list">
                        <li className="contact-item">
                            <i className="fa fa-envelope light-text"></i>
                            <Link>{userData.email}</Link>

                        </li>
                        {userData.facebook &&
                            <li className="contact-item">
                                <i className="fa fa-facebook light-text"></i>
                                <Link>{userData.facebook}</Link>
                            </li>}
                        {userData.instagram && <li className="contact-item">
                            <i className="fa fa-instagram light-text"></i>
                            <Link>{userData.instagram}</Link>
                        </li>}
                        {userData.twitter && <li className="contact-item">
                            <i className="fa fa-twitter light-text"></i>
                            <Link>{userData.twitter}</Link>
                        </li>}

                    </ul>
                </div>
                <div className="user-summary">
                    <div className="head">Your Trackers</div>
                    {
                        trackData.map((item, index) => {
                            return (<TrackerSummary key={index} type={item.type} />)
                        })
                    }
                </div>
            </div>

            <div className="friends">
                <div className="friends-head dark-text">
                    <div >
                        Friends
                    </div>
                </div>
                <div className="friend-comp">
                    <img src={Image} alt="" className="profile-img li-img " />
                    <ul className="cont items">
                        <li className="username">Username</li>
                        <li className="name">Name</li>
                        <li className='status'>{status || "status"}</li>
                    </ul>
                </div>
                {
                    friends.map((item, index) => {
                        return (<FriendComp key={index} name={item.name} username={item.username} image={item.image} />)
                    })
                }
            </div>
        </>
    )
}

const TrackerSummary = ({ type }) => {
    const { username } = useParams()
    return (
        <div className="track">
            <div className="track-name dark-text">
                {type[0].toUpperCase() + type.slice(1)}
            </div>
            <div className="track-chart">
                TRACKER GRAPH

            </div>
            <Link to={`${type}`}>
                <i className="fa fa-arrow-right"></i>
            </Link>
        </div>
    )
}
const FriendComp = ({ image, username, name }) => {
    return (
        <div className="friend-comp">
            <img src={image} alt="" className="profile-img" />
            <ul className="cont items">
                <li className="username">{username}</li>
                <li className="name">{name}</li>
                <li className='status'>{status || "status"}</li>
            </ul>
        </div>
    )
}
export default Profile;