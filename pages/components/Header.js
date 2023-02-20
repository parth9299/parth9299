import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { Button, Col, Container, Nav, NavItem, NavLink, Row } from "reactstrap";

export default function Header() {
    const router = useRouter();
    return (
        <>
            <Container className="nav_bg" fluid>
                <Row>
                    <Col xl={10} className="mx-auto" >
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <div className="container-fluid">
                                <Link className="navbar-brand" href={'/'} > Parth </Link>
                                <Button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </Button>
                                <div className="collapse navbar-collapse flex-row-reverse" >
                                    <Nav className="navbar-nav ml-auto mb-2 my-lg-0 " >
                                        <NavItem >
                                            <Link className={router.pathname === "/" ? "nav-link menu_active" : "nav-link "} href="/" >Home</Link>
                                        </NavItem>
                                        <NavItem >
                                            <Link className={router.pathname === "/about" ? "nav-link menu_active" : "nav-link "} href="/about" >About us</Link>
                                        </NavItem>
                                        <NavItem >
                                            <Link className={router.pathname === "/services" ? "nav-link menu_active" : "nav-link "} href="/services" >Services</Link>
                                        </NavItem>
                                        <NavItem >
                                            <Link className={router.pathname === "/contact" ? "nav-link menu_active" : "nav-link "} href="/contact" >Contact us</Link>
                                        </NavItem>
                                    </Nav>
                                </div>
                            </div>
                        </nav>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
