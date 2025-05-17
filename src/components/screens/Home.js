import React from "react";
import { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import products from "../../data/products.json";
import Exclusive from "../../assets/images/Exclusive.svg";
import Searchs from "../../assets/images/search.svg";
import Wishlist from "../../assets/images/wishlist.svg";
import Cart from "../../assets/images/Cart.svg";
import Apple from "../../assets/images/apple.svg";
import ArrowRight from "../../assets/images/icons arrow-right.svg";
import Rectangle from "../../assets/images/Rectangle 18.svg";
import CellPhone from "../../assets/images/CellPhone.svg";
import Computer from "../../assets/images/Computer.svg";
import SmartWatch from "../../assets/images/SmartWatch.svg";
import EadPhone from "../../assets/images/eadphone.svg";
import GamePad from "../../assets/images/Gamepad.svg";
import Camera from "../../assets/images/Camera.svg";
import QuickView from "../../assets/images/Quick View.svg";
import Vector from "../../assets/images/Vector.svg";
import Vector1 from "../../assets/images/Vector (1).svg";
import StarHalf from "../../assets/images/star-half-filled.svg";
import IconDelivery from "../../assets/images/icon-delivery-1.svg";
import IconCustomerService from "../../assets/images/Icon-Customer service.svg";
import Safety from "../../assets/images/safety.svg";
import Send from "../../assets/images/send.svg";
import Facebook from "../../assets/images/facebook.svg";
import Twitter from "../../assets/images/twitter.svg";
import Instagram from "../../assets/images/icon-instagram.svg";
import LinkedIn from "../../assets/images/Icon-Linkedin.svg";


export default function Home() {
    const navigate = useNavigate();
    // onClick={() => navigate('/product')}

    const [itt, setItt] = useState();
    const [search, setSearch] = useState("");
    const filteredProducts = search
    ? products.filter((product) => {
        const searchLower = search.toLowerCase();
        return (
          product.title.toLowerCase().includes(searchLower) ||
          product.category.toLowerCase().includes(searchLower)
        );
      })
    : [];
    const handleLarge = (event) => {
        const boxes = document.querySelectorAll(".boxa");

        boxes.forEach((box, index) => {
            const product = products[index];

            if(event.currentTarget.id == index) {
                navigate("/item", {state: {product}})
            }
        });
    }
    const phones = products.filter(
        (phone) => phone.category === "Phone" 
    );
    const handlePhone = () => {
        setItt(phones)
    }
    const computers = products.filter(
        (computer) => computer.category === "Computer" 
    );
    const handleComputer = () => {
        setItt(computers)
    }
    const watchs = products.filter(
        (watch) => watch.category === "Watch" 
    );
    const handleWatch = () => {
        setItt(watchs)
    }
    const headphones = products.filter(
        (headphone) => headphone.category === "Headphone" 
    );
    const handleHeadphone = () => {
        setItt(headphones)
    }
    const games = products.filter(
        (game) => game.category === "Game" 
    );
    const handleGame = () => {
        setItt(games)
    }
    const cameras = products.filter(
        (camera) => camera.category === "Camera" 
    );
    const handleCamera = () => {
        setItt(cameras)
    }
    const handleClick = (product) => {
        navigate("/item", { state: { product } });
    };

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
                            <HeaderUlFormInput type="text" placeholder="What are you looking for?" id="input" value={search} onChange={(e) => setSearch(e.target.value)}/>
                            <img src={Searchs} alt=""/>
                        </HeaderUlForm>
                    </li>
                    <li><a href=""><img src={Wishlist} alt=""/></a></li>
                    <li><a href=""><img src={Cart} alt=""/></a></li>
                </HeaderUl>
            </Header>
            <Search class="search">
                <Wrapper class="wrapper">
                    <SearchGrid class="grid" id="search">
                        {filteredProducts.map((product, index) => (
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
                    </SearchGrid>
                </Wrapper>
            </Search>
            <section className="spotlight">
                <Wrapper className="wrapper">
                    <SpotlightBlack className="black">
                        <SpotlightBlackWrap className="wrap">
                            <div className="content">
                                <SpotlightBlackWrapContentApple className="apple">
                                    <img src={Apple} alt=""/>
                                    <SpotlightBlackWrapContentAppleH5>iPhone 14 Series</SpotlightBlackWrapContentAppleH5>
                                </SpotlightBlackWrapContentApple>
                                <SpotlightBlackWrapContentH1>Up to 10%<br/>off Voucher</SpotlightBlackWrapContentH1>
                                <SpotlightBlackWrapContentButton className="button">
                                    <a href="#"><SpotlightBlackWrapContentButtonButton>Shop Now</SpotlightBlackWrapContentButtonButton></a>
                                    <img src={ArrowRight} alt=""/>
                                </SpotlightBlackWrapContentButton>
                            </div>
                            <img src={require("../../assets/images/hero_endframe__cvklg0xk3w6e_large 2.png")} alt=""/>
                        </SpotlightBlackWrap>
                    </SpotlightBlack>
                </Wrapper>
            </section>
            <Categories className="categories">
                <Wrapper className="wrapper">
                    <CategoriesText className="text">
                        <img src={Rectangle} alt=""/>
                        <CategoriesTextH5>Categories</CategoriesTextH5>
                    </CategoriesText>
                    <CategoriesH1>Browse By Category</CategoriesH1>
                    <CategoriesFlex className="flex">
                        <CategoriesFlexBox className="box" id="phone" onClick={handlePhone}>
                            <CategoriesFlexBoxImg src={CellPhone} alt=""/>
                            <CategoriesFlexBoxH4>Phones</CategoriesFlexBoxH4>
                        </CategoriesFlexBox>
                        <CategoriesFlexBox className="box" id="computer" onClick={handleComputer}>
                            <CategoriesFlexBoxImg src={Computer} alt=""/>
                            <CategoriesFlexBoxH4>Computers</CategoriesFlexBoxH4>
                        </CategoriesFlexBox>
                        <CategoriesFlexBox className="box" id="smartwatch" onClick={handleWatch}>
                            <CategoriesFlexBoxImg src={SmartWatch} alt=""/>
                            <CategoriesFlexBoxH4>SmartWatch</CategoriesFlexBoxH4>
                        </CategoriesFlexBox>
                        <CategoriesFlexBox className="box" id="headphone" onClick={handleHeadphone}>
                            <CategoriesFlexBoxImg src={EadPhone} alt=""/>
                            <CategoriesFlexBoxH4>HeadPhones</CategoriesFlexBoxH4>
                        </CategoriesFlexBox>
                        <CategoriesFlexBox className="box" id="game" onClick={handleGame}>
                            <CategoriesFlexBoxImg src={GamePad} alt=""/>
                            <CategoriesFlexBoxH4>Gaming</CategoriesFlexBoxH4>
                        </CategoriesFlexBox>
                        <CategoriesFlexBox className="box" id="camera" onClick={handleCamera}>
                            <CategoriesFlexBoxImg src={Camera} alt=""/>
                            <CategoriesFlexBoxH4>Camera</CategoriesFlexBoxH4>
                        </CategoriesFlexBox>
                    </CategoriesFlex>
                    <CategoriesProduct className="product" id="product">
                        {itt && itt.map((itt, index) => (
                            <CategoriesProductBox class="box">
                                <CategoriesProductBoxImg src={require(`../../assets/images/${itt.src}`)} alt=""/>
                                <CategoriesProductBoxH4>{itt.p}</CategoriesProductBoxH4>
                            </CategoriesProductBox>
                        ))}
                    </CategoriesProduct>
                    <CategoriesGrid className="grid" id="grid">
                        <CategoriesGridBoxa className="boxa" onClick={handleLarge} id="0">
                            <CategoriesGridBoxaCart className="cart">
                                <CategoriesGridBoxaCartImg src={require("../../assets/images/71RdoeXxtrL 1.png")} alt="" className="img"/>
                                <CategoriesGridBoxaCartIcon className="icon">
                                    <img src={Wishlist} alt=""/>
                                </CategoriesGridBoxaCartIcon>
                                <CategoriesGridBoxaCartIcon1 className="icon1">
                                    <img src={QuickView} alt=""/>
                                </CategoriesGridBoxaCartIcon1>
                                <CategoriesGridBoxaCartCart className="cart">Add To Cart</CategoriesGridBoxaCartCart>
                            </CategoriesGridBoxaCart>
                            <CategoriesGridBoxaH5>Breed Dry Dog Food</CategoriesGridBoxaH5>
                            <CategoriesGridBoxaText className="text">
                                <CategoriesGridBoxaTextPrice className="price">$100</CategoriesGridBoxaTextPrice>
                                <div className="star">
                                    <img src={Vector} alt=""/>
                                    <img src={Vector} alt=""/>
                                    <img src={Vector} alt=""/>
                                    <img src={Vector1} alt=""/>
                                    <img src={Vector1} alt=""/>
                                </div>
                                <CategoriesGridBoxaTextGrey className="grey">(35)</CategoriesGridBoxaTextGrey>
                            </CategoriesGridBoxaText>
                        </CategoriesGridBoxa>
                        <CategoriesGridBoxa className="boxa" onClick={handleLarge} id="1">
                            <CategoriesGridBoxaCart className="cart">
                                <CategoriesGridBoxaCartImg src={require("../../assets/images/eos-250d-03-500x500 1.png")} alt="" className="img"/>
                                <CategoriesGridBoxaCartIcon className="icon">
                                    <img src={Wishlist} alt=""/>
                                </CategoriesGridBoxaCartIcon>
                                <CategoriesGridBoxaCartIcon1 className="icon1">
                                    <img src={QuickView} alt=""/>
                                </CategoriesGridBoxaCartIcon1>
                                <CategoriesGridBoxaCartCart className="cart">Add To Cart</CategoriesGridBoxaCartCart>
                            </CategoriesGridBoxaCart>
                            <CategoriesGridBoxaH5>CANON EOS DSLR Camera</CategoriesGridBoxaH5>
                            <CategoriesGridBoxaText className="text">
                                <CategoriesGridBoxaTextPrice className="price">$360</CategoriesGridBoxaTextPrice>
                                <div className="star">
                                    <img src={Vector} alt=""/>
                                    <img src={Vector} alt=""/>
                                    <img src={Vector} alt=""/>
                                    <img src={Vector} alt=""/>
                                    <img src={Vector1} alt=""/>
                                </div>
                                <CategoriesGridBoxaTextGrey className="grey">(95)</CategoriesGridBoxaTextGrey>
                            </CategoriesGridBoxaText>
                        </CategoriesGridBoxa>
                        <CategoriesGridBoxa className="boxa" onClick={handleLarge} id="2">
                            <CategoriesGridBoxaCart className="cart">
                                <CategoriesGridBoxaCartImg src={require("../../assets/images/ideapad-gaming-3i-01-500x500 1.png")} alt="" className="img"/>
                                <CategoriesGridBoxaCartIcon className="icon">
                                    <img src={Wishlist} alt=""/>
                                </CategoriesGridBoxaCartIcon>
                                <CategoriesGridBoxaCartIcon1 className="icon1">
                                    <img src={QuickView} alt=""/>
                                </CategoriesGridBoxaCartIcon1>
                                <CategoriesGridBoxaCartCart className="cart">Add To Cart</CategoriesGridBoxaCartCart>
                            </CategoriesGridBoxaCart>
                            <CategoriesGridBoxaH5>ASUS FHD Gaming Laptop</CategoriesGridBoxaH5>
                            <CategoriesGridBoxaText className="text">
                                <CategoriesGridBoxaTextPrice className="price">$700</CategoriesGridBoxaTextPrice>
                                <div className="star">
                                    <img src={Vector} alt=""/>
                                    <img src={Vector} alt=""/>
                                    <img src={Vector} alt=""/>
                                    <img src={Vector} alt=""/>
                                    <img src={Vector} alt=""/>
                                </div>
                                <CategoriesGridBoxaTextGrey className="grey">(325)</CategoriesGridBoxaTextGrey>
                            </CategoriesGridBoxaText>
                        </CategoriesGridBoxa>
                        <CategoriesGridBoxa className="boxa" onClick={handleLarge} id="3">
                            <CategoriesGridBoxaCart className="cart">
                                <CategoriesGridBoxaCartImg src={require("../../assets/images/curology-j7pKVQrTUsM-unsplash 1.png")} alt="" className="img"/>
                                <CategoriesGridBoxaCartIcon className="icon">
                                    <img src={Wishlist} alt=""/>
                                </CategoriesGridBoxaCartIcon>
                                <CategoriesGridBoxaCartIcon1 className="icon1">
                                    <img src={QuickView} alt=""/>
                                </CategoriesGridBoxaCartIcon1>
                                <CategoriesGridBoxaCartCart className="cart">Add To Cart</CategoriesGridBoxaCartCart>
                            </CategoriesGridBoxaCart>
                            <CategoriesGridBoxaH5>Curology Product Set</CategoriesGridBoxaH5>
                            <CategoriesGridBoxaText className="text">
                                <CategoriesGridBoxaTextPrice className="price">$500</CategoriesGridBoxaTextPrice>
                                <div className="star">
                                    <img src={Vector} alt=""/>
                                    <img src={Vector} alt=""/>
                                    <img src={Vector} alt=""/>
                                    <img src={Vector} alt=""/>
                                    <img src={Vector1} alt=""/>
                                </div>
                                <CategoriesGridBoxaTextGrey className="grey">(145)</CategoriesGridBoxaTextGrey>
                            </CategoriesGridBoxaText>
                        </CategoriesGridBoxa>
                        <CategoriesGridBoxa className="boxa" onClick={handleLarge} id="4">
                            <CategoriesGridBoxaCart className="cart">
                                <CategoriesGridBoxaCartImg src={require("../../assets/images/New-Mercedes-Benz-Gtr-Licensed-Ride-on-Car-Kids-Electric-Toy-Car 1.png")} alt="" className="img"/>
                                <CategoriesGridBoxaCartNew className="new">New</CategoriesGridBoxaCartNew>
                                <CategoriesGridBoxaCartIcon className="icon">
                                    <img src={Wishlist} alt=""/>
                                </CategoriesGridBoxaCartIcon>
                                <CategoriesGridBoxaCartIcon1 className="icon1">
                                    <img src={QuickView} alt=""/>
                                </CategoriesGridBoxaCartIcon1>
                                <CategoriesGridBoxaCartCart className="cart">Add To Cart</CategoriesGridBoxaCartCart>
                            </CategoriesGridBoxaCart>
                            <CategoriesGridBoxaH5>Kids Electric Car</CategoriesGridBoxaH5>
                            <CategoriesGridBoxaText className="text">
                                <CategoriesGridBoxaTextPrice className="price">$960</CategoriesGridBoxaTextPrice>
                                <div className="star">
                                    <img src={Vector} alt=""/>
                                    <img src={Vector} alt=""/>
                                    <img src={Vector} alt=""/>
                                    <img src={Vector} alt=""/>
                                    <img src={Vector} alt=""/>
                                </div>
                                <CategoriesGridBoxaTextGrey className="grey">(65)</CategoriesGridBoxaTextGrey>
                            </CategoriesGridBoxaText>
                            <CategoriesGridBoxaDots className="dots">
                                <CategoriesGridBoxaDotsColor className="color"></CategoriesGridBoxaDotsColor>
                                <CategoriesGridBoxaDotsDot className="dot"></CategoriesGridBoxaDotsDot>
                            </CategoriesGridBoxaDots>
                        </CategoriesGridBoxa>
                        <CategoriesGridBoxa className="boxa" onClick={handleLarge} id="5">
                            <CategoriesGridBoxaCart className="cart">
                                <CategoriesGridBoxaCartImg src={require("../../assets/images/Copa_Sense 1.png")} alt="" className="img"/>
                                <CategoriesGridBoxaCartIcon className="icon">
                                    <img src={Wishlist} alt=""/>
                                </CategoriesGridBoxaCartIcon>
                                <CategoriesGridBoxaCartIcon1 className="icon1">
                                    <img src={QuickView} alt=""/>
                                </CategoriesGridBoxaCartIcon1>
                                <CategoriesGridBoxaCartCart className="cart">Add To Cart</CategoriesGridBoxaCartCart>
                            </CategoriesGridBoxaCart>
                            <CategoriesGridBoxaH5>Jr. Zoom Soccer Cleats</CategoriesGridBoxaH5>
                            <CategoriesGridBoxaText className="text">
                                <CategoriesGridBoxaTextPrice className="price">$1160</CategoriesGridBoxaTextPrice>
                                <div className="star">
                                    <img src={Vector} alt=""/>
                                    <img src={Vector} alt=""/>
                                    <img src={Vector} alt=""/>
                                    <img src={Vector} alt=""/>
                                    <img src={Vector} alt=""/>
                                </div>
                                <CategoriesGridBoxaTextGrey className="grey">(35)</CategoriesGridBoxaTextGrey>
                            </CategoriesGridBoxaText>
                            <CategoriesGridBoxaDots className="dots">
                                <CategoriesGridBoxaDotsColor className="color" style={{background: "#EEFF61",}}></CategoriesGridBoxaDotsColor>
                                <CategoriesGridBoxaDotsDot className="dot"></CategoriesGridBoxaDotsDot>
                            </CategoriesGridBoxaDots>
                        </CategoriesGridBoxa>
                        <CategoriesGridBoxa className="boxa" onClick={handleLarge} id="6">
                            <CategoriesGridBoxaCart className="cart">
                                <CategoriesGridBoxaCartImg src={require("../../assets/images/GP11_PRD3 1.png")} alt="" className="img"/>
                                <CategoriesGridBoxaCartNew className="new">New</CategoriesGridBoxaCartNew>
                                <CategoriesGridBoxaCartIcon className="icon">
                                    <img src={Wishlist} alt=""/>
                                </CategoriesGridBoxaCartIcon>
                                <CategoriesGridBoxaCartIcon1 className="icon1">
                                    <img src={QuickView} alt=""/>
                                </CategoriesGridBoxaCartIcon1>
                                <CategoriesGridBoxaCartCart className="cart">Add To Cart</CategoriesGridBoxaCartCart>
                            </CategoriesGridBoxaCart>
                            <CategoriesGridBoxaH5>GP11 Shooter USB Gamepad</CategoriesGridBoxaH5>
                            <CategoriesGridBoxaText className="text">
                                <CategoriesGridBoxaTextPrice className="price">$660</CategoriesGridBoxaTextPrice>
                                <div className="star">
                                    <img src={Vector} alt=""/>
                                    <img src={Vector} alt=""/>
                                    <img src={Vector} alt=""/>
                                    <img src={Vector} alt=""/>
                                    <img src={StarHalf} style={{width: "17px",}} alt=""/>
                                </div>
                                <CategoriesGridBoxaTextGrey className="grey">(55)</CategoriesGridBoxaTextGrey>
                            </CategoriesGridBoxaText>
                            <CategoriesGridBoxaDots className="dots">
                                <CategoriesGridBoxaDotsColor className="color" style={{background: "#000",}}></CategoriesGridBoxaDotsColor>
                                <CategoriesGridBoxaDotsDot className="dot"></CategoriesGridBoxaDotsDot>
                            </CategoriesGridBoxaDots>
                        </CategoriesGridBoxa>
                        <CategoriesGridBoxa className="boxa" onClick={handleLarge} id="7">
                            <CategoriesGridBoxaCart className="cart">
                                <CategoriesGridBoxaCartImg src={require("../../assets/images/698717_Z8A1X_3475_001_100_0000_Light-Reversible-quilted-satin-jacket 1.png")} alt="" className="img"/>
                                <CategoriesGridBoxaCartIcon className="icon">
                                    <img src={Wishlist} alt=""/>
                                </CategoriesGridBoxaCartIcon>
                                <CategoriesGridBoxaCartIcon1 className="icon1">
                                    <img src={QuickView} alt=""/>
                                </CategoriesGridBoxaCartIcon1>
                                <CategoriesGridBoxaCartCart className="cart">Add To Cart</CategoriesGridBoxaCartCart>
                            </CategoriesGridBoxaCart>
                            <CategoriesGridBoxaH5>Quilted Satin Jacket</CategoriesGridBoxaH5>
                            <CategoriesGridBoxaText className="text">
                                <CategoriesGridBoxaTextPrice className="price">$660</CategoriesGridBoxaTextPrice>
                                <div className="star">
                                    <img src={Vector} alt=""/>
                                    <img src={Vector} alt=""/>
                                    <img src={Vector} alt=""/>
                                    <img src={Vector} alt=""/>
                                    <img src={StarHalf} style={{width: "17px",}} alt=""/>
                                </div>
                                <CategoriesGridBoxaTextGrey className="grey">(55)</CategoriesGridBoxaTextGrey>
                            </CategoriesGridBoxaText>
                            <CategoriesGridBoxaDots className="dots">
                                <CategoriesGridBoxaDotsColor className="color" style={{background: "#184A48",}}></CategoriesGridBoxaDotsColor>
                                <CategoriesGridBoxaDotsDot className="dot"></CategoriesGridBoxaDotsDot>
                            </CategoriesGridBoxaDots>
                        </CategoriesGridBoxa>
                    </CategoriesGrid>
                    <a onClick={() => navigate('/product')}><CategoriesView className="view">View All Products</CategoriesView></a>
                </Wrapper>
            </Categories>
            <Feature className="feature">
                <Wrapper className="wrapper">
                    <FeatureFlex className="flex">
                        <div className="box">
                            <FeatureFlexBoxImg src={IconDelivery} alt=""/>
                            <FeatureFlexBoxH3>FREE AND FAST DELIVERY</FeatureFlexBoxH3>
                            <FeatureFlexBoxH5>Free delivery for all orders over $140</FeatureFlexBoxH5>
                        </div>
                        <div className="box">
                            <FeatureFlexBoxImg src={IconCustomerService} alt=""/>
                            <FeatureFlexBoxH3>24/7 CUSTOMER SERVICE</FeatureFlexBoxH3>
                            <FeatureFlexBoxH5>Friendly 24/7 customer support</FeatureFlexBoxH5>
                        </div>
                        <div className="box">
                            <FeatureFlexBoxImg src={Safety} alt=""/>
                            <FeatureFlexBoxH3>MONEY BACK GUARANTEE</FeatureFlexBoxH3>
                            <FeatureFlexBoxH5>We reurn money within 30 days</FeatureFlexBoxH5>
                        </div>
                    </FeatureFlex>
                </Wrapper>
            </Feature>
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
const Search = styled.section `
    margin-top: 50px;
    margin-bottom: 50px;
`
const SearchGrid = styled.div `
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
const SpotlightBlack = styled.div `
    background: #000;
    height: 453px;
    border-radius: 10px;
    margin: 0 auto;
    margin-top: 43px;
`
const SpotlightBlackWrap = styled.div `
    width: 90%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const SpotlightBlackWrapContentApple = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
`
const SpotlightBlackWrapContentAppleH5 = styled.h5 `
    font-family: "poppins";
    font-size: 16px;
    color: #fafafa;
    font-weight: 400;
`
const SpotlightBlackWrapContentH1 = styled.h1 `
    font-size: 48px;
    font-weight: 600;
    color: #fafafa;
    font-family: inter;
`
const SpotlightBlackWrapContentButton = styled.div `
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    gap: 9px;
    cursor: pointer;
`
const SpotlightBlackWrapContentButtonButton = styled.button `
    background: none;
    border: none;
    color: #fafafa;
    font-size: 16px;
    font-family: "poppins";
    border-bottom: #999 1.5px solid;
    cursor: pointer;
`
const Categories = styled.section `
    margin-top: 55px;
`
const CategoriesText = styled.div `
    display: flex;
    align-items: center;
    justify-content: left;
`
const CategoriesTextH5 = styled.h5 `
    font-family: "poppins";
    font-weight: 600;
    font-size: 16px;
    color: #db4444;
    margin-left: 16px;
`
const CategoriesH1 = styled.h1 `
    font-family: inter;
    font-weight: 600;
    font-size: 36px;
`
const CategoriesFlex = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
    width: 87%;
    margin: 0 auto;
`
const CategoriesFlexBox = styled.div `
    border-radius: 5px;
    border: 1px solid #999;
    width: 170px;
    height: 145px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
`
const CategoriesFlexBoxImg = styled.img `
    margin-top: 25px;
`
const CategoriesFlexBoxH4 = styled.h4 `
    font-family: "poppins";
    font-size: 16px;
    font-weight: 400;
`
const CategoriesGrid = styled.div `
    display: grid;
    grid-template-columns: auto auto auto auto;
    gap: 30px;
    width: 87%;
    margin: 0 auto;
    border-bottom: #999 2px solid;
    padding-bottom: 27px;
    margin-bottom: 27px;
    margin-top: 27px;
`
const CategoriesGridBoxa = styled.div `
    gap: 16px;
    cursor: pointer;
`
const CategoriesGridBoxaCart = styled.div `
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
`
const CategoriesGridBoxaCartImg = styled.img `
    display: block;
    width: 45%;
    margin: 0 auto;
`
const CategoriesGridBoxaCartIcon = styled.span `
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
const CategoriesGridBoxaCartIcon1 = styled.span `
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
const CategoriesGridBoxaCartCart = styled.button `
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
    cursor: pointer;
    &:hover {
        transition: all .5s;
        opacity: 100%;
    }
`
const CategoriesGridBoxaH5 = styled.h5 `
    font-size: 16px;
    font-family: "poppins";
    margin-bottom: 9px;
    margin-top: 16px;
`
const CategoriesGridBoxaText = styled.div `
    gap: 9px;
    display: flex;
    align-items: center;
    justify-content: left;
`
const CategoriesGridBoxaTextPrice = styled.h5 `
    text-align: center;
    margin: 0px;
    font-family: "poppins";
    font-weight: 600;
    font-size: 16px;
    color: #db4444;
`
const CategoriesGridBoxaTextGrey = styled.h5 `
    text-align: center;
    margin: 0px;
    font-size: 14px;
    color: #999;
    font-family: "poppins";
    font-weight: 600;
`
const CategoriesGridBoxaCartNew = styled.button `
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
const CategoriesGridBoxaDots = styled.div `
    display: flex;
    align-items: center;
    justify-content: start;
    margin-top: 9px;
`
const CategoriesGridBoxaDotsColor = styled.div `
    width: 14px;
    height: 14px;
    background: #fb1314;
    border: 2px solid #fff;
    border-radius: 50%;
    outline: #000 2px solid;
`
const CategoriesGridBoxaDotsDot = styled.div `
    width: 20px;
    height: 20px;
    background: #db4444;
    border-radius: 50%;
    margin-left: 9px;
`
const CategoriesView = styled.button `
    display: block;
    margin: 0 auto;
    padding: 16px 48px;
    background: #db4444;
    color: #fafafa;
    font-family: "poppins";
    font-size: 16px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`
const Feature = styled.section `
    margin-bottom: 27px;
    margin-top: 75px;
`
const FeatureFlex = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 87px;
    width: 87%;
    margin: 0 auto;
`
const FeatureFlexBoxImg = styled.img `
    background: #000;
    padding: 9px;
    border-radius: 50%;
    border: 15px #ccc solid;
    display: block;
    width: 40px;
    margin: 0 auto;
    margin-bottom: 24px;
`
const FeatureFlexBoxH3 = styled.h3 `
    text-align: center;
    font-family: "poppins";
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 9px;
`
const FeatureFlexBoxH5 = styled.h5 `
    font-size: 14px;
    font-weight: 400;
    font-family: "poppins";
    text-align: center;
    margin: 0px;
`
const CategoriesProduct = styled.div `
    display: grid;
    grid-template-columns: auto auto;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 77%;
    margin: 0 auto;
`
const CategoriesProductBox = styled.div `
    padding: 19px;
    border: 3px solid #777;
    border-radius: 11px;
    width: 370px;
    margin-top: 50px;
    &:first-child {
        margin-right: 100px;
    }
    &:nth-child(3) {
        margin-right: 100px;
    }
`
const CategoriesProductBoxH4 = styled.h4 `
    font-size: 16px;
    font-weight: 400;
`
const CategoriesProductBoxImg = styled.img `
    width: 190px;
    margin: 0 auto;
    display: block;
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