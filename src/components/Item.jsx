import { MdCurrencyRupee } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";

function Item({ item }) {
  return (
    <>
      {item.map((it) =>
        <div className="col-md-4">
          <div className="card">
            <div className="heart"><FaRegHeart /></div>
            <img src={it.img} />
            <card-body>
              <card-title><h6>{it.placename}</h6>
                <p>{it.distance}</p>
                <p>{it.timing}</p>
                <h6>< MdCurrencyRupee />{it.rent}</h6>
              </card-title>

            </card-body>
          </div>
        </div>

      )}
    </>
  )
}
export default Item;