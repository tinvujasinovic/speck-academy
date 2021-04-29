import React from 'react';
import { SectionWrapper, Title } from './SectionStyle';

const Section = ({
    children,
    title,
    withoutTopPadding
}) => {
    const sectionClassName = withoutTopPadding ? 'Section Section_topPadding_none' : 'Section';
    return (
        <SectionWrapper>
            {title && <Title>{ title }</Title>}
            { children }
        </SectionWrapper>
    );
}

export default Section;