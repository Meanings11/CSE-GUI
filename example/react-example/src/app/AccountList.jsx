import React from 'react'

export const AccountList = (props) => (
    <div>
        <table className="table table-striped table-condensed">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Employer</th>
                    <th>Department</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.accounts.map((a, i) => 
                        <tr key = {i}>
                            <td>{a.name}</td>            
                            <td>{a.email}</td>            
                            <td>{a.isEmployer ? "Yes" : "No"}</td>            
                            <td>{a.departmentId}</td>            
                        </tr>
                    )
                }
            </tbody>
        </table>
    </div>
);

export default AccountList