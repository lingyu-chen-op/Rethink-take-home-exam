import React from 'react';
import countries from './Sample_Data';
import './App.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default class AutoCompletedSearch extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            results: [],
            text: ''
        }
    }

    onTextChange = (e) => {
        const value = e.target.value;
        let results = [];
        if (value.length > 0) {
            const regex = new RegExp(`^${value}`, 'i');
            results = countries.sort().filter(v => regex.test(v))
        }

        this.setState(() => ({
            results,
            text: value
        }))
    }

    selectedText(value) {
        this.setState(() => ({
            text: value,
            results: [],
        }))
    }

    renderresults = () => {
        let { results } = this.state;
        if (results.length === 0) {
            return null;
        }
        return (
            <ul >
                {
                    results.map((item, index) => (<li key={index} onClick={() => this.selectedText(item)}>{item}</li>))
                }
            </ul>
        );
    }

    render() {
        const { text, results } = this.state;
        return (
            <Container>
                <Row className="show-grid">
                    <Col xs={1} md={4}></Col>
                    <Col xs={6} md={4}>
                        <div id="notebooks">
                            <h4>Auto Completed Search</h4>
                            <input id="query" type="text" class="form-control" onChange={this.onTextChange} value={text} />
                            {this.renderresults()}
                            <span style={{ "margin-top": "20px" }}> Number of Results: {results.length}</span>
                        </div>
                    </Col>
                    <Col xs={1} md={4}></Col>
                </Row>
            </Container>
        );
    }

}