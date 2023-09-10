import React from "react";
import Header from '../../components/Header/Header';
import Profile from '../../components/Profile/Profile';

function ProfilePage({
    isLoggedIn,
    isFormSubmitting,
    handleSignOut,
    handleUpdateUserInfo,
}) {

    return (
        <>
            <Header
                isLoggedIn={isLoggedIn}
            />
            <main>
                <Profile
                    isFormSubmitting={isFormSubmitting}
                    handleUpdateUserInfo={handleUpdateUserInfo}
                    handleSignOut={handleSignOut}
                />
            </main>
        </>
    );
}

export default ProfilePage;