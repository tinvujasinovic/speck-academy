import React from 'react';
import { SectionWrapper, Title } from './SectionStyle';

const Section = ({
    children,
    title,
    withoutTopPadding
}) => {
    
    return (
        <SectionWrapper withoutTopPadding={withoutTopPadding}>
            {title && <Title>{ title }</Title>}
            { children }
        </SectionWrapper>
    );
}

export default Section;