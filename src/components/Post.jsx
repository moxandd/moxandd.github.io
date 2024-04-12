export const Post = (props) => {
  const post = props.post;

  return (
    <div className="post-wrapper | ">
      <a href="">
        <div className="post-container | h-full">
          <div className="post-inner | flex flex-col justify-between h-full">
            <div
              style={{ backgroundImage: `url(src/${post.image})` }}
              className="post-image | min-h-[10rem] flex-grow bg-center bg-cover bg-no-repeat rounded-xl sm:min-h-[14rem] lg:min-h-[7rem] lg:rounded-lg"
            ></div>
            <div className="post-body | flex  flex-col justify-between gap-[0.25em] mt-[1em] lg:mt-0 lg:gap-0">
              <p className="category-name | text-[1.125rem] font-semibold mt-[0.5em]">
                ТЕХНОЛОГИИ
              </p>
              <p className="post-title | title lg:text-[1.25rem]">
                {post.title}
              </p>
              <div className="credentials | flex justify-between text-[0.875rem] text-subtitle mt-[0.2em]">
                <p className="publication-date | ">13 Марта 15:24</p>
                <p className="author |">Иванов Иван</p>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Post;
