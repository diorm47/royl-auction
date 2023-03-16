document.write(`
<aside class="sidebar"> 
    <div class="sidebar__wrapper">
        <div class="logo">
            <a href="index.html" class="logo-img">
                <img src="./img/logo.svg" alt="">
            </a>
            <h2 class="logo-text">ROYAL<br>AUCTION</h2>
        </div>
        <nav>
            <ul class="sidebar__menu">
                <li>
                    <a href="profile.html" class="sidebar__menu-item" id="sidebar__menu-link--profile">
                        <div class="sidebar__menu-item-icon">
                            <img src="./img/icons/nav/profile.svg" alt="">
                        </div>
                        Профиль
                    </a>
                </li>
                <li>
                    <a href="auctions.html" class="sidebar__menu-item" id="sidebar__menu-link--auctions">
                        <div class="sidebar__menu-item-icon">
                            <img src="./img/icons/nav/auctions.svg" alt="">
                        </div>
                        Аукционы
                    </a>
                </li>
                <li>
                    <a href="tockens.html" class="sidebar__menu-item is-hascounter" id="sidebar__menu-link--tockens">
                        <div class="sidebar__menu-item-icon">
                            <img src="./img/icons/nav/tockens.svg" alt="">
                        </div>
                        Токены
                        <div class="unread"></div>
                        <div class="counter">20</div>
                    </a>
                </li>
                <br><br>
                <li>
                    <a href="myauctions.html" class="sidebar__menu-item is-unread is-hascounter"
                        id="sidebar__menu-link--myauctions">
                        <div class="sidebar__menu-item-icon">
                            <img src="./img/icons/nav/myauctions.svg" alt="">
                        </div>
                        Мои аукционы
                        <div class="unread"></div>
                        <div class="counter">20</div>
                    </a>
                </li>
                <li>
                    <a href="winners.html" class="sidebar__menu-item" id="sidebar__menu-link--winners">
                        <div class="sidebar__menu-item-icon">
                            <img src="./img/icons/nav/winners.svg" alt="">
                        </div>
                        Лента победителей
                    </a>
                </li>
                <li>
                    <a href="referal.html" class="sidebar__menu-item" id="sidebar__menu-link--referal">
                        <div class="sidebar__menu-item-icon">
                            <img src="./img/icons/nav/referal.svg" alt="">
                        </div>
                        Партнерская программа
                    </a>
                </li>
                <br><br>
                <li>
                    <a href="news.html" class="sidebar__menu-item is-unread is-hascounter"
                        id="sidebar__menu-link--news">
                        <div class="sidebar__menu-item-icon">
                            <img src="./img/icons/nav/news.svg" alt="">
                        </div>
                        Новости
                        <div class="unread"></div>
                        <div class="counter">20</div>
                    </a>
                </li>
                <li>
                    <a href="notifications.html" class="sidebar__menu-item is-unread is-hascounter"
                        id="sidebar__menu-link--notifications">
                        <div class="sidebar__menu-item-icon">
                            <img src="./img/icons/nav/notifications.svg" alt="">
                        </div>
                        Уведомления
                        <div class="unread"></div>
                        <div class="counter">20</div>
                    </a>
                </li>
                <li>
                    <a href="##" class="sidebar__menu-item"
                        id="sidebar__menu-link--aboutus">
                        <div class="sidebar__menu-item-icon">
                            <img src="./img/icons/nav/aboutus.svg" alt="">
                        </div>
                        О нас
                    </a>
                </li>
                <br><br>
                <li>
                    <a href="faq.html" class="sidebar__menu-item" id="sidebar__menu-link--faq">
                        <div class="sidebar__menu-item-icon">
                            <img src="./img/icons/nav/faq.svg" alt="">
                        </div>
                        Частые вопросы
                    </a>
                </li>
                <li>
                    <a href="support.html" class="sidebar__menu-item" id="sidebar__menu-link--support">
                        <div class="sidebar__menu-item-icon">
                            <img src="./img/icons/nav/support.svg" alt="">
                        </div>
                        Техподдержка
                    </a>
                </li>
            </ul>
        </nav>

        <button class="sidebar__referal-btn">
            <div class="sidebar__referal-btn-img">
                <img src="./img/icons/nav/copy_link.svg" alt="">
            </div>
            Партнерская ссылка
        </button>
    </div>
</aside>
`);