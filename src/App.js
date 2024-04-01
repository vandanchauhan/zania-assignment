import React, { useEffect, useState } from "react";
import Card from "./components/Card";

const App = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/cards");
        const jsonData = await response.json();

        // Retrieve existing data from local storage
        const storedData = localStorage.getItem("apiData");
        let mergedData = [];

        if (storedData) {
          const parsedStoredData = JSON.parse(storedData);
          mergedData = [...parsedStoredData, ...jsonData];
        } else {
          mergedData = jsonData;
        }

        // Update local state
        setTimeout(() => {
          setCards(mergedData);
        }, 2000);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const storedData = localStorage.getItem("apiData");
    if (storedData) {
      setCards(JSON.parse(storedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "apiData",
      JSON.stringify([
        {
          id: 1,
          type:'title1',
          imageUrl:
            "https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU",
          title: "Title 1",
        },
        {
          id: 2,
          type:'title2',
          imageUrl:
            "https://fastly.picsum.photos/id/1/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4",
          title: "Title 2",
        },
      ])
    );
  }, []);

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

  return (
    <div>
      {cards.length > 0 ? (
        renderRows()
      ) : (
        <div style={{ width: "100%", height: "100vh", display: "flex" }}>
          <p style={{ margin: "auto", fontSize: "30px" }}>Loading cards...</p>
        </div>
      )}
    </div>
  );
};

export default App;
