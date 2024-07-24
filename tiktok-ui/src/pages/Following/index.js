import React, { useEffect } from 'react';
import styles from './ScrollAnimation.module.scss';
import classNames from 'classnames';

const cx = classNames.bind(styles);

const ScrollAnimation = () => {
    useEffect(() => {
        const scrollAnimado = document.querySelectorAll(
            '[data-scroll="animado"]',
        );
        const windowTamanho = window.innerHeight * 0.8;

        function animaScroll() {
            scrollAnimado.forEach((section) => {
                const sectionTop =
                    section.getBoundingClientRect().top - windowTamanho;
                if (sectionTop < 0) {
                    section.classList.add(styles.ativo);
                } else {
                    section.classList.remove(styles.ativo);
                }
            });
        }

        animaScroll(); // Run once initially
        window.addEventListener('scroll', animaScroll);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('scroll', animaScroll);
        };
    }, []);

    return (
        <div>
            <div className={styles.fullScreenPreview}>
                <div className={styles.header}>
                    {/* slider and menu and gt */}
                    <div className={cx('scroll-item')} data-scroll="animado">
                        {/* slider */}
                        <div className="row">
                            <div className="col-sm-12 slider">
                                <div
                                    id="carouselId"
                                    className="carousel slide"
                                    data-ride="carousel"
                                >
                                    <ol className="carousel-indicators">
                                        <li
                                            data-target="#carouselId"
                                            data-slide-to={0}
                                            className="active"
                                        />
                                        <li
                                            data-target="#carouselId"
                                            data-slide-to={1}
                                        />
                                        <li
                                            data-target="#carouselId"
                                            data-slide-to={2}
                                        />
                                    </ol>
                                    <div
                                        className="carousel-inner"
                                        role="listbox"
                                    >
                                        <div className="carousel-item active">
                                            <img
                                                className={styles.anhSlide}
                                                src="images/slide-index1_ff1c6058-bea7-45d8-be96-f5e0ee6835e0.webp"
                                                alt="First slide"
                                            />
                                            <div className="carousel-caption text-left text-slide">
                                                <div className="container">
                                                    <h2
                                                        className={
                                                            styles.iteam1TextSlider
                                                        }
                                                    >
                                                        Shopify 2.0
                                                    </h2>
                                                    <h2
                                                        className={
                                                            styles.iteam2TextSlider
                                                        }
                                                    >
                                                        Full sync
                                                    </h2>
                                                    <p
                                                        className={
                                                            styles.iteam3TextSlider
                                                        }
                                                    >
                                                        Theme has been
                                                        translated into all
                                                        languages. Built-in
                                                        support for
                                                        subcriptions. 3D &
                                                        Variant Ready.
                                                    </p>
                                                    <a
                                                        href=""
                                                        className="btn btn-light btn-slider"
                                                    >
                                                        START FREE TRIAL STORE
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Other carousel items */}
                                    </div>
                                    <a
                                        className="carousel-control-prev"
                                        href="#carouselId"
                                        role="button"
                                        data-slide="prev"
                                    >
                                        <span
                                            className="carousel-control-prev-icon"
                                            aria-hidden="true"
                                        />
                                        <span className="sr-only">
                                            Previous
                                        </span>
                                    </a>
                                    <a
                                        className="carousel-control-next"
                                        href="#carouselId"
                                        role="button"
                                        data-slide="next"
                                    >
                                        <span
                                            className="carousel-control-next-icon"
                                            aria-hidden="true"
                                        />
                                        <span className="sr-only">Next</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* end_slider */}
                </div>
            </div>
            <div className={styles.fullScreenPreview}>
                <div className={styles.header}>
                    {/* slider and menu and gt */}
                    <div className={cx('scroll-item')} data-scroll="animado">
                        {/* slider */}
                        <div className="row">
                            <div className="col-sm-12 slider">
                                <div
                                    id="carouselId"
                                    className="carousel slide"
                                    data-ride="carousel"
                                >
                                    <ol className="carousel-indicators">
                                        <li
                                            data-target="#carouselId"
                                            data-slide-to={0}
                                            className="active"
                                        />
                                        <li
                                            data-target="#carouselId"
                                            data-slide-to={1}
                                        />
                                        <li
                                            data-target="#carouselId"
                                            data-slide-to={2}
                                        />
                                    </ol>
                                    <div
                                        className="carousel-inner"
                                        role="listbox"
                                    >
                                        <div className="carousel-item active">
                                            <img
                                                className={styles.anhSlide}
                                                src="images/slide-index1_ff1c6058-bea7-45d8-be96-f5e0ee6835e0.webp"
                                                alt="First slide"
                                            />
                                            <div className="carousel-caption text-left text-slide">
                                                <div className="container">
                                                    <h2
                                                        className={
                                                            styles.iteam1TextSlider
                                                        }
                                                    >
                                                        Shopify 2.0
                                                    </h2>
                                                    <h2
                                                        className={
                                                            styles.iteam2TextSlider
                                                        }
                                                    >
                                                        Full sync
                                                    </h2>
                                                    <p
                                                        className={
                                                            styles.iteam3TextSlider
                                                        }
                                                    >
                                                        Theme has been
                                                        translated into all
                                                        languages. Built-in
                                                        support for
                                                        subcriptions. 3D &
                                                        Variant Ready.
                                                    </p>
                                                    <a
                                                        href=""
                                                        className="btn btn-light btn-slider"
                                                    >
                                                        START FREE TRIAL STORE
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Other carousel items */}
                                    </div>
                                    <a
                                        className="carousel-control-prev"
                                        href="#carouselId"
                                        role="button"
                                        data-slide="prev"
                                    >
                                        <span
                                            className="carousel-control-prev-icon"
                                            aria-hidden="true"
                                        />
                                        <span className="sr-only">
                                            Previous
                                        </span>
                                    </a>
                                    <a
                                        className="carousel-control-next"
                                        href="#carouselId"
                                        role="button"
                                        data-slide="next"
                                    >
                                        <span
                                            className="carousel-control-next-icon"
                                            aria-hidden="true"
                                        />
                                        <span className="sr-only">Next</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* end_slider */}
                </div>
            </div>
            <div className={styles.fullScreenPreview}>
                <div className={styles.header}>
                    {/* slider and menu and gt */}
                    <div className={cx('scroll-item')} data-scroll="animado">
                        {/* slider */}
                        <div className="row">
                            <div className="col-sm-12 slider">
                                <div
                                    id="carouselId"
                                    className="carousel slide"
                                    data-ride="carousel"
                                >
                                    <ol className="carousel-indicators">
                                        <li
                                            data-target="#carouselId"
                                            data-slide-to={0}
                                            className="active"
                                        />
                                        <li
                                            data-target="#carouselId"
                                            data-slide-to={1}
                                        />
                                        <li
                                            data-target="#carouselId"
                                            data-slide-to={2}
                                        />
                                    </ol>
                                    <div
                                        className="carousel-inner"
                                        role="listbox"
                                    >
                                        <div className="carousel-item active">
                                            <img
                                                className={styles.anhSlide}
                                                src="images/slide-index1_ff1c6058-bea7-45d8-be96-f5e0ee6835e0.webp"
                                                alt="First slide"
                                            />
                                            <div className="carousel-caption text-left text-slide">
                                                <div className="container">
                                                    <h2
                                                        className={
                                                            styles.iteam1TextSlider
                                                        }
                                                    >
                                                        Shopify 2.0
                                                    </h2>
                                                    <h2
                                                        className={
                                                            styles.iteam2TextSlider
                                                        }
                                                    >
                                                        Full sync
                                                    </h2>
                                                    <p
                                                        className={
                                                            styles.iteam3TextSlider
                                                        }
                                                    >
                                                        Theme has been
                                                        translated into all
                                                        languages. Built-in
                                                        support for
                                                        subcriptions. 3D &
                                                        Variant Ready.
                                                    </p>
                                                    <a
                                                        href=""
                                                        className="btn btn-light btn-slider"
                                                    >
                                                        START FREE TRIAL STORE
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Other carousel items */}
                                    </div>
                                    <a
                                        className="carousel-control-prev"
                                        href="#carouselId"
                                        role="button"
                                        data-slide="prev"
                                    >
                                        <span
                                            className="carousel-control-prev-icon"
                                            aria-hidden="true"
                                        />
                                        <span className="sr-only">
                                            Previous
                                        </span>
                                    </a>
                                    <a
                                        className="carousel-control-next"
                                        href="#carouselId"
                                        role="button"
                                        data-slide="next"
                                    >
                                        <span
                                            className="carousel-control-next-icon"
                                            aria-hidden="true"
                                        />
                                        <span className="sr-only">Next</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* end_slider */}
                </div>
            </div>
            <div className={styles.fullScreenPreview}>
                <div className={styles.header}>
                    {/* slider and menu and gt */}
                    <div className={cx('scroll-item')} data-scroll="animado">
                        {/* slider */}
                        <div className="row">
                            <div className="col-sm-12 slider">
                                <div
                                    id="carouselId"
                                    className="carousel slide"
                                    data-ride="carousel"
                                >
                                    <ol className="carousel-indicators">
                                        <li
                                            data-target="#carouselId"
                                            data-slide-to={0}
                                            className="active"
                                        />
                                        <li
                                            data-target="#carouselId"
                                            data-slide-to={1}
                                        />
                                        <li
                                            data-target="#carouselId"
                                            data-slide-to={2}
                                        />
                                    </ol>
                                    <div
                                        className="carousel-inner"
                                        role="listbox"
                                    >
                                        <div className="carousel-item active">
                                            <img
                                                className={styles.anhSlide}
                                                src="images/slide-index1_ff1c6058-bea7-45d8-be96-f5e0ee6835e0.webp"
                                                alt="First slide"
                                            />
                                            <div className="carousel-caption text-left text-slide">
                                                <div className="container">
                                                    <h2
                                                        className={
                                                            styles.iteam1TextSlider
                                                        }
                                                    >
                                                        Shopify 2.0
                                                    </h2>
                                                    <h2
                                                        className={
                                                            styles.iteam2TextSlider
                                                        }
                                                    >
                                                        Full sync
                                                    </h2>
                                                    <p
                                                        className={
                                                            styles.iteam3TextSlider
                                                        }
                                                    >
                                                        Theme has been
                                                        translated into all
                                                        languages. Built-in
                                                        support for
                                                        subcriptions. 3D &
                                                        Variant Ready.
                                                    </p>
                                                    <a
                                                        href=""
                                                        className="btn btn-light btn-slider"
                                                    >
                                                        START FREE TRIAL STORE
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Other carousel items */}
                                    </div>
                                    <a
                                        className="carousel-control-prev"
                                        href="#carouselId"
                                        role="button"
                                        data-slide="prev"
                                    >
                                        <span
                                            className="carousel-control-prev-icon"
                                            aria-hidden="true"
                                        />
                                        <span className="sr-only">
                                            Previous
                                        </span>
                                    </a>
                                    <a
                                        className="carousel-control-next"
                                        href="#carouselId"
                                        role="button"
                                        data-slide="next"
                                    >
                                        <span
                                            className="carousel-control-next-icon"
                                            aria-hidden="true"
                                        />
                                        <span className="sr-only">Next</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* end_slider */}
                </div>
            </div>
            <div className={styles.fullScreenPreview}>
                <div className={styles.header}>
                    {/* slider and menu and gt */}
                    <div className={cx('scroll-item')} data-scroll="animado">
                        {/* slider */}
                        <div className="row">
                            <div className="col-sm-12 slider">
                                <div
                                    id="carouselId"
                                    className="carousel slide"
                                    data-ride="carousel"
                                >
                                    <ol className="carousel-indicators">
                                        <li
                                            data-target="#carouselId"
                                            data-slide-to={0}
                                            className="active"
                                        />
                                        <li
                                            data-target="#carouselId"
                                            data-slide-to={1}
                                        />
                                        <li
                                            data-target="#carouselId"
                                            data-slide-to={2}
                                        />
                                    </ol>
                                    <div
                                        className="carousel-inner"
                                        role="listbox"
                                    >
                                        <div className="carousel-item active">
                                            <img
                                                className={styles.anhSlide}
                                                src="images/slide-index1_ff1c6058-bea7-45d8-be96-f5e0ee6835e0.webp"
                                                alt="First slide"
                                            />
                                            <div className="carousel-caption text-left text-slide">
                                                <div className="container">
                                                    <h2
                                                        className={
                                                            styles.iteam1TextSlider
                                                        }
                                                    >
                                                        Shopify 2.0
                                                    </h2>
                                                    <h2
                                                        className={
                                                            styles.iteam2TextSlider
                                                        }
                                                    >
                                                        Full sync
                                                    </h2>
                                                    <p
                                                        className={
                                                            styles.iteam3TextSlider
                                                        }
                                                    >
                                                        Theme has been
                                                        translated into all
                                                        languages. Built-in
                                                        support for
                                                        subcriptions. 3D &
                                                        Variant Ready.
                                                    </p>
                                                    <a
                                                        href=""
                                                        className="btn btn-light btn-slider"
                                                    >
                                                        START FREE TRIAL STORE
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Other carousel items */}
                                    </div>
                                    <a
                                        className="carousel-control-prev"
                                        href="#carouselId"
                                        role="button"
                                        data-slide="prev"
                                    >
                                        <span
                                            className="carousel-control-prev-icon"
                                            aria-hidden="true"
                                        />
                                        <span className="sr-only">
                                            Previous
                                        </span>
                                    </a>
                                    <a
                                        className="carousel-control-next"
                                        href="#carouselId"
                                        role="button"
                                        data-slide="next"
                                    >
                                        <span
                                            className="carousel-control-next-icon"
                                            aria-hidden="true"
                                        />
                                        <span className="sr-only">Next</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* end_slider */}
                </div>
            </div>
            <div className={styles.fullScreenPreview}>
                <div className={styles.header}>
                    {/* slider and menu and gt */}
                    <div className={cx('scroll-item')} data-scroll="animado">
                        {/* slider */}
                        <div className="row">
                            <div className="col-sm-12 slider">
                                <div
                                    id="carouselId"
                                    className="carousel slide"
                                    data-ride="carousel"
                                >
                                    <ol className="carousel-indicators">
                                        <li
                                            data-target="#carouselId"
                                            data-slide-to={0}
                                            className="active"
                                        />
                                        <li
                                            data-target="#carouselId"
                                            data-slide-to={1}
                                        />
                                        <li
                                            data-target="#carouselId"
                                            data-slide-to={2}
                                        />
                                    </ol>
                                    <div
                                        className="carousel-inner"
                                        role="listbox"
                                    >
                                        <div className="carousel-item active">
                                            <img
                                                className={styles.anhSlide}
                                                src="images/slide-index1_ff1c6058-bea7-45d8-be96-f5e0ee6835e0.webp"
                                                alt="First slide"
                                            />
                                            <div className="carousel-caption text-left text-slide">
                                                <div className="container">
                                                    <h2
                                                        className={
                                                            styles.iteam1TextSlider
                                                        }
                                                    >
                                                        Shopify 2.0
                                                    </h2>
                                                    <h2
                                                        className={
                                                            styles.iteam2TextSlider
                                                        }
                                                    >
                                                        Full sync
                                                    </h2>
                                                    <p
                                                        className={
                                                            styles.iteam3TextSlider
                                                        }
                                                    >
                                                        Theme has been
                                                        translated into all
                                                        languages. Built-in
                                                        support for
                                                        subcriptions. 3D &
                                                        Variant Ready.
                                                    </p>
                                                    <a
                                                        href=""
                                                        className="btn btn-light btn-slider"
                                                    >
                                                        START FREE TRIAL STORE
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Other carousel items */}
                                    </div>
                                    <a
                                        className="carousel-control-prev"
                                        href="#carouselId"
                                        role="button"
                                        data-slide="prev"
                                    >
                                        <span
                                            className="carousel-control-prev-icon"
                                            aria-hidden="true"
                                        />
                                        <span className="sr-only">
                                            Previous
                                        </span>
                                    </a>
                                    <a
                                        className="carousel-control-next"
                                        href="#carouselId"
                                        role="button"
                                        data-slide="next"
                                    >
                                        <span
                                            className="carousel-control-next-icon"
                                            aria-hidden="true"
                                        />
                                        <span className="sr-only">Next</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* end_slider */}
                </div>
            </div>
            <div className={styles.fullScreenPreview}>
                <div className={styles.header}>
                    {/* slider and menu and gt */}
                    <div className={cx('scroll-item')} data-scroll="animado">
                        {/* slider */}
                        <div className="row">
                            <div className="col-sm-12 slider">
                                <div
                                    id="carouselId"
                                    className="carousel slide"
                                    data-ride="carousel"
                                >
                                    <ol className="carousel-indicators">
                                        <li
                                            data-target="#carouselId"
                                            data-slide-to={0}
                                            className="active"
                                        />
                                        <li
                                            data-target="#carouselId"
                                            data-slide-to={1}
                                        />
                                        <li
                                            data-target="#carouselId"
                                            data-slide-to={2}
                                        />
                                    </ol>
                                    <div
                                        className="carousel-inner"
                                        role="listbox"
                                    >
                                        <div className="carousel-item active">
                                            <img
                                                className={styles.anhSlide}
                                                src="images/slide-index1_ff1c6058-bea7-45d8-be96-f5e0ee6835e0.webp"
                                                alt="First slide"
                                            />
                                            <div className="carousel-caption text-left text-slide">
                                                <div className="container">
                                                    <h2
                                                        className={
                                                            styles.iteam1TextSlider
                                                        }
                                                    >
                                                        Shopify 2.0
                                                    </h2>
                                                    <h2
                                                        className={
                                                            styles.iteam2TextSlider
                                                        }
                                                    >
                                                        Full sync
                                                    </h2>
                                                    <p
                                                        className={
                                                            styles.iteam3TextSlider
                                                        }
                                                    >
                                                        Theme has been
                                                        translated into all
                                                        languages. Built-in
                                                        support for
                                                        subcriptions. 3D &
                                                        Variant Ready.
                                                    </p>
                                                    <a
                                                        href=""
                                                        className="btn btn-light btn-slider"
                                                    >
                                                        START FREE TRIAL STORE
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Other carousel items */}
                                    </div>
                                    <a
                                        className="carousel-control-prev"
                                        href="#carouselId"
                                        role="button"
                                        data-slide="prev"
                                    >
                                        <span
                                            className="carousel-control-prev-icon"
                                            aria-hidden="true"
                                        />
                                        <span className="sr-only">
                                            Previous
                                        </span>
                                    </a>
                                    <a
                                        className="carousel-control-next"
                                        href="#carouselId"
                                        role="button"
                                        data-slide="next"
                                    >
                                        <span
                                            className="carousel-control-next-icon"
                                            aria-hidden="true"
                                        />
                                        <span className="sr-only">Next</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* end_slider */}
                </div>
            </div>
            <div className={styles.fullScreenPreview}>
                <div className={styles.header}>
                    {/* slider and menu and gt */}
                    <div className={cx('scroll-item')} data-scroll="animado">
                        {/* slider */}
                        <div className="row">
                            <div className="col-sm-12 slider">
                                <div
                                    id="carouselId"
                                    className="carousel slide"
                                    data-ride="carousel"
                                >
                                    <ol className="carousel-indicators">
                                        <li
                                            data-target="#carouselId"
                                            data-slide-to={0}
                                            className="active"
                                        />
                                        <li
                                            data-target="#carouselId"
                                            data-slide-to={1}
                                        />
                                        <li
                                            data-target="#carouselId"
                                            data-slide-to={2}
                                        />
                                    </ol>
                                    <div
                                        className="carousel-inner"
                                        role="listbox"
                                    >
                                        <div className="carousel-item active">
                                            <img
                                                className={styles.anhSlide}
                                                src="images/slide-index1_ff1c6058-bea7-45d8-be96-f5e0ee6835e0.webp"
                                                alt="First slide"
                                            />
                                            <div className="carousel-caption text-left text-slide">
                                                <div className="container">
                                                    <h2
                                                        className={
                                                            styles.iteam1TextSlider
                                                        }
                                                    >
                                                        Shopify 2.0
                                                    </h2>
                                                    <h2
                                                        className={
                                                            styles.iteam2TextSlider
                                                        }
                                                    >
                                                        Full sync
                                                    </h2>
                                                    <p
                                                        className={
                                                            styles.iteam3TextSlider
                                                        }
                                                    >
                                                        Theme has been
                                                        translated into all
                                                        languages. Built-in
                                                        support for
                                                        subcriptions. 3D &
                                                        Variant Ready.
                                                    </p>
                                                    <a
                                                        href=""
                                                        className="btn btn-light btn-slider"
                                                    >
                                                        START FREE TRIAL STORE
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Other carousel items */}
                                    </div>
                                    <a
                                        className="carousel-control-prev"
                                        href="#carouselId"
                                        role="button"
                                        data-slide="prev"
                                    >
                                        <span
                                            className="carousel-control-prev-icon"
                                            aria-hidden="true"
                                        />
                                        <span className="sr-only">
                                            Previous
                                        </span>
                                    </a>
                                    <a
                                        className="carousel-control-next"
                                        href="#carouselId"
                                        role="button"
                                        data-slide="next"
                                    >
                                        <span
                                            className="carousel-control-next-icon"
                                            aria-hidden="true"
                                        />
                                        <span className="sr-only">Next</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* end_slider */}
                </div>
            </div>
            <div className={styles.fullScreenPreview}>
                <div className={styles.header}>
                    {/* slider and menu and gt */}
                    <div className={cx('scroll-item')} data-scroll="animado">
                        {/* slider */}
                        <div className="row">
                            <div className="col-sm-12 slider">
                                <div
                                    id="carouselId"
                                    className="carousel slide"
                                    data-ride="carousel"
                                >
                                    <ol className="carousel-indicators">
                                        <li
                                            data-target="#carouselId"
                                            data-slide-to={0}
                                            className="active"
                                        />
                                        <li
                                            data-target="#carouselId"
                                            data-slide-to={1}
                                        />
                                        <li
                                            data-target="#carouselId"
                                            data-slide-to={2}
                                        />
                                    </ol>
                                    <div
                                        className="carousel-inner"
                                        role="listbox"
                                    >
                                        <div className="carousel-item active">
                                            <img
                                                className={styles.anhSlide}
                                                src="images/slide-index1_ff1c6058-bea7-45d8-be96-f5e0ee6835e0.webp"
                                                alt="First slide"
                                            />
                                            <div className="carousel-caption text-left text-slide">
                                                <div className="container">
                                                    <h2
                                                        className={
                                                            styles.iteam1TextSlider
                                                        }
                                                    >
                                                        Shopify 2.0
                                                    </h2>
                                                    <h2
                                                        className={
                                                            styles.iteam2TextSlider
                                                        }
                                                    >
                                                        Full sync
                                                    </h2>
                                                    <p
                                                        className={
                                                            styles.iteam3TextSlider
                                                        }
                                                    >
                                                        Theme has been
                                                        translated into all
                                                        languages. Built-in
                                                        support for
                                                        subcriptions. 3D &
                                                        Variant Ready.
                                                    </p>
                                                    <a
                                                        href=""
                                                        className="btn btn-light btn-slider"
                                                    >
                                                        START FREE TRIAL STORE
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Other carousel items */}
                                    </div>
                                    <a
                                        className="carousel-control-prev"
                                        href="#carouselId"
                                        role="button"
                                        data-slide="prev"
                                    >
                                        <span
                                            className="carousel-control-prev-icon"
                                            aria-hidden="true"
                                        />
                                        <span className="sr-only">
                                            Previous
                                        </span>
                                    </a>
                                    <a
                                        className="carousel-control-next"
                                        href="#carouselId"
                                        role="button"
                                        data-slide="next"
                                    >
                                        <span
                                            className="carousel-control-next-icon"
                                            aria-hidden="true"
                                        />
                                        <span className="sr-only">Next</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* end_slider */}
                </div>
            </div>
            <div className={styles.fullScreenPreview}>
                <div className={styles.header}>
                    {/* slider and menu and gt */}
                    <div className={cx('scroll-item')} data-scroll="animado">
                        {/* slider */}
                        <div className="row">
                            <div className="col-sm-12 slider">
                                <div
                                    id="carouselId"
                                    className="carousel slide"
                                    data-ride="carousel"
                                >
                                    <ol className="carousel-indicators">
                                        <li
                                            data-target="#carouselId"
                                            data-slide-to={0}
                                            className="active"
                                        />
                                        <li
                                            data-target="#carouselId"
                                            data-slide-to={1}
                                        />
                                        <li
                                            data-target="#carouselId"
                                            data-slide-to={2}
                                        />
                                    </ol>
                                    <div
                                        className="carousel-inner"
                                        role="listbox"
                                    >
                                        <div className="carousel-item active">
                                            <img
                                                className={styles.anhSlide}
                                                src="images/slide-index1_ff1c6058-bea7-45d8-be96-f5e0ee6835e0.webp"
                                                alt="First slide"
                                            />
                                            <div className="carousel-caption text-left text-slide">
                                                <div className="container">
                                                    <h2
                                                        className={
                                                            styles.iteam1TextSlider
                                                        }
                                                    >
                                                        Shopify 2.0
                                                    </h2>
                                                    <h2
                                                        className={
                                                            styles.iteam2TextSlider
                                                        }
                                                    >
                                                        Full sync
                                                    </h2>
                                                    <p
                                                        className={
                                                            styles.iteam3TextSlider
                                                        }
                                                    >
                                                        Theme has been
                                                        translated into all
                                                        languages. Built-in
                                                        support for
                                                        subcriptions. 3D &
                                                        Variant Ready.
                                                    </p>
                                                    <a
                                                        href=""
                                                        className="btn btn-light btn-slider"
                                                    >
                                                        START FREE TRIAL STORE
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Other carousel items */}
                                    </div>
                                    <a
                                        className="carousel-control-prev"
                                        href="#carouselId"
                                        role="button"
                                        data-slide="prev"
                                    >
                                        <span
                                            className="carousel-control-prev-icon"
                                            aria-hidden="true"
                                        />
                                        <span className="sr-only">
                                            Previous
                                        </span>
                                    </a>
                                    <a
                                        className="carousel-control-next"
                                        href="#carouselId"
                                        role="button"
                                        data-slide="next"
                                    >
                                        <span
                                            className="carousel-control-next-icon"
                                            aria-hidden="true"
                                        />
                                        <span className="sr-only">Next</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* end_slider */}
                </div>
            </div>
            <div className={styles.fullScreenPreview}>
                <div className={styles.header}>
                    {/* slider and menu and gt */}
                    <div className={cx('scroll-item')} data-scroll="animado">
                        {/* slider */}
                        <div className="row">
                            <div className="col-sm-12 slider">
                                <div
                                    id="carouselId"
                                    className="carousel slide"
                                    data-ride="carousel"
                                >
                                    <ol className="carousel-indicators">
                                        <li
                                            data-target="#carouselId"
                                            data-slide-to={0}
                                            className="active"
                                        />
                                        <li
                                            data-target="#carouselId"
                                            data-slide-to={1}
                                        />
                                        <li
                                            data-target="#carouselId"
                                            data-slide-to={2}
                                        />
                                    </ol>
                                    <div
                                        className="carousel-inner"
                                        role="listbox"
                                    >
                                        <div className="carousel-item active">
                                            <img
                                                className={styles.anhSlide}
                                                src="images/slide-index1_ff1c6058-bea7-45d8-be96-f5e0ee6835e0.webp"
                                                alt="First slide"
                                            />
                                            <div className="carousel-caption text-left text-slide">
                                                <div className="container">
                                                    <h2
                                                        className={
                                                            styles.iteam1TextSlider
                                                        }
                                                    >
                                                        Shopify 2.0
                                                    </h2>
                                                    <h2
                                                        className={
                                                            styles.iteam2TextSlider
                                                        }
                                                    >
                                                        Full sync
                                                    </h2>
                                                    <p
                                                        className={
                                                            styles.iteam3TextSlider
                                                        }
                                                    >
                                                        Theme has been
                                                        translated into all
                                                        languages. Built-in
                                                        support for
                                                        subcriptions. 3D &
                                                        Variant Ready.
                                                    </p>
                                                    <a
                                                        href=""
                                                        className="btn btn-light btn-slider"
                                                    >
                                                        START FREE TRIAL STORE
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Other carousel items */}
                                    </div>
                                    <a
                                        className="carousel-control-prev"
                                        href="#carouselId"
                                        role="button"
                                        data-slide="prev"
                                    >
                                        <span
                                            className="carousel-control-prev-icon"
                                            aria-hidden="true"
                                        />
                                        <span className="sr-only">
                                            Previous
                                        </span>
                                    </a>
                                    <a
                                        className="carousel-control-next"
                                        href="#carouselId"
                                        role="button"
                                        data-slide="next"
                                    >
                                        <span
                                            className="carousel-control-next-icon"
                                            aria-hidden="true"
                                        />
                                        <span className="sr-only">Next</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* end_slider */}
                </div>
            </div>
        </div>
    );
};

export default ScrollAnimation;
