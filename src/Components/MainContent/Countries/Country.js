import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ThemeContext } from '../../../App';

function Country({ country }) {
    const themeContext = useContext(ThemeContext)

    return (
        <div className="col l-3 c-12 m-6">
            <Link to={
                `/country/${country.name}`
            } >
                <CountriesItem className={themeContext.valueTheme.theme}>
                    <div className="flag">
                        <img
                            src={country.flag}
                            alt=""
                        />
                    </div>
                    <div className="countries__info">
                        <h3>{country.name}</h3>
                        <div>
                            Population:
                            <span>{country.population}</span>
                        </div>
                        <div>
                            Region:
                            <span>{country.region}</span>
                        </div>
                        <div>
                            Capotal:
                            <span>{country.capital}</span>
                        </div>
                    </div>
                </CountriesItem>
            </Link>
        </div>
    );
}

export default Country;
const CountriesItem = styled.div`
            filter       : brightness(1);
            overflow     : hidden;
            border-radius: 4px;
            margin-top   : 12px;
            user-select  : none;
            box-shadow   : var(--boxShadow);
            opacity      : 1 ;

            &:hover {
                filter : brightness(0.9);
    }

            &:hover img {
                transform: scale(1.1);
    }

            .flag {
            height    : 160px;
            width     : 100%;
            overflow  : hidden;
            display   : block;
            box-shadow: var(--boxShadow);

            img {
                height    : 100%;
            width     : 100%;
            display   : block;
            object-fit: cover;
            transition: all 0.2s linear;
            overflow  : hidden;
        }
    }

            .countries__info {
                padding: 16px 16px;

            h3 {
                font - size  : 24px;
            margin     : 16px 0px;
            font-weight: bold;
            height     : 50px;
        }

            div {
                font - size  : 18px;
            font-weight: 700;
            margin     : 4px 0;

            span {
                font - weight: 400;
            margin-left: 12px;
            }
        }
    }`