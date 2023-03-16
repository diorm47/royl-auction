document.addEventListener('DOMContentLoaded', function () {
    const style_root = document.querySelector(':root')

    //sidebar menu current page highlight
    const current_page = document.querySelector('.page').id;
    const current_page_link = document.getElementById(`sidebar__menu-link--${current_page}`);
    if (current_page_link)
        current_page_link.classList.add("is-active");

    //sidebar menu collapse on 1279px
    const sidebar = document.querySelector(".sidebar");
    const expand_btn = document.querySelector("#header__menu-link--burger");
    if (expand_btn.style.display != 'none') {
        expand_btn.addEventListener("click", function () {
            sidebar.classList.toggle('is-collapsed');
            expand_btn.classList.toggle('is-active');
        });
    }

    if (window.innerWidth <= 1279) {
        sidebar.classList.add('is-collapsed');
    } else {
        sidebar.classList.remove('is-collapsed');
    }
    window.addEventListener("resize", function () {
        if (window.innerWidth <= 1279) {
            sidebar.classList.add('is-collapsed');
        } else {
            sidebar.classList.remove('is-collapsed');
        }
    });

    //header notification tooltip
    if (window.matchMedia("(pointer: coarse)").matches) {
        document.getElementById('header__menu-link--notifications').addEventListener('click', function (e) {
            if (e.target === this || e.target === this.querySelector('.header-notification-unread') || e.target === this.querySelector('.header__menu-item-img') || e.target === this.querySelector('.header__menu-item-img img'))
                e.preventDefault();
        })
    }
    window.addEventListener("resize", function () {
        if (window.matchMedia("(pointer: coarse)").matches) {
            document.querySelector('#header__menu-link--notifications').addEventListener('click', function (e) {
                if (e.target === this || e.target === this.querySelector('.header-notification-unread') || e.target === this.querySelector('.header__menu-item-img') || e.target === this.querySelector('.header__menu-item-img img'))
                    e.preventDefault();
            })
        }
    });

    //header menu language icon change
    let user_lang = navigator.language || navigator.userLanguage;
    document.getElementById('header__menu-link--language').style = `background: url('./img/icons/languages/${user_lang}.svg') center / contain no-repeat;`

    //page tab change
    const page_tab_btns = document.querySelectorAll('.page__tab-btn');

    if (page_tab_btns.length > 0) {
        for (let i = 0; i < page_tab_btns.length; i++) {

            if (page_tab_btns[i].classList.contains('is-active')) {
                document.getElementById(page_tab_btns[i].getAttribute("for")).classList.add('is-active');
            } else
                document.getElementById(page_tab_btns[i].getAttribute("for")).classList.remove('is-active');

            page_tab_btns[i].addEventListener("click", function (e) {
                page_tab_btns.forEach(element => {
                    element.classList.remove('is-active');
                    document.getElementById(element.getAttribute("for")).classList.remove('is-active');
                });

                document.getElementById(e.target.getAttribute("for")).classList.add('is-active');
                e.target.classList.add('is-active');
            });
        }
    }

    //modal windows
    const modal_wrapper = document.querySelector('.modal-wrapper');
    if (modal_wrapper) {
        function closemodal() {
            modal_wrapper.classList.remove("is-active");
            document.querySelector('.body').style.overflow = 'visible';
        }

        if (modal_wrapper.classList.contains('is-active')) {
            document.querySelector('.body').style.overflow = 'hidden';
            modal_wrapper.addEventListener("click", function (e) {
                if (e.target === this) {
                    e.preventDefault();
                    closemodal();
                }
            });
        }

        const modal_slider = new Swiper('.modal.swiper', {
            direction: 'horizontal',
            slidesPerView: '1',
            speed: 500,
            watchOverflow: false,
            loop: false,
            autoHeight: false,
            observer: true,
            observeParents: true,
            observeSlideChildren: true,
            allowTouchMove: false,
            pagination: {
                el: '.modal-pagination',
                type: 'bullets',
                clickable: true,
            },
            navigation: {
                nextEl: '.modal-nextel',
            }
        });


        const modal_nextbtn = document.querySelector('.modal-nextel');
        const modal_slides = document.querySelectorAll('.modal-slide');
        const modal_last_slide_index = modal_slides.length - 1;
        let real_index = 0;

        modal_nextbtn.removeAttribute('disabled');
        modal_slider.on('slideChange', function () {
            real_index = modal_slider.realIndex;
            modal_nextbtn.removeAttribute('disabled');
        });

        modal_nextbtn.addEventListener('click', function (e) {
            if (!modal_slider.animating)
                if (e.target.matches('[aria-disabled="true"]') && real_index === modal_last_slide_index)
                    closemodal();
        });
    }

    //barchart !!(required defined width and height on main parent (parent of barchart-wrapper))
    const barcharts = document.querySelectorAll('.barchart');
    if (barcharts.length > 0) {
        barcharts.forEach(barchart => {
            let data = [
                [1, 12000],
                [2, 15000],
                [3, 31000],
                [4, 0],
                [5, 2000],
                [6, 37000],
                [7, 20000],
            ]; // [index, key]

            let period = 'week'; //week, month
            let monthTicks = ["Янв", "Февр", "Март", "Апр", "Май", "Июнь", "Июль", "Авг", "Сент", "Окт", "Нояб", "Дек"];
            let weekTicks = ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"];
            let currency = 'roto';
            let currencyText = 'ROTO';
            let currencyColor = '#2F53FF';

            let barchartLegend = barchart.parentElement.querySelector(".barchart-heading-legend");
            let barchartTotal = barchart.parentElement.querySelector(".barchart-heading-total-span");
            let nav_select = barchart.parentElement.querySelector('.barchart-nav-select');
            let nav_radio_labels = barchart.parentElement.querySelectorAll('.barchart-nav-radio-label');

            nav_radio_labels.forEach(element => {
                if (element.previousElementSibling.checked == true) {
                    currency = element.previousElementSibling.getAttribute("value");
                    if (currency == 'roto') {
                        currencyText = 'ROTO';
                        currencyColor = '#2F53FF';
                    } else if (currency == 'rubble') {
                        currencyText = 'Руб.';
                        currencyColor = '#00FFA3';
                    }
                }
                drawBarChart();
                element.addEventListener("click", function (event) {
                    event.target.previousElementSibling.checked = true;
                    currency = event.target.previousElementSibling.getAttribute("value");
                    if (currency == 'roto') {
                        currencyText = 'ROTO';
                        currencyColor = '#2F53FF';
                    } else if (currency == 'rubble') {
                        currencyText = 'Руб.';
                        currencyColor = '#00FFA3';
                    }
                    drawBarChart();
                });
            });
            nav_select.addEventListener("change", function (event) {
                period = nav_select.value;
                if (period === 'month') {
                    data = [
                        [1, 300],
                        [2, 1500],
                        [3, 50],
                        [4, 0],
                        [5, 5],
                        [6, 10],
                        [7, 20],
                        [8, 2000],
                        [9, 500],
                        [10, 200],
                        [11, 300],
                        [12, 700],
                    ];
                } else if (period === 'week') {
                    data = [
                        [1, 12000],
                        [2, 15000],
                        [3, 31000],
                        [4, 0],
                        [5, 2000],
                        [6, 37000],
                        [7, 20000],
                    ];
                }
                drawBarChart();
            });
            window.addEventListener("resize", drawBarChart);


            function drawBarChart() {
                barchart.textContent = ''; //delete old barchart

                let totalProfit = 0;

                let xAxis = document.createElement('div');
                xAxis.classList.add('.barchart--xAxis');
                xAxis.style.position = 'absolute';
                xAxis.style.left = '0';
                xAxis.style.bottom = '0';
                xAxis.style.height = '1px';
                xAxis.style.width = '100%';
                xAxis.style.backgroundColor = 'rgba(255,255,255,0.1)';
                barchart.appendChild(xAxis);

                let yAxis = document.createElement('div');
                yAxis.classList.add('.barchart--yAxis');
                yAxis.style.position = 'absolute';
                yAxis.style.top = '-10px';
                yAxis.style.left = '10px';
                yAxis.style.bottom = '0';
                yAxis.style.height = 'calc(100% + 10px)';
                yAxis.style.width = '1px';
                yAxis.style.backgroundColor = 'rgba(255,255,255,0.1)';
                barchart.appendChild(yAxis);

                let xMax = 0;
                let yMax = 0;

                for (let i = 0; i < data.length; i++) {
                    if (data[i][0] > xMax) {
                        xMax = data[i][0];
                    }
                    if (data[i][1] > yMax) {
                        yMax = data[i][1];
                    }
                }

                let xScale = xAxis.offsetWidth / (xMax + 1);
                let yScale = (yAxis.offsetHeight - 10) / yMax;

                for (let i = 0; i < data.length; i++) {
                    let bar = document.createElement('div');
                    bar.classList.add('barchart-bar');
                    bar.style.height = (data[i][1] * yScale) + 'px';
                    bar.style.backgroundColor = currencyColor;
                    bar.style.top = (yAxis.offsetHeight - 10 - data[i][1] * yScale) + 'px';
                    bar.style.left = (data[i][0] * xScale) + 'px';
                    barchart.appendChild(bar);

                    bar.style.position = 'absolute';
                    bar.style.zIndex = '2';
                    bar.style.width = '2.5%';
                    bar.style.borderRadius = '24px';

                    let barLabel = document.createElement('div');
                    barLabel.classList.add('barchart-bar-label');
                    barLabel.textContent = data[i][1];
                    barLabel.style.color = currencyColor;

                    barLabel.style.fontWeight = '600';
                    barLabel.style.fontSize = '12px';
                    barLabel.style.position = 'absolute';
                    barLabel.style.left = '50%';
                    barLabel.style.WebkitTransform = 'translateX(-50%)';
                    barLabel.style.transform = 'translateX(-50%)';
                    barLabel.style.top = '-20px';
                    barLabel.style.backgroundColor = '#171A1E';

                    bar.appendChild(barLabel);


                    let xTick = document.createElement('div');
                    let xTick_line = document.createElement('div');
                    xTick.classList.add('barchart-xAxis-tick');
                    if (period === 'week')
                        xTick.textContent = weekTicks[data[i][0] - 1];
                    else if (period === 'month')
                        xTick.textContent = monthTicks[data[i][0] - 1]; //switch for more
                    xTick.style.position = 'absolute';
                    xTick.style.height = 'calc(100% + 10px)';
                    xTick.style.top = (yAxis.offsetHeight - data[i][0] * yScale) + 'px';
                    xTick.style.left = data[i][0] * xScale + 'px';
                    xTick.style.fontWeight = '300';
                    xTick.style.fontSize = '12px';
                    xTick.style.color = 'rgba(255,255,255,0.1)';

                    xTick_line.style.position = 'absolute';
                    xTick_line.style.top = 'calc(-100% - 10px)';
                    xTick_line.style.left = '5.5px';
                    xTick_line.style.backgroundColor = 'rgba(255,255,255,0.1)';
                    xTick_line.style.width = '0.5px';
                    xTick_line.style.height = '100%';
                    xTick.appendChild(xTick_line);
                    barchart.appendChild(xTick);


                    let yTick = document.createElement('div');
                    let yTick_line = document.createElement('div');
                    yTick.classList.add('barchart-yAxis-tick');
                    yTick.textContent = data[i][1];
                    yTick.style.position = 'absolute';
                    yTick.style.width = '100%';
                    yTick.style.top = (yAxis.offsetHeight - 10 - data[i][1] * yScale) - 6 + 'px';
                    yTick.style.left = -(data[i][1].toString().length + 1) + 'ch';
                    yTick.style.fontWeight = '300';
                    yTick.style.fontSize = '12px';
                    yTick.style.color = 'rgba(255,255,255,0.1)';

                    yTick_line.style.position = 'absolute';
                    yTick_line.style.left = `${(data[i][1].toString().length + 1 + 'ch')}`;
                    yTick_line.style.top = '50%';
                    yTick_line.style.transform = 'translateY(-50%)';
                    yTick_line.style.backgroundColor = 'rgba(255,255,255,0.1)';
                    yTick_line.style.height = '0.5px';
                    yTick_line.style.width = '100%';
                    yTick.appendChild(yTick_line);
                    barchart.appendChild(yTick);

                    totalProfit = totalProfit + data[i][1];

                }

                barchartLegend.textContent = currencyText;
                barchartLegend.style.color = currencyColor;
                barchartTotal.textContent = totalProfit.toString() + ' ' + currencyText;
            }
        });
    }
});

