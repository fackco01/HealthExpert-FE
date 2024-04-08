import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';

const ViewCourseAdmin = () => {
    const [accounts, setAccounts] = useState([]);

    useEffect(() => {
        fetchAccounts();
    }, []);

    const fetchAccounts = async () => {
        try {
            const response = await axios.get('http://20.2.73.15:8173/api/Account/GetListAccount');
            const accountList = response.data;
            const filteredAccounts = accountList.filter((account) => account.roleId === 2);

            setAccounts(filteredAccounts);
        } catch (error) {
            console.error(error);
        }
    };



    return (
        <>
            <div className="header">
                <Header />
            </div>
            <div className="content flex flex-row">
                <div className="w-[100%] h-full">
                    <h1 style={{ textAlign: 'center' }}>Course Admin</h1>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr>
                                <th style={tableHeaderStyle}>Username</th>
                                <th style={tableHeaderStyle}>Fullname</th>
                                <th style={tableHeaderStyle}>Email</th>
                                <th style={tableHeaderStyle}>Phone</th>
                                {/* Add any other account properties as table headers */}
                            </tr>
                        </thead>
                        <tbody>
                            {accounts.map((account) => (
                                <tr key={account.accountId}>
                                    <td style={tableCellStyle}>{account.userName}</td>
                                    <td style={tableCellStyle}>{account.fullName}</td>
                                    <td style={tableCellStyle}>{account.email}</td>
                                    <td style={tableCellStyle}>{account.phone}</td>
                                    {/* Add corresponding table cells for other account properties */}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </>

    );
};

// CSS styles
const tableHeaderStyle = {
    backgroundColor: '#f2f2f2',
    padding: '8px',
    textAlign: 'left',
    fontWeight: 'bold',
};

const tableCellStyle = {
    border: '1px solid #ddd',
    padding: '8px',
};

export default ViewCourseAdmin;