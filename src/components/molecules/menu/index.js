import React, { useReducer, useState } from "react";
import { Card, Modal } from "../../atoms"
import { initalState } from "../../../utils/data"
import ModalAddProduct from "../modalAddProduct";



function reducer(state, action) {
//   if (action.type === 'incremented_age') {
//     return {
//       card: {state.card}
//     };
//   }
  throw Error('Unknown action.');
}


function Menu(params) {

    const [{
        card
    }, dispatch] = useReducer(reducer, initalState);

    console.log("card", card.length);

      const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };


    return (
        <div style={{
            marginTop: 20,
            display: 'flex',
            flexWrap: 'wrap',
            minHeight: 630,
        }}>
            {
                card.map((item, index) => {
                    return (
                        <React.Fragment key={index}>
                            <Card {...item} />
                        </React.Fragment>
                    )
                })
            }
            < Card onClick={openModal} card={card} />
            <Modal
                showModal={showModal}
                closeModal={closeModal}
                modalContent={<p>This is the modal content.</p>}
            >
                <ModalAddProduct setShowModal={setShowModal} />
            </Modal>
        </div>
    )
}

export default Menu