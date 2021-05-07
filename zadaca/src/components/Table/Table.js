import React from 'react';
import ButtonAdd from '../ButtonAdd/ButtonAdd';
import Section from '../Section/Section';
import TableRow from '../TableRow/TableRow';
import { TableWrapper, InfoText,Body, Header } from './TableStyle';

const Table = ({
    data
}) => {


    const displayTable = () => {
        return !data ?
            <InfoText>There are no events yet!</InfoText> :
            formTable();
    }

    const formTable = () => {

        return <TableWrapper>
<Header>
    
<TableRow id='ID' title='Title' date='Date' from='From' to='To' capacity='Capacity' company='Company' isHeader={true}/>
</Header>
            <Body>
                <TableRow id='ID' title='Title' date='Date' from='From' to='To' capacity='Capacity' company='Company' />
                <TableRow id='ID' title='Title' date='Date' from='From' to='To' capacity='Capacity' company='Company' />
                <TableRow id='ID' title='Title' date='Date' from='From' to='To' capacity='Capacity' company='Company' />
            </Body>
        </TableWrapper>;
    }

    return (
        <>
            <Section>
                <ButtonAdd text='Add event'></ButtonAdd>
                {displayTable()}
            </Section>
        </>
    );

}

export default Table;