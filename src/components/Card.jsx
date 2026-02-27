/*
 * FILE : Card.jsx
 * PROJECT : SENG3080 - Frontend Assignment
 * PROGRAMMER : Nicholas Aguilar
 * FIRST VERSION : 2026-02-22
 * DESCRIPTION : This file defines the Card component which acts as a general display panel for content.
 */
const Card = ({
  title,
  description,
  onClick,
  author,
  totalLikes,
  totalRead,
  button,
  buttonOnClick,
}) => {
  return (
    <div
      className={`bg-slate-300 dark:bg-slate-800 rounded m-2 ${!button && "cursor-pointer hover:ring-4 hover:ring-blue-500"} `}
      onClick={!button ? onClick : () => {}}
    >
      <div className="px-6 py-4">
        <div className="flex justify-between mb-3">
          <h2 className="font-bold text-xl">{title}</h2>
          {author && (
            <p className="text-xl">
              <strong>Author</strong>:{` ${author}`}
            </p>
          )}
        </div>
        {author && <div></div>}
        <p className="text-base">{description}</p>
        <div className="flex justify-between mt-5">
          <div className="flex items-center space-x-2 text-xl">
            {totalLikes && <p>Total likes: {totalLikes}</p>}
            {totalRead && <p>Total views: {totalRead}</p>}
          </div>
          {button && (
            <button
              onClick={buttonOnClick}
              className=" bg-red-700 font-bold rounded-lg p-2 cursor-pointer hover:ring-2"
            >
              Remove Post
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
