import React from "react";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table'
import Container from "react-bootstrap/esm/Container";
import { useState, useEffect } from 'react';
import Profesores from "./Profesores";

function Profesor() {
    const [profesores, setProfesores] = useState([])
    useEffect(() => {
        fetch('http://localhost:3030/profesores')
            .then((response) => {
                return response.json()
            })
            .then((profesores) => {
                setProfesores(profesores)
            })
    }, [])
    
    return (
        <Container fluid>
            <Row>
                <Col className="text-center"><h1>Claustro</h1></Col>
            </Row>
            <Row>
                <Table striped>
                    <thead>
                        <th>nombre</th>
                        <th>asignatura</th>
                        <th>edad</th>
                    </thead>
                    <tbody>
                        {profesores.map((Profesor1, index) => (
                            <Profesores Profesores={Profesor1} key={index}></Profesores >
                        ))}
                    </tbody>
                </Table>
            </Row>
        </Container>
    )
}
export default Profesor;