import React, { useEffect } from 'react'
import { useFetchUser } from '../../hooks/useFetchUser'
import { Link } from 'react-router-dom';

export const Profile = () => {
    const { userData, isLoading, error, fetchData } = useFetchUser();
    useEffect(() => {
        fetchData()
    }, [])

    return (
    
    userData&&<>
        <div className="profile">
            <div className="user-details">
                <div className="user-data">
                    <img src="" alt="" className="user-image" />
                    <ul className="user-id">
                        <li className="username">{userData.username}</li>
                        <li className="name">{userData.name}</li>
                    </ul>
                    <div className="user-bio">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae molestiae, quas molestias eius consequuntur earum.
                    </div>
                    <button>Edit Profile</button>
                </div>
                <ul className="conn-list">
                    <li className="contats">
                        <i className="fa fa-envolope"></i>
                        <Link>{userData.email}</Link>

                    </li>
                    <li className="contats">
                        <i className="fa fa-facebook"></i>
                        <Link>{userData.facebook}</Link>
                    </li>

                    <li className="contats">
                        <i className="fa fa-facebook"></i>
                        <Link>{userData.facebook}</Link>
                    </li>

                    <li className="contats">
                        <i className="fa fa-facebook"></i>
                        <Link>{userData.facebook}</Link>
                    </li>
                </ul>
            </div>
            <div className="user-summary">
                

            </div>
        </div>
    </>
    )
}

