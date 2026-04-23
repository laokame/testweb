/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronRight, 
  Play, 
  Menu, 
  X, 
  Battery, 
  Zap, 
  CircleGauge, 
  Users, 
  ArrowRight,
  Facebook,
  Youtube,
  Instagram,
  Timer
} from 'lucide-react';

// --- Icons ---

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z"/>
  </svg>
);

const BYDLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 148 24" className={className} fill="currentColor">
    <path d="M12.4 0H8.3L0 24h4.4l1.8-5.3h8.3l1.8 5.3h4.4L12.4 0zm-5.1 14.8l2.6-7.5 2.6 7.5H7.3zM44.7 0h-4.4l-6.8 11.5L26.7 0h-4.4l8.9 14.3V24h4.4v-9.7L44.7 0zm19.8 0h-8.8v24h8.8c5.4 0 9.8-4.4 9.8-9.8v-4.4c0-5.4-4.4-9.8-9.8-9.8zm5.4 14.2c0 3-2.4 5.4-5.4 5.4h-4.4V4.4h4.4c3 0 5.4 2.4 5.4 5.4v4.4z" />
    <path d="M96.4 0H92.3L84 24h4.4l1.8-5.3h8.3l1.8 5.3h4.4L96.4 0zm-5.1 14.8l2.6-7.5 2.6 7.5H91.3z" />
    <path d="M116.4 12V0h-4.4v24h8.8c4.4 0 8-3.6 8-8s-3.6-8-8-8h-4.4zm4.4 7.6h-4.4v-3.2h4.4c1.8 0 3.2 1.4 3.2 3.2s-1.4 3.2-3.2 3.2zm0-10.8h-4.4V5.6h4.4c1.8 0 3.2 1.4 3.2 3.2s-1.4 3.2-3.2 3.2z" />
    <path d="M141.4 0h-8.8v24h8.8c3.8 0 6.8-3.1 6.8-6.9V6.9c0-3.8-3.1-6.9-6.8-6.9zm2.4 17.1c0 1.3-1.1 2.4-2.4 2.4h-4.4V4.5h4.4c1.3 0 2.4 1.1 2.4 2.4v10.2z" />
  </svg>
);

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Tổng quan', href: '#' },
    { name: 'Thiết kế', href: '#' },
    { name: 'Công nghệ', href: '#' },
    { name: 'An toàn', href: '#' },
    { name: 'Tiện nghi', href: '#' },
    { name: 'Thông số', href: '#' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-5 lg:py-8'}`}>
      <div className="container-custom flex justify-between items-center">
        <BYDLogo className={`h-5 lg:h-6 ${isScrolled ? 'text-byd-red' : 'text-white'}`} />

        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className={`text-xs font-bold transition-colors hover:text-byd-red ${isScrolled ? 'text-gray-700' : 'text-gray-100'}`}>
              {link.name}
            </a>
          ))}
          <button className="button-primary px-7">Đăng ký lái thử</button>
          <button className={`${isScrolled ? 'text-gray-800' : 'text-white'}`}>
            <Menu size={24} />
          </button>
        </div>

        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden p-2 text-white bg-byd-red rounded-lg">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-2xl border-t">
            <div className="container-custom py-8 flex flex-col space-y-6">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="text-lg font-bold text-gray-800" onClick={() => setIsMenuOpen(false)}>
                  {link.name}
                </a>
              ))}
              <button className="w-full py-4 bg-byd-red text-white font-bold rounded-full">Đăng ký lái thử</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden bg-[#F8F9FA]">
    {/* Design Shape */}
    <div className="absolute inset-0 z-0 pointer-events-none">
      <div className="absolute top-0 left-0 w-[60%] h-full bg-byd-red z-0" style={{ clipPath: 'polygon(0 0, 100% 0, 70% 100%, 0% 100%)' }} />
    </div>

    <div className="container-custom relative z-10 grid lg:grid-cols-2 gap-12 items-center w-full">
      <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="text-white pt-10">
        <div className="inline-block px-4 py-1 border border-white/30 backdrop-blur-sm rounded-lg text-[10px] font-bold uppercase tracking-widest mb-8">
          MPV THUẦN ĐIỆN 7 CHỖ
        </div>
        <h1 className="font-display text-7xl lg:text-[100px] font-bold mb-4 tracking-tighter leading-none">BYD M6</h1>
        <h2 className="text-xl lg:text-3xl font-light mb-10 leading-tight">
          KHÔNG GIAN RỘNG RÃI<br />
          <span className="font-bold underline decoration-white/20 underline-offset-8 decoration-2">HÀNH TRÌNH THÔNG MINH</span>
        </h2>
        <p className="text-white/80 max-w-sm mb-12 text-sm leading-relaxed">
          BYD M6 là sự kết hợp hoàn hảo giữa thiết kế hiện đại, công nghệ tiên tiến và hiệu suất vượt trội.
        </p>
        <div className="flex flex-wrap gap-6 items-center">
          <button className="button-outline flex items-center gap-2 group">
            Khám phá ngay <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="flex items-center gap-3 text-white font-bold text-sm">
            <div className="w-10 h-10 rounded-full border border-white flex items-center justify-center bg-white/10">
              <Play size={16} fill="white" />
            </div>
            Xem video
          </button>
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, scale: 0.9, x: 50 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ duration: 1 }} className="relative flex justify-end">
        <img src="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=1200" alt="BYD M6" className="w-full h-auto drop-shadow-2xl" />
      </motion.div>
    </div>
  </section>
);

const SpecsBar = () => {
  const specs = [
    { icon: <CircleGauge className="text-byd-red" />, value: '530', unit: 'km', label: 'Quãng đường (NEDC)' },
    { icon: <Zap className="text-byd-red" />, value: '150', unit: 'kW', label: 'Công suất tối đa' },
    { icon: <Timer className="text-byd-red" />, value: '310', unit: 'Nm', label: 'Mô-men xoắn cực đại' },
    { icon: <Users className="text-byd-red" />, value: '7', unit: 'chỗ', label: 'Số chỗ ngồi' },
    { icon: <Battery className="text-byd-red" />, value: '71.8', unit: 'kWh', label: 'Dung lượng pin' },
  ];

  return (
    <div className="container-custom -mt-16 relative z-20 pb-16">
      <div className="bg-white p-8 lg:p-12 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] grid grid-cols-2 lg:grid-cols-5 gap-8">
        {specs.map((spec, i) => (
          <div key={i} className="flex flex-col items-center text-center space-y-3 px-4 border-r last:border-0 border-gray-100">
            <div className="mb-2">{spec.icon}</div>
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-bold font-display">{spec.value}</span>
              <span className="text-xs text-gray-500 font-bold">{spec.unit}</span>
            </div>
            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{spec.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const SectionHeader = ({ tag, title }: { tag: string, title: string }) => (
  <div className="space-y-3 mb-6">
    <div className="flex items-center gap-2">
      <div className="w-6 h-0.5 bg-byd-red" />
      <span className="text-byd-red font-bold text-[11px] uppercase tracking-widest">{tag}</span>
    </div>
    <h3 className="text-3xl lg:text-4xl font-bold font-display leading-[1.1]">{title}</h3>
  </div>
);

const ColorOption = ({ active, color, name, onClick }: { active: boolean; color: string; name: string; onClick: () => void; key?: any }) => (
  <button onClick={onClick} className="flex flex-col items-center gap-3">
    <div className={`w-8 h-8 rounded-full border-2 p-0.5 transition-all ${active ? 'border-byd-red scale-110' : 'border-transparent'}`}>
      <div className="w-full h-full rounded-full border border-gray-200 shadow-inner" style={{ backgroundColor: color }} />
    </div>
    <span className={`text-[11px] font-bold uppercase tracking-tight ${active ? 'text-gray-900' : 'text-gray-400'}`}>{name}</span>
  </button>
);

const TechnologyCard = ({ title, desc, img }: { title: string, desc: string, img: string }) => (
  <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 group">
    <div className="h-44 overflow-hidden">
      <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
    </div>
    <div className="p-7">
      <h4 className="text-[15px] font-bold mb-3">{title}</h4>
      <p className="text-xs text-gray-400 leading-relaxed font-medium">{desc}</p>
    </div>
  </div>
);

export default function App() {
  const [activeColor, setActiveColor] = useState(0);
  const colors = [
    { name: 'Trắng ngọc trai', hex: '#FFFFFF', img: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=1200' },
    { name: 'Xanh dương', hex: '#1E40AF', img: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=1200' },
    { name: 'Đỏ ánh kim', hex: '#B91C1C', img: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&q=80&w=1200' },
    { name: 'Đen', hex: '#000000', img: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200' },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <SpecsBar />

      {/* Interior */}
      <section className="py-24 overflow-hidden">
        <div className="container-custom grid lg:grid-cols-2 gap-16 items-center">
          <div className="max-w-md">
            <SectionHeader tag="NỘI THẤT" title="Không gian tinh tế Tiện nghi vượt trội" />
            <p className="text-gray-500 text-sm leading-relaxed mb-8 font-medium">
              Khoang nội thất rộng rãi với vật liệu cao cấp, thiết kế tinh giản và hàng loạt tiện nghi thông minh mang đến trải nghiệm thoải mái cho mọi hành khách.
            </p>
            <button className="button-primary">Khám phá nội thất</button>
          </div>
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="rounded-[40px] overflow-hidden shadow-2xl">
            <img src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1000" className="w-full h-[450px] object-cover" />
          </motion.div>
        </div>
      </section>

      {/* Technology */}
      <section className="py-24 bg-[#F8F9FA]">
        <div className="container-custom text-center mb-16">
          <h3 className="text-lg font-bold font-display uppercase tracking-[0.4em] text-byd-red">CÔNG NGHỆ TIÊN TIẾN</h3>
          <div className="w-20 h-0.5 bg-byd-red mx-auto mt-4" />
        </div>
        <div className="container-custom grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <TechnologyCard title="Nền tảng e-Platform 3.0" desc="Tối ưu hiệu suất, tăng độ an toàn và tiết kiệm năng lượng." img="https://images.unsplash.com/photo-1541443131876-44b03de101c5?auto=format&fit=crop&q=80&w=400" />
          <TechnologyCard title="Màn hình cảm ứng 12.8 inch" desc="Giao diện hiện đại, hỗ trợ kết nối thông minh và điều khiển bằng giọng nói." img="https://images.unsplash.com/photo-1544210001-b4d2047b76d7?auto=format&fit=crop&q=80&w=400" />
          <TechnologyCard title="Hệ thống hỗ trợ lái xe ADAS" desc="Trang bị nhiều tính năng hỗ trợ lái xe an toàn và thông minh." img="https://images.unsplash.com/photo-1511125344552-e58a9e03885d?auto=format&fit=crop&q=80&w=400" />
          <TechnologyCard title="Sạc không dây 50W" desc="Sạc nhanh tiện lợi, luôn sẵn sàng cho mọi hành trình." img="https://images.unsplash.com/photo-1584433144859-1fc3ab84415a?auto=format&fit=crop&q=80&w=400" />
        </div>
      </section>

      {/* Design */}
      <section className="py-24">
        <div className="container-custom grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="order-2 lg:order-1 rounded-[40px] overflow-hidden shadow-2xl">
            <img src="https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&q=80&w=1000" className="w-full h-[450px] object-cover" />
          </motion.div>
          <div className="order-1 lg:order-2 max-w-md">
            <SectionHeader tag="THIẾT KẾ" title="Đường nét hiện đại Bứt phá mọi góc nhìn" />
            <p className="text-gray-500 text-sm leading-relaxed mb-8 font-medium">
              Ngoại hình năng động, thanh lịch với những đường nét tinh tế, tạo nên phong cách riêng biệt cho BYD M6.
            </p>
            <button className="button-primary">Khám phá thiết kế</button>
          </div>
        </div>
      </section>

      {/* Colors */}
      <section className="py-24 bg-white">
        <div className="container-custom text-center mb-16">
          <h3 className="text-lg font-bold font-display uppercase tracking-[0.4em]">MÀU SẮC NGOẠI THẤT</h3>
          <div className="w-20 h-0.5 bg-byd-red mx-auto mt-4" />
        </div>
        <div className="container-custom flex flex-col items-center">
          <AnimatePresence mode="wait">
            <motion.img key={activeColor} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} src={colors[activeColor].img} className="w-full max-w-4xl h-auto mb-16" />
          </AnimatePresence>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {colors.map((c, i) => (
              <ColorOption key={i} active={activeColor === i} color={c.hex} name={c.name} onClick={() => setActiveColor(i)} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="relative h-[300px] flex items-center">
        <img src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=1500" className="absolute inset-0 w-full h-full object-cover z-0" />
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="container-custom relative z-20 flex flex-col md:flex-row justify-between items-center gap-10 w-full">
          <div className="text-white text-center md:text-left">
            <h3 className="text-3xl lg:text-4xl font-bold font-display uppercase tracking-widest mb-2">SẴN SÀNG CHO HÀNH TRÌNH MỚI?</h3>
            <p className="text-white/70 text-sm font-medium">Đăng ký lái thử BYD M6 ngay hôm nay để cảm nhận sự khác biệt.</p>
          </div>
          <button className="button-primary py-5 px-14 group flex items-center gap-2 text-base shadow-xl shadow-red-500/20">ĐĂNG KÝ LÁI THỬ <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform"/></button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#121212] text-white pt-24 pb-12">
        <div className="container-custom grid lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-4 space-y-8">
            <BYDLogo className="h-5" />
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs font-medium">Build Your Dreams - Kiến tạo tương lai xanh với các giải pháp năng lượng sạch hàng đầu thế giới.</p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-byd-red hover:text-white transition-all"><Facebook size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-byd-red hover:text-white transition-all"><Youtube size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-byd-red hover:text-white transition-all"><TikTokIcon /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-byd-red hover:text-white transition-all"><Instagram size={18} /></a>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-byd-red mb-8">SẢN PHẨM</h4>
            <ul className="space-y-4 text-[13px] text-gray-500 font-bold">
              <li><a href="#" className="hover:text-white transition-colors">BYD M6</a></li>
              <li><a href="#" className="hover:text-white transition-colors">BYD Atto 3</a></li>
              <li><a href="#" className="hover:text-white transition-colors">BYD Dolphin</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Tất cả sản phẩm</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-byd-red mb-8">VỀ BYD</h4>
            <ul className="space-y-4 text-[13px] text-gray-500 font-bold">
              <li><a href="#" className="hover:text-white transition-colors">Giới thiệu</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Công nghệ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Tin tức</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Tuyển dụng</a></li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-byd-red mb-8">HỖ TRỢ KHÁCH HÀNG</h4>
            <ul className="space-y-4 text-[13px] text-gray-400 font-bold mb-10">
              <li><a href="#" className="hover:text-white transition-colors">Trung tâm hỗ trợ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Chính sách bảo hành</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Hướng dẫn sử dụng</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Liên hệ</a></li>
            </ul>
            <div className="relative group">
              <input type="email" placeholder="Nhập email của bạn" className="w-full bg-transparent border-b border-gray-800 py-3 text-xs focus:outline-none focus:border-byd-red transition-all" />
              <button className="absolute right-0 bottom-3 text-gray-500 group-focus-within:text-byd-red"><ArrowRight size={18} /></button>
            </div>
          </div>
        </div>

        <div className="container-custom pt-10 border-t border-gray-900/50 flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] text-gray-600 font-bold uppercase tracking-widest">
          <p>© 2024 BYD Auto Auto Vietnam. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Chính sách bảo mật</a>
            <a href="#" className="hover:text-white transition-colors">Điều khoản sử dụng</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
