import styled from 'styled-components';

const StyledContact = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: ${({ width }) => (width < 1050 ? 'column' : 'row')};
    overflow: hidden;
    h3 {
        color: white;
        font-weight: 300;
        margin-bottom: 15px;
    }
    .icon-group {
        text-align: center;
    }
    .icons:not(:first-child) {
        margin-left: 15px;
    }
    form {
        margin-left: ${({ width }) => (width < 1050 ? '0' : '50px')};;
        textarea {
            display: block;
            width: 350px;
            height: 250px;
            padding: 15px 15px;
            border: solid 3px var(--highlight-color);
            border-radius: 5px;
            background-color: transparent;
            resize: none;
            font-size: 14px;
            color: white;

            /* width */
            ::-webkit-scrollbar {
            width: 5px;
            }

            /* Track */
            ::-webkit-scrollbar-track {
                background: rgba(0, 0, 0, 0.1);
                padding-right: 5px;
            }

            /* Handle */
            ::-webkit-scrollbar-thumb {
                background: var(--highlight-color);
            }

            ::placeholder {
                color: white;
            }
        }
        button {
            float: right;
            position: relative;
            z-index: 12;
            background-color: var(--highlight-color);
            color: white;
            padding: 5px 25px;
            border-radius: 5px;
            margin-top: -37px;
            margin-right: 8px;
            font-weight: bold;
            font-size: 16px;
        }
    }
    div {
        position: relative;
    }
    #first {
        margin-top: ${({ width }) => (width < 1050 ? '150px' : '0')};
        margin-bottom: ${({ width }) => (width < 1050 ? '250px' : '0')};
        order: ${({ width }) => (width < 1050 ? 2 : '0')};
        :before {
            content: '';
            position: absolute;
            top: -120px;
            right: ${({ width }) => (width < 1050 ? '-25px' : '-15px')};
            background-image: url('/img/Vector-2.svg');
            background-size: cover;
            width: 123%;
            height: 373%;
            z-index: -3;
        }
    }
    #second {
        margin-top: ${({ width }) => (width < 1050 ? '250px' : '0')};
        order: ${({ width }) => (width < 1050 ? 1 : '0')};
        :before {
            content: '';
            position: absolute;
            top: -100px;
            right: ${({ width }) => (width < 1050 ? '0px' : '-80px')};
            background-image: url('/img/Vector-1.svg');
            background-size: cover;
            width: 123%;
            height: 174%;
            z-index: -2;
          }
    }
`;

export default StyledContact;