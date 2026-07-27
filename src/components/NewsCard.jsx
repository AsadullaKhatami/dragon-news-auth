import {
    FaRegBookmark,
    FaShareAlt,
    FaEye,
    FaStar,
} from "react-icons/fa";

const NewsCard = ({ news }) => {
    const {
        title,
        author,
        image_url,
        details,
        tags,
        rating,
        total_view,
    } = news;

    const formattedDate = new Date(author.published_date).toLocaleDateString(
        "en-US",
        {
            year: "numeric",
            month: "long",
            day: "numeric",
        }
    );

    return (
        <div className="bg-white border border-base-300 rounded-lg shadow-sm overflow-hidden">

            {/* Header */}
            <div className="flex items-center justify-between bg-gray-100 px-5 py-4">

                <div className="flex items-center gap-3">
                    <img
                        src={author.img}
                        alt={author.name}
                        className="w-12 h-12 rounded-full object-cover"
                    />

                    <div>
                        <h2 className="font-semibold">{author.name}</h2>
                        <p className="text-sm text-gray-500">{formattedDate}</p>
                    </div>
                </div>

                <div className="flex gap-4 text-gray-500 text-lg">
                    <FaRegBookmark className="cursor-pointer hover:text-black" />
                    <FaShareAlt className="cursor-pointer hover:text-black" />
                </div>
            </div>

            {/* Title */}
            <div className="p-5">
                <h1 className="text-2xl font-bold leading-snug">
                    {title}
                </h1>

                {/* Image */}
                <img
                    src={image_url}
                    alt={title}
                    className="w-full h-72 object-cover rounded-lg my-5"
                />

                {/* Tags & Date */}
                <p className="text-gray-500 text-sm leading-7">
                    <span className="font-semibold">
                        {new Date(author.published_date).toLocaleDateString("en-US", {
                            weekday: "long",
                            month: "long",
                            day: "numeric",
                            year: "numeric",
                        })}
                    </span>

                    {" | "}

                    {tags.map((tag, index) => (
                        <span key={index}>
                            {tag}
                            {index !== tags.length - 1 && ", "}
                        </span>
                    ))}
                </p>

                {/* Description */}
                <p className="text-gray-600 mt-4">
                    {details.length > 200
                        ? details.slice(0, 200) + "..."
                        : details}

                    <span className="text-orange-500 font-semibold cursor-pointer ml-2">
                        Read More
                    </span>
                </p>
            </div>

            {/* Footer */}
            <div className="border-t border-base-300 px-5 py-4 flex justify-between items-center">

                <div className="flex items-center gap-2">
                    {[...Array(5)].map((_, index) => (
                        <FaStar
                            key={index}
                            className={`${index < rating.number
                                    ? "text-orange-400"
                                    : "text-gray-300"
                                }`}
                        />
                    ))}

                    <span className="font-semibold ml-1">
                        {rating.number}.0
                    </span>
                </div>

                <div className="flex items-center gap-2 text-gray-600">
                    <FaEye />
                    <span>{total_view}</span>
                </div>

            </div>
        </div>
    );
};

export default NewsCard;