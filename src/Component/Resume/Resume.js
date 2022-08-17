
import React, {useState} from 'react'
import { Document,Page } from 'react-pdf/dist/esm/entry.webpack';
import './Resume.css'
import Resume_pdf from '../pdf/YanXu_Resume.pdf'


const Resume = () => {

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({numPages}){
        setNumPages(numPages);
        setPageNumber(1);
    }

    return (
        <>
            <section className='Resume d_flex' id='resume'>
                <div className='Resume content'>
                    <div className='heading text-center'>
                        <h1>My Resume</h1>
                    </div>

                    <div className='resume-container'>
                        <Document file={Resume_pdf} onLoadSuccess={onDocumentLoadSuccess}>
                            <div className='btn_shadow '>
                                <Page pageNumber={pageNumber} />
                            </div>
                        </Document>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Resume