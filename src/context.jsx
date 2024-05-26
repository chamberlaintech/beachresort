import React, { useContext, useEffect, useState } from "react";
import items from "./data";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [rooms, setRooms] = useState([]);
  const [sortedRooms, setSortedRooms] = useState([]);
  const [featuredRooms, setFeaturedRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [type, setType] = useState("all");
  const [capacity, setCapacity] = useState(1);
  const [price, setPrice] = useState(0);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [minSize, setMinSize] = useState(0);
  const [maxSize, setMaxSize] = useState(0);
  const [breakfast, setBreakfast] = useState(false);
  const [pets, setPets] = useState(false);

  useEffect(() => {
    // Simulating fetching data from a local source (replace with your own data fetching logic)
    const fetchData = () => {
      try {
        let rooms = formatData(items); // Use your own data or fetch it from another source
        let featuredRooms = rooms.filter((room) => room.featured === true);
        let maxPrice = Math.max(...rooms.map((item) => item.price));
        let maxSize = Math.max(...rooms.map((item) => item.size));
        setRooms(rooms);
        setFeaturedRooms(featuredRooms);
        setSortedRooms(rooms);
        setLoading(false);
        setPrice(maxPrice);
        setMaxPrice(maxPrice);
        setMaxSize(maxSize);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    filterRooms();
  }, [type, capacity, price, minSize, maxSize, breakfast, pets]);

  const formatData = (items) => {
    let tempItems = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((image) => image.fields.file.url);

      let room = { ...item.fields, images, id };

      return room;
    });

    return tempItems;
  };

  const getRoom = (slug) => {
    let tempRooms = [...rooms];
    const room = tempRooms.find((room) => room.slug === slug);
    return room;
  };

  const handleChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    switch (name) {
      case "type":
        setType(value);
        break;
      case "capacity":
        setCapacity(value);
        break;
      case "price":
        setPrice(value);
        break;
      case "minSize":
        setMinSize(value);
        break;
      case "maxSize":
        setMaxSize(value);
        break;
      case "breakfast":
        setBreakfast(value);
        break;
      case "pets":
        setPets(value);
        break;
      default:
        break;
    }
    filterRooms();
  };

  const filterRooms = () => {
    let tempRooms = [...rooms];
    let capacityInt = parseInt(capacity);
    let priceInt = parseInt(price);

    if (type !== "all") {
      tempRooms = tempRooms.filter((room) => room.type === type);
    }
    if (capacityInt !== 1) {
      tempRooms = tempRooms.filter((room) => room.capacity === capacityInt);
    }
    tempRooms = tempRooms.filter((room) => room.price <= priceInt);
    tempRooms = tempRooms.filter(
      (room) => room.size >= minSize && room.size <= maxSize
    );
    if (breakfast) {
      tempRooms = tempRooms.filter((room) => room.breakfast === true);
    }
    if (pets) {
      tempRooms = tempRooms.filter((room) => room.pets === true);
    }

    setSortedRooms(tempRooms);
  };

  return (
    <AppContext.Provider
      value={{
        rooms,
        sortedRooms,
        featuredRooms,
        loading,
        getRoom,
        type,
        capacity,
        price,
        minPrice,
        maxPrice,
        minSize,
        maxSize,
        breakfast,
        pets,
        handleChange,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
