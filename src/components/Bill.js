import React, { useState } from "react";
import Payment from "./Payment";
import { Modal } from "react-bootstrap";
import '../style/style.css'

const Bill = () => {
  const [payModalShow, setPayModalShow] = useState(false);
  const [total,subTotal]=useState(0);

//   const [to, setCount] = useState(0);
  const [previousValue, setPreviousValue] = useState(null);
  const increment = () => {
    subTotal((previousValue) => {
      setPreviousValue(previousValue);
      return previousValue + 1;
    });
  };
  const decrement=()=>{
    subTotal((previousValue)=>{
        setPreviousValue(previousValue);
        return previousValue-1;
    })
  }

  const handlePayment=()=>{
    setPayModalShow(true)
  }


  return (
    <>
      <div className="counter" style={{width:'auto'}}>
        <h3>Pay Counter</h3>
        <p
          style={{
            padding: "7px 25px",
            border: "0px solid orange",
            borderRadius: "10px",
            margin: "10px",
            boxShadow: "1px 1px 5px orange",
          }}
        >
          {total}
        </p>
        <span style={{ margin: "10px 0px" }}>
          <button style={{ marginRight: "10px" }} className="btn btn-outline-primary" onClick={()=>increment()}>
            Increment
          </button>
          <button
          onClick={()=>decrement()}
          className="btn btn-outline-danger"
          >Decrement</button>
        </span>
        <button onClick={()=>subTotal(0)} className="btn btn-outline-secondary">Reset</button>
        <button onClick={()=>handlePayment()} className="mt-4 btn btn-outline-success">Paynow</button>
      </div>
      <Modal show={payModalShow} onHide={() => setPayModalShow(false)}>
        {total > 0 ? (
          <Payment amount={total} hide={() => setPayModalShow(false)} />
        ) : null}

        
      </Modal>
    </>
  );
};

export default Bill;
