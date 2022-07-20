import {Fragment} from 'react';

export default function Table({dataArray}) {
    return (
        <table>
            <tbody>
                {dataArray.map((item, i) => (
                    <Fragment key={i}>
                        <tr>
                            <th scope="row">{item.symptoms.label}</th>
                            <td>{item.symptoms.value}</td>
                        </tr>
                        <tr>
                            <th scope="row">{item.beenDiagnosedBefore.label}</th>
                            <td>{item.beenDiagnosedBefore.value}</td>
                        </tr>
                        <tr>
                            <th scope="row">{item.afterPhysicalTrauma.label}</th>
                            <td>{item.afterPhysicalTrauma.value}</td>
                        </tr>
                        <tr>
                            <th scope="row">{item.afterMentalTrauma.label}</th>
                            <td>{item.afterMentalTrauma.value}</td>
                        </tr>
                        <tr>
                            <th scope="row">{item.frequency.label}</th>
                            <td>{item.frequency.value}</td>
                        </tr>
                        <tr>
                            <th scope="row">{item.when.label}</th>
                            <td>{item.when.value}</td>
                        </tr>
                        <tr>
                            <th scope="row">{item.intensity.label}</th>
                            <td>{item.intensity.value}</td>
                        </tr>
                        <tr>
                            <td className="empty-cell"></td>
                            <td className="empty-cell"></td>
                        </tr>
                    </Fragment>
                ))}
            </tbody>
        </table>
    );
}