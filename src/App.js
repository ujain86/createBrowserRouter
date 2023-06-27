import Hero from "./pages/app/hero/Hero";
import Nav from "./components/nav/Nav";
import Courses from "./pages/app/courses/Courses";
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import Details from './pages/app/details/Details';
import Learn from "./pages/app/learn/Learn";
import Chapter from "./pages/app/chapter/Chapter";


function App() {


  const router = createBrowserRouter([
    {path: "/", element: <Nav />, children: [
      {path: "/", element: <Hero />},
      {path: "/courses", children: [
        {index: true, element: <Courses />},
        {path: ":id", children: [
          {index: true, element: <Details />},
          {path: "learn", element: <Learn />, children: [
            {path: ":chapterId", element: <Chapter />}
          ]}
        ]},
      ]},
    ]}
  ])
  return (
    <div className="App">
      {/* <Nav />
      <Hero />
      <Courses /> */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
