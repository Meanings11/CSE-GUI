import React from 'react';
import {Link} from "react-router-dom";

export const AccountList = (props) => (
    <div>
        <table className="table table-striped table-condensed">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Employee</th>
                    <th>Department</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.accounts.map((a, i) =>
                        <tr key={i}>
                            <Link to={'/edit/${a.id}'}>{ a.name }</Link>
                            <td>{ a.email }</td>
                            <td>{ a.isEmployee ? "Y" : "N" }</td>
                            <td>{ a.departmentId }</td>
                            <td>
                                <button className="btn btn-sm btn-danger"
                                    onClick={e=>props.onDelete(e.id)}>
                                    <i className="fa fa-trash"></i>
                                </button>
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    </div>
);

export default AccountList;
