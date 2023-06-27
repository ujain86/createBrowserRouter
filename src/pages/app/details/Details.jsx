import React from "react";
import style from "./Details.module.css";
import coursesData from "../../../data/courses.json";
//Third task: import useParams hook
import {useParams, Link} from 'react-router-dom'

function Details() {

  const params = useParams();

  const data = coursesData.find((item) => item.id === params.id);

  console.log(data);

  return (
    //Third Task: get course id and match it with the data

    
    <div className={style.courses_container}>
      <div className={style.card_container}>
        <div className={style.card_image}>
          <div className={style.image_container}>
            {/*Third task: image source here */}
            <img src={data.img} alt="icons" />
          </div>
        </div>
        <div className={style.card_content}>
          {/*Third Task:  Title and Description here */}
          <h1 className={style.card_title}>{data.title}</h1>
          <p className={style.card_description}>{data.description}</p>
        </div>
      </div>
      {/* Task4: create Link to the Learn Page */}
      <button className={style.button}><Link to="learn">Start Learning</Link></button>
    </div>
  );
}

export default Details;
