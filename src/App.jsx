import CardLayout from "./CardLayout.jsx";
import data from "./data.json"

function App() {
  return (
    <>
      <div className={"mx-auto grid min-h-screen max-w-screen-sm place-items-center lg:max-w-screen-lg"}>
          <CardLayout data={data}/>
      </div>
    </>
  );
}

export default App;
