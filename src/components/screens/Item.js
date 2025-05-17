import React from "react";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import products from "../../data/products.json";
import QuickView from "../../assets/images/Quick View.svg";
import Exclusive from "../../assets/images/Exclusive.svg";
import Search from "../../assets/images/search.svg";
import Wishlist from "../../assets/images/wishlist.svg";
import Cart from "../../assets/images/Cart.svg";
import Send from "../../assets/images/send.svg";
import Facebook from "../../assets/images/facebook.svg";
import Twitter from "../../assets/images/twitter.svg";
import Instagram from "../../assets/images/icon-instagram.svg";
import LinkedIn from "../../assets/images/Icon-Linkedin.svg";
import Vector from "../../assets/images/Vector.svg";
import Vector1 from "../../assets/images/Vector (1).svg";
import StarHalf from "../../assets/images/star-half-filled.svg";
import Return from "../../assets/images/Icon-return.svg";
import IconDelivery from "../../assets/images/icon-delivery.svg";
import Rectangle from "../../assets/images/Rectangle 18.svg";


export default function Item() {
    const navigate = useNavigate();
    const location = useLocation();
    const product = location.state?.product;

    const handleClick = (product) => {
        navigate("/item", { state: { product } });
    };
    const realtedItems = products.filter(
        (produc) => produc.category === product.category
    );
    return (
        <>
            <DivTop className="top" style={styled.divTop}>
                <DivText className="text">
                    <DivTextP>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</DivTextP>
                    <DivTextButton>ShopNow</DivTextButton>
                </DivText>
                <DivLang className="lang">
                    <DivLangH5>English</DivLangH5>
                    <DivLangImg src={require("../../assets/images/Vector.png")} />
                </DivLang>
            </DivTop>
            <Header>
                <h1>
                    <a href="#">
                        <HeaderImg src={Exclusive} alt="logo"/>
                    </a>
                </h1>
                <nav>
                    <HeaderNavUl>
                        <li><HeaderNavUlLiA href="#" onClick={() => navigate('/')}>Home</HeaderNavUlLiA></li>
                        <li><HeaderNavUlLiA href="#">Contact</HeaderNavUlLiA></li>
                        <li><HeaderNavUlLiA href="#">About</HeaderNavUlLiA></li>
                        <li><HeaderNavUlLiA href="#">Sign Up</HeaderNavUlLiA></li>
                    </HeaderNavUl>
                </nav>
                <HeaderUl>
                    <li>
                        <HeaderUlForm className="form">
                            <HeaderUlFormInput type="text" placeholder="What are you looking for?" id="input"/>
                            <img src={Search} alt=""/>
                        </HeaderUlForm>
                    </li>
                    <li><a href=""><img src={Wishlist} alt=""/></a></li>
                    <li><a href=""><img src={Cart} alt=""/></a></li>
                </HeaderUl>
            </Header>
            <Itemm className="item">
                <Wrapper className="wrapper" id="ite">
                    <ItemmHeading className="heading">
                        <ItemmHeadingHome id="home">Home / {product.category} / </ItemmHeadingHome>
                        <ItemmHeadingBlack id="black">{product.title}</ItemmHeadingBlack>
                    </ItemmHeading>
                    <ItemmFlex className="flex">
                        <ItemmFlexLeft className="left">
                            <img src={require(`../../assets/images/${product.src}`)} alt=""/>
                        </ItemmFlexLeft>
                        <ItemmFlexRight className="right">
                            <ItemmFlexRightTitle id="title">{product.title}</ItemmFlexRightTitle>
                            <ItemmFlexRightText className="text">
                                {product.textstar && <div className="star">
                                    {product.textstar.at(0) == "0" && <img src={Vector} style={{marginRight: "5px",}}/>}
                                    {product.textstar.at(1) == "0" && <img src={Vector} style={{marginRight: "5px",}}/>}
                                    {product.textstar.at(1) == "1" && <img src={StarHalf} style={{marginRight: "5px",}}/>}
                                    {product.textstar.at(1) == "2" && <img src={Vector1} style={{marginRight: "5px",}}/>}
                                    {product.textstar.at(2) == "0" && <img src={Vector} style={{marginRight: "5px",}}/>}
                                    {product.textstar.at(2) == "1" && <img src={StarHalf} style={{marginRight: "5px",}}/>}
                                    {product.textstar.at(2) == "2" && <img src={Vector1} style={{marginRight: "5px",}}/>}
                                    {product.textstar.at(3) == "0" && <img src={Vector} style={{marginRight: "5px",}}/>}
                                    {product.textstar.at(3) == "1" && <img src={StarHalf} style={{marginRight: "5px",}}/>}
                                    {product.textstar.at(3) == "2" && <img src={Vector1} style={{marginRight: "5px",}}/>}
                                    {product.textstar.at(4) == "0" && <img src={Vector} style={{marginRight: "5px",}}/>}
                                    {product.textstar.at(4) == "1" && <img src={StarHalf} style={{marginRight: "5px",}}/>}
                                    {product.textstar.at(4) == "2" && <img src={Vector1} style={{marginRight: "5px",}}/>}
                                </div>}
                                <ItemmFlexRightTextGrey className="grey">({product.review} Reviews) |</ItemmFlexRightTextGrey>
                                <ItemmFlexRightTextDif className="dif">In Stock</ItemmFlexRightTextDif>
                            </ItemmFlexRightText>
                            <ItemmFlexRightPrice id="price">{product.price}</ItemmFlexRightPrice>
                            <p id="p">{product.p}</p>
                            <hr/>
                            <ItemmFlexRightDots className="dots">
                                <ItemmFlexRightDotsH4>Colours: </ItemmFlexRightDotsH4>
                                <ItemmFlexRightDotsColor className="color" style={{background: `${product.color}`,}}></ItemmFlexRightDotsColor>
                                <ItemmFlexRightDotsRed className="red"></ItemmFlexRightDotsRed>
                            </ItemmFlexRightDots>
                            <ItemmFlexRightTop className="top">
                                <ItemmFlexRightTopImg src={IconDelivery} alt=""/>
                                <div className="content">
                                    <ItemmFlexRightTopContentH5>Free Delivery</ItemmFlexRightTopContentH5>
                                    <ItemmFlexRightTopContentH6>Enter your postal code for Delivery Availability</ItemmFlexRightTopContentH6>
                                </div>
                            </ItemmFlexRightTop>
                            <ItemmFlexRightTop className="top" style={{borderTop: "none",borderTopRightRadius: "0px",borderTopLeftRadius: "0px",borderBottomRightRadius: "5px",borderBottomLeftRadius: "5px"}}>
                                <ItemmFlexRightTopImg src={Return} alt=""/>
                                <div className="content">
                                    <ItemmFlexRightTopContentH5>Return Delivery</ItemmFlexRightTopContentH5>
                                    <ItemmFlexRightTopContentH6>Free 30 Days Delivery Returns. Details</ItemmFlexRightTopContentH6>
                                </div>
                            </ItemmFlexRightTop>
                        </ItemmFlexRight>
                    </ItemmFlex>
                </Wrapper>
            </Itemm>
            <Related className="related">
                <Wrapper className="wrapper">
                    <RelatedTitle className="title">
                        <RelatedTitleImg src={Rectangle} alt=""/>
                        <RelatedTitleH5>Related Item</RelatedTitleH5>
                    </RelatedTitle>
                    <RelatedGrid className="grid" id="rel">
                        {realtedItems.map((product, index) => (
                            <ProductGridBoxa key={index} className="boxa" onClick={() => handleClick(product)}>
                                <ProductGridBoxaCart className="cart">
                                    <ProductGridBoxaCartImg src={require(`../../assets/images/${product.src}`)} alt="" className="img"/>
                                    {}
                                    {product.new && <ProductGridBoxaCartNew>New</ProductGridBoxaCartNew>}
                                    {product.off && <ProductGridBoxaCartOff>{product.off}</ProductGridBoxaCartOff>}
                                    <ProductGridBoxaCartIcon className="icon">
                                        <img src={Wishlist} alt=""/>
                                    </ProductGridBoxaCartIcon>
                                    <ProductGridBoxaCartIcon1 className="icon1">
                                        <img src={QuickView} alt=""/>
                                    </ProductGridBoxaCartIcon1>
                                    <ProductGridBoxaCartCart className="cart">Add To Cart</ProductGridBoxaCartCart>
                                </ProductGridBoxaCart>
                                <ProductGridBoxaH5>{product.title}</ProductGridBoxaH5>
                                <ProductGridBoxaText>
                                    <ProductGridBoxaTextPrice>{product.price}</ProductGridBoxaTextPrice>
                                    {product.textstrike && <ProductGridBoxaTextStrike>{product.textstrike}</ProductGridBoxaTextStrike>}
                                    {product.textstar && <div className="star">
                                        {product.textstar.at(0) == "0" && <img src={Vector} style={{marginRight: "5px",}}/>}
                                        {product.textstar.at(1) == "0" && <img src={Vector} style={{marginRight: "5px",}}/>}
                                        {product.textstar.at(1) == "1" && <img src={StarHalf} style={{marginRight: "5px",}}/>}
                                        {product.textstar.at(1) == "2" && <img src={Vector1} style={{marginRight: "5px",}}/>}
                                        {product.textstar.at(2) == "0" && <img src={Vector} style={{marginRight: "5px",}}/>}
                                        {product.textstar.at(2) == "1" && <img src={StarHalf} style={{marginRight: "5px",}}/>}
                                        {product.textstar.at(2) == "2" && <img src={Vector1} style={{marginRight: "5px",}}/>}
                                        {product.textstar.at(3) == "0" && <img src={Vector} style={{marginRight: "5px",}}/>}
                                        {product.textstar.at(3) == "1" && <img src={StarHalf} style={{marginRight: "5px",}}/>}
                                        {product.textstar.at(3) == "2" && <img src={Vector1} style={{marginRight: "5px",}}/>}
                                        {product.textstar.at(4) == "0" && <img src={Vector} style={{marginRight: "5px",}}/>}
                                        {product.textstar.at(4) == "1" && <img src={StarHalf} style={{marginRight: "5px",}}/>}
                                        {product.textstar.at(4) == "2" && <img src={Vector1} style={{marginRight: "5px",}}/>}
                                    </div>}
                                    {product.textgrey && <ProductGridBoxaTextGrey>({product.textgrey})</ProductGridBoxaTextGrey>}
                                </ProductGridBoxaText>
                                <ProductGridBoxaTexts>
                                    {product.textsstar && <div className="star" style={{display: "block",}}>
                                        {product.textsstar.at(0) == "0" && <img src={Vector} style={{marginRight: "5px",}}/>}
                                        {product.textsstar.at(1) == "0" && <img src={Vector} style={{marginRight: "5px",}}/>}
                                        {product.textsstar.at(1) == "1" && <img src={StarHalf} style={{marginRight: "5px",}}/>}
                                        {product.textsstar.at(1) == "2" && <img src={Vector1} style={{marginRight: "5px",}}/>}
                                        {product.textsstar.at(2) == "0" && <img src={Vector} style={{marginRight: "5px",}}/>}
                                        {product.textsstar.at(2) == "1" && <img src={StarHalf} style={{marginRight: "5px",}}/>}
                                        {product.textsstar.at(2) == "2" && <img src={Vector1} style={{marginRight: "5px",}}/>}
                                        {product.textsstar.at(3) == "0" && <img src={Vector} style={{marginRight: "5px",}}/>}
                                        {product.textsstar.at(3) == "1" && <img src={StarHalf} style={{marginRight: "5px",}}/>}
                                        {product.textsstar.at(3) == "2" && <img src={Vector1} style={{marginRight: "5px",}}/>}
                                        {product.textsstar.at(4) == "0" && <img src={Vector} style={{marginRight: "5px",}}/>}
                                        {product.textsstar.at(4) == "1" && <img src={StarHalf} style={{marginRight: "5px",}}/>}
                                        {product.textsstar.at(4) == "2" && <img src={Vector1} style={{marginRight: "5px",}}/>}
                                    </div>}
                                    {product.textsgrey && <ProductGridBoxaTextGrey>({product.textsgrey})</ProductGridBoxaTextGrey>}
                                </ProductGridBoxaTexts>
                                {product.dotscolor && <ProductGridBoxaDots>
                                    <ProductGridBoxaDotsColor style={{background: `${product.dotscolor}`,}}></ProductGridBoxaDotsColor>
                                    <ProductGridBoxaDotsDot></ProductGridBoxaDotsDot>
                                </ProductGridBoxaDots>}
                            </ProductGridBoxa>
                        ))}
                    </RelatedGrid>
                </Wrapper>
            </Related>
            <Footer className="footer">
                <Wrapper className="wrapper">
                    <FooterFlex className="flex">
                        <div className="box">
                            <FooterFlexBoxH3>Exclusive</FooterFlexBoxH3>
                            <FooterFlexBoxH4>Subscribe</FooterFlexBoxH4>
                            <FooterFlexBoxH5>Get 10% off your first order</FooterFlexBoxH5>
                            <FooterFlexBoxForm className="form">
                                <FooterFlexBoxFormInput type="email" placeholder="Enter your email"/>
                                <img src={Send} alt=""/>
                            </FooterFlexBoxForm>
                        </div>
                        <div className="box">
                            <FooterFlexBoxH4>Support</FooterFlexBoxH4>
                            <FooterFlexBoxUl>
                                <FooterFlexBoxUlLi>
                                    <FooterFlexBoxUlLiA href="#">111 Bijoy sarani, Dhaka,<br/>DH 1515, Bangladesh.</FooterFlexBoxUlLiA>
                                </FooterFlexBoxUlLi>
                                <FooterFlexBoxUlLi><FooterFlexBoxUlLiA href="#">exclusive@gmail.com</FooterFlexBoxUlLiA></FooterFlexBoxUlLi>
                                <FooterFlexBoxUlLi><FooterFlexBoxUlLiA href="#">+88015-88888-9999</FooterFlexBoxUlLiA></FooterFlexBoxUlLi>
                            </FooterFlexBoxUl>
                        </div>
                        <div className="box">
                            <FooterFlexBoxH4>Account</FooterFlexBoxH4>
                            <FooterFlexBoxUl>
                                <FooterFlexBoxUlLi><FooterFlexBoxUlLiA href="#">My Account</FooterFlexBoxUlLiA></FooterFlexBoxUlLi>
                                <FooterFlexBoxUlLi><FooterFlexBoxUlLiA href="#">Login / Register</FooterFlexBoxUlLiA></FooterFlexBoxUlLi>
                                <FooterFlexBoxUlLi><FooterFlexBoxUlLiA href="#">Cart</FooterFlexBoxUlLiA></FooterFlexBoxUlLi>
                                <FooterFlexBoxUlLi><FooterFlexBoxUlLiA href="#">Wishlist</FooterFlexBoxUlLiA></FooterFlexBoxUlLi>
                                <FooterFlexBoxUlLi><FooterFlexBoxUlLiA href="#">Shop</FooterFlexBoxUlLiA></FooterFlexBoxUlLi>
                            </FooterFlexBoxUl>
                        </div>
                        <div className="box">
                            <FooterFlexBoxH4>Quick Link</FooterFlexBoxH4>
                            <FooterFlexBoxUl>
                                <FooterFlexBoxUlLi><FooterFlexBoxUlLiA href="#">Privacy Policy</FooterFlexBoxUlLiA></FooterFlexBoxUlLi>
                                <FooterFlexBoxUlLi><FooterFlexBoxUlLiA href="#">Terms Of Use</FooterFlexBoxUlLiA></FooterFlexBoxUlLi>
                                <FooterFlexBoxUlLi><FooterFlexBoxUlLiA href="#">FAQ</FooterFlexBoxUlLiA></FooterFlexBoxUlLi>
                                <FooterFlexBoxUlLi><FooterFlexBoxUlLiA href="#">Contact</FooterFlexBoxUlLiA></FooterFlexBoxUlLi>
                            </FooterFlexBoxUl>
                        </div>
                        <div className="box">
                            <FooterFlexBoxH4>Download App</FooterFlexBoxH4>
                            <FooterFlexBoxH6>Save $3 with App New User Only</FooterFlexBoxH6>
                            <img src={require("../../assets/images/app_dowlload.png")} alt=""/>
                            <FooterFlexBoxIcons className="icons">
                                <img src={Facebook} alt="facebook"/>
                                <img src={Twitter} alt="twitter"/>
                                <img src={Instagram} alt="instagram"/>
                                <img src={LinkedIn} alt="linkedin"/>
                            </FooterFlexBoxIcons>
                        </div>
                    </FooterFlex>
                    <FooterCo className="co">© Copyright Rimel 2022. All right reserved</FooterCo>
                </Wrapper>
            </Footer>
        </>
    )
}

const DivTop = styled.div `
    background: #000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 87%;
    padding-left: 6.5%;
    padding-right: 6.5%;
    height: 50px;
`
const DivText = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`
const DivTextP = styled.p `
    font-family: "poppins";
    font-weight: 400;
    color: #fafafa;
    font-size: 14px;
    margin-right: 9px;
`
const DivTextButton = styled.button `
    background: none;
    border: none;
    color: #fafafa;
    font-family: "poppins";
    font-weight: 600;
    font-size: 14px;
    text-decoration-line: underline;
    cursor: pointer;
`
const DivLang = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`
const DivLangH5 = styled.h5 `
    font-family: "poppins";
    font-weight: 400;
    font-size: 14px;
    color: #fafafa;
    margin-right: 9px;
`
const DivLangImg = styled.img `
    width: 15px;
`
const Header = styled.header `
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 90px;
    padding-right: 90px;
    padding-top: 13px;
    padding-bottom: 13px;
    border-bottom: 0.5px solid #99999999;
`
const HeaderImg = styled.img `
    width: 90%;
    margin: 0 auto;
`
const HeaderNavUl = styled.ul `
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 48px;
`
const HeaderNavUlLiA = styled.a `
    font-family: "poppins";
    color: #000;
    font-size: 16px;
    &:hover {
        border-bottom: 2px solid #999;
    }
`
const HeaderUl = styled.ul `
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
`
const HeaderUlForm = styled.div `
    width: 243px;
    height: 38px;
    background: #f5f5f5;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 34px;
    padding: 7px;
    padding-left: 27px;
    padding-right: 17px;
`
const HeaderUlFormInput = styled.input `
    outline: none;
    margin-right: 10px;
    border: none;
    background: none;
`
const Wrapper = styled.section `
    width: 87%;
    margin: 0 auto;
`
const Itemm = styled.section `
    height: auto;
`
const ItemmHeading = styled.div`
    display: flex;
    align-items: center;
    justify-content: left;
    margin-top: 50px;
    margin-bottom: 50px;
`
const ItemmHeadingHome = styled.h4 `
    opacity: 50%;
    font-family: "poppins";
    font-size: 20px;
    font-weight: 400;
    display: inline;
    margin-right: 5px;
`
const ItemmHeadingBlack = styled.h4 `
    opacity: 100%;
    font-family: "poppins";
    display: inline;
`
const ItemmFlex = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 50px;
`
const ItemmFlexLeft = styled.div `
    background: #f5f5f5;
    width: 700px;
    height: 600px;
    border-radius: 5px;
    padding: 33px;
    display: flex;
    align-items: center;
    justify-content: center;
`
const ItemmFlexRight = styled.div `
    width: 400px;
`
const ItemmFlexRightTitle = styled.h1 `
    font-weight: 600;
    font-size: 24px;
`
const ItemmFlexRightText = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    width: 300px;
`
const ItemmFlexRightTextGrey = styled.h5 `
    font-family: "poppins";
    font-weight: 400;
    font-size: 14px;
    opacity: 50%;
`
const ItemmFlexRightTextDif = styled.h5 `
    color: #0f6;
    font-weight: 500;
`
const ItemmFlexRightPrice = styled.h1 `
    font-weight: 400;
    font-size: 24px;
    margin-top: -11px;
    margin-bottom: 21px;
`
const ItemmFlexRightDots = styled.div `
    display: flex;
    align-items: center;
    justify-content: start;
`
const ItemmFlexRightDotsH4 = styled.h4 `
    font-weight: 400;
    font-size: 20px;
    margin-right: 27px;
`
const ItemmFlexRightDotsColor = styled.div `
    width: 14px;
    height: 14px;
    background: #fb1314;
    border: 2px solid #fff;
    border-radius: 50%;
    outline: #000 2px solid;
`
const ItemmFlexRightDotsRed = styled.div `
    width: 20px;
    height: 20px;
    background: #db4444;
    border-radius: 50%;
    margin-left: 9px;
`
const ItemmFlexRightTop = styled.div `
    display: flex;
    align-items: center;
    justify-content: start;
    border: 1.5px solid #999;
    padding-left: 9px;
    padding-right: 9px;
    border-radius: 5px;
    background: #fff;
    background: #fff;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
`
const ItemmFlexRightTopImg = styled.img `
    margin-right: 16px;
`
const ItemmFlexRightTopContentH5 = styled.h5 `
    margin-bottom: 9px;
    font-size: 16px;
`
const ItemmFlexRightTopContentH6 = styled.h6 `
    margin-top: 0px;
    text-decoration-line: underline;
    font-size: 12px;
`
const Related = styled.section `
    margin-top: 50px;
    margin-bottom: 50px;
`
const RelatedTitle = styled.div `
    display: flex;
    align-items: center;
    justify-content: start;
`
const RelatedTitleImg = styled.img `
    margin-right: 16px;
`
const RelatedTitleH5 = styled.h5 `
    font-family: "poppins";
    font-weight: 600;
    font-size: 16px;
    color: #db4444;
`
const RelatedGrid = styled.div `
    display: grid;
    grid-template-columns: auto auto auto auto;
    gap: 30px;
`
const ProductGridBoxa = styled.div `
    gap: 16px;
    cursor: pointer;
`
const ProductGridBoxaCart = styled.div `
    background: #f5f5f5;
    border-radius: 5px;
    width: 270px;
    height: 110px;
    margin: 0 auto;
    padding-top: 65px;
    padding-bottom: 65px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: 0px;
`
const ProductGridBoxaCartImg = styled.img `
    display: block;
    width: 50%;
    margin: 0 auto;
`
const ProductGridBoxaCartIcon = styled.span `
    position: absolute;
    left: 211px;
    bottom: 185px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    border-radius: 50%;
    padding: 10px;
`
const ProductGridBoxaCartIcon1 = styled.span `
    position: absolute;
    left: 211px;
    bottom: 130px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    border-radius: 50%;
    padding: 10px;
`
const ProductGridBoxaCartCart = styled.button `
    width: 100%;
    position: absolute;
    top: 200px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    background: #000;
    color: #fff;
    text-align: center;
    border: none;
    height: 41px;
    z-index: 1;
    font-size: 16px;
    font-family: "poppins";
    opacity: 0%;
    &:hover {
        transition: all .5s;
        opacity: 100%;
    }
`
const ProductGridBoxaH5 = styled.h5 `
    font-size: 16px;
    font-family: "poppins";
    margin-bottom: 9px;
    margin-top: 16px;
    color: #000;
`
const ProductGridBoxaText = styled.div `
    gap: 9px;
    display: flex;
    align-items: center;
`
const ProductGridBoxaTextPrice = styled.h5 `
    text-align: center;
    margin: 0px;
    color: #db4444;
`
const ProductGridBoxaTextGrey = styled.h5 `
    text-align: center;
    margin: 0px;
    font-size: 14px;
    color: #999;
`
const ProductGridBoxaCartNew = styled.button `
    position: absolute;
    left: 13px;
    top: 13px;
    background: #0f6;
    border: none;
    border-radius: 5px;
    padding: 4px 12px;
    color: #fafafa;
    font-family: "poppins";
`
const ProductGridBoxaCartOff = styled.button `
    position: absolute;
    left: 13px;
    top: 13px;
    background: #db4444;
    border: none;
    border-radius: 5px;
    padding: 4px 12px;
    color: #fafafa;
    font-family: "poppins";
`
const ProductGridBoxaDots = styled.div `
    display: flex;
    align-items: center;
    justify-content: start;
    margin-top: 9px;
`
const ProductGridBoxaDotsColor = styled.div `
    width: 14px;
    height: 14px;
    background: #fb1314;
    border: 2px solid #fff;
    border-radius: 50%;
    outline: #000 2px solid;
`
const ProductGridBoxaDotsDot = styled.div `
    width: 20px;
    height: 20px;
    background: #db4444;
    border-radius: 50%;
    margin-left: 9px;
`
const ProductGridBoxaTexts = styled.div `
    gap: 9px;
    display: flex;
    align-items: center;
    margin-top: 15px;
`
const ProductGridBoxaTextStrike = styled.h5 `
    opacity: 50%;
    font-family: "poppins";
    font-size: 16px;
    display: inline;
    margin: 0px;
    text-decoration-line: line-through;
`
const ProductGridBoxaTextsGrey = styled.h5 `
    text-align: center;
    margin: 0px;
    font-size: 14px;
    color: #999;
`
const Footer = styled.footer `
    width: 100%;
    margin-top: 27px;
    background: #000;
    padding-top: 57px;
    height: 440px;
`
const FooterFlex = styled.div `
    display: flex;
    align-items: start;
    justify-content: space-between;
    gap: 50px;
    margin-bottom: 72px;
`
const FooterFlexBoxH3 = styled.h3 `
    font-size: 24px;
    font-weight: 700;
    color: #fafafa;
`
const FooterFlexBoxH4 = styled.h4 `
    font-size: 20px;
    font-family: "poppins";
    color: #fafafa;
    font-weight: 400;
`
const FooterFlexBoxH5 = styled.h3 `
    font-family: "poppins";
    font-weight: 400;
    font-size: 16px;
    color: #fafafa;
`
const FooterFlexBoxForm = styled.div `
    border-radius: 5px;
    border: 1.5px solid #fafafa;
    padding: 12px 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const FooterFlexBoxFormInput = styled.input `
    background: none;
    border: none;
    outline: none;
    font-size: 16px;
    font-weight: 400;
    font-family: "poppins";
    color: #fafafa;
`
const FooterFlexBoxUl = styled.ul `
    list-style: none;
    padding: 0px;
`
const FooterFlexBoxUlLi = styled.li `
    margin-bottom: 16px;
`
const FooterFlexBoxUlLiA = styled.a `
    text-decoration: none;
    color: #fafafa;
    font-family: "poppins";
    font-weight: 400;
    font-size: 16px;
`
const FooterFlexBoxH6 = styled.h6 `
    font-family: "poppins";
    font-size: 12px;
    color: #fafafa;
    opacity: 70%;
    font-weight: 400;
    margin-bottom: 11px;
`
const FooterFlexBoxIcons = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 168px;
    gap: 24px;
    margin-top: 27px;
    cursor: pointer;
`
const FooterCo = styled.h5 `
    border-top: 1px solid #333;
    font-family: "poppins";
    font-weight: 400;
    font-size: 16px;
    color: #fff;
    opacity: 40%;
    text-align: center;
    padding-top: 27px;
`