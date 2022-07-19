import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Article from './components/Article';
import Footer from './components/Footer';

function App() {
  const userDetails = { 
    firstName:"David",
    lastName:"Wellins",
    profileImage:"https://images.maariv.co.il/image/upload/f_auto,fl_lossy/c_fill,g_faces:center,h_380,w_500/507605",
    profileBackgroundImage:"https://images.unsplash.com/photo-1604223172843-9541457ba7e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80",
    locatonAccessToken:"loremipsum",
    files:[
        {
          title : "cv",
          content:[
              {
                  title:"Tesla revenue",
                  url:"https://www.statista.com/graphic/1/272120/revenue-of-tesla.jpg"
              },
              {
                  "title":"Tesla stock",
                  "url":"https://media.ycharts.com/charts/3878de7ed1af59e7a4d980c1beff24ad.png"
              }
          ]
        },
        {
          title : "doc_stuff", 
          content:[
              {
                  "title":"Tesla revenue",
                  "url":"https://www.statista.com/graphic/1/272120/revenue-of-tesla.jpg"
              },
              {
                  "title":"Tesla stock",
                  "url":"https://media.ycharts.com/charts/3878de7ed1af59e7a4d980c1beff24ad.png"
              }
          ]
        }
    ],
    themeColorHard:"#3c88c9",
    themeColorSoft:"#90bbdf",
}
  const { firstName, lastName, profileImage, profileBackgroundImage, locatonAccessToken, files, themeColorHard, themeColorSoft } = userDetails;
  
  return (

   
    <div className="identity">
     <Header headerData = {{ firstName, lastName, profileImage, profileBackgroundImage, themeColorHard, themeColorSoft }}/>
     
    <Article articleData={{themeColorSoft}}/>
    <Footer footereData={{themeColorHard}}/>
     
    </div>
  );
}

export default App;
