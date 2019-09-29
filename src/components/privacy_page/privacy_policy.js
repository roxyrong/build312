import React from "react";
import { Document, Page, pdfjs } from 'react-pdf';
import PrivacyPolicyDocument from '../../assets/privacy_policy.pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';


pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


class PrivacyPolicy extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numPages: null,
            pageNumber: 1,
          }
        this.onDocumentLoadSuccess = this.onDocumentLoadSuccess.bind(this)
        this.onDocumentLoadError = this.onDocumentLoadError.bind(this);

    }

    onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
    }

    onDocumentLoadError = (error) => {
        console.log(error);
    }

    goToPrevPage = () => {
        if (this.state.pageNumber > 1) {
            this.setState({pageNumber: this.state.pageNumber - 1})
        }
    };

    goToNextPage = () => {
        if (this.state.pageNumber < this.state.numPages) {
            this.setState({pageNumber: this.state.pageNumber + 1})
        }
    }


    render() {
        const { pageNumber, numPages } = this.state;

        return (
            <div class="container">
                <div class="row justify-content-center">
                    <Document 
                        file={PrivacyPolicyDocument}
                        onLoadSuccess={this.onDocumentLoadSuccess} 
                        onLoadError={this.onDocumentLoadError}>
                        <Page
                            size="A4"
                            width={900}
                            pageNumber={this.state.pageNumber}
                        />
                    </Document>
                </div>
                <div class="row justify-content-center mb-5">
                    <nav class="d-lg-flex flex-lg-row align-items-center">
                        <button onClick={this.goToPrevPage}> {"<Prev"}</button>
                        <button>Page {pageNumber} of {numPages}</button>
                        <button onClick={this.goToNextPage}>{"Next>"}</button>
                    </nav>
                </div>
            </div>
        );
    }
}

export default PrivacyPolicy;
