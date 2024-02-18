import logo from "./logo.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  // Array of objects containing data for each card
  const animalData = [
    {
      animalImg:
        "https://images.unsplash.com/photo-1555169062-013468b47731?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YW5pbWFsfGVufDB8fDB8fHww",
      animalName: "Parrot",
      animalDesc: "This bird likes chillies and also can talk like humans.",
    },
    {
      animalImg:
        "https://images.unsplash.com/photo-1484406566174-9da000fda645?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YW5pbWFsfGVufDB8fDB8fHww",
      animalName: "Deer",
      animalDesc: "Deer Description",
    },
    {
      animalImg:
        "https://plus.unsplash.com/premium_photo-1675715924047-a9cf6c539d9b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YW5pbWFsfGVufDB8fDB8fHww",
      animalName: "Snake",
      animalDesc: "This snake is venomous.",
    },
    {
      animalImg:
        "https://images.unsplash.com/photo-1517849845537-4d257902454a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFuaW1hbHxlbnwwfHwwfHx8MA%3D%3D",
      animalName: "Doggo",
      animalDesc: "This is a blacl dog.",
    },
  ];

  return (
    <div className="App">
      {/* Rendering each card using the map function */}
      {animalData.map((animal, index) => (
        <Card
          key={index}
          animalImg={animal.animalImg}
          animalName={animal.animalName}
          animalDesc={animal.animalDesc}
        />
      ))}
    </div>
  );
}

export default App;
