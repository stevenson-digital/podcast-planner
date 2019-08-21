import React from 'react'
import moment from 'moment'

const Notifications = ({ notifications }) => {
  return (
    <div className="c-Notifications">
      <h3 className="c-Notifications__title">Notifications</h3>
        <ul className="c-Notifications__list">
          {notifications && notifications.map(item => {
            return (
              <li key={item.id} className="c-Notifications__list-item">
                <p>{item.user} {item.content}</p>
                <p>{moment(item.time.toDate()).fromNow()}</p>
              </li>
            )
          })}
        </ul>
    </div>
  )
}

export default Notifications