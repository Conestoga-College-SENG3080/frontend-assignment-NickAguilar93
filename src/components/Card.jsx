const Card = ({ title, description, onClick }) => {
  return (
    <div
      className="bg-slate-300 dark:bg-slate-800 rounded m-2 cursor-pointer"
      onClick={onClick}
    >
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-base">{description}</p>
      </div>
    </div>
  );
};

export default Card;
