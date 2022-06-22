import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header/Header'
import { useNavigate } from 'react-router-dom'
const ErrorPage = () => {
    const navigate = useNavigate();
    const back = () =>{
        navigate(-1);
        window.scroll({
            top: 0,
            behavior:'auto'
        })
    }
    return (
        <Container>
            <Header />
            <Wrapper>
                <Content>
                    <Error>ERROR 404</Error>
                    <ErrorP>The page you are looking for does not exist</ErrorP>
                    <Button onClick={back}>
                        <BtnText> &larr; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Go Back</BtnText>
                    </Button>
                </Content>
            </Wrapper>
            <Err><span>404</span></Err>
            <AnimationDivFirst>
                <img src='images/avacodoicon.png' alt="" />
            </AnimationDivFirst>
        <Stars>
            <img src="images/starpng.png" alt="" />
        </Stars>
        <Stars className='first'>
            <img src="images/starpng.png" alt="" />
        </Stars>
        <Stars className='second'>
            <img src="images/starpng.png" alt="" />
        </Stars>
        <Stars className='third'>
            <img src="images/starpng.png" alt="" />
        </Stars>
        </Container>
    )
}


const Container = styled.div`
height:110vh;
width:100%;
display:flex;
align-items:flex-end;
background: #31364c;
position:relative;
overflow:hidden;
animation:widgetsW 200ms ease 1;
.first{
    right:40rem;
    top:90%;
}
.second{
    right:85%;
    top:20%;
    animation:bounce 6s ease infinite forwards;
}
.third{
    right:70rem;
    top:80%;
}
`
const Err = styled.div`
height:90vh;
width:80%;
position:absolute;
top:10rem;
display:flex;
align-items:center;
justify-content:center;
z-index:1;
span{
    font-size:60rem;
    color:rgba(0,0,0,0.1);
}
`

const Wrapper = styled.div`
height:calc(110vh - 10rem);
width:1100px;
margin:0 auto;
display:flex;
align-items:center;
`
const Content = styled.div`
height:50vh;
width:60%;
display:flex;
flex-direction:column;
justify-content:space-evenly;
z-index:2;
`
const Error = styled.span`
font-size:2.5rem;
color:var(--greenish-col);
`
const ErrorP = styled.p`
font-size:4.5rem;
color:#fff;
line-height:5.5rem;
font-family:verdana;
font-weight:bolder;
`
const Button = styled.button`
width:20rem;
height:5.5rem;
border:2px solid white;
background:transparent;
display:flex;
align-items:center;
justify-content:space-evenly;
border-radius:4rem;
font-weight:bold;
cursor:pointer;
margin-left:1rem;
transition:all 200ms linear;
&:hover{
    width:22rem;
    margin-left:0rem;
    letter-spacing:2px;
}
`
const BtnText = styled.span`
font-size:2rem;
color:white;
`

const AnimationDivFirst = styled.div`
position:absolute;
height:15rem;
width:15rem;
border-radius:50%;
bottom:12rem;
right:10rem;
animation:bounce 2s ease infinite alternate-reverse;
}
`

const Stars = styled.div`
position:absolute;
height:3rem;
width:3rem;
top:12rem;
right:10rem;
animation:loading 6s ease infinite forwards;
img{
    height:100%;
    width:100%;
    object-fit:cover;
}
`

export default ErrorPage