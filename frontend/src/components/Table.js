import React from 'react';
import { useSelector } from 'react-redux';

const Table = () => {
    const { data } = useSelector((state) => state.mileStoneData);

    return (
        <div className="table-container mb-4" style={{ maxWidth: '850px', margin: '0 auto', borderRadius: '8px', border: '1px solid #ddd', overflow: 'hidden' }}>
            <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
                <table className="table table-striped table-hover rounded" style={{ width: '100%' }}>
                    <thead className="table-light">
                        <tr className='text-center'>
                            <th className='w-20 bg-primary text-light'>Skill Code</th>
                            <th className='w-10 bg-primary text-light'>Level</th>
                            <th className='w-20 bg-primary text-light'>Domain</th>
                            <th className='w-50 bg-primary text-light'>Milestone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.length > 0 ? (
                            data.map((item, index) => (
                                <tr key={index} className='text-center'>
                                    <td>{item['Skill_Code']}</td>
                                    <td>{item.Level}</td>
                                    <td>{item.Domain}</td>
                                    <td>{item.Milestone}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4" className="text-center text-muted">No data available</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Table;
