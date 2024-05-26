import React from "react";
import RoomFilter from "./RoomFilter";
import RoomList from "./RoomList";
import { useGlobalContext } from "../context";
import Loading from "./Loading";

const RoomContainer = () => {
  const { loading, sortedRooms, rooms } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <RoomFilter rooms={rooms} />
      <RoomList rooms={sortedRooms} />
    </div>
  );
};

export default RoomContainer;
