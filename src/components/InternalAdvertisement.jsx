import Button from "./Button";

export const InternalAdvertisement = () => {
  return (
    <div className="internal-ad-main-wrapper-block | bg-[#3DAEFF] min-h-[15em] rounded-xl">
      <div className="internal-ad-container | h-full py-[2em] px-[1.25em]">
        <div className="internal-ad-inner | flex flex-col justify-between h-full">
          <h1 className="text-white | title">
            Читай уникальные посты в нашем Telegram канале
          </h1>
          <Button></Button>
        </div>
      </div>
    </div>
  );
};

export default InternalAdvertisement;
