import React from 'react';
import Header from '../../components/Header/Header';
import Profile from '../../components/Profile/Profile';

function ProfilePage() {
    return (
        <>
            <Header
                isLoggedIn='true'
            />
            <main>
                <Profile />
            </main>
        </>
    );
}

export default ProfilePage;