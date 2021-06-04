import React, { useEffect, useState } from "react";
import UserCard from "./UserCard";
import styled from 'styled-components'

const P = styled.p`
    color : #F9D0C8;
    text-align : center;
`;

const styledUserCard = styled.div`

    .userCard{
        animation-name: comingDown;
        animation-duration: 1s;
    }
    

    @keyframes comingDown {
        from {
          transform: translateY(-10%);
          opacity: 0;
        } to {
          transform: translateY(0);
          opacity: 1;
        }
      }

`;

let Result = ({ userData, state }) => {
    switch (state) {
        case "loading": {
            return <P>loading..</P>
            break;
        }
        case "fail": {
            return <P>없는 사용자 입니다. </P>
            break;
        }
        case "success": {
            return (
                <styledUserCard>
                    <UserCard userData={userData} className="userCard" />
                </styledUserCard>
            )
            break;
        }
        case null: {
            return <></>
            break;
        }
    }
}

export default Result;