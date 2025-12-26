"use client";
import { CheckCircle } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import BookingModal from '@/app/booking/bookingScreen';

export default function OffersPage() {
    const [isBookingOpen, setIsBookingOpen] = useState(false);

    return (
        <div className="w-full">
            {/* Header Section */}
            <div className="details-page-header-section flex flex-col items-center justify-center">
                <h1>Whiter Teeth in One Visit - $299 Whitening in Levittown, PA</h1>
                <h2>
                    Your Camera-Ready Smile Starts Here
                </h2>
            </div>

            {/* Welcome Offer Section */}
            <div className="max-w-7xl mx-auto text-center py-10 px-4">
                <h2 className="text-xl md:text-3xl font-bold mb-2">Achieve a Whiter Smile with Our $299 Whitening Treatment in Levittown, PA</h2>
                <p className="mb-2">A brighter smile can change how you feel in every moment - from the way you greet people to how confidently you show up in photos. At <strong>White Hill Dental</strong>, our <strong> $299 in-office whitening </strong> is designed to lift years of stains from coffee, tea, wine, and everyday life - revealing a fresher, more youthful smile in just one visit.</p>
                <p className="mb-2">With advanced whitening technology and guidance from our experienced cosmetic team, you get a safer and more predictable result than any supermarket kit can offer - no wait, no hassle, no disappointment.</p>
                <p className="mb-2 p-4">Patients visit us from <strong> Levittown (19054, 19055, 19056, 19057)</strong> and nearby <strong>Fairless Hills (19030), Fallsington (19054), Bristol & Tullytown (19007) </strong> for professional whitening that looks natural - not artificially bright. When searching for <strong> teeth whitening near me </strong>, your answer is right here at White Hill Dental.</p>
                
                <button 
                    onClick={() => setIsBookingOpen(true)}
                    className="bg-primary text-white px-6 py-2 rounded font-semibold shadow hover:bg-primary/90 transition"
                >
                    Unlock My $299 Whitening Deal Now
                </button>
            </div>

            {/* Main Offer Section */}
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 py-8 px-4">
                <div className="w-full md:w-1/2 flex justify-center">
                    <Image src="/Images/banners/woman-patient-dentist.jpg" alt="Teeth Whitening" width={400} height={350} className="rounded-lg shadow-lg object-cover w-full h-auto max-h-[350px]" />
                </div>
                <div className="w-full md:w-1/2">
                        <h2 className="text-xl md:text-2xl font-bold mb-4 ">Why Patients Love Our $299 Whitening Experience</h2>
                        <ul className="space-y-4 text-left">
                        <li className="flex items-start gap-3">
                            <span className="text-primary mt-1"><CheckCircle /></span>
                            <div>
                                <h3 className="text-base font-semibold">Personalized Whitening for Natural-Looking Results</h3>
                                <div>Every smile is different - so your whitening should be too. We customize your treatment based on your current shade and sensitivity level, helping you achieve a brighter smile that still looks beautifully natural.</div>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-primary mt-1"><CheckCircle /></span>
                            <div>
                                <h3 className="text-base font-semibold">A Whiter Smile in Just One Appointment</h3>
                                <div>Busy day? No problem. Our advanced whitening system works quickly, lifting deep stains - from coffee, tea, wine, and more - in a single visit. </div>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-primary mt-1"><CheckCircle /></span>
                            <div>
                            <h3 className="text-base font-semibold">Long-Lasting Brightness You Can Maintain</h3>
                            <div>We don’t stop once the whitening is done - our team provides simple after-care guidance so you can keep your fresh new look shining for months to come.</div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Why Choose Us Section */}
            <div className="w-full details-page-header-section text-left text-white py-10 px-4">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-xl md:text-3xl font-bold mb-4">Your Trusted Choice for Teeth Whitening in Levittown, PA</h2>
                    <p className="mb-4">Patients throughout <strong> Levittown and Bucks County </strong>love choosing White Hill Dental for cosmetic care - here’s why:</p>
                    <ul className="space-y-2 text-base">
                        <li className="flex items-center gap-2"><CheckCircle size={18}/>Whitening solutions customized to your tooth shade and sensitivity level</li>
                        <li className="flex items-center gap-2"><CheckCircle size={18}/>A supportive team that explains every step with clarity and care</li>
                        <li className="flex items-center gap-2"><CheckCircle size={18}/>Modern whitening technology designed for long-lasting brightness</li>
                        <li className="flex items-center gap-2"><CheckCircle size={18}/>An easily accessible office with welcoming amenities for all ages</li>
                        <li className="flex items-center gap-2"><CheckCircle size={18}/>Cosmetic results that look natural - never too bright or artificial</li>
                    </ul>
                </div>
            </div>

            {/* What to Expect Section */}
            <div className="max-w-5xl mx-auto py-12 px-4">
                <h2 className="text-xl md:text-3xl font-semibold mb-4 text-center">One Appointment to a Brighter Smile - What Happens</h2>
                <p className="text-center mb-8">Here’s how we make whitening simple and comfortable from start to finish:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-lg shadow p-6 flex items-center gap-4">
                        <span className="text-primary text-2xl"><CheckCircle /></span>
                        <span className="font-semibold"><strong>Warm Welcome</strong> - We greet you with a friendly smile and guide you comfortably through a quick check-in.</span>
                    </div>
                    <div className="bg-white rounded-lg shadow p-6 flex items-center gap-4">
                        <span className="text-primary text-2xl"><CheckCircle /></span>
                        <span className="font-semibold"><strong>Smile + Shade Evaluation</strong> - Our team examines your teeth, discusses your goals, and confirms whitening is the perfect fit for you.</span>
                    </div>
                    <div className="bg-white rounded-lg shadow p-6 flex items-center gap-4">
                        <span className="text-primary text-2xl"><CheckCircle /></span>
                        <span className="font-semibold"><strong>Professional Whitening Session</strong> - Sit back and relax while our advanced whitening formula works to lift tough stains - often in under an hour.</span>
                    </div>
                    <div className="bg-white rounded-lg shadow p-6 flex items-center gap-4">
                        <span className="text-primary text-2xl"><CheckCircle /></span>
                        <span className="font-semibold"><strong>Keep the Glow Going</strong> - We’ll share easy aftercare tips to help you maintain that fresh, bright smile as long as possible.</span>
                    </div>
                </div>
                <p className="text-center mt-8">At <strong>White Hill Dental</strong>, your whitening appointment is simple, comfortable, and built to give you a smile you’ll feel proud to share.</p>
                <div className="flex justify-center mt-8">
                    <button 
                        onClick={() => setIsBookingOpen(true)}
                        className="bg-primary text-white px-6 py-2 rounded font-semibold shadow hover:bg-primary/90 transition"
                    >
                        Unlock My $299 Whitening Deal Now
                    </button>
                </div>
            </div>

            {/* Booking Modal */}
            <BookingModal open={isBookingOpen} setOpen={setIsBookingOpen} />
        </div>
    );
} 