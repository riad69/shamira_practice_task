import Finaldata from "./Finaldata";

function Datashow({item}) {
    console.log(item);
    return (
        <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
                {item.client_name}
              </td>
              <td>{item.project_link}</td>
            
        <td>
          {item.project_id ? item.project_id : 'Noid'}
        </td>
        <td>{item.bid_value}-{item.bid_value2}</td>
        <td>{item.actual_value}</td>
        <td>{item.deadline}</td>
        <td>{item.client_name}</td>
        <td>{item.bidding_minutes}min {item.bidding_seconds}sec</td>
        <th>
          {item.status  == 1 ? <button className="btn bg-green-400">Converted to Deal</button> : <button className="btn bg-red-400">Not converted to Deal</button>}
        </th>
      </tr>
    )
}
export default Datashow;