import react from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation-name: movingCard;
  animation-duration: 1s;
  @keyframes movingCard {
    from {
      transform: translateY(-8%);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

const P = styled.p`
  color: #f9d0c8;
  margin: 0;
  text-shadow: 0px 2.5px 5px rgba(0, 0, 0, 70%);
`;

const Name = styled.p`
  color: #f9d0c8;
  margin: 10px;
  font-weight: 700;
  font-size: 1.2em;
  text-shadow: 0px 2.5px 5px rgba(0, 0, 0, 70%);
`;

const Img = styled.img`
  width: 130px;
  height: 130px;
  background: linear-gradient(#939393, #939393) padding-box,
    linear-gradient(to bottom right, #fbca88, #ef69ad) border-box;
  padding: 5px;
  border: 5px solid transparent;
  border-radius: 500px;
  display: inline-block;
`;

const Row = styled.div`
  display: flex;
  align-items: flex-start;
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px 10px;
`;

const A = styled.a`
  color: #f9d0c8;
  text-decoration: none;
  text-shadow: 0px 2.5px 5px rgba(0, 0, 0, 70%);
  &:hover {
    cursor: pointer;
  }
`;

const MoveGit = styled.a`
  margin: 20px;
  padding: 5px 10px;
  border-radius: 20px;
  color: #6e6e6d;
  background-color: #f9d0c8;
  border: 2px solid #f9d0c8;
  text-decoration: none;
  box-shadow: 0px 10px 15px rgba(0, 0, 0, 25%);
  &:hover {
    cursor: pointer;
    color: #f9d0c8;
    background-color: #6e6e6d;
    border: 2px solid #f9d0c8;
  }
`;

const BioP = styled.p`
  color: #f9d0c8;
  margin: 15px 0px 0px 0px;
  width: 200px;
  text-align: center;
  text-shadow: 0px 2.5px 5px rgba(0, 0, 0, 70%);
`;

const Span = styled.span`
  font-weight: 600;
  font-size: 1.1em;
`;

let UserCard = ({ userData }) => {
  return (
    userData && (
      <>
        <Container>
          <Col>
            <a href={userData.html_url}>
              <Img src={userData.avatar_url} alt=""></Img>
            </a>
            <Name>{userData.name}</Name>
            <Row>
              <Col>
                <P>팔로워</P>
                <Span>
                  <A href={userData.followers_url}>{userData.followers}</A>
                </Span>
              </Col>
              <Col>
                <P>팔로잉</P>
                <Span>
                  <A href={userData.following_url}>{userData.following}</A>
                </Span>
              </Col>
              <Col>
                <P>레포</P>
                <Span>
                  <P>{userData.public_repos}</P>
                </Span>
              </Col>
            </Row>
            <BioP>{userData.bio}</BioP>
          </Col>
          <MoveGit href={userData.html_url}>
            {" "}
            <Span>{userData.login}</Span> 의 깃허브로 이동
          </MoveGit>
        </Container>
      </>
    )
  );
};

export default UserCard;
