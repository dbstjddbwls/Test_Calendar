import React from 'react'

interface Infos{
    title: string,
    start?: string,
    date?:string
    end? :string,
    classNames: string
}

interface cProps{
    infoList:Infos[]
}

function Calendar(props:cProps) {
    return(
        <div style={{
            margin:"0 0 0 30px", 
            width:"24.0234vw",
            background: "#FFFFFF",
            boxShadow: "0px 0.243275px 9.73099px rgba(14, 35, 111, 0.1)", 
            borderRadius:"20px 0 0 20px", 
            padding:"16px 24px",
            height: "88vh",
            position: "fixed",
            right: "5.1758vw"
            }}
            className="calenderList">
            <div>
                {
                    props.infoList.map((el:any, index:number)=>{
                        console.log(el.classNames)
                        return(
                            <div style={{paddingBottom:"20px"}} key={index}>
                                <div>{el.classNames.split(' ').includes("indoor") ? "내부행사" : "외부행사"}</div>
                                <div>{el.date ? el.date : `${el.start} - ${el.end}`}</div>
                                <div>{el.title}</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}


export default Calendar