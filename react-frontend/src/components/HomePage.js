import React, { useState, useEffect } from 'react';


export default function Homepage() {
  const [ events, setEvents ] = useState(false)
  useEffect(() => {
    fetch('https://api.kayzr.com/api/tournaments/upcoming')
    .then(res => res.json())
    .then(res => setEvents(res))
  }, [])
  return (
    <div style={{flex: 1, width: '100%', backgroundColor: 'red', justifyContent: 'center', alignItems: 'center'}}>
      <h1>hey</h1>
    </div>
  )
}