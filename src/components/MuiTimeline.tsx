import {
    Timeline,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineItem, TimelineOppositeContent,
    TimelineSeparator
} from "@mui/lab";

const MuiTimeline = () => {

    return (
        <Timeline
            // position={'left'}
            position={'alternate'}
        >

            <TimelineItem>
                <TimelineOppositeContent color={'textSecondary'}>
                    16:59
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot/>
                    <TimelineConnector/>
                </TimelineSeparator>
                <TimelineContent>Process one</TimelineContent>
            </TimelineItem>

            <TimelineItem>
                <TimelineOppositeContent color={'textSecondary'}>
                    19:00
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot color={'secondary'} variant={'outlined'} />
                    <TimelineConnector/>
                </TimelineSeparator>
                <TimelineContent>Process two</TimelineContent>
            </TimelineItem>

            <TimelineItem>
                <TimelineOppositeContent color={'textSecondary'}>
                    22:30
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot color={'secondary'} />
                    {/*<TimelineConnector/>*/}
                </TimelineSeparator>
                <TimelineContent>Process tree</TimelineContent>
            </TimelineItem>
        </Timeline>
    );
}

export default MuiTimeline;