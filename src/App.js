import React, { useState } from "react";
import Card from "./components/Card";

const App = () => {
  const [cards, setCards] = useState([
    {
      id: 1,
      imageUrl:
        "https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU",
      title: "Title 1",
    },
    {
      id: 2,
      imageUrl:
        "https://fastly.picsum.photos/id/1/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4",
      title: "Title 2",
    },
    {
      id: 3,
      imageUrl:
        "https://fastly.picsum.photos/id/2/5000/3333.jpg?hmac=_KDkqQVttXw_nM-RyJfLImIbafFrqLsuGO5YuHqD-qQ",
      title: "Title 3",
    },
    {
      id: 4,
      imageUrl:
        "https://fastly.picsum.photos/id/4/5000/3333.jpg?hmac=ghf06FdmgiD0-G4c9DdNM8RnBIN7BO0-ZGEw47khHP4",
      title: "Title 4",
    },
    {
      id: 5,
      imageUrl:
        "https://fastly.picsum.photos/id/5/5000/3334.jpg?hmac=R_jZuyT1jbcfBlpKFxAb0Q3lof9oJ0kREaxsYV3MgCc",
      title: "Title 5",
    },
    {
      id: 6,
      imageUrl:
        "https://fastly.picsum.photos/id/6/5000/3333.jpg?hmac=pq9FRpg2xkAQ7J9JTrBtyFcp9-qvlu8ycAi7bUHlL7I",
      title: "Title 6",
    },
  ]);

  const handleDragStart = (e, id) => {
    e.dataTransfer.setData("id", id);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, id) => {
    e.preventDefault();
    const draggedId = parseInt(e.dataTransfer.getData("id"));
    const draggedCard = cards.find((card) => card.id === draggedId);
    const droppedCard = cards.find((card) => card.id === id);
    const draggedIndex = cards.indexOf(draggedCard);
    const droppedIndex = cards.indexOf(droppedCard);

    const newCards = [...cards];
    newCards.splice(draggedIndex, 1);
    newCards.splice(droppedIndex, 0, draggedCard);

    setCards(newCards);
  };

  const renderRows = () => {
    const rows = [];
    for (let i = 0; i < cards.length; i += 3) {
      const row = cards.slice(i, i + 3);
      rows.push(
        <div key={i} style={{ display: "flex", width: "100%" }}>
          {row.map((card, index) => (
            <Card
              key={card.id}
              id={card.id}
              imageUrl={card.imageUrl}
              title={card.title}
              handleDragStart={handleDragStart}
              handleDragOver={handleDragOver}
              handleDrop={handleDrop}
            />
          ))}
        </div>
      );
    }
    return rows;
  };

  return <div>{renderRows()}</div>;
};

export default App;
