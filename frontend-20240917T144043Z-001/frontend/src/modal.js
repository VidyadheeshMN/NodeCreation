import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const CustomModal = (props) => {
  const { data } = props;
  return (
    <>
      {data.status === "success" ? (
        <Modal
          {...props}
          size='lg'
          aria-labelledby='contained-modal-title-vcenter'
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id='contained-modal-title-vcenter'>
              Graph Information
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              You have created {data.num_nodes} node
              {data.num_nodes > 1 ? "s" : ""} and {data.num_edges} connection
              {data.num_edges > 1 || data.num_edges == 0 ? "s" : ""} between the
              nodes
            </p>
            <p>
              {data.is_dag
                ? "You have created a Directed Acyclic Graph"
                : "You have not created a Directed Acyclic Graph"}
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      ) : (
        <Modal
          {...props}
          size='lg'
          aria-labelledby='contained-modal-title-vcenter'
          centered
        >
          <Modal.Body>
            <p>
              There was a problem while trying to fetch the node related
              information
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
};

export default CustomModal;
