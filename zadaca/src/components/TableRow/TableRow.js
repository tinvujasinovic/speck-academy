import React from 'react';
import { TableRowWrapper, Data, Header, Delete } from './TableRowStyle';

const TableRow = (props) => {

    const formRow = () => {
        return props.isHeader ?
            <TableRowWrapper isHeader={props.isHeader}>
                <Header index={1}>
                    {props.id}
                </Header>
                <Header index={2}>
                    {props.title}
                </Header>
                <Header index={3}>
                    {props.date}
                </Header>
                <Header index={4}>
                    {props.from}
                </Header>
                <Header index={5}>
                    {props.to}
                </Header>
                <Header index={6}>
                    {props.capacity}
                </Header>
                <Header index={7}>
                    {props.company}
                </Header>
                <Header index={8}>
                    {null}
                </Header>
            </TableRowWrapper> :
            <TableRowWrapper>
                <Data index={1}>
                    {props.id}
                </Data>
                <Data index={2}>
                    {props.title}
                </Data>
                <Data index={3}>
                    {props.date}
                </Data>
                <Data index={4}>
                    {props.from}
                </Data>
                <Data index={5}>
                    {props.to}
                </Data>
                <Data index={6}>
                    {props.capacity}
                </Data>
                <Data index={7}>
                    {props.company}
                </Data>
                <Data index={8}>
                    {<Delete onClick={props.delete.bind(this, props.id)}/>}
                </Data>
            </TableRowWrapper>
    }

    return (
        formRow()
    );
}

export default TableRow;