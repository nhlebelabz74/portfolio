import axios from 'axios';
import { saveAs } from 'file-saver';
import { baseUrl } from '../constants';

const api = axios.create({
    baseURL: baseUrl,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const downloadPdf = () => {
    const pdfPath = '/assets/pdf/Cauchy Integral Formula.pdf';

    axios.get(pdfPath, { responseType: 'blob' })
        .then(response => { 
            const blob = new Blob([response.data], { type: 'application/pdf' }); 
            saveAs(blob, 'Cauchy Integral Formula.pdf');
        })
        .catch(error => { 
            console.error('Error downloading the PDF file:', error)
        });
}

export const sendEmail = async ({ sender_name, sender_email, subject, message, type }) => {
    try {
        const response = await api.post('/send-email', {
            sender_name: sender_name,
            sender_email: sender_email,
            subject: subject,
            message: message,
            type: type
        });

        console.log('Email sent:', response);
        type && alert('Email sent successfully!');
    } catch (error) {
        console.error('Error sending email:', error);
        type && alert('Error sending email. Please check that your email is valid and exists');
    }
}