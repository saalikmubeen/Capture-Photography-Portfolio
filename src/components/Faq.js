import React from 'react';
import styled from 'styled-components';


const Faq = () => {
    return (
        <StyledFaq>
            <h2>Any Questions? <span>FAQ</span></h2>
            <div className="faq-questions">
                <div>
                    <p className="question">How Do I Start?</p>
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi
                            autem accusamus ex laboriosam porro, adipisci quam.
                        </p>
                    </div>
                    <div className="faq-line" />
                </div>
                <div>
                    <p className="question">What Products Do You Offer?</p>
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi
                        autem accusamus ex laboriosam porro, adipisci quam voluptatum
                        magnam placeat corporis.
                        </p>
                    </div>    
                    <div className="faq-line" />
                </div>
                <div>
                    <p className="question">Different Payment Methods</p>
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi
                            autem accusamus ex laboriosam porro, adipisci quam voluptatum
                            magnam placeat corporis.
                        </p>
                    </div>
                    <div className="faq-line" />
                </div>
                <div>
                    <p className="question">Daily Schedule</p>
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi
                            autem accusamus ex laboriosam porro, adipisci quam voluptatum
                            magnam placeat corporis.
                        </p>
                    </div>
                    <div className="faq-line" />
                </div>
            </div>        
        </StyledFaq>
    )
}


const StyledFaq = styled.div`
    min-height: 100vh;
    display: block;
    padding: 5rem 10rem;
    color: white;
    span {
        display: block;
    }

    h2 {
        padding-bottom: 2rem;
        font-weight: lighter;
    }
    .faq-line {
        background: #cccccc;
        height: 0.2rem;
        margin: 2rem 0rem;
        width: 100%;
    }
    .question {
        padding: 1.5rem 0rem;
        cursor: pointer;
        color: white;
        font-size: 1.8rem;
        font-weight: bold;
    }
    .answer {
        padding: 2rem 0rem;
        p {
            padding: 1rem 0rem;
            font-size: 1.1rem;
        }
}
`

export default Faq;