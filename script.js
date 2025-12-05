/* إعدادات عامة */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --primary-color: #1a73e8;
    --secondary-color: #34a853;
    --accent-color: #fbbc04;
    --dark-color: #202124;
    --light-color: #f8f9fa;
    --gray-color: #5f6368;
    --border-color: #dadce0;
    --danger-color: #ea4335;
    --success-color: #34a853;
    --shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    --transition: all 0.3s ease;
}

body {
    font-family: 'Cairo', sans-serif;
    line-height: 1.6;
    color: var(--dark-color);
    background-color: #f5f7fa;
    direction: rtl;
}

.container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* شريط التنقل */
.navbar {
    background-color: white;
    box-shadow: var(--shadow);
    position: sticky;
    top: 0;
    z-index: 1000;
}

.navbar .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 20px;
}

.logo {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 1.5rem;
    color: var(--primary-color);
}

.logo i {
    font-size: 2rem;
}

.nav-links {
    display: flex;
    list-style: none;
    gap: 20px;
    align-items: center;
}

.nav-links a {
    text-decoration: none;
    color: var(--gray-color);
    padding: 8px 15px;
    border-radius: 5px;
    transition: var(--transition);
    display: flex;
    align-items: center;
    gap: 5px;
}

.nav-links a:hover,
.nav-links a.active {
    color: var(--primary-color);
    background-color: rgba(26, 115, 232, 0.1);
}

.btn-login {
    background-color: var(--primary-color);
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-family: 'Cairo', sans-serif;
    font-weight: 600;
    transition: var(--transition);
}

.btn-login:hover {
    background-color: #0d62d9;
}

.menu-toggle {
    display: none;
    background: none;
    border: none;
    font-size: 1.5rem;
    color: var(--primary-color);
    cursor: pointer;
}

/* الصفحات */
.page {
    display: none;
    padding: 30px 0;
}

.page.active {
    display: block;
}

.page-header {
    margin-bottom: 30px;
    text-align: center;
}

.page-header h2 {
    color: var(--primary-color);
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
}

/* الصفحة الرئيسية */
.hero {
    display: flex;
    align-items: center;
    gap: 40px;
    margin-bottom: 50px;
    background: white;
    padding: 40px;
    border-radius: 15px;
    box-shadow: var(--shadow);
}

.hero-text {
    flex: 1;
}

.hero-text h2 {
    font-size: 2.5rem;
    margin-bottom: 15px;
    color: var(--dark-color);
}

.hero-text h2 span {
    color: var(--primary-color);
}

.hero-text p {
    font-size: 1.1rem;
    color: var(--gray-color);
    margin-bottom: 25px;
}

.search-tabs {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
}

.tab-btn {
    padding: 10px 20px;
    background: none;
    border: 1px solid var(--border-color);
    border-radius: 5px;
    cursor: pointer;
    font-family: 'Cairo', sans-serif;
    transition: var(--transition);
}

.tab-btn.active {
    background-color: var(--primary-color);
    color: white;
    border-color: var(--primary-color);
}

.search-form {
    display: none;
}

.search-form.active {
    display: block;
    animation: fadeIn 0.5s;
}

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

.form-row {
    display: flex;
    gap: 15px;
    margin-bottom: 15px;
}

.form-group {
    flex: 1;
}

.form-group label {
    display: block;
    margin-bottom: 5px;
    font-weight: 600;
    color: var(--dark-color);
    display: flex;
    align-items: center;
    gap: 5px;
}

.form-group input,
.form-group select {
    width: 100%;
    padding: 12px;
    border: 1px solid var(--border-color);
    border-radius: 5px;
    font-family: 'Cairo', sans-serif;
    font-size: 1rem;
    transition: var(--transition);
}

.form-group input:focus,
.form-group select:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 2px rgba(26, 115, 232, 0.2);
}

.btn-primary {
    background-color: var(--primary-color);
    color: white;
    border: none;
    padding: 12px 30px;
    border-radius: 5px;
    cursor: pointer;
    font-family: 'Cairo', sans-serif;
    font-size: 1rem;
    font-weight: 600;
    transition: var(--transition);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
}

.btn-primary:hover {
    background-color: #0d62d9;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(26, 115, 232, 0.3);
}

.btn-search {
    width: 100%;
    margin-top: 20px;
}

.hero-image {
    flex: 1;
    border-radius: 10px;
    overflow: hidden;
}

.hero-image img {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 10px;
}

/* العروض الخاصة */
.offers-section {
    margin-top: 50px;
}

.offers-section h2 {
    text-align: center;
    margin-bottom: 30px;
    color: var(--dark-color);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
}

.offers-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 25px;
}

.offer-card {
    background: white;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: var(--shadow);
    transition: var(--transition);
}

.offer-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
}

.offer-card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.offer-content {
    padding: 20px;
}

.offer-content h3 {
    margin-bottom: 10px;
    color: var(--dark-color);
}

.offer-content p {
    color: var(--gray-color);
    margin-bottom: 15px;
    font-size: 0.9rem;
}

.offer-price {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--primary-color);
    margin-bottom: 15px;
}

.btn-secondary {
    background-color: white;
    color: var(--primary-color);
    border: 2px solid var(--primary-color);
    padding: 8px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-family: 'Cairo', sans-serif;
    font-weight: 600;
    transition: var(--transition);
}

.btn-secondary:hover {
    background-color: var(--primary-color);
    color: white;
}

/* نتائج البحث */
.results-container {
    display: flex;
    gap: 30px;
    margin-top: 30px;
}

.filters {
    width: 250px;
    background: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: var(--shadow);
    height: fit-content;
}

.filters h3 {
    margin-bottom: 20px;
    padding-bottom: 10px;
    border-bottom: 1px solid var(--border-color);
    color: var(--dark-color);
}

.filter-group {
    margin-bottom: 20px;
}

.filter-group h4 {
    margin-bottom: 10px;
    color: var(--gray-color);
    font-size: 0.9rem;
}

.filter-group label {
    display: block;
    margin-bottom: 8px;
    cursor: pointer;
    color: var(--dark-color);
}

.filter-group input[type="checkbox"] {
    margin-left: 8px;
}

.price-range {
    margin-top: 10px;
    font-weight: 600;
    color: var(--primary-color);
}

input[type="range"] {
    width: 100%;
    margin-top: 5px;
}

.results {
    flex: 1;
}

.result-card {
    background: white;
    border-radius: 10px;
    padding: 20px;
    margin-bottom: 20px;
    box-shadow: var(--shadow);
    transition: var(--transition);
}

.result-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.flight-header,
.hotel-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
    padding-bottom: 15px;
    border-bottom: 1px solid var(--border-color);
}

.flight-info,
.hotel-info {
    display: flex;
    align-items: center;
    gap: 15px;
}

.flight-price,
.hotel-price {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--primary-color);
}

.flight-details,
.hotel-details {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 15px;
}

.flight-time,
.hotel-rating {
    display: flex;
    align-items: center;
    gap: 10px;
}

.btn-book {
    background-color: var(--success-color);
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-family: 'Cairo', sans-serif;
    font-weight: 600;
    transition: var(--transition);
}

.btn-book:hover {
    background-color: #2a8b47;
}

/* حجوزاتي */
.bookings-tabs {
    display: flex;
    gap: 10px;
    margin-bottom: 30px;
    justify-content: center;
}

.booking-tab {
    padding: 10px 25px;
    background: none;
    border: 2px solid var(--border-color);
    border-radius: 5px;
    cursor: pointer;
    font-family: 'Cairo', sans-serif;
    font-weight: 600;
    transition: var(--transition);
}

.booking-tab.active {
    background-color: var(--primary-color);
    color: white;
    border-color: var(--primary-color);
}

.bookings-container {
    background: white;
    border-radius: 10px;
    padding: 30px;
    box-shadow: var(--shadow);
}

.booking-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    border: 1px solid var(--border-color);
    border-radius: 8px;
    margin-bottom: 15px;
    transition: var(--transition);
}

.booking-item:hover {
    border-color: var(--primary-color);
    background-color: rgba(26, 115, 232, 0.05);
}

.booking-status {
    padding: 5px 15px;
    border-radius: 20px;
    font-size: 0.85rem;
    font-weight: 600;
}

.status-upcoming {
    background-color: rgba(251, 188, 4, 0.2);
    color: #d4a000;
}

.status-completed {
    background-color: rgba(52, 168, 83, 0.2);
    color: var(--success-color);
}

.status-cancelled {
    background-color: rgba(234, 67, 53, 0.2);
    color: var(--danger-color);
}

/* صفحة حسابي */
.profile-container {
    display: flex;
    gap: 30px;
    background: white;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: var(--shadow);
}

.profile-sidebar {
    width: 250px;
    background-color: #f8f9fa;
    padding: 30px;
}

.profile-info {
    text-align: center;
    margin-bottom: 30px;
}

.profile-avatar {
    font-size: 4rem;
    color: var(--primary-color);
    margin-bottom: 15px;
}

.profile-info h3 {
    margin-bottom: 5px;
    color: var(--dark-color);
}

.profile-info p {
    color: var(--gray-color);
    margin-bottom: 5px;
}

.member-since {
    font-size: 0.9rem;
    color: var(--gray-color);
}

.profile-menu {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.profile-menu-item {
    padding: 12px 15px;
    text-align: right;
    background: none;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-family: 'Cairo', sans-serif;
    font-weight: 600;
    transition: var(--transition);
    color: var(--gray-color);
}

.profile-menu-item:hover,
.profile-menu-item.active {
    background-color: white;
    color: var(--primary-color);
    box-shadow: var(--shadow);
}

.profile-content {
    flex: 1;
    padding: 30px;
}

.profile-tab {
    display: none;
}

.profile-tab.active {
    display: block;
    animation: fadeIn 0.5s;
}

.profile-tab h3 {
    margin-bottom: 20px;
    color: var(--dark-color);
    padding-bottom: 10px;
    border-bottom: 1px solid var(--border-color);
}

.preferences-list {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-bottom: 30px;
}

.preference-item {
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
}

.preference-item input {
    margin-left: 0;
}

.notifications-list {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.notification-item {
    padding: 15px;
    border: 1px solid var(--border-color);
    border-radius: 5px;
    display: flex;
    align-items: center;
    gap: 15px;
}

.notification-time {
    font-size: 0.85rem;
    color: var(--gray-color);
}

/* نافذة منبثقة */
.modal {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 2000;
    justify-content: center;
    align-items: center;
}

.modal-content {
    background-color: white;
    padding: 30px;
    border-radius: 10px;
    width: 90%;
    max-width: 500px;
    max-height: 90vh;
    overflow-y: auto;
    position: relative;
}

.modal-content h2 {
    margin-bottom: 20px;
    color: var(--dark-color);
    display: flex;
    align-items: center;
    gap: 10px;
}

.close {
    position: absolute;
    top: 15px;
    left: 20px;
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--gray-color);
}

.close:hover {
    color: var(--dark-color);
}

.close-register {
    position: absolute;
    top: 15px;
    left: 20px;
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--gray-color);
}

.booking-modal,
.payment-modal {
    max-width: 700px;
}

.payment-methods {
    display: flex;
    gap: 15px;
    margin: 20px 0;
}

.payment-method {
    flex: 1;
    padding: 15px;
    border: 2px solid var(--border-color);
    border-radius: 5px;
    cursor: pointer;
    text-align: center;
    transition: var(--transition);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
}

.payment-method.active {
    border-color: var(--primary-color);
    background-color: rgba(26, 115, 232, 0.05);
}

.payment-method i {
    font-size: 1.5rem;
    color: var(--primary-color);
}

.payment-amount {
    font-size: 1.3rem;
    font-weight: 700;
    text-align: center;
    margin: 20px 0;
    color: var(--primary-color);
}

.payment-security {
    text-align: center;
    margin-top: 20px;
    color: var(--gray-color);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
}

/* التذييل */
footer {
    background-color: var(--dark-color);
    color: white;
    padding: 50px 0 20px;
    margin-top: 50px;
}

.footer-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 40px;
    margin-bottom: 30px;
}

.footer-section h3 {
    margin-bottom: 20px;
    color: white;
    display: flex;
    align-items: center;
    gap: 10px;
}

.footer-section p {
    color: #bdc1c6;
    margin-bottom: 15px;
    line-height: 1.8;
}

.footer-section ul {
    list-style: none;
}

.footer-section ul li {
    margin-bottom: 10px;
}

.footer-section ul li a {
    color: #bdc1c6;
    text-decoration: none;
    transition: var(--transition);
}

.footer-section ul li a:hover {
    color: white;
    padding-right: 5px;
}

.social-icons {
    display: flex;
    gap: 15px;
    margin-top: 20px;
}

.social-icons a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    color: white;
    text-decoration: none;
    transition: var(--transition);
}

.social-icons a:hover {
    background-color: var(--primary-color);
    transform: translateY(-3px);
}

.footer-bottom {
    text-align: center;
    padding-top: 20px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    color: #bdc1c6;
    font-size: 0.9rem;
}

/* تصميم متجاوب */
@media (max-width: 992px) {
    .hero {
        flex-direction: column;
        text-align: center;
    }
    
    .results-container {
        flex-direction: column;
    }
    
    .filters {
        width: 100%;
    }
    
    .profile-container {
        flex-direction: column;
    }
    
    .profile-sidebar {
        width: 100%;
    }
}

@media (max-width: 768px) {
    .nav-links {
        display: none;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background-color: white;
        flex-direction: column;
        padding: 20px;
        box-shadow: var(--shadow);
    }
    
    .nav-links.active {
        display: flex;
    }
    
    .menu-toggle {
        display: block;
    }
    
    .form-row {
        flex-direction: column;
        gap: 15px;
    }
    
    .flight-details,
    .hotel-details {
        flex-direction: column;
        gap: 15px;
        align-items: flex-start;
    }
    
    .booking-item {
        flex-direction: column;
        gap: 15px;
        align-items: flex-start;
    }
}

@media (max-width: 480px) {
    .container {
        padding: 0 15px;
    }
    
    .hero {
        padding: 25px;
    }
    
    .hero-text h2 {
        font-size: 2rem;
    }
    
    .offers-grid {
        grid-template-columns: 1fr;
    }
    
    .modal-content {
        padding: 20px;
    }
    
    .payment-methods {
        flex-direction: column;
    }
}
