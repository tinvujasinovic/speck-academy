import React, { useState } from 'react';
import Section from '../../components/Section/Section';
import Table from '../../components/Table/Table';


const Admin = () => {
    const [tableData, setTableData] = useState([]);

    return (
        <Section>
            <Table data={tableData} />
        </Section>
    );
}

export default Admin;