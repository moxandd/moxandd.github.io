import Advertisement from "../components/Advertisement";
import Post from "../components/Post";
import { useState } from "react";
import InternalAdvertisement from "../components/InternalAdvertisement";
import SecondaryButton from "../components/SecondaryButton";

const Homepage = () => {
  const [posts, setPosts] = useState([
    {
      title: "Куда сходить вечером в столице",
      image: "./assets/images/post-image7.jpg",
    },
    {
      title: "Где лучше арендовать велосипед",
      image: "./assets/images/post-image2.jpg",
    },
    {
      title: "Речной транспорт Москвы",
      image: "./assets/images/post-image3.jpg",
    },
    {
      title: "Новогоднее настроение - повод погулять",
      image: "./assets/images/post-image4.jpg",
    },
    {
      title: "Согрейте своих близких сделав это",
      image: "./assets/images/post-image5.jpg",
    },
    { title: "Кофе сближает", image: "./assets/images/post-image6.jpg" },
    {
      title: "Лепите снежинки на елки",
      image: "./assets/images/post-image1.jpg",
    },
  ]);

  return (
    <div className="main-homepage-wrapper |">
      <div className="homepage-container | default-container">
        <div className="homepage-inner | flex flex-col gap-[1em]">
          <Advertisement />
          <section className="blog |">
            <div className="blog-container | ">
              <div className="blog-inner-grid | grid grid-cols-1 gap-[1.25em] md:grid-cols-2 md:[&>*:first-child]:col-span-2 lg:grid-cols-3 lg:[&>*:first-child]:row-span-2 lg:gap-[2em]">
                {posts.map((post) => (
                  <Post post={post} />
                ))}
                <InternalAdvertisement />
              </div>
              <div className="pagination flex justify-center mt-[2em]">
                <SecondaryButton text="Показать еще" />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
