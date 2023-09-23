import { CarProps, FilterProps } from "@/types";

export async function fetchCars(filters: FilterProps) {
  const { manufacturer, year, fuel, limit, model } = filters;

  const headers = {
    "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY || "",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,
    {
      headers,
    }
  );

  const result = await response.json();

  return result;
}

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDayUSD = 20; // Base rental price per day in dollars
  const mileageFactorUSD = 2; // Additional rate per mile driven in dollars
  const ageFactorUSD = 20; // Additional rate per year of vehicle age in dollars

  // Calculate additional rate based on mileage and age in dollars
  const mileageRateUSD = city_mpg * mileageFactorUSD;
  const ageRateUSD = (new Date().getFullYear() - year) * ageFactorUSD;

  // Calculate total rental rate per day in dollars
  const rentalRatePerDayUSD = basePricePerDayUSD + mileageRateUSD + ageRateUSD;

  // Assuming 1 USD = 14,000 Rupiah (you can adjust the conversion rate as needed)
  const conversionRate = 15300;

  // Calculate the rental rate in Rupiah, round it to the nearest thousand, and format it with commas
  const rentalRatePerDayRupiah = Math.round(
    rentalRatePerDayUSD * conversionRate
  )
    .toLocaleString()
    .replace(/,/g, ".");

  return rentalRatePerDayRupiah;
};

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
  const url = new URL("https://cdn.imagin.studio/getimage");

  const { make, year, model } = car;

  url.searchParams.append(
    "customer",
    process.env.NEXT_PUBLIC_IMAGIN_API_KEY || ""
  );
  url.searchParams.append("make", make);
  url.searchParams.append("modelFamily", model.split(" ")[0]);
  url.searchParams.append("zoomType", "fullscreen");
  url.searchParams.append("modelYear", `${year}`);
  url.searchParams.append("angle", `${angle}`);

  return `${url}`;
};

export const updateSearchParams = (type: string, value: string) => {
  // Create a new URLSearchParams object using the current URL search parameters
  const searchParams = new URLSearchParams(window.location.search);

  // Update or delete the 'model' search parameter based on the 'model' value
  searchParams.set(type, value);

  // Generate the new pathname with the updated search parameters
  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathname;
};
