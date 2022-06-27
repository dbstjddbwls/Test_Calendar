import React, { useState } from 'react'
import FullCalendar, { preventDefault } from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import "./styles/fullcalendar.css";
import Calendar from "./calendar/Calendar"
import interaction from "@fullcalendar/interaction"
import "@fullcalendar/core";
import timeGrid from "@fullcalendar/timegrid"

interface Infos{
  title: string,
  start?: string,
  date?:string
  end? :string,
  classNames: string
}

const info:Infos[] = [
  { title: 'event 1', start: '2022-06-18', end: '2022-06-28', classNames:"indoor week"},
  { title: 'event2event2event2', date: '2022-06-26', classNames:"indoor day"},
  { title: 'event 3', start: '2022-06-22', end: '2022-07-14',classNames:"outdoor week"},
  { title: 'event 4', date: '2022-06-26', classNames:"outdoor day"},
  { title: 'event 5', date: '2022-06-26', classNames:"indoor day"},
  { title: 'event 6', date: '2022-06-26', classNames:"outdoor day"},
  { title: 'event 7', date: '2022-06-26', classNames:"outdoor day"},
  { title: 'event 8', start: '2022-06-26', end: '2022-06-30', classNames:"outdoor week"},
  { title: 'event 9', date: '2022-06-10', classNames:"outdoor day"},
  { title: 'event 10', date: '2022-06-03', classNames:"outdoor day"}
]

export default function App14() {

    const [infos, setInfo] = useState([...info]);
    // const koWeek = ["일","월","화","수","목","금","토"]
    return (
      <>
        <div id='calenderBox' style={{display:"flex",  margin:"0 auto", padding:"60px 5.1758vw"}}>
          <div id="calendar" style={{width:"62.5977vw", height:"100%"}}>
            <FullCalendar
              plugins={[ dayGridPlugin, timeGrid ]}
              initialView="dayGridMonth"
              events={[...infos]}
              contentHeight='auto'
              locale= "ko"
              weekNumbers={false}
              editable={true}
              dayMaxEventRows = {true}
              selectable={true}
              selectMirror={true}
              views={{
                dayGrid: {
                  dayMaxEventRows: 6
                }
              }}
              moreLinkClick={function(arg){
                alert("click!");
                preventDefault(arg)
              }}
              dayCellContent={
                function(arg){
                  return["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31"][arg.date.getDate()]
                }
              }
              titleFormat={{
                month:"long",
                year:"numeric",
                week:"numeric"
              }}

              eventClick= {function(arg) {
                if(window.confirm("일정을 제거하시겠습니까?")){
                  if(arg.el.classList.contains("users")){
                    arg.event.remove()
                  }
                  else{
                    alert("공식일정은 제거할 수 없습니다.")
                  }
                  
                }
              }}
            />
          </div>
          <Calendar infoList={[...infos]} />
        </div>
      </>
    )
}
