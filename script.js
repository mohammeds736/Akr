// بيانات التطبيق
const flightsData = [
    {
        id: 1,
        airline: "الخطوط الليبية",
        from: "طرابلس",
        to: "القاهرة",
        departure: "08:00",
        arrival: "10:30",
        date: "2024-06-15",
        price: 450,
        class: "اقتصادية",
        duration: "2h 30m"
    },
    {
        id: 2,
        airline: "الطيران التركي",
        from: "طرابلس",
        to: "اسطنبول",
        departure: "14:30",
        arrival: "18:45",
        date: "2024-06-16",
        price: 650,
        class: "اقتصادية",
        duration: "3h 15m"
    },
    {
        id: 3,
        airline: "مصر للطيران",
        from: "بنغازي",
        to: "القاهرة",
        departure: "10:15",
        arrival: "12:30",
        date: "2024-06-17",
        price: 420,
        class: "اقتصادية",
        duration: "2h 15m"
    },
    {
        id: 4,
        airline: "طيران الإمارات",
        from: "طرابلس",
        to: "دبي",
        departure: "23:45",
        arrival: "06:30",
        date: "2024-06-18",
        price: 850,
        class: "رجال الأعمال",
        duration: "5h 45m"
    },
    {
        id: 5,
        airline: "تونس للطيران",
        from: "مصراتة",
        to: "تونس",
        departure: "09:30",
        arrival: "10:45",
        date: "2024-06-19",
        price: 380,
        class: "اقتصادية",
        duration: "1h 15m"
    }
];

const hotelsData = [
    {
        id: 1,
        name: "فندق كورنثيا طرابلس",
        location: "طرابلس",
        rating: 5,
        price: 180,
        amenities: ["وايفاي", "مسبح", "إفطار", "جيم"],
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 2,
        name: "فندق تيبستي بنغازي",
        location: "بنغازي",
        rating: 4,
        price: 120,
        amenities: ["وايفاي", "إفطار", "مواقف"],
        image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 3,
        name: "فندق السلام مصراتة",
        location: "مصراتة",
        rating: 3,
        price: 80,
        amenities: ["وايفاي", "إفطار"],
        image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 4,
        name: "فندق الواحة سبها",
        location: "سبها",
        rating: 3,
        price: 70,
        amenities: ["وايفاي"],
        image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 5,
        name: "فندق الزاوية",
        location: "الزاوية",
        rating: 2,
        price: 60,
        amenities: ["وايفاي"],
        image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
];

// تهيئة التطبيق
document.addEventListener('DOMContentLoaded', function() {
    initApp();
    setupEventListeners();
    displayFlights(flightsData);
    displayHotels(hotelsData);
    
    // تعيين التواريخ الافتراضية
    setDefaultDates();
});

// تهيئة التطبيق
function initApp() {
    // تحميل بيانات المستخدم من التخزين المحلي
    const user = localStorage.getItem('travelUser');
    if (user) {
        updateLoginButton(true);
    }
}

// إعداد التواريخ الافتراضية
function setDefaultDates() {
    const today = new Date().toISOString().split('T')[0];
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tomorrowStr = tomorrow.toISOString().split('T')[0];
    const nextWeek = new Date();
    nextWeek.setDate(nextWeek.getDate() + 7);
    const nextWeekStr = nextWeek.toISOString().split('T')[0];
    
    // تعيين التواريخ في حقول البحث
    const departureDate = document.getElementById('departureDate');
    const returnDate = document.getElementById('returnDate');
    const checkinDate = document.getElementById('checkinDate');
    const checkoutDate = document.getElementById('checkoutDate');
    
    if (departureDate) departureDate.value = today;
    if (returnDate) returnDate.value = tomorrowStr;
    if (checkinDate) checkinDate.value = today;
    if (checkoutDate) checkoutDate.value = tomorrowStr;
}

// إعداد مستمعي الأحداث
function setupEventListeners() {
    // التنقل السلس
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
                
                // تحديث القائمة النشطة
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                });
                this.classList.add('active');
            }
        });
    });
    
    // تبديل القائمة المتنقلة
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }
    
    // إغلاق القائمة عند النقر خارجها
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.navbar') && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }
    });
    
    // تبديل علامات البحث
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const tab = this.getAttribute('data-tab');
            
            // إزالة النشط من جميع الأزرار
            document.querySelectorAll('.tab-btn').forEach(b => {
                b.classList.remove('active');
            });
            
            // إضافة النشط للزر المحدد
            this.classList.add('active');
            
            // إخفاء جميع النماذج
            document.querySelectorAll('.search-form').forEach(form => {
                form.classList.remove('active');
            });
            
            // إظهار النموذج المحدد
            document.getElementById(tab + 'Form').classList.add('active');
        });
    });
    
    // فتح نافذة تسجيل الدخول
    const loginBtn = document.getElementById('loginBtn');
    if (loginBtn) {
        loginBtn.addEventListener('click', function() {
            const isLoggedIn = localStorage.getItem('travelUser');
            if (isLoggedIn) {
                logoutUser();
            } else {
                openModal('loginModal');
            }
        });
    }
    
    // إغلاق النوافذ المنبثقة
    document.querySelectorAll('.close').forEach(closeBtn => {
        closeBtn.addEventListener('click', function() {
            const modal = this.closest('.modal');
            if (modal) {
                closeModal(modal.id);
            }
        });
    });
    
    // إغلاق النافذة المنبثقة بالنقر خارجها
    window.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal')) {
            closeModal(e.target.id);
        }
    });
    
    // تسجيل الدخول
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            if (email && password) {
                // محاكاة تسجيل الدخول
                const userData = {
                    email: email,
                    name: email.split('@')[0]
                };
                
                localStorage.setItem('travelUser', JSON.stringify(userData));
                updateLoginButton(true);
                closeModal('loginModal');
                showNotification('تم تسجيل الدخول بنجاح!', 'success');
            }
        });
    }
    
    // تبديل بين تسجيل الدخول والتسجيل
    const showRegister = document.getElementById('showRegister');
    const showLogin = document.getElementById('showLogin');
    
    if (showRegister) {
        showRegister.addEventListener('click', function(e) {
            e.preventDefault();
            document.getElementById('loginForm').style.display = 'none';
            document.getElementById('registerForm').style.display = 'block';
        });
    }
    
    if (showLogin) {
        showLogin.addEventListener('click', function(e) {
            e.preventDefault();
            document.getElementById('registerForm').style.display = 'none';
            document.getElementById('loginForm').style.display = 'block';
        });
    }
    
    // إنشاء حساب جديد
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('regName').value;
            const email = document.getElementById('regEmail').value;
            const phone = document.getElementById('regPhone').value;
            const password = document.getElementById('regPassword').value;
            
            if (name && email && phone && password) {
                const userData = {
                    name: name,
                    email: email,
                    phone: phone
                };
                
                localStorage.setItem('travelUser', JSON.stringify(userData));
                updateLoginButton(true);
                closeModal('loginModal');
                showNotification('تم إنشاء الحساب بنجاح!', 'success');
            }
        });
    }
    
    // البحث عن الرحلات
    const searchFlightsBtn = document.getElementById('searchFlights');
    if (searchFlightsBtn) {
        searchFlightsBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const fromCity = document.getElementById('fromCity').value;
            const toCity = document.getElementById('toCity').value;
            
            if (!fromCity || !toCity) {
                showNotification('يرجى اختيار مدينتي المغادرة والوصول', 'error');
                return;
            }
            
            const filteredFlights = flightsData.filter(flight => {
                return (!fromCity || flight.from.includes(fromCity)) && 
                       (!toCity || flight.to.includes(toCity));
            });
            
            displayFlights(filteredFlights);
            
            // التمرير إلى قسم النتائج
            document.getElementById('flights').scrollIntoView({
                behavior: 'smooth'
            });
            
            showNotification(`عرض ${filteredFlights.length} رحلة`, 'info');
        });
    }
    
    // البحث عن الفنادق
    const searchHotelsBtn = document.getElementById('searchHotels');
    if (searchHotelsBtn) {
        searchHotelsBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const destination = document.getElementById('hotelDestination').value;
            
            if (!destination) {
                showNotification('يرجى اختيار الوجهة', 'error');
                return;
            }
            
            const filteredHotels = hotelsData.filter(hotel => {
                return hotel.location.includes(destination);
            });
            
            displayHotels(filteredHotels);
            
            // التمرير إلى قسم النتائج
            document.getElementById('hotels').scrollIntoView({
                behavior: 'smooth'
            });
            
            showNotification(`عرض ${filteredHotels.length} فندق`, 'info');
        });
    }
    
    // تصفية الرحلات حسب السعر
    const priceRange = document.getElementById('priceRange');
    if (priceRange) {
        priceRange.addEventListener('input', function() {
            const maxPrice = parseInt(this.value);
            document.getElementById('priceValue').textContent = `${maxPrice} دينار`;
            
            const filteredFlights = flightsData.filter(flight => flight.price <= maxPrice);
            displayFlights(filteredFlights);
        });
    }
    
    // تصفية حسب الخطوط الجوية
    document.querySelectorAll('.airline-filter').forEach(filter => {
        filter.addEventListener('change', filterFlights);
    });
    
    // تصفية حسب الوقت
    document.querySelectorAll('.time-filter').forEach(filter => {
        filter.addEventListener('change', filterFlights);
    });
    
    // نموذج الاتصال
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            showNotification('تم إرسال رسالتك بنجاح، سنتواصل معك قريباً', 'success');
            this.reset();
        });
    }
}

// عرض الرحلات
function displayFlights(flights) {
    const container = document.getElementById('flightResults');
    if (!container) return;
    
    container.innerHTML = '';
    
    if (flights.length === 0) {
        container.innerHTML = `
            <div class="no-results">
                <i class="fas fa-plane-slash"></i>
                <h3>لم يتم العثور على رحلات</h3>
                <p>جرب معايير بحث مختلفة</p>
            </div>
        `;
        return;
    }
    
    flights.forEach(flight => {
        const flightElement = document.createElement('div');
        flightElement.className = 'flight-card';
        flightElement.innerHTML = `
            <div class="flight-info">
                <div class="flight-time">
                    <div>
                        <strong>${flight.departure}</strong>
                        <p>${flight.from}</p>
                    </div>
                    <div style="text-align: center;">
                        <i class="fas fa-arrow-left"></i>
                        <p style="font-size: 0.9rem;">${flight.duration}</p>
                    </div>
                    <div>
                        <strong>${flight.arrival}</strong>
                        <p>${flight.to}</p>
                    </div>
                </div>
                <div style="margin-right: 1rem;">
                    <h4>${flight.airline}</h4>
                    <p style="color: #666;">${flight.class}</p>
                </div>
            </div>
            <div>
                <div class="flight-price">${flight.price} د.ل</div>
                <button class="btn-secondary book-btn" data-id="${flight.id}">احجز الآن</button>
            </div>
        `;
        
        container.appendChild(flightElement);
    });
    
    // إضافة مستمعي الأحداث لأزرار الحجز
    document.querySelectorAll('.book-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const flightId = parseInt(this.getAttribute('data-id'));
            bookFlight(flightId);
        });
    });
}

// عرض الفنادق
function displayHotels(hotels) {
    const container = document.getElementById('hotelResults');
    if (!container) return;
    
    container.innerHTML = '';
    
    if (hotels.length === 0) {
        container.innerHTML = `
            <div class="no-results">
                <i class="fas fa-hotel"></i>
                <h3>لم يتم العثور على فنادق</h3>
                <p>جرب وجهة أخرى</p>
            </div>
        `;
        return;
    }
    
    hotels.forEach(hotel => {
        const stars = '★'.repeat(hotel.rating) + '☆'.repeat(5 - hotel.rating);
        
        const hotelElement = document.createElement('div');
        hotelElement.className = 'hotel-card';
        hotelElement.innerHTML = `
            <img src="${hotel.image}" alt="${hotel.name}">
            <div class="hotel-details">
                <h3>${hotel.name}</h3>
                <p style="color: #666;">
                    <i class="fas fa-map-marker-alt"></i> ${hotel.location}
                </p>
                <div class="hotel-rating">${stars}</div>
                <div class="hotel-price">${hotel.price} د.ل / ليلة</div>
                <div style="margin: 1rem 0;">
                    ${hotel.amenities.map(amenity => 
                        `<span style="background: #f0f0f0; padding: 0.25rem 0.5rem; border-radius: 4px; margin-left: 0.5rem; font-size: 0.9rem;">${amenity}</span>`
                    ).join('')}
                </div>
                <button class="btn-secondary book-hotel-btn" data-id="${hotel.id}">احجز الآن</button>
            </div>
        `;
        
        container.appendChild(hotelElement);
    });
    
    // إضافة مستمعي الأحداث لأزرار الحجز
    document.querySelectorAll('.book-hotel-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const hotelId = parseInt(this.getAttribute('data-id'));
            bookHotel(hotelId);
        });
    });
}

// تصفية الرحلات
function filterFlights() {
    const selectedAirlines = Array.from(document.querySelectorAll('.airline-filter:checked'))
        .map(cb => cb.value);
    const selectedTimes = Array.from(document.querySelectorAll('.time-filter:checked'))
        .map(cb => cb.value);
    const maxPrice = parseInt(document.getElementById('priceRange').value) || 1000;
    
    const filteredFlights = flightsData.filter(flight => {
        // تصفية حسب الخطوط الجوية
        const airlineMatch = selectedAirlines.length === 0 || 
            selectedAirlines.some(airline => 
                flight.airline.toLowerCase().includes(airline)
            );
        
        // تصفية حسب السعر
        const priceMatch = flight.price <= maxPrice;
        
        // تصفية حسب الوقت
        let timeMatch = selectedTimes.length === 0;
        if (!timeMatch) {
            const hour = parseInt(flight.departure.split(':')[0]);
            if (selectedTimes.includes('morning') && hour >= 6 && hour < 12) timeMatch = true;
            if (selectedTimes.includes('afternoon') && hour >= 12 && hour < 18) timeMatch = true;
            if (selectedTimes.includes('evening') && (hour >= 18 || hour < 6)) timeMatch = true;
        }
        
        return airlineMatch && priceMatch && timeMatch;
    });
    
    displayFlights(filteredFlights);
}

// حجز رحلة
function bookFlight(flightId) {
    const flight = flightsData.find(f => f.id === flightId);
    if (!flight) return;
    
    const isLoggedIn = localStorage.getItem('travelUser');
    if (!isLoggedIn) {
        showNotification('يرجى تسجيل الدخول لإتمام الحجز', 'error');
        openModal('loginModal');
        return;
    }
    
    openBookingModal('flight', flight);
}

// حجز فندق
function bookHotel(hotelId) {
    const hotel = hotelsData.find(h => h.id === hotelId);
    if (!hotel) return;
    
    const isLoggedIn = localStorage.getItem('travelUser');
    if (!isLoggedIn) {
        showNotification('يرجى تسجيل الدخول لإتمام الحجز', 'error');
        openModal('loginModal');
        return;
    }
    
    openBookingModal('hotel', hotel);
}

// فتح نافذة الحجز
function openBookingModal(type, item) {
    const modalContent = document.getElementById('bookingContent');
    if (!modalContent) return;
    
    let content = '';
    
    if (type === 'flight') {
        content = `
            <h2>حجز رحلة طيران</h2>
            <div style="background: #f8f9fa; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                <h3>${item.from} → ${item.to}</h3>
                <p><strong>الخطوط الجوية:</strong> ${item.airline}</p>
                <p><strong>التاريخ:</strong> ${item.date}</p>
                <p><strong>الوقت:</strong> ${item.departure} - ${item.arrival}</p>
                <p><strong>المدة:</strong> ${item.duration}</p>
                <p><strong>الدرجة:</strong> ${item.class}</p>
                <p><strong>السعر:</strong> <span style="font-size: 1.5rem; color: #e74c3c;">${item.price} د.ل</span></p>
            </div>
            
            <form id="bookingForm">
                <div class="form-group">
                    <label>اسم المسافر</label>
                    <input type="text" placeholder="الاسم الكامل" required>
                </div>
                <div class="form-group">
                    <label>رقم الجواز</label>
                    <input type="text" placeholder="رقم الجواز" required>
                </div>
                <div class="form-group">
                    <label>البريد الإلكتروني</label>
                    <input type="email" placeholder="example@email.com" required>
                </div>
                <div class="form-group">
                    <label>رقم الهاتف</label>
                    <input type="tel" placeholder="09XXXXXXXX" required>
                </div>
                <button type="submit" class="btn-primary" style="width: 100%; margin-top: 1rem;">
                    تأكيد الحجز والدفع
                </button>
            </form>
        `;
    } else if (type === 'hotel') {
        content = `
            <h2>حجز فندق</h2>
            <div style="background: #f8f9fa; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                <h3>${item.name}</h3>
                <p><strong>الموقع:</strong> ${item.location}</p>
                <p><strong>التصنيف:</strong> ${item.rating} نجوم</p>
                <p><strong>السعر:</strong> <span style="font-size: 1.5rem; color: #e74c3c;">${item.price} د.ل / ليلة</span></p>
            </div>
            
            <form id="bookingForm">
                <div class="form-group">
                    <label>اسم الضيف</label>
                    <input type="text" placeholder="الاسم الكامل" required>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label>تاريخ الوصول</label>
                        <input type="date" required>
                    </div>
                    <div class="form-group">
                        <label>تاريخ المغادرة</label>
                        <input type="date" required>
                    </div>
                </div>
                <div class="form-group">
                    <label>عدد الغرف</label>
                    <select>
                        <option value="1">1 غرفة</option>
                        <option value="2">2 غرف</option>
                        <option value="3">3 غرف</option>
                    </select>
                </div>
                <div class="form-group">
                    <label>البريد الإلكتروني</label>
                    <input type="email" placeholder="example@email.com" required>
                </div>
                <button type="submit" class="btn-primary" style="width: 100%; margin-top: 1rem;">
                    تأكيد الحجز والدفع
                </button>
            </form>
        `;
    }
    
    modalContent.innerHTML = content;
    
    // إضافة مستمع الأحداث لنموذج الحجز
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            showNotification('تم تأكيد حجزك بنجاح!', 'success');
            closeModal('bookingModal');
        });
    }
    
    openModal('bookingModal');
}

// تحديث زر تسجيل الدخول
function updateLoginButton(isLoggedIn) {
    const loginBtn = document.getElementById('loginBtn');
    if (loginBtn) {
        if (isLoggedIn) {
            loginBtn.textContent = 'تسجيل الخروج';
            loginBtn.style.backgroundColor = '#e74c3c';
        } else {
            loginBtn.textContent = 'تسجيل الدخول';
            loginBtn.style.backgroundColor = '';
        }
    }
}

// تسجيل الخروج
function logoutUser() {
    localStorage.removeItem('travelUser');
    updateLoginButton(false);
    showNotification('تم تسجيل الخروج بنجاح', 'info');
}

// فتح النافذة المنبثقة
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

// إغلاق النافذة المنبثقة
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// عرض الإشعارات
function showNotification(message, type) {
    // إنشاء عنصر الإشعار
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
        <span>${message}</span>
    `;
    
    // إضافة أنماط CSS للإشعارات إذا لم تكن موجودة
    if (!document.querySelector('#notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            .notification {
                position: fixed;
                top: 20px;
                right: 20px;
                padding: 1rem 1.5rem;
                border-radius: 4px;
                color: white;
                display: flex;
                align-items: center;
                gap: 0.5rem;
                z-index: 3000;
                animation: slideIn 0.3s ease, fadeOut 0.3s ease 2.7s forwards;
                box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            }
            .notification.success { background-color: #27ae60; }
            .notification.error { background-color: #e74c3c; }
            .notification.info { background-color: #3498db; }
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            @keyframes fadeOut {
                from { opacity: 1; }
                to { opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }
    
    // إضافة الإشعار إلى الصفحة
    document.body.appendChild(notification);
    
    // إزالة الإشعار بعد 3 ثوان
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 3000);
}
