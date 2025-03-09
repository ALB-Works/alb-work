import { useState, useEffect } from "react";
import axios from "axios";

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get("https://backend-2-dnnp.onrender.com/user")
      .then(response => {
        setUser(response.data); // Set user data from response
      })
      .catch(error => {
        console.error("Error fetching user data:", error);
      });
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-center">My Profile</h2>
      <div className="card mx-auto" style={{ maxWidth: "400px" }}>
        {user && (
          <>
            <img
              src={user.avatar}
              alt="Profile Avatar"
              className="card-img-top rounded-circle mx-auto mt-3"
              style={{ width: "120px", height: "120px", objectFit: "cover" }}
            />
            <div className="card-body text-center">
              <h4 className="card-title">{user.name}</h4>
              <p className="card-text">{user.email}</p>
              <p className="card-text">{user.bio}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Profile;
