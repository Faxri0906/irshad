import chat from "../../img/chat.png";
const Round = () => {
  return (
    <div className="bg-blue-600 w-16 h-16 rounded-full shadow-2xl flex items-center justify-center fixed top-[660px] right-5 cursor-pointer hover:w-[68px] hover:h-[68px]">
        <img src={chat} className="w-10 h-10 hover:w-11 hover:h-11"/>
    </div>
  );
};

export default Round;