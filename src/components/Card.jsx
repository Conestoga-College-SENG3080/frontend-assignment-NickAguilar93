const Card = ({ title, description }) => {
  return (
    <div className="bg-slate-300  dark:bg-slate-800 max-w-sm rounded overflow-hidden m-2 cursor-pointer">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">r/{title}</div>
        <p className="text-base">{description}</p>
      </div>
    </div>
  );
};

export default Card;
