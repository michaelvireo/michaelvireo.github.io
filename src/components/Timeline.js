import React from 'react';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { ReactComponent as WorkIcon } from '../assets/icons/work.svg';
import { ReactComponent as SchoolIcon } from '../assets/icons/school.svg';
import { ReactComponent as StarIcon } from '../assets/icons/star.svg';

export default function Home() {
    const typeSchool = 'school';
    const typeWork = 'work';
    const typeStar = 'star';
    const timelineData = [
        {
            id: 0,
            date: '2023',
            title: 'University of Central Florida - Orlando, FL',
            subtitle: 'B.S. Computer Science',
            type: typeSchool,
        },
        {
            id: 1,
            date: 'Feb 2023 - Nov 2023',
            title: 'United States Army Reserve - Hybrid',
            subtitle: 'Software Engineer',
            type: typeWork,
        },
        {
            id: 2,
            date: '2022',
            title: 'University of Central Florida - Orlando, FL',
            subtitle: 'B.S. Industrial Engineering (Valedictorian)',
            type: typeStar,
        },
        {
            id: 3,
            date: 'Jan 2022 - May 2022',
            title: 'Regal Boats - Orlando, FL',
            subtitle: 'Quality Engineer',
            type: typeWork,
        },
        {
            id: 4,
            date: 'Jun 2021 - Jul 2021',
            title: 'U.S. Department of Homeland Security - Remote',
            subtitle: 'Operations Research Intern',
            type: typeWork,
        },
        {
            id: 5,
            date: 'Jan 2020 - Apr 2021',
            title: 'University of Central Florida - Orlando, FL',
            subtitle: 'Instruction Leader',
            type: typeWork,
        },
    ];

    return (
        <VerticalTimeline
            className="vertical-timeline-container"
            animate={false}
            lineColor="#000"
        >
            {timelineData.map(item => {
                let icon;

                if (item.type === typeWork) {
                    icon = <WorkIcon />;
                } else if (item.type === typeSchool) {
                    icon = <SchoolIcon />;
                } else {
                    icon = <StarIcon />;
                }

                return (
                    <VerticalTimelineElement
                        id={item.id}
                        key={item.id}
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#aaa', color: '#000' }}
                        contentArrowStyle={{ borderRight: '7px solid #aaa' }}
                        date={item.date}
                        iconStyle={{ background: '#aaa', border: '#000' }}
                        icon={icon}
                    >
                        <h3 className="vertical-timeline-element-title">{item.title}</h3>
                        <h4 className="vertical-timeline-element-subtitle">{item.subtitle}</h4>
                    </VerticalTimelineElement>
                );
            })}
            <VerticalTimelineElement
                id="vertical-timeline-icon-star"
                iconStyle={{ background: '#aaa', border: '#000' }}
                icon={<StarIcon />}
            />
        </VerticalTimeline>
    );
}
