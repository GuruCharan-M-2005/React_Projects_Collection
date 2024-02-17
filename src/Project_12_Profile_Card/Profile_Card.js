 import React from 'react'
 import './Profile_Card.css'
 const userData=
 [
    {
        name:"Sam",
        city:"California",
        field:"UI-UX Designer",
        skills:["UI/UX" ,"MongoDB","Javascript","HTML","CSS","Java"],
        online:false,
        profile: "pro12.jpeg"

    },
    {
        name:"Robert",
        city:"San Francisco",
        field:"Senior Software Developer",
        skills:["C" ,"C++","Python","Java","C#","Mysql","HTML","CSS","Javascript"],
        online:true,
        profile: "pro7.jpeg"

    },
    {
        name:"Martin",
        city:"Mexico",
        field:"Full Stack Web Developer",
        skills:["HTML" ,"CSS","Javascript","UI/UX","MongoDB","Java"],
        online:true,
        profile: "pro8.jpeg"

    },
 ]
function User(props)
{
    return (
        <div className='card-container'>
            <span className={props.online ?"pro online" :"pro offline"}>{props.online ?"Online":"Offline"}</span>
            <img src={props.profile}  className="img" alt="user" />
            <h3>{props.name}</h3>
            <h3>{props.city}</h3>
            <p>{props.field}</p>

            <div className='buttons'>
                <button className='primary'>Message</button>
                <button className='primary outline'>Following</button>
            </div>

            <div className='skills'>
                <h6>Skills</h6>
                <ul>
                    {props.skills.map((item,ind)=>(
                        <li key={ind}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>

    );
}
 export default function Profile_Card() {
   return (
    <div className='main-container'>
        {userData.map((item,ind)=>(
            <User key={ind} name={item.name} city={item.city} field={item.field}
            skills={item.skills} online={item.online} profile={item.profile} />
        ))}
    </div>
   )
 }
 