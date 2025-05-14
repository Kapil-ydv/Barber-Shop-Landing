import "./index.css";

function App() {
  return (
    <div className="min-h-screen w-full bg-[#18181b] text-white">
      {/* Header/Navbar */}
      <header className="w-full sticky top-0 z-30 bg-[#1f1f1f] shadow-md border-b border-[#252529]">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
          <div className="flex items-center gap-2">
            {/* Placeholder for logo */}
            <span className="font-bold text-xl text-[#e8c266] tracking-tight">Fama Barber Shop</span>
          </div>
          <nav className="hidden md:flex gap-8 text-sm">
            <a href="#home" className="hover:text-[#e8c266] transition">Home</a>
            <a href="#about" className="hover:text-[#e8c266] transition">About</a>
            <a href="#services" className="hover:text-[#e8c266] transition">Services</a>
            <a href="#gallery" className="hover:text-[#e8c266] transition">Gallery</a>
            <a href="#contact" className="hover:text-[#e8c266] transition">Contact</a>
          </nav>
          <a href="#contact" className="ml-8 px-4 py-2 rounded bg-[#e8c266] text-[#18181b] font-bold hover:brightness-90 transition">Book Now</a>
        </div>
      </header>

      {/* Hero / Banner Section */}
      <section id="home" className="w-full bg-[#18181b] min-h-[550px] flex items-center">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 py-12 px-6 w-full">
          {/* Left: Text */}
          <div className="max-w-xl space-y-6">
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
              Classic Cuts, Modern Style<br />
              <span className="text-[#e8c266]">Premium Barber Shop</span>
            </h1>
            <div className="flex items-center gap-4">
              <span className="text-yellow-400 text-lg font-semibold">4.6 ★</span>
              <span className="text-sm text-[#cfcfcf]">116+ reviews</span>
              <span className="text-xs px-2 py-1 rounded bg-green-700/80 text-green-100 ml-3">Open ⋅ Closes 7 pm</span>
            </div>
            <a href="#contact" className="inline-block px-8 py-3 mt-2 rounded bg-[#e8c266] text-[#18181b] text-lg font-semibold shadow-sm hover:brightness-90 transition">Book Your Appointment</a>
          </div>
          {/* Right: Main image placeholder */}
          <img src="https://ext.same-assets.com/336778205/1645779418.webp" alt="Barber shop team" className="rounded-lg shadow-lg object-cover w-[350px] h-[220px] md:w-[400px] md:h-[270px] border border-[#252529] bg-[#232323]" />
        </div>
      </section>

      {/* "Our Barber Services" Section */}
      <section id="services" className="py-16 bg-[#18181b]">
        <div className="max-w-6xl mx-auto px-6">
          <p className="uppercase text-xs text-[#e8c266] font-semibold tracking-wide mb-3 text-center">Premium Grooming</p>
          <h2 className="text-3xl font-bold mb-3 text-center">Our Barber Services</h2>
          <p className="text-center text-[#cfcfcf] max-w-xl mx-auto mb-12">
            Professional barbering services to keep you looking sharp for everyday confidence or special occasions.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Haircuts */}
            <div className="bg-[#232323] rounded-xl p-7 shadow text-center border border-[#252529]">
              <img src="https://ext.same-assets.com/336778205/548389142.svg" alt="Haircuts Icon" className="w-12 h-12 mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-2">Haircuts</h3>
              <p className="text-[#cfcfcf] mb-3">Precision haircuts tailored to your style, from classic cuts to modern fades.</p>
              <ul className="text-[#e8c266] text-sm space-y-1">
                <li>Classic Cuts</li>
                <li>Modern Styles</li>
              </ul>
            </div>
            {/* Beard Services */}
            <div className="bg-[#232323] rounded-xl p-7 shadow text-center border border-[#252529]">
              <img src="https://ext.same-assets.com/336778205/2838098675.svg" alt="Beard Services Icon" className="w-12 h-12 mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-2">Beard Services</h3>
              <p className="text-[#cfcfcf] mb-3">Expert beard shaping, trims, and relaxing hot towel shaves for the best look.</p>
              <ul className="text-[#e8c266] text-sm space-y-1">
                <li>Beard Trims</li>
                <li>Beard Shaping</li>
              </ul>
            </div>
            {/* Premium Services */}
            <div className="bg-[#232323] rounded-xl p-7 shadow text-center border border-[#252529]">
              <img src="https://ext.same-assets.com/336778205/2018733539.svg" alt="Premium Services Icon" className="w-12 h-12 mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-2">Premium Services</h3>
              <p className="text-[#cfcfcf] mb-3">Hair coloring, scalp treatments, and event styling for a polished presence.</p>
              <ul className="text-[#e8c266] text-sm space-y-1">
                <li>Hair Coloring</li>
                <li>Scalp Treatments</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* "Why Choose Us" Section */}
      <section id="why" className="py-16 bg-[#232323]">
        <div className="max-w-6xl mx-auto px-6">
          <p className="uppercase text-xs text-[#e8c266] font-semibold tracking-wide mb-3 text-center">Our Commitment</p>
          <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Fama Barber Shop?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* 1. Expert Barbers */}
            <div className="bg-[#18181b] rounded-xl p-7 shadow border border-[#252529] text-center">
              <img src="https://ext.same-assets.com/336778205/2563901416.svg" alt="Expert Barbers" className="w-10 h-10 mx-auto mb-3" />
              <h3 className="font-semibold text-lg mb-2 text-[#e8c266]">Expert Barbers</h3>
              <p className="text-[#d1d1d1]">Our team is made up of highly skilled, experienced barbers specializing in classic and modern techniques.</p>
            </div>
            {/* 2. Premium Tools & Products */}
            <div className="bg-[#18181b] rounded-xl p-7 shadow border border-[#252529] text-center">
              <img src="https://ext.same-assets.com/336778205/4061061103.svg" alt="Premium Tools" className="w-10 h-10 mx-auto mb-3" />
              <h3 className="font-semibold text-lg mb-2 text-[#e8c266]">Premium Tools & Products</h3>
              <p className="text-[#d1d1d1]">Only the highest quality tools and products for superior results & healthy hair.</p>
            </div>
            {/* 3. Classic Experience */}
            <div className="bg-[#18181b] rounded-xl p-7 shadow border border-[#252529] text-center">
              <img src="https://ext.same-assets.com/336778205/4252861238.svg" alt="Classic Experience" className="w-10 h-10 mx-auto mb-3" />
              <h3 className="font-semibold text-lg mb-2 text-[#e8c266]">Classic Barbershop Experience</h3>
              <p className="text-[#d1d1d1]">Relax in a welcoming shop with traditional atmosphere and personal service.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 bg-[#18181b]">
        <div className="max-w-6xl mx-auto px-6">
          <p className="uppercase text-xs text-[#e8c266] font-semibold tracking-wide mb-3 text-center">What Our Clients Say</p>
          <h2 className="text-3xl font-bold mb-8 text-center">Client Testimonials</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#232323] rounded-xl p-7 shadow border border-[#252529] flex flex-col items-center">
              <span className="text-5xl text-[#e8c266] mb-2">“</span>
              <p className="text-[#e0e0e0] flex-1">I always get my haircut at Fama. The environment is welcoming, staff is attentive, and I leave looking sharp every time!</p>
              <div className="mt-4 flex flex-col items-center">
                <span className="font-semibold text-lg text-[#e8c266]">Sam W.</span>
                <span className="text-sm text-gray-400">Regular Customer</span>
              </div>
            </div>
            <div className="bg-[#232323] rounded-xl p-7 shadow border border-[#252529] flex flex-col items-center">
              <span className="text-5xl text-[#e8c266] mb-2">“</span>
              <p className="text-[#e0e0e0] flex-1">Costly compared to other barbershops with better haircuts.</p>
              <div className="mt-4 flex flex-col items-center">
                <span className="font-semibold text-lg text-[#e8c266]">Google Review</span>
                <span className="text-sm text-gray-400">Verified User</span>
              </div>
            </div>
            <div className="bg-[#232323] rounded-xl p-7 shadow border border-[#252529] flex flex-col items-center">
              <span className="text-5xl text-[#e8c266] mb-2">“</span>
              <p className="text-[#e0e0e0] flex-1">Staff are super friendly and professional. My kids actually enjoy coming for their trims!</p>
              <div className="mt-4 flex flex-col items-center">
                <span className="font-semibold text-lg text-[#e8c266]">Maria P.</span>
                <span className="text-sm text-gray-400">Parent & Client</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 bg-[#232323]">
        <div className="max-w-6xl mx-auto px-6">
          <p className="uppercase text-xs text-[#e8c266] font-semibold tracking-wide mb-3 text-center">Quality Barbering at Fair Prices</p>
          <h2 className="text-3xl font-bold mb-8 text-center">Our Service Prices</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Classic Services */}
            <div className="bg-[#18181b] border border-[#e8c266] rounded-xl p-8 shadow-lg shadow-yellow-500/10 flex flex-col items-center">
              <div className="uppercase bg-[#e8c266] px-4 py-1 text-xs font-bold text-[#18181b] rounded-full mb-3">Most Popular</div>
              <h3 className="font-bold text-xl mb-2 text-[#e8c266]">Classic Services</h3>
              <div className="text-4xl font-bold mb-2">$25</div>
              <p className="mb-4 text-[#cfcfcf]">per cut</p>
              <ul className="text-[#e8c266] text-sm text-left mb-6 space-y-1">
                <li>Men's Haircut</li>
                <li>Kids Haircut (12 & under)</li>
                <li>Senior Haircut (65+)</li>
                <li>Military/First Responder Cut</li>
                <li>Basic Beard Trim</li>
                <li>Neck & Line Cleanup</li>
              </ul>
              <a href="#contact" className="block px-5 py-2 mt-auto bg-[#e8c266] text-[#18181b] rounded font-bold text-center hover:brightness-90 transition">Book Classic</a>
            </div>
            {/* Premium Services */}
            <div className="bg-[#18181b] border border-[#252529] rounded-xl p-8 shadow flex flex-col items-center">
              <h3 className="font-bold text-xl mb-2 text-[#e8c266]">Premium Services</h3>
              <div className="text-4xl font-bold mb-2">$35</div>
              <p className="mb-4 text-[#cfcfcf]">per session</p>
              <ul className="text-[#e8c266] text-sm text-left mb-6 space-y-1">
                <li>Haircut & Beard Combo</li>
                <li>Hot Towel Shave</li>
                <li>Full Beard Shaping & Design</li>
                <li>Color Camo</li>
                <li>Hair & Scalp Treatment</li>
                <li>Head Shave with Hot Towel</li>
              </ul>
              <a href="#contact" className="block px-5 py-2 mt-auto bg-[#e8c266] text-[#18181b] rounded font-bold text-center hover:brightness-90 transition">Book Premium</a>
            </div>
            {/* Packages */}
            <div className="bg-[#18181b] border border-[#252529] rounded-xl p-8 shadow flex flex-col items-center">
              <h3 className="font-bold text-xl mb-2 text-[#e8c266]">Packages</h3>
              <div className="text-4xl font-bold mb-2">$50</div>
              <p className="mb-4 text-[#cfcfcf]">per package</p>
              <ul className="text-[#e8c266] text-sm text-left mb-6 space-y-1">
                <li>The Works (Cut, Shave, Treatment)</li>
                <li>Father & Son Combo</li>
                <li>Groom's Package</li>
                <li>Monthly Membership (2 cuts/mo)</li>
                <li>First-Time Client Special</li>
                <li>Loyalty Program</li>
              </ul>
              <a href="#contact" className="block px-5 py-2 mt-auto bg-[#e8c266] text-[#18181b] rounded font-bold text-center hover:brightness-90 transition">Book Package</a>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 bg-[#18181b]">
        <div className="max-w-6xl mx-auto px-6">
          <p className="uppercase text-xs text-[#e8c266] font-semibold tracking-wide mb-3 text-center">Our Work & Shop</p>
          <h2 className="text-3xl font-bold mb-8 text-center">Barbershop Gallery</h2>
          <div className="flex flex-wrap gap-5 justify-center items-center">
            <img src="https://ext.same-assets.com/336778205/1645779418.webp" alt="Shop/Service" className="rounded-xl shadow border border-[#252529] w-72 h-48 object-cover bg-[#18181b]" />
            <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80" alt="Gallery 2" className="rounded-xl shadow border border-[#252529] w-72 h-48 object-cover bg-[#18181b]" />
            <img src="https://images.unsplash.com/photo-1519479082130-35e3b2943395?auto=format&fit=crop&w=400&q=80" alt="Gallery 3" className="rounded-xl shadow border border-[#252529] w-72 h-48 object-cover bg-[#18181b]" />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-16 bg-[#232323]">
        <div className="max-w-6xl mx-auto px-6">
          <p className="uppercase text-xs text-[#e8c266] font-semibold tracking-wide mb-3 text-center">Expert Stylists</p>
          <h2 className="text-3xl font-bold mb-8 text-center">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Team Member Placeholder */}
            <div className="bg-[#18181b] rounded-xl p-7 shadow border border-[#252529] flex flex-col items-center">
              <img src="https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&w=200&q=80" alt="Team 1" className="w-24 h-24 rounded-full border-4 border-[#e8c266] mb-4 object-cover" />
              <h3 className="font-semibold text-lg text-[#e8c266] mb-1">Carlos Perez</h3>
              <p className="text-[#d1d1d1] mb-1">Owner & Master Barber</p>
              <p className="text-sm text-neutral-400">15+ years blending traditional techniques with current styles.</p>
            </div>
            <div className="bg-[#18181b] rounded-xl p-7 shadow border border-[#252529] flex flex-col items-center">
              <img src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?auto=format&fit=crop&w=200&q=80" alt="Team 2" className="w-24 h-24 rounded-full border-4 border-[#e8c266] mb-4 object-cover" />
              <h3 className="font-semibold text-lg text-[#e8c266] mb-1">Stephanie Liu</h3>
              <p className="text-[#d1d1d1] mb-1">Senior Barber</p>
              <p className="text-sm text-neutral-400">Precision fades, beard sculpting, and detail work.</p>
            </div>
            <div className="bg-[#18181b] rounded-xl p-7 shadow border border-[#252529] flex flex-col items-center">
              <img src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=200&q=80" alt="Team 3" className="w-24 h-24 rounded-full border-4 border-[#e8c266] mb-4 object-cover" />
              <h3 className="font-semibold text-lg text-[#e8c266] mb-1">Marcus Brown</h3>
              <p className="text-[#d1d1d1] mb-1">Barber & Stylist</p>
              <p className="text-sm text-neutral-400">Modern styles & creative hair designs specialist.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Location / Contact Section */}
      <section id="location" className="py-16 bg-[#18181b]">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row gap-8 items-stretch">
          <div className="flex-1 bg-[#232323] p-8 rounded-xl border border-[#252529] flex flex-col justify-center">
            <h3 className="font-semibold text-xl mb-3 text-[#e8c266]">Visit Us</h3>
            <div className="text-[#e0e0e0] mb-4">500 N Bell Ave #109, Denton, TX 76209<br />United States</div>
            <div className="mb-2"><span className="font-semibold text-[#e8c266]">Phone:</span> <a href="tel:+19406129127" className="text-[#e8c266] hover:underline">+1 940-612-9127</a></div>
            <a href="https://www.google.com/maps/place/500+N+Bell+Ave+%23109,+Denton,+TX+76209" target="_blank" rel="noopener noreferrer" className="block mt-3 px-4 py-2 bg-[#e8c266] text-[#18181b] rounded font-bold text-center hover:brightness-90">Get Directions</a>
            <div className="mt-4 text-sm text-[#8e8e8e]">Open &bull; Closes 7 pm</div>
          </div>
          <div className="flex-1 h-72 bg-[#232323] rounded-xl border border-[#252529] overflow-hidden">
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps?q=500+N+Bell+Ave+%23109,+Denton,+TX+76209&output=embed"
              width="100%"
              height="100%"
              style={{border:0,minHeight:'100%',width:'100%'}}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 bg-[#232323]">
        <div className="max-w-2xl mx-auto px-6">
          <p className="uppercase text-xs text-[#e8c266] font-semibold tracking-wide mb-3 text-center">Common Questions</p>
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="divide-y divide-[#252529]">
            {/* FAQ accordions - simple manual accordions for most common Qs */}
            <details className="py-4">
              <summary className="cursor-pointer font-semibold text-[#e8c266]">Do I need to book an appointment or accept walk-ins?</summary>
              <p className="text-[#e0e0e0] mt-2">Both! Walk-ins are welcome, but appointments ensure the fastest service.</p>
            </details>
            <details className="py-4">
              <summary className="cursor-pointer font-semibold text-[#e8c266]">What should I expect for my first visit?</summary>
              <p className="text-[#e0e0e0] mt-2">You'll be greeted by friendly staff, and your barber will discuss your preferred style before getting started.</p>
            </details>
            <details className="py-4">
              <summary className="cursor-pointer font-semibold text-[#e8c266]">How far in advance can I pre-book my appointment?</summary>
              <p className="text-[#e0e0e0] mt-2">Appointments are available up to 30 days in advance.</p>
            </details>
            <details className="py-4">
              <summary className="cursor-pointer font-semibold text-[#e8c266]">How do you handle payment and tips?</summary>
              <p className="text-[#e0e0e0] mt-2">We accept cash and all major credit cards. Tips can be left by card or cash to your barber directly.</p>
            </details>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="py-16 bg-[#18181b]">
        <div className="max-w-2xl mx-auto px-6">
          <p className="uppercase text-xs text-[#e8c266] font-semibold tracking-wide mb-3 text-center">Book Your Appointment</p>
          <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>
          <form className="space-y-6 bg-[#232323] p-8 rounded-xl border border-[#252529] shadow-lg">
            <div className="grid md:grid-cols-2 gap-6">
              <input type="text" placeholder="Your Name" required className="w-full px-4 py-3 rounded bg-[#18181b] text-white border border-[#252529] focus:outline-none focus:border-[#e8c266] placeholder:text-[#7a7a7a]" />
              <input type="tel" placeholder="Phone Number" required className="w-full px-4 py-3 rounded bg-[#18181b] text-white border border-[#252529] focus:outline-none focus:border-[#e8c266] placeholder:text-[#7a7a7a]" />
            </div>
            <input type="text" placeholder="Service Interested In" className="w-full px-4 py-3 rounded bg-[#18181b] text-white border border-[#252529] focus:outline-none focus:border-[#e8c266] placeholder:text-[#7a7a7a]" />
            <input type="date" placeholder="Preferred Date" className="w-full px-4 py-3 rounded bg-[#18181b] text-white border border-[#252529] focus:outline-none focus:border-[#e8c266] placeholder:text-[#7a7a7a]" />
            <textarea placeholder="Message" className="w-full px-4 py-3 rounded bg-[#18181b] text-white border border-[#252529] focus:outline-none focus:border-[#e8c266] min-h-[90px] placeholder:text-[#7a7a7a]"></textarea>
            <button type="submit" className="w-full py-3 bg-[#e8c266] text-[#18181b] font-bold rounded shadow hover:brightness-90 transition">Send Message</button>
          </form>
          <div className="text-center text-xs text-[#888] mt-4">We'll get back to you as soon as possible.</div>
        </div>
      </section>

      {/* Footer / Newsletter Section */}
      <footer className="w-full bg-[#e8c266] text-[#18181b] pt-8 pb-4 mt-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row gap-8 md:gap-4 justify-between">
          <div>
            <div className="font-bold text-xl mb-2">Fama Barber Shop</div>
            <div className="flex gap-4 mt-2">
              <a href="#" className="hover:text-[#433e38]">Instagram</a>
              <a href="#" className="hover:text-[#433e38]">Facebook</a>
            </div>
          </div>
          <div>
            <div className="font-semibold mb-2">Quick Links</div>
            <div className="flex flex-col gap-1">
              <a href="#home" className="hover:text-[#433e38]">Home</a>
              <a href="#about" className="hover:text-[#433e38]">About</a>
              <a href="#services" className="hover:text-[#433e38]">Services</a>
              <a href="#gallery" className="hover:text-[#433e38]">Gallery</a>
              <a href="#contact" className="hover:text-[#433e38]">Contact</a>
            </div>
          </div>
          <div>
            <div className="font-semibold mb-2">Contact Us</div>
            <div className="text-sm">
              500 N Bell Ave #109<br />Denton, TX 76209<br />+1 940-612-9127
            </div>
          </div>
          <div>
            <div className="font-semibold mb-2">Newsletter</div>
            <form className="flex gap-2">
              <input type="email" placeholder="Your email" className="px-3 py-2 rounded bg-[#fffbe5] text-[#18181b] border border-[#d4ad49]" />
              <button type="submit" className="px-4 py-2 rounded bg-[#18181b] text-[#e8c266] font-bold hover:bg-[#433e38] transition">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="text-center text-xs mt-4 opacity-75">&copy; {new Date().getFullYear()} Fama Barber Shop and Beauty Salon. All rights reserved.</div>
      </footer>
    </div>
  );
}

export default App;
