import React, { useState, useEffect } from "react";
import User from "./userclass";

const About = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProtectedData = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch("http://localhost:3001/protected", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch protected data");
        }
        const data = await response.json();
        setUserData(data);
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch user data");
        setLoading(false);
      }
    };

    fetchProtectedData();

    // Cleanup function (optional)
    return () => {};
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <div className="about-us">
      <span>{userData.message}</span>
        <h2>About Us - Ahaa!! Food Delivery</h2>
        <p>Welcome to Ahaa!! – your ultimate culinary companion in the vibrant city of Hyderabad. We are more than just a food delivery app; we are your gateway to a world of delectable flavors, seamless service, and unforgettable dining experiences. At Ahaa!!, we are passionate about connecting food lovers with their favorite dishes from the finest restaurants, cafes, and eateries across the city.</p>
        <h3>Our Mission</h3>
        <p>Our mission at Ahaa!! is simple yet profound: to redefine convenience and elevate your dining experience. We strive to bring you a diverse array of cuisines, from traditional Hyderabadi delights to international delicacies, all with just a few taps on your smartphone. Our dedication to excellence ensures that every meal delivered through our platform is not just food, but a celebration of taste and quality.</p>
        <h3>Why Ahaa!!?</h3>
        <ul>
          <li>Curated Selection: We handpick the best restaurants in Hyderabad, ensuring that every partner meets our stringent standards of quality and taste.</li>
          <li>Seamless User Experience: Our user-friendly interface and intuitive design make ordering food a breeze. With features like personalized recommendations and real-time order tracking, we put convenience at your fingertips.</li>
          <li>Fast and Reliable Delivery: Whether you're craving a quick snack or planning a lavish feast, our efficient delivery network ensures that your food arrives fresh and on time, every time.</li>
          <li>Exceptional Customer Service: At Ahaa!!, your satisfaction is our top priority. Our dedicated support team is available round-the-clock to address any concerns or queries, ensuring a hassle-free experience.</li>
        </ul>
        <h3>Join the Ahaa!! Community</h3>
        <p>Embark on a culinary journey like never before with Ahaa!! Food Delivery. Download our app today and join the ever-growing community of food lovers who trust us to satisfy their cravings, one delicious meal at a time. Experience the convenience, reliability, and joy of Ahaa!! – where every bite is a moment to savor.</p>
        <p>Indulge. Discover. Enjoy. Ahaa!! – Your Food, Your Way.</p>
        <div>
          <User name={"abhi"} age={20} phone={8688472999} />
        </div>
      </div>
    </>
  );
};

export default About;


