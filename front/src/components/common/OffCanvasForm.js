import { Badge, Offcanvas } from 'react-bootstrap';

const OffCanvasForm = ({ show, handleClose }) => {

  return (
    <>
      <Offcanvas show={show} onHide={handleClose} placement={'end'} className="offcanvas-end-show">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title >
            <p className="offcanvas-title"> λ§λ  μ΄λ€</p>
          </Offcanvas.Title>
          <hr />
        </Offcanvas.Header>
        <Offcanvas.Body style={{ textAlign: 'center' }}>
          <p className="offcanvas-body">π κΉμ±μ </p>
          <Badge pill bg="primary">#νλ‘ νΈμλ</Badge>
          <Badge pill bg="dark">#μ΄μλμ₯</Badge>
          <p className="offcanvas-body">π¦ μ΄μ λ―Ό</p>
          <Badge pill bg="primary">#νλ‘ νΈμλ</Badge>
          <Badge pill bg="light" text="dark">#μ’μμμ₯μΈ</Badge>
          <p className="offcanvas-body">π κΉνμ</p>
          <Badge pill bg="warning" text="dark">#λ°±μλ</Badge>
          <Badge pill bg="info">#μ€νΌλλ μ΄μ</Badge>
          <p className="offcanvas-body">π λ°°μ£Όμ</p>
          <Badge pill bg="warning" text="dark">#λ°±μλ</Badge>
          <Badge pill bg="danger">#ν ν°λ§μ€ν°</Badge>
          <p className="offcanvas-body">π° μνμ§</p>
          <Badge pill bg="warning" text="dark">#λ°±μλ</Badge>
          <Badge pill bg="success">#λ°°ν¬λμ¬</Badge>
        </Offcanvas.Body>
      </Offcanvas>
    </>

  )
}

export default OffCanvasForm;