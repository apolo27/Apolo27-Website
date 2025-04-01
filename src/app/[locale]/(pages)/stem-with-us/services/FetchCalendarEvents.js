import request from "superagent";
import moment from 'moment';

const GOOGLE_CALENDAR_URL = `https://www.googleapis.com/calendar/v3/calendars/${process.env.NEXT_PUBLIC_REACT_APP_CALENDAR_ID}/events?key=${process.env.NEXT_PUBLIC_REACT_APP_API_KEY}`;

export function getEvents(callback) {
  request.get(GOOGLE_CALENDAR_URL).end((err, resp) => {
    if (!err) {
      const events = [];
      JSON.parse(resp.text).items.map(event => {
        console.log(events);
        return events.push({
          title: event.summary,
          htmlLink: event.htmlLink,
          start: moment(event.start.dateTime).toDate(),
          end: moment(event.end.dateTime).toDate(),
          location: event.location
        });
      });
      console.log(events);
      sessionStorage.setItem("events", JSON.stringify(events))
      const storedEventsString = sessionStorage.getItem('events');
      const storedEventsArray = JSON.parse(storedEventsString);
      callback(storedEventsArray)
    }
  });
}