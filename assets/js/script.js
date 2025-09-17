
        // Navbar scroll effect
        window.addEventListener('scroll', function() {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('navbar-blur');
            } else {
                navbar.classList.remove('navbar-blur');
            }
        });

        // Hero Slider
        class HeroSlider {
            constructor() {
                this.slides = document.querySelectorAll('.hero-slide');
                this.dots = document.querySelectorAll('.slider-dot');
                this.currentSlide = 0;
                this.slideInterval = 5000;
                
                this.init();
            }
            
            init() {
                this.updateSlider();
                this.setupDots();
                this.startAutoPlay();
            }
            
            updateSlider() {
                this.slides.forEach((slide, index) => {
                    if (index === this.currentSlide) {
                        slide.style.opacity = '1';
                        slide.classList.add('active');
                    } else {
                        slide.style.opacity = '0';
                        slide.classList.remove('active');
                    }
                });
                
                this.dots.forEach((dot, index) => {
                    if (index === this.currentSlide) {
                        dot.style.opacity = '1';
                    } else {
                        dot.style.opacity = '0.5';
                    }
                });
                
                // Trigger fade-in animation for active slide content
                const activeSlide = this.slides[this.currentSlide];
                const content = activeSlide.querySelector('.fade-in');
                content.style.opacity = '0';
                content.style.transform = 'translateY(30px)';
                
                setTimeout(() => {
                    content.style.opacity = '1';
                    content.style.transform = 'translateY(0)';
                }, 100);
            }
            
            setupDots() {
                this.dots.forEach((dot, index) => {
                    dot.addEventListener('click', () => {
                        this.currentSlide = index;
                        this.updateSlider();
                        this.resetAutoPlay();
                    });
                });
            }
            
            nextSlide() {
                this.currentSlide = (this.currentSlide + 1) % this.slides.length;
                this.updateSlider();
            }
            
            startAutoPlay() {
                this.autoPlayInterval = setInterval(() => {
                    this.nextSlide();
                }, this.slideInterval);
            }
            
            resetAutoPlay() {
                clearInterval(this.autoPlayInterval);
                this.startAutoPlay();
            }
        }

        // Initialize slider
        const slider = new HeroSlider();

        // Intersection Observer for animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        // Observe all animation elements
        document.addEventListener('DOMContentLoaded', function() {
            const animatedElements = document.querySelectorAll('.fade-in, .slide-up, .scale-in');
            animatedElements.forEach(el => observer.observe(el));
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Service cards hover effect
        document.querySelectorAll('.service-card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-10px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });

        // Add loading animation
        window.addEventListener('load', function() {
            document.body.style.opacity = '0';
            document.body.style.transition = 'opacity 0.5s ease';
            
            setTimeout(() => {
                document.body.style.opacity = '1';
            }, 100);
        });
    





          
        // بيانات الأعمال
        const works = {
           1: {
                title: "تصميم لوحات وحروف بارزة ومضيئة",
                category: "تصميم",
                image: "./assets/img/lettering-design.webp",
                description: "تصميم وتنفيذ لوحات دعائية وحروف بارزة ومضيئة بجودة عالية لتعكس هوية علامتك التجارية بشكل احترافي وجذاب.",
                details: "قمنا بتصميم وتنفيذ لوحات دعائية وحروف بارزة مضيئة لمتجر تجاري، مع التركيز على إبراز العلامة التجارية بشكل واضح وجذاب. شمل العمل اختيار الخامات المناسبة، دراسة الإضاءة، وضمان تنفيذ متقن يتحمل مختلف الظروف الجوية مع لمسة عصرية.",
                results: "زيادة نسبة الوعي بالعلامة التجارية بنسبة 55% وجذب عملاء جدد خلال أول 3 أشهر بعد تركيب اللوحات."
            },

           2: {
                title: "التسويق الإلكتروني وإدارة الحملات الإعلانية",
                category: "تسويق",
                image: "./assets/img/electronic-marketing.png",
                description: "خدمات متكاملة في التسويق الإلكتروني وإدارة الحملات الإعلانية لزيادة الوعي بعلامتك التجارية وتحقيق أعلى عائد على الاستثمار.",
                details: "نقدم استراتيجيات تسويق إلكتروني شاملة تشمل إدارة الحملات الإعلانية على منصات مثل فيسبوك، إنستجرام، وجوجل، مع تحسين الاستهداف واستخدام أدوات تحليل متقدمة. هدفنا هو جذب العملاء المحتملين وتحويلهم إلى عملاء دائمين من خلال خطط مدروسة ومحتوى إبداعي يتناسب مع علامتك التجارية.",
                results: "حققنا زيادة بنسبة 200% في التفاعل والمبيعات لعملائنا خلال أول ثلاثة أشهر، مع خفض تكاليف الإعلانات بنسبة 35% بفضل استراتيجيات التحسين الذكية."
            },

          3: {
            title: "تصميم وبرمجة المواقع الإلكترونية",
            category: "برمجة وتصميم",
            image: "./assets/img/design-and-programming.png",
            description: "تصميم وتطوير مواقع إلكترونية احترافية تلبي احتياجات العملاء وتوفر تجربة مستخدم مميزة.",
            details: "تصميم وتطوير موقع إلكتروني متكامل لشركة 'نور تك' المتخصصة في الحلول الرقمية. شمل العمل تصميم واجهات عصرية متجاوبة، برمجة مخصصة لتحقيق الأداء العالي، وتحسين تجربة المستخدم مع ربط الموقع بأنظمة الدفع والتتبع.",
            results: "زيادة عدد العملاء بنسبة 150% خلال 3 أشهر وتحسين سرعة الموقع بنسبة 70% مما انعكس إيجابياً على تجربة المستخدم."
        },

          4: {
                title: "تصميم وتنفيذ لوحات نيون مضيئة",
                category: "تصميم",
                image: "./assets/img/implementation-of-lighting.webp",
                description: "تصميم وتنفيذ لوحات نيون مضيئة عصرية تضيف لمسة جاذبية مميزة لعلامتك التجارية.",
                details: "قمنا بتصميم وتنفيذ لوحات نيون مضيئة عالية الجودة لعلامة تجارية ناشئة، مع اختيار ألوان مميزة وتصميم إبداعي يعكس هوية المشروع. تم التركيز على الإضاءة المتوازنة والجمالية لتبرز في جميع الأوقات، مما يجعلها ملفتة للأنظار ليلاً ونهاراً.",
                results: "زادت نسبة الإقبال على المتجر بنسبة 45% بعد تركيب اللوحات الجديدة، وساهمت في تعزيز الهوية البصرية وجذب المزيد من العملاء."
            },

            5: {
                title: "حملات إعلانية على السوشيال ميديا",
                category: "تسويق",
                image: "./assets/img/media-ads.webp",
                description: "إدارة وتنفيذ حملات إعلانية احترافية على وسائل التواصل الاجتماعي مثل فيسبوك وإنستجرام وتيك توك لتحقيق أقصى انتشار وزيادة المبيعات.",
                details: "حملة إعلانية شاملة على منصات التواصل الاجتماعي لشركة 'ديكوريا' المتخصصة في الأثاث والديكور. تضمنت الحملة استراتيجيات دقيقة لاستهداف الجمهور حسب الاهتمامات والموقع الجغرافي والدخل، مع استخدام إعلانات كاروسيل وفيديو لتحقيق تفاعل أكبر.",
                results: "حققت الحملة زيادة في المبيعات بنسبة 60% وعائد استثمار بلغ 5.2 دولار لكل دولار، مع خفض تكلفة الاكتساب بنسبة 40%."
            },

            6: {
                title: "التصوير والمونتاج",
                category: "برمجة وتصميم",
                image: "./assets/img/photography-and-montage.png",
                description: "خدمات احترافية في التصوير والمونتاج لإبراز منتجاتك أو علامتك التجارية بأفضل صورة ممكنة.",
                details: "نقدم خدمات تصوير احترافية تشمل تصوير المنتجات، الفعاليات، والمحتوى الإعلاني، بالإضافة إلى المونتاج الإبداعي للفيديوهات. نحرص على إخراج محتوى بصري يجذب الانتباه ويعكس هوية العلامة التجارية بشكل مميز.",
                results: "زيادة التفاعل والمبيعات بنسبة 70% بعد استخدام الصور والفيديوهات الاحترافية في الحملات التسويقية."
            },
            7: {
            title: "تصميم وتنفيذ اللوجو والهوية البصرية",
            category: "تصميم",
            image: "./assets/img/logo-design.png",
            description: "تصميم وتنفيذ شعار وهوية بصرية احترافية تعكس قيم ورؤية علامتك التجارية بشكل مميز وجذاب.",
            details: "عملنا على تصميم وتنفيذ شعار وهوية بصرية متكاملة لشركة ناشئة، حيث قمنا بدراسة السوق والمنافسين لفهم هوية العلامة التجارية. شمل العمل اختيار الألوان والخطوط المناسبة، تصميم الشعار، وتطبيق الهوية البصرية على كافة وسائل التواصل والمواد الدعائية لضمان انسجام بصري كامل.",
            results: "تعزيز انطباع العلامة التجارية وزيادة الثقة بها، مما ساهم في جذب عملاء جدد وزيادة المبيعات بنسبة 40% خلال أول 6 أشهر."
        },
        8: {
            title: "تصميم المطويات والبروشورات",
            category: "تصميم",
            image: "./assets/img/brochures.png",
            description: "تصميم مطويات وبروشورات إبداعية لعرض خدماتك ومنتجاتك بشكل احترافي وجذاب يعكس هوية علامتك التجارية.",
            details: "قمنا بتصميم مطويات وبروشورات تسويقية لعلامة تجارية ناشئة، حيث ركزنا على تقديم تصاميم مبتكرة تساعد في عرض الخدمات والمنتجات بشكل واضح وجذاب. شمل العمل اختيار الألوان والخطوط بما يتناسب مع الهوية البصرية، وإعداد تصاميم قابلة للطباعة وملائمة للاستخدام الرقمي.",
            results: "ساهم التصميم الاحترافي في زيادة الوعي بالعلامة التجارية بنسبة 50%، وجذب عملاء جدد مما أدى إلى زيادة المبيعات خلال الأشهر الثلاثة الأولى."
        },



        };

        // تصفية الأعمال
        document.querySelectorAll('.filter-btn').forEach(button => {
            button.addEventListener('click', function() {
                
                document.querySelectorAll('.filter-btn').forEach(btn => {
                    btn.classList.remove('active', 'bg-primary', 'text-white');
                    btn.classList.add('bg-gray-200', 'text-gray-700');
                });
                
             
                this.classList.add('active', 'bg-primary', 'text-white');
                this.classList.remove('bg-gray-200', 'text-gray-700');
                
                const filter = this.getAttribute('data-filter');
                
                document.querySelectorAll('.work-item').forEach(item => {
                    if (filter === 'all' || item.classList.contains(filter)) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });

        // فتح نموذج التفاصيل
        document.querySelectorAll('.view-details').forEach(button => {
            button.addEventListener('click', function() {
                const workId = this.getAttribute('data-id');
                const work = works[workId];
                
                if (work) {
                    document.getElementById('modal-title').textContent = work.title;
                    
                    document.getElementById('modal-content').innerHTML = `
                        <div 
  class="w-full h-[500px] md:h-[600px] lg:h-[700px] bg-center bg-no-repeat rounded-lg rounded-5" 
  style="background-image: url('${work.image}'); background-size: contain ;">
</div>

                        <div>
                            <div class="mb-4">
                                <span class="inline-block px-3 py-1 bg-primary text-white rounded-full text-sm">${work.category}</span>
                            </div>
                            <h4 class="text-xl font-bold mb-2">عن المشروع</h4>
                            <p class="text-gray-700 mb-4">${work.details}</p>
                            <h4 class="text-xl font-bold mb-2">النتائج</h4>
                            <p class="text-gray-700">${work.results}</p>
                        </div>
                    `;
                    
                    const modal = document.getElementById('details-modal');
                    modal.classList.remove('opacity-0', 'pointer-events-none');
                    modal.classList.add('opacity-100');
                }
            });
        });

        
        document.getElementById('close-modal').addEventListener('click', function() {
            const modal = document.getElementById('details-modal');
            modal.classList.remove('opacity-100');
            modal.classList.add('opacity-0', 'pointer-events-none');
        });

       
        document.getElementById('details-modal').addEventListener('click', function(e) {
            if (e.target === this) {
                this.classList.remove('opacity-100');
                this.classList.add('opacity-0', 'pointer-events-none');
            }
        });
