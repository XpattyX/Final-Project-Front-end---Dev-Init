'use client'

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin, { Draggable, DropArg } from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid'

export default function Home() {
  return (
    <div className="border-l-4 border-pink-200 pl-3">
      <FullCalendar
        plugins={[
          dayGridPlugin,
          interactionPlugin,
          timeGridPlugin
        ]}
        />
    </div>
  );
}
