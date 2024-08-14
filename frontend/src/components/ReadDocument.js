import React, { useState } from 'react';

const ReadDocument = () => {
    const [projectId, setProjectId] = useState('');
    const [userId, setUserId] = useState('');
    const [documents, setDocuments] = useState([]);
    const [message, setMessage] = useState('');

    const fetchDocuments = async () => {
        try {
            const payload = `
                <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:doc="http://www.example.org/documentService/">
                    <soapenv:Header/>
                    <soapenv:Body>
                        <doc:getDocumentsByProjectAndUser>
                            <projectId>${projectId}</projectId>
                            <userId>${userId}</userId>
                        </doc:getDocumentsByProjectAndUser>
                    </soapenv:Body>
                </soapenv:Envelope>
            `;

            const response = await fetch('http://localhost:4016/wsdl', {
                method: 'POST',
                headers: {
                    'Content-Type': 'text/xml; charset=utf-8',
                    'SOAPAction': 'getDocumentsByProjectAndUser'
                },
                body: payload
            });

            if (response.ok) {
                const text = await response.text();
                const parser = new DOMParser();
                const xmlDoc = parser.parseFromString(text, 'text/xml');
                const documentNodes = xmlDoc.getElementsByTagName('document');

                const fetchedDocuments = [];
                for (let i = 0; i < documentNodes.length; i++) {
                    const documentNode = documentNodes[i];
                    fetchedDocuments.push({
                        id: documentNode.getElementsByTagName('id')[0].textContent,
                        document_name: documentNode.getElementsByTagName('document_name')[0].textContent,
                        document_content: documentNode.getElementsByTagName('document_content')[0].textContent,
                        user_id: documentNode.getElementsByTagName('user_id')[0].textContent,
                        createdAt: documentNode.getElementsByTagName('createdAt')[0].textContent,
                        updatedAt: documentNode.getElementsByTagName('updatedAt')[0].textContent,
                    });
                }

                setDocuments(fetchedDocuments);
                setMessage('Documents retrieved successfully');
            } else {
                const errorText = await response.text();
                console.error('Error response:', errorText);
                setMessage(`No documents found', ${errorText.message}`);
            }
        } catch (error) {
            console.error('Error fetching documents:', error);
            setMessage(`Error fetching documents: ${error.message}`);
        }
    };

    return (
        <div>
            <h2>Read Documents</h2>
            <div>
                <label>Project ID:</label>
                <input 
                    type="text" 
                    value={projectId} 
                    onChange={(e) => setProjectId(e.target.value)} 
                    required 
                />
            </div>
            <div>
                <label>User ID:</label>
                <input 
                    type="text" 
                    value={userId} 
                    onChange={(e) => setUserId(e.target.value)} 
                    required 
                />
            </div>
            <button onClick={fetchDocuments}>Fetch Documents</button>
            {message && <p>{message}</p>}
            <ul>
                {documents.map(document => (
                    <li key={document.id}>
                        <h3>{document.document_name} (User ID: {document.user_id})</h3>
                        <p>{document.document_content}</p>
                        <small>Created at: {document.createdAt}</small><br />
                        <small>Updated at: {document.updatedAt}</small>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ReadDocument;
