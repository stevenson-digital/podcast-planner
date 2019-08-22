import React from 'react'
import dayjs from 'dayjs'

const Notifications = ({ notifications }) => {
  return (
    <div className="c-Notifications">
      <h3 className="c-Notifications__title">Notifications</h3>
        <ul className="c-Notifications__list">
          {notifications && notifications.map(item => {
            return (
              <li key={item.id} className="c-Notifications__list-item">
                <p>{item.user} {item.content}</p>
                <p>{dayjs(item.time.toDate()).format('HH:mm (DD/MM/YYYY)')}</p>
              </li>
            )
          })}
        </ul>
    </div>
  )
}

export default Notifications