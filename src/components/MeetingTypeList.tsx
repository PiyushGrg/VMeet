'use client'
import React from 'react'
import HomeCard from './HomeCard'

const MeetingTypeList = () => {
  return (
    <section className='grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4'>
        <HomeCard
        img="/icons/add-meeting.svg"
        title="New Meeting"
        description="Start an instant meeting"
        // handleClick={() => setMeetingState('isInstantMeeting')}
        />

        <HomeCard
            img="/icons/join-meeting.svg"
            title="Join Meeting"
            description="Via invitation link"
            className="bg-blue-1"
            // handleClick={() => setMeetingState('isJoiningMeeting')}
        />

        <HomeCard
            img="/icons/schedule.svg"
            title="Schedule Meeting"
            description="Plan your meeting"
            className="bg-purple-1"
            // handleClick={() => setMeetingState('isScheduleMeeting')}
        />

        <HomeCard
            img="/icons/recordings.svg"
            title="View Recordings"
            description="Check out your recordings"
            className="bg-yellow-1"
            // handleClick={() => router.push('/recordings')}
        />
    </section>
  )
}

export default MeetingTypeList