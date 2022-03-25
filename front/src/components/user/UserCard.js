import React from 'react';
import { useNavigate } from "react-router-dom";
import { Card, Row, Button, Col } from "react-bootstrap";
import { MdModeEditOutline } from "react-icons/md";
import UserLike from "./UserLike";

const UserCard = React.forwardRef(({ user, setIsEditing, isEditable, isNetwork }, ref) => {
  const navigate = useNavigate();
  return (
    <>
      {isNetwork ? (
        <Card className="mb-2 ms-3 mr-5 user-card" ref={ref} onClick={() => navigate(`/users/${user.id}`)}>
          <Card.Body>
            <Row className="justify-content-md-center">
              <Card.Img
                style={{ width: "10rem", height: "8.5rem" }}
                className="mb-3 user-card-img"
                src={user?.image}
                alt="회원가입 시 업로드 (AWS 버킷 사용)"
              />
            </Row>
            <Card.Title>
              <Row>
                <Col md="9">
                  {user?.name}
                </Col>
                <Col md="3">
                  {user && <UserLike
                    user={user}
                    isLikable={!isEditable}
                  />}
                </Col>
              </Row>
            </Card.Title>
            <Card.Subtitle className="mb-2 ">{user?.email}</Card.Subtitle>
            <Card.Text>{user?.description}</Card.Text>
          </Card.Body>
        </Card>
      ) : (
        <Card className="mb-2 ms-3 mr-5 ">
          <Card.Body>
            <Row className="justify-content-md-center">
              <Card.Img
                style={{ width: "10rem", height: "8.5rem" }}
                className="mb-3 user-card-img"
                src={user?.image}
                alt="회원가입 시 업로드 (AWS 버킷 사용)"
              />
            </Row>
            <Card.Title>
              <Row>
                <Col md="9">
                  {user?.name}
                </Col>
                <Col md="3">
                  {user && <UserLike
                    user={user}
                    isLikable={!isEditable}
                  />}
                </Col>
              </Row>
            </Card.Title>
            <Card.Subtitle className="mb-2 ">{user?.email}</Card.Subtitle>
            <Card.Text>{user?.description}</Card.Text>

            {isEditable && (
              <Col>
                <Row className="mt-3 text-center text-info">
                  <Col sm={{ span: 20 }}>
                    <Button
                      variant="outline-info"
                      size="sm"
                      onClick={() => setIsEditing(true)}
                      alt="편집 버튼"
                    >
                      <MdModeEditOutline size="24" />
                    </Button>
                  </Col>
                </Row>
              </Col>
            )}
          </Card.Body>
        </Card>
      )}
    </>
  );
});

export default UserCard;
