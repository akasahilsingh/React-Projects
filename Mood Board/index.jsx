export const MoodBoardItem = ({ color, image, description }) => {
  return (
    <div className="mood-board-item" style={{ backgroundColor: color }}>
      <img className="mood-board-image" src={image} />
      <h3 className="mood-board-text">{description}</h3>
    </div>
  );
};

export const MoodBoard = () => {
  const moodBoardContent = [
    {
      id: 1,
      color: "#FF6B6B",
      image: "https://cdn.freecodecamp.org/curriculum/labs/pathway.jpg",
      description: "Pathway Adventure",
    },
    {
      id: 2,
      color: "#4FC3F7",
      image: "https://cdn.freecodecamp.org/curriculum/labs/shore.jpg",
      description: "Relaxing Shore",
    },
    {
      id: 3,
      color: "#81C784",
      image: "https://cdn.freecodecamp.org/curriculum/labs/grass.jpg",
      description: "Fresh Green Grass",
    },
    {
      id: 4,
      color: "#FFB74D",
      image: "https://cdn.freecodecamp.org/curriculum/labs/ship.jpg",
      description: "Exploring the Ship",
    },
    {
      id: 5,
      color: "#4DB6AC",
      image: "https://cdn.freecodecamp.org/curriculum/labs/santorini.jpg",
      description: "Tranquil Santorini",
    },
    {
      id: 6,
      color: "#BDBDBD",
      image: "https://cdn.freecodecamp.org/curriculum/labs/pigeon.jpg",
      description: "Urban Pigeon",
    },
  ];

  return (
    <>
      <h1 className="mood-board-heading">Destination Mood Board</h1>
      <div className="mood-board">
        {moodBoardContent.map(({ id, color, image, description }) => (
          <MoodBoardItem
            key={id}
            color={color}
            image={image}
            description={description}
          />
        ))}
      </div>
    </>
  );
};
