import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { TableRowWrapper, Data, Header } from './TableRowStyle';

const TableRow = (props) => {

    const formRow = () => {
        return props.isHeader ?
            <TableRowWrapper isHeader={props.isHeader}>
                <Header>
                    {props.id}
                </Header>
                <Header>
                    {props.title}
                </Header>
                <Header>
                    {props.date}
                </Header>
                <Header>
                    {props.from}
                </Header>
                <Header>
                    {props.to}
                </Header>
                <Header>
                    {props.capacity}
                </Header>
                <Header>
                    {props.company}
                </Header>
                <Header>
                    {null}
                </Header>
            </TableRowWrapper> :
            <TableRowWrapper>
                <Data>
                    {props.id}
                </Data>
                <Data>
                    {props.title}
                </Data>
                <Data>
                    {props.date}
                </Data>
                <Data>
                    {props.from}
                </Data>
                <Data>
                    {props.to}
                </Data>
                <Data>
                    {props.capacity}
                </Data>
                <Data>
                    {props.company}
                </Data>
                <Data>
                    {<FaTrashAlt/>}
                </Data>
            </TableRowWrapper>
    }

    return (
        formRow()
    );
}

export default TableRow;