import post_image from "../assets/images/post-image.png";

export const Post = () => {
  return (
    <div className="post-wrapper | ">
      <div className="post-container | ">
        <div className="post-inner | ">
          <div className="post-image | ">
            <img className="w-full" src={post_image} alt="post-image" />
          </div>
          <div className="post-body | ">
            <p className="category-name | text-[1.125rem] font-semibold mt-[0.5em]">
              ТЕХНОЛОГИИ
            </p>
            <p className="post-title | title">
              Заголовок темы один очень длинный и очень длинный очень
            </p>
            <div className="credentials | flex justify-between text-[0.875rem] text-subtitle">
              <p className="publication-date | ">13 Марта 15:24</p>
              <p className="author |">Иванов Иван</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
