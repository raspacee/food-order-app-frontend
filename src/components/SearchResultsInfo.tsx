import { Link } from "react-router-dom";

type Props = {
  total: number;
  city: string;
};

const SearchRestaurantsInfo = ({ total, city }: Props) => {
  return (
    <div className="text-xl font-bold flex flex-col gap-3 justify-between lg:items-center lg:flex-row">
      <span className="flex items-center">
        {total} Restaurants found in {city}
        <Link
          to="/"
          className="ml-1 font-semibold text-blue-500 cursor-pointer underline text-sm"
        >
          Change Location
        </Link>
      </span>
    </div>
  );
};

export default SearchRestaurantsInfo;
