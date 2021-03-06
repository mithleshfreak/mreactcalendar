import React from 'react';
import Prev from '../../assets/left.svg'
import Next from '../../assets/right.svg'

export default function MonthView({onPrev,
                                    onNext,
                                    weekdaysShort,
                                    totalSlots,
                                    displayRow,
                                    displayedEvents,
                                    date,
                                    eventClicked
                                }) {

    let rows = []
    let cells = []

    totalSlots.forEach((row,i) => {
        if(i % 7 !== 0) {
            cells.push(row)
        } else {
            rows.push(cells)
            cells = []
            cells.push(row)
        }
        if(i === totalSlots.length - 1) {
            if(cells.length === 7) {
                rows.push(cells)
            } else {
                let d = 1;
                for(let i = cells.length; i < 7; i++) {
                    cells.push(<td key={`e${d}`} className="calendar-day empty"><span>{d}</span></td>)
                    d = d + 1;
                }
                rows.push(cells)
            }
        }
    })

    const renderDays = () => {
        return weekdaysShort.map(day => (
            <th key={day} className="week-day">
                {day}
            </th>
        ))
    }
    const daysinmonth = rows.map((d,i) => {
        if(i !== 0) {
        return (
        <React.Fragment key={i}>
        <tr>
            {d}
        </tr>
        {displayedEvents.length  > 0 && displayRow === `row-${i}` &&
        <tr>
            <td colSpan="7" className="events-display">
                    {displayedEvents
                        .sort((a,b)=> {
                            if(a.start < b.start || a.end < b.end) return -1;
                            if(a.start > b.start) return 1;
                            return 0
                        })
                        .map((eventData,i) => (<div key={eventData.id} onClick={(event)=>eventClicked({event,data:eventData})} className="displayed-event"><button style={{backgroundColor: eventData.badgeColor ? eventData.badgeColor : '#0051ff' }} className="event-detail-badge"></button>{eventData.title}</div>))}
            </td>
        </tr>
        }
        </React.Fragment>
        )} else return null;
    })
    return (
        <div>
            <div className="_heading">
                <div>
                <button onClick={()=>onPrev()} aria-label="Previous"><img src={Prev} height="25" width="25" alt="prev" /></button>
                </div>
                    <div className="month-name">{date}</div>
                <div>
                <button onClick={()=>onNext()} aria-label="Next"><img src={Next} height="25" width="25" alt="next" /></button>
                </div>
            </div>
            <table className="_calendar_table" cellPadding={0}>
                <thead>
                <tr>
                {renderDays()}
                </tr>
                </thead>
                <tbody>
                {daysinmonth}
                </tbody>
            </table>
        </div>
    )
}