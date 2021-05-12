import React, { useState } from 'react';
import ButtonAdd from '../ButtonAdd/ButtonAdd';
import Section from '../Section/Section';
import TableRow from '../TableRow/TableRow';
import Modal from '../Modal/Modal';
import { TableWrapper, InfoText, Body, Header } from './TableStyle';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Form, FormRow, InputLabel, InputText, InputError, TextArea, FormDoubleRow, InputSelect } from '../../lib/style/generalStyles';
import ButtonSubmit from '../ButtonSubmit/ButtonSubmit';

const Table = () => {
    const [events, setEvents] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const formik = useFormik({
        initialValues: {
            title: '',
            description: '',
            category: '',
            date: '',
            from: '',
            to: '',
            capacity: '',
            company: '',
        },
        validationSchema: Yup.object({
            title: Yup.string()
                .required('Title is required'),
            description: Yup.string()
                .required('Description is required'),
            category: Yup.string()
                .required('Category is required'),
            date: Yup.string()
                .required('Date is required'),
            from: Yup.string()
                .required('Time from is required'),
            to: Yup.string()
                .required('Time until is required'),
            capacity: Yup.number()
                .typeError("Capacity must be a number")
                .required('Capacity is required'),
            company: Yup.string()
                .required('Company is required'),

        }),
        onSubmit: (values, { resetForm }) => {
            const eventsList = events;
            values.id = eventsList.length;
            eventsList.push(values)

            setEvents(eventsList);
            resetForm();
            setIsModalVisible(false);
        }
    });

    const displayTable = () => {
        return events.length === 0 ?
            <InfoText>There are no events yet!</InfoText> :
            formTable();
    }

    const formTable = () => {
        return <TableWrapper>
            <Header>
                <TableRow id='ID' title='Title' date='Date' from='From' to='Until' capacity='Capacity' company='Company' isHeader={true} />
            </Header>
            <Body>
                {createEvents(events)}
            </Body>
        </TableWrapper>;
    }

    const categories = ['#marketing', '#design', '#frontend', '#backend'];
    const companies = ['Speck', 'Five', 'Bornfight', 'Agency 04'];

    const createOptions = (list) => {
        return list.map((option, index) => {
            return <option
                key={index}
                value={option}>
                {option}
            </option>
        })
    };


    const createEvents = (events) => {
        return events.map((event, index) => {
            return <TableRow
                key={index + 1}
                id={index + 1}
                title={event.title}
                date={event.date}
                from={event.from}
                to={event.to}
                capacity={event.capacity}
                company={event.company}
                delete={deleteEvent} />
        })
    };

    const deleteEvent = (id) => {
        const eventsList = [...events];

        eventsList.splice(--id, 1);
        setEvents(eventsList);
    }

    const resetModal = () => {
        setIsModalVisible(false);
        formik.resetForm();
    }

    return (
        <>
            <Section>
                <ButtonAdd text='Add event' callback={() => setIsModalVisible(true)}></ButtonAdd>
                {displayTable()}
                {<Modal show={isModalVisible} callback={null} onClose={resetModal}>
                    <Form onSubmit={formik.handleSubmit}>
                        <FormRow smallerBottomMargin={true}>
                            <InputLabel htmlFor='title'>Title</InputLabel>
                            <InputText id='title' type='text' {...formik.getFieldProps('title')} />
                            {formik.touched.title && formik.errors.title
                                ? <InputError>{formik.errors.title}</InputError>
                                : null}
                        </FormRow>
                        <FormRow smallerBottomMargin={true}>
                            <InputLabel htmlFor='description'>Description</InputLabel>
                            <TextArea id='description' {...formik.getFieldProps('description')} />
                            {formik.touched.description && formik.errors.description
                                ? <InputError>{formik.errors.description}</InputError>
                                : null}
                        </FormRow>
                        <FormDoubleRow>
                            <FormRow smallerBottomMargin={true}>
                                <InputLabel htmlFor='category'>Category</InputLabel>
                                <InputSelect id='category' {...formik.getFieldProps('category')}>
                                    <option key='-1' value='Select...'>Select...</option>
                                    ${createOptions(categories)}
                                </InputSelect>
                                {formik.touched.category && formik.errors.category
                                    ? <InputError>{formik.errors.category}</InputError>
                                    : null}
                            </FormRow>
                            <FormRow smallerBottomMargin={true}>
                                <InputLabel htmlFor='date'>Date</InputLabel>
                                <InputText id='date' type='text' {...formik.getFieldProps('date')} />
                                {formik.touched.date && formik.errors.date
                                    ? <InputError>{formik.errors.date}</InputError>
                                    : null}
                            </FormRow>
                        </FormDoubleRow>
                        <FormDoubleRow>
                            <FormRow smallerBottomMargin={true}>
                                <InputLabel htmlFor='from'>From</InputLabel>
                                <InputText id='from' {...formik.getFieldProps('from')} />
                                {formik.touched.from && formik.errors.from
                                    ? <InputError>{formik.errors.from}</InputError>
                                    : null}
                            </FormRow>
                            <FormRow smallerBottomMargin={true}>
                                <InputLabel htmlFor='to'>Until</InputLabel>
                                <InputText id='to' type='text' {...formik.getFieldProps('to')} />
                                {formik.touched.date && formik.errors.date
                                    ? <InputError>{formik.errors.to}</InputError>
                                    : null}
                            </FormRow>
                        </FormDoubleRow>
                        <FormDoubleRow>
                            <FormRow smallerBottomMargin={true}>
                                <InputLabel htmlFor='capacity'>Capacity</InputLabel>
                                <InputText id='capacity' type='text' {...formik.getFieldProps('capacity')} />
                                {formik.touched.capacity && formik.errors.capacity
                                    ? <InputError>{formik.errors.capacity}</InputError>
                                    : null}
                            </FormRow>
                            <FormRow smallerBottomMargin={true}>
                                <InputLabel htmlFor='company'>Company</InputLabel>
                                <InputSelect id='company' {...formik.getFieldProps('company')}>
                                    <option key='-1' value='Select...'>Select...</option>
                                    ${createOptions(companies)}
                                </InputSelect>
                                {formik.touched.company && formik.errors.company
                                    ? <InputError>{formik.errors.company}</InputError>
                                    : null}
                            </FormRow>
                        </FormDoubleRow>
                        <ButtonSubmit text='Add event' />
                    </Form>
                </Modal>}
            </Section>
        </>
    );

}

export default Table;