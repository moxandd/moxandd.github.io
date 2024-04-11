import Advertisement from "../components/Advertisement";
import Post from "../components/Post";
import InternalAdvertisement from "../components/InternalAdvertisement";

const Homepage = () => {
  return (
    <div className="main-homepage-wrapper |">
      <div className="homepage-container | default-container">
        <div className="homepage-inner | flex flex-col gap-[1em]">
          <Advertisement />
          <section className="blog |">
            <div className="blog-container | ">
              <div className="blog-inner-grid | grid grid-cols-1 gap-[1em]">
                <Post />
                <Post />
                <Post />
                <InternalAdvertisement />
                <Post />
                <Post />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
