import "./App.css";
import Blog from "./components/Blog";

const App = () => {
  const foods = [
    {
      id: 0,
      category: "อาหารคาว",
      name: "ข้าวผัด",
      info: "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod..",
      image:
        "https://www.nestleprofessional.co.th/sites/default/files/styles/np_recipe_detail/public/2022-04/resive_04062021_430x320px-2_0.png?itok=IVRT5J1c",
    },
    {
      id: 1,
      category: "อาหารหวาน",
      name: "น้ำแข็งใส",
      info: "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis .",
      image:
        "https://d1sag4ddilekf6.azureedge.net/compressed_webp/items/THITE2021030403541825944/detail/menueditor_item_4d359158553a4cc9b2cdc2c0ad38c5e0_1614830209206106815.webp",
    },
  ];

  return (
    <div className="App">
      <h1>โหวตอาหาร</h1>
      <div className="container">
        {foods.map((food) => (
          <Blog
            category={food.category}
            name={food.name}
            info={food.info}
            image={food.image}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
