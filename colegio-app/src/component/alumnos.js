import React from "react";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table'
import Container from "react-bootstrap/esm/Container";
import { useState, useEffect } from 'react';
import Compañero from "../component/compañero";

function Alumno() {
    const [alumnos, setAlumnos] = useState([])
    useEffect(() => {
        fetch('http://localhost:3030/alumnos')
            .then((response) => {
                return response.json()
            })
            .then((alumnos) => {
                setAlumnos(alumnos)
            })
    }, [])
    
    return (
        <Container fluid>
            <Row>
                <Col className="text-center"><h1>Biblioteca</h1></Col>
            </Row>
            <Row>
                <Table striped>
                    <thead>
                        <th>nombre</th>
                        <th>asignatura</th>
                        <th>edad</th>
                    </thead>
                    <tbody>
                        {alumnos.map((alumno1, index) => (
                            <Compañero Compañero={alumno1} key={index}></Compañero>
                        ))}
                    </tbody>
                </Table>
            </Row>
        </Container>
    )
}
export default Alumno;