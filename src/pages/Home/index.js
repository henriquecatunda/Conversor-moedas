import React, { useState,useEffect } from 'react'
import { Container, Title, Card, Box, TagMoeda, Tag, TitleMessage } from "./styles";
import Button from '../../components/Button';
import Input from '../../components/Input';
import { Form, Col } from "react-bootstrap"
import api from '../../Api/Api';
export default function Home() {


    const [valor, setValor] = useState('');
    const [moeda, setMoeda] = useState('BRL');
    const [data, setData] = useState('');
    const [dado, setDado] = useState([]);
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const typeMoeda = [
        { type: 'BRL', name: 'Real' },
        { type: 'USD', name: 'Dólar' },
        { type: 'EUR', name: 'Euro' },
    ];

    useEffect(() => {
       setLoading(false);
    }, [moeda, valor]);


    const ConverterMoeda = () => {

        if (valor > 0) {
            var dataAtual = new Date();
            var dia = dataAtual.getDate();
            var mes = (dataAtual.getMonth() + 1);
            var ano = dataAtual.getFullYear();
            var horas = dataAtual.getHours();
            var minutos = dataAtual.getMinutes();
            api.get(`latest/${moeda}`)
                .then((response) => {
                    setDado(response.data);
                    setData(`${dia}/${mes}/${ano} ${horas}:${minutos}`);
                    console.log(response.data);
                    setLoading(true);
                }).catch((error) => console.log(error))
        } else {
            setMessage(
                'Informar um valor valido e diferente de 0!'
            );
        }
    }


    return (
        <Container>

            <Card >
                <Title>
                    Informe o valor e a moeda para conversão
                </Title>

                <Input type="Number" title="Valor" value={valor} onChange={(e) => setValor(e.target.value)} />

                <TitleMessage>
                    {message}
                </TitleMessage>

                <Col sm={12}>
                    <Form.Label>Moeda</Form.Label>
                    <Form.Select
                        placeholder={moeda}
                        as="select"
                        value={moeda}
                        onChange={(e) => setMoeda(e.target.value)} >

                        {typeMoeda && typeMoeda.map((m, i) => <option key={i} value={m.type}>{m.name}</option>)}

                    </Form.Select>
                </Col>

                <Box>
                    <Button title="Converter" onClick={() => ConverterMoeda()} />
                </Box>
            </Card>


            <Card >
                <Title>
                    Resultodo da Conversão - Cotação do dia
                </Title>


                <TagMoeda>
                    {loading !== false ? (
                     <>
                    {moeda !== 'BRL' ? (
                        <Tag>Real: {dado.conversion_rates.BRL * valor}</Tag>
                    ) : ('')}

                    {moeda !== 'USD' ? (
                        <Tag>Dólar: {dado.conversion_rates.USD * valor} </Tag>
                    ) : ('')}

                    {moeda !== 'EUR' ? (
                        <Tag>Euro: {dado.conversion_rates.EUR * valor}</Tag>
                    ) : ('')} 
                    </>  
                    ) : ('loading')}

                    <Tag>Data da consulta: {data}</Tag>

                </TagMoeda>

            </Card>

        </Container>
    );
}
